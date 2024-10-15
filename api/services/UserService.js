const UserModel = require('../models/UserModel');

class UserService {
    async createUser (userData) {
        const user = new UserModel(userData);
        return await user.save();
    }

    async getUser (userId) {
        return await UserModel.findById(userId);
    }

    async updateUser (userId, userData) {
        return await UserModel.findByIdAndUpdate(userId, userData, { new: true });
    }

    async deleteUser (userId) {
        return await UserModel.findByIdAndDelete(userId);
    }
}

module.exports = new UserService();
