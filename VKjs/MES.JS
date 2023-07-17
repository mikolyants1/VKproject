let f=document.querySelector('.f')
let input=document.querySelector('.input')
let but=document.querySelector('.but')
but.addEventListener('click',name1)
const text=document.querySelector('.text')
function name1() {
let c=document.createElement('div')
let a=document.createElement('div')
let b=document.createElement('div')
let q=document.createElement('div')
let x=new Date()
let x1=x.getHours()
let x2=x.getMinutes()
if (input.value) {
f.style.display='block'
c.style.cssText=`width: 90%;margin-left: 10px;`
a.style.cssText=` width: 160px;border: 1px solid rgb(0, 0, 0);
margin-bottom: 10px;margin-top: 10px;rotate: 180deg;
padding: 3px 3px; display: flex;border-radius: 15px;
background-color: rgb(172, 222, 255);justify-content: space-between; `
b.style.cssText=`color: grey;font-size: 13px;margin-top:3px`
q.style.cssText=` width: 100%;`
q.innerHTML=`${input.value}`
let x3
let x4
if (x1>=10) {
x3=x1
}
else{
x3=`0${x1}`
}
if (x2>=10) {
x4=x2
}
else{
x4=`0${x2}`
}
b.innerHTML=`${x3}:${x4}` 
let val=input.value
let val1=val.split('')
if (val1.length>10&&val1.length<=15) {
a.style.width='240px'
}
if (val1.length>15&&val1.length<=20) {
a.style.width='270px'
}
if (val1.length>20&&val1.length<=25) {
a.style.width='300px'
}
if (val1.length>25) {
a.style.width='330px'
}
a.append(q)
a.append(b)
c.append(a)
text.prepend(c)
}
input.value=''
}