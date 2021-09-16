const programmingLanguages = {
  js: 'JavaScript',
  java: 'Java',
  c: 'C',
  go: 'Go lang',
  python: 'Python',
  cSharp: 'C#',
  sql: 'SQL',
}

module.exports.find = () => programmingLanguages

module.exports.findOne = lang => programmingLanguages[lang]

module.exports.create = (key, value) => programmingLanguages[key] = value
