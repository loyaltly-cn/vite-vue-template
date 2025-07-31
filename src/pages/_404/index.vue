<script setup lang="ts">
import router from "@/modules/router";

const list:{ text:string, fun:() => void }[]  = [{
  text:'返回首页',
  fun:() => router.push('/home')
},{
  text:'重新登录',
  fun:() =>  router.push('/login')
},{
  text:'返回上一级',
  fun:() => router.back()
}]
</script>

<template>
  <var-space direction="column" align="center">
    <var-image src="/src/assets/img/404.png"/>
    <h1>页面不存在</h1>
    <small class="color-disabled">您打开了一个不存在的链接</small>
    <var-space>
      <var-chip class="hover:bg-primary hover:cursor-pointer hover:color-body" plain  v-ripple type="primary" v-for="(item,index) in list" :key="index" @click="item.fun" >{{item.text}}</var-chip>
    </var-space>
  </var-space>
</template>

<style scoped>

</style>