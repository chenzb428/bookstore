<template>
    <div class="cart">
        <div class="container">
            <div class="cart-box">
                <el-table :data="bookCartData" style="width: 100%" 
                          :header-cell-style="{'text-align':'center'}" 
                          :cell-style="{'text-align':'center'}">
                    <el-table-column width="300">
                        <template slot-scope="scope">
                    　　　　<el-image :src="scope.row.img" style="width: 80px; height: 80px"></el-image>
                    　　</template>
                    </el-table-column>
                    <el-table-column label="商品名称">
                        <template slot-scope="scope">
                            <h1 class="title">{{ scope.row.title }}</h1>
                        </template>
                    </el-table-column>
                    <el-table-column label="单价" width="120">
                        <template slot-scope="scope">
                            <span>￥{{ scope.row.price }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="totalMount" label="数量" width="120">
                        <template slot-scope="scope">
                            <div class="calculator">
                                <el-button size="mini" @click="setCartItem(scope.row.id, scope.row.price, 'PLUS')">+</el-button>
                                <span>{{ scope.row.totalMount }}</span>
                                <el-button size="mini" @click="setCartItem(scope.row.id, scope.row.price, 'MINUS')">-</el-button>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="金额" width="120">
                        <template slot-scope="scope">
                            <span>￥{{ scope.row.totalPrice }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" width="120">
                        <template slot-scope="scope">
                            <el-button size="small" @click="delCartItem(scope.row.id)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'CartPage',
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
        delCartItem(id) {

        },
        ...mapActions('cart',['setTotal', 'setCart'])
    },
    computed: {
        ...mapState('cart', ['bookCartData'])
    }
}
</script>

<style lang="scss" scoped>
.cart {
    .container {
        .cart-box {
            box-shadow: 0 5px 10px #d4d4d4;

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
        }
    }
}
</style>