import { Router } from 'express'
import JsonDB from 'node-json-db'

const router = Router()

const db = () => new JsonDB('tree', true, false)

const formatNodes = data => {
  const nodes = {}

  Object.keys(data).forEach(key => {
    const node = data[key]
    const fields = { ...node.data }
    delete node['data']
    
    nodes[key] = {
      ...fields,
      children: {
        ...formatNodes(node),
      }
    }
  })
  
  return nodes
}

const fetchNode = nodeName => {
  try {
    const data = db().getData(nodeName)
    const nodes = formatNodes(data)
    return nodes[Object.keys(nodes)[0]]
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

const deleteNode = nodeName => {
  try {
    db().delete(nodeName)
    return true
  } catch (e) {
    console.error(e)
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

/* DELETE node by ID. */
router.delete('/tree/[a-z0-9\-\/]+', (req, res) => {
  const node = req.originalUrl.replace('/api/tree', '')
  
  if (deleteNode(node)) {
    res.sendStatus(204)
  } else {
    res.sendStatus(403)
  }
})

export default router