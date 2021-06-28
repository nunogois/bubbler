<template>
  <q-page class="row items-center justify-evenly">
    <div v-if="previews.length === 0">No chats found.</div>
    <q-list separator v-else>
      <q-item v-for="preview in previews" :key="preview.id">
        {{ preview }}
      </q-item>
    </q-list>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { Message } from 'src/components/models'

import db from '../boot/firebase'

export default defineComponent({
  setup() {
    const previews = ref<Message[]>([])

    db.collection('messages')
      .orderBy('date')
      .limit(1)
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          const data = change.doc.data() as Message
          if (change.type === 'added') {
            console.log(data)
            previews.value.unshift(data)
          }
          if (change.type === 'modified') {
            console.log(data)
            let index = previews.value.findIndex(msg => msg.id === msg.id)
            Object.assign(previews.value[index], data)
          }
          if (change.type === 'removed') {
            let index = previews.value.findIndex(msg => msg.id === msg.id)
            previews.value.splice(index, 1)
          }
        })
      })

    return { previews }
  },
})
</script>
