// Example transaction helper using Sequelize (SQL-based databases)
const { sequelize } = require('../models');

async function transferFunds(senderId, receiverId, amount) {
    const transaction = await sequelize.transaction();
    try {
        // Deduct amount from sender's account
        await Account.update({ balance: sequelize.literal(`balance - ${amount}`) }, {
            where: { id: senderId },
            transaction
        });
        // Add amount to receiver's account
        await Account.update({ balance: sequelize.literal(`balance + ${amount}`) }, {
            where: { id: receiverId },
            transaction
        });
        // Commit the transaction
        await transaction.commit();
        return true;
    } catch (error) {
        // Rollback the transaction in case of error
        await transaction.rollback();
        throw error;
    }
}

module.exports = { transferFunds };