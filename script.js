const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  let prices = document.querySelectorAll(".price");
  let sum = 0;

  prices.forEach(priceElement => {
    sum += parseFloat(priceElement.innerText) || 0;
  });

  let table = document.querySelector("table");
  let totalRow = document.getElementById("total-row");

  if (totalRow) {
    totalRow.remove();
  }

  totalRow = document.createElement("tr");
  totalRow.id = "total-row";

  let totalCell = document.createElement("td");
  totalCell.colSpan = 3;
  totalCell.innerText = "Total Price: ";

  let totalValue = document.createElement("span");
  totalValue.id = "ans";
  totalValue.innerText = sum.toFixed(2);

  totalCell.appendChild(totalValue);
  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);