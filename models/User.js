const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },  
    surnames: {
        type: String,
        required: true
    },  
    address: {
        type: String,
        required: true
    },  
    phone: String,
    document: {
        type: String,
        required: true,
    },  
    email: {
        type: String,
        unique: [true, "The email is in use."],
        required: [true, "Email required."],
        validate: {
            validator: function(email) {
                return validator.isEmail(email)
            },
            message: props => `${props.value} is not a valid Email!`
        },
    },  
    password: {
        type: String,
        required: [true, "Password required."],
        minlength: 8
    },  
    token: [String]
}, {
    timestamps:true
});

UserSchema.methods.toJSON = function() {
    const user = this.toObject();
    delete user.password;
    delete user.tokens;
    return user;
}

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
