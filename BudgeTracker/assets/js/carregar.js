window.addEventListener('load', () =>{
    let despesa = JSON.parse(localStorage.getItem("despesas")) || []
    despesa.forEach(despesa => {
        criarCard(despesa)
    })
})

function criarCard(despesa) {
    const card = document.createElement("div")

    card.innerHTML = `<div class="card full-width custom-card"> 
    <div class="card-content">
      <span class="card-title">Janeiro/2023</span>
      <p>Total: R$ 430.00</p>
    </div>
    <table class="striped">
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Data</th> 
          <th>Valor</th>
          <th>Ações</th> 
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Conta Luz</td>
          <td>01/01/2023</td>
          <td>R$ 70.00</td>
          <td>
            <a class="btn-small waves-effect waves-light green">
              <i class="material-icons">edit</i> 
            </a>
            <a class="btn-small waves-effect waves-light red">
              <i class="material-icons">delete</i> 
            </a>
          </td>
        </tr>
        <tr>
          <td>Mercado</td>
          <td>01/01/2023</td>
          <td>R$ 350.00</td>
          <td>
            <a class="btn-small waves-effect waves-light green">
              <i class="material-icons">edit</i> 
            </a>
            <a class="btn-small waves-effect waves-light red">
              <i class="material-icons">delete</i> 
            </a>
          </td>
        </tr>
        <tr>
          <td>Pastel</td>
          <td>01/01/2023</td>
          <td>R$ 10.00</td>
          <td>
            <a class="btn-small waves-effect waves-light green">
              <i class="material-icons">edit</i> 
            </a>
            <a class="btn-small waves-effect waves-light red">
              <i class="material-icons">delete</i> 
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>`

    document.querySelector("#lista-tarefas").appendChild(card)

}