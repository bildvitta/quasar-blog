<template>
    <q-page class="bg-grey-2 q-pa-lg">
      <div class="flex justify-between">
        <div>
          <p class="text-h5 q-mb-xs">Editar Postagem</p>
          <q-breadcrumbs>
            <q-breadcrumbs-el label="Home" />
            <q-breadcrumbs-el label="Postagens" />
            <q-breadcrumbs-el label="Editar postagem" />
          </q-breadcrumbs>
        </div>
        <q-btn icon="delete" label="Deletar post" flat color="negative" @click="confirmDelete" />
        <q-dialog v-model="confirmDeleteData" persistent>
          <q-card>
            <q-card-section class="row items-center">
              <span class="q-ml-sm">Quer realmente excluir o post?</span>
            </q-card-section>

            <q-card-actions align="center">
              <q-btn flat label="Cancelar" color="primary" v-close-popup />
              <q-btn label="Confirmar" color="primary" v-close-popup @click="deletePost" />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>

      <div class="q-my-lg">
        <q-input class="q-mb-md" outlined v-model="urlMainImage" label="Insira o link da imagem principal*"
        :rules="[ validateRequiredFields ]" />
        <q-input class="q-mb-md" outlined v-model="title" label="Informe o título*" :rules="[ validateRequiredFields ]" />
        <q-input class="q-mb-md" outlined v-model="shortDescription" label="Informe uma pequena descrição*"
        :rules="[ validateRequiredFields ]" />

        <div class="flex items-center q-mb-lg">
          <q-select class="col q-mr-sm" outlined v-model="selectedAuthor" :options="authorsOptions"
          label="Escolha o autor*" :rules="[ validateRequiredFields ]" />
          <q-select class="col q-ml-sm" outlined v-model="selectedCategory" :options="categoryOptions"
          label="Informe a categoria da postagem*" :rules="[ validateRequiredFields ]" />
        </div>

        <q-editor class="q-my-lg bg-grey-2" v-model="mainText" :definitions="{ bold: {label: 'Bold', icon: null} }"/>
        <div class="q-my-lg">
          <q-btn :disable="validateForm" color="primary" label="Editar" @click="editPostList" />
          <q-btn color="primary" flat label="Cancelar" @click="confirmCancel" />
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
      </div>
    </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { validateRequiredFields, formatDateTime } from 'helpers'

export default {
  data () {
    return {
      urlMainImage: '',
      title: '',
      shortDescription: '',
      selectedAuthor: '',
      selectedCategory: '',
      categoryOptions: [
        'Esportes',
        'Tecnologia',
        'Culinária', 'Mercado Financeiro',
        'Animais',
        'Brasil',
        'Exterior',
        'Outros'],
      postDate: '',
      editDate: '',
      mainText: '',
      confirmCancelData: false,
      confirmDeleteData: false
    }
  },

  methods: {
    ...mapActions({
      removePost: 'posts/removePost',
      editPost: 'posts/editPost'
    }),

    validateRequiredFields,

    formatDateTime,

    editPostList () {
      this.editDate = formatDateTime(new Date())
      const post = {
        values: {
          urlMainImage: this.urlMainImage,
          title: this.title,
          shortDescription: this.shortDescription,
          authorName: this.selectedAuthor,
          category: this.selectedCategory,
          postDate: this.postDate,
          editDate: this.editDate,
          mainText: this.mainText
        },
        index: this.$route.params.id
      }
      this.editPost(post)
      this.$q.notify({
        message: 'Post alterado com sucesso!',
        type: 'positive'
      })
      this.$router.push({ name: 'PostsList' })
    },

    confirmCancel () {
      this.confirmCancelData = true
    },

    confirmDelete () {
      this.confirmDeleteData = true
    },

    deletePost () {
      this.removePost(this.idPost)
      this.$q.notify({
        message: 'Post excluido com sucesso!',
        type: 'positive'
      })
      this.$router.push({ name: 'PostsList' })
    },

    loadInputValues () {
      this.urlMainImage = this.posts[this.idPost].urlMainImage
      this.title = this.posts[this.idPost].title
      this.shortDescription = this.posts[this.idPost].shortDescription
      this.selectedAuthor = this.posts[this.idPost].authorName
      this.selectedCategory = this.posts[this.idPost].category
      this.postDate = this.posts[this.idPost].postDate
      this.mainText = this.posts[this.idPost].mainText
    }
  },

  computed: {
    ...mapGetters({
      posts: 'posts/postsList'
    }),

    ...mapGetters({
      authorsList: 'authors/authorsList'
    }),

    validateForm () {
      return !!(this.validateRequiredFields(this.urlMainImage) || (this.validateRequiredFields(this.title)) ||
      (this.validateRequiredFields(this.shortDescription)) || (this.validateRequiredFields(this.selectedAuthor)) ||
      (this.validateRequiredFields(this.selectedCategory)))
    },

    idPost () {
      return this.$route.params.id
    },

    authorsOptions () {
      return this.authorsList.map(author => author.name)
    }
  },

  created () {
    this.loadInputValues()
  }
}
</script>
