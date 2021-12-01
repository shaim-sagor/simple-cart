function updateProduct(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;

    //update case total
    const productTotal = document.getElementById(product + "-total");
    productTotal.innerText = productNumber * price;

    // calculate total 
    totalCalculate();
};

// Get input value
function getInput(product) {
    const inputValue = document.getElementById(product + '-number');
    const inputNumber = parseInt(inputValue.value);
    return inputNumber;
};

//total calculation 
function totalCalculate() {
    // const phoneInput = document.getElementById('phone-number');
    // const phoneNumber = parseInt(phoneInput.value);
    const phoneTotal = getInput('phone') * 1219;

    // const caseInput = document.getElementById('case-number');
    // const caseNumber = parseInt(caseInput.value);
    const caseTotal = getInput('case') * 59;

    const subTotal = phoneTotal + caseTotal;
    //tax calculation
    const tax = subTotal / 10;

    const totalPrice = subTotal + tax;
    //update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

};

//phone handle
document.getElementById('phone-increase').addEventListener('click', function () {
    updateProduct('phone', 1219, true);

});
document.getElementById('phone-decrease').addEventListener('click', function () {
    updateProduct('phone', 1219, false);
});

//Case handle
document.getElementById('case-increase').addEventListener('click', function () {
    updateProduct('case', 59, true);

    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) + 1;
});

document.getElementById('case-decrease').addEventListener('click', function () {
    updateProduct('case', 59, false);

    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) - 1;
});