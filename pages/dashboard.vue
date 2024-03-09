<script lang="ts" setup>
definePageMeta({
  middleware: ["sanctum:auth"],
});
const { user } = useSanctumAuth();

const { data } = await useApiFetch("api/test");
</script>

<template>
  <div>
    Page: Dashboard Authenticated <br />
    <pre>{{ user }}</pre>
    <pre>{{ data }}</pre>
  </div>
</template>

<style scoped></style>
