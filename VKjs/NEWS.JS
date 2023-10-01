const sidebar=document.querySelector('.sidebar')
const side=[
  {ref:'../VKproject/MAIN.HTML',text:'Моя Страница'},
  {ref:'../VKproject/NEWS.HTML',text:'Новости'},
  {ref:'../VKproject/MES0.HTML',text:'Мессенджер'},
  {ref:'',text:'Звонки'},
  {ref:'../VKproject/FRIEND.HTML',text:'Друзья'},
  {ref:'',text:'Сообщества'},
  {ref:'',text:'Фотографии'},
  {ref:'',text:'Музыка'},
  {ref:'',text:'Видео'},
  {ref:'',text:'Клипы'},
  {ref:'',text:'Игры'},
  {ref:'',text:'Стикеры'},
  {ref:'',text:'Маркет'},
]
side.reverse().forEach(({ref,text})=>{
  const div=document.createElement('div')
  const link=document.createElement('a')
  div.classList.add('sb1')
  link.classList.add('sb01')
  link.href=ref
  link.innerHTML=text
  div.append(link)
  sidebar.prepend(div)
})
const blog1=['Блог','Разработчикам']
const blog2=['Для бизнеса','Еще']
const rend=(arr)=>{
  const div=document.createElement('div')
  div.classList.add('blog')
  arr.forEach(item=>{
    const div1=document.createElement('div')
    const link=document.createElement('a')
    link.classList.add('bl1')
    link.innerHTML=item
    div1.append(link)
    div.append(div1)
    sidebar.append(div)
  })
}
rend(blog1)
rend(blog2)
const sp2=document.querySelector('.sp2')
const fs=document.querySelector('#fs')
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
    const fas=document.querySelector('.fas')
    const sp1=document.querySelector('.sp1')
    const fot=document.querySelector('#footer')
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
    