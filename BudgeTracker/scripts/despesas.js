document.addEventListener('DOMContentLoaded', function() {
  const tabelaDespesas = document.getElementById('tabela-despesas');
  
  // Recupera as despesas armazenadas no armazenamento local (localStorage)
  const despesas = JSON.parse(localStorage.getItem('despesas')) || [];
  
  // Preenche a tabela com as despesas
  despesas.forEach((despesa) => {
    tabelaDespesas.innerHTML += `
      <tr>
        <td>${despesa.descricao}</td>
        <td>${despesa.data}</td>
        <td>R$ ${despesa.valor}</td>
      </tr>
    `;
  });
});
