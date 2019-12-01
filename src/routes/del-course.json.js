
import { delCourse } from '../api'

const sendJson = (res, obj) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(obj))
}

export async function post(req, res, next) {
  const { uid } = req.body
  await delCourse(uid)
  sendJson(res, {})
}