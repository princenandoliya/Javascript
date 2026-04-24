let products = [
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
];



const productlist = document.getElementById("productlist")

function show() {

    productlist.innerHTML = ""
    products.forEach((n) => {

        productlist.innerHTML += `
    <div class="col-md-4 mt-3">
    <div class="card product-card">
  <img src="${n.img}" class="card-img-top " alt="${n.name}">
  <div class="card-body text-center">
    <h5 class="card-title">${n.name}</h5>
    <h3 class="fw-bold">₹${n.price}</h3>
     <button class="btn btn-outline-info" onclick="updateproductModal(${n.id})">Edit</button>
    <button class="btn btn-outline-primary" onclick="add(${n.id})">Add To Cart</button>
    <button class="btn btn-outline-warning" onclick="Delet(${n.id})">Delet</button>
  </div>
</div>
    </div>
    `
    })
}
show()

function Delet(id) {
    products = products.filter((n) => n.id !== id)
    show()

}

function updateproductModal(id) {
    const updateproductModal = document.getElementById("updateproductModal")

    let modal = new bootstrap.Modal(updateproductModal)

    modal.show()

    const product = products.find((a) => a.id === id)

    if (!product) {
        alert("product not found")
        return;
    }


    let index = products.findIndex((a) => a.id === id)

    if (index === -1) {
        alert("product not found")
        return;
    }

    document.getElementById("updateproductname").value = products[index].name
    document.getElementById("updateproductprice").value = products[index].price
    document.getElementById("updateproductimg").value = products[index].img


    const form = document.getElementById("updateProductForm")
    form.onsubmit = function (e) {


        e.preventDefault();


        let name = document.getElementById("updateproductname").value
        let price = document.getElementById("updateproductprice").value
        let img = document.getElementById("updateproductimg").value

        products[index] = {
            ...products[index],
            name,
            price,
            img,
        };

        modal.hide()

        show();
    };

};




function checkout() {
  if (cartItems.length === 0) {
    alert("no items in cart add some items to  check out")
  } else {
    alert("order placed successfully")

    cartItems = [];
    
  }
}

let sortSelect = document.getElementById("sortSelect");

sortSelect.addEventListener("click", function () {
  let type = sortSelect.value;

  if (type === "low") {
    products.sort((a, b) => a.price - b.price);
  } else if (type === "high") {
    products.sort((a, b) => b.price - a.price);
  }

  show(products);
}); 





function showModal(){
    let productlist1 = document.getElementById("productlist1")

    let modal = new bootstrap.Modal(productlist1)
    modal.show()
    showCartData()
    
    
}

let cartItems = JSON.parse(localStorage.getItem("cartdata")) || []
function add(id){
    try {
        let product = cartItems.find((prod)=> prod.id === id)
        if(product){
            product.qty++;
        }else{
            product = products.find((prod)=>prod.id === id)
            cartItems.push({...product,qty: 1})
        }

        localStorage.setItem("cartdata",JSON.stringify(cartItems))
        
        
    } catch (error) {
        console.log(error)
        
    }

    alert("product added successfully")
}


function showCartData(){
    try {
        let cartIlist = document.getElementById("carttable")
        cartIlist.innerHTML = ""

        cartItems.forEach((n)=>{
            cartIlist.innerHTML += `
            <tr>
                <td>
<img src="${n.img}" style="width: 70px" alt=""></td>
      <td>${n.name} </td>
      <td>
      <div class="d-flex gap-3">
      <button class = "btn btn-outline-success"  onclick="increase(${n.id})">+</button>
      <h4>${n.qty}</h4>
      <button class = "btn btn-outline-danger"  onclick="decrease(${n.id})">-</button>
      </div>
      </td>
      <td>₹${n.qty * n.price}</td>
      <td><button class = "btn btn-outline-danger" onclick="remove(${n.id})">Remove</button></td>
            </tr>` 


        })
        
    } catch (error) {
        
    }
}
function remove(id) {
  cartItems = cartItems.filter((n) => n.id !== id)
  showCartData();localStorage.setItem("cartdata", JSON.stringify(cartItems));
  showCartData();

}


