const ProgLangModel = require('../models/prog-lang.model')

class ProgLangService {
  find = async () => {
    return ProgLangModel.find()
  }

  findOne = async (lang) => {
    return ProgLangModel.findOne(lang)
  }

  create = async (key, value) => {
    return ProgLangModel.create(key, value)
  }
}

const progLangService = new ProgLangService()

module.exports = { progLangService }
