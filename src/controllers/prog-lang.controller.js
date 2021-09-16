const { progLangService } = require('../services/prog-lang.service')

class ProgLangController {
  constructor(service) {
    this.service = service
  }

  find = async (req, res) => {
    const programmingLanguages = await this.service.find()
    res.json({ programmingLanguages })
  }

  findOne = async (req, res) => {
    const { lang } = req.params
    const language = await this.service.findOne(lang)
    if (!language) {
      return res.status(404).json({
        message: `Programming language ${lang} is not defined`
      })
    }
    res.json({ language })
  }

  create = async (req, res) => {
    const { key, value } = req.body
    const newLang = await this.service.create(key, value)
    res.json({ success: !!newLang })
  }
}

const progLangController = new ProgLangController(progLangService)

module.exports = { progLangController }
