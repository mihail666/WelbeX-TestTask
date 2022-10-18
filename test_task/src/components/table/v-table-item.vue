<template>
  <div class="v-table-item">
    <p class="v-table-item__el">{{item_data.data}}</p>
    <p class="v-table-item__el">{{item_data.name}}</p>
    <p class="v-table-item__el">{{item_data.users}}</p>
    <p class="v-table-item__el">{{item_data.mileage}} Km</p>
  </div>
</template>
<script>
import './v-table-item.scss'
export default {
  name: "v-table-item",
  props: {
    item_data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  computed: {}
}
</script>
