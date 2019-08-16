var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
  console.log(this.value);
  var pacientes = document.querySelectorAll(".paciente");

  if (this.value.length > 0) {
    for (var posicao = 0; posicao < pacientes.length; posicao++) {
      var paciente = pacientes[posicao];
      var tdNome = paciente.querySelector(".info-nome");
      var nome = tdNome.textContent;
      if (nome != this.value) {
        paciente.classList.add("invisivel");
      } else {
        paciente.classList.remove("invisivel");
      }
    }
  } else {
    for (var posicao = 0; posicao < pacientes.length; posicao++) {
      var paciente = pacientes[posicao];
      paciente.classList.remove("invisivel");
    }
  }
});
