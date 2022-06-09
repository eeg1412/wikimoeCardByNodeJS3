<template>
  <div>
    <h3 class="common_title">制卡</h3>
    <div class="mb20">
      <el-steps :active="2" align-center>
        <el-step title="第一步" description="选择出处（出自作品）" />
        <el-step title="第二步" description="选择角色" />
        <el-step title="第三步" description="确认重复卡牌" />
        <el-step title="第四步" description="制作卡牌" />
      </el-steps>
    </div>
    <div>
      <div>
        <div class="tc mb20">
          提示:如果是出自动漫作品请优先输入动漫作品的标题，如果不是动漫作品仅仅是出自某些网站的话请输入网站名称（如Pixiv）
        </div>
        <div class="tc">
          <el-select
            v-model="form.title"
            filterable
            remote
            reserve-keyword
            :remote-method="titleRemoteMethod"
            placeholder="请输入出处"
            size="large"
          >
            <el-option
              v-for="item in titleOption"
              :key="item._id"
              :label="item.name"
              :value="item._id"
            />
            <el-option :value="titleCache" v-if="titleCache"
              >创建出处「{{ titleCache }}」</el-option
            >
          </el-select>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, ref } from '@vue/reactivity'
import { useRoute, useRouter } from 'vue-router'
import { authApi } from '@/api'
import { onMounted } from '@vue/runtime-core'

export default {
  setup() {
    const form = reactive({
      title: '',
    })
    // 第一步
    const titleOption = ref([])
    const titleCache = ref('')
    const titleRemoteMethod = (query) => {
      titleCache.value = query
    }
    return {
      form,
      // 第一步
      titleOption,
      titleCache,
      titleRemoteMethod,
    }
  },
}
</script>
<style scoped></style>
