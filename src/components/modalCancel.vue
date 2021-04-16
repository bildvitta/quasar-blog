<template>
  <div>
    <q-btn color="primary" flat label="Cancelar" @click="cancellationConfirmation" />
      <q-dialog v-model="cancellationConfirmationData" persistent>
        <q-card>
          <q-card-section class="row items-center">
            <span class="q-ml-sm">Deseja mesmo cancelar?</span>
          </q-card-section>
          <q-card-actions align="center">
            <q-btn flat label="Cancelar" color="primary" v-close-popup />
            <q-btn label="Confirmar" color="primary" v-close-popup :to="{ name: pageToAccess }" />
          </q-card-actions>
        </q-card>
      </q-dialog>
  </div>
</template>

<script>
export default {
  props: {
    pageToAccess: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      cancellationConfirmationData: false
    }
  },

  methods: {
    cancellationConfirmation () {
      this.cancellationConfirmationData = true
    }
  }
}
</script>
