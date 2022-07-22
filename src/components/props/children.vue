<!--
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 * @LastEditTime: 2022-07-13 18:49:43
-->
<template>
    <div>
        <button @click="addChild(msgToParent)">点击</button>
    </div>
</template>

<script>
    export default {
        props:{
            msgChild:String,
            funChild:Function
        },
        data() {
            return{
                msgToParent:"听我说谢谢你，因为有你温暖了四季",
            }
        },
        methods:{
            addChild(data) {
                console.log(this.msgChild);
                this.$emit("addChild",data);
                this.funChild();
            }
        }
    }
</script>

<style scoped>

</style>