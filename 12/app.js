
function kaishi(){
  num = 1 + Math.floor(Math.random()*5);

 if(num == 1){
 document.getElementById("neko").animate([
    { transform:'rotate(0)'},
    { transform:'rotate(720deg)'}
  ], {
    duration: 7000,
    easing: 'ease-out',
    fill:"forwards"
  });
  setTimeout(function(){
    window.location.href = 'rika.html';
}, 8500);
} 

if(num == 2){
 document.getElementById("neko").animate([
    { transform:'rotate(0)'},
    { transform:'rotate(792deg)'}
  ], {
    duration: 7000,
    easing: 'ease-out',
    fill:"forwards"
  });
  setTimeout(function(){
    window.location.href = 'syakai.html';
}, 8500);
}

if(num == 3){
    document.getElementById("neko").animate([
       { transform:'rotate(0)'},
       { transform:'rotate(864deg)'}
     ], {
       duration: 7000,
       easing: 'ease-out',
       fill:"forwards"
     });
     setTimeout(function(){
       window.location.href = 'sugaku.html';
   }, 8500);
   }

if(num == 4){
 document.getElementById("neko").animate([
    { transform:'rotate(0)'},
    { transform:'rotate(936deg)'}
  ], {
    duration: 7000,
    easing: 'ease-out',
    fill:"forwards"
  });
  setTimeout(function(){
    window.location.href = 'kokugo.html';
}, 8500);
}

if(num == 5){
    document.getElementById("neko").animate([
       { transform:'rotate(0)'},
       { transform:'rotate(1008deg)'}
     ], {
       duration: 7000,
       easing: 'ease-out',
       fill:"forwards"
     });
     setTimeout(function(){
       window.location.href = 'eigo.html';
   }, 8500);
   }
  }