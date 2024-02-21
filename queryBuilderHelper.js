// Example query builder helper using Sequelize (SQL-based databases)
const { Op } = require('sequelize');
const { User } = require('../models');

async function getUsersByAgeRange(minAge, maxAge) {
    return await User.findAll({
        where: {
            age: {
                [Op.gte]: minAge,
                [Op.lte]: maxAge
            }
        }
    });
}

module.exports = { getUsersByAgeRange };
