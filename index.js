const express = require('express')
const bodyParser = require('body-parser')

const PORT = 5000
const app = express()
app.use(bodyParser.json())

// CRUD
// C - create (POST)
// R - read (GET)
// U - update (PUT, PATCH)
// D - delete (DELETE)

const programmingLanguages = {
  js: 'JavaScript', java: 'Java', 'c++': 'C++', c: 'C',
  go: 'Go lang', python: 'Python', cSharp: 'C#', sql: 'SQL',
}

app.get('/programming-languages/:lang', async (req, res) => {
  const { lang } = req.params
  const result = programmingLanguages[lang]
  if (!result) {
    return res.status(404).json({
      message: `Programming language ${lang} is not defined`
    })
  }
  res.json({ language: result })
})

app.get('/programming-languages', async (req, res) => {
  res.json({ programmingLanguages })
})

app.post('/programming-languages/create', async (req, res) => {
  const { language, key } = req.body
  programmingLanguages[key] = language
  res.json({ success: true })
})

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))
