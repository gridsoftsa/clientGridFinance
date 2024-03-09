<script lang="ts" setup>
definePageMeta({
  middleware: ['sanctum:auth'],
});
</script>

<template>
  <div>
    Page: INDEX
  </div>
</template>

<style scoped></style>
