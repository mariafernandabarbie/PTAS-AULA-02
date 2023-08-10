const User = require('../model/user');
const secret = require('../config/auth.json');
const jwt = require('jsonwebtoken')

const createUser = async (req, res) => {
    const { name, password, email } = req.body;
    await User.create({
        name: name,
        password: password,
        email: email
    }).then(() => {
        res.json('Cadastro de usuário realizado com sucesso!');
        console.log('Cadastro de usuário realizado com sucesso!');
    }).catch((erro) => {
        res.error();
        console.log(`Ops, deu erro: ${erro}`);
    })
}

const selectUser = async (req, res) => {
  const users =  await User.findAll();
    res.json(users);
}

const authenticatedUser = async (req, res) => {
    const { name, password, email } = req.body;
   try{
    const isUserAutenthenticated = await User.findOne({
        where: {
            name:name,
            email:email,
            password:password
        }
    })
    const token = jwt.sign({id:email}, secret.secret,{
        expiresIn:86400,
    })
    return res.json({
        name: isUserAutenthenticated.name,
        email: isUserAutenthenticated.email,
        token:token

    })
   }
   catch(error){
    return res.json("Usuário não encontrado")

   }
}

const deleteUser = async (req, res) => {
    const {id, name, password, email } = req.params;
    await User.destroy({
        id:id,
        name: name,
        password: password,
        email: email
    }).then(() => {
        res.json('Cadastro de usuário realizado com sucesso!');
        console.log('Cadastro de usuário realizado com sucesso!');
    }).catch((erro) => {
        res.error();
        console.log(`Ops, deu erro: ${erro}`);
    })}

    const updateUser = async (req, res) => {
        const { id, name, password, email } = req.body;
        await User.update({
           id:parseInt,
            name: name,
            password: password,
            email: email
        }).then(() => {
            res.json('Cadastro de usuário realizado com sucesso!');
            console.log('Cadastro de usuário realizado com sucesso!');
        }).catch((erro) => {
            res.error();
            console.log(`Ops, deu erro: ${erro}`);
        })}

module.exports = { createUser, selectUser, authenticatedUser, deleteUser, updateUser};