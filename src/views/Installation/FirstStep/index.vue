<!--
 * @Description: 安装步骤-第一步
 * @Author: John Holl
 * @Github: https://github.com/hzylyh
 * @Date: 2021-03-30 13:34:54
 * @LastEditors: John Holl
-->

<template>
  <el-row class="first-step">
    <el-row class="table-content">
      <el-table :data="tableData"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection"
                         width="55">
        </el-table-column>
        <el-table-column prop="imageName"
                         label="镜像名称">
        </el-table-column>
        <el-table-column prop="imageVersion"
                         label="镜像版本">
        </el-table-column>
        <el-table-column prop="imageId"
                         label="镜像ID">
        </el-table-column>
      </el-table>
    </el-row>
    <el-row class="handle-bar">
      <el-button type="primary"
                 :disabled="multipleSelection.length === 0"
                 @click="handleClickNext">下一步</el-button>
    </el-row>
  </el-row>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { getImageList } from '@/api/k8s/image'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    // 这里存放数据
    return {
      tableData: [
        // {
        //   imageName: 'api-gateway',
        //   imageVersion: 'v1.0',
        //   imageID: 'jskdfasdkfasjllklkdkkd=='
        // },
        // {
        //   imageName: 'nginx',
        //   imageVersion: 'v1.0',
        //   imageID: 'jskdfasdkfasjllklkdkkf=='
        // },
        // {
        //   imageName: 'erake-server',
        //   imageVersion: 'v1.0',
        //   imageID: 'jskdfasdkfasjllklkdkke=='
        // }
      ],
      multipleSelection: []
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    this.initData()
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
    initData () {
      this.getImageList()
    },
    getImageList () {
      const reqInfo = {
        pageNum: 1,
        pageSize: 10
      }
      getImageList(reqInfo).then(response => {
        this.tableData = response.data
      })
    },
    handleClickNext () {
      sessionStorage.setItem('containerList', JSON.stringify(this.multipleSelection))
      this.$router.push({ name: 'InstallStepSecond' })
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.first-step {
  height: 100%;
  padding: 10%;
  .table-content {
  }
  .handle-bar {
    margin-top: 20px;
  }
}
</style>
