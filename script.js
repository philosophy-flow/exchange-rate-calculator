const currencyOneSelector = document.getElementById('currency-one');
const currencyTwoSelector = document.getElementById('currency-two');

const currencyOneVal = document.getElementById('currency-one-value');
const currencyTwoVal = document.getElementById('currency-two-value');

const swapButton = document.getElementById('swap');
const rateInfo = document.getElementById('rate');

function calculateExchange() {
  const url = 'https://api.exchangeratesapi.io/latest?';
  fetch(`${url}base=${currencyOneSelector.value}`)
    .then(res => res.json())
    .then(data => {
      if (currencyOneSelector.value === currencyTwoSelector.value) {
        rate = 1;
      } else {
        rate = data.rates[currencyTwoSelector.value].toFixed(4);
      }

      rateInfo.innerHTML =
        `1 ${currencyOneSelector.value} = ${rate} ${currencyTwoSelector.value}`;

      currencyTwoVal.innerHTML = (currencyOneVal.value * rate).toFixed(0);
    });
}



function swap() {
  const tempValue = currencyOneSelector.value;
  currencyOneSelector.value = currencyTwoSelector.value;
  currencyTwoSelector.value = tempValue;
  calculateExchange();
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
