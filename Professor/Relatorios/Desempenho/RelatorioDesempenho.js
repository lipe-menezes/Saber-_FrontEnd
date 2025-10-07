document.addEventListener("DOMContentLoaded", () => {

  // Comparativo de Turmas
  if (document.getElementById("chartTurmas")) {
    new Chart(document.getElementById("chartTurmas"), {
      type: "bar",
      data: {
        labels: ["8º A", "8º B", "9º A"],
        datasets: [{
          label: "Média (%)",
          data: [85, 82, 87],
          backgroundColor: "#6366f1"
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false }, title: { display: true, text: "Comparativo entre Turmas" } },
        scales: { y: { beginAtZero: true, max: 100 } }
      }
    });
  }

  // Evolução Temporal
  if (document.getElementById("chartEvolucao")) {
    new Chart(document.getElementById("chartEvolucao"), {
      type: "line",
      data: {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
        datasets: [{
          label: "Média Geral",
          data: [70, 74, 78, 83, 86, 88],
          borderColor: "#4f46e5",
          backgroundColor: "rgba(99, 102, 241, 0.1)",
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        plugins: { title: { display: true, text: "Evolução das Notas" }, legend: { display: false } },
        scales: { y: { beginAtZero: true, max: 100 } }
      }
    });
  }

  // Institucional
  if (document.getElementById("chartInstitucional")) {
    new Chart(document.getElementById("chartInstitucional"), {
      type: "doughnut",
      data: {
        labels: ["Aprovados", "Recuperação", "Reprovados"],
        datasets: [{
          label: "Distribuição",
          data: [72, 20, 8],
          backgroundColor: ["#16a34a", "#facc15", "#ef4444"]
        }]
      },
      options: {
        responsive: true,
        plugins: { title: { display: true, text: "Desempenho Institucional" } }
      }
    });
  }
});

