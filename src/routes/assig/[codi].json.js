
import { sendJson } from '../../util'
import { getCourseByCodi } from '../../api'

export async function get(req, res, next) {
  const { codi } = req.params;
  sendJson(res, await getCourseByCodi(codi))
}