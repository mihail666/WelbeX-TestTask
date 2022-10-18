<template>
  <div class="vHeaderBar">
    <div class="vHeaderBar__container">
      <div class="vHeaderBar__space">
        <ul>
          <li class="vHeaderBar__items__item">v-TestTask</li>
        </ul>
        <ul class="vHeaderBar__items">
          <li class="vHeaderBar__items__item" v-for="(menu, index) in HeaderLinks" :key="index">
            <router-link aria-curent="page" :to="menu.path">
              {{menu.name}}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import './v-header-bar.scss'
import { HeaderLinks } from '@/const/HeaderBarLinks'
export default {
  name: 'vHeaderBar',
  data() {
    return {
      HeaderLinks: HeaderLinks
    }
  },
}
</script>