<template>
    <div class="text-right sm:hidden mr-2">
    <button v-if="!tweetBody.length" class="bg-light text-sm font-bold text-white px-4 py-1 rounded-full">트윗</button>
    <button v-else @click="onAddTweet" class="bg-primary hover:bg-dark text-sm font-bold text-white px-4 py-1 rounded-full">트윗</button>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>