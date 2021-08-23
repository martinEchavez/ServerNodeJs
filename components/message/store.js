const Model = require('./model');

const getMessages = (filterChat) => {
    return new Promise((res, rej) => {
        let filter = {};
        if (filterChat !== null) {
            filter = { chat: filterChat };
        }
        Model.find(filter)
            .populate('user')
            .exec((error, populated) => {
                if (error) {
                    return rej(error);
                }
                res(populated);
            });
    });
};

const addMessage = (message) => {
    const myMessage = new Model(message);
    myMessage.save();
};

const updateMessage = async (id, message) => {
    const foundMessage = await Model.findById(id);
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

const deleteMessage = async (id) => {
    const foundMessage = await Model.findByIdAndDelete(id);
    return foundMessage;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    update: updateMessage,
    remove: deleteMessage
};