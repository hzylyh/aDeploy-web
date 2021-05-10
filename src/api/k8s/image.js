/*
 * @Description: 镜像操作相关接口
 * @Author: John Holl
 * @Github: https://github.com/hzylyh
 * @Date: 2021-05-10 18:23:24
 * @LastEditors: John Holl
 * @LastEditTime: 2021-05-10 18:28:45
 */
import request from '@/utils/request'

const prefix = '/image'
export function getImageList (param) {
  return request({
    url: prefix + '/getList',
    method: 'post',
    data: param
  })
}
