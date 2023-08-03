const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("postgres://qdxohcte:fQvNl-e2dgUdN2WYVzh_a6B3WREu_shO@babar.db.elephantsql.com/qdxohcte", {
  define: {
    timetamps: true,
    underscored: true,
  },
});

try {
  sequelize.authenticate();
  console.log('Conectado com o ElephantSQL!');
} catch (error) {
  console.error('Atenção, a conexão falhou!:', error);
}

module.exports = { Sequelize, sequelize };