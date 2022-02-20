let li=document.getElementsByClassName("coloum");
let p=document.getElementsByTagName("p");
let squares= [];
let player='X';
let player2='O';
let next=true;
let num=0;

function reomve(){

location.reload();
}

  function games(clicked_id)
  {
    let idd=document.getElementById(clicked_id);
    xo(idd);
 
    
  }

  function xo(idd){
    if(idd.innerHTML =='' && next){
    idd.innerHTML = player;
    
    if(player== 'O'){
      player='X';
      player2='O';
      document.getElementById('footer').innerHTML='X';
      win();
      }
      else{
      player='O';
      player2='X';
      document.getElementById('footer').innerHTML='O';
      win();
      }
      }
      

  }

  function win(){
     num++;
      for(let i=1 ; i<10 ;i++)
      squares[i]=document.getElementById('r'+i).innerHTML;

      if(num==9){
        document.getElementById('footer').innerHTML='Draw';
        next=false;
   setInterval(()=>{  document.getElementById('footer').innerHTML+="."},1000)
   setInterval(()=> location.reload() ,4000)
      }

    for(let i=0; i<7 ; i+=3){
        if(squares[1+i]==squares[2+i] && squares[3+i]==squares[2+i] && squares[1+i] !=''){
            colorrow(i,'c');
        }

    }

    for(let i=0; i<4 ; i++){
        if(squares[1+i]==squares[4+i] && squares[7+i]==squares[4+i] && squares[1+i] !=''){
            colorrow(i,'m');
        }}
        
        if(squares[1]==squares[5] && squares[5]==squares[9] && squares[1] !=''){
            colorrow(1,'f');
   
          }

          if(squares[7]==squares[5] && squares[5]==squares[3] && squares[7] !=''){
            colorrow(1,'g');
          }

      
    

   }

  function colorrow(i,m){
    document.getElementById('footer').innerHTML="Player "+player2 +' win';
      if(m=='c'){
    document.getElementById('r'+(2+i)).style.background='green';
    document.getElementById('r'+(1+i)).style.background='green';
    document.getElementById('r'+(3+i)).style.background='green';
}
    else  if(m=='m') {
        document.getElementById('r'+(1+i)).style.background='green';
        document.getElementById('r'+(4+i)).style.background='green';
        document.getElementById('r'+(7+i)).style.background='green';
    }else if(m=='f'){
        document.getElementById('r'+1).style.background='green';
        document.getElementById('r'+5).style.background='green';
       document.getElementById('r'+9).style.background='green';
   }else if(m=='g'){
    document.getElementById('r'+7).style.background='green';
    document.getElementById('r'+5).style.background='green';
   document.getElementById('r'+3).style.background='green';
}
   next=false;
   setInterval(()=>{  document.getElementById('footer').innerHTML+="."},1000)
   setInterval(()=> location.reload() ,4000)
    }



 