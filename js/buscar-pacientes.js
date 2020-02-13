let botao = document.querySelector("#buscar-paciente");

botao.addEventListener("click", function () {
    console.log("Buscando pacientes ...")

    let xhr = new XMLHttpRequest()
    xhr.open("GET","http://api-pacientes.herokuapp.com/pacientes")
    xhr.send()

    xhr.addEventListener("load", function () {
        let erro = document.querySelector("#erro-ajax")

        if(xhr.status === 200) {
            erro.classList.add("invisivel")
            console.log(xhr.responseText)
            let pacientes = JSON.parse(xhr.responseText)
    
            pacientes.forEach(paciente => {
                adicionaPacienteNaTabela(paciente)
            });
        } else {
            console.log(xhr.status)
            console.log(xhr.responseText)
            
            erro.classList.remove("invisivel")
        }

    })
})