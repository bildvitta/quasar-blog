<template>
    <q-page class="bg-grey-2 q-pa-lg">
      <div>
        <p class="text-h5 q-mb-xs">{{ definitionOfPageName }}</p>
        <q-breadcrumbs>
          <q-breadcrumbs-el label="Home" />
          <q-breadcrumbs-el label="Postagens" />
          <q-breadcrumbs-el>{{ definitionOfPageName }}</q-breadcrumbs-el>
        </q-breadcrumbs>
      </div>

      <div class="q-my-lg">
        <q-input class="q-mb-md" outlined v-model="values.mainImageURL" label="Insira o link da imagem principal*"
        :rules="[validateRequiredFields]" />
        <q-input class="q-mb-md" outlined v-model="values.title" label="Informe o título*"
        :rules="[validateRequiredFields]" />
        <q-input class="q-mb-md" outlined v-model="values.shortDescription" label="Informe uma pequena descrição*"
        :rules="[validateRequiredFields]" />

        <div class="flex items-center q-mb-lg">
          <q-select class="col q-mr-sm" outlined v-model="values.authorName" :options="authorsOptions"
          label="Escolha o autor*" :rules="[validateRequiredFields]" />
          <q-select class="col q-ml-sm" outlined v-model="values.category" :options="values.categoryOptions"
          label="Informe a categoria da postagem*" :rules="[validateRequiredFields]" />
        </div>

        <q-editor class="q-my-lg bg-grey-2" v-model="values.mainText" />

        <div class="q-my-lg flex">
          <q-btn :disable="validateForm" color="primary" @click="actionChoose">{{ buttonNameToSave }}</q-btn>
          <modal-cancel hasPagination="PostsList" />
        </div>
      </div>
    </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { validateRequiredFields, formatDateTime } from 'helpers'
import { extend } from 'quasar'
import modalCancel from 'src/components/modalCancel'

export default {
  components: {
    modalCancel
  },

  data () {
    return {
      values: {
        mainImageURL: '',
        title: '',
        shortDescription: '',
        authorName: '',
        category: '',
        mainText: '',
        categoryOptions: [
          'Esportes',
          'Tecnologia',
          'Culinária',
          'Mercado Financeiro',
          'Animais',
          'Brasil',
          'Exterior',
          'Outros'
        ]
      },
      confirmDeleteData: false
    }
  },

  methods: {
    ...mapActions({
      removePost: 'posts/removePost',
      editPost: 'posts/editPost',
      setPost: 'posts/setPost'
    }),

    validateRequiredFields,

    formatDateTime,

    addPostToList () {
      this.values.postDate = formatDateTime()

      this.setPost(this.values)

      this.$q.notify({
        message: 'Post criado com sucesso!',
        type: 'positive'
      })

      this.$router.push({ name: 'PostsList' })
    },

    editPostList () {
      this.values.editDate = formatDateTime()
      const post = {
        values: this.values,
        index: this.$route.params.id
      }

      this.editPost(post)

      this.$q.notify({
        message: 'Post alterado com sucesso!',
        type: 'positive'
      })

      this.$router.push({ name: 'PostsList' })
    },

    actionChoose () {
      this.isCreate ? this.addPostToList() : this.editPostList()
    },

    deletePost () {
      this.removePost(this.postId)

      this.$q.notify({
        message: 'Post excluido com sucesso!',
        type: 'positive'
      })

      this.$router.push({ name: 'PostsList' })
    },

    setInputValues () {
      this.values = extend(true, {}, this.posts[this.postId])
    }
  },

  computed: {
    ...mapGetters({
      posts: 'posts/postsList',
      authorsList: 'authors/authorsList'
    }),

    definitionOfPageName () {
      return this.isCreate ? 'Criar Postagem' : 'Editar postagem'
    },

    buttonNameToSave () {
      return this.isCreate ? 'Criar' : 'Editar'
    },

    authorsOptions () {
      return this.authorsList.map(author => author.name)
    },

    isCreate () {
      return this.$route.name === 'PostsCreate'
    },

    postId () {
      return this.$route.params.id
    },

    validateForm () {
      for (const key in this.values) {
        if (this.validateRequiredFields(this.values[key])) {
          return true
        }
      }

      return false
    }
  },

  created () {
    if (!this.isCreate) {
      this.setInputValues()
    }
  }
}
</script>
