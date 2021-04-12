<template>
  <div class="card-post full-width relative-position">
    <div class="card-post__image">
      <img :src="urlMainImage" :alt="title" >
      <p><span class="card-post__category">{{ category }}</span></p>
    </div>

    <div>
      <h1 class="ellipsis">{{ title }}</h1>
      <p class="ellipsis-3-lines">{{ shortDescription }}.</p>
    </div>

    <div class="card-post__author">
      <div>
        <p><span>{{ authorName }}</span></p>
        <p>Data de postagem: <span>{{ postDate }}</span></p>
      </div>
    </div>

    <q-btn class="card-post__edit" flat icon="edit">
        <q-menu>
          <q-list class="page-authors-list">
            <q-item>
              <q-item-section>
                <q-btn flat :to="{ name: 'PostsEdit', params: { id: index } }">Editar</q-btn>
                <q-btn flat text-color="negative" @click="confirmDelete">Excluir</q-btn>
                <q-dialog v-model="confirmDeleteData" persistent>
                  <q-card>
                    <q-card-section class="row items-center">
                      <span class="q-ml-sm">Quer realmente excluir o post?</span>
                    </q-card-section>

                    <q-card-actions align="center">
                      <q-btn flat label="Cancelar" color="primary" v-close-popup />
                      <q-btn label="Confirmar" color="primary" v-close-popup @click="deletePost(index)" />
                    </q-card-actions>
                  </q-card>
                </q-dialog>
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['urlMainImage', 'category', 'title', 'shortDescription', 'authorName', 'postDate', 'index'],

  data () {
    return {
      confirmDeleteData: false
    }
  },

  methods: {
    ...mapActions({
      removePost: 'posts/removePost'
    }),

    confirmDelete () {
      this.confirmDeleteData = true
    },

    deletePost (index) {
      this.removePost(index)
      this.$q.notify({
        message: 'Post excluido com sucesso!',
        type: 'positive'
      })
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

    &__edit{
      position: absolute;
      bottom: 10px;
      right: 10px;
    }
  }
</style>
