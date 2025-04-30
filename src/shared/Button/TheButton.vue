<script setup lang="ts">
const props = defineProps<{
  label: string
}>();
</script>

<template>
  <div class="container">
    <span>{{label}}</span>
  </div>
</template>

<style scoped lang="scss">
.container {
  background: var(--aditional-sky-bolt);
  padding: 10px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

.container:hover {
  background: var(--aditional-cool-wave);
}
</style>