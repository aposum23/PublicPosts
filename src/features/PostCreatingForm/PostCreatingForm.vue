<script setup lang="ts">
import InputText from "@/shared/InputText";
import Textarea from "@/shared/Textarea";
import type {IPost} from "@/utils/types/postTypes.ts";

const model = defineModel<IPost>({default: {title: '', body: ''}});
</script>

<template>
  <div class="form-container">
    <InputText label="Заголовок" v-model="model.title"/>
    <Textarea label="Текст" :rows-count="30" v-model="model.body"/>
  </div>
</template>

<style scoped lang="scss">
.form-container {
  width: 90%;
  background: var(--aditional-sky-bolt);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 15px;
}
</style>