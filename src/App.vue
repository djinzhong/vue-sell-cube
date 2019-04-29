<template>
  <div id="app" @touchmove.prevent>
    <v-header :seller="seller"></v-header>
    <div class="tab-wrapper">
      <tab :tabs="tabs"></tab>
    </div>
  </div>
</template>

<script>
  import { getSeller } from 'api'
  import VHeader from 'components/v-header/v-header'
  import Tab from 'components/tab/tab'
  import Goods from 'components/tab/components/Goods'
  import Ratings from 'components/tab/components/Ratings'
  import Seller from 'components/tab/components/Seller'

  export default {
    name: 'app',
    components: {
      VHeader, Tab
    },
    created () {
      this._getSeller()
    },
    computed: {
      tabs() {
        return [
          {
            label: '商品',
            component: Goods,
            data: {
              seller: this.seller
            }
          },
          {
            label: '评论',
            component: Ratings,
            data: {
              seller: this.seller
            }
          },
          {
            label: '商家',
            component: Seller,
            data: {
              seller: this.seller
            }
          }
        ]
      }
    },
    data() {
      return {
        seller: {}
      }
    },
    methods: {
      _getSeller () {
        getSeller().then(seller => {
          this.seller = Object.assign({}, this.seller, seller)
        })
      }
    }
  }
</script>
<style lang="stylus">
  #app
    .tab-wrapper
      position: fixed
      top: 136px
      left: 0
      right: 0
      bottom: 0
</style>
