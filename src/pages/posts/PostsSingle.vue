<template>
  <q-page class="bg-grey-2 q-pa-lg page-posts-preview">
    <div>
      <div class="text-h2 text-primary">{{ title }}</div>
      <div class="text-subtitle1 q-my-sm text-grey-8">{{ shortDescription }}</div>
      <div class="text-caption">
        <p class="q-ma-none">Realizado por <span class="text-primary">{{ selectedAuthor }}</span></p>
        <p class="q-mb-none">Criado em {{ postDate }} | Editado em {{ editDate }}</p>
      </div>
    </div>

    <div class="relative-position page-posts-preview__category">
      <p class="q-ma-none absolute-right bg-primary text-white q-px-md">{{ selectedCategory }}</p>
    </div>

    <q-separator color="primary" size="3px" />

    <div class="q-my-md text-justify">
      <img class="full-width" :src="urlMainImage" :alt="title">
      <br>
      <div v-html="mainText"></div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      urlMainImage: '',
      title: '',
      shortDescription: '',
      selectedAuthor: '',
      selectedCategory: '',
      postDate: '',
      mainText: '',
      editDate: ''
    }
  },

  methods: {
    loadValues () {
      this.urlMainImage = this.posts[this.idPost].urlMainImage
      this.title = this.posts[this.idPost].title
      this.shortDescription = this.posts[this.idPost].shortDescription
      this.selectedAuthor = this.posts[this.idPost].authorName
      this.selectedCategory = this.posts[this.idPost].category
      this.postDate = this.posts[this.idPost].postDate
      this.mainText = this.posts[this.idPost].mainText
      this.editDate = this.posts[this.idPost].editDate
    }
  },

  computed: {
    ...mapGetters({
      posts: 'posts/postsList'
    }),

    idPost () {
      return this.$route.params.id
    }
  },

  created () {
    this.loadValues()
  }
}
</script>

<style lang="scss" scoped>
  .page-posts-preview{
    &__category{
      height: 20px
    }
  }
</style>
