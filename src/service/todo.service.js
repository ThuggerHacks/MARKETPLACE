import { todolist } from '../model/model';

const create = async(req,res) => {
    const {title} = req.body;

   try{
        const insert = new todolist({title});
        const save = insert.save();
        return res.json(save);
   }catch(error){
       return res.json(error);
   }

}

const update = (req, res) => {
    const { _id } = req.params;
    const { status } = req.body;

    todolist.updateOne({_id},{status:status}).then(resp => {
        return res.json(resp);
    }).catch(error => {
        return res.json(error);
    })

}

const read = (_,res) => {
    todolist.find().then(resp => {
        return res.json(resp);
    }).catch(error => {
        return res.json(error);
    })
}


const remove = (req,res) => {
    const {_id} = req.params;
    todolist.deleteOne({_id}).then(resp => {
        return res.json(resp);
    }).catch(error => {
        return res.json(error);
    })
}

export { read, remove, update, create };