<template>
  <div>
    <v-toolbar app>
      <v-btn icon flat @click.native.stop="goHome()">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/" class="font-weight-light" tag="span" style="cursor: pointer;">Todo</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn icon>
          <v-icon>edit</v-icon>
        </v-btn>
        <v-btn @click="deleteDeck" icon>
          <v-icon class="red--text">delete</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'ToolbarHome',
  data () {
    return {
      deleteDialog: false
    }
  },
  methods: {
    goHome () {
      this.$router.replace('/')
    },
    deleteDeck () {
      this.$store.dispatch('deleteDeck', this.$route.params.deckId)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
