<script setup>
import { ref, onMounted } from "vue";
import Papa from "papaparse";
// import { CSVToJSON } from "../utils";

const JSON_DATA = ref([]);

onMounted(async () => {
  try {
    const response = await fetch("/data/pg_catalog.csv"); // Adjust path accordingly
    const csvText = await response.text();
    // JSON_DATA = CSVToJSON(csvText)
    Papa.parse(csvText, {
      header: true, // Converts CSV rows into objects with keys from the first row
      skipEmptyLines: true,
      complete: (result) => {
        JSON_DATA.value = result.data;
      },
    });
  } catch (error) {
    console.error("Error fetching CSV:", error);
  }
  console.log({JSON_DATA})
});
</script>


<template>
  <div>
    <h1 class="mx-auto max-w-7xl p-2 sm:px-6 lg:px-8 text-2xl/7 font-bold text-gray-900 text-center sm:truncate sm:text-3xl sm:tracking-tight">Welcome to Classic Reads</h1>
    <div v-if="JSON_DATA">
      {{ JSON_DATA }}
    </div>
  </div>
</template>
