<script setup lang="ts">
import ThePost from "@/features/ThePost";
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import type {IPost} from "@/utils/types/postTypes.ts";
import {getAllPosts} from "@/widgets/PostsList/api/getPosts.ts";
import Paginator from "@/shared/Paginator";
import Search from "@/features/Search";

const VISIBLE_ON_PAGE = 10;
const allPosts = ref<IPost[]>([]);
const filteredPosts = ref<IPost[]>([]);
const visiblePosts = ref<IPost[]>([{
  title: '',
  body: '',
  id: -1,
  userId: -1
}]);
const pageCount = ref<number>(0);
const currentPage = ref<number>(1);

const prepareVisiblePosts = (): void => {
  const lastElementId = VISIBLE_ON_PAGE * currentPage.value - 1;
  const firstElementId = lastElementId - VISIBLE_ON_PAGE + 1;
  visiblePosts.value = filteredPosts.value.slice(firstElementId, lastElementId);
}

const getPageCount = (): void => {
  pageCount.value = Math.ceil(filteredPosts.value.length / VISIBLE_ON_PAGE);
}

const changeCurrentPage = (page: number) => {
  currentPage.value = page;
  prepareVisiblePosts();
}

const filterPosts = (title: string) => {
  if (title)
    filteredPosts.value = allPosts.value.filter((post: IPost) => post.title.includes(title));
  else
    filteredPosts.value = allPosts.value;
  getPageCount();
  changeCurrentPage(1);
}

onMounted(async () => {
  const { data } = await getAllPosts();
  allPosts.value = data;
  filteredPosts.value = allPosts.value;
  getPageCount();
  prepareVisiblePosts();
});

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
    <div class="search">
      <Search
          @do-search="filterPosts"
      />
    </div>
    <template v-for="post of visiblePosts" :key="post.id">
      <ThePost
          :title="post.title"
          :body="post.body"
          @click="() => openPostPage(post.id)"
      />
    </template>
    <Paginator
        :current-page="currentPage"
        :count="pageCount"
        @page-selection="changeCurrentPage"
    />
  </div>
</template>

<style lang="scss" scoped>
.posts-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  align-items: center;
  margin-bottom: 30px;
}

.search {
  width: 50%;
}
</style>