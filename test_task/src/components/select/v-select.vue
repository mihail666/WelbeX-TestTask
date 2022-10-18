<template>
  <form @submit.prevent="submit">
    <select v-model="select_data.filterColumns">
      <option 
        v-for="n in filterColumns" 
        :key="n.id"
        :value="n[0]"
        >{{n[0]}}
      </option>
    </select>
    <select v-model="select_data.operations">
      <option 
        v-for="n in operations"
        :key="n.id"
        :value="n[0]"
        >{{n[0]}}
      </option>
    </select>
    <input type="text" v-model="select_data.search" />
    <button type="submit">Submit</button>
  </form>
</template>
<script>
import './v-select.scss'
export default {
  name: "v-select",
  data: () => ({
    select_data:{
      operations: '',
      filterColumns: '',
      search: ''
    },
    filterColumns: [
    [     'name', 'string'],
    [    'users', 'number'],
    [ 'mileage', 'number'],
    ],
    operations: [
    [    'equal'],
    [ 'contains'],
    [  'greater'],
    [     'less'],
    ],
  }),
  methods: {
    submit(){
      this.$emit('operation', this.select_data.operations)
      this.$emit('search', this.select_data.search)
      this.$emit('filterColumns', this.select_data.filterColumns)
      console.log(this.select_data.operations)
      console.log(this.select_data.search)
      console.log(this.select_data.filterColumns)
    }
  }
}
</script>