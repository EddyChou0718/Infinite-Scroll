<template>
  <div class="loading-block">
    <div class="spinner"></div>
  </div>
</template>

<style lang="scss" scoped>
.loading-block {
  text-align: center;
  .spinner {
    display: inline-block;
    border-radius: 50%;
    animation: rotating-spinner 1s linear infinite;
    width: 30px;
    height: 30px;
    border: 1px solid #f3f3f3;
    border-top: 2px solid #3375b9;
  }
}

@keyframes rotating-spinner {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
