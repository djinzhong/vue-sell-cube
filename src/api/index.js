/**
 * @Author: djz
 * @Date: 2019-04-29
 * @Project: vue-sell-cube
 */
import { get } from './helpers'

const getSeller = get('api/seller')
const getGoods = get('api/goods')
const getRatings = get('api/ratings')

export {
  getSeller,
  getGoods,
  getRatings
}
