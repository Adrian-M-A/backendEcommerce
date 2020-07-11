import Order from "../models/Order.js";

const OrderController = {

    create(req,res){
        Order.create(req.body)
        .then(order => {
            Order.addProduct(req.body.products);
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
                limit: 100
            });
            res.status(201).send(allOrders);
            
        } catch (error) {
            console.error(error);
            res.status(500).send({message:"There was an error trying to get all the order."})
        }
    },

    selectedOrder(req,res){
        const { id } =req.params;
        Order.FindOne({
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
            const orderUpdated = await Order.update({
                where:{
                    id: id
                }
            });
            res.status(201).send(orderUpdated);
            
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

export default OrderController;