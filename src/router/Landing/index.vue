<template>
  <div class="landing">
    <h2>{{ app.description }}</h2>
    <h3>{{ app.msg }}</h3>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  created() {
    this.setDescription('Ini merupakan deskripsi saya ya');

    this.fetchMsg();
  },

  computed: {
    ...mapState([
      'app'
    ])
  },

  methods: {
    ...mapMutations([
      'setDescription'
    ]),

    ...mapActions([
      'fetchMsg'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .landing {
    text-align: center;
  }
</style>

