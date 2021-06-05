<template>
<div class="introduction">
    {{ data.detail }}
</div>
</template>

<script>
export default {
    name: 'BookTabIntroduction',
    props: {
        data: Object
    }
}
</script>

<style scoped>
.introduction {
    padding: 20px;
    line-height: 25px;
    font-size: 16px;
}
</style>