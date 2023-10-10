const jwt = require('jsonwebtoken');

const generarJWT = ( uid, name ) => {

    return new Promise( (resove, reject) => {

        const payload = {uid, name}

        jwt.sign( payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '2h'
        }, ( err, token ) => {
            if (err){
                console.log(err);
                reject('No se pudo generar el token')
            }

            resove( token );

        } )



    } )



}



module.exports = {
    generarJWT
}

