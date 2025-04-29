<script setup lang="ts">
import PostsList from "@/widgets/PostsList";
import {ref} from "vue";
import type {IPost} from "@/utils/types/postTypes.ts";

const posts = ref<IPost[]>([{}]);
</script>

<template>
  <div class="posts">
    <template v-for="post of posts">
      <PostsList />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.posts {
  display: flex;
  justify-content: center;
}
</style>
