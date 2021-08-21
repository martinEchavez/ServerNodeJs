const { get, add, update, remove } = require("./store")

const getUsers = () => {
    return new Promise((res, rej) => {
        res(get());
    });
}

const addUser = (name, lastName) => {
    return new Promise((res, rej) => {
        if(!name) {
            return rej(`[userController] name is not defined`);
        }
        const fullname = {
            name,
            lastName
        }
        add(fullname);
        res(fullname);
    });
}

const updateUser = (id, name, lastName) => {
    return new Promise((res, rej) => {
        if(!id || !name) {
            return rej(`[userController] name or id is not defined`);
        }
        const result = update(id, name,lastName);
        res(result);
    });
}

const deleteUser = (id) => {
    return new Promise((res, rej) => {
        if(!id) {
            return rej(`[userController] id is requiered`);
        }
        const result = remove(id);
        res(result);
    });
}

module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser
}