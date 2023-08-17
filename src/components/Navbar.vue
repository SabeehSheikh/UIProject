<template>
    <nav class="flex items-center justify-between flex-wrap bg-blue-50 p-6">
  <div class="flex items-center flex-shrink-0 text-blue-400 mr-6">
    <!--<svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>-->
    <img class="w-60 h-20" src="../assets/Screenshot_from_2023-08-16_11-45-34-removebg-preview.png" alt="image">
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <!--<a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Docs
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Examples
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Blog
      </a>-->

      <span class="text-bold text-blue-700">04-06 of April, 2022 Los Angeles, CA</span>
    </div>
    <div>
      <!--<btn class=" bg-blue inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-blue mt-4 lg:mt-0">Get your tickets</btn>-->
      <button class="bg-blue-500 hover:bg-blue-700 text-white text-lg py-4 px-4 mx-20 font-bold py-2 px-4 rounded-2xl">
        Get your tickets
</button>
    </div>
  </div>
</nav>

    
</template>

<script>
export default {
    name: 'NavbarComp',
    
}

</script>

<style>
</style>