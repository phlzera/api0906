const {Service: ServiceModel} = require('../models/Service')

const serviceController = { 
    create: async (req,res) => {
        try {
            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image
            };
    
            const response = await ServiceModel.create(service)
            return res.status(201).json({response, msg: 'Servico criado com sucesso!'})
        } catch (error) {
            return res.status(500).json({erro: error})
        }
    }
}

module.exports = serviceController;