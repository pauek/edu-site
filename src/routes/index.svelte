<script context="module">
  export async function preload({ query }) {
    const res = await this.fetch(`/courses.json`);
    const json = await res.json();
    if (res.status === 200) {
      return json;
    } else {
      this.error(res.status, json.message);
    }
  }
</script>

<script>
  export let assignatures = [];
  let selected = -1;

  const assignaturaClick = index => ev => {
    selected = index;
  };

  let formIsOpen = false;
  let novaAssignatura = {
    nom: "",
    codi: 0
  };
  const closeForm = () => (formIsOpen = false);
  const openForm = () => (formIsOpen = true);

  const deleteCourse = course => async ev => {
    const res = await fetch("/del-course.json", {
      method: "POST",
      body: JSON.stringify({ uid: course.uid }),
      headers: { "Content-Type": "application/json" }
    });
    const json = await res.json();
    assignatures = assignatures.filter(c => c.uid !== course.uid);
  };

  const submitForm = async () => {
    closeForm();
    const res = await fetch(`/new-course.json`, {
      method: "POST",
      body: JSON.stringify(novaAssignatura),
      headers: { "Content-Type": "application/json" }
    });
    const { uid } = await res.json();
    assignatures = [...assignatures, { ...novaAssignatura, uid }];
    novaAssignatura = { nom: "", codi: 0 };
  };
</script>

<style>
  h1 {
    font-size: 2.5em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }
  #assignatures {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .assignatura {
    display: flex;
    position: relative;
    flex-direction: column;
    padding: 0.3em 0.5em;
    border: 1px solid #efefef;
    margin-bottom: 0.6em;
    border-radius: 4px;
  }
  .assignatura.selected {
    border: 1px solid red;
  }
  .assignatura:hover {
    background-color: #f7f7f7;
    cursor: pointer;
  }
  .assignatura .remove {
    position: absolute;
    font-size: 0.8em;
    right: 0;
    bottom: 0;
    padding: 0.3em 0.4em;
  }
  .code {
    font-size: 0.7em;
    color: gray;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border: 1px solid gray;
    padding: 1em 1.2em;
  }
  form > .button-bar {
    margin-top: 1em;
  }
  form > label {
    font-size: 0.8em;
    margin-top: 0.5em;
  }
  form > input {
    width: 28em;
  }
</style>

<svelte:head>
  <title>Assignatures</title>
</svelte:head>

<h1>Assignatures</h1>

<div id="assignatures">
  {#each assignatures as a, i}
    <div
      class="assignatura"
      class:selected={i == selected}
      on:click={assignaturaClick(i)}>
      <span class="name">{a.nom}</span>
      <span class="code">{a.codi}</span>
      {#if i == selected}
        <a class="remove" href="." on:click|preventDefault={deleteCourse(a)}>
          remove
        </a>
      {/if}
    </div>
  {/each}
</div>

{#if formIsOpen}
  <form on:submit|preventDefault={submitForm}>
    <label>Assignatura</label>
    <input bind:value={novaAssignatura.nom} />

    <label>Codi</label>
    <input bind:value={novaAssignatura.codi} />

    <div class="button-bar">
      <button>Add</button>
      <button on:click={closeForm}>Close</button>
    </div>
  </form>
{:else}
  <button on:click={openForm}>Add new</button>
{/if}
