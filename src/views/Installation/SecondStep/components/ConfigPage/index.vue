<!--
 * @Description: 服务配置解析页面
 * @Author: John Holl
 * @Github: https://github.com/hzylyh
 * @Date: 2021-03-30 15:05:51
 * @LastEditors: John Holl
-->
<!--  -->
<template>
  <el-row>
    <el-row>
      <el-form>
        <el-row>
          <el-col :span="12"
                  v-for="(item, index) in pageObject.dynamicCol"
                  :key="index">
            <el-form-item label-width="106px"
                          :label="item.label">
              <component :key="item.id"
                         :is="item.type"
                         @changeV="(v) => handleValue(v, item.valueType, item.colName)">
              </component>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-row>
  </el-row>

</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import DtInput from './input'

export default {
  // import引入的组件需要注入到对象中才能使用
  components: { DtInput },
  props: {
    pageObject: {
      type: Object,
      required: true
    }
  },
  data () {
    // 这里存放数据
    return {
      formData: {}
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {
    pageObject () {
      this.initForm()
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    // console.log('ddd')
    // const myVal = {
    //   person: {
    //     name: 'hou',
    //     up: {
    //       arm: 'ddd',
    //       body: {
    //         leg: 'ggg'
    //       }
    //     }
    //   }
    // }
    // const path = 'person.up.arm'
    // console.log(myVal)
    // const path = ['person', 'name']
    // this.setMulVal(myVal, path, 'zhe')
    // console.log(myVal)
  },
  beforeCreate () { }, // 生命周期 - 创建之前
  beforeMount () { }, // 生命周期 - 挂载之前
  beforeUpdate () { }, // 生命周期 - 更新之前
  updated () { }, // 生命周期 - 更新之后
  beforeDestroy () { }, // 生命周期 - 销毁之前
  destroyed () { }, // 生命周期 - 销毁完成
  activated () { }, // 如果页面有keep-alive缓存功能，这个函数会触发
  // 方法集合
  methods: {
    // 初始化form表单
    initForm () {
      this.formData = this.copyForm(this.pageObject.fullForm)
      // for (const item of this.pageObject) {
      //   this.formData[item.colName] = ''
      // }
    },
    handleValue (v, valueType, colName) {
      const path = colName.split('.')
      switch (valueType) {
        case 'int':
          v = parseInt(v)
          break
        default:
          v = v.toString()
      }
      this.setMulVal(this.formData, path, v)
      // this.formData[colName] = v
      // console.log(this.formData)
      // console.log(v)
      this.$emit('transformData', this.formData)
    },
    // form拷贝
    copyForm (val) {
      var obj = {}
      obj = JSON.parse(JSON.stringify(val))
      return obj
    },
    setMulVal (obj, path, value) {
      if (path.length > 1) {
        const newObj = obj[path[0]]
        const newPath = path.slice(1)
        this.setMulVal(newObj, newPath, value)
      } else {
        obj[path] = value
      }
    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>
