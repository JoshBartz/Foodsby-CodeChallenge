<template>


  <div class="hello">

    <div>



       <div id="Today" style="position: absolute; left: 510px; top: 65px;">
            <button @click="n=0">Today</button>
       </div>
       <div style="position: absolute; left: 560px; top: 65px;">
            <button @click="n=1">Tuesday</button>
        </div>
        <div style="position: absolute; left: 623px; top: 65px;">
            <button @click="n=1">Wednesday</button>
        </div>
        <div style="position: absolute; left: 702px; top: 65px;">
            <button @click="n=2">Thursday</button>
        </div>
        <div style="position: absolute; left: 770px; top: 65px;">
            <button @click="n=3">Friday</button>
         </div>

     </div>

      <ul>
              <li v-for="day in dropoffs.slice(0,1)">
                  <ul>
                      <li v-for="store in dropoffs[n].deliveries">


                  <div style="width: 300px; border-color:blue;
                    border-style:solid; border-width:1;display:left;">
                    <span id="long">{{store.restaurantName}}.</span>
                  </div>

                  <div>
                      <h1 style="display:inline-block; font-size: 15px;">DeliveryTime:</h1>
                       {{day.deliveries[n].dropoff}}


                  </div>

                  <div>
                      <h1 style="display:inline-block; font-size:15px">Order by:</h1>
                        {{day.deliveries[n].cutoff}}
                  </div>

                  <input onclick="this.value='Meals Ordered'" type="button" value="Select Resturaunt" id="myButton1" />

                  <h1 v-if="day.deliveries[n].sellingOut===true && day.deliveries[n].isPastCutoff===false">Selling out fast, order now!!</h1>
                  <h1 v-if="day.deliveries[n].isPastCutoff===true">This location is no longer avaliable </h1>
                  <h1 v-if="day.deliveries[n].soldOUt===true">Sold Out</h1>



                  <hr color="red"/>
                      </li>
                   </ul>
              </li>
            </ul>
  </div>

</template>

<script src="./Getter.js"></script>

<script>

export default {
  name: 'hello',
  data () {
    return {

    n:0,

      msg: 'Welcome to Your Vue.js App',
      color:"red",



            dropoffs: [
                {
                  "day": "Monday",
                  "deliveries": [
                    {
                      "deliveryId": 47,
                      "storeId": 1,
                      "restaurantName": "Nacho's Mexican Grill",
                      "logoUrl": "https://www.placehold.it/300X200",
                      "cutoff": "10:00:00",
                      "dropoff": "11:15:00",
                      "soldOut": false,
                      "sellingOut": false,
            	        "isPastCutoff": false,
                      "isOrderPlaced": false
                    },
                    {
                      "deliveryId": 25,
                      "storeId": 2,
                      "restaurantName": "Jersey Mike's Subs",
                      "logoUrl": "https://www.placehold.it/300X200",
                      "cutoff": "10:30:00",
                      "dropoff": "11:15:00",
                      "soldOut": false,
                      "sellingOut": false,
                      "isPastCutoff": false,
                      "isOrderPlaced": false
                    },
                    {
                      "deliveryId": 34,
                      "storeId": 3,
                      "restaurantName": "Mort's Delicatessen",
                      "logoUrl": "https://www.placehold.it/300X200",
                      "cutoff": "09:30:00",
                      "dropoff": "11:35:00",
                      "soldOut": false,
                      "sellingOut": true,
                      "isPastCutoff": false,
                      "isOrderPlaced": false
                    },
                    {
                      "deliveryId": 87,
                      "storeId": 4,
                      "restaurantName": "Ham's Sandwich Shop",
                      "logoUrl": "https://www.placehold.it/300X200",
                      "cutoff": "10:30:00",
                      "dropoff": "12:00:00",
                      "soldOut": true,
                      "sellingOut": true,
                      "isPastCutoff": true,
                      "isOrderPlaced": false
                    }
                  ]
                },
                {
                  "day": "Tuesday",
                  "deliveries": [
                    {
                      "deliveryId": 68,
                      "storeId": 5,
                      "restaurantName": "Firehouse Subs",
                      "logoUrl": "https://www.placehold.it/300X200",
                      "cutoff": "10:30:00",
                      "dropoff": "11:20:00",
                      "soldOut": false,
                      "sellingOut": false,
                      "isPastCutoff": true,
                      "isOrderPlaced": false
                    },
                    {
                      "deliveryId": 55,
                      "storeId": 6,
                      "restaurantName": "Which Wich",
                      "logoUrl": "https://www.placehold.it/300X200",
                      "cutoff": "10:30:00",
                      "dropoff": "11:50:00",
                      "soldOut": false,
                      "sellingOut": false,
                      "isPastCutoff": true,
                      "isOrderPlaced": false
                    },
                    {
                      "deliveryId": 22,
                      "storeId": 7,
                      "restaurantName": "Gion Restaurant",
                      "logoUrl": "https://www.placehold.it/300X200",
                      "cutoff": "10:30:00",
                      "dropoff": "12:00:00",
                      "soldOut": false,
                      "sellingOut": false,
                      "isPastCutoff": true,
                      "isOrderPlaced": false
                    },
                    {
                      "deliveryId": 62,
                      "storeId": 8,
                      "restaurantName": "Living Waters Market & Cafe",
                      "logoUrl": "https://www.placehold.it/300X200",
                      "cutoff": "10:15:00",
                      "dropoff": "12:20:00",
                      "soldOut": false,
                      "sellingOut": false,
                      "isPastCutoff": true,
                      "isOrderPlaced": false
                    }
                  ]
                },
                {
                  "day": "Thursday",
                  "deliveries": [
                    {
                      "deliveryId": 28,
                      "storeId": 2,
                      "restaurantName": "Jersey Mike's Subs",
                      "logoUrl": "https://www.placehold.it/300X200",
                      "cutoff": "10:30:00",
                      "dropoff": "11:15:00",
                      "soldOut": false,
                      "sellingOut": false,
                      "isPastCutoff": true,
                      "isOrderPlaced": false
                    },
                    {
                      "deliveryId": 9,
                      "storeId": 9,
                      "restaurantName": "Leeann Chin",
                      "logoUrl": "https://www.placehold.it/300X200",
                      "cutoff": "10:15:00",
                      "dropoff": "11:35:00",
                      "soldOut": false,
                      "sellingOut": false,
                      "isPastCutoff": true,
                      "isOrderPlaced": false
                    },
                    {
                      "deliveryId": 13,
                      "storeId": 10,
                      "restaurantName": "Erbert & Gerbert's Sandwich Shop",
                      "logoUrl": "https://www.placehold.it/300X200",
                      "cutoff": "10:00:00",
                      "dropoff": "11:55:00",
                      "soldOut": false,
                      "sellingOut": false,
                      "isPastCutoff": true,
                      "isOrderPlaced": false
                    }
                  ]
                },
                {
                  "day": "Friday",
                  "deliveries": [
                    {
                      "deliveryId": 15,
                      "storeId": 11,
                      "restaurantName": "Granite City",
                      "logoUrl": "https://www.placehold.it/300X200",
                      "cutoff": "10:15:00",
                      "dropoff": "11:30:00",
                      "soldOut": false,
                      "sellingOut": false,
                      "isPastCutoff": true,
                      "isOrderPlaced": false
                    },
                    {
                      "deliveryId": 97,
                      "storeId": 12,
                      "restaurantName": "Chili's Grill & Bar",
                      "logoUrl": "https://www.placehold.it/300X200",
                      "cutoff": "10:00:00",
                      "dropoff": "11:55:00",
                      "soldOut": false,
                      "sellingOut": false,
                      "isPastCutoff": true,
                      "isOrderPlaced": false
                    },
                    {
                      "deliveryId": 37,
                      "storeId": 13,
                      "restaurantName": "Godfather's Pizza",
                      "logoUrl": "https://www.placehold.it/300X200",
                      "cutoff": "10:15:00",
                      "dropoff": "11:55:00",
                      "soldOut": false,
                      "sellingOut": false,
                      "isPastCutoff": true,
                      "isOrderPlaced": false
                    },
                    {
                      "deliveryId": 36,
                      "storeId": 14,
                      "restaurantName": "Eddington's",
                      "logoUrl": "https://www.placehold.it/300X200",
                      "cutoff": "10:00:00",
                      "dropoff": "12:00:00",
                      "soldOut": false,
                      "sellingOut": false,
                      "isPastCutoff": true,
                      "isOrderPlaced": false
                    },
                    {
                      "deliveryId": 99,
                      "storeId": 15,
                      "restaurantName": "Quiznos",
                      "logoUrl": "https://www.placehold.it/300X200",
                      "cutoff": "10:30:00",
                      "dropoff": "12:00:00",
                      "soldOut": false,
                      "sellingOut": false,
                      "isPastCutoff": true,
                      "isOrderPlaced": false
                    }
                  ]
          }
  ]
}
},
 methods: {
    changer1: function () {
      // `this` inside methods points to the Vue instance
      n=0;
      },
    changer2: function (event) {
            // `this` inside methods points to the Vue instance
            n=1;
            },
    changer3: function (event) {
            // `this` inside methods points to the Vue instance
            n=2
            return n
            },
    changer4: function (event) {
            // `this` inside methods points to the Vue instance
            n=3;
            }
      }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color:"red";
}
ul {
    list-style-position: inside;
}
a {
  color: #42b983;
}
</style>
