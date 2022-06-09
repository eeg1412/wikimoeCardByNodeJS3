<template>
  <div>
    <h3 class="common_title">注册</h3>
    <div>
      <el-form label-width="120px" :model="form" :rules="rules" size="large">
        <el-form-item label="账号" prop="account">
          <el-input
            placeholder="请输入2-16位英数字(不区分大小写)"
            v-model="form.account"
          ></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="nickName">
          <el-input
            placeholder="请输入1-8位中日英字符"
            v-model="form.nickName"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            placeholder="请输入6-16位英数字符号"
            autocomplete="off"
            v-model="form.password"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="passwordConfirm">
          <el-input
            type="password"
            placeholder="请再次输入密码"
            autocomplete="off"
            v-model="form.passwordConfirm"
          ></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="captcha">
          <el-input placeholder="请输入验证码" v-model="form.captcha">
            <template #append>
              <img
                src="/mock/captcha.svg"
                alt="captcha"
                class="input-captcha"
              />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">注册</el-button>
          <el-button>返回</el-button>
        </el-form-item>
      </el-form>
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
      account: '',
      nickName: '',
      password: '',
      passwordConfirm: '',
      captcha: '',
    })

    const rules = reactive({
      account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
      nickName: [{ required: true, message: '请输入昵称', trigger: 'blur' }],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        {
          min: 6,
          max: 16,
          message: '密码长度在 6 到 16 个字符',
          trigger: 'blur',
        },
      ],
      passwordConfirm: [
        { required: true, message: '请再次输入密码', trigger: 'blur' },
        {
          min: 6,
          max: 16,
          message: '密码长度在 6 到 16 个字符',
          trigger: 'blur',
        },
        {
          validator: (rule, value, callback) => {
            if (value === form.password) {
              callback()
            } else {
              callback(new Error('两次输入的密码不一致'))
            }
          },
          trigger: 'blur',
        },
      ],
      captcha: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
    })

    return {
      form,
      rules,
    }
  },
}
</script>
<style scoped></style>
