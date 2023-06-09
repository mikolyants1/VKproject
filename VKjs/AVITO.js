

let p=document.querySelector('.p')
let p1=document.querySelectorAll('.p1')
let p11=document.querySelectorAll('.p11')
for (let i = 0; i < p11.length; i++) {
    p11[i].addEventListener('click',()=>func1(i)) 
    
}

p11[0].style.border='2px rgb(0, 174, 255) solid'

function func1(n) {
    const url=[
        'url(./img/av1.160BGiovYQB9sJfNz8oajBh6cVtt13s4LiEr2G8muVs)',
        'url(./img/av2.y3TJ_aUV6jPX2Wt4iAmKXleJN9A1oAMQX7C0pnEUghQ)',
        'url(./img/av3.VDxJ5tIlTOqW-x0XsKkCYnTU5CaYGa5vpJ3h3dz1U6c)'
    ]
    fot.style.background=`${url[n]}`
   for (let i = 0; i < p11.length; i++) {
    p11[i].style.border='none'
   }
   p11[n].style.border='2px rgb(0, 174, 255) solid'
}


let main1=document.querySelector('.main1')
let main2=document.querySelector('.main2')
let div1=document.querySelector('.div1')
let btn=document.querySelector('.btn-3')
let sp1=document.querySelector('.sp1')
const fot=document.querySelector('.fot')
btn.addEventListener('click',ch1)

function ch1() {
   
if (btn.hasAttribute('value')) {
    btn.style.background='linear-gradient(0deg, rgb(161, 211, 232) 0%, rgb(0, 172, 238,1) 100%)'
    sp1.innerHTML='Добавить в избранное'
    btn.removeAttribute('value')
}
else{
    btn.style.background='grey'
    sp1.innerHTML='Добавлено в избранное'
    btn.setAttribute('value','q')
}

}
let num=document.querySelector('.num')
function num1() {
    num.innerHTML='8 (917) 634-95-61'
}
let ps2=document.querySelector('.ps2')
let card=document.querySelector('.card')

ps2.addEventListener('click',map)
function map() {
    if (ps2.hasAttribute('value')) {
    card.style.display='none'
   
    ps2.innerHTML='показать карту'
    ps2.removeAttribute('value')
}
else{
    card.style.display='block'
    
    ps2.innerHTML='скрыть карту'
    ps2.setAttribute('value','q')
}

}
let fas=document.querySelector('.fas')
fas.addEventListener('click',()=> {
    if (fas.hasAttribute('value')) {
    fas.style.color='grey'
    fas.removeAttribute('value')
}
else{
    fas.style.color='red'
    fas.setAttribute('value','q')
}
})