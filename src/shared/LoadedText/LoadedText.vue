<script setup lang="ts">
const props = defineProps<{
  text: string
}>();
</script>

<template>
  <div class="text-container">
    <template v-if="!text">
      <div class="empty-text"></div>
    </template>
    <template v-else>
      <p class="content">{{text}}</p>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.text-container {
  width: 100%;
}

.empty-text {
  width: 100%;
  height: 100%;
  border-radius: 6px;
  background: var(--aditional-fresh-mint);
}

.content {
  width: 100%;
  height: 100%;
  margin: 0;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>