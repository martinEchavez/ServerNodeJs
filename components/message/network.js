const express = require('express');
const multer = require('multer');
const response = require('../../network/response');
const { addMessage, getMessage, updateMessage, deleteMessage } = require('./controller');

const router = express.Router();

const upload = multer({
    dest: 'public/files/'
});

router.get('/', async (req, res) => {
    const filterMessages = req.query.chat || null;
    try {
        const data = await getMessage(filterMessages);
        response.success(req, res, 200, false, 'message success', data);
    } catch (error) {
        response.error(req, res, 400, true, 'error message', error);
    }
});

router.post('/', upload.single('file'), async (req, res) => {
    const { chat, user, message } = req.body;
    const { file } = req;
    try {
        const data = await addMessage(chat, user, message, file);
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