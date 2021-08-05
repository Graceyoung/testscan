<template>
    <router-view/>
</template>

<script lang="ts">
import {Component, Mixins} from 'vue-property-decorator'
import SystemInfo from "@/mixins/systmeInfo";

@Component({
    mixins: [SystemInfo]
})
export default class App extends Mixins(SystemInfo) {
    mounted() {
        // this.syncLogo()
    }
}
</script>

<style lang="scss">
#app {
    background: rgba(228, 231, 237, 1);
}
</style>