'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
       id: {
        type:Sequelize.INTEGER, 
        autoIncrement:true,
        primaryKey:true
       },
       name:{
        type:Sequelize.STRING,
        allowNull:false
       },
       username:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
       },
       password:{
        type:Sequelize.STRING,
        allowNull:false
       },
       jenis_kelamin: {
        type:Sequelize.STRING,
        allowNull:false
       },
       tempat_lahir:{
        type:Sequelize.STRING,
        allowNull:false
       },
       tgl_lahir:{
        type:Sequelize.STRING,
        allowNull:false
       },
       no_hp: {
        type:Sequelize.STRING,
        allowNull:false
       },
       agama: {
        type:Sequelize.STRING,
        allowNull:false
       },
       alamat_ktp:{
        type:Sequelize.STRING,
        allowNull:false
       },
       alamat_now:{
        type:Sequelize.STRING,
        allowNull:false
       },
       tgl_masuk:{
        type:Sequelize.STRING,
        allowNull:false
       },
       tgl_habis:{
        type:Sequelize.STRING,
        allowNull:false
       },
       nama_bank:{
        type:Sequelize.STRING,
        allowNull:false
       },
       no_rek:{
        type:Sequelize.STRING,
        allowNull:false
       },
       createdAt:{
        type:Sequelize.DATE,
        allowNull:false
       },
       updatedAt:{
        type:Sequelize.DATE,
        allowNull:false
       },
      },{
        timestamps:true
      });
  
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('users');
  }
};
