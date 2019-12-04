
import { getAcronymList } from '../api'
import { sendJson } from '../util'

export async function get(req, res, next) {
  sendJson(res, await getAcronymList())
}