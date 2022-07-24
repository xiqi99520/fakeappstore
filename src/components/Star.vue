<template>
  <div class="rating-content" :data-rating="rating">
    <span>★</span>
    <span>★</span>
    <span>★</span>
    <span>★</span>
    <span>★</span>
  </div>
</template>

<script>
export default {
  name: 'Star',
  props: {
    rating: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.rating-content {
  position: relative;
  flex-shrink: 0;
}
.rating-content span {
  display: inline-block;
  position: relative;
  color: #acaaaa;
}
// 半选
.rating-content[data-rating='0.5'] span:nth-child(1):before,
.rating-content[data-rating='1.5'] span:nth-child(2):before,
.rating-content[data-rating='2.5'] span:nth-child(3):before,
.rating-content[data-rating='3.5'] span:nth-child(4):before,
.rating-content[data-rating='4.5'] span:last-child:before {
  content: '\2605';
  display: block;
  position: absolute;
  width: 50%;
  pointer-events: none;
  overflow: hidden;
  color: #ffa100;
  z-index: 9;
}
// 全选
.rating-content[data-rating='1.0'] span:nth-child(-n + 1):before,
.rating-content[data-rating='1.5'] span:nth-child(-n + 1):before,
.rating-content[data-rating='2.0'] span:nth-child(-n + 2):before,
.rating-content[data-rating='2.5'] span:nth-child(-n + 2):before,
.rating-content[data-rating='3.0'] span:nth-child(-n + 3):before,
.rating-content[data-rating='3.5'] span:nth-child(-n + 3):before,
.rating-content[data-rating='4.0'] span:nth-child(-n + 4):before,
.rating-content[data-rating='4.5'] span:nth-child(-n + 4):before,
.rating-content[data-rating='5.0'] span:nth-child(-n + 5):before {
  content: '\2605';
  display: block;
  position: absolute;
  width: 100%;
  pointer-events: none;
  overflow: hidden;
  color: #ffa100;
  z-index: 9;
}
</style>
