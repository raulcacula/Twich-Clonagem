var tituloNav = document.querySelector('.titulo-nav')
var navColumn = document.querySelector('.nav-column')
var navLeft = document.querySelector('.nav-left')
var seta1 = document.getElementById('canais1')
var seta2 = document.getElementById('canais2')
function canais(){
    if(seta1.style.display = 'none'){
        
        navLeft.style.display = 'none'
        seta2.style.display = 'block'
    }
}
function canais2(){
    if(seta2.style.display = 'none'){
        navLeft.style.display = 'block'
        seta1.style.display = 'flex'
    }
}

const html = document.querySelector('html')
const dark = document.querySelector('#dark')


dark.addEventListener('change', function(){
    html.classList.toggle('dark-mode')
})



var FecharLogi = document.getElementById('FecharLogin')
var login = document.querySelector('.login')

function LiberaLogin2(){
    if(login.style.display = 'block'){

    }
}

function fecharLo2(){
    if(login.style.display = 'none'){

    }
}



var opDark = document.querySelector('.user-op')
var xOp = document.querySelector('.x-dark')
var userOp = document.querySelector('.OpUser')
function opLibera2(){
    if(userOp.style.display = 'none'){
        opDark.style.display = 'flex'
        xOp.style.display = 'flex'
    }
}

function opFechar(){
    if(xOp.style.display = 'none'){
        opDark.style.display = 'none'
        userOp.style.display = 'flex'
    }
}

