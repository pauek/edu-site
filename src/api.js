const dgraph = require('dgraph-js')
const grpc = require('grpc')

const clientStub = new dgraph.DgraphClientStub(
  "localhost:9080",
  grpc.credentials.createInsecure(),
)
const client = new dgraph.DgraphClient(clientStub)

const query = async (query) => {
  const txn = client.newTxn()
  try {
    const res = await txn.query(query)
    return res.getJson()
  }
  finally {
    await txn.discard()
  }
}

const mutation = async (json) => {
  console.log(`Mutation(${JSON.stringify(json)}`)
  const txn = client.newTxn()
  try {
    const mut = new dgraph.Mutation()
    mut.setSetJson(json)
    mut.setCommitNow(true)
    const res = await txn.mutate(mut)
    // await txn.commit()
    return res.getUidsMap()
  }
  finally {
    await txn.discard()
  }
}

const getCourses = async () => {
  return query(`
  {
    assignatures(func: type("Assignatura")) {
      uid
      nom
      codi
    }
  }
  `)
}

const newCourse = async (course) => {
  return mutation({
    ['dgraph.type']: "Assignatura",
    ...course,
  })
}

module.exports = {
  getCourses,
  newCourse
}