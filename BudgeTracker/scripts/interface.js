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
            <input type="text" class="edit-descricao" style="display:none">
          </td>
          <td>
            <span class="data">${despesa.data}</span>
            <input type="date" class="edit-data" style="display:none">
          </td>
          <td>
            <span class="valor">R$ ${despesa.valor}</span>
            <input type="number" class="edit-valor" style="display:none">
          </td>
          <td>
            <a class="btn-small waves-effect waves-light green custom-button edit-button">Editar</a>
            <a class="btn-small waves-effect waves-light red custom-button btn-apagar">Apagar</a>
            <a class="btn-small waves-effect waves-light blue custom-button save-button" style="display:none">Salvar</a>
            <a class="btn-small waves-effect waves-light red custom-button cancel-button" style="display:none">Cancelar</a>
          </td>
        </tr>
      `;
    });

    const botoesEditar = tabelaDespesas.querySelectorAll('.edit-button');
    const botoesApagar = tabelaDespesas.querySelectorAll('.btn-apagar');
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
  }

  function salvarEdicao(id) {
    const linha = tabelaDespesas.querySelector(`tr[data-id="${id}`);
    const inputs = linha.querySelectorAll('input');
  
    const descricao = linha.querySelector('.edit-descricao').value;
    const data = linha.querySelector('.edit-data').value;
    const valor = linha.querySelector('.edit-valor').value;
  
    // Atualize os dados da despesa no seu array de despesas com base no ID
    // Atualize os dados no localStorage
    // Volte ao modo de visualização padrão
  
    // Encontre a despesa no array de despesas
    const despesaEditada = despesas.find(despesa => despesa.id === id);
    if (despesaEditada) {
      despesaEditada.descricao = descricao;
      despesaEditada.data = data;
      despesaEditada.valor = valor;
    }
  
    // Atualize o localStorage
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
    linha.querySelector('.save-button').style.display = 'none';
    linha.querySelector('.cancel-button').style.display = 'none';

    renderizarDespesas();
  }

  function apagarDespesa(id) {
    const despesas = JSON.parse(localStorage.getItem("despesas")) || [];
    
    const despesas_filtradas = despesas.filter(despesa => despesa.id !== id);
  
    localStorage.setItem("despesas", JSON.stringify(despesas_filtradas));
    
    renderizarDespesas();
  }
});
