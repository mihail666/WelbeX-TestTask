<template>
  <div class="v-main-wrapper">
    <VHeaderBar />
    <div class="v-main-wrapper__container">
      <VTable 
      :cars_data="CARS"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import VTable from '@/components/table';
import VHeaderBar from '@/components/header';

export default {
  name:"v-main-wrapper",
  components: {
    VTable,
    VHeaderBar
},
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'CARS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_CARS_FROM_API'
    ])
  },
  mounted() {
    this.GET_CARS_FROM_API()
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,router-link,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-decoration:none;}
article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}
html{height:100%}
body{line-height:1}
ol,ul{list-style:none}
blockquote,q{quotes:none}
blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}
table{border-collapse:collapse;border-spacing:0}

.v-main-wrapper{

  &__container{
   padding: 50px;
  }
  
}
</style>