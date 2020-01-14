function admin (req,res,next){
    let usuario = req.query.user;
    if (usuario == "Ada" || usuario == "Greta" ||usuario == "Vim" ||usuario == "Tim"){
        next();
    } else {
        return res.redirect('/')
    }
}
module.exports = admin;