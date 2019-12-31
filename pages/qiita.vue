<template>
  <div class="p-2 bg-gray-200">
    <h2 class="font-bold text-center mb-6 m-auto text-2xl">Qiita</h2>
    <QiitaLists />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import QiitaLists from '@/components/Organisms/QiitaLists.vue'

export default Vue.extend({
  name: 'Qiita',
  components: {
    QiitaLists
  }
})
</script>
<style lang="scss" scoped>
h2 {
  border-bottom: 1px solid #4a5568;
  max-width: 200px;
}
</style>
