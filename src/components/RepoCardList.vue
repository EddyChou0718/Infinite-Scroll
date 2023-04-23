<template>
  <el-main id="scroll-block">
    <RepoCard v-for="repo in repoList" :key="repo.id" :repo="repo" />
    <div id="scroll-end"></div>
  </el-main>
</template>

<script setup>
import { onMounted, onUnmounted, reactive, ref, watch } from 'vue';
import { ElMessage, ElLoading } from 'element-plus';
import getRepos from '@/api';
import { createObserver } from '@/utils';
import RepoCard from './RepoCard.vue';

const loading = ref(false);
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
      url: i.html_url,
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
  if (intersectionRatio > 0) {
    handleRepoList();
  }
};

watch(loading, () => {
  const loadBlock = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  });

  if (!loading.value) {
    loadBlock.close();
  }
});

const observer = createObserver(handleObserver);

onMounted(() => {
  const scrollEnd = document.querySelector('#scroll-end');

  observer.observe(scrollEnd);
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
