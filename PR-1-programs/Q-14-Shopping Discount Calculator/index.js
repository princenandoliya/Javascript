document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault()

    let price = Number(document.getElementById("price").value)
    let discount = Number(document.getElementById("discount").value)

    let result = document.getElementById("result")

    let discountAmount = (price * discount) / 100
    let finalPrice = price - discountAmount

    result.innerText =
      "Discount Amount: ₹" + discountAmount +
      " | Final Price: ₹" + finalPrice
})
