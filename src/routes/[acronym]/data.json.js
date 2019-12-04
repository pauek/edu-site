
import { sendJson } from '../../util'
import { getCourseByAcronym } from '../../api'

export async function get(req, res, next) {
  const { acronym } = req.params
  const json = await getCourseByAcronym(acronym)
  sendJson(res, json)
}