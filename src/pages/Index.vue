<template>
  <q-page class="flex flex-center bg-grey-2">
     <card-post />
     <card-post />
     <card-post />

  </q-page>

</template>

<script>
import CardPost from 'components/CardPost.vue'
export default {
  components: {
    CardPost
  }
}
</script>
