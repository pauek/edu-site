
const sendJson = (res, obj) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(obj))
}

module.exports = {
  sendJson
}