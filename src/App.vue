<template>
  <div id="app">
    <Search v-model="searchVal" />
    <Recommend />
    <Rank :searchVal="searchVal" />
  </div>
</template>

<script>
import Search from './components/Search';
import Recommend from './components/Recommend';
import Rank from './components/Rank';

export default {
  name: 'App',
  components: {
    Search,
    Recommend,
    Rank,
  },
  data() {
    return {
      searchVal: null,
    };
  },
};
</script>
