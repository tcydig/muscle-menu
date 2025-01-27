<script lang="ts">
  import harinezumKorokoroImg from '../assets/korokoroharinezumi.webp'
  import harinezumiun from '../assets/harinezumiu-ntouka.png'
  import harinezumiehen from '../assets/harinezumi-ehen.webp'

  let {data} = $props()  
</script>

<section class="pt-28 max-w-7xl w-5/6 ml-auto mr-auto ">
  <div class="md:flex flex-row">
    <div class="md:pr-80">
      <h1 class="text-8xl font-bold text-shadow">Muscle <br>Menu</h1>
      <h5 class="text-xl font-semibold">筋トレメニューを探す貴方に届け</h5>
    </div>
    <div class="w-96">
      <img src={harinezumKorokoroImg} alt="harinezumi korokoro" />
    </div>
  </div>
</section>
<div class="border-t border-black border-2 w-full"></div>
<section class="pt-32 pb-32 max-w-7xl w-5/6 ml-auto mr-auto ">
  <div class="md:flex flex-row">
    <div class="md:pr-55">
      <img src={harinezumiun} alt="harinezumi kangaeru" />
    </div>
    <div>
      <h1 class="text-5xl font-bold text-shadow pt-32">What is this site?</h1>
      <h5 class="pt-10 text-xl font-semibold">このサイトは誰もが筋トレに挑戦しやすく！を目標にしています。<br>素晴らしい筋トレーニーの皆さんから頂いたメニューを公開する事で、初心者でもそれぞれの目標に合った筋トレメニューを実施する事が出来ます！</h5>
    </div>
  </div>
</section>
<div class="border-t border-black border-2 w-full"></div>
<section class="pt-10 pb-32 max-w-7xl w-5/6 ml-auto mr-auto ">
  <div class="flex flex-col">
    <div>
      <h1 class="text-7xl font-bold text-shadow">Menu</h1>
    </div>
    <div class="pt-24 flex flex-wrap ">
      {#each data.parts as {id,img}}
        <div 
          class="mb-8 p-5 max-w-52">
          <a href="{`./part/${id}`}">
            <img src={img} alt="menu" class="transition-transform duration-300 transform hover:-translate-y-2" />
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>
<div class="border-t border-black border-2 w-full"></div>
<section class="pt-32 pb-32 max-w-7xl w-5/6 ml-auto mr-auto ">
  <div class="flex flex-col">
    <div class="pr-55 text-center">
      <h1 class="text-6xl font-bold text-shadow">Request For Your Menu</h1>
    </div>
    <div class="text-center">
      <h5 class="pt-10 text-xl font-semibold">
        本サイトは皆さんの筋トレをメニューをお待ちしています！<br>
        あなたの筋トレメニューが誰かの筋肉を喜ばせるかもしれません！！<br>
        また、筋トレ動画のモデルになってくださる方や文章の訂正も大歓迎です！<br>
        ご協力頂ける方は、こちらのフォームからお願いします！！<br>
        ※こちらのサイトは個人で運営をしているため、対応が遅れる場合がございます<br>
      </h5>
      <div class="flex items-center justify-center pt-16">
        <div class="px-6 py-2 bg-transparent text-black font-semibold text-lg rounded-3xl border-2 border-black  cursor-pointer ">
          <a href="https://forms.gle/TbHWdM3d4gD675Du6">
            協力する!!
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="pt-32 pb-32 max-w-7xl w-5/6 ml-auto mr-auto ">
  <div class="flex flex-col">
    <div class="pr-55 flex justify-center">
      <img src={harinezumiehen} alt="menu" class="w-96" />
    </div>
  </div>
</section>