export function auth (req, res, next){
    console.log("Authentification réussie")
    next();
}