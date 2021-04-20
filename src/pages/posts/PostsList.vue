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
        <q-input v-model="searchText" label="Procurar" class="page-posts-list__search col" />
        <q-btn flat color="primary" icon="filter_list" label="Filtrar">
          <q-menu>
            <q-list class="page-post-list__filter-options">
              <q-item>
                <q-item-section>
                  <q-select v-model="selectedValues.selectedAuthor" :options="authorsOptions" label="Autor" />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-select v-model="selectedValues.selectedCategory" :options="categoryOptions" label="Categoria" />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-select v-model="selectedValues.selectedDate" :options="dataOptions" label="Data" />
                  <q-input filled v-model="selectedValues.calendarDate" mask="date" :rules="['date']" class="q-mt-md">
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                          <q-date v-model="selectedValues.calendarDate">
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
                  <q-btn color="primary" flat label="Limpar" @click="clearFilters" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>
    </div>
    <div class="row q-col-gutter-md full-width q-my-lg">
      <div v-for="(post, id) in postsList" :key="id" class="col-sm-3 col-12 page-posts-list__card">
        <card-post :content="post" @click="acessPost(id)">
          <template v-slot:actions>
            <q-btn class="page-posts-list__edit-button absolute" flat icon="edit">
              <q-menu>
                <q-list>
                  <q-item>
                    <q-item-section>
                      <q-btn flat :to="{ name: 'PostsEdit', params: { id } }">Editar</q-btn>
                      <q-btn flat text-color="negative" @click="confirmDelete">Excluir</q-btn>
                      <q-dialog v-model="confirmDeleteData" persistent>
                        <q-card>
                          <q-card-section class="row items-center">
                            <span class="q-ml-sm">Quer realmente excluir o post?</span>
                          </q-card-section>

                          <q-card-actions align="center">
                            <q-btn flat label="Cancelar" color="primary" v-close-popup />
                            <q-btn label="Confirmar" color="primary" v-close-popup @click="deletePost(id)" />
                          </q-card-actions>
                        </q-card>
                      </q-dialog>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </template>
        </card-post>
      </div>
    </div>

    <div v-if="hasPagination" class="q-pa-lg flex flex-center">
      <q-pagination v-model="currentPage" :max="5" direction-links boundary-links icon-first="skip_previous"
      icon-last="skip_next" icon-prev="fast_rewind" icon-next="fast_forward" />
    </div>

    <div v-else-if="!postsList.length" class="flex flex-center q-pt-xl">
      Até o momento nenhuma postagem foi adicionada
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CardPost from 'src/components/CardPost.vue'

export default {
  components: {
    CardPost
  },

  data () {
    return {
      currentPage: '1',
      searchText: '',
      dataOptions: ['Mais recentes', 'Mais antigos'],
      categoryOptions: [
        'Esportes',
        'Tecnologia',
        'Culinária', 'Mercado Financeiro',
        'Animais',
        'Brasil',
        'Exterior',
        'Outros'
      ],

      selectedValues: {
        selectedAuthor: '',
        selectedCategory: '',
        selectedDate: '',
        calendarDate: ''
      },

      confirmDeleteData: false
    }
  },

  methods: {
    ...mapActions({
      removePost: 'posts/removePost',
      fetchPosts: 'posts/fetchPosts'
    }),

    confirmDelete () {
      this.confirmDeleteData = true
    },

    deletePost (id) {
      this.removePost(id)
      this.$q.notify({
        message: 'Post excluido com sucesso!',
        type: 'positive'
      })
    },

    acessPost (id) {
      this.$router.push({ name: 'PostsSingle', params: { id } })
    },

    clearFilters () {
      for (const objKey in this.selectedValues) {
        this.selectedValues[objKey] = ''
      }
    }
  },

  computed: {
    ...mapGetters({
      postsList: 'posts/postsList',
      authorsList: 'authors/authorsList'
    }),

    authorsOptions () {
      return this.authorsList.map(author => author.name)
    },

    hasPagination () {
      return this.postsList.length > 8
    }
  },

  created () {
    this.fetchPosts()
  }
}
</script>

<style lang="scss">
  .page-posts-list {
    &__card:nth-child(4n+1) {
      padding-left: 0;
    }

    &__edit-button {
      bottom: 10px;
      right: 10px;
    }
  }
</style>
