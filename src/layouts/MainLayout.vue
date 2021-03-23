<template>
  <q-layout view="hHh lpR lFf" class="main-layout">
    <q-header elevated class="main-layout__header">
      <q-toolbar class="main-layout__toolbar">
        <q-btn dense flat round icon="menu" @click="left = !left" />
        <q-toolbar-title class="main-layout__toolbar-title">
          <q-avatar class="main-layout__toolbar-logo">
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
            Quasar Blog
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered content-class="bg-white" class="main-layout__drawer">
      <q-list dense padding class="rounded-borders text-black q-pt-lg">
        <q-item clickable v-ripple >
          <q-item-section avatar class="q-py-md">
            <q-icon color="black" name="home" />
          </q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar class="q-py-md">
            <q-icon color="black" name="person" />
          </q-item-section>
          <q-item-section>Autores</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: true,
      values: {
        firstAuthor: false,
        secondAuthor: false,
        thirdAuthor: false,
        firstCategory: false,
        secondtCategory: false,
        thirdCategory: false
      },

      group: null,
      options: [
        { label: 'Mais recentes', value: 'recent', color: 'white' },
        { label: 'Mais antigos', value: 'old', color: 'white' }
      ],
      date: ''

    }
  }
}
</script>

<style lang="scss" scoped>
  .main-layout__header{
    line-height: 3;
  }
</style>
