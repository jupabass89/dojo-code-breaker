var server = require ('./app/app');
var port = process.env.PORT || 3000;

server.listen(port, function(){
    console.log('esta corriendo en: ', port)
});

