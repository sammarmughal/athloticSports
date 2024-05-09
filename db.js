const {
    createPool
} = require('mysql');

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "athloticsports",
    database: "athlotic_sports",
    connectionLimit: 100
})


