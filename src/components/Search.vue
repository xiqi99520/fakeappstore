<template>
  <div class="search-area">
    <div class="area flex">
      <img class="icon-search" src="../assets/icon_search.svg" alt="" />
      <input
        v-model="value"
        class="search"
        type="text"
        placeholder="Search..."
        @input="$emit('input', $event.target.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      value: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.search-area {
  border-bottom: 1px solid #f2f2f2;
  box-sizing: border-box;
  padding: 6px;
  .area {
    align-items: center;
    border-radius: 20px;
    background-color: #f4f4f4;
    padding: 6px;
  }
  .icon-search {
    width: 16px;
    height: 16px;
    margin-right: 10px;
  }
  .search {
    width: 100%;
    border: 0;
    background-color: #f4f4f4;
    outline: none;
  }
}
</style>
