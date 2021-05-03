/*
 * @Description: 动态绑定表单数据
 * @Author: John Holl
 * @Github: https://github.com/hzylyh
 * @Date: 2021-04-01 19:52:25
 * @LastEditors: John Holl
 */

export default {
  watch: {
    colVal (val, oldVal) {
      // console.log(val)
      this.handleValueChange(val)
    }
  },
  methods: {
    handleValueChange (val) {
      this.$emit('changeV', val)
    }
  }
}
