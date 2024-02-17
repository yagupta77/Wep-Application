const checkbox = document.querySelectorAll('.custom-checkbox')
const allinputs= document.querySelectorAll('.goal-input')
const errorlabel = document.querySelector(".error-label")
const progresslabel = document.querySelector(".progress-label")
const progressBar = document.querySelector('.progress-bar')
const progressvalue = document.querySelector('.progress-value')
const allQuotes = [
  'Raise the bar by completing your goals!',
  'Well begun is half done!',
  'Just a step away, keep going!',
  'Whoa! You just completed all the goals, time for chill'
]
// const allGoals = JSON.parse (localStorage.getItem('allGoals')) || {
  // first:{
  //   name: 'Complete this project today',
  //   completed:false,
  // },
  // second:{
  //   name: 'Speak English for 10 minutes',
  //   completed:false,
  // },

  // third:{
  //   name: 'Practice Event Listener in JavaScript',
  //   completed:false,
  // },
  const allGoals = JSON.parse (localStorage.getItem('allGoals')) || {
  

    //   first:{
    //      name: '',
    //        completed:false,
    //      },
    //     second:{
    //        name: '',
    //      completed:false,
    //    },
      
    //    third:{
    //        name: '',
    //       completed:false,
    //     },
  }
  let completeGoalsCount = Object.values(allGoals).filter((goals) => goals.completed).length
progressvalue.style.width = `${ (completeGoalsCount / allinputs.length) * 100}%`
progressvalue.firstElementChild.innerText = `${completeGoalsCount}/${allinputs.length} complete`
progresslabel.innerText = allQuotes[completeGoalsCount ]

 


  checkbox.forEach((checkbox) => {
      checkbox.addEventListener('click', (e) => {
      const   allfields =  [...allinputs].every(function(input){
        
        return input.value
      })
      if (allfields){
          checkbox.parentElement.classList.toggle('completed');
          // 
          const inputid = checkbox.nextElementSibling.id
     
      allGoals[inputid].completed = !allGoals[inputid].completed
      completeGoalsCount  =  Object.values(allGoals).filter((goals) => goals.completed).length
      progressvalue.style.width = `${ (completeGoalsCount / allinputs.length) * 100}%`
      progressvalue.firstElementChild.innerText = `${completeGoalsCount}/${allinputs.length} complete`
      progresslabel.innerText = allQuotes[completeGoalsCount ]
      localStorage.setItem('allGoals', JSON.stringify(allGoals))
       
      }else{
         errorlabel.style.display = 'block';
        //  progressBar.classList.add('show-error')
      }

      
    })
  })
  allinputs.forEach((input) => {
    if(allGoals[input.id]){
      input.value = (allGoals[input.id].name )
      if(allGoals[input.id].completed){
        input.parentElement.classList.add('completed')
    }
   
    }
    input.addEventListener('focus', ()=>{
        progressBar.classList.remove('show-error')
    })

 
// let allinputsfields = false;
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
input.addEventListener('input',(e) => {

    if(allGoals[input.id]&&allGoals[input.id].completed) {
      input.value = allGoals[input.id].name
      return
    }
   if(allGoals[input.id]){
    allGoals[input.id] .name = input.value
   }else{
    allGoals[input.id]={
     name: input.value,
     completed:false,
   }
  }
   // {
    // name:input.value,
    // completed:false
   // }
  
localStorage.setItem('allGoals', JSON.stringify(allGoals))

})
  })
