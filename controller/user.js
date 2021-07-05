const {response} = require ('express');


const usersGet =  (req, res) =>{
    const {q,nombre,apikey} = req.query;
    res.json({
        msg:'get API - controlador',
        q,nombre,apikey
    });
};

const usersPut = (req, res) =>{
    const id = req.params.id;
    res.json({
        msg:'put API - controlador',
        id
    })
  }

  const usersPost = (req, res) =>{
    const body = req.body;
    res.json({
        msg:'post API - controlador',
        body
    })
  }

  const usersDelete =(req, res) =>{
    res.json({
        msg:'delete API - controlador'
    })
  }

  const usersPatch = (req, res) =>{
    res.json({
        msg:'patch API - controlador'
    })
  }





  module.exports={
    usersGet,
    usersPut,
    usersPost,
    usersDelete,
    usersPatch,
  }