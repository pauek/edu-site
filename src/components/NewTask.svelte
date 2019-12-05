<script>
  import DatePicker from "./DatePicker.svelte";

  let newTask;

  $: taskNotFilled = newTask && newTask.name === "";

  const addTask = () => {
    newTask = {
      name: "",
      date: new Date()
    };
  };

  const submitTask = () => {
    console.log("submitTask: " + JSON.stringify(newTask));
  };

  const cancelNewTask = () => {
    newTask = null;
  };

  const onDateChange = d => {
    newTask.date = d.detail;
  };
</script>

<style>
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1em;
    border: 1px solid black;
    max-width: 40em;
  }
  form button {
    margin-top: 1em;
  }
  form input {
    width: 35em;
  }
  form label {
    margin-top: 0.5em;
  }
  form h2 {
    border-bottom: 1px solid gray;
  }
</style>

{#if newTask}
  <form on:submit|preventDefault={submitTask}>
    <h2>Nueva tarea</h2>
    <label>Nombre</label>
    <input bind:value={newTask.name} />
    <label>Fecha</label>
    <DatePicker on:datechange={onDateChange} selected={newTask.date} />
    <div>
      <button type="submit" disabled={taskNotFilled}>Añade</button>
      <button on:click={cancelNewTask}>Cancela</button>
    </div>
  </form>
{:else}
  <button on:click={addTask}>Añadir tarea</button>
{/if}
