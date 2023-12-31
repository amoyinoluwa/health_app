const { pool } = require("../server")

const dropTable = async (tableName) => {
  try {
    if (!tableName) {
      return 0;
    }
    await pool.query(`DROP TABLE IF EXISTS ${tableName}`)
  }
  catch (err) {
    console.log(err)
  }
}

const dropAllTables = async () => {
  try {

    await dropTable('chats')
    console.log('all table(s) dropped successfully')
  }
  catch (err) {
    console.log(`Oops! something went wrong while trying to DROP TABLE : ${err.message}`)
  }
}

dropAllTables()


