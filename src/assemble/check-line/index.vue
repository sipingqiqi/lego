<template>
    <div><!-- 虚节点 --></div>
</template>

<script>
export default {
  props: {
    id: {
      type: String
    },

    // 左侧主文字说明
    label: {
      type: String,
      default: ""
    },

    // 左侧副文字
    comment: {
      type: String
    },

    // 右侧主文字说明
    value: {
      type: String,
      default: ""
    },

    // 是否勾选
    checked: {
      type: String,
      default: "false"
    },

    // 是否显示箭头
    link: {
      type: String,
      default: "false"
    },

    callFn: {
      type: Function,
      default: function() {}
    }
  },

  data: function() {
    return {};
  }
};
</script>