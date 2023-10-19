const botoes = document.querySelectorAll('.btn-apagar')

function apagar(id){
    console.log("apagar tarefa", id)

    const despesas = JSON.parse
    (localStorage.getItem("despesa")) || []
    
    const tarefas_filtradas = despesas.filter(despesa => despesa.id !== id)

    localStorage.setItem("despesas", JSON.stringify(despesas))

}