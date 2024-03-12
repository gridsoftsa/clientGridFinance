<script lang="ts" setup>
import Header from "~/components/Header.vue";
</script>

<template>
  <UContainer>
    <Header />
    <slot class="p-2" />
  </UContainer>
  <!--
  <UHorizontalNavigation :links="links">
    <template #default="{ link }">
      <span class="group-hover:text-primary relative">{{ link.label }}</span>
    </template>
  </UHorizontalNavigation>
  <br />
  <template v-if="isAuthenticated">
    <UButton color="primary" variant="solid" @click.prevent="handleLogout"
      >Cerrar Sesión</UButton
    >
  </template> -->
</template>
