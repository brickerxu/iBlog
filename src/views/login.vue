<template>
<empty>
    <div class="login_container">
        <div class="login_box">
            <div class="logo_box">
                <img src="static/logo.png" />
            </div>
            <div class="form_box">
                <el-input
                    placeholder="请输入登录名"
                    v-model="login_name">
                    <i slot="prefix" class="el-input__icon el-icon-user"></i>
                </el-input>
                <el-input
                    placeholder="请输入密码"
                    type="password"
                    v-model="password"
                    show-password>
                    <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                </el-input>
                <div class="assist_box">
                    <el-checkbox>记住密码</el-checkbox>
                    <a>忘记密码？</a>
                </div>
                <el-button class="login_btn" type="primary" >登录</el-button>
            </div>
        </div>
    </div>
</empty>
</template>

<script>
import Empty from '../components/pages/empty.vue';
export default {
    name: "Login",
    components: {
        empty: Empty
    },
    data() {
        return {
            login_name: '',
            password: ''
        }
    }
}
</script>

<style lang="stylus" scoped>
.login_container
    height 100%
    background-image linear-gradient(#004770, #ffffff)
    .login_box
        width 350px
        height 300px
        background-color #fff
        // 定位
        position absolute
        top 50%
        left 50%
        // 偏移自身距离
        transform translate(-50%, -50%)
        .logo_box
            width 100px
            position absolute
            left 50%
            border 1px solid #eee
            border-radius 50%
            transform translate(-50%, -50%)
            // 阴影
            box-shadow 0 0 10px #ddd
            img
                width 100%
                border-radius 50%
        .form_box
            position absolute
            top 20%
            padding 20px 25px
            div
            button
                margin 10px 0
            .login_btn
                width 100%
            .assist_box
                margin 3px 0
                font-size 12px
                display flex
                justify-content space-between
                a
                    text-decoration none
                    color #00b9ff

</style>

<style lang="stylus">
$size = 12px
.assist_box
    .el-checkbox
        .el-checkbox__inner
            width $size
            height $size
        .el-checkbox__label
            font-size $size
            padding-left 5px
</style>