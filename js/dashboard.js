// Fills the progress bar on the dashboard.
// Every row with the class "passed" counts towards the total EC.
const TOTAL_EC = 60;

let obtainedEc = 0;
document.querySelectorAll(".board-row.passed .cell-ec").forEach(function (cell) {
    obtainedEc += Number(cell.textContent);
});

document.getElementById("progress-ec").textContent = obtainedEc;
document.getElementById("progress-fill").style.width =
    (obtainedEc / TOTAL_EC) * 100 + "%";
