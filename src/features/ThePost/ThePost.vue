<script setup lang="ts">
import LoadedText from "@/shared/LoadedText";
import LoadedHeader from "@/shared/LoadedHeader";

const props = defineProps<{
  title: string,
  body: string
}>();
</script>

<template>
  <div class="post-container">
    <div class="post-header">
      <LoadedHeader :header="title"/>
    </div>
    <div class="post-content">
      <LoadedText :text="body"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post-container {
  background: var(--aditional-sky-bolt);
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 10px;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
}

.post-container:hover {
  outline: 1px solid var(--aditional-cool-wave);
}

.post-header {
  height: 2rem;
}

.post-content {
  display: flex;
  height: 8rem;
  margin: 0;
}
</style>