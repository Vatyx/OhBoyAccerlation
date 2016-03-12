express = require('express');
path = require('path');
app = express();
app.use(express.static(__dirname));

app.get('/', function(req, res)
{
	res.sendFile('/index.html');
});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});