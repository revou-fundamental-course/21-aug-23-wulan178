const name = "Wulan";

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("name").value = name;
});

function validateForm() {
    const form = document.getElementById("myForm");
    const name = document.getElementById("name").value;
    const birthdate = document.getElementById("birthdate").value;
    const email = document.getElementById("email").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById("userMessage").value;
    const currentDatetime = new Date().toLocaleString();

    const previewCard = document.getElementById("preview");
    const previewContent = `
    <p><strong>Submitted on</strong>: ${" "} ${currentDatetime}</p>
        <p><strong>Name</strong>: ${name}</p>
        <p><strong>Birthdate</strong>: ${" "} ${birthdate}</p>
        <p><strong>Email</strong>: ${" "} ${email}</p>
        <p><strong>Gender</strong>: ${" "} ${gender}</p>
        <p><strong>Message</strong>: ${" "} ${message}</p>
    `;

    previewCard.innerHTML = "";
    previewCard.insertAdjacentHTML("beforeend", previewContent);
    previewCard.style.display = "hidden";

    if (form.checkValidity()) {
        previewCard.style.display = "block";
        console.log('submitted')
    } else {
        form.reportValidity();
        console.log('failed')
    }
}
