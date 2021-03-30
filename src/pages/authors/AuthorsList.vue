<template>
    <q-page class="bg-grey-2 q-pa-lg">
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
    </q-page>
</template>
