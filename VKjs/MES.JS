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
if (window.location.pathname=='/VKproject/MES0.HTML'){
class Mess {
    static elem=document.querySelector('.div3')
    constructor(src,href,name,mess,date){
      this.src=src,
      this.href=href,
      this.name=name,
      this.mess=mess,
      this.date=date
    }
    create(){
        const div1=document.createElement('div')
        const img=document.createElement('img')
        const span=document.createElement('span')
        const link=document.createElement('a')
        const div2=div1.cloneNode(true)
        const div3=div1.cloneNode(true)
        const div4=div1.cloneNode(true)
        const div5=div1.cloneNode(true)
        const div6=div1.cloneNode(true)
        div1.classList.add('mes1')
        div2.classList.add('mes01')
        img.classList.add('pol2')
        link.classList.add('sb01')
        link.innerHTML=this.name
        span.innerHTML=this.mess
        img.src=this.src
        link.href=this.href
        div4.style.margin='0 0 0 5px'
        div5.style.marginTop='5px'
        span.style.color='grey'
        div6.style.cssText=`width: 90px;height: 10px;color: grey;`
        div6.textContent=this.date
        div3.appendChild(img)
        div5.appendChild(span)
        div4.appendChild(link)
        div4.appendChild(div5)
        div2.appendChild(div3)
        div2.appendChild(div4)
        div1.append(div2)
        div1.append(div6)
        Mess.elem.append(div1)
    }
}
const message=[
    new Mess('img/ava2.jpg','../VKproject/MES5.HTML','Валерия Тугушова','хорошо,увидимся','7 февраля'),
    new Mess('img/valer.webp','../VKproject/MES3.HTML','Валера Кролов','Спасибо','19 января'),
    new Mess('https://randomuser.me/api/portraits/men/1.jpg','../VKproject/MES2.HTML','Антон Скинов','во сколько?','12 января'),
    new Mess('img/lam1.jpg','../VKproject/MES1.HTML','Михаил Зморин','С новым годом!','1 января'),
]
message.forEach(item=>item.create())

const slide=document.querySelector('.sli')
const items=[
    {name:'Иван',src:'./img/av5.jpg'},
    {name:'Сергей',src:'img/ava2.jpg'},
    {name:'Антон',src:'https://randomuser.me/api/portraits/men/1.jpg'},
    {name:'Михаил',src:'img/lam1.jpg'},
    {name:'Валерия',src:'img/ava2.jpg'},
    {name:'Илья',src:'img/vki2.webp'},
    {name:'Никита',src:'img/vki3.jpg'},
]
items.forEach(({name,src})=>{
  const div=document.createElement('div')
  const div1=document.createElement('div')
  const div2=document.createElement('div')
  const img=document.createElement('img')
  div.setAttribute('class','pol')
  img.setAttribute('class','pol1')
  div2.setAttribute('class','t1')
  img.src=src
  div2.innerHTML=name
  div1.append(img)
  div.append(div1)
  div.append(div2)
  slide.append(div)
})
}
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
const f=document.querySelector('.f')
const Search=document.getElementById('search')
const serDiv1=document.createElement('div')
const serDiv2=document.createElement('div')
const serImg=document.createElement('img')
const serInput=document.createElement('input')
serDiv1.style.cssText="display: flex;width: 70%;margin: auto;"
serDiv2.style.cssText="height: 40px;width: 40px;"
serInput.classList.add('input')
serImg.classList.add('but')
serInput.placeholder='напишите сообщение'
serInput.type='text'
serImg.src='img/cli1.png'
serImg.onclick=()=>Add()
serDiv2.append(serImg)
serDiv1.append(serInput)
serDiv1.append(serDiv2)
Search.append(serDiv1)
const text=document.querySelector('.text')
function Add() {
const {value}=document.querySelector('.input')
const c=document.createElement('div')
const a=c.cloneNode(true)
const b=c.cloneNode(true)
const q=c.cloneNode(true)
const x=new Date()
const x1=x.getHours()
const x2=x.getMinutes()
if (value) {
f.style.display='block'
c.style.cssText=`width: 90%;margin-left: 10px;`
a.style.cssText=` width: 160px;border: 1px solid rgb(0, 0, 0);
margin-bottom: 10px;margin-top: 10px;rotate: 180deg;
padding: 3px 3px; display: flex;border-radius: 15px;
background-color: rgb(172, 222, 255);justify-content: space-between; `
b.style.cssText=`color: grey;font-size: 13px;margin-top:3px;align-self:end`
q.style.cssText=` width: 100%;`
q.innerHTML=`${value}`
const x3=x1>=10?x1:`0${x1}`
const x4=x2>=10?x2:`0${x2}`
b.innerHTML=`${x3}:${x4}` 
const val1=value.split('')
if (val1.length>10&&val1.length<=15) a.style.width='240px'
if (val1.length>15&&val1.length<=20) a.style.width='270px'
if (val1.length>20&&val1.length<=25) a.style.width='300px'
if (val1.length>25) a.style.width='330px'
a.append(q)
a.append(b)
c.append(a)
text.prepend(c)
}
value=''
}