const { ProgLangService } = require('../services/prog-lang.service')

class ProgLangController {
  constructor(service) {
    console.log(service)
    this.a = 123
    this.service = service
  }

  async find(req, res) {
    const programmingLanguages = await this.service.find()
    res.json({ programmingLanguages })
  }
}

const progLangController = new ProgLangController(
  new ProgLangService()
)

module.exports = { progLangController }
