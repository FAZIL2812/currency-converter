document.getElementById('convertBtn').addEventListener('click', convertCurrency);

const exchangeRates = {
    USD: { USD: 1, EUR: 0.85, GBP: 0.75, INR: 74 },
    EUR: { USD: 1.18, EUR: 1, GBP: 0.88, INR: 87 },
    GBP: { USD: 1.33, EUR: 1.14, GBP: 1, INR: 99 },
    INR: { USD: 0.013, EUR: 0.011, GBP: 0.010, INR: 1 }
};

function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (!amount || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    const result = amount * rate;

    document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
}
