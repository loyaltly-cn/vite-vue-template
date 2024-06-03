<template>
    <div>
        <var-space justify="end" class="box">
            <div class="w-100 h-100 var-elevation--2 rounded-2xl p5 bg-body relative top-100 right-10 text-center">
                <h2>xxxx登录</h2>
                <div class="block">
                    <var-tabs v-model:active="active">
                        <var-tab>验证码登录</var-tab>
                        <var-tab>密码登录</var-tab>
                    </var-tabs>

                    <var-tabs-items v-model:active="active">
                        <var-tab-item>
                            <var-form class="my-5" @submit="even.submit_code" ref="form_code">
                                <var-space direction="column">
                                    <var-input placeholder="请输入手机号" type="number" variant="outlined" clearable autofocus v-model="obj.phone" :rules="[v => rules.phone.test(v) || '请输入正确的手机号']" maxlength="11">
                                        <template #prepend-icon>
                                            <var-icon name="cellphone" />
                                        </template>
                                    </var-input>
                                    <var-input placeholder="请输入验证码" type="number" variant="outlined" clearable  v-model="obj.code"  :rules="[v => rules.code.test(v) || '请输入正确的验证码']" maxlength="4">
                                        <template #prepend-icon>
                                            <var-icon name="lock-outline" />
                                        </template>
                                        <template #append-icon>
                                            <captcha :phone="obj.phone" @active="even.sendCode()"/>
                                        </template>
                                    </var-input>
                                    <var-button block native-type="submit" type="primary" @click="$refs.form_code.validate()">登录</var-button>
                                </var-space>
                            </var-form>
                        </var-tab-item>
                        <var-tab-item>
                            <var-form class="my-5" @submit="even.submit_pwd" ref="form_password">
                                <var-space direction="column" >
                                    <var-input placeholder="请输入账号" type="number" variant="outlined" clearable v-model="obj.account" :rules="[v => rules.phone.test(v) || '请输入正确的账号']" maxlength="11">
                                        <template #prepend-icon>
                                            <var-icon name="account-circle-outline" />
                                        </template>
                                    </var-input>
                                    <var-input placeholder="请输入密码" type="password" variant="outlined" clearable v-model="obj.password" :rules="[v => rules.password.test(v) || '密码格式错误,最少10位的数字字母的组合']">
                                        <template #prepend-icon>
                                            <var-icon name="lock-outline" />
                                        </template>
                                    </var-input>
                                    <var-button block native-type="submit" type="primary" @click="$refs.form_password.validate()">登录</var-button>
                                </var-space>
                            </var-form>
                        </var-tab-item>
                    </var-tabs-items>
                </div>
            </div>
        </var-space>
    </div>
</template>

<script setup lang="ts">
    import {ref} from "vue";
    import {obj} from "./index.ts";
    import rules from "@/js/rules";
    import even from "./even.ts";

    let active = ref(0)
</script>

<style scoped>
.box{
    background-image: url("@/assets/img/login-bg.png");
    background-size: cover;
    width: 100vw;
    height: 100vh;
}
</style>


