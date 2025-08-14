const Todo = require ("../models/Todo");

exports.getTodos = async(req,res) =>{
    const todos = await Todo. find ({ userId : req . userId });
    res . json ( todos );
};

exports.createTodo = async(req , res ) =>{
 const { title } = req.body;
 const todo = new Todo({ title , userId : req . userId });
 await todo . save ();
 res. status (201). json ( todo );
};

exports.updateTodo = async (req , res ) => {
try{
 const { id } = req.params;
 const todo = await Todo. findByIdAndUpdate(id,req.body , { new: true });

 if(!todo ) {
    return res.status (404). json ({message :" Tache non trouvee "});
    }
}catch( error ){
 res.json ({ message : "Tache mise a jour avec succes " , todo });
 res.status (500). json ({ message : "Erreur serveur" });
    }
};

exports.deleteTodo = async(req , res ) => {
 await Todo. findOneAndDelete ({_id : req . params . id ,
 userId : req . userId });
 res . json ({ message : "Tache supprimee" });
};