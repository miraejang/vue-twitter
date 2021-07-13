<template>
  <component :is="layout"></component>
</template>

<script>
import { computed } from "vue"
import { useRoute } from "vue-router"
import AuthedLayout from "./pages/authed/App.vue"
import UnauthLayout from "./pages/unauth/App.vue"

export default {
  name: 'App',
  components: { AuthedLayout, UnauthLayout },
  setup() {
    const route = useRoute()
    const layout = computed(() => {
      console.log(route.meta.layout)
      return route.meta.layout || 'AuthedLayout'
      } )    
    
    return { layout }
  },
}
</script>

<style>
</style>
