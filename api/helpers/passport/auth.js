const checkAuth = (req, res, next) => {
    req.isAuthenticated() ? next() : res.redirect("/Bienvenidos");
}

