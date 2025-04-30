<script setup lang="ts">
import InputText from "@/shared/InputText/InputText.vue";
import {ref, watch} from "vue";
import debounce from "@/utils/functions/debaunce.ts";

const emit = defineEmits<{
  doSearch: [string]
}>();
const deb = debounce();
const searchValue = ref<string>('');

watch(
    () => searchValue.value,
    () => {
      deb(() => {
        emit('doSearch', searchValue.value);
      }, 1000);
    }
)
</script>

<template>
  <div class="search-container">
    <InputText label="Поиск" v-model="searchValue"/>
  </div>
</template>

<style scoped lang="scss">

</style>