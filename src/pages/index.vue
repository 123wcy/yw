<template>
    <div>
        <Header />
        <Navbar />
        <router-view></router-view>
    </div>
</template>

<script>
import Header from '../components/public/header.vue'
import Navbar from '../components/public/navbar.vue'
export default {
    data() {
        return {

        }
    },
    components: {
        Header,
        Navbar,
    }
}
</script>

<style lang="less" scoped>

</style>

