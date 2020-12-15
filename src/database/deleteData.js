const Database = require('./db');

module.exports = {
  async deleteOrphanage(request, response) {
    try {
      const orphanageName = prompt("Tell me the orphanage name to DELETE");
      const db = await Database;
      const query = await db.all(`DELETE FROM orphanages WHERE name = '${orphanageName}' `)
      const orphanages = await db.all("SELECT * FROM orphanages")
      return console.log(orphanages)
    } catch (error) {
      console.log(error)
      return response.send('Erro no banco de dados!')
    }
  }
}