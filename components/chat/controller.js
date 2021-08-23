const { listChat, add } = require('./store');

const getChat = (userId) => {
    return listChat(userId);
};

const addChat = (users) => {
    return new Promise((res, rej) => {
        if (!users || !Array.isArray(users)) {
            return rej('[chatController] invalid user list');
        }

        const chat = {
            users
        };
        res(add(chat));
    });
};

module.exports = {
    getChat,
    addChat
}