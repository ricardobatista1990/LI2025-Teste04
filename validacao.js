// validacao.js
document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('meuFormulario');

  formulario.addEventListener('submit', function (event) {
    if (!formulario.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    formulario.classList.add('was-validated');
  }, false);
});
