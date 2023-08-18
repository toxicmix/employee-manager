const connection = require("./connection");

async function getAllDepartments(db){
    return await db.promise().query(
        "SELECT department.id, department.name FROM department;"
    );
}

module.exports = {
    getAllDepartments
}