console.log('Página reiniciada')
const prato = document.querySelectorAll('.prato')
const bebida = document.querySelectorAll('.bebida')
const sobremesa = document.querySelectorAll('.sobremesa')

let pedidoprato = null
let valorprato = null
let pedidobebida = null
let valorbebida = null
let pedidosobremesa = null
let valorsobremesa = null




for (i = 0; i < prato.length; i++) {

  prato[i].classList.remove('ativado')
  prato[i].addEventListener('click', function (e) {
    escolhePrato(this)
  })

}
function escolhePrato(elemento) {

  if (elemento.classList.contains('ativado')) {

  } else {
    for (i = 0; i < prato.length; i++) {
      prato[i].classList.remove('ativado')
      prato[i].classList.remove('ok')
    }
    // anota o pedido na variável
    elemento.classList.add('ativado')
    elemento.classList.add('ok')
    const h1element = elemento.querySelector('h1')
    const h2element = elemento.querySelector('h2')
    pedidoprato = h1element.textContent
    valorprato = h2element.textContent

  }
  verificapedido()
}

//bebida
for (i = 0; i < bebida.length; i++) {

  bebida[i].classList.remove('ativado')
  bebida[i].addEventListener('click', function (e) {
    escolhebebida(this)
  })

}
function escolhebebida(elemento) {

  if (elemento.classList.contains('ativado')) {

  } else {
    for (i = 0; i < bebida.length; i++) {
      bebida[i].classList.remove('ativado')
      bebida[i].classList.remove('ok')
    }
    // anota o pedido na variável
    elemento.classList.add('ativado')
    elemento.classList.add('ok')
    const h1element = elemento.querySelector('h1')
    const h2element = elemento.querySelector('h2')
    pedidobebida = h1element.textContent
    valorbebida = h2element.textContent

  }
  verificapedido()
}

//sobremesa
for (i = 0; i < sobremesa.length; i++) {

  sobremesa[i].classList.remove('ativado')
  sobremesa[i].addEventListener('click', function (e) {
    escolhesobremesa(this)
  })

}
function escolhesobremesa(elemento) {

  if (elemento.classList.contains('ativado')) {

  } else {
    for (i = 0; i < sobremesa.length; i++) {
      sobremesa[i].classList.remove('ativado')
      sobremesa[i].classList.remove('ok')
    }
    // anota o pedido na variável
    elemento.classList.add('ativado')
    elemento.classList.add('ok')
    const h1element = elemento.querySelector('h1')
    const h2element = elemento.querySelector('h2')
    pedidosobremesa = h1element.textContent
    valorsobremesa = h2element.textContent

  }
  verificapedido()
}

function verificapedido() {
  if (pedidoprato != null && valorprato != null && pedidobebida != null && valorbebida != null && pedidosobremesa != null && valorsobremesa != null) {
    fecharpedido()
  } else {
    const msgbtn = document.querySelector('button p')
    const corbtn = document.querySelector('#btn1')
    corbtn.classList.remove('bg-green')
    corbtn.classList.remove('clicavel')
    msgbtn.innerHTML = "Selecione os 3 itens para fechar o pedido"
  }
  function fecharpedido() {
    const msgbtn = document.querySelector('footer button p')
    const corbtn = document.querySelector('footer button')
    corbtn.classList.add('bg-green')
    corbtn.classList.add('clicavel')
    msgbtn.innerHTML = "Fechar pedido"
    aguardaclique(corbtn)

  }
}

function aguardaclique(btn) {
  btn.addEventListener('click', exibepedido)
}
function exibepedido() {
  let btn = document.querySelector('button')
  btn.classList.add('clicavel')
  const comanda = document.querySelector('.sobreposto')
  comanda.style.display = 'flex'
  const p = document.querySelector('.itensPedido')
  const itens = p.querySelectorAll('p')
  itens[0].textContent = pedidoprato
  itens[1].textContent = pedidobebida
  itens[2].textContent = pedidosobremesa
  itens[3].textContent = valorprato
  itens[4].textContent = valorbebida
  itens[5].textContent = valorsobremesa
  let vp = parseFloat(valorprato.replace("R$", '').replace(",", '.'))
  let vb = parseFloat(valorbebida.replace("R$", '').replace(",", '.'))
  let vs = parseFloat(valorsobremesa.replace("R$", '').replace(",", '.'))
  let totalPedido = (vp + vb + vs).toFixed(2)
  const eltotal = document.querySelector('#total')
  eltotal.innerHTML = `R$ ${totalPedido.replace(".", ",")}`
  aguardaWhatsapp()
}

function aguardaWhatsapp() {
  document.querySelector('#aceitarBtn').addEventListener('click', enviaWhatsapp)
  document.querySelector('#recusarBtn').addEventListener('click', cancelaPedido)

}
function enviaWhatsapp() {
  let vp = parseFloat(valorprato.replace("R$", '').replace(",", '.'))
  let vb = parseFloat(valorbebida.replace("R$", '').replace(",", '.'))
  let vs = parseFloat(valorsobremesa.replace("R$", '').replace(",", '.'))
  let totalPedido = (vp + vb + vs).toFixed(2)
  totalPedido = totalPedido.toLocaleString('pt-BR', { minimumFractionDigits: 2 })
  let msgwhatsapp = (`Olá, gostaria de fazer o pedido:%0A
  - Prato: ${pedidoprato}%0A
  - Bebida: ${pedidobebida}%0A
  - Sobremesa: ${pedidosobremesa}%0A
  Total: R$ ${totalPedido.replace(".", ",")}`)
  window.open(`https://wa.me/${5551985045145}?text=${msgwhatsapp}`, 'blank')
  location.reload();

}
function cancelaPedido() {
  const comanda = document.querySelector('.sobreposto')
  comanda.style.display = 'none'
  console.log('cancela pedido')
}


const produtos = [
  { nome: "contra-filé", categoria: "açougue", preco: 55.9 },
  { nome: "Laranja", categoria: "hortifruti", preco: 49.9 },
  { nome: "picanha", categoria: "açougue", preco: 85.9 },
  { nome: "batata", categoria: "hortifruti", preco: 57.9 }
]
//exibir produtos no console
function exibirProdutos() {

  produtos.forEach((item) => {
    console.log(item.nome)
  })
}

exibirProdutos()
// Copiar objeto alterando determinados dados(promoção 10%)

function promo(promo_Produtos, percentual) {
  const promocao = promo_Produtos.map(item => {
    return {
      ...item, preco: item.preco * percentual
    }
  })



  return promocao
}

let primeiraPromocao = promo(produtos, 0.90)
console.log(primeiraPromocao)

// filtrar itens para um novo array 
const acougue = produtos.filter(item => item.categoria === "açougue")
console.log(acougue)