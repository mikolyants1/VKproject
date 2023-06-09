let fas=document.querySelector('.fas')
let sp1=document.querySelector('.sp1')
let fot=document.querySelector('#footer')
fas.addEventListener('click',name2)
function name2() {
if (fas.hasAttribute('value')) {
fas.style.color='grey'
sp1.innerHTML=' 34'
sp1.style.color='black'
fas.removeAttribute('value')
}
else{
fas.style.color='red'
sp1.innerHTML=' 35'
sp1.style.color='red'
fas.setAttribute('value','q')
}
}
let side=document.querySelector('.side1')
let div2=document.querySelector('.aaa')
let div3=document.querySelector('.div3')
let div4=document.querySelector('.div4')
let div5=document.querySelector('.div5')
div4.addEventListener('click',()=>{
let fot1=fot.style.marginBottom
console.log(fot1)

let width=div5.style.width
console.log(width)
if (div5.hasAttribute('id')) {
div5.style.display='none'
fot.style.marginBottom=`${-300}px`

div5.removeAttribute('id')
}else{
div5.style.display='block'
fot.style.marginBottom=`${-100}px`
div5.setAttribute('id','q')
}
})
