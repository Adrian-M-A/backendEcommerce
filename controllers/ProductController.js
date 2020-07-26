const {Product, Type, Allergen, AllergenProduct} = require("../models");
const { Op } = require("sequelize");

const ProductController = {

    async create(req,res){
        try {            
            const product = await Product.create(req.body);
            product.addAllergen(req.body.allergens)
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
        .then(products => res.status(201).send(products))
        .catch(error => {
            console.error(error),
            res.status(500).send({message:"There was an error trying to get all the products."})
        })
    },
    productsAsc(req,res){
        Product.findAll({
            order: [["price", "ASC"]],
            include:[Type, Allergen]
        })
        .then(products => res.status(201).send(products))
        .catch(error => {
            console.error(error),
            res.status(500).send({message:"There was an error trying to get all the products."})
        })
    },
    productsDesc(req,res){
        Product.findAll({
            order: [["price", "desc"]],
            include:[Type, Allergen]
        })
        .then(products => res.status(201).send(products))
        .catch(error => {
            console.error(error),
            res.status(500).send({message:"There was an error trying to get all the products."})
        })
    },

    selectedProducts(req,res){
        const { id } = req.params;
        Product.findOne({
            where:{
                id: id
            } 
        })
        .then(products => res.status(201).send(products))
        .catch(error => {
            console.error(error),
            res.status(500).send({message:"There was an error trying to get all the products."})
        })
    },

    
    async searchByName(req,res){
        try {
            const { name } = req.body;
            const productsByName = await Product.findOne({
                where:{
                    name: name
                }
            });
            res.status(201).send(productsByName);
            
        } catch (error) {
            console.error(error);
            res.status(500).send({message:"There was an error trying to delete the product."})
        }
    },

    async searchByTag(req,res){
        try {
            const { tag } = req.params;
            const productsByName = await Product.findAll({
                where:{
                    [Op.or]:[{
                        name: {
                            [Op.regexp]:`.*${tag}.*`
                        }
                    }, {
                        description: {
                            [Op.regexp]:`.*${tag}.*`
                        }
                    } ]
                }
            });
            res.status(201).send(productsByName);
            
        } catch (error) {
            console.error(error);
            res.status(500).send({message:"There was an error trying to delete the product."})
        }
    },

    type(req,res){
        const { id } =  req.params;
        Product.findAll({
            where: {
                TypeId: id
            }
        })
        .then(products => res.status(201).send(products))
        .catch(error => {
            console.error(error);
            res.status(500).send({message:"There was an error trying to get the product."})
        })
    },

    glutenFree(req,res){
        Product.findAll({
            where: {
                gluten: false
            }
        })
        .then(products => res.status(201).send(products))
        .catch(error => {
            console.error(error);
            res.status(500).send({message:"There was an error trying to get gluten free products."})
        })
    },
    vegan(req,res){
        Product.findAll({
            where: {
                vegetarian: true
            }
        })
        .then(products => res.status(201).send(products))
        .catch(error => {
            console.error(error);
            res.status(500).send({message:"There was an error trying to get vegetarian products."})
        })
    },

    updateProduct(req,res){
        const { id } =  req.params;
        Product.update(req.body, {
            where: {
                id: id
            }
        })
        .then(() => res.status(201).send({message:"Product succesfully updated."}))
        .catch(error => {
            console.error(error);
            res.status(500).send({message:"There was an error trying to update the product."})
        })
    },

    async delete(req,res){
        try {
            const { id } = req.params;
            await Product.destroy({
                where:{
                    id: id
                }
            })
            res.status(201).send({message:"Product succesfully deleted."})
            
        } catch (error) {
            console.error(error);
            res.status(500).send({message:"There was an error trying to delete the product."})
        }
    }
};

module.exports = ProductController;