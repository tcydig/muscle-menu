<script lang="ts">
  export let data;
  import arrow from "../../../assets/right-top-arrow.svg"
</script>
<section class="pt-11 max-w-7xl w-5/6 ml-auto mr-auto">
  <h1 class="text-7xl font-bold text-shadow">{data.part?.name}</h1>
</section>
<section class="pt-24 max-w-7xl w-5/6 ml-auto mr-auto">
  <div class="flex flex-wrap basis-8 gap-10">
    {#each data.part?.menus ?? [] as {id,name,summary}}
    <a href="../training/{data.params.slug}x{id}">
      <div class="flex flex-row px-2 py-2 rounded-3xl border-2 border-black cursor-pointer transition-transform duration-300 transform hover:-translate-y-2">
        <div class="p-5">
          <h1 class="md:text-3xl font-bold">{name}</h1>
          <h2 class="pt-5 font-bold text-gray-500">{summary}</h2>
        </div>
        <div class="pt-20 pl-10">
          <img src="{arrow}" alt="矢印" />
        </div>
      </div>
    </a>
    {/each}
  </div>
</section>


