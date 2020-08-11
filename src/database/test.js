const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async (db) => {
    //inserir dados
    proffyValue = {
        name: "Rodrigo Barbosa",
        avatar: "https://avatars0.githubusercontent.com/u/61946575?s=460&u=b3d0390f7c593f0c141b3dfb2c18fec7357a91c0&v=4",
        whatsapp: "19981496382",
        bio: "Instrutor de matemática",
    }

    classValue = {
        subject: 1,
        cost: "25",
        //Proffy id virá pelo bando de dados
    }

    classScheduleValues = [
        //Class_id virá pelo baco de dados, após cadastrarmos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]
    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //consultar dados inseridos

    //Todos os proffys

    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    //Consultar as classes de um determinado professor e trazer junto os dados do professor

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys)

    //O horário que a pessoa trabalha, por exemplo, é das 8h - 18h
    //O horário do time-from (8h) precisa ser menor  ou igual ao horário solicitado
    //O time-to precisa ser acima

    const  selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)

    // console.log(selectClassesSchedules)

})