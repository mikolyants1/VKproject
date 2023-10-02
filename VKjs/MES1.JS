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
serDiv2.append(serImg)
serDiv1.append(serInput)
serDiv1.append(serDiv2)
Search.append(serDiv1)

function DataBase9(name) {
    this.dbName= name
    this.ucdbName='websql8'
    this.db=openDatabase(this.dbName,'1.0',this.ucdbName,100*1024*1024)
}
DataBase9.prototype.create=function(name){
var str=''
var fields={
    name:'TEXT',
  time:'TEXT',
}
for (const key in fields) {
str+=`,${key} ${fields[key]}`
}
this.db.transaction(function (tx) {
tx.executeSql(`create table if not exists ${name} (id integer primary key autoincrement ${str})`)
})
}
DataBase9.prototype.add=function(name){
    var date=new Date()
    var date1=date.getMinutes()
    var date2=date.getHours()
    var min
    var our
    if (date1<=9) {
        min=`0${date1}`
    }else{
        min=date1
    }
    if (date2<=9) {
        our=`0${date2}`
    }else{
        our=date2
    }
   var time1=`${our}:${min}`
   
    var [ask,vals,vars]=[[],[],[]]
    var field={
  name:document.querySelector('.input').value,
  time:time1
    }
for (let i = 0; i < Object.keys(field).length; i++) { 
    ask.push('?')
}
for (const key in field) {
    vals.push(key)
}
for (const key in field) {
    vars.push(field[key])
}
this.db.transaction(function (tx) {
    tx.executeSql(`insert into ${name} (${vals.join(', ')}) values(${ask.join(', ')})`,vars)
})
document.querySelector('.input').value=''
}
var count=0
DataBase9.prototype.load=function(name){
var sql=`select * from ${name}`
document.querySelector('.text').innerHTML=''
this.db.transaction(function (tx) {
    tx.executeSql(sql,[],function (tx,result) {
    for (let i = 0; i < result.rows.length; i++) {
    var work=result.rows.item(i)
    var date=new Date().getMonth()
    var date1=''
switch (date) {
    case 0:
       date1='января'  
      break;
       case 1:
        date1='февраля'  
      break;
     case 2:
          date1='марта'  
       break;
       case 3:
         date1='апреля'  
       break;
        case 4:
         date1='мая'  
        break;
        case 5:
          date1='июня'  
        break;
        case 6:
         date1='июля'  
       break;
        case 7:
         date1='августа'  
       break;
        case 8:
         date1='сентября'  
       break;
        case 9:
         date1='октября'  
       break;
        case 10:
          date1='ноября'  
         break;
          case 11:
            date1='декабря'  
          break;
    default:
        break;
}
var date0=new Date().getDate()
    var cell_table=document.querySelector('.text')
    var cell_name=document.createElement('div')
    var cell_now=document.createElement('div')
    var cell_c=document.createElement('div')
    var cell_a=document.createElement('div')
    var cell_time=document.createElement('div')
    cell_name.setAttribute('class','cell')
    cell_name.setAttribute('data-id',work.id)
    cell_name.setAttribute('data-field','name')
    cell_time.setAttribute('data-field','time')
    cell_now.setAttribute('class','now')
    cell_name.innerText=work.name
    cell_time.innerText=work.time
    cell_now.innerText=`${date0} ${date1}`
    cell_time.style.cssText=`color: grey;
    font-size: 13px;margin-top:3px;align-self:end`
    cell_now.style.cssText=`width: 100%;text-align: center;rotate:180deg`
    cell_c.style.cssText=`width: 90%; margin-left: 10px;`
    cell_a.style.cssText=`width: 170px;  border: 1px solid rgb(0, 0, 0); margin-bottom: 10px;margin-top: 10px;
    rotate: 180deg; padding: 3px 3px; display: flex; border-radius: 15px;background-color: rgb(172, 222, 255);
    justify-content: space-between;`
if (cell_name.innerText.length>10&&cell_name.innerText.length<=15) {
cell_a.style.width='240px'
}
if (cell_name.innerText.length>15&&cell_name.innerText.length<=20) {
cell_a.style.width='270px'
}
if (cell_name.innerText.length>20&&cell_name.innerText.length<=25) {

cell_a.style.width='300px'
}
if (cell_name.innerText.length>25) {
cell_a.style.width='330px'
}
cell_a.appendChild(cell_name)
cell_a.appendChild(cell_time)
cell_c.appendChild(cell_a)


cell_table.prepend(cell_c)    
 }
    cell_table.append(cell_now)
    })
    
})
}
DataBase9.prototype.clear = function(name) {
    var sql = `DROP TABLE ${name}`;
    this.db.transaction(function (tx) {
        tx.executeSql(sql);
    });
    document.querySelector('.text').innerHTML = '';
};
function App9(base,table) {
    this.db=new DataBase9(base)
    this.table= table
    this.fields={
        name:document.querySelector('.input'),
        time:document.querySelector('#add-time'),
    }
    this.btn={
        add:document.querySelector('.but'),
        clear:document.querySelector('.clear')
    }
}
App9.prototype.create=function(){
    this.db.create(this.table)
    
    this.btn.add.addEventListener('click',()=>{
            if (this.fields.name!='') {
                count+=1
                this.db.add(this.table)
                this.db.load(this.table)
                this.fields.name.focus()
            }
        
    })
    this.btn.clear.addEventListener('click', e => {
   if (e.target.tagName == 'BUTTON') {
            this.db.clear(this.table)
       }
    });
    
}
window.addEventListener('load', () => {
    let app = new App9('dbusr', 'users');
    app.db.load(app.table);
    app.create();
    console.log(app)
}); 