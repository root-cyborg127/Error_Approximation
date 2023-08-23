function calculateErrors() {
    const approximateValue = parseFloat(document.getElementById("approximate").value);
    const trueValue = parseFloat(document.getElementById("true").value);

    const absoluteError = Math.abs(approximateValue - trueValue);
    const relativeError = absoluteError / trueValue;
    const percentageError = (relativeError * 100).toFixed(2);

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
    <strong><p>Absolute Error: ${absoluteError}</p>
      <p>Relative Error: ${relativeError}</p>
      <p>Percentage Error: ${percentageError}%</strong></p>
    `;
}