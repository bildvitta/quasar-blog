<template>
    <q-page class="bg-grey-2 q-pa-lg">

      <div class="flex justify-between">
        <div>
          <p class="text-h5 q-mb-xs">Criar Postagem</p>
          <div>
            <q-breadcrumbs>
              <q-breadcrumbs-el label="Home" />
              <q-breadcrumbs-el label="Postagens" />
              <q-breadcrumbs-el label="Criar postagem" />
            </q-breadcrumbs>
          </div>
        </div>
      </div>
      <div class="q-my-lg relative-position">
        <q-input class="q-mb-md" outlined v-model="urlMainImage" label="Insira o link da imagem principal*" :rules="[ validateRequiredFields ]" />
        <q-input class="q-mb-md" outlined v-model="title" label="Informe o título*" :rules="[ validateRequiredFields ]" />
        <q-input class="q-mb-md" outlined v-model="shortDescription" label="Informe uma pequena descrição*" :rules="[ validateRequiredFields ]" />

        <div class="flex items-center q-mb-lg">
          <q-select class="col q-mr-sm" outlined v-model="selectedAuthor" :options="optionsAuthors" label="Escolha o autor*" :rules="[ validateRequiredFields ]" />
          <q-select class="col q-ml-sm" outlined v-model="selectedCategory" :options="optionsCategory" label="Informe a categoria da postagem*" :rules="[ validateRequiredFields ]" />
        </div>

        <q-editor class="q-my-lg bg-grey-2" v-model="mainText" :definitions="{ bold: {label: 'Bold', icon: null} }"/>
        <div class="q-my-lg">
          <q-btn :disable="validateForm" color="primary" label="Criar" @click="addPostToList" />
          <q-btn color="primary" flat label="Cancelar" @click="confirmCancel" />
        </div>

        <q-dialog v-model="confirmCancelData" persistent>
            <q-card>
              <q-card-section class="row items-center">
                <span class="q-ml-sm">Deseja mesmo cancelar?</span>
              </q-card-section>
              <q-card-actions align="center">
                <q-btn flat label="Cancelar" color="primary" v-close-popup />
                <q-btn label="Confirmar" color="primary" v-close-popup :to="{ name: 'PostsList' }" />
              </q-card-actions>
            </q-card>
        </q-dialog>
      </div>

    </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { validateRequiredFields } from 'helpers'

export default {
  data () {
    return {
      urlMainImage: '',
      title: '',
      shortDescription: '',
      selectedAuthor: '',
      optionsAuthors: ['Autor 1', 'Autor 2', 'Autor 3'],
      selectedCategory: '',
      optionsCategory: ['Esportes', 'Tecnologia', 'Culinária', 'Mercado Financeiro', 'Animais', 'Brasil', 'Exterior', 'Outros'],
      postDate: '',
      mainText: '',

      confirmCancelData: false
    }
  },

  methods: {
    ...mapActions({
      addPost: 'posts/addPost'
    }),

    validateRequiredFields,

    addPostToList () {
      const day = new Date()
      this.postDate = day.getDate() + '/' + (day.getMonth() + 1) + '/' + day.getFullYear()
      this.addPost({ urlMainImage: this.urlMainImage, category: this.selectedCategory, title: this.title, shortDescription: this.shortDescription, authorName: this.selectedAuthor, postDate: this.postDate })

      this.$q.notify({
        message: 'Post criado com sucesso!',
        type: 'positive'
      })
      this.$router.push({ name: 'PostsList' })
    },

    confirmCancel () {
      this.confirmCancelData = true
    }
  },

  computed: {
    ...mapGetters({
      authorsList: 'authors/authorsList'
    }),

    validateForm () {
      return !!(this.validateRequiredFields(this.urlMainImage) || (this.validateRequiredFields(this.title)) ||
      (this.validateRequiredFields(this.shortDescription)) || (this.validateRequiredFields(this.selectedAuthor)) ||
      (this.validateRequiredFields(this.selectedCategory)))
    }
  }
}
</script>
