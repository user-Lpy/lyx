<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="Search bg">
      <div class="input">
        <i class="van-icon van-icon-search"></i>
        <input type="text" placeholder="点击前往搜索" />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.Search {
  height: 30px;
  padding: 10px;
  background-color: white;

  .input {
    background-color: #f7f8fa;
    height: 30px;
    border-radius: 2px;

    i {
      line-height: 30px;
      margin-left: 10px;
    }

    input {
      width: 85%;
      border: none;
      margin-left: 3px;
      background-color: #f7f8fa;
    }

    input::-webkit-input-placeholder {
      /* placeholder颜色 */
      color: #aab2bd;
      /* placeholder字体大小 */
      font-size: 12px;
    }
  }
}
</style>
