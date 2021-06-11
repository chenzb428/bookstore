<template>
    <div class="cart">
        <div class="container">
            <div class="cart-box">
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
                            <router-link :to="`/book/${scope.row.id}`" target="_blank"><h1 class="title">{{ scope.row.title }}</h1></router-link>
                        </template>
                    </el-table-column>
                    <el-table-column label="单价" width="120">
                        <template slot-scope="scope">
                            <span>￥{{ scope.row.price.toFixed(2) }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="totalMount" label="数量" width="120">
                        <template slot-scope="scope">
                            <CartCalculator :id="scope.row.id" :price="scope.row.price" :totalMount="scope.row.totalMount" />
                        </template>
                    </el-table-column>
                    <el-table-column label="金额" width="120">
                        <template slot-scope="scope">
                            <span>{{ scope.row.totalPrice.toFixed(2) }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" width="120">
                        <template slot-scope="scope">
                            <el-button size="small" @click="delCartItem(scope.row.id, scope.row.price, scope.row.totalMount)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="total-panel float-right">
                    <span class="total-price">总价：￥{{ bookTotalPrice.toFixed(2) }}</span>
                    <router-link :to="{name: 'check'}"><el-button size="small" type="danger">结算</el-button></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import { setMinHeight } from '../libs/utils';

import CartCalculator from '../components/CartCalculator';

export default {
    name: 'CartPage',
    components: {
        CartCalculator
    },
    mounted() {
        setMinHeight('.cart-box', 162);
    },
    methods: {
        setCartItem(id, price, type) {
            this.setTotal({
                type,
                price
            });

            this.setCart({
                id,
                price,
                type
            });
        },
        delCartItem(id, totalPrice, totalMount) {
            
            this.$confirm('您确定要删除商品吗？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消'
            }).then(() => {
                this.delCart({
                    id,
                    totalPrice,
                    totalMount
                });
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                state.bookCartData[index].totalMount += 1;
                // this.$message({
                //     type: 'info',
                //     message: '已取消删除'
                // });          
            });
        },
        ...mapActions('cart',['setTotal', 'setCart', 'delCart'])
    },
    computed: {
        ...mapState('cart', ['bookCartData', 'bookTotalPrice'])
    }
}
</script>

<style lang="scss" scoped>
.cart {
    .container {
        .cart-box {
            box-shadow: 0 5px 10px #d4d4d4;
            overflow: hidden;

            .title {
                display: inline;
                cursor: pointer;
                
                &:hover {
                    color: red;
                    text-decoration: underline;
                }
            }
            .calculator {
                display: flex;
                flex-direction: row;
                justify-content: flex-end;

                
                span {
                    display: inline-block;
                    width: 30px;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                }
            }
            .total-panel {
                margin: 20px;

                .total-price {
                    margin-right: 20px;
                }
            }
        }
    }
}
</style>