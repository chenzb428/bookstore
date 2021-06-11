<template>
    <div class="check">
        <div class="container">
            <div class="check-box">
                <h1 class="title">商品结算</h1>
                <el-table :data="bookCartData" style="width: 100%" 
                        :header-cell-style="{'text-align':'center'}" 
                        :cell-style="{'text-align':'center'}">
                    <el-table-column width="300">
                        <template slot-scope="scope">
                        　　　<el-image :src="'/api/' + scope.row.img" style="width: 80px; height: 80px"></el-image>
                        </template>
                    </el-table-column>
                    <el-table-column label="商品名称">
                        <template slot-scope="scope">
                            <router-link :to="`/book/${scope.row.id}`" target="_blank">{{ scope.row.title }}</router-link>
                        </template>
                    </el-table-column>
                    <el-table-column label="单价" width="120">
                        <template slot-scope="scope">
                            <span>￥{{ scope.row.price.toFixed(2) }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="totalMount" label="数量" width="120">
                        
                    </el-table-column>
                    <el-table-column label="金额" width="120">
                        <template slot-scope="scope">
                            <span>{{ scope.row.totalPrice.toFixed(2) }}</span>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="total-panel float-right">
                    <span class="total-price">总价：￥{{ bookTotalPrice.toFixed(2) }}</span>
                    <el-button size="small" type="danger" @click="pay">付款</el-button>
                    <el-dialog
                        title="提示"
                        :visible.sync="dialogVisible"
                        width="30%">
                    <span>付款成功！</span>
                    <span slot="footer" class="dialog-footer">
                        <el-button type="primary" @click="payClose">确 定</el-button>
                    </span>
                    </el-dialog>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import { setMinHeight, setCartStorage } from '../libs/utils';

export default {
    name: 'CheckOut',
    mounted() {
        setMinHeight('.check-box', 162);
    },
    data() {
        return {
            dialogVisible: false
        }
    },
    methods: {
        pay() {
            this.dialogVisible = true;
            this.payCart();
            setCartStorage({
                bookTotalPrice,
                bookTotalMount,
                bookCartData
            });
        },
        payClose() {
            this.dialogVisible = false;
            this.$router.push('/');
        },
        ...mapActions('cart', ['payCart'])
    },
    computed: {
        ...mapState('cart', ['bookCartData', 'bookTotalPrice', 'bookTotalMount'])
    },
}
</script>

<style lang="scss" scoped>
.check {
    .container {
        background-color: #ffffff;
        box-shadow: 0 5px 10px #d4d4d4;
        overflow: hidden;

        .title {
            padding: 20px 0;
            text-align: center;
            font-size: 24px;
            font-weight: 600;
        }
        .total-panel {
            margin: 20px;

            .total-price {
                margin-right: 20px;
            }
        }
    }
}
</style>