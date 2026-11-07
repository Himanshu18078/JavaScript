const orderDetail = {
  orderId : 1234,
  food : ["Pizza" , "coke" , "Biryani"],
  totalCost : 620,
  customerName : "Himanshu Bisht",
  customerLocatin : "ABCDE",
  resaurentAddress : "vwxyz",
  orderStatus : false
}
function placeOrder(orderDetail){
  console.log(`${orderDetail.totalCost} , Payment is in progress`);
  return new Promise((resolve , reject) => {
    setTimeout(()=>{
    console.log("Payment is recieved and order get placed...");
    orderDetail.orderStatus = true;
    resolve(orderDetail);
  } , 3000);
  })
}

function preparOrder(orderDetail){
  console.log("Your food preparation has started...");
  return new Promise((resolve , reject) => {
    setTimeout(()=>{
    console.log("Your order is prepared...");
    resolve(orderDetail);
  },3000)
  
  })
  
}

function pickupOrder(orderDetail){
  console.log("Delivery is on the way...");
  return new Promise((resolve , reject) => {
    setTimeout(()=>{
    console.log("Your order is picked up...");
    resolve(orderDetail);
  },3000);
  })
  
}

function deliverOrder(orderDetail){
  console.log("Partner is on the way to deliver the order...");
  return new Promise((resolve , reject) => {
    setTimeout(()=>{
    console.log("Order deliverd successfully...");
    resolve(orderDetail);
  },3000)
  })
}
placeOrder(orderDetail)
.then((orderDetail)=> preparOrder(orderDetail))
.then((orderDetail) => pickupOrder(orderDetail))
.then((orderDetail)=> deliverOrder(orderDetail))

/*
placeOrder(preparingOrder(pickupOrder));
*/
// placeOrder(orderDetail , (orderDetail)=>{
//   preparingOrder(orderDetail , ()=>{
//     pickupOrder(()=>{
//       deliverOrder();
//     });
//   });
// })

