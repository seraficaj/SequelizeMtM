const db = require("./models");

async function manyCrud() {
    try {
        //fooInstance.addBar
        const [pet, petCreated] = await db.pet.findOrCreate({
            where: { 
                name: "sana",
                description: "mischief-making marble toad", 
            },
        });

        const [toy,toyCreated] = await db.toy.findOrCreate({
            where: {
                type: "wood",
                color: "purple"
            }
        });

        /*
        pet.getToys()
        pet.countToys
        pet.addToy()

        and vice versa
        */

        // await pet.addToy
        await toy.addPet(pet)
        const getPets = await toy.getPets()
        const getToys = await pet.getToys();
        // console.log(getToys);
        // console.log(getPets);
        // const firstPet = await db.pet.findByPk(1)
        // firstPet.createToy({
        //     type: "rubber cobra",
        //     color: "matte chartreuse"
        // })

        // const firstPetToys = await firstPet.getToys();
        // console.log(firstPetToys())

        // Eager Loading
        // const petsAndToys = await db.pet.findAll({
        //     include: [db.toy]
        // })
        // petsAndToys.forEach(pet => {
        //     console.log(pet.toys);
        // });

        // two includes
        const foundUser = await db.user.findOne({
            where: {
                id: 1
            },
            include: {
                model: db.pet,
                include: [db.toy]
            }
        })
        console.log(foundUser);
    } catch (err) {
        console.log(err);
    }
}
manyCrud();
