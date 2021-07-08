<template>
  <component :is="layout"></component>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import DefaultLayout from "./defaultLayout.vue";
import EmptyLayout from "./emptyLayout.vue";

export default {
  components: { DefaultLayout, EmptyLayout },
  setup() {
    const route = useRoute();
    const layout = computed(() => route.meta.layout || 'DefaultLayout' );

    return { layout };
  },
};
</script>

<style>
</style>