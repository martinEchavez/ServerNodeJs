const chalk = require('chalk');
const err = console.error;

exports.success = (req, res, status, error, message, data) => {
    res.status(status || 200).send({
        "error": error || false,
        "message": message,
        "data": data,
    });
};

exports.error = (req, res, status, error, message, details) => {
    err(chalk.red(`[response error] ${details}`));

    res.status(status || 500).send({
        "error": error || true,
        "message": message
    });
}