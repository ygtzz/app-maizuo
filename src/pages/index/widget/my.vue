<template>
    <div class="my">
        <form>
            <div class="inwrap">
                <input type="text" placeholder="请输入手机/邮箱" class="in" />
                <div class="input-bg"></div>
            </div> 
            <div class="inwrap">
                <input type="text" placeholder="请输入密码" class="in"/>
                <div class="input-bg"></div>
            </div>
            <div class="btn-wrap">
                <mt-button>登录</mt-button> 
            </div>
        </form>
    </div>
</template>
<script>
import {Button} from 'mint-ui';

export default {
    name:'c-my',
    methods:{
       
    },
    components:{
        'mt-button':Button
    }
}
</script>
<style lang="sass" scoped>
    .my{
        padding:100px 0;
        text-align:center;
        button{
            font-size: 14px;
            height: 30px;
            width: 170px;
            border-radius: 36px;
            background-color:#fe8233;
            color:#fff;
        }
    }
    .inwrap{padding:20px 0;}
    .in{width:70%;background:#ebebeb;border:none;}
    .input-bg{border:1px solid #c9c9c9;border-top:0;height:10px;width:75%;margin:0 auto;margin-top:-6px}
    .btn-wrap{margin-top:45px}
</style>