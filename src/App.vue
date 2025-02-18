<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    {{ $t('common.label.name') }} {{ accountLang }}
    <button @click="onChangeLanguage">Change Language</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {},
  computed: {
    ...mapGetters('account', ['accountLang'])
  },
  methods: {
    onChangeLanguage() {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'vi' : 'en'
      this.$store.dispatch('account/setLang', this.$i18n.locale)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
