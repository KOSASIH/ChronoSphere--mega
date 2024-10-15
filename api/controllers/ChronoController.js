const UserService = require('../services/UserService');

class ChronoController {
    async createUser (req, res) {
        try {
            const user = await UserService.createUser (req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getUser (req, res) {
        try {
            const user = await UserService.getUser (req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'User  not found' });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateUser (req, res) {
        try {
            const updatedUser  = await UserService.updateUser (req.params.id, req.body);
            res.status(200).json(updatedUser );
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteUser (req, res) {
        try {
            await UserService.deleteUser (req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new ChronoController();
