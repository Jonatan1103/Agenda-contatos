const inputNumeroContato = document.getElementById('numero-contato')
const form = document.getElementById('form-contatos')
const numerosAgenda = []
const nomesAgenda = []

inputNumeroContato.addEventListener('input', (event) => {
  event.target.value = numeroTelefone(event.target.value)
})

function numeroTelefone(numero) {
  console.log(numero);

  return numero
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1)$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
}

function atualizaTabela(linha) {
  const corpoTabela = document.querySelector('tbody')
  corpoTabela.innerHTML += linha
}


function acrescentaArray(nomeAgenda, numeroAgenda) {
  nomesAgenda.push(nomeAgenda)
  numerosAgenda.push(numeroAgenda)
}

function adicionaLinha() {
  const nomeContato = document.getElementById('nome-contato')

  if(numerosAgenda.includes(inputNumeroContato.value)) {
    alert(`Número já existente`)
    inputNumeroContato.value = ''

  } else {
    let linha = 
      `<tr>
        <td>${nomeContato.value}</td>
        <td>${inputNumeroContato.value}</td>
      </tr>`

    atualizaTabela(linha)
    acrescentaArray(nomeContato.value, inputNumeroContato.value)

    nomeContato.value = ''
    inputNumeroContato.value = ''
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  adicionaLinha()
})