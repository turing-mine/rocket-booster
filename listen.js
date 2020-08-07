var Server = require('DiffNG');
var modPack = { name: "" };
try {
    modPack = require('./package.json');
    process.title = modPack.name;
}
catch (err) {
    process.title = "RocketBooster";
    console.log('package.json path is invalid');
}
Server.listen('build');
