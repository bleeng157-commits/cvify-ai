function generateCV(){

document.getElementById("cvName").innerText =
document.getElementById("name").value;

document.getElementById("cvEmail").innerText =
document.getElementById("email").value;

document.getElementById("cvPhone").innerText =
document.getElementById("phone").value;

document.getElementById("cvLocation").innerText =
document.getElementById("location").value;

document.getElementById("cvSummary").innerText =
document.getElementById("summary").value;

}

function downloadPDF(){

const element = document.getElementById("cv");

html2pdf().from(element).save("CVifyAI-CV.pdf");

}
