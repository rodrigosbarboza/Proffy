//Producar o botão
document.querySelector("#add-time")

// Quando clicar no botão
.addEventListener('click', cloneField)

//Executar um ação 
function cloneField(){
    //duplicar os campos. Que campo? 
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //Pegar os campos 
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada compo, limpar!
    fields.forEach(function(field){ 
        //pegar o field do momento
        field.value= ""
    })

    //Colocar na página. Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}