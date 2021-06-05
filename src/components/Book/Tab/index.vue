<template>
    <div class="book-tab">
        <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="图书介绍" name="introduction">
                <keep-alive>
                    <component :is="activeName === 'introduction' ? 'Introduction' : ''" :data="data"></component>
                </keep-alive>
            </el-tab-pane>
            <el-tab-pane label="图书评价" name="comment">
                <keep-alive>
                    <component :is="activeName === 'comment' ? 'Comment' : ''" :data="data"></component>
                </keep-alive>
            </el-tab-pane>
            <el-tab-pane label="图书问答" name="qa">
                <keep-alive>
                    <component :is="activeName === 'qa' ? 'Qa' : ''" :data="data"></component>
                </keep-alive>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import tabData from '../../../data/booktabs';

import Introduction from './Introduction';

export default {
    name: 'BookTab',
    props: {
        data: Object
    },
    components: {
        Introduction,
        'Comment': () => import('./Comment'),
        'Qa': () => import('./Qa') 
    },
    data() {
        return {
            tabData,
            activeName: 'introduction'
        }
    }
}
</script>

<style lang="scss" scoped>

</style>