<script setup lang="ts">
import LoadedText from "@/shared/LoadedText";
import LoadedHeader from "@/shared/LoadedHeader";
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import {getRecord} from "@/widgets/FullPost/api/getRecord.ts";
import type {IPost} from "@/utils/types/postTypes.ts";

const route = useRoute();
const record = ref<IPost>();

onMounted(() => {
  getRecord(Number(route.params.recordId)).then(({data}) => record.value = data)
      .catch((e) => console.error('Error in request:', e));
});
</script>

<template>
  <div class="post-container">
    <div class="post-header">
      <LoadedHeader :header="record?.title || ''"/>
    </div>
    <div class="post-content">
      <LoadedText :text="record?.body || ''"/>
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

.post-header {
  height: 2rem;
}

.post-content {
  display: flex;
  height: calc(100vh - 15rem);
  margin: 0;
}
</style>