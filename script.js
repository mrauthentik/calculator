const uche = document.getElementById('display')

function appendValue (userInput) {
   uche.value += userInput
 
}


function clearUserInput () {
    uche.value = " "
}

function deleteUserInput () {
    uche.value = uche.value.slice(0, -1)
}

function calculate () {
    try{
       uche.value =  eval(uche.value)
    }catch (err){
        uche.value = 'Error'
        console.log(err)
    }
}
