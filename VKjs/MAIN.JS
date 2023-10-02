
class Footer {
  static block=document.getElementById('footer')
  constructor(grid,src,name){
    this.src=src,
    this.grid=grid,
    this.name=name
  }
  render(){
    const div=document.createElement('div')
    const link=document.createElement('a')
    link.classList.add('foot1')
    div.style.gridColumn=this.grid
    link.href=this.src
    link.innerHTML=this.name
    div.append(link)
    Footer.block.append(div)
  }
}
const elems=[
    new Footer('2/2','../VKproject/MAIN.HTML','Главная'),
    new Footer('3/3','',"Сервисы"),
    new Footer('4/4','../VKproject/MES0.HTML','Мессенджер'),
    new Footer('5/5','','Клипы'),
    new Footer('6/6','','Видео'),
]
elems.forEach(item=>item.render())
const sidebar=document.querySelector('.sidebar')
const sides=[
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
sides.reverse().forEach(({ref,text})=>{
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
const fr13=document.querySelectorAll('.fr13')
const src=['img/vki1.jpg','img/lam1.jpg ','img/vki3.jpg']
src.forEach(item=>{
    fr13[1].innerHTML+=`
      <div>
        <img class="fr14" src="${item}" alt="">
      </div>   
    `
})
const friend1=document.querySelector('.friend1')
const friend2=document.querySelector('.friend2')
const arr=[
    {src:'./img/av5.jpg',name:'Иван'},
    {src:'img/ava2.jpg',name:'Сергей'},
    {src:'https://randomuser.me/api/portraits/men/1.jpg',name:'Антон'},
    {src:'img/lam1.jpg',name:'Михаил'}
]
const arr1=[
    {src:'img/vki2.webp',name:'Илья'},
    {src:'img/vki3.jpg',name:'Никита'},
    {src:'img/ava2.jpg',name:'Валерия'}
]
function Render(arr,div){
arr.forEach(({name,src})=>{
 const div1=document.createElement('div')
 const img=document.createElement('img')
 div1.style.cssText=`font-size: 15px;text-align: center;`
 img.classList.add('friend11')
 const div2=div1.cloneNode(true)
 const div3=div1.cloneNode(true)
 img.src=src
 div3.textContent=name
 div2.appendChild(img)
 div1.append(div2)
 div1.append(div3)
 div.append(div1)
})
}
Render(arr,friend1)
Render(arr1,friend2)
class Sub {
  static elem=document.querySelector('.side3')
   constructor(src,name,m1,m2){
     this.src=src,
     this.name=name,
     this.m1=m1,
     this.m2=m2
   }
   create(){
     const div=document.createElement('div')
     const img=document.createElement('img')
     const link=document.createElement('a')
     img.classList.add('group')
     link.classList.add('sb01')
     const div2=div.cloneNode(true)
     const div3=div.cloneNode(true)
     div3.style.margin=this.m2
     img.src=this.src
     link.innerHTML=this.name
     div.style.cssText=`display: flex;margin-top:${this.m1};`
     div2.appendChild(img)
     div3.appendChild(link)
     div.append(div2)
     div.append(div3)
     Sub.elem.append(div)
   }
}
const sub=[
new Sub('img/icon1.jpg','Студенческая жизнь Юридического института Рут','10px','5px 0 0 10px'),
new Sub('img/icon2.jpg','Авито','20px','10px 0 0 5px'),
new Sub('img/thor1.jpg','North Legends','20px','10px 0 0 5px'),
]
sub.forEach(item=>item.create())
const com=document.querySelector('.comment1')
const urls=['img/com1.png','img/per1.png']
urls.forEach(item=>{
  const div=document.createElement('div')
  const img=document.createElement('img')
  const span=document.createElement('span')
  div.classList.add('div4')
  span.style.cssText=`display: inline-block;margin-top: 10px;`
  img.style.cssText=`width: 25px;height: 20px;`
  img.src=item
  span.append(img)
  div.append(span)
  com.append(div)
})
const a1=document.querySelector('.a1')
const tags=['Фото','Музыка','Клипы','Статьи','NFT']
tags.forEach(item=>{
    a1.innerHTML+=`
    <div class='a11'>
      ${item}
    </div>
    `
})
const fas=document.querySelector('.fas')
const sp1=document.querySelector('.sp1')
const fot=document.querySelector('#footer')
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
const side=document.querySelector('.side1')
const div2=document.querySelector('.aaa')
const div3=document.querySelector('.div3')
const div4=document.querySelector('.div4')
const div5=document.querySelector('.div5')
div4.addEventListener('click',()=>{
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
