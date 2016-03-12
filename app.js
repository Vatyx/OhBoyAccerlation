express = require('express');
path = require('path');
app = express();

app.get('/', function(req, res)
{
	res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(3000, function()
{
	console.log("Listening!");
});