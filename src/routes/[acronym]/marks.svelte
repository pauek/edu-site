<script context="module">
  export async function preload(page, session) {
    return page.params;
  }
</script>

<script>
  export let acronym;
</script>

<div>
  <p>notas para {acronym}</p>
</div>
