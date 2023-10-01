const flex=document.querySelector('.flex')
const link1=document.querySelector('.link1')
const link2=document.querySelector('.link2')
const arr=[
   'Google Play',
   ' RuStore',
   'AppStore',
]
arr.forEach(item=>{
   flex.innerHTML+=`
    <div style="text-align: center;height: 24px;">
     <a style="text-decoration: none;color: rgb(68, 59, 136);"href="">
       ${item}
    </a>
  </div>
   `
})
const arr1=[
   'О ВКонтакте',
   'Правила',
   'Для бизнеса',
   'Разработчикам'
]
const arr2=[
 'Русский',
 'English',
 'Все языки'
]
const arrays=[arr1,arr2]
const elems=[link1,link2]
for (let i = 0; i < arrays.length; i++) {
   arrays[i].forEach(item=>{
      elems[i].innerHTML+=`
       <a class="f1" href="">${item}</a>
      `
   })
}
const dr1=document.querySelector('.dr1')
const dr2=document.querySelector('.dr2')
const dor=document.querySelector('.dor')
dor.addEventListener('click',()=>{
   if (dr2.value=='red17'&&dr1.value=='89645245555'||dr1.value=='+79645245555') {
    dor.href='../VKproject/MAIN.HTML'
   }else{
    dr2.style.border='1px solid red'
   }
})
