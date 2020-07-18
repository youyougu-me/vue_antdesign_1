<template>
  <div>
    <Dong>
      <template slot="name" slot-scope="scope">{{scope.obj.name}}</template>
      <template slot="age" slot-scope="scope">{{scope.obj.age}}</template>
      <template slot="sex" slot-scope="scope">{{scope.obj.sex}}</template>
    </Dong>
  </div>
</template>

<script>
import Dong from "./dong";
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {},
  components: {
    Dong
  }
};
</script>
<style lang="scss" scoped>
</style>