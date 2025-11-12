const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicador");
const multiplicationTitle = document.querySelector("#multiplication-title span");
const multiplicationTable = document.querySelector("#multiplication-operations");

multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;
    const multiplicadorNumber = +multiplicationInput.value;

    if (!multiplicationNumber || !multiplicadorNumber) return;

    console.log(multiplicationNumber, multiplicadorNumber);
    createTable(multiplicationNumber, multiplicadorNumber);
});

const createTable = (number, multiplicadorNumber) => {
    multiplicationTable.innerHTML = "";

    for (let i = 1; i <= multiplicadorNumber; i++) {
        const result = number * i;

        const template = `<div class="row">
        <div class="operation">${number} * ${i} = </div>
        <div class="result">${result}</div>
        </div>`;

        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(template, "text/html");
        const row = htmlTemplate.querySelector(".row");

        multiplicationTable.appendChild(row);
    }

    multiplicationTitle.innerHTML = number;
};