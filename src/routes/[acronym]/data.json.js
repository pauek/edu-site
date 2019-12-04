
import { sendJson } from '../../util'
import { getCourseByAcronym } from '../../api'

export async function get(req, res, next) {
  const { acronym } = req.params
  console.log(acronym)
  const json = await getCourseByAcronym(acronym)
  console.log(JSON.stringify(json))
  sendJson(res, json)
}