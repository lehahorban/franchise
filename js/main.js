function calculateFranchise() {
  const doctor = parseFloat(document.getElementById("doctor").value) / 100;
  const clinic = parseFloat(document.getElementById("clinic").value) / 100;

  if (isNaN(doctor) || isNaN(clinic)) {
    document.getElementById("result").textContent =
      "Будь ласка, введіть коректні значення.";
    return;
  }

  const totalFranchise = 1 - (1 - doctor) * (1 - clinic);
  document.getElementById("result").textContent = `Загальна франшиза: ${(
    totalFranchise * 100
  ).toFixed(2)}%`;
}
