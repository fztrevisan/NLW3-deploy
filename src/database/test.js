const Database = require('./db')

// Database.then(async (db) => {
//   // Inserir dados na tabela manualmente:
//   await db.run(`
//     INSERT INTO orphanages(
//       lat,
//       lng,
//       name,
//       about,
//       whatsapp,
//       images,
//       instructions,
//       opening_hours,
//       open_on_weekends
//     ) VALUES(
//       "-25.426799",
//       "-49.267538",
//       "Lar dos meninos",
//       "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
//       "041997165386",
//       "https://cristoeavidaguaruja.files.wordpress.com/2008/12/orfantano-29-11-07.jpg",
//       "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
//       "Horário de visitas Das 18h até 10h",
//       "0"
//     );
//   `)

//   // Consultar todos os dados da tabela
//   const selectedOrphanages = await db.all("SELECT * FROM orphanages")
//   console.log(selectedOrphanages)

//   // Consultar dados apenas do ID desejado
//   const orphanage = await db.all('SELECT * FROM orphanages WHERE id = 1')
//   console.log(orphanage)
// })

// Fazendo query com string variável:
const saveOrphanage = require('./saveOrphanage')
const orphanageData = {
  lat: "-25.4395312",
  lng: "-49.2671676",
  name: "MoLéo",
  about: "Presta assistência para jovens adultos precisando de abrigo com parceiras sexuais",
  whatsapp: "041999998888",
  images: "https://2.bp.blogspot.com/-v0GqOOV3D4A/T25shJUJltI/AAAAAAAAAJE/KVlKZNuIpkY/s1600/421248_336676866384825_309623909090121_1103221_1147195919_n.jpg",
  instructions: "Só cedemos o local, o resto é com você! Evite o frete sem lona!",
  opening_hours: "Horário de funcionamento Das 09 até 23h",
  open_on_weekends: "1"
}

Database.then(async db => {
  // Inserir dados usando uma função com string variável:
  // await saveOrphanage(db, orphanageData)

  // Atualizar dados da tabela:
  // await db.run(`
  //   UPDATE orphanages
  //   SET instructions = 'Venha de braços bem abertos :)',
  //       name = 'Teste criar orfanato'
  //   WHERE id = 4
  // `)
  // Printar na tela pra ver se foi:
  const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  console.log(selectedOrphanages)

  // Deletar dados da tabela:
  // await db.run("DELETE FROM orphanages WHERE id > '3'")
})