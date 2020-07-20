<style scoped>
@import "../assets/js/jQuery-Seat-Charts/jquery.seat-charts.css";
@import "../assets/js/jQuery-Seat-Charts/style.css";
.zone_selection {
  min-height: 76.5vh;
}
</style>
<template>
  <div class="zone_selection m-3">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <div class="row">
            <div id="seat-map">
              <div class="front-indicator">Scene</div>
            </div>
          </div>
          <div class="row">
            <div id="legend"></div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="booking-details">
            <h4>Places Choisies (<span id="counter">0</span>):</h4>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Place</th>
                  <th>Rang</th>
                  <th>Profil Reduction</th>
                  <th>Prix</th>
                  <th></th>
                </tr>
              </thead>
              <tbody id="selected-seats"></tbody>
            </table>
            <div class="my-3">
              <span>Total:</span><b>$<span id="total">0</span></b>
            </div>

            <button class="btn btn-primary">Confirmer &raquo;</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import "../assets/js/jQuery-Seat-Charts/jquery.seat-charts.js";
export default {
  mounted() {
    var firstSeatLabel = 1;
    var prixDebase = 30;
    var tauxReduction = 1;
    $(document).ready(function () {
      var $cart = $("#selected-seats"),
        $counter = $("#counter"),
        $total = $("#total"),
        sc = $("#seat-map").seatCharts({
          map: [
            "p[1_1]p[1_2]p[1_3]_________p[1_4]p[1_5]p[1_6]",
            "p[2_1]p[2_2]p[2_3]_________p[2_4]p[2_5]p[2_6]",
            "__b[3_1]b[3_2]b[3_3]_____b[3_4]b[3_5]b[3_6]__",
            "__b[4_1]b[4_2]b[4_3]_____b[4_4]b[4_5]b[4_6]__",
            "____o[5_1]o[5_2]o[5_3]o[5_4]o[5_5]o[5_6]_____",
            "____o[6_1]o[6_2]o[6_3]o[6_4]o[6_5]o[6_6]_____",
          ],
          seats: {
            p: {
              price: 1.5 * prixDebase,
              classes: "Poulailler", //your custom CSS class
              category: "Poulailler",
            },
            b: {
              price: 1.2 * prixDebase,
              classes: "Balcon", //your custom CSS class
              category: "Balcon",
            },
            o: {
              price: 1 * prixDebase,
              classes: "Orchestre", //your custom CSS class
              category: "Orchestre",
            },
          },
          naming: {
            top: false,
            getLabel: function (character, row, column) {
              console.log(character, row, column);
              if (firstSeatLabel < 7) return firstSeatLabel++;
              else {
                firstSeatLabel = 1;
                return firstSeatLabel++;
              }
            },
          },
          legend: {
            node: $("#legend"),
            items: [
              ["p", "available", "Poulailler"],
              ["b", "available", "Balcon"],
              ["o", "available", "Orchestre"],
              ["u", "unavailable", "Non Disponible"],
            ],
          },
          click: function () {
            if (this.status() == "available") {
              //let's create a new <li> which we'll add to the cart items
              $(
                "<tr>" +
                  "<td>" +
                  this.settings.id[2] +
                  "</td>" +
                  "<td>" +
                  this.settings.id[0] +
                  "</td>" +
                  '<td><select name="profil" class="profil_spec" seatId=' +
                  this.settings.id +
                  ">" +
                  '<option value="AUCUN">Aucun</option>' +
                  '<option value="ETUDIANT">Etudiant</option>' +
                  '<option value="MILITAIRE">Militaire</option>' +
                  '<option value="SENIOR">Senior</option>' +
                  "</select></td>" +
                  '<td class="prixTicket">' +
                  this.data().price.toFixed(2) +
                  "</td>" +
                  '<td><a href="#" class="cancel-cart-item"><i class="fas fa-trash-alt"></i></a></td>' +
                  " </tr>"
              )
                .attr("id", "cart-item-" + this.settings.id)
                .attr("profil", "AUCUN")
                .data("seatId", this.settings.id)
                .attr("price", this.data().price)
                .appendTo($cart);

              let items_select = document.querySelectorAll(".profil_spec");
              items_select.forEach((item) =>
                item.addEventListener("change", () => {
                  item.parentElement.parentElement.setAttribute(
                    "profil",
                    item.value
                  );

                  switch (item.value) {
                    case "AUCUN":
                      tauxReduction = 1;
                      break;
                    case "ETUDIANT":
                      tauxReduction = 0.8;
                      break;
                    default:
                      tauxReduction = 0.65;
                  }

                  item.parentElement.nextSibling.innerHTML = (
                    sc.get(item.getAttribute("seatId")).data().price *
                    tauxReduction
                  ).toFixed(2);

                  item.parentElement.parentElement.setAttribute(
                    "price",
                    (
                      sc.get(item.getAttribute("seatId")).data().price *
                      tauxReduction
                    ).toFixed(2)
                  );

                  let total = 0;
                  document
                    .querySelectorAll(".prixTicket")
                    .forEach(
                      (item) => (total = total + parseFloat(item.innerHTML))
                    );
                  $total.text(total);
                })
              );

              let total = 0;
              document
                .querySelectorAll(".prixTicket")
                .forEach(
                  (item) => (total = total + parseFloat(item.innerHTML))
                );
              $total.text(total);

              /*
               * Lets update the counter and total
               *
               * .find function will not find the current seat, because it will change its stauts only after return
               * 'selected'. This is why we have to add 1 to the length and the current seat price to the total.
               */
              $counter.text(sc.find("selected").length + 1);

              return "selected";
            } else if (this.status() == "selected") {
              //update the counter
              $counter.text(sc.find("selected").length - 1);

              //remove the item from our cart
              $("#cart-item-" + this.settings.id).remove();
              let total = 0;
              document
                .querySelectorAll(".prixTicket")
                .forEach(
                  (item) => (total = total + parseFloat(item.innerHTML))
                );
              $total.text(total);

              //seat has been vacated
              return "available";
            } else if (this.status() == "unavailable") {
              //seat has been already booked
              return "unavailable";
            } else {
              return this.style();
            }
          },
        });

      //this will handle "[cancel]" link clicks
      $("#selected-seats").on("click", ".cancel-cart-item", function () {
        //let's just trigger Click event on the appropriate seat, so we don't have to repeat the logic here
        sc.get($(this).parents("tr:first").data("seatId")).click();
      });

      //let's pretend some seats have already been booked
      sc.get(["1_2", "4_1"]).status("unavailable");
    });

    // function recalculateTotal() {
    //   document
    //     .querySelectorAll(".prixTicket")
    //     .forEach((item) => (total = total + parseFloat(item.innerHTML)));
    //   console.log(total);
    //   return total;
    // }
  },
  methods: {},
};
</script>
