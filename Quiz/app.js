 const correctAnswer=['A','A','B','C','A'];

const form =document.querySelector('.quiz-form');
const result=document.querySelector('.result');

// var a=document.getElementsByName("myform");

form.addEventListener("submit" ,e =>{
 
    
    e.preventDefault();

    let score =0;
    const UserAnswer =[form.q1.value ,form.q2.value, form.q3.value,form.q4.value,form.q5.value];

    UserAnswer.forEach((answer,index) =>{

        if( answer === correctAnswer[index]){

            score += 20;
        }
       
    });

    console.log(score);

    //show result on page

    

    
    window.scrollTo(0,0);

    
    result.classList.remove('d-none');




    //animating score
    let output=0;
    var z=setInterval(() => {

        result.querySelector('span').textContent= output;
        
        if(output == score){
            clearInterval(z);
        }

        else{
            output++;
        }

    },10);
   

});


// var i=0;
// var z= setInterval(() => {

//     console.log("hello fareena");
//     i++;
//     if(i==5){
//         clearInterval(z);
//     }
    
    
// }, 1000);