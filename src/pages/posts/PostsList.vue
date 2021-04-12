<template>
  <q-page class="bg-grey-2 q-pa-lg page-posts-list">
    <div>
      <div class="flex justify-between">
        <div>
          <p class="text-h5 q-mb-xs">Postagens</p>
          <div>
            <q-breadcrumbs>
              <q-breadcrumbs-el label="Home" />
              <q-breadcrumbs-el label="Postagens" />
            </q-breadcrumbs>
          </div>
        </div>
        <q-btn icon="add" unelevated rounded color="primary" label="Adicionar post" :to="{ name: 'PostsCreate' }" />
      </div>

      <div class="flex q-my-lg justify-between">
        <q-input v-model="text" label="Procurar" class="page-posts-list__search col" />
        <q-btn flat  color="primary" icon="filter_list" label="Filtrar">
          <q-menu>
            <q-list class="page-post-list__filter-options">
              <q-item>
                <q-item-section>
                  <q-select v-model="author" :options='authorOptions' label="Autor" />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-select v-model="category" :options='categoryOptions' label="Categoria" />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-select v-model="data" :options='dataOptions' label="Data" />
                  <q-input filled v-model="date" mask="date" :rules="['date']" class="q-mt-md">
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                            <q-date v-model="date">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                   </q-input>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-btn color="primary" label="Filtrar" />
                  <q-btn color="primary" flat label="Limpar" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>
    </div>
    <div class="row q-col-gutter-md full-width q-my-lg">
      <div v-for="(post, index) in postsList" :key="index" class="col-sm-3 col-12 page-post-list__card">
        <card-post :urlMainImage="post.urlMainImage" :category="post.category" :title="post.title" :shortDescription="post.shortDescription" :authorName="post.authorName" :postDate="post.postDate" :index="index" />
      </div>
    </div>

    <div v-if="postsList.length > 8" class="q-pa-lg flex flex-center">
      <q-pagination v-model="current" :max="5" direction-links boundary-links icon-first="skip_previous"
      icon-last="skip_next" icon-prev="fast_rewind" icon-next="fast_forward" />
    </div>

    <div v-else-if="postsList.length < 1" class="flex flex-center q-pt-xl">
      Até o momento nenhuma postagem foi adicionada
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import CardPost from 'src/components/CardPost.vue'

export default {
  components: {
    CardPost
  },

  data () {
    return {
      card: {
        postDate: ''
      },

      current: '1',
      text: '',
      model: '',
      categoryOptions: ['Categoria 1', 'Categoria 2'],
      authorOptions: ['Autor 1', 'Autor 2', 'Autor 3'],
      dataOptions: ['Mais recentes', 'Mais antigos'],
      author: '',
      category: '',
      data: '',
      date: '2019/02/01'
    }
  },

  computed: {
    ...mapGetters({
      postsList: 'posts/postsList'
    })
  }
}
</script>

<style lang="scss">
  .page-post-list{
    &__card:nth-child(4n+1){
      padding-left: 0;
    }
  }
</style>
