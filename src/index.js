const express = require('express')
const bodyParser = require('body-parser')
const progLangApi = require('./routes/prog-lang.router')

const PORT = 5000
const app = express()
app.use(bodyParser.json())
app.use('/', progLangApi)

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))


// app.get('/programming-languages/:lang', async (req, res) => {
//   const { lang } = req.params
//   const result = programmingLanguages[lang]
//   if (!result) {
//     return res.status(404).json({
//       message: `Programming language ${lang} is not defined`
//     })
//   }
//   res.json({ language: result })
// })


// app.get('/programming-languages', async (req, res) => {
//   res.json({ programmingLanguages })
// })





// app.post('/programming-languages/create', async (req, res) => {
//   const { language, key } = req.body
//   programmingLanguages[key] = language
//   res.json({ success: true })
// })

