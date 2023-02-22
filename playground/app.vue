<script lang="ts" setup>
import { debounce } from '@whoj/utils-core';

const instance = getCurrentInstance();

const options = ref<{ [p: string]: any }[]>([]);

const search = debounce(350, (loading, search, vm) => {
  fetch(
    `https://api.github.com/search/repositories?q=${escape(search)}`
  ).then((res) => {
    res.json().then(json => (vm.options = json.items));
    loading(false);
  });
});

function onSearch(src, loading) {
  if (src.length) {
    loading(true);
    search(loading, src, instance);
  }
}
</script>

<template>
  <div>
    <h1>Vue Select - Ajax</h1>
    <VSelect label="name" :filterable="false" :options="options" @search="onSearch">
      <template #no-options>
        type to search GitHub repositories..
      </template>
      <template #option="option">
        <div class="d-center">
          <img :src="option.owner.avatar_url">
          {{ option.full_name }}
        </div>
      </template>
      <template #selected-option="option">
        <div class="selected d-center">
          <img :src="option.owner.avatar_url">
          {{ option.full_name }}
        </div>
      </template>
    </VSelect>
  </div>
</template>
