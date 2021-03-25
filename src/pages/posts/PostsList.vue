<template>
  <q-page class="bg-grey-2 q-pa-lg page-list">
    <div class="page-list__information">
      <div class="page-list__top flex justify-between">
        <div>
          <p class="text-h5 q-mb-xs">Postagens</p>
          <div class="page-list__path">
            <q-breadcrumbs>
              <q-breadcrumbs-el label="Home" />
              <q-breadcrumbs-el label="Postagens" />
            </q-breadcrumbs>
          </div>
        </div>
        <q-btn icon="add" unelevated rounded color="primary" label="Adicionar post" :to="{ name: 'PostsCreate'}" />
      </div>

      <div class="page-list__filter flex q-my-lg justify-between">
        <q-input v-model="text" label="Procurar" class="page-list__search" />
        <q-btn flat  color="primary" icon="filter_list" label="Filtrar">
          <q-menu>
            <q-list style="min-width: 200px">
              <q-item>
                <q-item-section>
                  <q-select v-model="vAuthor" :options='opauthor' label="Autor" />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-select v-model="vCategory" :options='opcategory' label="Categoria" />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-select v-model="vData" :options='opdata' label="Data" />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-btn color="primary" label="Filtrar" />
                </q-item-section>
              </q-item>

            </q-list>
          </q-menu>
        </q-btn>
      </div>
    </div>

    <div class="page-list__content row q-col-gutter-x-md full-width">
      <div class="col">
        <card-post />
      </div>
      <div class="col">
        <card-post />
      </div>
      <div class="col">
        <card-post />
      </div>
      <div class="col">
        <card-post />
      </div>
    </div>

    <div class="q-pa-lg flex flex-center page-list__pagination">
    <q-pagination v-model="current" :max="5" direction-links boundary-links icon-first="skip_previous"
      icon-last="skip_next" icon-prev="fast_rewind" icon-next="fast_forward" />
  </div>
  </q-page>

</template>

<script>
import CardPost from 'src/components/CardPost.vue'
export default {

  components: {
    CardPost
  },
  data () {
    return {
      current: '1',
      text: '',
      model: '',
      opcategory: ['Categoria 1', 'Categoria 2'],
      opauthor: ['Autor 1', 'Autor 2', 'Autor 3'],
      opdata: ['Mais recentes', 'Mais antigos'],
      vAuthor: '',
      vCategory: '',
      vData: ''
    }
  }
}
</script>

<style lang="scss">
  .page-list{
    position: relative;

    &__search{
      width: 90%;
    }

    &__content{
      background: red;
    }
  }

  // .teste{

  // }
</style>
