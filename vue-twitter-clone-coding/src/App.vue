<template>
  <h1 class="text-red">Hello</h1>
  <component :is="layout"></component>
</template>

<script>
import { computed } from "vue"
import { useRoute } from "vue-router"
import UnauthLayout from "./pages/unauth/App.vue"
import AuthedLayout from "./pages/authed/App.vue"

export default {
  components: { UnauthLayout, AuthedLayout },
  setup() {
    const route = useRoute()
    const layout = computed(() => route.meta.layout || 'AuthedLayout' )

    return { layout }
  },
}
</script>


<style>

</style>
