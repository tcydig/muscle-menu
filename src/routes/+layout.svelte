<script lang="ts">
	import '../app.css';
  import hariicon from "../assets/harinezumiicon.webp"
	let { children } = $props();
</script>

<header> 
  <div>
    <a href="/">
      <img src="{hariicon}" alt="hariIcon" width="80" height="80" class="cursor-pointer" >
    </a>
    
  </div>
</header>
{@render children()}
<footer class="py-4">
  <div class="container mx-auto text-center">
    <p class="text-sm">© 2025 5dai5 All Rights Reserved.</p>
  </div>
</footer>