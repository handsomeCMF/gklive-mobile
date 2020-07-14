<template>
  <div>
    <div id="logo">
      <img src="../../assets/leimu.png"/>
    </div>
    <div id="login" v-show="islogin">
      <van-form @submit="loginUser">
      <van-cell-group>
        <van-field label="账号" v-model="account" :rules="[{required:true,message:'请输入账号'}]"  />
        <van-field label="密码" v-model="password" :rules="[{required:true,message:'请输入密码'}]" type="password" />
      </van-cell-group>
      <van-button native-type="submit" type="primary" size="large">登录</van-button>
      </van-form>
    </div>

    <div id="register" v-show="!islogin">
      <van-form @submit="registerUser">
      <van-cell-group>
        <van-field label="账号" v-model="account" :rules="[{required:true,message:'请输入账号'}]"  />
        <van-field label="密码" v-model="password" :rules="[{required:true,message:'请输入密码'}]" type="password" />
        <van-field label="昵称" v-model="nickName" :rules="[{required:true,message:'请输入昵称'}]"  />
        <div class="van-cell ">
          <div class="van-cell__title van-field__label"><span>性别</span></div>
          <van-radio-group v-model="gender" direction="horizontal">
            <van-radio name='1'>男</van-radio>
            <van-radio name='0'>女</van-radio>
          </van-radio-group>
        </div>

      </van-cell-group>
      <van-button native-type="submit" type="primary" size="large">注册</van-button>
      </van-form>
    </div>
    <div id="switch">
      <van-icon @click="trade" name="user-o" size="30"></van-icon>
    </div>
  </div>
</template>

<style scoped>
#switch{
  position:fixed;
  right:20px;
  top:20px;
}
  #login,#register{
    margin:10px;
    border-radius: 8px;
    padding:5px;
    background: #ffffff;
    box-shadow: 2px 2px 2px #ffffff ;
  }
  .van-cell{
    margin-bottom: 10px;
  }
  #logo{
    margin: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  img{
    height: auto;
    width:320px
  }
</style>

<script>
import { login, register } from '../../utils/login/users.js'
import { Dialog, Toast } from 'vant'

export default {
  name: 'login',
  components: { [Dialog.Component.name]: Dialog.Component },
  data () {
    return {
      account: '',
      password: '',
      gender: '0',
      nickName: '',
      islogin: true
    }
  },
  methods: {
    trade: function () {
      this.islogin = !this.islogin
    },
    loginUser: function () {
      var that = this
      const redirect = this.$route.query.redirect
      const params = { account: this.account, password: this.password }
      login(params).then(
        function (res) { // 成功
          if (res.status === 200) {
            if (redirect === undefined) {
              that.$router.push('/')
            } else {
              window.location.href = redirect
            }
          } else {
            Dialog.alert({ message: res.message })
          }
        },
        function (err) { Dialog.alert({ message: err }) } // 失败
      )
    },
    registerUser: function () {
      const params = {
        account: this.account,
        password: this.password,
        nickname: this.nickName,
        gender: parseInt(this.gender)
      }
      register(params).then(
        function (res) {
          console.log(res)
          if (res.status === 200) {
            Toast.success('注册成功,去登陆')
          } else {
            Dialog.alert({ message: '访问失败!' })
          }
        },
        function (err) { Dialog.alert({ message: err }) }
      )
    }
  }
}
</script>
