const arrEmailList = ['franco@gmail.com','weng@gmail.com','sturlson@gmail.com','ade@gmail.com','lin@gmail.com'];
let inLista;
let emailUtente = prompt('Inserisci la tua email per poter giocare');
console.log(emailUtente);

for (i = 0; i < arrEmailList.length; i++) {
    if (arrEmailList[i] == emailUtente) {
        inLista = true;
    }
}

if (inLista) {
    alert('La tua email è registrata, puoi giocare ai dadi');
} else {
    alert('La tua email non è registrata, NON puoi giocare ai dadi');
}