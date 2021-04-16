<template>
    <q-page class="bg-grey-2 q-pa-lg">
      <div class="flex justify-between">
        <div>
          <p class="text-h5 q-mb-xs">Criar Autor</p>
          <div>
            <q-breadcrumbs>
              <q-breadcrumbs-el label="Home" />
              <q-breadcrumbs-el label="Autores" />
              <q-breadcrumbs-el label="Adicionar autor" />
            </q-breadcrumbs>
          </div>
        </div>
      </div>
      <div class="q-my-lg relative-position">
        <q-input outlined v-model="name" label="Nome do autor" class="q-my-md" :rules="[ validateRequiredFields ]" />
        <q-input outlined v-model="email" label="E-mail" :rules="[ validateEmailFields ]" />
        <div class="q-my-lg flex">
          <q-btn :disable="validateForm" color="primary" label="Criar" @click="addAuthorToList" />
          <modal-cancel pageToAccess="AuthorsList" />
        </div>
      </div>
    </q-page>
</template>

<script>
import { mapActions } from 'vuex'
import { validateRequiredFields, validateEmailFields } from 'helpers'
import modalCancel from 'src/components/modalCancel.vue'

export default {
  components: {
    modalCancel
  },

  data () {
    return {
      name: '',
      email: '',
      confirmCancelData: false
    }
  },

  methods: {
    ...mapActions({
      addAuthors: 'authors/addAuthors'
    }),

    validateRequiredFields,

    validateEmailFields,

    addAuthorToList () {
      this.addAuthors({ name: this.name, email: this.email })

      this.$q.notify({
        message: 'Autor criado com sucesso!',
        type: 'positive'
      })
      this.$router.push({ name: 'AuthorsList' })
    },

    confirmCancel () {
      this.confirmCancelData = true
    }
  },

  computed: {
    validateForm () {
      return !!(this.validateRequiredFields(this.name) || this.validateEmailFields(this.email))
    }
  }
}
</script>
