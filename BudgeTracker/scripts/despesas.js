document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener("load", atualizar)
  const tabelaDespesas = document.getElementById('tabela-despesas');

  function atualizar(){
    let despesas = JSON.parse(localStorage.getItem("despesas")) || []
  }

  const despesas = JSON.parse(localStorage.getItem('despesas')) || [];

  despesas.forEach((despesa) => {
    tabelaDespesas.innerHTML += `
      <tr>
        <td>${despesa.descricao}</td>
        <td>${despesa.data}</td>
        <td>R$ ${despesa.valor}</td>
        <td>
        <a class="btn-small waves-effect waves-light green custom-button">
          <i class="material-icons" >edit</i>
        </a>
        <a class="btn-small waves-effect waves-light red custom-button btn-apagar" onclick="apagar()">
          <i class="material-icons">delete</i>
        </a>
      </td>
      </tr>
    `;
  });
});
