<template>
    <q-page class="bg-grey-2 q-pa-lg">
      <div>
        <p class="text-h5 q-mb-xs">Criar Postagem</p>
        <q-breadcrumbs>
          <q-breadcrumbs-el label="Home" />
          <q-breadcrumbs-el label="Postagens" />
          <q-breadcrumbs-el label="Criar postagem" />
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
          <q-btn :disable="validateForm" color="primary" label="Criar" @click="addPostToList" />
          <modal-cancel pageToAccess="PostsList" />
        </div>
      </div>
    </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { validateRequiredFields, formatDateTime } from 'helpers'
import modalCancel from 'src/components/modalCancel.vue'

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
        categoryOptions: [
          'Esportes',
          'Tecnologia',
          'Culinária',
          'Mercado Financeiro',
          'Animais',
          'Brasil',
          'Exterior',
          'Outros'
        ],
        postDate: '',
        mainText: ''
      }
    }
  },

  methods: {
    ...mapActions({
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
    }
  },

  computed: {
    ...mapGetters({
      authorsList: 'authors/authorsList'
    }),

    authorsOptions () {
      return this.authorsList.map(author => author.name)
    },

    validateForm () {
      return !!(this.validateRequiredFields(this.values.mainImageURL) || (this.validateRequiredFields(this.values.title)) ||
      (this.validateRequiredFields(this.values.shortDescription)) || (this.validateRequiredFields(this.values.authorName)) ||
      (this.validateRequiredFields(this.values.category)) || (this.validateRequiredFields(this.values.mainText)))
    }
  }
}
</script>
