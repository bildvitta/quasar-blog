<template>
  <q-page class="bg-grey-2 q-pa-lg page-posts">
    <div>
      <div class="text-h2 text-primary">{{ values.title }}</div>
      <div class="text-subtitle1 q-my-sm text-grey-8">{{ values.shortDescription }}</div>
      <div class="text-caption">
        <p class="q-ma-none">Realizado por <span class="text-primary">{{ values.authorName }}</span></p>
        <p class="q-mb-none">Criado em {{ values.postDate }} | Editado em {{ values.editDate }}</p>
      </div>
    </div>

    <div class="relative-position page-posts__category">
      <p class="q-ma-none absolute-right bg-primary text-white q-px-md">{{ values.category }}</p>
    </div>

    <q-separator color="primary" size="3px" />

    <div class="q-my-md text-justify">
      <img class="full-width" :src="values.mainImageURL" :alt="values.title">
      <br>
      <div v-html="values.mainText"></div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      values: {
        mainImageURL: '',
        title: '',
        shortDescription: '',
        authorName: '',
        category: '',
        categoryOptions: ['Esportes', 'Tecnologia', 'Culinária', 'Mercado Financeiro', 'Animais', 'Brasil', 'Exterior', 'Outros'],
        postDate: '',
        editDate: '',
        mainText: ''
      }
    }
  },

  methods: {
    setValues () {
      this.values = this.posts[this.postId]
    }
  },

  computed: {
    ...mapGetters({
      posts: 'posts/postsList'
    }),

    postId () {
      return this.$route.params.id
    }
  },

  created () {
    this.setValues()
  }
}
</script>

<style lang="scss" scoped>
  .page-posts {
    &__category {
      height: 20px
    }
  }
</style>
