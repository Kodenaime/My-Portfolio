

let menu = document.querySelector('#bars');
let header = document.querySelector('header');

menu.onclick = () =>{
  menu.classList.toggle('fa-times')
  header.classList.toggle('active')
}

menu.onscroll = () =>{
  menu.classList.remove('fa-times')
  header.classList.remove('active')
}

// let cursor1 = document.querySelector('cursor-1');
// let cursor2 = document.querySelector('cursor-2');

// window.onmousemove = (e) =>{
//   cursor1.style.top = e.pageY + 'px';
//   cursor1.style.left = e.pageX + 'px';
//   cursor2.style.top = e.pageY + 'px';
//   cursor2.style.left = e.pageX + 'px';
// }

// let links =document.querySelectorAll('a').forEach(links =>{

//   links.onmouseenter = () =>{
//     cursor1.classList.add('active');
//     cursor2.classList.add('active');
//   }

//   links.onmouseleave = () =>{
//     cursor1.classList.remove('active');
//     cursor2.classList.remove('active');
//   }

// // })

function myFunction2() {

   alert("project is not live at the moment !");  
       alert(true);
      
 }

 function myFunction1() {

  alert("Contact coming soon !");  
      alert(true);
      
 }