exports.getUser = (req, res, next) => {
    res.send({
        pesan: "ini respon api user",
        nama: "Fajar",
        asal: "saturn"
    });
};