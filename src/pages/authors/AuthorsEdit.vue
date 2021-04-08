<template>
    <q-page class="bg-grey-2 q-pa-lg">
      <div class="flex justify-between">
        <div>
          <p class="text-h5 q-mb-xs">Editar Autor</p>
          <div>
            <q-breadcrumbs>
              <q-breadcrumbs-el label="Home" />
              <q-breadcrumbs-el label="Autores" />
              <q-breadcrumbs-el label="Editar autor" />
            </q-breadcrumbs>
          </div>
        </div>
      </div>
      <div class="q-my-lg relative-position">
        <q-input outlined v-model="name" label="Nome do autor" class="q-my-md" :rules="[ validateRequiredFields ]" />
        <q-input outlined v-model="email" label="E-mail" :rules="[ validateEmailFields ]" />
        <div class="q-my-lg">
          <q-btn :disable="validateForm" color="primary" label="Editar" @click="editListAuthor" />
          <q-btn color="primary" flat label="Cancelar" @click="confirmCancel" />
        </div>
      </div>
      <q-dialog v-model="confirmCancelData" persistent>
            <q-card>
              <q-card-section class="row items-center">
                <span class="q-ml-sm">Deseja mesmo cancelar?</span>
              </q-card-section>
              <q-card-actions align="center">
                <q-btn flat label="Cancelar" color="primary" v-close-popup />
                <q-btn label="Confirmar" color="primary" v-close-popup :to="{ name: 'AuthorsList' }" />
            </q-card-actions>
          </q-card>
        </q-dialog>
    </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { validateRequiredFields, validateEmailFields } from 'helpers'

export default {
  data () {
    return {
      name: '',
      email: '',
      confirmCancelData: false
    }
  },

  methods: {
    ...mapActions({
      editAuthor: 'authors/editAuthor'
    }),

    validateRequiredFields,
    validateEmailFields,

    editListAuthor () {
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

    confirmCancel () {
      this.confirmCancelData = true
    },

    loadInputValues () {
      this.name = this.authors[this.idAuthor].name
      this.email = this.authors[this.idAuthor].email
    }
  },

  computed: {
    ...mapGetters({
      authors: 'authors/authorsList'
    }),

    idAuthor () {
      return this.$route.params.id
    },

    validateForm () {
      return !!(this.validateRequiredFields(this.name) || this.validateEmailFields(this.email))
    }
  },

  created () {
    this.loadInputValues()
  }

}
</script>
