
fetch("https://fakestoreapi.com/products").then((data)=>
 {
 return data.json();
  }).then((objectdata) => {
    console.log(objectdata[0].title);
    let tabledata="";
    objectdata.map((values)=>{
        tabledata+=` 
          <div class="card" style="width: 28rem;">
          
        <img class="images" src="${values.image}" alt="Card image cap">
        <div class="card-body">
          <h4 class="card-title">${values.title}</h4><br>
          <h5 class="category">${values.category}</h5><br>
          <p class="card-text">${values.description}</p>-          
          <h4 class="card-price">₹${values.price}</h4>
          <a href="#" class="btn btn-primary">Order Now</a>
          <a href="#" class="btn btn-primary">View More</a>
        </div>
      </div>   `;
    });
    document.getElementById("cards"). innerHTML=tabledata;
   }).catch((err)=>{
    console.log(err);
   })



           