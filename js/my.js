window.addEventListener('DOMContentLoaded', ()=>{

  let sel=document.getElementById("sel");
  let opt=document.querySelectorAll("option");
  let tel=document.getElementById("tel");
  let user=document.getElementById("ism");
  let btn=document.getElementById("btn");
  sel.addEventListener('change', ()=>{
    tel.value=(`998${sel.value}`);
    tel.focus();
  });
  btn.addEventListener('click', ()=>{
    let obj={
      username: `@${user.value}`,
      tel: tel.value,
      tarmoq: sel.value
    }
    console.log(obj);
  })
 console.log(document.body.scrollHeight);
})
function soat(){
  let date=new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  h = (h < 10) ? "0" + h: h;
  m = (m < 10) ? "0" +  m: m;
  s = (s < 10) ? "0" +  s: s;
  let time = h + ':' + m + ':' + s;
  setTimeout(soat, 1000)
  document.getElementById("h1").innerHTML=time;
  document.getElementById("h2").innerHTML=date;
}
soat();

let url=document.getElementById("url");
let png=document.getElementById("png");
url.addEventListener('input', ()=>{
  png.scr=url.value;
})