<script>
  import { goto } from '@sapper/app'
  export let segment;
  export let acronym;

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
    margin-right: 2em;
  }
</style>

<nav>
  <ul>
    <li class="first">
      <select bind:value={acronym} on:change={segmentChange}>
        <option value={"fi"}>FI - 2019T</option>
        <option value={"edoo"}>EDOO - 2019T</option>
      </select>
    </li>
    <li>
      <a class:selected={segment === undefined} href="/{acronym}">inici</a>
    </li>
    <li>
      <a class:selected={segment === 'abcd'} href="/{acronym}/abcd">abcd</a>
    </li>
  </ul>
</nav>
