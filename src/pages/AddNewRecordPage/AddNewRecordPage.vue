<script setup lang="ts">
import PostCreatingForm from "@/features/PostCreatingForm";
import Button from "@/shared/Button";
import {ref} from "vue";
import type {IPost} from "@/utils/types/postTypes.ts";
import {useRouter} from "vue-router";
import {createNewRecord} from "@/pages/AddNewRecordPage/api/createNewRecord.ts";

const formData = ref<IPost>({
  title: '',
  body: '',
  userId: 1
})
const saveFormData = () => {
  createNewRecord(formData.value).then(() => goBack());
}

const router = useRouter();
const goBack = () => {
  router.back();
}
</script>

<template>
  <div class="container">
    <div class="form-header">
      <Button label="Назад" @click="goBack"/>
      <Button label="Сохранить" @click="saveFormData"/>
    </div>
    <PostCreatingForm v-model="formData"/>
  </div>
</template>

<style scoped lang="scss">
.form-header {
  display: flex;
  justify-content: end;
  gap: 15px;
  width: 90%;
  margin: 15px 0;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>