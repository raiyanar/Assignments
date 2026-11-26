const { useState, useMemo } = React;

// Exchange rates compared to 1 USD (no two values are the same)
const RATES = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 156.7,
};

const CURRENCIES = Object.keys(RATES);

export function CurrencyConverter() {
  const [amount, setAmount] = useState("1");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  // Recalculate only when AMOUNT or FROM currency changes.
  // We compute every currency at once, so changing "to" is just a lookup.
  const convertedAmounts = useMemo(() => {
    const value = Number(amount) || 0; // handles empty / invalid input
    const amountInUSD = value / RATES[fromCurrency];
    const all = {};
    CURRENCIES.forEach((code) => {
      all[code] = amountInUSD * RATES[code];
    });
    return all;
  }, [amount, fromCurrency]);

  const converted = convertedAmounts[toCurrency];

  return (
    <div className="converter">
      <h1>Currency Converter</h1>

      <label htmlFor="amount">Amount</label>
      <input id="amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />

      <label htmlFor="from">From</label>
      <select id="from" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
        {CURRENCIES.map((code) => (
          <option key={code} value={code}>
            {code}
          </option>
        ))}
      </select>

      <label htmlFor="to">To</label>
      <select id="to" value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
        {CURRENCIES.map((code) => (
          <option key={code} value={code}>
            {code}
          </option>
        ))}
      </select>

      <p className="result">
        {converted.toFixed(2)} {toCurrency}
      </p>
    </div>
  );
}
