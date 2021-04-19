<template>
  <div class="card-post full-width relative-position">
    <div class="cursor-pointer" v-on="$listeners">
      <div class="card-post__image-container relative-position">
        <img class="card-post__image" :src="content.mainImageURL" :alt="content.title">
        <p class="card-post__category absolute-top-right">{{ content.category }}</p>
      </div>

      <div>
        <h1 class="card-post__post-title ellipsis">{{ content.title }}</h1>
        <p class="card-post__short-description ellipsis-3-lines">{{ content.shortDescription }}</p>
      </div>

      <div class="card-post__author">
        <p class="q-mb-none">Feito por <span class="text-primary">{{ content.authorName }}</span></p>
        <p class="q-mb-none">Data de postagem: <span class="text-primary">{{ content.postDate }}</span></p>
      </div>
    </div>
    <slot name="actions" />
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss">
  .card-post {
    min-height: 300px;
    background-color: white;
    border-radius: 30px;

    &:hover {
      background-color: #f3f3f3
    }

    &__image-container {
      height: 50%;
    }

    &__image {
      border-top-left-radius: 30px;
      border-top-right-radius: 30px;
      width: 100%;
      height: 150px;
    }

    &__category {
      top: 25px;
      background-color: $primary;
      color: white;
      padding: 3px 10px;
      border-radius: 10px 0 0 10px
    }

    &__post-title {
      font-size: 28px;
      margin: 0 10px;
      line-height: 36px;
    }

    &__short-description {
      margin: 0 10px;
      font-size: 12px;
    }

    &__author {
      position: absolute;
      bottom: 10px;
      left: 10px;
      font-size: 10px;
    }
  }
</style>
