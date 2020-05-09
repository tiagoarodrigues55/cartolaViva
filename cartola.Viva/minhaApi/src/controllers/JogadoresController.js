const Jogadores = require('../models/Jogadores')

module.exports = {
    async index(req, res) {
        const jogadores = await Jogadores.findAll()

        return res.json(jogadores)
    },

    async store(req, res) {
        const { name, img, media, preço, ultimapontuação, valorização } = req.body

        const jogadores = await Jogadores.create({ name, img, media, preço, ultimapontuação, valorização })

        return res.json(jogadores)
    },
    async update(req, res){
        const { id } = req.params
        const { media, preço, ultimapontuação, valorização } = req.body
        const jogadores = Jogadores.update({ media, preço, ultimapontuação, valorização}, {where: { id: id}})

        return res.json(jogadores)
    }
}