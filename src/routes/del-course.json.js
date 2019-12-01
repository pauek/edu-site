
import { delCourse } from '../api'
import { sendJson } from '../util'

export async function post(req, res, next) {
  const { uid } = req.body
  await delCourse(uid)
  sendJson(res, {})
}