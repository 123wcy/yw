<template>
    <div class="project-desc-container">
        <BasicInfo />
        <DeviceInfo />
        <RepairInfo />
        <ProjectEnclosure />
    </div>
</template>

<script>
import BasicInfo from './basicInfo.vue'
import DeviceInfo from './deviceInfo.vue'
import RepairInfo from './repairInfo.vue'
import ProjectEnclosure from './projectEnclosure.vue'
export default {
    components: {
        BasicInfo,
        DeviceInfo,
        RepairInfo,
        ProjectEnclosure
    }
}
</script>

<style lang="less" scoped>

</style>

