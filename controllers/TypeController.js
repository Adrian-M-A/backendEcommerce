import { Type } from "../models/Type.js";

const TypeController = {

    createType(req,res){
        Type.create(req.body)
        .then(type => req.send(type))
        .catch(error => {
            console.error(error);
            res.status(500).send({message:"There was an error trying to create the type of product."})
        })
    },

    allTypes(req,res){
        Type.findAll()
        .then(types => req.send(types))
        .catch(error => {
            console.error(error);
            res.status(500).send({message:"There was an error trying to get all the types of products."});
        }) 
    },

    async oneType(req,res){
        try {
            const { type } = req.params;
            const typeSelected = await Type.findOne({
                where:{
                    type: type
                }
            });
            res.status(201).send(typeSelected);
        
        } catch (error) {
            console.error(error);
            res.status(500).send({message:"There was an error trying to get the type of product selected."});
        }        
    },

    updateType(req,res){
        const { type } = req.params;
        Type.update({
            where: {
                type: type
            }
        })
        .then(type => res.status(201).send(type))
        .catch(error => {
            console.error(error);
            res.status(500).send({message:"There was an error trying to update the type selected."})
        })
    },

    async deleteType(req,res){
        try {
            const { type } = req.params;
            await Type.destroy({
                where:{
                    type: type
                }
            });
            res.satatus(201).send({message:"Type succesfully deleted."})
        } catch (error) {
            console.error(error);
            res.status(500).send({message:"There was an error trying to delete the type selected."})
        }
    }
}

export default TypeController;