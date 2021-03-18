const currencyOneSelector = document.getElementById('currency-one');
const currencyTwoSelector = document.getElementById('currency-two');

const currencyOneVal = document.getElementById('currency-one-value');
const currencyTwoVal = document.getElementById('currency-two-value');

const swapButton = document.getElementById('swap');
const rateInfo = document.getElementById('rate');

https://api.exchangeratesapi.io/latest?base=USD

function calculateExchange() {
  const url = 'https://api.exchangeratesapi.io/latest?';
  fetch(`${url}base=${currencyOneSelector.value}`)
    .then(res => res.json())
    .then(data => {
      if (currencyOneSelector.value === currencyTwoSelector.value) {
        rate = 1;
      } else {
        rate = data.rates[currencyTwoSelector.value].toFixed(2);
      }

      rateInfo.innerHTML =
        `1 ${currencyOneSelector.value} = ${rate} ${currencyTwoSelector.value}`;

      currencyTwoVal.innerHTML = currencyOneVal.value * rate;
    });
}



function swap() {
  console.log('swapping yo');
}


// Event listeners for currency selectors
[currencyOneSelector, currencyTwoSelector].forEach(selector => {
  selector.addEventListener('change', calculateExchange);
});

// Event listener for input value
currencyOneVal.addEventListener('input', calculateExchange);

// Event listener for swap button
swapButton.addEventListener('click', swap);


calculateExchange();
