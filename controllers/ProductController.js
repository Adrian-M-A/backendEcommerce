import Product from "../models/Product.js";
import Type from "../models/Type.js";
import Allergen from "../models/Allergen.js";

const ProductController = {

    async create(req,res){
        try {
            const product = await Product.create(req.body);
            product.addType(req.body.type);
            product.addAllergen(req.body.allergen);
            res.status(201).send(product);
            
        } catch (error) {
            console.error(error);
            res.status(500).send({message:"There was an error trying to create the product."})
        }
    },

    getProducts(req,res){
        Product.findAll({
            include:[Type, Allergen]
        })
        .then(products => res.send(products))
        .catch(error => {
            console.error(error),
            res.status(500).send({message:"There was an error trying to get all the products."})
        })
    },

    updateProduct(req,res){
        const { name } =  req.params;
        Product.destroy({
            where: {
                name: name
            }
        })
        .then(() => res.send({message:"Order succesfully updated."}))
        .catch(error => {
            console.error(error);
            res.status(500).send({message:"There was an error trying to update the product."})
        })
    },

    async delete(req,res){
        try {
            const { name } = req.params;
            await Product.destroy({
                where:{
                    name: name
                }
            })
            res.status(201).send({message:"Product succesfully deleted."})
            
        } catch (error) {
            console.error(error);
            res.status(500).send({message:"There was an error trying to delete the product."})
        }
    }
};

export default ProductController;