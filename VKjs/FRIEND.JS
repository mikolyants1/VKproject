    
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
 let non=document.querySelector('.non')
 let a=document.querySelectorAll('.a')
 let b=document.querySelectorAll('.b')
let input=document.querySelector('.input')
let x=[]
let x2=[]
  for (let i = 0; i < b.length; i++) {
     x.push(a[i].innerHTML)
  }
if (input.value.length==0) {
    for (let i = 0; i < b.length; i++) {
      b[i].style.display='block'     
    }
}
  if (input.value.split('').length==1) {
    let l=`${input.value}`
    let lett=''
for (const key in letter) {
   if (l.toLowerCase()==key) {
    lett=`${letter[key]}`
   }
   if (l.toLowerCase()==letter[key]) {
    lett=`${letter[key]}`
   }
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
if (con==b.length) {
    non.style.display='block'
 }else{
    non.style.display='none'
 }
  }
  if (input.value.length>1) {
    let l=`${input.value}`
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
console.log(lett)
let con=0
let y=x.map((x)=>{
    return x.split('').slice(0,input.value.length).join('')
})
let y1=[]
for (let i = 0; i < y.length; i++) {
 y1.push(y[i].toLocaleLowerCase())
}
 for (let i = 0; i < y1.length; i++) {
   if (lett!==y1[i]) {
    b[i].style.display='none'
con++
   }else{
    b[i].style.display='block'
    x2.push(i)
    b[x2[x2.length-1]].style.borderRadius=' 0 0 15px 15px'
   }  
 }
 if (con==b.length) {
    non.style.display='block'
 }else{
    non.style.display='none'
 }
  }
    }