<script setup lang="ts">

const emit = defineEmits<{
  pageSelection: [number]
}>();

const props = defineProps<{
  count: number;
  currentPage: number;
}>();

const pageSelectionHandler = (page: number): void => {
  emit('pageSelection', page);
}
</script>

<template>
  <div class="paginator-container">
    <template v-for="page in count">
      <div
          class="page-number"
          :class="{'selected-page': page === currentPage}"
          @click="() => pageSelectionHandler(page)"
      >
        <span>{{page}}</span>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.paginator {
  &-container {
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 1rem;
  }
}

.page-number {
  flex-shrink: 0;
  background: var(--aditional-sky-bolt);
  border-radius: 90px;
  width: 1rem;
  height: 1rem;
  padding: 10px;
  text-align: center;
  cursor: pointer;
}

.page-number:hover {
  outline: 1px solid var(--aditional-cool-wave);
}

.selected-page {
  background: var(--aditional-blue-core);
  outline: 1px solid var(--aditional-cool-wave);
}
</style>