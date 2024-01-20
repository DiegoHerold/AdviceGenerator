let titulo = document.querySelector('h1 span');
let advice = document.querySelector('p');
let parado =document.querySelector('.static');



window.onload = function() {
  fetch(`https://api.adviceslip.com/advice`).then((resp)=>
    resp.json()).then((resp)=>{

    titulo.innerText = resp.slip.id;
    advice.innerText = '"'+resp.slip.advice+'"';


    console.log(resp.slip);
    console.log(resp.slip.id);
    console.log(resp.slip.advice);
    
  })
  };
function newAdvice(){
    window.location.reload(true);
    // parado.style.animation = 'rotate 1s linear';
    // fetch(`https://api.adviceslip.com/advice`).then((resp)=>
    //     resp.json()).then((resp)=>{

    //       titulo.innerText = resp.slip.id;
    //       advice.innerText = resp.slip.advice;

    //       console.log(resp.slip);
    //       console.log(resp.slip.id);
    //       console.log(resp.slip.advice);
    //     })
}

		

			
	
			
				
				
				