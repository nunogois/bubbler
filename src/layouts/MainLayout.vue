<template>
  <q-layout view="hHh LpR fFf">
    <q-header class="non-selectable">
      <q-toolbar>
        <q-icon name="far fa-comment-dots" size="md" />
        <q-toolbar-title class="bubbler-title"> Bubbler </q-toolbar-title>

        {{ getUser?.photoURL }}

        <q-avatar>
          <img :src="getUser?.photoURL" />
        </q-avatar>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { mapGetters, mapActions } from 'vuex'

export default defineComponent({
  mounted() {
    void this.authAction()
  },
  watch: {
    getChecked(val) {
      if (val) {
        this.loading = false
        if (!this.isUserAuth) {
          void this.$router.replace('/welcome')
        }
      }
    }
  },
  computed: {
    ...mapGetters('auth', ['getChecked', 'getUser', 'isUserAuth'])
  },
  methods: {
    ...mapActions('auth', ['authAction'])
  },
  setup() {
    const loading = ref<boolean>(true)

    return { loading }
  }
})
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Sriracha&display=swap')
.bubbler-title
  font-size: 30px
  font-family: 'Sriracha', cursive
</style>
