function getSoldOut(n) {
  bool=dropoffs[n].deliveries[n].soldOut;
  return bool;
}

function getName(n) {
  name=dropoffs[n].deliveries[n].restaurantName;
  return name;
}

function getDropOff(n) {
  time=dropoffs[n].deliveries[n].dropoff;
  return time;
}

function testSOldOut() {
  console.log("SOLD OUT TEST")

  total=0;
  for (n=0; n<4; n++){
    boolean=getSoldOut(n);
    if(boolean===false){
      console.log("Passed")
    }
    else {
      total++;
      console.log("Failed")
    }
  }
  Total(total);
}

function testDropoff() {
  console.log("DROPOFF TEST")
  total=0;
  Time1=getDropOff(0);
  Time2=getDropOff(1);
  Time3=getDropOff(2);
  Time4=getDropOff(3);


  if(Time1==="11:15:00"){
    console.log("Passed")
  }
  else {
    total++;
  }
  if(Time2==="11:50:00"){
    console.log("Passed")
  }
  else {
    total++;
  }
  if(Time3==="11:55:00"){
    console.log("Passed")
  }
  else {
    total++;
  }
  if(Time4==="12:00:00"){
    console.log("Passed")
  }
  else {
    total++;
  }

  Total(total);
}

function testName() {
  console.log("NAME TEST")

  total=0;
  Name1=getName(0);
  Name2=getName(1);
  Name3=getName(2);
  Name4=getName(3);

  if(Name1==="Nacho's Mexican Grill"){
    console.log("Passed")
  }
  else {
    total++;
  }
  if(Name2==="Which Wich"){
    console.log("Passed")
  }
  else {
    total++;
  }
  if(Name3==="Erbert & Gerbert's Sandwich Shop"){
    console.log("Passed")
  }
  else {
    total++;
  }
  if(Name4==="Eddington's"){
    console.log("Passed")
  }
  else {
    total++;
  }

  Total(total);
}



function Total(number) {
  if(number==0){
    console.log("All Tests Passed")
  }
  else {
    console.log( number+" Tests Failed")

  }
}

dropoffs= [
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
];

testSOldOut();
console.log();
testName();
console.log();
testDropoff();
