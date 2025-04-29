<script setup lang="ts">
const model = defineModel<string>();
const props = defineProps<{
  label: string
}>();
</script>

<template>
  <div class="input-container">
    <span>{{label}}</span>
    <input type="text" v-model="model"/>
  </div>
</template>

<style scoped lang="scss">
.input-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;

  & input {
    width: 90%;
    border-radius: 6px;
    background: var(--aditional-cool-wave);
    padding: 10px;
    outline: none;
  }
}
</style>