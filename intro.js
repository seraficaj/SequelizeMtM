const db = require('./models')

// CREATE 
// db.user.create({
//     firstName: 'Weston',
//     lastName: 'Bailey',
//     age: 34,
//     email: 'weston.bailey@generalassemb.ly',
//     birthday: new Date()
//   })
//   .then(createdUser => {
//     console.log(createdUser)
//   })
//   .catch(console.log)

async function userCrud() {
  try {
    // create 
    // const createdUser = await db.user.create({
    //   firstName: 'Jason',
    //   lastName: 'Serafica',
    //   age: 26,
    //   email: 'jason.serafica@generalassemb.ly',
    //   birthday: new Date()
    // })

    // console.log(createdUser.firstName, createdUser.lastName)

    // fancy find or create sequlize function
    const arrayFromSequelize = await db.user.findOrCreate({
      where: { 
        firstName: 'Jason'
       }, 
       defaults: {
        firstName: 'Jason',
        lastName: 'Serafica',
        age: 26,
        email: 'jason.serafica@generalassemb.ly',
        birthday: new Date()
       }
    })

    // console.log(arrayFromSequelize[0], `this user was created? ${arrayFromSequelize[1]}`)
    console.log(arrayFromSequelize)
    // read 
    // findAll -- gives an array and FindOne gives the first instance found
    // const foundUser = await db.user.findOne({
    //   where: {
    //     firstName: 'Jason'
    //   }
    // })

    // console.log(foundUser)

    // update
    // update({ cols to update (new values) }, { where clause })
    // const numRows = await db.user.update({
    //   age: 35
    // }, {
    //   where: {
    //     firstName: 'Weston'
    //   }
    // })

    // console.log(numRows)

    // destroy
    // needs a where clause
    // returns number of rows delete
    // const numDeletedRows = await db.user.destory({
    //   where: {
    //     firstName: 'Weston'
    //   }
    // })

    // console.log(numDeletedRows)
  } catch (error) {
    console.log(error)
  }
}

userCrud()

// array/object destructuring
// takes values from an array and give them varialbe names
const myNumbers = [0, 1, 2, 10, 50, 999]

const [zero, one, two, ten, taco, banana] = myNumbers

console.log(zero, taco)

function example() {
  return ['hello', 'banana', 'taco']
}

const [stringOne, stringTwo] = example()

// READ 
// db.user.findAll()
//   .then(foundUser => {
//     console.log(foundUser)
//   })

// you have to declare an async function to get access to the await keyword
async function findAllUsers() {
  // handle errors with try/catch blocks
  try {
    // tries to run this code -- if there is an error it goes to the catch
    // variable = await promise
    // await promise
    const foundUser = await db.user.findAll() // hey js just chill until the promise resolves

    console.log(foundUser)
  } catch (error) {
    console.log(error)
  }
}

findAllUsers()
// UPDATE

// DESTROY