<template>

    <div class="flex flex-col gap-4 items-start  ">
        <p class="font-bold text-5xl text-blue-700 text-">
            speakers
        </p>
        <p class="font-bold text-2xl text-blue-900">
            Learn from the experts on the cutting-edge of deception at 
            <br>
             the most sinister companies.
        </p>
    </div>
    <div class=" flex my-10 justify-between" >
        <div class="grid grid-cols-1 gap-10 items-start ">
            <div >
            <p class="text-blue-700 text-2xl">opening date</p>
            <p class="text-blue-900 font-bold text-3xl">April 4</p>
        </div>
            <div>
            <p class="text-blue-700 text-2xl">speakers & workshops</p>
            <p class="text-blue-900 font-bold text-3xl">April 5</p>
        </div>
            <div>
            <p class="text-blue-700 text-2xl">Interviews</p>
            <p class="text-blue-900 font-bold text-3xl">April 6</p>
        </div>
        

        </div>
        <div class="grid grid-cols-3">

            <div v-for="(cards,ind) in 6 " :key=ind>
                <div class="max-w-sm rounded overflow-hidden shadow-lg gap-10 mx-10 my-10">
  <img class="rounded-full w-full" src="https://keynote.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdamaris-kimura.5df6b6b2.jpg&w=384&q=75" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <!--<div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>-->
</div>

            </div>



        </div>

    </div>
    <div class="flex flex-col items-start place-items-start mx-10 gap-5">
        <p class="font-bold text-5xl text-blue-700 ">
            Our three day schedule is jam-packed <br> with brilliant, creative, evil geniuses.
    </p>
        <p class="font-bold text-2xl text-blue-900 ">
            The worst people in our industry giving the best talks you’ve ever seen. <br> Nothing will be recorded and every attendee has to sign an NDA to watch the talks.   
        </p>
    </div>

</template>
<script>

export default
{
    name:'DataComp2',
}
</script>

<style>
</style>