const axios = require('axios')
const fs = require('fs')

const GITHUB_URL = 'https://raw.githubusercontent.com/suitendaal/designtree/master/tree.json'

const fetchTree = async url => {
  const { data: tree } = await axios.get(url)

  fs.writeFile('tree.json', JSON.stringify(tree), error => {
    if (error) throw error
    console.info('[INFO]: The new design tree has successfully been pushed.')
  })
}

fetchTree(GITHUB_URL)

