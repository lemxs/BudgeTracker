document.addEventListener('DOMContentLoaded', function() {
  const tabelaDespesas = document.getElementById('tabela-despesas');
  const despesas = JSON.parse(localStorage.getItem("despesas")) || [];

  renderizarDespesas();

  function renderizarDespesas() {
    tabelaDespesas.innerHTML = '';

    despesas.forEach((despesa) => {
      tabelaDespesas.innerHTML += `
        <tr data-id="${despesa.id}">
          <td>
            <span class="descricao">${despesa.descricao}</span>
            <input value="${despesa.descricao}" type="text" class="edit-descricao" style="display:none" >
          </td>
          <td>
            <span class="data">${despesa.data}</span>
            <input value="${despesa.data}" required type="date" class="edit-data" style="display:none" >
          </td>
          <td>
            <span class="valor">R$ ${despesa.valor}</span>
            <input value="${despesa.valor}" type="number" class="edit-valor" style="display:none" >
          </td>
          <td>
            <a class="btn-small waves-effect waves-light green custom-button edit-button"><i class="material-icons">edit</i></a>
            <a class="btn-small waves-effect waves-light red custom-button delete-button"><i class="material-icons">delete</i></a>
            <a class="btn-small waves-effect waves-light blue custom-button save-button" style="display:none"><i class="material-icons">save</i></a>
            <a class="btn-small waves-effect waves-light red custom-button cancel-button" style="display:none"><i class="material-icons">cancel</i></a>
          </td>
        </tr>
      `;
    });

    const botoesEditar = tabelaDespesas.querySelectorAll('.edit-button');
    const botoesApagar = tabelaDespesas.querySelectorAll('.delete-button');
    const botoesSalvar = tabelaDespesas.querySelectorAll('.save-button');
    const botoesCancelar = tabelaDespesas.querySelectorAll('.cancel-button');

    botoesEditar.forEach(botao => {
      botao.addEventListener('click', function() {
        const id = this.closest('tr').getAttribute('data-id');
        iniciarEdicao(id);
      });
    });

    botoesApagar.forEach(botao => {
      botao.addEventListener('click', function() {
        const id = this.closest('tr').getAttribute('data-id');
        apagarDespesa(id);
      });
    });

    botoesSalvar.forEach(botao => {
      botao.addEventListener('click', function() {
        const id = this.closest('tr').getAttribute('data-id');
        salvarEdicao(id);
      });
    });

    botoesCancelar.forEach(botao => {
      botao.addEventListener('click', function() {
        const id = this.closest('tr').getAttribute('data-id');
        cancelarEdicao(id);
      });
    });
  }

  function iniciarEdicao(id) {
    const linha = tabelaDespesas.querySelector(`tr[data-id="${id}"]`);
    const inputs = linha.querySelectorAll('input');
    const spans = linha.querySelectorAll('span');

    inputs.forEach(input => input.style.display = 'block');
    spans.forEach(span => span.style.display = 'none');

    linha.querySelector('.edit-button').style.display = 'none';
    linha.querySelector('.save-button').style.display = 'block';
    linha.querySelector('.cancel-button').style.display = 'block';
    linha.querySelector('.delete-button').style.display = 'none';
  }

  function salvarEdicao(id) {
    const linha = tabelaDespesas.querySelector(`tr[data-id="${id}`);
    const inputs = linha.querySelectorAll('input');
  
    const descricao = linha.querySelector('.edit-descricao').value;
    const data = linha.querySelector('.edit-data').value;
    const valor = linha.querySelector('.edit-valor').value;
  
    const despesaEditada = despesas.find(despesa => despesa.id == id);

    if (despesaEditada) {
      despesaEditada.descricao = descricao;
      despesaEditada.data = data;
      despesaEditada.valor = valor;
    }
  
    localStorage.setItem('despesas', JSON.stringify(despesas));
  
    renderizarDespesas();
  }
  
  function cancelarEdicao(id) {
    const linha = tabelaDespesas.querySelector(`tr[data-id="${id}"]`);
    const inputs = linha.querySelectorAll('input');
    const spans = linha.querySelectorAll('span');

    inputs.forEach(input => input.style.display = 'none');
    spans.forEach(span => span.style.display = 'block');

    linha.querySelector('.edit-button').style.display = 'block';
    linha.querySelector('.delete-button').style.display = 'block';
    linha.querySelector('.save-button').style.display = 'none';
    linha.querySelector('.cancel-button').style.display = 'none';

    renderizarDespesas();
  }

  function apagarDespesa(id) {
    const despesas = JSON.parse(localStorage.getItem("despesas")) || [];
    
    const despesas_filtradas = despesas.filter(despesa => despesa.id != id);
    console.log(despesas_filtradas)
  
    localStorage.setItem("despesas", JSON.stringify(despesas_filtradas));
    
    renderizarDespesas();
  }

});
