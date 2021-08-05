<template>
    <div class="batch-import">
        <open ref="open" @on-save="submitData" saveText="上传" title="导入数据"
              :width="700">
            <div>
                <SelectFile class="select-file" :accept="accept" :drag="true" @update:outFiles="fileSelect">
                    <template>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="tips">文件后缀名必须为xls 或xlsx （即Excel格式） 文件大小不得大于10M，最多支持导入3000条数据</div>
                    </template>
                </SelectFile>
                <div class="file-list" v-if="isFile">
                    <div class="left">
                        <i class="icon icon-uniE020"></i>
                        <span>{{ file.name }}</span>
                    </div>
                    <div>
                        <i v-if="isOverSize" class="icon icon-uniE010"></i>
                        <i v-else class="icon icon-uniE016"></i>
                        <!-- 删除-->
                        <i class="icon icon-uniE015" @click="removeFile"></i>
                    </div>
                </div>
                <div class="notice" v-if="isOverSize">文件大小超过10M</div>
            </div>
        </open>
    </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import Open, {OpenInterface} from "@/components/Open.vue";
import SelectFile from '@/components/SelectFile.vue'

@Component({
    components: {
        Open,
        SelectFile
    }
})
export default class BatchImport extends Vue implements OpenInterface {
    $refs!: {
        open: Open,
    }

    file: any = {}

    accept: string = '.xls,.xlsx,.XLS,.XLSX'

    get isFile() {
        return JSON.stringify(this.file) === '{}' ? false : true
    }

    get isOverSize() {
        return (this.file.size / 1024 / 1024) >= 10
    }

    submitData() {
        if (this.isFile && !this.isOverSize) {
            this.$emit('importExcel', this.file);
            this.$refs.open.close();
        }
    }

    fileSelect(e: any) {
        if (e) {
            this.file = e
        }
    }

    removeFile() {
        this.file = {}
    }

    open() {
        this.$refs.open.open()
    }
}
</script>

<style lang="scss" scoped>
.batch-import {
    /deep/ .el-dialog__body {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .select-file {
        width: 500px;
        height: 190px;

        .tips {
            margin: 10px 0;
            padding: 0 40px;
            font-size: 12px;
            color: #AAAAAA;
        }

        /deep/ .el-upload {
            width: 100%;

            .el-upload-dragger {
                width: 100%;
            }
        }
    }

    .file-list {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 30px;
        line-height: 30px;
        font-size: 13px;
        margin-bottom: 10px;
        padding: 0 20px;
        background: rgba(0, 110, 255, 0.05);

        .left {
            display: flex;
            align-items: center;

            .icon-uniE020 {
                margin-right: 4px;
            }
        }

        .icon-uniE016 {
            color: #36B34A;
            margin-right: 10px;
        }

        .icon-uniE015 {
            cursor: pointer;
            color: #CCCCCC;
        }

        .icon-uniE010 {
            color: red;
            margin-right: 10px;
        }
    }

    .notice {
        color: red;
        font-size: 12px;
    }
}
</style>