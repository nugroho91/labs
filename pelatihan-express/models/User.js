module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
           },
           username:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
           },
           password:{
            type:DataTypes.STRING,
            allowNull:false
           },
           jenis_kelamin: {
            type:DataTypes.STRING,
            allowNull:false
           },
           tempat_lahir:{
            type:DataTypes.STRING,
            allowNull:false
           },
           tgl_lahir:{
            type:DataTypes.STRING,
            allowNull:false
           },
           no_hp: {
            type:DataTypes.STRING,
            allowNull:false
           },
           agama: {
            type:DataTypes.STRING,
            allowNull:false
           },
           alamat_ktp:{
            type:DataTypes.STRING,
            allowNull:false
           },
           alamat_now:{
            type:DataTypes.STRING,
            allowNull:false
           },
           tgl_masuk:{
            type:DataTypes.STRING,
            allowNull:false
           },
           tgl_habis:{
            type:DataTypes.STRING,
            allowNull:false
           },
           nama_bank:{
            type:DataTypes.STRING,
            allowNull:false
           },
           no_rek:{
            type:DataTypes.STRING,
            allowNull:false
           },
        createdAt: {
           
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            
            type: DataTypes.DATE,
            allowNull: false
        },
       
    }, {
        tableName: 'users',
        timestamps: true,
        paranoid: true
    });



    return User
}