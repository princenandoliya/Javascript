
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1999,
    img: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2499,
    img: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg"
  },
  {
    id: 3,
    name: "Laptop",
    price: 55999,
    img: "https://images.pexels.com/photos/18105/pexels-photo.jpg"
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: 799,
    img: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg"
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: 2999,
    img: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg"
  },
  {
    id: 6,
    name: "Men Shirt",
    price: 1299,
    img: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg"
  },
  {
    id: 7,
    name: "Smartphone",
    price: 19999,
    img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg"
  },
  {
    id: 8,
    name: "DSLR Camera",
    price: 45999,
    img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"
  },
  {
    id: 9,
    name: "Men Leather Jacket",
    price: 2999,
    img: "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg"
  },
  {
    id: 10,
    name: "Running Shoes",
    price: 2499,
    img: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"
  },
  {
    id: 11,
    name: "Sunglasses",
    price: 999,
    img: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg"
  },
  {
    id: 12,
    name: "Girl Shirt",
    price: 1199,
    img: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg"
  },
  {
    id: 13,
    name: "Coffee Maker",
    price: 3499,
    img: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg"
  },
  {
    id: 14,
    name: "Tablet",
    price: 15999,
    img: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg"
  },
  {
    id: 15,
    name: "LED Monitor",
    price: 8999,
    img: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg"
  }
];

products.forEach((a)=>{
    const productlist = document.getElementById("productlist")

    productlist.innerHTML +=`
    <div class="col-md-4 mt-3">
    <div class="card product-card rounded-4">
  <img src="${a.img}" class="card-img-top rounded-4" alt="${a.name}">
  <div class="card-body text-center">
    <h5 class="card-title">${a.name}</h5>
    <h3 class="fw-bold text-success">₹${a.price}</h3>
   
    <button class="btn btn-outline-primary" onclick="addTocart(${a.id})">Add To Cart</button>
  </div>
</div>
    </div>
    `
})

//local storage concept

// const data = {name: "electronic",qty: 1}

// localStorage.setItem("cartdata",JSON.stringify(data))

// const productdata = localStorage.getItem("cartdata")

// console.log("productdata",JSON.parse(productdata))

let cartItems = JSON.parse(localStorage.getItem("cartdata")) || []

console.log("cartItems",cartItems)

function addTocart(id){
  try {
    let product = cartItems.find((prod)=>prod.id === id);

    if (product) {
      product.qty++;
      
    } else {
      product = products.find((prod)=> prod.id === id)
      cartItems.push({...product, qty: 1})
      
    }


    localStorage.setItem("cartdata",JSON.stringify(cartItems))
    
  } catch (error) {
    console.log(error)
  } 

  alert("product added successfully")
}

 function showModal(){
    const cartItemslist = document.getElementById("cartItem-list")

    let modal = new bootstrap.Modal(cartItemslist)  
    modal.show()
    showCartData()
}

function showCartData(){
  try {
    
    const cartIlist = document.getElementById("carttable")
    cartIlist.innerHTML = ""

    cartItems.forEach((a)=>{
      cartIlist.innerHTML += `
      <tr>
      <td>
<img src="${a.img}" style="width: 70px" alt=""></td>
      <td>${a.name} </td>
      <td>
      <div class="d-flex gap-3">
      <button class = "btn btn-outline-success"  onclick="increase(${a.id})">+</button>
      <h4>${a.qty}</h4>
      <button class = "btn btn-outline-danger"  onclick="decrease(${a.id})">-</button>
      </div>
      </td>
      <td>₹${a.qty *a.price}</td>
      <td><button class = "btn btn-outline-danger" onclick="remove(${a.id})">Remove</button></td>
      </tr>`
    })


  } catch (error) {
    
  }
}

function increase (id){
  const product = cartItems.find((a)=> a.id === id);

  if(product){
    product.qty++;
  }
  updateLatestData();
}

function updateLatestData(){
  localStorage.setItem("cartdata",JSON.stringify(cartItems))

  showCartData()
}

function decrease (id){
  const product = cartItems.find((a)=> a.id === id)

  if(product){
    product.qty--;
  }
  if(product.qty <= 0){
    cartItems = cartItems.filter((a)=> a.id !== id)

  }


    updateLatestData();
}

function remove(id){
  cartItems = cartItems.filter((a)=> a.id !== id)

  
    updateLatestData();

}
