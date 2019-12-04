<script context="module">
  export async function preload(page, session) {
    return page.params;
  }
</script>

<script>
  export let acronym;
</script>

<div>
  <p>tareas para {acronym}</p>
</div>
