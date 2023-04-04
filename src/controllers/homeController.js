exports.getHome = (req, res, next) => {
    res.send('<h1>Selamat Datang di Beranda</h1>');
};

exports.middleware = (req,res,next) =>
{
    req.model = 'Anda berasil keluar'
    next()
}

exports.getLogOut = (req, res, next) => {
    console.log('ini request :>> ', req)
    res.send({
        response: req.model
    })
    next()
};

