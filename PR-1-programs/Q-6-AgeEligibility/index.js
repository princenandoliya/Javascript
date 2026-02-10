document.getElementById("form").addEventListener("submit", (e) => {

    e.preventDefault()

    let submit = Number(document.getElementById("submit").value)

    let result = document.getElementById("result")

    if (submit < 18) {
        result.textContent = "You Are Not Eligible For Vote And Drive"
    } else if (submit >= 18 && submit < 60) {
        result.textContent = "You Are Eligiblr For Vote And Drive"
    } else {
        result.textContent = "you Are Senior Citizen"
    }
})