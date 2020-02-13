var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",(event) => {
    let alvoEvento = event.target;
    let paiDoAlvo = alvoEvento.parentNode;
    paiDoAlvo.classList.add("fadeOut");

    setTimeout((any) => {
        paiDoAlvo.remove();
    },500)
    
})
