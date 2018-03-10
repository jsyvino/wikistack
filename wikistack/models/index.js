const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

const Page = db.define('pages', {
    title: Sequelize.STRING,
    urlTitle: {
        type: Sequelize.STRING,
        validate: {isURL: true}
    },
    content: Sequelize.TEXT,
    status: Sequelize.ENUM ('open', 'closed')
});

const User = db.define('users', {
    name: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true,
            notNull: true,
            unique: true
        }
    }
});

module.exports = {
    Page, 
    User
};