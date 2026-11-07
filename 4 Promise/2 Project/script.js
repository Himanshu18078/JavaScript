const p1 = new Promise((resolve , reject) => {
  let result = false;
  if(result){
    resolve("Data fetched successfully...");
  }else{
    reject("Somthing went wrong...");
  }
})
p1
.then((data)=>{
  console.log(data);
})
.catch((error)=>{
  console.log(error);
})