let partides = [];

 
function controller(io) {
    io.on('connection', (socket) => {
        // console.log(socket.id);
        // console.log('a user connected');

        // io.on("create-room", (room) => {
        //   console.log(`room ${room} was created`);
        // });

        // Defined a event websocket 'chat message' in server
        socket.on('chat message', (msg) => {
          console.log(socket.rooms);
          console.log('message of '+socket.id+': '+msg);
          // send var msg value call event websocket 'chat message' in client
          io.emit('chat message', msg);
        });

        socket.on("joinroom",function(data){   
          let unir =  partides.admin = "WXsWKjs2OVsJeh0vAAAP"
          socket.join(unir);
          
        });
        
        socket.on("createroom",function(data){
          //console.log(data.id);
          socket.join(socket.id);
          partida = data;
          partida.admin = socket.id;
          partida.jugadors = [[socket.id,"edu"]];
          //partida.jugadors.push("jugador2");
          partides[socket.id] = partida;

          console.log("room created id: "+ socket.id);
          io.emit('getid', {id: socket.id});
          io.emit('jugadors', {jugadors: partida.jugadors});

        });

        socket.on('disconnect', () => {
          console.log('user disconnected');
        });
      });

      return io;
}

module.exports = controller;
