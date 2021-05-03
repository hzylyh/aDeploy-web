/*
 * @Description: k8s调用
 * @Author: John Holl
 * @Github: https://github.com/hzylyh
 * @Date: 2021-04-14 17:16:29
 * @LastEditors: John Holl
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
