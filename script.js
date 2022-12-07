function inflationCalculator() {
  let inflationRate = document.querySelector("#inflationRate");
  let money = document.querySelector("#money");
  let years = document.querySelector("#years");

  money = parseFloat(money.value);
  inflationRate = parseFloat(inflationRate.value);
  years = parseInt(years.value);

  //  Formula za izracunavanje inflacije.

  let worth = money + money * (inflationRate / 100);

  for (let i = 1; i < years; i++) {
    worth += worth * (inflationRate / 100);
  }

  worth = worth.toFixed(2);

  let newElement = document.createElement("p");
  newElement.className = "new-value";
  newElement.textContent = `Danasnjih ${money} eura vredi isto kao ${worth} eura za ${years} godina`;
  document.querySelector(".container").appendChild(newElement)
}
