<script setup lang="ts">
import ThePost from "@/features/ThePost";
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import type {IPost} from "@/utils/types/postTypes.ts";
import {getAllPosts} from "@/widgets/PostsList/api/getPosts.ts";

const posts = ref<IPost[]>([{
  title: '',
  body: '',
  id: -1,
  userId: -1
}]);

onMounted(() => {
  getAllPosts().then(({data}) => posts.value = data);
})

const router = useRouter();

const openPostPage = (recordId: number): void => {
  router.push({
    name: 'readPost',
    params: {recordId: recordId}
  })
}
</script>

<template>
  <div class="posts-container">
    <template v-for="post of posts" :key="post.id">
      <ThePost
          :title="post.title"
          :body="post.body"
          @click="() => openPostPage(post.id)"
      />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.posts-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  align-items: center;
}
</style>