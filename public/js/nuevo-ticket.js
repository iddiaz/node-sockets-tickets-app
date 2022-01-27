
const lblNuevoTicket = document.querySelector('#lblNuevoTicket');
const btnCrear = document.querySelector('button');


const socket = io();

socket.on('connect', () => {
    console.log('conectado');
    btnCrear.disabled = false;

});

socket.on('disconnect', () => {
    console.log('desconectado');
   btnCrear.disabled = true;
});


socket.on('ultimo-ticket', (ultimo) => {
 
    lblNuevoTicket.innerText = 'Ticket ' + ultimo;
    
})


btnCrear.addEventListener( 'click', () => {
    
    socket.emit( 'siguiente-ticket', null, ( ticket ) => {
        console.log('Desde el server', ticket);
        lblNuevoTicket.innerText = ticket;
    });

});