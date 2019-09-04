<template>
    <div class="login">
        <van-cell-group>
            <van-field
                    v-model="username"
                    required
                    clearable
                    label="用户名"
                    placeholder="请输入用户名"
            />

            <van-field
                    v-model="password"
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
                    required
            />
        </van-cell-group>
    </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped lang="">
/*.account{*/
/*    font-size: 50px;*/
/*}*/
</style>