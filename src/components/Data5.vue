<template>

  <div  class=" bg-blue-100  overflow-hidden rounded-3xl p-12 text-center py-40  border-4  mx-40 my-40">

    <div class="flex flex-row justify-between">

        <div class="flex flex-col">
            <p class=" flex justify-start font-bold text-6xl text-blue-900">
                Stay up to date
            </p>
            <p class="font-bold text-xl  text-blue-600">
                Get updates on all of our events and be the first to get notified when tickets go on sale.
            </p>
        </div>

        <div>
            <p class="font-bold text-xl  text-blue-900">Sign up to our newsletter ↓</p>
            
                
<form>   
    <label for="search" class=" mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative ">
        <div class=" absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class=" w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="search" class="block w-full p-4 pl-10 text-sm text-gray-900  rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 light:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
        <button type="submit" class="text-black absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

           
        </div>


    </div>
  </div>
    
</template>
<script>
import logo from '../assets/bglogo.png'
export default
{
    name:'DataComp5',
}
</script>