const {Service: ServiceModel, Service} = require('../models/Service')

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
    },

    getAll: async (req,res) => {
        try {
            const services = await ServiceModel.find();
            return res.status(200).json(services)
            
        } catch (error) {
            return res.status(400).json({mensagem: 'Houve um erro ao tentar pesquisar todos.'})
        }
    },

    get: async (req,res) => {
        try {
            const id = req.params.id
            const service = await ServiceModel.findById(id)
            return res.status(200).json(service)
        } catch (error) {
            return res.status(400).json({mensagem: error.message})
        }
    }
}

module.exports = serviceController;