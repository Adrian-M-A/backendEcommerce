import { Allergen } from "../models/Allergen.js";

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
        .then(allergen => req.send(allergen))
        .catch(error => {
            console.error(error);
            res.status(500).send({message:"There was an error trying to get all the allergens."});
        }) 
    },

    async oneAllergen(req,res){
        try {
            const { allergen } = req.params;
            const allergenSelected = await Allergen.findOne({
                where:{
                    name: allergen
                }
            });

            res.status(201).send(allergenSelected);
        
        } catch (error) {
            console.error(error);
            res.status(500).send({message:"There was an error trying to get the allergen selected."});
        }        
    },

    updateAllergen(req,res){
        const { allergen } = req.params;
        Allergen.update({
            where: {
                name: allergen
            }
        })
        .then(allergen => res.status(201).send(allergen))
        .catch(error => {
            console.error(error);
            res.status(500).send({message:"There was an error trying to update the allergen selected."})
        })
    },

    async deleteAllergen(req,res){
        try {
            const { allergen } = req.params;
            await Allergen.destroy({
                where:{
                    name: allergen
                }
            });
            res.status(201).send({message:"Allergen succesfully deleted."})
        } catch (error) {
            console.error(error);
            res.status(500).send({message:"There was an error trying to delete the allergen selected."})
        }
    }
};

export default AllergenController;