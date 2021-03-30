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
                  <q-select v-model="author" :options='authorOptions' label="Autor" />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-select v-model="category" :options='categoryOptions' label="Categoria" />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-select v-model="data" :options='dataOptions' label="Data" />
                  <q-input filled v-model="date" mask="date" :rules="['date']" class="q-mt-md">
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                            <q-date v-model="date">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                   </q-input>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-btn color="primary" label="Filtrar" />
                  <q-btn color="primary" flat label="Limpar" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>
    </div>

    <div class="row q-col-gutter-md full-width">
      <div class="col-sm-3 col-12">
        <card-post />
      </div>
      <div class="col-sm-3 col-12">
        <card-post />
      </div>
      <div class="col-sm-3 col-12">
        <card-post />
      </div>
      <div class="col-sm-3 col-12">
        <card-post />
      </div>
      <div class="col-sm-3 col-12">
        <card-post />
      </div>
      <div class="col-sm-3 col-12">
        <card-post />
      </div>
      <div class="col-sm-3 col-12">
        <card-post />
      </div>
      <div class="col-sm-3 col-12">
        <card-post />
      </div>
      <div class="col-sm-3 col-12">
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
      categoryOptions: ['Categoria 1', 'Categoria 2'],
      authorOptions: ['Autor 1', 'Autor 2', 'Autor 3'],
      dataOptions: ['Mais recentes', 'Mais antigos'],
      author: '',
      category: '',
      data: '',
      date: '2019/02/01'
    }
  }
}
</script>

<style lang="scss">
  .page-list{
    &__search{
      width: 90%;
    }

    &__card:nth-child(4n+1){
      padding-left: 0;
    }
  }
</style>
