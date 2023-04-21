<template>
  <el-main id="scroll-block">
    <div>
      <RepoCard v-for="repo in repoList" :key="repo.id" :repo="repo" />
    </div>
    <LoadingBlock v-if="loading" />
  </el-main>
</template>

<script setup>
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import { ElMessage } from 'element-plus';
import getRepos from '@/api';
import RepoCard from './RepoCard.vue';
import LoadingBlock from './LoadingBlock.vue';

const loading = ref(false);
const repoList = ref([]);
const apiPayload = reactive({
  username: 'yyx990803', // 使用這名稱
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
  }

  loading.value = false;
};

const handleScroll = (ev) => {
  const { srcElement } = ev;
  const { scrollTop, clientHeight, scrollHeight } = srcElement;

  if (scrollTop + clientHeight >= scrollHeight) {
    handleRepoList(apiPayload);
  }
};

onMounted(() => {
  handleRepoList();

  const scrollBlock = document.querySelector('#scroll-block');

  scrollBlock.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  const scrollBlock = document.querySelector('#scroll-block');

  scrollBlock.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss" scoped>
.el-main {
  background-color: #f3f4f7;
  flex: 1;
  position: relative;
}
</style>
