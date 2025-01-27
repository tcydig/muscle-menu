<script lang="ts">
  export let data;
</script>
<section class="pt-11 max-w-7xl w-5/6 ml-auto mr-auto">
  <h1 class="text-5xl font-bold text-shadow">{data.menu?.name}</h1>
</section>
<div class="mt-20 border-t border-black border-2 w-full"></div>
<section class="pt-40 max-w-7xl w-5/6 ml-auto mr-auto">
  <div class="md:flex flex-row gap-9 flex-wrap justify-center">
    <div class="md:w-2/5 bg-gray-500 h-96 flex flex-col justify-center">
      <!-- <video></video> -->
      <h1 class="text-center text-white text-xl">筋トレ動画モデルをしてくださる方を探しています。。<br>動画この場所に設定される予定です。</h1>
    </div>
    <div class="rounded-3xl border-2 border-black md:w-2/5 max-md:mt-7" >
      <div class="p-5">
        <h1 class="text-xl text-gray-500 font-bold">必要な器具</h1>
        <div class="pt-2">
          {#each data.equipments as equipment}
            <p class="font-bold text-xl">・{equipment}</p>
          {/each}
        </div>
      </div>
      <div class="border-t border-black border-2"></div>
      <div class="p-5">
        <h1 class="text-xl text-gray-500 font-bold">鍛えられる部位</h1>
        {#each data.muscles as muscle}
          <div class="pt-2">
            <p class="font-bold text-xl">・{muscle}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
<section class="pt-24 max-w-7xl w-5/6 ml-auto mr-auto -mx-28">
  <div class="md:grid grid-cols-2 flex-wrap justify-center border-2 border-black rounded-3xl md:divide-x-4">
    <div class="pt-2 md:pl-11 max-md:pl-5 pb-2 pr-2">
      <h1 class="text-xl text-gray-500 font-bold">やり方</h1>
      <div class="pt-2">
        {#each data.procedures as procedure}
          <p class="font-bold text-xl">・{procedure}</p>
        {/each}
      </div>
    </div>
    <div class="pt-2 md:pl-11 max-md:pl-5 pb-2 pr-2">
      <h1 class="text-xl text-gray-500 font-bold">コツ</h1>
      <div class="pt-2">
        {#each data.hints as hint}
          <p class="font-bold text-xl">・{hint}</p>
        {/each}
      </div>
    </div>
  </div>
</section>
  