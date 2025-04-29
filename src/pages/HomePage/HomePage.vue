<script setup lang="ts">
import PostsList from "@/widgets/PostsList";
import Button from "@/shared/Button";
import {ref} from "vue";
import type {IPost} from "@/utils/types/postTypes.ts";
import {useRouter} from "vue-router";

const posts = ref<IPost[]>([{}]);

const router = useRouter();

const goToCreateRecord = () => {
  router.push('add-new');
}
</script>

<template>
  <div class="posts">
    <div class="posts-header">
      <Button label="Добавить" @click="goToCreateRecord"/>
    </div>
    <template v-for="post of posts">
      <PostsList />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.posts {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.posts-header {
  display: flex;
  justify-content: end;
  width: 90%;
  margin: 15px 0;
}
</style>
