window.showLeadPopup = function() {
    const popup = document.getElementById("leadPopup");
    popup.classList.remove("hide");
    popup.style.display = "block";
}
window.closeLeadPopup = function() {
    const popup = document.getElementById("leadPopup");
    popup.classList.add("hide");
    setTimeout(() => popup.style.display = "none", 400);
}

function showLeadPopup() {
    document.getElementById("leadPopup").style.display = "block";
}

function closeLeadPopup() {
    document.getElementById("leadPopup").style.display = "none";
}

window.addEventListener("load", function() {
    // Hide preloader
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
        preloader.classList.add("hidden");
        setTimeout(showLeadPopup, 5000);
    }, 1000);

    // Quiz logic
    const quizForm = document.getElementById("auditQuiz");
    const quizResult = document.getElementById("quiz-result");
    const progressBar = document.getElementById("progress-bar");
    if (quizForm) {
        const totalQuestions = 4;
        quizForm.addEventListener("change", () => {
            const answered = [...quizForm.querySelectorAll("input[type='radio']:checked")].length;
            const progress = (answered / totalQuestions) * 100;
            progressBar.style.width = `${progress}%`;
        });

        quizForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const values = Array.from(new FormData(this).values());
            const score = values.map(Number).reduce((a, b) => a + b, 0);
            let message = '';
            if (score >= 7) {
                message = `🎉 Score: ${score}/8 - You're on the right track! Let’s optimize.`;
            } else if (score >= 4) {
                message = `🚧 Score: ${score}/8 - Good start, but there’s room to grow.`;
            } else {
                message = `⚠️ Score: ${score}/8 - Your business needs serious optimization.`;
            }
            quizResult.textContent = message;
            quizResult.classList.add("show");
        });
    }
});


var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
(function() {
    var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/64cde03ccc26a871b02f5e6d/1h6l9vpgj';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();