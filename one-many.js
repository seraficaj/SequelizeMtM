/ SQLize Queries

const db = require('./models');

const relationshipCrud = async () => {
    try {
        // CREATE
            // find a user
            const foundUser = await db.user.findOne({
                where: {
                    firstName: 'Jason'
                }
            }) // finds first available user
            // give him/her a pet
            const petMongoose = await foundUser.createPet({
                name: 'Apollo',
                description: 'The Well-Behaved Mongoose',

            });
            console.log(petMongoose);
        // READ
        const mongooseOwner = await petMongoose.getUser()
        const pets = await mongooseOwner.getPets();
        console.log(pets);

        // Eager Loading
        const eagerLoaded = await db.user.findOne({
            where: {
                firstName: 'Jason'
            },
            include: [db.pet] // supply an array of models
        })
        console.log(eagerLoaded.pets);
        // UPDATE
    }
    catch(err) {
        console.log(err);
    }
}

relationshipCrud();