<script lang="ts" setup>
const { isAuthenticated, logout } = useSanctumAuth();
const handleLogout = async () => {
  await logout();
};

const links = [
  { label: 'Inicio', to: '/' },
  { label: 'Registro', to: '/register' },
  { label: 'Iniciar Sesión', to: '/login' },
  { label: 'Dashboard Autenticados', to: '/dashboard' },
  { label: 'Página solo para invitados', to: '/guest-only' },
]
</script>

<template>
  <UHorizontalNavigation :links="links">
    <template #default="{ link }">
      <span class="group-hover:text-primary relative">{{ link.label }}</span>
    </template>
  </UHorizontalNavigation>
  <br>
  <template v-if="isAuthenticated">
    <UButton color="primary" variant="solid" @click.prevent="handleLogout">Cerrar Sesión</UButton>
  </template>
  <slot />
</template>
<!--

<template>
  <UContainer>
    <ul>
      <li>
        <ULink to="/" active-class="text-primary"
          inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">Inicio</ULink>
      </li>
      <li>
        <ULink to="/register" active-class="text-primary"
          inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">Registro</ULink>
      </li>
      <li>
        <ULink to="/login" active-class="text-primary"
          inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">Iniciar Sesión
        </ULink>
      </li>
      <li>
        <ULink to="/dashboard" active-class="text-primary"
          inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">Dashboard
          Autenticados</ULink>
      </li>
      <li>
        <ULink to="/guest-only" active-class="text-primary"
          inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"> Página solo para
          invitados </ULink>
      </li>
    </ul>
    <slot />
  </UContainer>
</template>
 -->
