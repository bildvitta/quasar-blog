<template>
    <q-page class="bg-grey-2 q-pa-lg">
      <div class="flex justify-between">
        <div>
          <p class="text-h5 q-mb-xs">{{ pageTitle}}</p>
          <div>
            <q-breadcrumbs>
              <q-breadcrumbs-el label="Home" />
              <q-breadcrumbs-el label="Autores" />
              <q-breadcrumbs-el>{{ pageTitle }}</q-breadcrumbs-el>
            </q-breadcrumbs>
          </div>
        </div>
      </div>
      <div class="q-my-lg relative-position">
        <q-input outlined v-model="name" label="Nome do autor" class="q-my-md" :rules="[ validateRequiredFields ]" />
        <q-input outlined v-model="email" label="E-mail" :rules="[ validateEmailFields ]" />
        <div class="q-my-lg flex">
          <q-btn :disable="validateForm" color="primary" @click="actionChoose">{{ submitButtonLabel }}</q-btn>
          <modal-cancel hasPagination="AuthorsList" />
        </div>
      </div>
    </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { validateRequiredFields, validateEmailFields } from 'helpers'
import modalCancel from 'src/components/modalCancel.vue'

export default {
  components: {
    modalCancel
  },

  data () {
    return {
      name: '',
      email: ''
    }
  },

  methods: {
    ...mapActions({
      editAuthor: 'authors/editAuthor',
      addAuthors: 'authors/addAuthors'
    }),

    validateRequiredFields,

    validateEmailFields,

    editAuthorInformation () {
      const author = {
        values: {
          name: this.name,
          email: this.email
        },
        index: this.$route.params.id
      }
      this.editAuthor(author)

      this.$q.notify({
        message: 'Autor editado com sucesso!',
        type: 'positive'
      })
      this.$router.push({ name: 'AuthorsList' })
    },

    setInputValues () {
      this.name = this.authors[this.authorId].name
      this.email = this.authors[this.authorId].email
    },

    addAuthorToList () {
      this.addAuthors({ name: this.name, email: this.email })

      this.$q.notify({
        message: 'Autor criado com sucesso!',
        type: 'positive'
      })
      this.$router.push({ name: 'AuthorsList' })
    },

    actionChoose () {
      return this.isCreate ? this.addAuthorToList() : this.editAuthorInformation()
    }
  },

  computed: {
    ...mapGetters({
      authors: 'authors/authorsList'
    }),

    authorId () {
      return this.$route.params.id
    },

    isCreate () {
      return this.$route.name === 'AuthorsCreate'
    },

    pageTitle () {
      return this.isCreate ? 'Criar autor' : 'Editar autor'
    },

    submitButtonLabel () {
      return this.isCreate ? 'Criar' : 'Editar'
    },

    validateForm () {
      return !!(this.validateRequiredFields(this.name) || this.validateEmailFields(this.email))
    }
  },

  created () {
    if (!this.isCreate) {
      this.setInputValues()
    }
  }
}
</script>
