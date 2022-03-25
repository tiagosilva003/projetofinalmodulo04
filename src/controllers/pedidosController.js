const Pedidos = require("../models/pedidosModel");

module.exports = {
    async all(request, response) {
        try {
            const pedidos = await Pedidos.findAll();
            response.status(200).json(pedidos);
         } catch (error) {
            response.status(400).json(error);
          }
        },

    async one(request,response) {
        try {
            const id = request.params.id;
            const pedidos = await Pedidos.findOne({where: {id}});

            if(!pedidos) {
                return response.status(400).json("Pedido Não Localizado!");
            }
            response.status(200).json(pedidos);
        } catch (error) {
            response.status(400).send(error);
        }
    },
    
    async create(request, response) {
        try {
            await Pedidos.create(request.body);
            response.status(200).json("Pedido inserido com sucesso!");
        } catch (error) {
            response.status(400).send(error);
        }
    },

    async update(request, response) {
        try {
            const {book_id, client_id, date, payments, shipping_method} = request.body;
            const id = request.params.id

            const pedidos = await Pedidos.findOne({where:{id}});
            if(!pedidos) {
                return response.status(400).json("Pedido não localizado");
            }

            pedidos.book_id = book_id;
            pedidos.client_id = client_id;
            pedidos.date = date;
            pedidos.payments = payments;
            pedidos.shipping_method = shipping_method;


            await pedidos.save();
            response.status(201).json("Pedido atualizado")
        } catch (error) {
            response.status(400).send(error);
        }
    },

    async delete(request, response) {
        try {
            const id = request.params.id;
            const pedidos = await Pedidos.destroy({where:{id}});
            
            if(!pedidos){
                return response.status(400).json("Pedido não encontrado!");
            }
            response.status(201).json("Pedido removido");
        } catch (error) {
            response.status(400).send(error);
        }
    }
};