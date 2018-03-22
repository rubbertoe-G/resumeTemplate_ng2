var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName:{type: String, required: true, max: 100},
    lastName:{type: String, required: true, max: 100},
    age:{type: String, required: true, max: 100},
    profession:{type: String, required: true, max: 100},

},{
    toObject:{
        virtuals: true
    },
    toJSON:{
        virtuals:true
    }
});

userSchema
    .virtual('name.full')
    .get(function(){
        return this.lastName + ', ' + this.firstName;
    });

userSchema
.virtual('url')
.get(function(){
    return '/user/' + this._id;
})

module.exports = mongoose.model('users', userSchema)