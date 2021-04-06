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
        <small class="text-negative" v-show="checkFilledFields" >Todos os campos devem ser preenchidos</small>
        <q-input outlined v-model="name" label="Nome do autor" class="q-my-md" :rules="[ val => val.length >= 3 || 'É necessário no mínimo 3 caracteres']" />
        <q-input outlined v-model="email" label="E-mail" :rules="[ val => val.length >= 13 || 'E-mail digitado não é válido']" />
        <div class="q-my-lg">
          <q-btn color="primary" label="Editar" @click="editListAuthor" />
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

export default {
  data () {
    return {
      name: '',
      email: '',
      confirmCancelData: false,
      checkFilledFields: false
    }
  },

  methods: {
    ...mapActions({
      editAuthor: 'authors/editAuthor'
    }),

    editListAuthor () {
      if (this.name.length < 3 || this.email.length < 13) {
        this.checkFilledFields = true
      } else {
        const author = {
          values: {
            name: this.name,
            email: this.email
          },
          index: this.$route.params.id
        }
        this.editAuthor(author)
        this.checkFilledFields = false

        this.$q.notify({
          message: 'Autor editado com sucesso!',
          type: 'positive'
        })
        this.$router.push({ name: 'AuthorsList' })
      }
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
    }
  },

  created () {
    this.loadInputValues()
  }

}
</script>
