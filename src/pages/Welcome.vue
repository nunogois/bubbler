<template>
  <q-page class="row items-center justify-evenly">
    <q-btn label="Sign In" @click="signIn" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { mapActions } from 'vuex'

export default defineComponent({
  methods: {
    ...mapActions('auth', ['signInGoogleAction']),
    signIn() {
      void this.signInGoogleAction()
    }
  }
})
</script>
