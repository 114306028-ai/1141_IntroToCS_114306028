const submitBtn = document.getElementById("submitBtn");
const mathInput = document.getElementById("mathInput");
const englishInput = document.getElementById("englishInput");
const tableBody = document.querySelector("#gradeTable tbody");

submitBtn.addEventListener("click", function () {
    const math = Number(mathInput.value);
    const english = Number(englishInput.value);

    if (isNaN(math) || isNaN(english)) {
        alert("Please enter valid numbers.");
        return;
    }

    const rowCount = tableBody.rows.length + 1;
    const avg = ((math + english) / 2).toFixed(2);

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${rowCount}</td>
        <td>${math}</td>
        <td>${english}</td>
        <td>${avg}</td>
    `;
    tableBody.appendChild(row);

    updateColumnAverages();

    mathInput.value = "";
    englishInput.value = "";
});

function updateColumnAverages() {
    const rows = tableBody.querySelectorAll("tr");
    let mathSum = 0;
    let englishSum = 0;

    rows.forEach(row => {
        mathSum += Number(row.children[1].textContent);
        englishSum += Number(row.children[2].textContent);
    });

    const count = rows.length;
    const mathAvg = (mathSum / count).toFixed(2);
    const englishAvg = (englishSum / count).toFixed(2);
    const overallAvg = ((Number(mathAvg) + Number(englishAvg)) / 2).toFixed(2);

    document.getElementById("mathAvg").textContent = mathAvg;
    document.getElementById("englishAvg").textContent = englishAvg;
    document.getElementById("overallAvg").textContent = overallAvg;
}