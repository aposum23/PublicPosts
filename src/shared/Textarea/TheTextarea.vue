<script setup lang="ts">
const model = defineModel<string>();
const props = defineProps<{
  label: string,
  rowsCount?: number,
}>();
</script>

<template>
  <div class="textarea-container">
    <span>{{label}}</span>
    <textarea
        :spellcheck="true"
        :rows="rowsCount"
        v-model="model"
    />
  </div>
</template>

<style scoped lang="scss">
.textarea-container {
  display: flex;
  align-items: start;
  justify-content: space-between;
  width: 80%;

  & textarea {
    width: 85%;
    border-radius: 6px;
    background: var(--aditional-cool-wave);
    outline: none;
    padding: 10px;
    resize: none;
  }
}
</style>