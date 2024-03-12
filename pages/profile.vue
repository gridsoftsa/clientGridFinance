<script lang="ts" setup>
definePageMeta({
  middleware: ["sanctum:auth"],
});
const { user } = useSanctumAuth();
</script>

<template>
  <div>
    Page: Profile Authenticated <br />
    <pre>{{ user }}</pre>
  </div>
</template>

<style scoped></style>
