const salvar = document.querySelector("#botao-cadastrar")

salvar.addEventListener('click', (e) =>{

    let items = JSON.parse(localStorage.getItem("despesas")) || []

    const item = {desc, pontos, data}

    items.push(item)


    localStorage.setItem("despesas", JSON.stringify(despesasArray))

    window.location.href = "despesas.html"
})








