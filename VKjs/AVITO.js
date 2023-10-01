const p0=document.querySelector('.p0')
const url=[
    './img/av1.160BGiovYQB9sJfNz8oajBh6cVtt13s4LiEr2G8muVs',
    './img/av2.y3TJ_aUV6jPX2Wt4iAmKXleJN9A1oAMQX7C0pnEUghQ',
    './img/av3.VDxJ5tIlTOqW-x0XsKkCYnTU5CaYGa5vpJ3h3dz1U6c'
    ]
url.forEach(item=>{
    const div=document.createElement('div')
    const img=document.createElement('img')
    div.classList.add('p11')
    img.classList.add('p1')
    img.src=item
    div.append(img)
    p0.append(div)
})
const p=document.querySelector('.p')
const p1=document.querySelectorAll('.p1')
const p11=document.querySelectorAll('.p11')
p11.forEach((item,i)=>item.onclick=()=>func1(i))
p11[0].style.border='2px rgb(0, 174, 255) solid'

function func1(n) {
fot.style.background=`url(${url[n]})`
p11.forEach(({style})=>style.border='none')
p11[n].style.border='2px rgb(0, 174, 255) solid'
}
const main1=document.querySelector('.main1')
const main2=document.querySelector('.main2')
const div1=document.querySelector('.div1')
const btn=document.querySelector('.btn-3')
const sp1=document.querySelector('.sp1')
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
const num=document.querySelector('.num')
function num1() {
  num.innerHTML='8 (917) 634-95-61'
}
const ps2=document.getElementById('ps2')
const card=document.querySelector('.card')
ps2.onclick=function () {
if (ps2.hasAttribute('class')) {
    card.style.display='none'
    ps2.innerHTML='показать карту'
    ps2.classList.remove('q')
}
else{
    card.style.display='block' 
    ps2.innerHTML='скрыть карту'
    ps2.classList.add('q')
}

}
const fas=document.querySelector('.fas')
fas.addEventListener('click',()=>{
    if (fas.hasAttribute('value')) {
    fas.style.color='grey'
    fas.removeAttribute('value')
}
else{
    fas.style.color='red'
    fas.setAttribute('value','q')
}
})