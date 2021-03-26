<template>
    <q-page class="bg-grey-2 q-pa-lg page-authors">
      <div class="page-authors__information">
      <div class="page-authors__top flex justify-between">
        <div>
          <p class="text-h5 q-mb-xs">Autores</p>
          <div class="page-authors__path">
            <q-breadcrumbs>
              <q-breadcrumbs-el label="Home" />
              <q-breadcrumbs-el label="Autores" />
            </q-breadcrumbs>
          </div>

        </div>
        <q-btn icon="add" unelevated rounded color="primary" label="Adicionar autor" :to="{ name: 'AuthorsCreate'}" />
      </div>
      </div>
    </q-page>
</template>
