
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
    font-size: 13px;margin-top:3px`
    cell_now.style.cssText=`width: 100%;text-align: center;rotate:180deg`
    cell_c.style.cssText=`width: 90%; height: 34px; margin-left: 10px;`
    cell_a.style.cssText=`width: 170px;  height: 25px; border: 1px solid rgb(0, 0, 0); margin-bottom: 10px;margin-top: 10px;
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