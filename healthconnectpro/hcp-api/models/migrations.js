const { pool } = require("../server");
const { authSchema } = require("./schemas/auth");
const { messageSchema } = require("./schemas/message");
const { chatSchema } = require('./schemas/chat')

const createTable = async (schemaQuery) => {
  try {
    await pool.query(schemaQuery);
  } catch (err) {
    throw err.message;
  }
};

const importTableData = async (tableSchema, tableName, data) => {
  await createTable(tableSchema);
  try {
    if (data.length > 0) {
      for (let i = 0, len = data.length; i <= len; i += 1) {
        const keys = Object.keys(data[i]);
        const values = Object.values(data[i]);
        const query = `INSERT INTO ${tableName} (${keys}) VALUES (${values}) `;
        console.log(query)
        await pool.query(query);
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const createAllTables = async () => {
  try {
    await importTableData(authSchema, "users", []);
    await importTableData(messageSchema, "messages", []);
    await importTableData(chatSchema, "chats", []);
    console.log("All table created successfully.");
  } catch (err) {
    console.log(err);
  }
};

createAllTables();
