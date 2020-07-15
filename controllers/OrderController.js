const { Order, Product, Allergen, Type } = require("../models");

const OrderController = {

    create(req,res){
        
        Order.create({
            CustomerId: req.user._id.toString(),
            DeliveryDate: Date.now(),
            status: "pending"
        })
        .then(order => {
            req.body.products.forEach(product => {
                order.addProduct(product.id, {through: {quantity: product.quantity}})
            })
            res.status(201).send(order)
        })
        .catch(error =>{
            console.error(error);
            res.status(500).send({message:"There was an error trying to create the order."})
        })
    },

    async allOrders(req,res){
        try {
            const allOrders = await Order.findAll({
                limit: 100,
                include:[{model: Product, include: [Allergen, Type]}]
            });
            res.status(201).send(allOrders);
            
        } catch (error) {
            console.error(error);
            res.status(500).send({message:"There was an error trying to get all the order."})
        }
    },

    selectedOrder(req,res){
        const { id } = req.params;
        Order.findOne({
            where:{
                id: id
            }
        })
        .then(order => res.send(order))
        .catch(error => {
            console.error(error);
            res.status(500).send({message:"There was an error trying to get the selected order."})
        })
    },

    async updateOrder(req,res){
        try {
            const { id } = req.params;
            await Order.update(req.body, {
                where:{
                    id: id
                }
            });
            res.status(201).send({message:"Order succesfully updated."});
            
        } catch (error) {
            console.error(error);
            res.status(500).send({message:"There was an error trying to get update the order."})
        }
    },

    delete(req,res){
        const { id } = req.params
        Order.destroy({
            where:{
                id:id
            }
        })
        .then(res.status(201).send({message:"Order sucessfully deleted."}))
        .catch(error =>{
            console.error(error);
            res.status(500).send({message:"There was an error trying to delete the order."})
        })
    }

};

module.exports = OrderController;