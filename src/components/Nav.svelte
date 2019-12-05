<script>
  import { goto } from '@sapper/app'

  export let segment;
  export let acronym;
  export let list;

  function segmentChange(ev) {
    goto(`/${ev.target.value}`)
  }
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(170, 30, 30, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(170, 30, 30);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }

  .first {
    margin-right: 1.5em;
  }
  .first select {
    padding: .2em .4em;
    border-radius: 4px;
    background: white;
  }
</style>

<nav>
  <ul>
    <li class="first">
      <select bind:value={acronym} on:change={segmentChange}>
      {#each list as option}
        <option value={option}>{option.toUpperCase()}</option>
      {/each}
      </select>
    </li>
    <li>
      <a class:selected={segment === undefined} href="/{acronym}">agenda</a>
    </li>
    <li>
      <a class:selected={segment === 'tasks'} href="/{acronym}/tasks">tareas</a>
    </li>
    <li>
      <a class:selected={segment === 'marks'} href="/{acronym}/marks">notas</a>
    </li>
  </ul>
</nav>
