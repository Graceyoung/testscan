import {Component, Vue} from 'vue-property-decorator';
import {Action, State} from 'vuex-class'
import {VuexStore} from '@/store'

@Component
export default class SystemInfo extends Vue {
    @State('SYS_INFO')
    SYSTEM_INFO!: sys.systemInfo

    @Action('syncLogo')
    syncLogo!: () => Promise<any>

    $getSystemInfo(): sys.systemInfo {
        return this.SYSTEM_INFO
    }
}
