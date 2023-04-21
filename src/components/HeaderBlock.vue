<template>
  <el-row :gutter="20" justify="space-between" align="middle" tag="header" class="el-header">
    <el-col :span="6">
      <h1>Infinity Scroll</h1>
    </el-col>
    <el-col :span="4">
      <el-input clearable :prefix-icon="Search" />
    </el-col>
  </el-row>
</template>

<script setup>
import { Search } from '@element-plus/icons-vue';
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #3375b9;
  h1 {
    color: #ffffff;
    font-weight: bold;
    font-size: 2.5rem;
  }
}
</style>
