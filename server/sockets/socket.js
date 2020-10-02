const { io } = require('../server')


io.on('connection', client => {

    console.log('usuario conectado');

    client.on('disconnect', () => {
        console.log('El usuario se desconecto');
    });

    //Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);


        /* if (mensaje.usuario) {
            callback({
                resp: 'Todo salio bien'
            });
        } else {
            callback({
                resp: 'Todo salio MAL'
            });
        } */

    });

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });

});