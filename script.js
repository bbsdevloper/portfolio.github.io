
window.onscroll = function() {

  if(window.pageYOffset < 200){
    document.getElementById("navbar").style.display = "flex";
    document.getElementById("menubtn").style.display = "none";
  }
  else{
    document.getElementById("navbar").style.display = "none";
    document.getElementById("menubtn").style.display = "block";
  }
 
}
window.addEventListener('load',function(){
  showmain();
})

function showmain(){
  let i=0;
  const timer = setInterval(function(){
    i++;
    if(i == 2){
      clearInterval(timer);
      // document.getElementById("loading").style.display = 'none';
      document.getElementById("load").classList.add('load-c-a');
      document.getElementById("load").innerHTML = "LET'S GO BROTHER !";
    }
  },1000)
}
window.addEventListener('load',function(){
  showmain2();
})

function showmain2(){
  let i=0;
  const timer = setInterval(function(){
    i++;
    if(i == 4){
      clearInterval(timer);
      document.getElementById("loading").style.display = 'none';
      document.getElementById("home").style.display = 'block';
      
    }
  },1000)
}
// window.addEventListener('mousemove', cursor);
// function cursor(e){
//   document.getElementById("cursor").style.top = e.pageY + 'px';
//   document.getElementById("cursor").style.left = e.pageX + 'px';
  
// }
// window.addEventListener('mouseout',cursor2);
// function cursor2(e){
//   document.getElementById("cursor").style.top = '-12121px';
//   document.getElementById("cursor").style.left = '-1212px';
  
// }



















const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

document.getElementById("menubtnr").addEventListener('click',function(){


  document.getElementById("hmenu").style.display = "block";
  document.getElementById("home").style.display = "none";
})
document.getElementById("closem").addEventListener('click',function(){


  document.getElementById("hmenu").style.display = "none";
  document.getElementById("home").style.display = "block";
})

document.getElementById("aboutm").addEventListener('click',function(){


  document.getElementById("hmenu").style.display = "none";
  document.getElementById("home").style.display = "block";
})


document.getElementById("contactm").addEventListener('click',function(){


  document.getElementById("workm").style.display = "none";
  document.getElementById("home").style.display = "block";
})


document.getElementById("skillm").addEventListener('click',function(){


  document.getElementById("hmenu").style.display = "none";
  document.getElementById("home").style.display = "block";
})


document.getElementById("workm").addEventListener('click',function(){


  document.getElementById("hmenu").style.display = "none";
  document.getElementById("home").style.display = "block";
})
















