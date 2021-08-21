const express = require('express');
const response = require('../../network/response');
const { getUsers, addUser, updateUser, deleteUser } = require('./controller');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = await getUsers();
        response.success(req, res, 200, false, 'Get messages', data);
    } catch (error) {
        response.error(req, res, 500, true, 'Internal error', error);
    }
});

router.post('/', async (req, res) => {
    const { name, lastName } = req.body;
    try {
        const data = await addUser(name, lastName);
        response.success(req, res, 200, false, 'Add messages', data);
    } catch (error) {
        response.error(req, res, 500, true, 'Internal error', error);
    }
});

router.put('/:id', async (req, res) => {
    const { name, lastName } = req.body;
    const { id } = req.params;
    try {
        const data = await updateUser(id, name, lastName);
        response.success(req, res, 200, false, 'Update messages', data);
    } catch (error) {
        response.error(req, res, 500, true, 'Internal error', error);
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const data = await deleteUser(id);
        response.success(req, res, 200, false, 'Delete messages', data);
    } catch (error) {
        response.error(req, res, 500, true, 'Internal error', error);
    }
});

module.exports = router;