let socket = io();

//Los on son para escuchar informacion
socket.on('connect', function() {
    console.log('Conectado al servidor')
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor')
});

// Los emits son para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Sebastian',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log(resp);
});
//escuchar info

socket.on('enviarMensaje', function(data) {
    console.log(data.mensaje);
})