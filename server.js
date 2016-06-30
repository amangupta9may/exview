
var debug = require('debug')('ExpressAppfinal');
var app = require('./app');
/*var io = require('socket.io')(server, {origins:'*'});
var redis = require('socket.io-redis');
var compress = require('compression');
var redis = require('socket.io-redis');
var uuid = require('node-uuid');
var geoip = require('geoip-lite');
var _ = require('underscore')._;
*/
app.set('port', process.env.PORT || 1515);
//io.adapter(redis({ host: 'localhost', port:1515 }));

var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});

