<template>
  <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex justify-center min-h-screen sm:pt-6 sm:px-4 sm:pb-20 text-center sm:block sm:p-0">
      <div @click="$emit('closeModal')" class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <!-- contents -->
      <div @click.stop class="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
        <div class="flex justify-between items-center p-2 border-b border-default">
          <div class="flex items-center">
            <button @click="$emit('closeModal')" class="fas fa-times flex items-center text-primary text-lg p-2 w-10 h-10 hover-bg-blue-50 rounded-full"></button>
            <span class="font-bold text-lg">Edit profile</span>
          </div>
          <div class="text-right mr-2">
            <button @click="onSaveProfile" class="hover:bg-dark bg-primary text-white font-bold px-3 py-1 rounded-full">Save</button>
          </div>
        </div>
        <div class="h-60">
          <div class="relative">
            <!-- background image -->
            <div class="flex relative h-40 justify-center items-center">
              <img ref="backgroundImage" :src="currentUser.background_image_url" alt="" class="object-cover h-full w-full" />
              <button @click="onChangeBackgroundImage" class="absolute hover:text-gray-200">
                <i class="fas fa-camera text-white text-lg"></i>
              </button>
              <input @change="previewBackgroundImage" type="file" accept="image/*" id="backgroundImageInput" class="hidden" />
            </div>
            <!-- profile image -->
            <div class="flex w-28 h-28 justify-center items-center -mt-14 relative z-10">
              <img ref="profileImage" :src="currentUser.profile_image_url" alt="" class="border-4 border-white rounded-full" />
              <button @click="onChangeProfileImage" class="absolute h-10 w-10 hover:text-gray-200"></button>
              <input @change="previewProfileImage" type="file" accept="image/*" id="profileImageInput" class="hidden" />
            </div>
          </div>
        </div>
        <div class="flex flex-col p-2">
          <div class="mx-2 my-1 px-2 py-1 border border-gray-200 rounded text-light hover:border-primary horder:text-primary">
            <div class="text-sm">Name</div>
            <input type="text" :value="currentUser.email" class="text-black focus:outline-none" />
          </div>
          <div class="mx-2 my-1 px-2 py-5 border border-gray-200 rounded text-light hover:border-primary horder:text-primary">
            <div class="text-sm">Bio</div>
            <input type="text" class="text-black focus:outline-none" />
          </div>
          <div class="mx-2 my-1 px-2 py-3 border border-gray-200 rounded text-light hover:border-primary horder:text-primary">
            <div class="text-sm">Location</div>
            <input type="text" class="text-black focus:outline-none" />
          </div>
          <div class="mx-2 my-1 px-2 py-3 border border-gray-200 rounded text-light hover:border-primary horder:text-primary">
            <div class="text-sm">Website</div>
            <input type="text" class="text-black focus:outline-none" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import addTweet from '/src/untils/addTweet.js'
import store from '/src/store'
import { storage, USER_COLLECTION } from '../firebase'

export default {
  setup(props, { emit }) {
    const tweetBody = ref('')
    const currentUser = computed(() => store.state.user)
    const backgroundImage = ref(null)
    const backgroundImageData = ref(null)
    const profileImage = ref(null)
    const profileImageData = ref(null)

    const onAddTweet = async () => {
      try {
        await addTweet(tweetBody.value, currentUser.value)
        tweetBody.value = ''
        emit('close-modal')
      } catch (e) {
        console.log('on add tweet wrror on homepage: ', e)
      }
    }

    const onChangeBackgroundImage = () => {
      document.getElementById('backgroundImageInput').click()
    }

    const onChangeProfileImage = () => {
      document.getElementById('profileImageInput').click()
    }

    const previewBackgroundImage = (e) => {
      const file = e.target.files[0]
      let reader = new FileReader()
      backgroundImageData.value = file
      reader.onload = function (e) {
        backgroundImage.value.src = e.target.result
      }
      reader.readAsDataURL(file)
    }

    const previewProfileImage = (e) => {
      const file = e.target.files[0]
      let reader = new FileReader()
      profileImageData.value = file
      reader.onload = function (e) {
        profileImage.value.src = e.target.result
      }
      reader.readAsDataURL(file)
    }

    const onSaveProfile = async () => {
      if (!profileImageData.value && !backgroundImageData.value) {
        return
      }

      if (profileImageData.value) {
        try {
          const uploadTask = await storage.ref(`profile/${currentUser.value.uid}/profile`).put(profileImageData.value)
          const url = await uploadTask.ref.getDownloadURL()
          await USER_COLLECTION.doc(currentUser.value.uid).update({
            profile_image_url: url,
          })
          store.commit('SET_PROFILE_IMAGE', url)
        } catch (e) {
          console.log(`profile image data error : ${e}`)
        }
      }

      if (backgroundImageData.value) {
        try {
          const uploadTask = await storage.ref(`background/${currentUser.value.uid}/background`).put(backgroundImageData.value)
          const url = await uploadTask.ref.getDownloadURL()
          await USER_COLLECTION.doc(currentUser.value.uid).update({
            background_image_url: url,
          })
          store.commit('SET_BACKGROUND_IMAGE', url)
        } catch (e) {
          console.log(`background image data error : ${e}`)
        }
      }

      emit('close-modal')
    }

    return {
      tweetBody,
      currentUser,
      onAddTweet,
      onChangeBackgroundImage,
      onChangeProfileImage,
      previewBackgroundImage,
      previewProfileImage,
      backgroundImage,
      profileImage,
      onSaveProfile,
      backgroundImageData,
      profileImageData,
    }
  },
}
</script>

<style>
</style>