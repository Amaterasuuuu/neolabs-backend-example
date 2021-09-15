const ProgLangModel = require('../models/prog-lang.model')

class ProgLangService {
  find = async () => {
    return ProgLangModel.find()
  }
}

// const progLangService = new ProgLangService()
module.exports = { ProgLangService }
