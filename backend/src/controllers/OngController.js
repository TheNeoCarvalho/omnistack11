const connection = require('../database')
const crypto = require('crypto')


module.exports = {

  async store(req, res) {
      const { name, email, whatspapp, city, uf} = req.body
    
      const id = crypto.randomBytes(4).toString('HEX')
    
      await connection('ongs').insert({
        id, 
        name, 
        email, 
        whatspapp, 
        city, 
        uf
      })
    
      res.json({id})
    },
  

}