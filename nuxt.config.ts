// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: "", // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    },
  },
  modules: ["@nuxt/ui", "@pinia/nuxt", "nuxt-auth-sanctum"],
  sanctum: {
    baseUrl: process.env.NUXT_PUBLIC_API_BASE || "http://localhost:8000", // Laravel API
    origin: process.env.SITE_URL || useRequestURL().origin, // Nuxt app, by default will be used 'useRequestURL().origin'
    redirect: {
      onLogin: "/", // Custom route after successful login
      onLogout: "/login", // Custom route after successful logout
      onAuthOnly: "/login", // Redirect to this page if user is not authenticated
      onGuestOnly: "/", // Redirect to this page if user is authenticated
      keepRequestedRoute: true,
    },
    redirectIfAuthenticated: true, // Redirect to 'redirect.onAuthOnly' if user is authenticated
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  colorMode: {
    preference: "light",
  },
});
