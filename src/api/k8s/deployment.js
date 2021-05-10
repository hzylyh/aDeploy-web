/*
 * @Description: deployment相关操作
 * @Author: John Holl
 * @Github: https://github.com/hzylyh
 * @Date: 2021-05-05 16:16:58
 * @LastEditors: John Holl
 * @LastEditTime: 2021-05-05 16:16:58
 */

import request from '@/utils/request'

const prefix = '/deployment'
export function createDeployment (param) {
  return request({
    url: prefix + '/create',
    method: 'post',
    data: param
  })
}
