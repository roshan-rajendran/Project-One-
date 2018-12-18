var net = require('net');
 
var HOST = '18.191.219.68';
var PORT = 3000;
 
var client = new net.Socket();
 
client.connect(PORT, HOST, function() {
    console.log('Client connected to: ' + HOST + ':' + PORT);
    // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client 
    client.write('$GPRMC,15, AABBCCDDEEFFIIGG, 073446.000,2444444234234,1255.5125,N,07738.2948,E,0.00,0.53,080316,D*71,12,1,090,1250,420, 0, 1, 0, 123, 456, 12345 \r\n '); 
});
 
client.on('data', function(data) {    
    console.log('Client received: ' + data);
     if (data.toString().endsWith('exit')) {
       client.destroy();
    }
});
 
// Add a 'close' event handler for the client socket
client.on('close', function() {
    console.log('Client closed');
});
 
client.on('error', function(err) {
    console.error(err);
});


