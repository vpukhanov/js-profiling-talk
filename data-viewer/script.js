const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("close-modal");
const prefillDataBtn = document.getElementById("prefill-data");
const refreshDataBtn = document.getElementById("refresh-data");
const modal = document.getElementById("modal");
const dataSummary = document.getElementById("data-summary");

let modalOpenCount = 0;
let incomeStats = [];
let spendingStats = [];

function createLargeDataSet() {
  return new Array(500000).fill(null).map(() => ({ value: Math.random() }));
}

function summarizeStats() {
  const totalIncome = incomeStats.reduce(
    (total, income) =>
      total + income.reduce((acc, next) => acc + next.value, 0),
    0,
  );
  const totalSpending = spendingStats.reduce(
    (total, income) =>
      total + income.reduce((acc, next) => acc + next.value, 0),
    0,
  );
  return `Total income: ${totalIncome.toFixed(2)}, spending: ${totalSpending.toFixed(2)}`;
}

function openModal() {
  modal.classList.remove("hidden");
  refreshStats();
}

function refreshStats() {
  incomeStats.push(createLargeDataSet());
  spendingStats.push(createLargeDataSet());
  dataSummary.textContent = summarizeStats();
}

function closeModal() {
  modal.classList.add("hidden");
  spendingStats = [];
}

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
refreshDataBtn.addEventListener("click", refreshStats);
prefillDataBtn.addEventListener("click", () => {
  for (let i = 0; i < 50; i++) {
    incomeStats.push(createLargeDataSet());
    spendingStats.push(createLargeDataSet());
  }
});
