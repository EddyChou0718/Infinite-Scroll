<template>
  <el-card class="box-card">
    <template #header>
      <h5 class="header">
        {{ repo.name }}
      </h5>
    </template>
    <div class="item">
      <el-text>{{ repo.desc }}</el-text>
    </div>
    <div class="item">
      <el-link :href="repo.url" target="_blank" type="primary">{{ repo.url }}</el-link>
    </div>
  </el-card>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';

const props = defineProps(['repo']);
const { repo } = toRefs(props);
</script>

<style lang="scss" scoped>
.box-card {
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
  .header {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .item {
    margin-bottom: 1rem;
  }
}
</style>
