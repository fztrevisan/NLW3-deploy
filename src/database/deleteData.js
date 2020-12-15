const Database = require('./db')

Database.then(async db => {
  await prompt("Tell me the name of the orphanage to DELETE: ", "name")
  // Deletar dados da tabela:
  await db.run("DELETE FROM orphanages WHERE name = '' ")

  //Printar os dados pra ver se saiu:
  const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  console.log(selectedOrphanages)
}) 