const { add, list, update, remove } = require("./store");

const getMessage = (user) => {
    return new Promise((res, rej) => {
        const result = list(user);
        res(result);
    });
}

const addMessage = (user, message) => {
    return new Promise((res, rej) => {
        if (!user || !message) {
            return rej('[messageController] incorrect user or message');
        }
        const fullMessage = {
            user,
            message,
            date: new Date()
        };
        add(fullMessage);
        res(fullMessage);
    });
}

const updateMessage = (id, message) => {
    return new Promise(async (res, rej) => {
        if (!id || !message) {
            return rej('[messageController] incorrect id or message');
        }
        const result = await update(id, message)
        res(result);
    });
}

const deleteMessage = (id) => {
    return new Promise(async (res, rej) => {
        if(!id) {
            return rej('[messageController] incorrect id');
        }
        const result = await remove(id);
        res(result);
    });
}

module.exports = {
    addMessage,
    getMessage,
    updateMessage,
    deleteMessage
}