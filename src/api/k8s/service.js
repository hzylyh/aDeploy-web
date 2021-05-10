/*
 * @Description: service相关操作
 * @Author: John Holl
 * @Github: https://github.com/hzylyh
 * @Date: 2021-05-05 16:17:53
 * @LastEditors: John Holl
 * @LastEditTime: 2021-05-05 16:19:21
 */

import request from '@/utils/request'

const prefix = '/service'
export function createService (param) {
  return request({
    url: prefix + '/create',
    method: 'post',
    data: param
  })
}
