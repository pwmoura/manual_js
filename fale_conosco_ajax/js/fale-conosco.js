window.onload = function(){

    const faleConosco = {
        frm: document.querySelector("#frm-fale-conosco"),
        nome: document.querySelector('#cnome'),
        bt: document.querySelector('#bt-fale-conosco'),
        retorno: document.querySelector('#retorno'),
        enviarFormulario: function(e){
            e.preventDefault()
            let ajax = new XMLHttpRequest()
            let parametro = 'nome=' + faleConosco.nome.value
            ajax.open('POST','fale-conosco.update.php')
            ajax.setRequestHeader('Content-type','application/x-www-form-urlencoded')
            ajax.onreadystatechange = function(){
                //console.log(ajax.status) //-> Vê o status
                //console.log(ajax.readyState) //-> Retorna o código da ação.
                //console.log(ajax.responseText) //-> Retorna o texto do servidor.
                if(ajax.status === 200 && ajax.readyState === 4){
                    console.log(ajax.responseText) //-> recebe o echo php
                    
                }
            }
            ajax.send(parametro)
        }
    }

    faleConosco.frm.addEventListener('submit',faleConosco.enviarFormulario,false)

}