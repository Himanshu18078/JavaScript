// console.log("Himanshu");
// const p1 = fetch("https://api.github.com/users");

// const p2 = p1.then((data)=>{
//   return data.json()
// });

// p2.then((data)=>console.log(data));


fetch("https://api.github.com/users")
.then((data)=>{
  data.json()
  .then((data)=>{
    const parent = document.getElementById("parent");
    for(let i = 0; i< 30 ; i++){
        const img = document.createElement("img");
        img.src = data[i].avatar_url;
        parent.append(img);
        img.style.height = "60px";
        img.style.width = "60px";
    }
   console.log(data);
  })
  .catch((error)=>{
    console.log(error);
  })
})
.catch((error)=>{
  console.log(error);
})