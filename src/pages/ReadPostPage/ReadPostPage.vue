<script setup lang="ts">
import FullPost from "@/widgets/FullPost/FullPost.vue";
import Button from "@/shared/Button";
import {useRouter} from "vue-router";

const router = useRouter();

const goBack = () => {
  router.back();
}
</script>

<template>
  <div class="read-container">
    <div class="read-header">
      <Button label="Назад" @click="goBack"/>
    </div>
    <FullPost />
  </div>
</template>

<style scoped lang="scss">
.read-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.read-header {
  display: flex;
  justify-content: end;
  width: 90%;
  margin: 15px 0;
}
</style>