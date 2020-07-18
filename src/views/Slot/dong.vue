<template>
  <div id="slotbox">
    <a-card>
      <div>
        <slot name="name" :obj="obj"></slot>
      </div>
      <div>
        <slot name="age" :obj="obj"></slot>
      </div>
      <div>
        <slot name="sex" :obj="obj"></slot>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        name: "谷双",
        age: 24,
        sex: "男"
      }
    };
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
#slotbox {
  width: 100%;
  height: 100%;
  background-color: #eee;
  padding: 20px;
  .ant-card {
    div:nth-child(1) {
      background-color: green;
    }
    div:nth-child(2) {
      background-color: darkcyan;
    }
    div:nth-child(3) {
      background-color: darkgoldenrod;
    }
  }
}
</style>