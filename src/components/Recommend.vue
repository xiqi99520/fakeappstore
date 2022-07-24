<template>
  <div class="recommend">
    <div class="title">Recommend</div>
    <div class="list flex">
      <div
        class="item"
        v-for="(item, index) in list"
        :key="index"
        @click="togo(item.url)"
      >
        <img class="app-img" :src="item.image" alt="" />
        <p class="app-name omit">{{ item.name }}</p>
        <div class="app-type omit">{{ item.type }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.getRecommendList();
  },
  methods: {
    async getRecommendList() {
      try {
        const res = await this.$api.store.topfreeapplications(10);
        const list = res.data?.feed?.entry;
        this.list = list.map(item => {
          return {
            name: item['im:name'].label,
            image: item['im:image'][2].label,
            type: item.category.attributes.label,
            url: item.id.label,
          };
        });
      } catch (err) {
        console.log('err===>>>', err);
      }
    },
    togo(url) {
      window.location.href = url;
    },
  },
};
</script>

<style lang="scss" scoped>
.recommend {
  border-bottom: 1px solid #f2f2f2;
  padding-top: 10px;
  .title {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 6px;
    margin-left: 14px;
  }
  .list {
    width: 100vw;
    overflow: auto;
    box-sizing: border-box;
    padding-left: 14px;
  }
  .item {
    width: 60px;
    margin-right: 16px;
    margin-bottom: 10px;
    text-align: center;
    .app-img {
      width: 56px;
      height: 56px;
      border-radius: 14px;
      margin-bottom: 4px;
    }
    .app-name {
      height: 14px;
      line-height: 14px;
      font-size: 12px;
      color: #343434;
      margin-bottom: 2px;
    }
    .app-type {
      width: 56px;
      font-size: 12px;
      color: #c1c1c1;
    }
  }
}
</style>
