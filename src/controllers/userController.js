const getModelByName = require('../helpers/getModelByName')
const User = getModelByName('user');

module.exports.userup = function (req, res) {

    //Sino llega el objeto no hay usuario que crear
    if(!req.body.user) return res.status(200).send({success: false, error: 'user info not found'})

    try {

        User.userup(req.body.user)
            .then(()=>{
                res.status(200).send({success: true, error: 'usuario creado'})
            }).catch(error => res.status(200).send({success: false, error: error.message }))
        
    } catch (error) {
        res.status(500).send({success: false, error: error.message })
    }
}

module.exports.getTodos = async function (req, res) {
    try {

        const users = await User.find()
        res.status(200).send({success: true, data: users})
        
    } catch (error) {
        res.status(500).send({success: false, error: error.message })
    }
}

module.exports.updateUser = function(req, res) {
    User.updateUser(req.params.id, req.body)
    .then(todo => {
        res.status(200).send({success: true, data: {todo}})
    }).catch(error => res.status(200).send({success: false, error: error.message }))
}

module.exports.deleteUser = async function (req, res) {

    try {

        const user = await User.findByIdAndDelete(req.params.id)

        if(!user){
            return res.status(404).send('El usuario con ese id no esta en la bd, no se puede borrar')
        }

        res.status(200).send('Usuario borrado')
        
    } catch (error) {
        res.status(500).send({success: false, error: error.message })
    }
}

