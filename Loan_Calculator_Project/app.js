//Listen for submit
document.getElementById("loan-form").addEventListener("submit", function (e) {
    //Hide result
    document.getElementById("result").style.display = "none";

    //Show loader icon
    document.getElementById("loading").style.display = "block";

    setTimeout(calculateResult, 2000);

    e.preventDefault();
});

function calculateResult() {
    //UI Variable
    const amount = document.getElementById("amount");
    const interest = document.getElementById("interest");
    const years = document.getElementById("years");

    const monthlyPayment = document.getElementById("monthly-payment");
    const totalPayment = document.getElementById("total-payment");
    const totalInterest = document.getElementById("total-interest");

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value * 12);

    //compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);

        //show result
        document.getElementById("result").style.display = "block";

        //hide loader
        document.getElementById("loading").style.display = "none";
    } else {
        showError("Please check the inputs");
    }
}

function showError(error) {
    //show result
    document.getElementById("result").style.display = "none";

    //hide loader
    document.getElementById("loading").style.display = "none";

    //Create a div
    const errorDiv = document.createElement("div");

    //get elements
    const card = document.querySelector(".card");
    const heading = document.querySelector(".heading");

    errorDiv.className = "alert alert-danger";

    //add text
    errorDiv.appendChild(document.createTextNode(error));

    //Insert errorDiv above heading
    card.insertBefore(errorDiv, heading);

    //clear error after 3 secs
    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector(".alert").remove();
}