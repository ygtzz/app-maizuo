<template>
    <div class="footer">
        仅供学习FIS3与vuejs使用，设计与内容版权归简书所有。<a target="_blank" href="http://fis.baidu.com">FIS首页</a>
    </div>
</template>
<script>
import Vue from "vue";

export default {
    name:'c-footer',
    className: 'footer'
}
</script>
<style lang="sass" scoped>
    .footer{
        text-align: center;
        color: red;
        font-size:12px;
    }
</style>