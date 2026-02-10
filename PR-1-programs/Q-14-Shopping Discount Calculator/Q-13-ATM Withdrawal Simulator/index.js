let balance = 10000;



document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault()

    let amt = Number(document.getElementById("number").value)

    let result = document.getElementById("result")

    if(amt > balance){
        result.innerText = "❌ Insufficient  Balance"
    }else if(amt % 100 !=0){
        result.innerText = "⚠️ Enter Amount in multiple of 100"
    }else{
        balance -= amt;
        result.innerText = "✅ Withdrawal Successful | Remaining  Balance: " + balance;
    }
})