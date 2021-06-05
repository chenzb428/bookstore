<template>
    <div class="book-top">
        <div class="cover float-left">
            <el-image style="width: 200px; height: 200px" :src="data.bigImgUrl"></el-image>
        </div>
        <div class="content float-left">
            <h1 class="title">
                {{ data.title }}
            </h1>
            <p class="brief">
                {{ data.brief }}
            </p>
            <div class="author">
                <span>作者：{{ data.author }}</span>
                <span>出版社：{{ data.bookConcern }}</span>
                <span>出版日期：{{ data.publishDate }}</span>
            </div>
            <div class="price">
                <span class="factPrice">
                    {{ data.price | factPrice(data.discount) | currency }}
                </span>
                <span class="discount">
                    [{{data.discount  | formatDiscount}}]
                </span>
                <span>{{data.price | currency}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BookTop',
    props: {
        data: Object
    },
    filters: {
      // 格式化折扣数据
      formatDiscount(value){
        if(value)
        {
          let strDigits = value.toString().substring(2);
          strDigits += "折";
          return strDigits;
        }
        else
          return value;
      }
    }
}
</script>

<style lang="scss" scoped>
.book-top {
    height: 200px;
    background-color: rgba(0, 0, 0, .07);

    .cover {
        width: 200px;
    }
    .content {
        width: 900px;
        margin: 0 20px;

        .title {
            margin: 20px 0;
            font-size: 20px;
            font-weight: 600;
        }
        .brief {
            margin: 20px 0;
            font-size: 16px;
            line-height: 25px;
        }
        .author {
            margin: 25px 0;
            span {
                margin-right: 20px;
            }
        }
        .price {
            span {
                margin-right: 10px;
            }
            .factPrice, .discount {
                font-size: 18px;
                color: red;
            }
            span:last-child {
                text-decoration: line-through;
                color: #999;
            }
        }
    }
}
</style>