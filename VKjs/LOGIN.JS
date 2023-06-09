let dr1=document.querySelector('.dr1')
let dr2=document.querySelector('.dr2')
let dor=document.querySelector('.dor')

dor.addEventListener('click',()=>{
   if (dr2.value=='red17'&&dr1.value=='89645245555'||dr1.value=='+79645245555') {
    dor.href='../VKproject/MAIN.HTML'
   }else{
    dr2.style.border='1px solid red'
   
   }
})
