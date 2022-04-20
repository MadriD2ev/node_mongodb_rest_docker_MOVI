const mongoose = require('mongoose')
const {isValidEmail} = require('../helpers/index')
//Schema = estructura que tiene nuestro modelo en la BD
const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    }
})

UserSchema.statics.userup = userup;
UserSchema.statics.updateUser = updateUser;

//modelo, esquema y tabla
mongoose.model('user', UserSchema, 'users')

function userup(userInfo){
    if (!userInfo.email || !isValidEmail(userInfo.email)) throw new Error('email is invalid')
    if (!userInfo.firstname) throw new Error('firstName is required')
    if (!userInfo.lastname) throw new Error('lastName is required')

    return this.findOne({email: userInfo.email})
    .then(user => {
        if (user) throw new Error('Este usuario ya existe')

        const newUser = {
            firstName: userInfo.firstname,
            lastName: userInfo.lastname,
            email: userInfo.email
        }
    
        return this.create(newUser);

    })
    .then(userCreated => userCreated);
    
}

function updateUser(id, todoInfo = {}){
    //console.log(todoInfo.user.firstName)
    const update = {}
    if(todoInfo.user.firstName) update.firstName = todoInfo.user.firstName
    if(todoInfo.user.lastName) update.lastName = todoInfo.user.lastName
    if(todoInfo.user.email) update.email = todoInfo.user.email

    return this.findOne({_id:id})
        .then(todo => {
            if(!todo) throw new Error('El usuario con ese id no esta en la bd')
            todo.set(update)
            return todo.save();
        });
}

