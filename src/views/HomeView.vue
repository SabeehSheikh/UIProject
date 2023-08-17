<template>
  <div>
   
    <NavbarComp/>
    <DataComp1/>
    <DataComp2/>
    <DataComp3/>
    <DataComp4/>
    <DataComp5/>
    <DataComp6/>
</div>
</template>

<script>
// @ is an alias to /src
import NavbarComp from '../components/Navbar.vue'
import DataComp1 from '../components/Data1.vue'
import DataComp2 from '../components/Data2.vue'
import DataComp3 from '../components/Data3.vue'
import DataComp4 from '../components/Data4.vue'
import DataComp5 from '../components/Data5.vue'
import DataComp6 from '../components/Data6.vue'


export default {
  name: 'HomeView',
  components: {
    NavbarComp,
    DataComp1,
    DataComp2,
    DataComp3,
    DataComp4,
    DataComp5,
    DataComp6,






    
  }
}
</script>
