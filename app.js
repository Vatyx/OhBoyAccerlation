express = require('express');
app = express();
http = require('http').Server(app);
io = require('socket.io')(http);

app.use(express.static(__dirname));

app.get('/', function(req, res)
{
	res.sendFile('/index.html');
});

io.on('connection', function(socket)
{
	socket.on('message', function(msg)
	{
		console.log(msg);
	});
});

app.set('port', (process.env.PORT || 5000));

http.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});