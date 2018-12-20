<template>
  <div class="header">
    <div class="row">
      <div class="title col-xs-12">
        <h1>{{ app.author }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  created() {
    this.setAuthor('Muhammad Al Ziqri');
  },

  computed: {
    ...mapState([
      'app'
    ])
  },

  methods: {
    ...mapMutations([
      'setAuthor'
    ])
  }
}
</script>


<style lang="scss" scoped>
  .header {
    position: fixed;
    width: 100%;
    height: 70px;
    background: black;
    z-index: 10;

    .title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      font-size: 1em;
    }

    h1 {
      color: grey;
    }

    strong {
      color: white;
      font-size: 1em;
    }
  }
</style>