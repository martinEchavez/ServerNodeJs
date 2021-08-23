const { listChat, add } = require('./store');

const getChat = (userId) => {
    return listChat(userId);
};

const addChat = (users) => {
    if (!users || !Array.isArray(users)) {
        return Promise.reject('[chatController] invalid user list');
    }
    const chat = {
        users
    };
    return add(chat);
};

module.exports = {
    getChat,
    addChat
}