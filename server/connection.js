const elasticsearch = require('elasticsearch')

const index = 'library'
const type = 'novel'
const port = 9200
const host = process.env.ES_HOST || '192.168.99.100'
const client = new elasticsearch.Client({ host: { host, port } })

/** Check connection */
async function checkConnection () {
  let isConnected = false
  while (!isConnected) {
    console.log('Connecting to ES')
    try {
      const health = await client.cluster.health({})
      console.log(health)
      isConnected = true
    } catch (err) {
      console.log('Connection Failed, Retrying...', err)
    }
  }
}

async function resetIndex () {
    if (await client.indices.exists({ index })) {
      await client.indices.delete({ index })
    }
  
    await client.indices.create({ index })
    await putBookMapping()
}

//Elasticsearch Index just like SQL table or mongo collection
async function putBookMapping () {
    const schema = {
      title: { type: 'keyword' }, //keyword for searching based on full content
      author: { type: 'keyword' },//keyword for searching based on full content
      location: { type: 'integer' },
      text: { type: 'text' } //text for searching only in Strings
    }
  
    return client.indices.putMapping({ index, type, body: { properties: schema } })
}

module.exports = {
    client, index, type, checkConnection, resetIndex
}