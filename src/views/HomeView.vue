<template>
  <div>
   
    <NavbarComp/>
    <DataComp1/>
    <DataComp2/>
    <DataComp3/>
</div>
</template>

<script>
// @ is an alias to /src
import NavbarComp from '../components/Navbar.vue'
import DataComp1 from '../components/Data1.vue'
import DataComp2 from '../components/Data2.vue'
import DataComp3 from '../components/Data3.vue'


export default {
  name: 'HomeView',
  components: {
    NavbarComp,
    DataComp1,
    DataComp2,
    DataComp3,
    
  }
}
</script>
