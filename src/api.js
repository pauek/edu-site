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

const mutation = async (fn) => {
  const txn = client.newTxn()
  try {
    const mut = new dgraph.Mutation()
    fn(mut)
    mut.setCommitNow(true)
    const res = await txn.mutate(mut)
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

const getCourseByAcronym = async (acronym) => {
  return query(`{
    course(func: eq(acronym, ${acronym.toUpperCase()})) {
      uid
      dgraph.type
      name
      acronym
      course.code
    }
  }`)
}

const getAcronymList = async () => {
  return query(`{
    acronyms(func: type(Course)) {
      acronym
    }
  }`)
}

const newCourse = async (course) =>
  mutation((mut) => mut.setSetJson({
    ['dgraph.type']: "Assignatura",
    ...course,
  }))

const delCourse = async (uid) =>
  mutation((mut) => mut.setDelNquads(`<${uid}> * * .`))

module.exports = {
  getCourses,
  getAcronymList,
  getCourseByAcronym,
  newCourse,
  delCourse,
}