module.exports = (sequelize, DataTypes) => {
    // define the model
    const Student = sequelize.define('Student', {
        //define the columns in the database - give them a name, type, constraints
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },
        starID: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: false
            }
            // optional - constraint for id format
        },
        present: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default: false
        }
    })

    // create or update Student table in the database, everytime the app will start
    // force:true will drop the table first when the app starts, false will keep the data in the table
    Student.sync( {force:false} ).then( () => {
        console.log('Synced student table')
    })

    return Student
}