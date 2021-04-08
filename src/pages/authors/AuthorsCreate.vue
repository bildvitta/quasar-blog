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
        <q-input outlined v-model="name" label="Nome do autor" class="q-my-md" :rules="[ val => validateRequiredFields(this.name) ]" />
        <q-input outlined v-model="email" label="E-mail" :rules="[ val => validateEmailFields(this.email) ]" />
        <div class="q-my-lg">
          <q-btn :disable="validateForm" color="primary" label="Criar" @click="addAuthorToList" />
          <q-btn color="primary" flat label="Cancelar" @click="confirmCancel" />
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
      </div>
    </q-page>
</template>

<script>
import { mapActions } from 'vuex'
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
      addAuthors: 'authors/addAuthors'
    }),

    validateRequiredFields,
    validateEmailFields,

    addAuthorToList () {
      this.addAuthors({ name: this.name, email: this.email })
      this.checkFilledFields = false

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
