function toggleQuestionFAQ() {
    const numQuestion = this.dataset.question;
    const icon = document.querySelector(`.panel-header i[data-icon-number="${numQuestion}"]`);
    const answer = document.querySelector(`.panel-content[data-answer="${numQuestion}"]`);

    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
        icon.classList.add('fa-minus');
        icon.classList.remove('fa-plus');
    } else {
        answer.style.display = "";
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
    }

}