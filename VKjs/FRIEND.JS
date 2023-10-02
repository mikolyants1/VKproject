    
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

class Friends {
  static elem=document.querySelector('.side1')
  constructor(src,name,href){
    this.src=src,
    this.name=name,
    this.href=href
  }
  create(){
    const div1=document.createElement('div')
    const img=document.createElement('img')
    const span=document.createElement('span')
    const link1=document.createElement('a')
    const link2=link1.cloneNode(true)
    const div2=div1.cloneNode(true)
    const div3=div1.cloneNode(true)
    const div4=div1.cloneNode(true)
    const div5=div1.cloneNode(true)
    div1.classList.add('b')
    div2.classList.add('b1')
    img.classList.add('b2')
    span.classList.add('a')
    img.src=this.src
    span.innerHTML=this.name
    div3.style.cssText=`margin-top: 20px;margin-left:5px;`
    div5.style.cssText=`display: flex;`
    link1.style.cssText=`text-decoration: none;`
    link2.style.cssText=`text-decoration: none;margin-left: 5px;`
    link1.href=this.href
    link2.href=''
    link1.innerHTML='Написать сообщение'
    link2.innerHTML='позвонить'
    div5.appendChild(link1)
    div5.appendChild(link2)
    div4.appendChild(span)
    div2.appendChild(img)
    div3.appendChild(div4)
    div3.appendChild(div5)
    div2.appendChild(div3)
    div1.append(div2)
    Friends.elem.append(div1)
  }
}
const friends=[
  new Friends('img/ava2.jpg','Валерия Тугушова','../VKproject/MES5.HTML'),
  new Friends('./img/av5.jpg','Иван Франов','../VKproject/MES4.HTML'),
  new Friends('img/valer.webp','Валера Кролов','../VKproject/MES3.HTML'),
  new Friends('https://randomuser.me/api/portraits/men/1.jpg','Антон Скинов','../VKproject/MES2.HTML'),
  new Friends('img/lam1.jpg','Михаил Зморин','../VKproject/MES1.HTML'),
  new Friends('img/ava2.jpg','Сергей Кетаев','./MES6.HTML'),
  new Friends('img/vki3.jpg','Никита Фролов',''),
  new Friends('img/vki2.webp','Илья Смирнов',''),
]
friends.forEach(item=>item.create())

class Maybe {
 static elem=document.querySelector('.fri01')
 static src=`img/fri1.png`
 constructor(src,name,same){
  this.src=src,
  this.name=name,
  this.same=same
 }
 create(){
  const div1=document.createElement('div')
  const img=document.createElement('img')
  const span=document.createElement('span')
  const link=document.createElement('a')
  const img1=img.cloneNode(true)
  const div2=div1.cloneNode(true)
  const div3=div1.cloneNode(true)
  const div4=div1.cloneNode(true)
  const div5=div1.cloneNode(true)
  const div6=div1.cloneNode(true)
  div1.classList.add('fri1')
  div2.classList.add('fri11')
  img.classList.add('imfr')
  img.src=this.src
  img1.src=Maybe.src
  span.innerHTML=this.same
  link.innerHTML=this.name
  div3.style.display=`flex`
  div5.style.margin=`0 0 0 5px`
  span.style.color=`grey`
  link.style.cssText=`text-decoration: none;color: black;`
  img1.style.cssText=`height:25px;width:25px`
  div6.appendChild(span)
  div5.appendChild(link)
  div5.appendChild(div6)
  div4.appendChild(img)
  div3.appendChild(div4)
  div3.appendChild(div5)
  div2.appendChild(div3)
  div2.appendChild(img1)
  div1.append(div2)
  Maybe.elem.append(div1)
 }
}
const maybe=[
  new Maybe('img/av8.jpg','Павел Мегрин','2 общих друга'),
  new Maybe('img/av10.jpg','Даниил Акрин','5 общих друзей'),
  new Maybe('img/av9.jpg','Александр Невров','1 общий друг'),
  new Maybe('img/ava2.jpg','Михаил Крагов','4 общих друга'),
]
maybe.forEach(item=>item.create())
const but=document.querySelector('.but')
but.addEventListener('click',name1)
  function name1() {
        const letter={
        'a':'а', 'b':'б',
        's':'с', 'u':'у',
        'r':'р', 'e':'е',
        'i':'и', 'v':'в',
        'f':'ф', 'l':'л',
        'k':'к', 'p':'п',
        'd':'д', 'm':'м',
        'h':'х', 'o':'о',
        't':'т', 'n':'н',
        'ш':'ш', 'z':'з',
        'c':'ц', 'э':'э',
        'ю':'ю', 'ы':'ы',
        'я':'я', 'ь':'ь',
        'й':'й', 'щ':'щ',
        'ъ':'ъ', 'g':'г',
        'ж':'ж', 'ч':'ч',
        ' ':' ',
        }
const non=document.querySelector('.non')
const a=document.querySelectorAll('.a')
const b=document.querySelectorAll('.b')
const {value}=document.querySelector('.input')
const [x,x2]=[[],[]]
a.forEach(({textContent})=>x.push(textContent))
if (value.length==0) b.forEach(({style})=>style.display='block')
  if (value.split('').length==1) {
    const l=`${value}`
    let lett=''
for (const key in letter) {
  if (l.toLowerCase()==key) lett=`${letter[key]}`
  if (l.toLowerCase()==letter[key]) lett=`${letter[key]}`
}
let con=0
for (let i = 0; i < x.length; i++) {
 if (x[i].split('').some((x)=>x.toLocaleLowerCase()==lett)) {
        b[i].style.display='block'
        x2.push(i)
    b[x2[x2.length-1]].style.borderRadius=' 0 0 15px 15px'
    }else{
        b[i].style.display='none'
       con++
    }
}
non.style.display=con==b.length?'block':'none'
  }
  if (value.length>1) {
    const l=`${value}`
    const let1=l.replace(/ia/,'ия').replace(/ch/,'ч').replace(/ya/,'ья').replace(/ey/,'ей').replace(/sh/,'ш')
    let lett=''
   for (let i = 0; i < let1.length; i++) {
    for (const key in letter) {
    if (let1[i].toLowerCase()==key) {
    lett+=`${letter[key]}`
   }
  else if (let1[i].toLowerCase()==letter[key]) {
    lett+=`${letter[key]}`
   }      
    }
}
let con=0
const y=x.map(x=>{
  return x.split('').slice(0,value.length).join('')
})
const y1=[]
y.forEach((item)=>y1.push(item.toLocaleLowerCase()))
 for (let i = 0; i < y1.length; i++) {
   if (lett!==y1[i]) {
    b[i].style.display='none'
    con++
   }else{
    b[i].style.display='block'
    x2.push(i)
    b[x2.at(-1)].style.borderRadius=' 0 0 15px 15px'
   }  
 }
  non.style.display=con==b.length?'block':'none'
  }
}