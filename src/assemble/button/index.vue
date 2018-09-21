<template>
    <div><!-- 虚节点 --></div>
</template>

<script>
export default {
  props: {
    id: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {};
  }
};
</script>