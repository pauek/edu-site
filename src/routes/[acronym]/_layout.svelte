<script context="module">
  export async function preload(page, session) {
    return page.params;
  }
</script>

<script>
  import Nav from "../../components/Nav.svelte";
  export let segment;
  export let acronym;
</script>

<style>
  main {
    position: relative;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav {acronym} {segment} />
<main>
  <slot />
</main>
