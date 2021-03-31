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
        <q-input outlined v-model="name" label="Nome do autor" class="q-my-md" />
        <q-input outlined v-model="email" label="E-mail" />
        <div class="q-my-lg">
          <q-btn color="primary" label="Criar"  @click="addAuthor" />
          <q-btn color="primary" flat label="Cancelar" />
        </div>
      </div>
      <hr>
       <div class="full-width">
        <q-list bordered class="rounded-borders q-mb-xs">
          <q-item clickable v-ripple v-for="(author, index) in authors" :key="index" class="flex row items-center" >
            <p class="q-mb-none col">{{ author.name }}</p>
            <p class="q-mb-none col">{{ author.email }}</p>
            <q-btn icon="edit" unelevated @click="removeAuthor(index)" />
          </q-item>
        </q-list>
      </div>
    </q-page>
</template>

<script>
export default {
  data () {
    return {
      authors: [],
      name: '',
      email: ''
    }
  },
  methods: {
    addAuthor () {
      if (this.name === '' || this.email === '') {

      } else {
        this.authors.push({
          name: this.name,
          email: this.email
        })
        this.name = ''
        this.email = ''
      }
    },
    removeAuthor (index) {
      this.authors.splice(index, 1)
    }
  }
}
</script>
