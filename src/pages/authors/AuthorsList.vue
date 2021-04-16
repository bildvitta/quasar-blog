<template>
    <q-page class="bg-grey-2 q-pa-lg page-authors-list">
      <div class="flex justify-between">
        <div>
          <p class="text-h5 q-mb-xs">Autores</p>
          <div>
            <q-breadcrumbs>
              <q-breadcrumbs-el label="Home" />
              <q-breadcrumbs-el label="Autores" />
            </q-breadcrumbs>
          </div>
        </div>
        <q-btn icon="add" unelevated rounded color="primary" label="Adicionar autor" :to="{ name: 'AuthorsCreate' }" />
      </div>
      <div class="flex q-my-lg justify-between">
        <q-input v-model="text" label="Procurar" class="page-posts-list__search col" />
      </div>
      <div class="full-width">
        <q-list v-if="authorsList.length" bordered class="rounded-borders q-mb-xs">
          <div class="flex row q-px-md q-py-sm bg-primary text-white">
            <div class="q-mb-none col">Nome</div>
            <div class="q-mb-none col">E-mail</div>
            <div></div>
          </div>
          <q-item clickable v-ripple v-for="(author, id) in authorsList" :key="id" class="flex row items-center" >
            <p class="q-mb-none col">{{ author.name }}</p>
            <p class="q-mb-none col">{{ author.email }}</p>
            <q-btn flat icon="more_vert">
              <q-menu>
                <q-list class="page-authors-list">
                  <q-item>
                    <q-item-section>
                      <q-btn flat :to="{ name: 'AuthorsEdit', params: { id } }">Editar</q-btn>
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>
                      <q-btn flat color="negative" @click="confirmDelete">Excluir</q-btn>
                      <q-dialog v-model="confirmDeleteData" persistent>
                        <q-card>
                          <q-card-section class="row items-center">
                            <span class="q-ml-sm">Quer realmente excluir o autor?</span>
                          </q-card-section>

                          <q-card-actions align="center">
                            <q-btn flat label="Cancelar" color="primary" v-close-popup />
                            <q-btn label="Confirmar" color="primary" v-close-popup @click="deleteAuthor(id)" />
                          </q-card-actions>
                        </q-card>
                      </q-dialog>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </q-item>
        </q-list>

        <div v-else class="flex flex-center q-pt-xl">
          Nenhum autor criado até o momento
        </div>
      </div>

    </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      text: '',
      confirmDeleteData: false
    }
  },

  computed: {
    ...mapGetters({
      authorsList: 'authors/authorsList'
    })
  },

  methods: {
    ...mapActions({
      removeAuthor: 'authors/removeAuthor'
    }),

    deleteAuthor (id) {
      this.removeAuthor(id)
      this.$q.notify({
        message: 'Autor excluido com sucesso!',
        type: 'positive'
      })
    },

    confirmDelete () {
      this.confirmDeleteData = true
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-authors-list{
    &__author-options{
      min-width: 150px;
    }
  }
</style>
