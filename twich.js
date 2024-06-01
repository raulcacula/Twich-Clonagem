const slide = document.querySelectorAll('.sliders')
const next = document.getElementById('next')

let currentSlide = 0

function hideSlider(){
    slide.forEach(item => item.classList.remove('on'))
}

function showSlider(){
    slide[currentSlide].classList.add('on')
}

function nextSlider(){
    hideSlider()
    if(currentSlide == slide.length -1){
        currentSlide = 0
    }else{
        currentSlide++
    }
    showSlider()
}
next.addEventListener('click',nextSlider)


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


var liveMais1 = document.querySelector('.live-container-mais')
var liveMais2 = document.querySelector('.live-container-mais2')
var liveMais3 = document.querySelector('.live-container-mais3')
var liveMais4 = document.querySelector('.live-container-mais4')

function verMais(){
    if(liveMais1.style.display = 'flex'){
        liveMais2.style.display = 'flex'
        liveMais3.style.display = 'flex'
        liveMais4.style.display = 'flex'
    }
}

var live3 = document.querySelector('.live3')

function verMais2(){
    if(live3.style.display = 'flex'){ 
    }
}


var FecharLogi = document.getElementById('FecharLogin')
var login = document.querySelector('.login')

function LiberaLogin(){
    if(login.style.display = 'block'){

    }
}

function fecharLo(){
    if(login.style.display = 'none'){

    }
}


const html = document.querySelector('html')
const dark = document.querySelector('#dark')


dark.addEventListener('change', function(){
    html.classList.toggle('dark-mode')
})

var opDark = document.querySelector('.user-op')
var xOp = document.querySelector('.x-dark')
var userOp = document.querySelector('.OpUser')
function opLibera(){
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


var searchMobile = document.querySelector('.center-2')
function search(){
    if(searchMobile.style.display = 'flex'){
    }
}


function FecharSearc(){
    if(searchMobile.style.display = 'none'){

    }
}