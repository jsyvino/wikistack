const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

const Page = db.define('pages', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    urlTitle: {
        type: Sequelize.STRING,
        validate: {isURL: true},
        allowNull: false,
        get() {
            const route = this.getDataValue('urlName');
            return '/wiki/' + route;
          },
    },

    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },

    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    status: Sequelize.ENUM ('open', 'closed')
});



const User = db.define('users', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true,
            unique: true
        },
        allowNull: false
    }
});

module.exports = {
    Page, 
    User,
    db
};