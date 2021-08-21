const express = require('express');
const response = require('../../network/response');
const { addMessage, getMessage, updateMessage, deleteMessage } = require('./controller');

const router = express.Router();

router.get('/', async (req, res) => {
    const { user } = req.query;
    try {
        const data = await getMessage(user || null);
        response.success(req, res, 200, false, 'message success', data);
    } catch (error) {
        response.error(req, res, 400, true, 'error message', error);
    }
});

router.post('/', async (req, res) => {
    const { user, message } = req.body;
    try {
        const data = await addMessage(user, message);
        response.success(req, res, 200, false, 'message created', data);
    } catch (error) {
        response.error(req, res, 400, true, 'message error', error);
    }
});

router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { message } = req.body;
    try {
        const data = await updateMessage(id, message);
        response.success(req, res, 200, false, 'Updated message', data);
    } catch (error) {
        response.error(req, res, 500, true, 'internal server error', error);
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const data = await deleteMessage(id);
        response.success(req, res, 200, false, 'Deleted message', data);
    } catch (error) {
        response.error(req, res, 400, true, 'message error', error);
    }
});

module.exports = router;