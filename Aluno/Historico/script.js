// JavaScript for History Page

document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners for "Ver Resultado Detalhado" buttons
    const viewResultButtons = document.querySelectorAll(".history-btn.result-btn");
    viewResultButtons.forEach(button => {
        button.addEventListener("click", function(e) {
            e.preventDefault();
            const quizTitle = this.closest(".history-item").querySelector("h3").textContent;
            // In a real application, this would navigate to a detailed result page
            alert(`Visualizando resultado detalhado para: ${quizTitle}`);
        });
    });
});

