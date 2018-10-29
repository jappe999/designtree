import { Router } from 'express'
import JsonDB from 'node-json-db'

const router = Router()

const db = () => new JsonDB('tree', true, false)

const formatNodes = data => {
  const nodes = []

  Object.keys(data).forEach(key => {
    const node = data[key]
    const fields = { ...node.data }
    delete node['data']
    
    nodes.push({
      ...fields,
      children: [
        ...formatNodes(node),
      ]
    })
  })
  
  return nodes
}

const fetchNode = nodeName => {
  try {
    const data = db().getData(nodeName)
    return formatNodes(data)[0]
  } catch (e) {
    console.error(e)
    return {}
  }
}

const pushNode = (name, value) => {
  try {
    db().push(name, value, false)
    return true
  } catch (e) {
    console.log(e)
    return false
  }
}

/* GET tree listing. */
router.get('/tree', (req, res) => {
  const tree = fetchNode('/')
  res.json(tree)
})  

/* PUT node. */
router.post('/tree', (req, res) => {
  const node = { data: req.body }
  if (pushNode(`/${node.data.id}`, node)) {
    res.sendStatus(201)
  } else {
    res.sendStatus(500)
  }
})

/* GET node by ID. */
router.get('/tree/:node', (req, res) => {
  const node = fetchNode(`/${req.params.node}`)
  if (Object.keys(node).length > 0) {
    res.json(node)
  } else {
    res.sendStatus(404)
  }
})

export default router