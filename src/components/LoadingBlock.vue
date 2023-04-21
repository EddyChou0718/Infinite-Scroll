<template>
  <div class="loading-block">
    <div class="spinner"></div>
  </div>
</template>

<style lang="scss" scoped>
.loading-block {
  position: fixed;
  text-align: center;
  color: #fff;
  z-index: 99;
  padding: 8px 18px;
  border-radius: 5px;
  left: calc(50% - 45px);
  top: calc(50% - 18px);
  .spinner {
    display: inline-block;
    margin: 0 10px;
    border-radius: 50%;
    animation: rotating-spinner 1s linear infinite;
    width: 30px;
    height: 30px;
    border: 1px solid #f3f3f3;
    border-top: 4px solid red;
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
