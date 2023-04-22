<template>
  <el-main id="scroll-block">
    <RepoCard v-for="repo in repoList" :key="repo.id" :repo="repo" />
    <LoadingBlock v-if="loading" id="loading-block" />
    <div id="scroll-end"></div>
  </el-main>
</template>

<script setup>
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import { ElMessage } from 'element-plus';
import getRepos from '@/api';
import { createObserver } from '@/utils';
import RepoCard from './RepoCard.vue';
import LoadingBlock from './LoadingBlock.vue';

const loading = ref(true);
const repoList = ref([]);
const apiPayload = reactive({
  username: 'yyx990803', // 使用者名稱
  per_page: 6, // 一頁顯示幾筆
  page: 1, // 第幾頁
});

const handleRepoList = async () => {
  loading.value = true;

  const out = await getRepos(apiPayload);

  if (out.status === 200) {
    if (out.data.length === 0) {
      ElMessage({
        type: 'info',
        message: '沒有資料囉！',
      });

      return;
    }

    const newData = out.data.map((i) => ({
      id: i.id,
      name: i.name,
      desc: i.description,
      url: i.url,
    }));

    repoList.value = repoList.value.concat(newData);

    apiPayload.page += 1;
  } else {
    ElMessage({
      type: 'error',
      message: '獲取資料失敗！',
    });
  }

  loading.value = false;
};

const handleObserver = ({ intersectionRatio }) => {
  if (intersectionRatio > 0 && !loading.value) {
    handleRepoList();
  }
};

const observer = createObserver(handleObserver);

onMounted(() => {
  const scrollEnd = document.querySelector('#scroll-end');

  observer.observe(scrollEnd);

  handleRepoList();
});

onUnmounted(() => {
  const scrollEnd = document.querySelector('#scroll-end');

  observer.unobserve(scrollEnd);
});
</script>

<style lang="scss" scoped>
.el-main {
  background-color: #f3f4f7;
  flex: 1;
  position: relative;
}
</style>
