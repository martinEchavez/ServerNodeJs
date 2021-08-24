const { add, list, update, remove } = require("./store");

const getMessage = (filterChat) => {
    return new Promise((res, rej) => {
        const result = list(filterChat);
        res(result);
    });
}

const addMessage = (chat, user, message, file) => {
    return new Promise((res, rej) => {
        if (!chat, !user || !message) {
            return rej('[messageController] incorrect user, message or chat');
        }

        let fileUrl = '';

        if (file) {
            fileUrl = 'http://localhost:3000/app/files/' + file.filename;
        }

        const fullMessage = {
            chat,
            user,
            message,
            date: new Date(),
            file: fileUrl
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
        if (!id) {
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