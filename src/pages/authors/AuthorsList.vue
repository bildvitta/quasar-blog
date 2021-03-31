<template>
    <q-page class="bg-grey-2 q-pa-lg page-authors-list">
      <div class="flex justify-between">
        <div>
          <p class="text-h5 q-mb-xs">Autores</p>
          <div>
            <q-breadcrumbs>
              <q-breadcrumbs-el label="Home" />
              <q-breadcrumbs-el label="Autores" />
            </q-breadcrumbs>
          </div>
        </div>
        <q-btn icon="add" unelevated rounded color="primary" label="Adicionar autor" :to="{ name: 'AuthorsCreate'}" />
      </div>
      <div class="flex q-my-lg justify-between">
        <q-input v-model="text" label="Procurar" class="page-posts-list__search col" />
      </div>

    </q-page>
</template>

<script>

export default {
  data () {
    return {
      text: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-authors-list{
    &__image-author{
      width: 30px;
      border-radius: 50%;
    }
  }
</style>
