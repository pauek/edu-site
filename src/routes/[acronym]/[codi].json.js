
import { sendJson } from '../../util'
import { getCourseByAcronym } from '../../api'

export async function get(req, res, next) {
  const { codi } = req.params;
  sendJson(res, await getCourseByAcronym(codi))
}