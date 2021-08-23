const express = require('express');
const response = require('../../network/response');
const { getChat, addChat } = require('./controller');

const router = express.Router();

router.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const data = await getChat(userId);
        response.success(req, res, 200, false, 'Chat success', data);
    } catch (error) {
        response.error(req, res, 500, true, 'Internal server error', error);
    }
});

router.post('/', async (req, res) => {
    const { users } = req.body;
    try {
        const data = await addChat(users);
        response.success(req, res, 200, false, 'Chat created', data);
    } catch (error) {
        response.error(req, res, 500, true, 'Internal server error', error);
    }
});

module.exports = router;