const { Type } = require("../models");

const TypeController = {

    createType(req,res){
        Type.create(req.body)
        .then(type => res.send(type))
        .catch(error => {
            console.error(error);
            res.status(500).send({message:"There was an error trying to create the type of product."})
        })
    },

    allTypes(req,res){
        Type.findAll()
        .then(types => res.send(types))
        .catch(error => {
            console.error(error);
            res.status(500).send({message:"There was an error trying to get all the types of products."});
        }) 
    },

    async oneType(req,res){
        try {
            const { id } = req.params;
            const typeSelected = await Type.findOne({
                where:{
                    id: id
                }
            });
            res.status(201).send(typeSelected);
        
        } catch (error) {
            console.error(error);
            res.status(500).send({message:"There was an error trying to get the type of product selected."});
        }        
    },

     updateType(req,res){
        const { id } = req.params;
        Type.update(req.body, {
            where: {
                id: id
            }
        })
        .then(() => res.status(201).send({message:"Type succesfully updated."}))
        .catch(error => {
            console.error(error);
            res.status(500).send({message:"There was an error trying to update the type selected."})
        })
    },

    async deleteType(req,res){
        try {
            const { id } = req.params;
            await Type.destroy({
                where:{
                    id: id
                }
            });
            res.status(201).send({message:"Type succesfully deleted."})
        } catch (error) {
            console.error(error);
            res.status(500).send({message:"There was an error trying to delete the type selected."})
        }
    }
}

module.exports = TypeController;