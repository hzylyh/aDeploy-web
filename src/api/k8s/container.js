/*
 * @Description:container相关接口
 * @Author: John Holl
 * @Github: https://github.com/hzylyh
 * @Date: 2021-05-10 19:37:29
 * @LastEditors: John Holl
 * @LastEditTime: 2021-05-10 19:52:48
 */
import request from '@/utils/request'

const prefix = '/container'
export function getContainerList (param) {
  return request({
    url: prefix + '/getList',
    method: 'post',
    data: param
  })
}
