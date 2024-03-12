<script setup lang="ts">
const route = useRoute();
const { isAuthenticated, logout } = useSanctumAuth();

const handleLogout = async () => {
  await logout();
};

const links = [
  [
    {
      label: "Inicio",
      icon: "i-heroicons-home",
      to: "/",
    },
  ],
  [
    {
      label: "Iniciar Sesión",
      icon: "i-heroicons-key",
      to: "/login",
    },
    {
      label: "Registrarme",
      icon: "i-heroicons-user-plus",
      to: "/register",
    },
  ],
];

const linksAuth = [
  [
    {
      label: "Inicio",
      icon: "i-heroicons-home",
      to: "/",
    },
    {
      label: "Dashboard",
      icon: "i-heroicons-chart-pie",
      to: "/dashboard",
    },
  ],
  [
    {
      label: "Perfil",
      icon: "i-heroicons-user",
      to: "/profile",
    },
    {
      label: "Cerrar Sesión",
      icon: "i-heroicons-arrow-left-start-on-rectangle",
      click: () => {
        handleLogout();
      },
    },
  ],
];
</script>

<template>
  <UHorizontalNavigation
    :links="isAuthenticated ? linksAuth : links"
    class="border-b border-gray-200 dark:border-gray-800 mx-auto"
  />
  <!-- <UVerticalNavigation
    :links="isAuthenticated ? linksAuth : links"
    class="border-r border-gray-200 dark:border-gray-800 h-full w-1/6"
  /> -->
</template>
