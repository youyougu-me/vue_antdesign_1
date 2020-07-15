<template>
  <svg :class="svgClass" aria-hidden="true">
    <!-- 这个类跟阿里里面内置的保持一致 -->
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: "svgIcon",
  data() {
    return {};
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    },
    svgClass() {
      if (this.className) {
        return `svg-icon ${this.className}`;
      } else {
        return `svg-icon`;
      }
    }
  },
  props: {
    iconClass: {
      type: String, //定义值的接收类型
      default: ""
    },
    className: {
      type: String, //定义值的接收类型
      default: ""
    }
  }
};
</script>
<style lang="scss" scoped>
// .svg-icon每个图标的自定义基类
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  color: #fff;
  //特有的类
  //头部下拉图标
  &.pull {
    font-size: 20px !important;
    opacity: 0.8;
  }
  //侧边栏图标
  &.home {
    font-size: 18px;
    margin-bottom: 4px;
    color: #2d2d2d;
  }
  &.about {
    font-size: 18px;
    margin-bottom: 4px;
    color: #2d2d2d;
  }
  &.works {
    font-size: 18px;
    margin-bottom: 4px;
    color: #2d2d2d;
  }
  &.blog {
    font-size: 18px;
    margin-bottom: 3px;
    color: #2d2d2d;
  }

  //移动端悬浮图标,控制菜单
  &.list {
    font-size: 20px;
    color: #2177c7 !important;
  }
  &.rightarrow {
    font-size: 20px;
    color: #2177c7 !important;
  }

  //侧边栏底部社交图标
  &.github {
    font-size: 18px;
    color: #888888 !important;
  }
  &.weixin{
    font-size:21px;
    color: #888888 !important;
    margin-bottom:-3px;
  }
    &.jian{
    font-size:18px;
    color: #888888 !important;
  }
}
</style>