<template>
  <div class="card-post full-width relative-position">
    <div class="card-post__click" v-on="$listeners">
      <div class="card-post__image">
        <img :src="content.urlMainImage" :alt="content.title" >
        <p><span class="card-post__category">{{ content.category }}</span></p>
      </div>

      <div>
        <h1 class="ellipsis">{{ content.title }}</h1>
        <p class="ellipsis-3-lines">{{ content.shortDescription }}.</p>
      </div>

      <div class="card-post__author">
        <p>Feito por <span>{{ content.authorName }}</span></p>
        <p>Data de postagem: <span>{{ content.postDate }}</span></p>
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
  .card-post{
    min-height: 300px;
    background-color: white;
    position: relative;
    border-radius: 30px;

    &:hover{
      background-color: rgb(243, 243, 243);
    }

   &__click{
      cursor: pointer;
   }

    &__category{
      position: absolute;
      top: 25px;
      right: 0;
      background-color: $primary;
      color: white;
      padding: 3px 10px;
      border-radius: 10px 0 0 10px
    }

    &__image{
      height: 50%;
    }

    & img{
      border-top-left-radius: 30px;
      border-top-right-radius: 30px;
      width: 100%;
      height: 150px;
    }

    & h1{
        font-size: 28px;
        margin: 0 10px;
        line-height: 36px;
      }

    & p{
      margin: 0 10px;
      font-size: 12px;
    }

    &__author{
      position: absolute;
      bottom: 10px;
      left: 10px;

      & p{
        font-size: 10px;

        & span{
          color: $primary;
        }
      }
    }
  }
</style>
