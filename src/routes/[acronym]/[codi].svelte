<script context="module">
  export async function preload(page, session) {
    const { codi } = page.params;
    const res = await this.fetch(`/assig/${codi}.json`);
    const json = await res.json();
    if (res.status === 200) {
      return { assignatura: json.assignatura[0] };
    } else {
      this.error(res.status, json.message);
    }
  }
</script>

<script>
  export let assignatura;
</script>

<h1>{assignatura.nom}</h1>
<p>{assignatura.codi} {assignatura.uid}</p>
