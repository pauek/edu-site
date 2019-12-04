<script context="module">
  export async function preload(page, session) {
    const { acronym } = page.params;
    const res = await this.fetch(`/acronym-list.json`);
    const json = await res.json();
    if (res.status === 200) {
      return {
        acronym,
        list: json.acronyms.map(a => a.acronym)
      };
    } else {
      this.error(res.status, json.message);
    }
  }
</script>

<script>
  import Nav from "../../components/Nav.svelte";
  export let segment;
  export let acronym;
  export let list;
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

<Nav {acronym} {segment} {list} />
<main>
  <slot />
</main>
