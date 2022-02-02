
// Referencias del HTML
const lblNuevoticket  = document.querySelector('#lblNuevoticket');
const btnCrear = document.querySelector('button');



const socket = io();



socket.on('connect', () => {
    // console.log('Conectado');
    btnCrear.disabled = false;
});

socket.on('disconnect', () => {
    // console.log('Desconectado del servidor');

   btnCrear.disabled = true;
});


btnCrear.addEventListener( 'click', () => {

    socket.emit( 'siguiente-ticket', null, ( ticket ) => {
        // console.log('Desde el server', ticket );
        lblNuevoticket.innerText = ticket;
    });

});