let nota = null
let nome = null
const media = 7
const maxFaltas = 10

function enviarDados() {
    nota = document.getElementById("nota").value
    nome = document.getElementById("nome").value
    faltas = document.getElementById("faltas").value


    if (nota >= media && faltas <= maxFaltas) {
        condicao = "aprovado"
    }
    else {
        condicao = "reprovado"
    }

    
    var novoParagrafo = document.createElement('p')
    novoParagrafo.setAttribute("id", "linha")

    // novoParagrafo.textContent = `${nome} tirou a nota ${nota}. está <span class="cor">${condicao.toUpperCase()}</span>`
    novoParagrafo.textContent = `${nome} tirou a nota ${nota}, com ${faltas} faltas. Aluno está ${condicao.toUpperCase()}`

    document.body.appendChild(novoParagrafo)

    if (condicao == "aprovado") {
        novoParagrafo.style.color = "blue"
    }
    else {
        novoParagrafo.style.color = "red"
    }
}

    
