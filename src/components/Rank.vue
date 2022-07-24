<template>
  <div class="rank">
    <div
      class="item flex"
      v-for="(item, index) in list"
      :key="index"
      @click="togo(item.url)"
    >
      <span class="sequence">{{ index + 1 }}</span>
      <img class="app-img" :src="item.image" alt="" />
      <div class="info">
        <div class="title">{{ item.name }}</div>
        <p class="desc">{{ item.type }}</p>
        <div class="score flex">
          <div class="num flex">
            <Star :rating="item.rating" />
            <span class="download-num">({{ item.ratingCount }})</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Star from './Star';
import { addThousandSymbol, handleRating } from '../utils/index';
export default {
  name: 'Rank',
  components: {
    Star,
  },
  props: {
    searchVal: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      list: [],
      allList: [],
      dataPool: [],
      timer: null,
    };
  },
  created() {
    this.getRankList();
  },
  watch: {
    searchVal(val, oldVal) {
      if ((val.trim() === '' && oldVal === null) || val.trim() === oldVal)
        return;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.filter(val.toLowerCase());
      }, 300);
    },
  },
  methods: {
    async getRankList() {
      try {
        // 这个接口下，数据并没有返回评分和评价数，所以暂时写死
        const res = await this.$api.store.topgrossingapplications(100);
        const list = res.data?.feed?.entry;
        this.list = list.map(item => {
          return {
            name: item['im:name'].label,
            image: item['im:image'][1].label,
            type: item.category.attributes.label,
            url: item.id.label,
            id: item.id.attributes['im:id'],
            rating: '2.5',
            ratingCount: 166,
          };
        });
        this.allList = Object.freeze(this.list);
        this.dataPool = list.map((item, index) => {
          return {
            index,
            id: item.id.attributes['im:id'],
            desc: (item.title.label + item.summary.label).toLowerCase(),
          };
        });
      } catch (err) {
        console.log('err===>>>', err);
      }
    },
    async filter(val) {
      let ids = [];
      const resultArr = this.dataPool
        .filter(item => item.desc.includes(val))
        .map(item => item.index);
      resultArr.forEach(item => ids.push(this.allList[item].id));
      const res = await this.$api.store.lookup({ id: ids.join() });
      this.list = res.data?.results.map(item => {
        return {
          name: item.trackName,
          image: item.artworkUrl100,
          type: item.genres[0],
          url: item.artistViewUrl,
          id: item.trackId,
          rating: handleRating(item.averageUserRating),
          ratingCount: addThousandSymbol(item.userRatingCount),
        };
      });
    },
    togo(url) {
      window.location.href = url;
    },
  },
};
</script>

<style lang="scss" scoped>
.rank {
  box-sizing: border-box;
  padding: 0 12px;
  .item {
    align-items: center;
    border-bottom: 1px solid #f2f2f2;
    padding: 8px 0;
    &:last-child {
      border-bottom: 0;
    }
    .sequence {
      display: inline-block;
      width: 20px;
      font-size: 10px;
      text-align: center;
      color: #b2b2b2;
      margin-right: 8px;
    }
    .app-img {
      width: 50px;
      height: 50px;
      margin-right: 8px;
    }
    &:nth-child(odd) {
      .app-img {
        border-radius: 14px;
      }
    }
    &:nth-child(even) {
      .app-img {
        border-radius: 50%;
      }
    }
    .info {
      font-size: 12px;
      .desc {
        color: #b2b2b2;
        margin-bottom: 4px;
      }
      .score {
        .num {
          font-size: 10px;
          color: #b2b2b2;
          align-items: flex-end;
        }
        .download-num {
          margin-left: 2px;
        }
      }
    }
  }
}
</style>
