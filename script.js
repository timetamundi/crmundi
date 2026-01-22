function toggleMenu() {
  document.querySelector(".menu").classList.toggle("show");
}
document.getElementById("year").textContent = new Date().getFullYear();

$("#phone").mask("(99) 99999-9990");

const form = document.getElementById("contactForm");
const formButton = document.getElementById("enviaForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  formButton.disabled = true;
  formButton.textContent = "Enviando...";
  const formData = new FormData(form);

  const dataObject = Object.fromEntries(formData.entries());

  fetch(
    "https://script.google.com/macros/s/AKfycbzwn4fTQGSkaTVjF3-AznFEFmFcqHrar_uZ_muy0BoL5suCAAzK_KnMT1Qy3gZbXcCt3g/exec",
    {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(dataObject),
    },
  )
    .then((response) => response.json())
    .then((_) => {
      Swal.fire({
        title: "Formulário enviado com sucesso!",
        text: "Obrigado por se inscrever no nosso programa de profissionalização.",
        icon: "success",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Ok",
      }).then((_) => {
        form.reset();
        formButton.disabled = false;
        formButton.textContent = "Quero participar";
      });
    })
    .catch((_) => {
      Swal.fire({
        title: "Não foi possível enviar o formulário!",
        text: "Por favor, tente novamente mais tarde.",
        icon: "error",
        showCancelButton: false,
        confirmButtonColor: "red",
        confirmButtonText: "Ok",
      }).then((_) => {
        form.reset();
        formButton.disabled = false;
        formButton.textContent = "Quero participar";
      });
    });
});
