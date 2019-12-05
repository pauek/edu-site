
import { writable } from 'svelte/store';

export const editingTask = writable({
  visible: false,
  name: "",
  date: new Date(),
});