
import { newCourse } from '../api'

const sendJson = (res, obj) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(obj))
}

export async function post(req, res, next) {
  const course = req.body
  const uidMap = await newCourse({
    uid: "_:newcourse",
    ...course
  })
  sendJson(res, {
    uid: uidMap.get("newcourse")
  })
}