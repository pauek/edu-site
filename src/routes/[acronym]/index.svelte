<script context="module">
  export async function preload(page, session) {
    const { acronym } = page.params;
    const res = await this.fetch(`/${acronym}/data.json`);
    const json = await res.json();
    if (res.status === 200) {
      return { course: json.course[0] };
    } else {
      this.error(res.status, json.message);
    }
  }
</script>

<script>
  import NewTask from "../../components/NewTask.svelte";

  export let course;

</script>

<style>
  h1 {
    font-size: 2.5em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }
  
</style>

<svelte:head>
  <title>{course.acronym} - {course.name}</title>
</svelte:head>

<h1>{course.acronym.toUpperCase()} - {course.name}</h1>

<p>{course.code}</p>

<NewTask />