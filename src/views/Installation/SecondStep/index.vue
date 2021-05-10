<!--
 * @Description: 安装步骤-第二步-服务配置
 * @Author: John Holl
 * @Github: https://github.com/hzylyh
 * @Date: 2021-03-30 13:43:57
 * @LastEditors: John Holl
-->
<!--  -->
<template>
  <el-row class="second-step">

    <!-- 基础配置-服务配置 -->
    <el-row class="base-config">
      <el-row type="flex"
              justify="start"
              class="title">
        服务配置
      </el-row>
      <!-- <el-row class="config-content">
        <config-page :page-object="pageObject"
                     @transformData="getChildData"></config-page>
      </el-row> -->

    </el-row>

    <!-- 高级配置-k8s配置 -->
    <el-row class="advance-config">
      <el-row type="flex"
              justify="start"
              class="title">
        高级配置
      </el-row>
      <el-row class="config-content">
        <config-page :page-object="pageObject"
                     @transformData="getChildData"></config-page>
      </el-row>
    </el-row>

    <el-row>
      <el-button v-if="step === containerList.length - 1"
                 @click="handleClickD">开始部署</el-button>
      <el-button v-else
                 @click="handleClickN">下一步</el-button>
    </el-row>
  </el-row>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { createDeployment } from '@/api/k8s/deployment'
import { createService } from '@/api/k8s/service'
import { getContainerList } from '@/api/k8s/container'
import ConfigPage from './components/ConfigPage'

const formStyle = {
  nginx: {
    fullForm: {
      deployment: {
        metadata: {
          name: 'nginx-deploy-test2'
        },
        spec: {
          selector: {
            matchLabels: {
              app: 'nginx'
            }
          },
          replicas: 1,
          template: {
            metadata: {
              labels: {
                app: 'nginx'
              }
            },
            spec: {
              containers: [
                {
                  name: 'nginx',
                  image: 'nginx:alpine',
                  ports: [
                    {
                      containerPort: 80
                    }
                  ]
                }
              ]
            }
          }
        }
      },
      service: {
        name: 'service'
      }
    },
    dynamicCol: [
      {
        id: '1',
        type: 'dt-input',
        label: '部署节点数',
        valueType: 'int',
        colName: 'deployment.spec.replicas'
      }
    ]
  }
  // 'api-gateway': [
  //   {
  //     id: '1',
  //     type: 'dt-input',
  //     label: '部署节点数',
  //     colName: 'col1.name'
  //   },
  //   {
  //     id: '2',
  //     type: 'dt-input',
  //     label: 'label2',
  //     colName: 'col2'
  //   },
  //   {
  //     id: '3',
  //     type: 'dt-input',
  //     label: 'label3',
  //     colName: 'col3'
  //   }
  // ],
  // 'erake-server': [
  //   {
  //     id: '4',
  //     type: 'dt-input',
  //     label: '部署节点数1',
  //     colName: 'col2.name'
  //   },
  //   {
  //     id: '5',
  //     type: 'dt-input',
  //     label: 'label2',
  //     colName: 'col2.age'
  //   },
  //   {
  //     id: '6',
  //     type: 'dt-input',
  //     label: 'label3',
  //     colName: 'col2.sex'
  //   }
  // ]
}

export default {
  // import引入的组件需要注入到对象中才能使用
  components: { ConfigPage },
  data () {
    // 这里存放数据
    return {
      containerList: '',
      pageObject: {},
      step: 0,
      formData: {}
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
    this.containerList = JSON.parse(sessionStorage.getItem('containerList'))
    this.pageObject = formStyle[this.containerList[this.step].imageName]
    console.log(JSON.stringify(this.pageObject))
  },

  // {"deployment":{"metadata":{"name":"nginx-deploy-test2"},"spec":{"selector":{"matchLabels":{"app":"nginx"}},"replicas":1,"template":{"metadata":{"labels":{"app":"nginx"}},"spec":{"containers":[{"name":"nginx","image":"nginx:alpine","ports":[{"containerPort":80}]}]}}}},"service":{"name":"service"}}
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

    },
    getContainerList () {
      const reqInfo = {

      }
      getContainerList(reqInfo).then(response => {
        console.log(response)
      })
    },
    handleClickN () {
      this.step += 1
      const imageName = this.containerList[this.step].imageName
      this.pageObject = formStyle[imageName]

      console.log()
    },
    handleClickD () {
      // console.log('ddd')
      // this.$router.push({ name: 'InstallStepThird' })

      // 创建deployment和对应service
      createDeployment(this.formData.deployment).then(response => {
        console.log(response)
        // 之后可通过判断来创建service
        createService(this.formData.service).then(res => {
          console.log(res)
        })
      })
    },
    getChildData (val) {
      console.log(val)
      this.formData = val
    }
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.second-step {
  .base-config {
    .title {
      // float: left;
      font-size: 22px;
    }
    .config-content {
      margin: 15px 0 0 0;
    }
  }
  .advance-config {
    .title {
      // float: left;
      font-size: 22px;
    }
    .config-content {
      margin: 15px 0 0 0;
    }
  }
}
</style>
