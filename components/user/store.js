const Model = require('./model');

const getUsers = async () => {
    return await Model.find();
}

const addUser = (fullname) => {
    const getFullname = new Model(fullname);
    getFullname.save();
}

const updateUser = async (id, name, lastName) => {
    const foundUser = await Model.findById(id);
    foundUser.name = name;
    foundUser.lastName = lastName;
    const newUser = await foundUser.save();
    return newUser;
}

const deleteUser = async (id) => {
    const foundUser = await Model.findByIdAndDelete(id);
    return foundUser;
}

module.exports = {
    get: getUsers,
    add: addUser,
    update: updateUser,
    remove: deleteUser
}