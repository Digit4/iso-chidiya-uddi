const clientService = require('../services/clients.service');

const createUser = async (req, res) => {
    try {
        const { userName, sessionID } = req.body;

        const user = await clientService.createUser(userName, sessionID);

        res.status(200).json(user);
    } catch (error) {
        if (error === 'Session not found') {
            console.error('Session not found');
            res.status(404).json({ error: 'Requested session not found' });
        } else {
            console.error('Unexpected error occurred', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};

const getUser = async (req, res) => {
    try {
        const { clientID } = req.params;
        console.log(clientID);
        const client = await clientService.getUser(clientID);
        if (client) {
            res.status(200).json(client);
        } else {
            res.status(404).json({ message: 'Client not found' });
        }
    } catch (error) {
        console.error('Error occurred while trying to get user: ', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = {
    createUser,
    getUser,
};
