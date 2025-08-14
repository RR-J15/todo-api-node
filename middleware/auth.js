const jwt = require ("jsonwebtoken");

module. exports = function (req , res , next) {

const authHeader = req . headers . authorization ;

 if (! authHeader ){ 
    return res.status(401).json(
     {message : "Token manquant" } 
    );
    }

 const token = authHeader. split (" ")[1];

 try {
 req . userId = decoded . id ;
 next ();
 }catch{
     const decoded = jwt . verify (token , process . env .JWT_SECRET);
     res . status (401). json (
        { message :" Token invalide "}
        );
    }

};