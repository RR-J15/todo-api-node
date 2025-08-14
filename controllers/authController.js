 const User = require ("../ models / User ");
 const jwt = require (" jsonwebtoken ");
 const bcrypt = require (" bcrypt ");

 exports.register = async (req , res ) => {

 const { name, email , password } = req .body;

try{
 const user = await User. create ({name, email , password });
 res . status (201). json( { message : " Utilisateur creé" ,user });
}catch( err ){
 res. status (400). json({ error : "Email déjà utilisé ou invalide ." });
 }
};

exports.login = async (req , res )=>{
       const { email , password } = req .body;
       try {
       const user = await User. findOne({ email });
       if (! user ) return res . status (401). json ({ error :" Utilisateur introuvable " });
       const isMatch = await bcrypt .compare(password , user . password );
       if (! isMatch ) return res . status (401). json ({ error :"Mot de passe incorrect " });
       const token = jwt .sign( {id : user._id} , process.env.JWT_SECRET , {expiresIn :"1d"} );
       res . json ({ message : "Connexion réussie ", token });
     }catch(err){
            res . status (500). json ({ error : "Erreur serveur" });
        }
};