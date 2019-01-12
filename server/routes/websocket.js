module.exports= function (io){

    io.on('connection',()=>{
        console.log('has a client login in');
        io.emit('service','you has login in chat system');
        io.broadcast.emit('chat','this is chat message ');
    });


    io.on('disconnect', function(){
        console.log('user disconnected');
    });

}