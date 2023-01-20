//your code here
let string=document.getElementById('evaluatedText');
let length=document.getElementById('letterCount')
string.addEventListener('keyup', (e)=>{
    if(e.key !== 'Escape'){


    }
    let str=string.value;
    length.innerHTML=str.length;
    console.log(str.length);
})

