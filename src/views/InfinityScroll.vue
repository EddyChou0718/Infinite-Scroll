<template>
  <div class="common-layout">
    <el-container>
      <HeaderBlock />
      <RepoCardList />
    </el-container>
  </div>
</template>

<script setup>
import HeaderBlock from '@/components/HeaderBlock.vue';
import RepoCardList from '@/components/RepoCardList.vue';
</script>

<style lang="scss" scoped>
.common-layout {
  height: 100vh;
  .el-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
}
</style>
