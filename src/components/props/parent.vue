<!--
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 * @LastEditTime: 2022-07-13 18:49:13
-->
<template>
    <div>
        <Children :msgChild="msg" @addChild= "add" :funChild= "fun"/>
        <div>{{ num }}</div>
    </div>
</template>

<script>
import Children from './children'
    export default {
        data() {
            return {
                msg:"我的儿子棒棒哒",
                num:0,
            }
        },
        components:{
            Children,
        },
       methods:{
        add(data) {
            console.log(data);
            this.num++;
        },
        fun() {
            alert("点击成功啦")
        }
       },

    }
</script>

<style scoped>

</style>