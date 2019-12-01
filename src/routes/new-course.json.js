
import { newCourse } from '../api'
import { sendJson } from '../util'

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