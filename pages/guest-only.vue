<script lang="ts" setup>
definePageMeta({
  middleware: ["sanctum:guest"],
});
</script>

<template>
  <div>Page: Guest ONLY</div>
</template>

<style scoped></style>
