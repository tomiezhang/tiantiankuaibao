<template>
  <router-link :to="{path: path}" active-class="active" class="tab-item external" replace>
    <span class="icon" :class="iconClass"></span>
    <span class="tab-label" v-text="label"></span>
  </router-link>
</template>
<script>
export default {
  props: {
    path: '',
    icon: '',
    label: ''
  },
  computed: {
    iconClass () {
      return `icon-${this.icon}`
    }
  }
}
</script>
<style>

</style>
