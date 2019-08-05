var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
  console.log(this.value);
  var pacientes = document.querySelectorAll(".paciente");
  for (var posicao = 0; posicao < pacientes.length; posicao++) {
    var paciente = pacientes[posicao];
    var tdNome = paciente.querySelector(".info-nome");
    var nome = paciente.textContent;
  }
});
