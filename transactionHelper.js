
const { sequelize } = require('../models');

async function transferFunds (senderId, receiverId, amount) {
    const transaction  = await sequelize.transaction();
    try {

        await Account.update({ balance: sequelize.literal(`balance - ${amount}`) }, {
            where: { id: senderId },
            transaction
        });
        await  Account.update({ balance: sequelize.literal(`balance + ${amount}`) }, {
            where: { id: receiverId },
            transaction
        });
        await transaction.commit();
        return true;
    } catch (error) {
        await transaction.rollback();
        throw error;
    }
}

module.exports = { transferFunds };
