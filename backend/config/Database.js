import { Sequelize } from "sequelize";

const db = new Sequelize("xyzz", "root", "",{
    host: "localhost",
    dialect: "mysql"
});

export default db;