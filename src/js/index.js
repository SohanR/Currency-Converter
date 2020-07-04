const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');

const amountOne = document.getElementById('amount-one')
const amountTwo = document.getElementById('amount-two')

const rate = document.getElementById('rate')
const swap = document.getElementById('swap')


// Event listeners
currencyOne.addEventListener('change', calculate)
amountOne.addEventListener('input', calculate)

currencyTwo.addEventListener('change', calculate)
amountTwo.addEventListener('input', calculate)

swap.addEventListener('click', () => {
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    calculate();
})


// convert function
function calculate() {
    const currency_one = currencyOne.value;
    const currency_two = currencyTwo.value;


    fetch(`https://free.currconv.com/api/v7/convert?q=${currency_one}_${currency_two}&compact=ultra&apiKey=f2bbba04efe1ef403567`)
        .then(res => res.json())
        .then(data => {

            const ratevalue = data[`${currency_one}_${currency_two}`];

            rate.innerHTML = `1 ${currency_one} = ${ratevalue} ${currency_two}`;

            amountTwo.value = (amountOne.value * ratevalue).toFixed(2);
        })

}

calculate()


