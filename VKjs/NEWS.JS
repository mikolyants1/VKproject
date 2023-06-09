let sp2=document.querySelector('.sp2')
let fs=document.querySelector('#fs')
fs.addEventListener('click',ch)
function ch() {
    if (fs.hasAttribute('value')) {
   fs.style.color='grey'
   sp2.innerHTML=' 13'
   sp2.style.color='black'
    fs.removeAttribute('value')
}
else{
   fs.style.color='red'
   sp2.innerHTML=' 14'
sp2.style.color='red'
    fs.setAttribute('value','q')
}
}
    let fas=document.querySelector('.fas')
    let sp1=document.querySelector('.sp1')
    let fot=document.querySelector('#footer')
    fas.addEventListener('click',name2)
function name2() {
    if (fas.hasAttribute('value')) {
   fas.style.color='grey'
   sp1.innerHTML=' 78'
   sp1.style.color='black'
    fas.removeAttribute('value')
}
else{
   fas.style.color='red'
   sp1.innerHTML=' 79'
sp1.style.color='red'
    fas.setAttribute('value','q')
}
}
    