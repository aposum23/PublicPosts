<script setup lang="ts">
const props = defineProps<{
  header: string
}>();
</script>

<template>
  <div class="header-container">
    <template v-if="!header">
      <div class="empty-text"></div>
    </template>
    <template v-else>
      <h1 class="content">{{header}}</h1>
    </template>
  </div>
</template>

<style scoped lang="scss">
.header-container {
  display: inline;
}

.empty-text {
  width: 100%;
  height: 100%;
  border-radius: 6px;
  background: var(--aditional-fresh-mint);
}

h1 {
  margin: 0;
}
</style>