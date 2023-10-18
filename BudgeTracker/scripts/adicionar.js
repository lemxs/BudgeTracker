document.addEventListener('DOMContentLoaded', function() {
  const botaoCadastrar = document.getElementById('botao-cadastrar');
  botaoCadastrar.addEventListener('click', function() {
    const descricao = document.getElementById('descricao').value;
    const data = document.getElementById('data').value;
    const valor = document.getElementById('valor').value;

    // Verifique se os campos estão preenchidos
    if (descricao && data && valor) {
      const despesa = {
        descricao,
        data,
        valor
      };

      // Adicione a nova despesa ao localStorage
      const despesas = JSON.parse(localStorage.getItem('despesas')) || [];
      despesas.push(despesa);
      localStorage.setItem('despesas', JSON.stringify(despesas));

      // Limpe os campos de entrada
      document.getElementById('descricao').value = '';
      document.getElementById('data').value = '';
      document.getElementById('valor').value = '';

      // Adicione a despesa à tabela na página "Despesas" com os botões
      const tabelaDespesas = document.getElementById('tabela-despesas');
      const novaLinha = document.createElement('tr');
      novaLinha.innerHTML = `
        <td>${descricao}</td>
        <td>${data}</td>
        <td>R$ ${valor}</td>
        <td>
          <a class="btn-small waves-effect waves-light green custom-button">
            <i class="material-icons">edit</i>
          </a>
          <a class="btn-small waves-effect waves-light red custom-button">
            <i class="material-icons">delete</i>
          </a>
        </td>
      `;
      tabelaDespesas.appendChild(novaLinha);
    } else {
      alert('Preencha todos os campos antes de adicionar a despesa.');
    }
  });
});


