const { Allergen } = require("../models");

const AllergenController = {

    createAllergen(req,res){
        Allergen.create(req.body)
        .then(allergen => res.status(500).send(allergen))
        .catch(error => {
            console.error(error);
            res.status(500).send({message:"There was an error trying to create the allergen."});
        })
    },
    allAllergens(req,res){
        Allergen.findAll()
        .then(allergen => res.send(allergen))
        .catch(error => {
            console.error(error);
            res.status(500).send({message:"There was an error trying to get all the allergens."});
        }) 
    },

    async oneAllergen(req,res){
        try {
            const { id } = req.params;
            const allergenSelected = await Allergen.findOne({
                where:{
                    id: id
                }
            });

            res.status(201).send(allergenSelected);
        
        } catch (error) {
            console.error(error);
            res.status(500).send({message:"There was an error trying to get the allergen selected."});
        }        
    },

    updateAllergen(req,res){
        const { id } = req.params;
        Allergen.update(req.body,{
            where: {
                id: id
            }
        })
        .then(() => res.status(201).send({message:"Allergen succesfully updated."}))
        .catch(error => {
            console.error(error);
            res.status(500).send({message:"There was an error trying to update the allergen selected."})
        })
    },

    async deleteAllergen(req,res){
        try {
            const { id } = req.params;
            await Allergen.destroy({
                where:{
                    id: id
                }
            });
            res.status(201).send({message:"Allergen succesfully deleted."})
        } catch (error) {
            console.error(error);
            res.status(500).send({message:"There was an error trying to delete the allergen selected."})
        }
    }
};

module.exports = AllergenController;