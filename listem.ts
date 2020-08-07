
// Compile: tsc listen.ts  or  tsc listen.ts --skipLibCheck true

const Server = require( 'DiffNG' )

interface modPackMeta {
    name: string
}

let modPack: modPackMeta = { name: "" }
try {
    modPack = require( './package.json' )
    process.title = modPack.name
}
catch(err) {
    process.title = "RocketBooster"
    console.log( 'package.json path is invalid' )
}
    
Server.listen('build')

