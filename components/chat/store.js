const Model = require('./model');

const listChat = async (userId) => {
    return new Promise((res, rej) => {
        let filter = {};
        if (userId) {
            filter = {
                users: userId
            }
        }
        Model.find(filter)
            .populate('users')
            .exec((error, populated) => {
                if (error) {
                    return rej(error);
                }
                res(populated);
            });
    });
};

const addChat = (chat) => {
    const myChat = new Model(chat);
    return myChat.save();
};

module.exports = {
    listChat,
    add: addChat
}