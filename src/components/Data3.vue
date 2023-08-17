<template>

    <div class="  bg-opacity-20 relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 gap-10  text-center "
  style="background-image: height: 400px">
  <img class=" opacity-50 w-full" src="../assets/bglogo.png" alt="">
        
        <div class="absolute bottom-0 left-0 right-0 top-0  w-full overflow-hidden bg-fixed"
    style="background-color: rgba(191, 231, 241, 0.438)">
    <div class="text-blue-700 items-center justify-center px-40 py-40">

        <div class="grid grid-cols-3 justify-between mx-10">
            <div>
                <p class="text-blue-900 font-bold text-3xl">April 4</p>
                <p class="text-blue-700 text-2xl">The first day of the conference is focused on dark patterns for ecommerce.</p>
            </div>
            <div>
                <p class="text-blue-900 font-bold text-3xl">April 5</p>
                <p class="text-blue-700 text-2xl">The first day of the conference is focused on dark patterns for ecommerce.</p>
            </div>
            <div>
                <p class="text-blue-900 font-bold text-3xl">April 6</p>
                <p class="text-blue-700 text-2xl">The first day of the conference is focused on dark patterns for ecommerce.</p>
            </div>

        </div>
        <div class=" opacity-100 grid grid-cols-3 justify-between mx-10">
            <div v-for="(cards,ind) in 3 " :key=ind>
                <div class="max-w-sm rounded overflow-hidden shadow-lg gap-10 mx-10 my-10">
  <div class="px-6 py-4">
    <div class="gap-10 my-10" v-for="(cards,ind) in 7 " :key=ind>
    <p class="font-bold text-3xl  text-blue-900">Steven McHail</p>
    <p class="font-bold text-2xl text-blue-700">Not so one-time payments</p>
    <p class="text-xl  text-blue-400">9:00AM - 10:00AM PST</p>
    <hr class=" opacity-10 w-48 h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
</div>
    
   
  </div>
  
</div>

            </div>

        </div>



    </div>
        </div>
    </div>
    
</template>
<script>
import logo from '../assets/bglogo.png'
export default
{
    name:'DataComp3',
}
</script>