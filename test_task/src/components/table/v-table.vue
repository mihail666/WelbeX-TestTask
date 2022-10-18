<template>
  <div class="v-table">
    <ul class="v-table__menu">
      <li>
        <h1>db Car`s</h1>
      </li>
      <li>
        <VSelect 
        :operation="operation"
        :search="search"
        :filterColumns="column" />
      </li>
    </ul>
    <div class="v-table__header">
      <p>Date</p>
      <p>Name Car</p>
      <p>Count Users</p>
      <p>Mileage / Distance</p>
    </div>
    <div class="v-table__body">
      <VTableItem
      v-for=" item in paginatedCars"
      :key="item.id"
      :item_data="item" />
    </div>
    <div class="v-table__pagination">
      <div class="page"
      v-for="page in pages"
      :key="page"
      :class="{'page__celected'
      :page === pageNumder}"
        @click="nextPage(page)">{{page}}
      </div>
    </div>
  </div>
</template>

<script>
import './v-table.scss'
import VTableItem from './v-table-item.vue'
import VSelect from '@/components/select'
export default {
  name: "v-table",
  components: {
    VTableItem,
    VSelect
  },
  props: {
    cars_data: {
      type: Array,
      default: () => {
        return []
      }
    },
  },
  data() {
    return {
      perPage: 5,
      pageNumder: 1,
      operation: {},
      search: {},
      column: {},
      filterColumns: [
        ['name', 'string'],
        ['users', 'number'],
        ['mileage', 'number'],
      ],
      operations: [
        ['equal'],
        ['contains'],
        ['greater'],
        ['less'],
      ],
      types: {
        string: {
          equal: (a, b) => a.toLowerCase() === b,
          contains: (a, b) => a.toLowerCase().includes(b),
          greater: (a, b) => a.toLowerCase() > b,
          less: (a, b) => a.toLowerCase() < b,
        },
        number: {
          equal: (a, b) => a === +b,
          contains: (a, b) => `${a}`.includes(b),
          greater: (a, b) => a > +b,
          less: (a, b) => a < +b,
        },
      },
    }
  },
  computed: {
    pages() {
      return Math.ceil(this.cars_data.length / 5)
    },
    paginatedCars() {
      let from = (this.pageNumder - 1) * this.perPage
      let to = from + this.perPage
      return this.cars_data.slice(from, to)
    },
    sortedCars() {
      const { items, column } = this;
      const type = (this.filterColumns === column)?.[1];
      const filterFn = this.types[type]?.[this.operation];
      const filterVal = this.filterVal;
      return filterFn && filterVal
        ? items.filter(n => filterFn(n[column], filterVal))
        : items;
    }
  },
  methods: {
    nextPage(page) {
      this.pageNumder = page
    },
  }
}
</script>