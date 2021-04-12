<template>
  <q-page class="bg-grey-2 q-pa-lg page-posts-preview">
    <div>
      <div class="text-h2 text-primary">{{ this.posts[0].title }}</div>
      <div class="text-subtitle1 q-my-sm text-grey-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</div>
      <div class="text-caption">
        <p class="q-ma-none">Realizado por <span class="text-primary">Luis Felipe Juzo</span></p>
        <p class="q-mb-none">Criado em 17/07/2020 às 18:20 | Editado em 19/08/2020 às 18:40</p>
      </div>
    </div>

      <div class=" relative-position page-posts-preview__category">
        <p class="q-ma-none absolute-right bg-primary text-white q-px-md">Category</p>
      </div>

     <q-separator color="primary" size="3px" />

    <div class="q-my-md text-justify">
      <img class="full-width" src="https://fw.atarde.uol.com.br/2021/04/750_neymar-twitter-penaltis-diego-alves-supercopa-futebol_2021411165136583.jpg" alt="neymar">
      <p class="col">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam</p>
      <p class="col">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam</p>
    </div>

  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  computed: {
    ...mapGetters({
      posts: 'posts/postsList'
    })
  },

  created () {
    console.log(this.posts[0].title)
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
