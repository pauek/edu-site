<script>
  import DatePicker from "./DatePicker.svelte";
  import { editingTask } from "../store.js";

  let task;

  const unsubscribe = editingTask.subscribe(value => {
    task = value;
  });

  $: taskNotFilled = task && task.name === "";

  const addTask = () => {
    editingTask.update(task => ({ ...task, visible: true }));
  };

  const submitTask = () => {
    console.log("submitTask: " + JSON.stringify(task));
  };

  const cancelNewTask = () => {
    editingTask.update(task => ({ ...task, visible: false }));
  };

  const onDateChange = d => {
    editingTask.update(task => ({
      ...task,
      date: d.detail
    }));
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

{#if task.visible}
  <form on:submit|preventDefault={submitTask}>
    <h2>Nueva tarea</h2>
    <label>Nombre</label>
    <input bind:value={task.name} />
    <label>Fecha</label>
    <DatePicker on:datechange={onDateChange} selected={task.date} />
    <div>
      <button type="submit" disabled={taskNotFilled}>Añade</button>
      <button on:click={cancelNewTask}>Cancela</button>
    </div>
  </form>
{:else}
  <button on:click={addTask}>Añadir tarea</button>
{/if}
