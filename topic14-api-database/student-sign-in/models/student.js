module.exports = (sequelize, DataTypes) => {
    // define the model
    const Student = sequelize.define('Student', {
        //define the columns in the database - give them a name and a type
        name: {
            type: DataTypes.STRING
        },
        starID: {
            type: DataTypes.STRING
        },
        present: {
            type: DataTypes.BOOLEAN
        }
    })

    // create or update Student table in the database, everytime the app will start
    // force:true will drop the table first when the app starts, false will keep the data in the table
    Student.sync( {force:false} ).then( () => {
        console.log('Synced student table')
    })

    return Student
}