<script lang="ts" setup>
import type { FormError, FormSubmitEvent } from "#ui/types";
const { login } = useSanctumAuth();
const toast = useToast();
definePageMeta({
  middleware: ["sanctum:guest"],
});

let loading = ref(false);
let errorAuth = ref("");

const credentials = reactive({
  email: "test@example.com",
  password: "password",
});

const validate = (credentials: any): FormError[] => {
  const errors = [];
  if (!credentials.email)
    errors.push({ path: "email", message: "Campo Email es requerido." });
  if (!credentials.password)
    errors.push({
      path: "password",
      message: "Campo contraseña es requerida. ",
    });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  try {
    loading.value = true;
    await login(credentials);
  } catch (e) {
    loading.value = false;
    const error = useApiError(e);

    if (error.isValidationError) {
      console.log(error.bag);
      errorAuth.value = error.bag.email[0];
      return;
    }
  }
}
</script>

<template>
  <UContainer class="flex items-center justify-center h-screen">
    <UCard class="w-full max-w-md">
      <template #header>
        <h1 class="text-2xl font-semibold text-center">Iniciar Sesión</h1>
      </template>
      <UForm
        :validate="validate"
        :state="credentials"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormGroup label="Email" name="email">
          <UInput v-model="credentials.email" />
        </UFormGroup>

        <UFormGroup label="Contraseña" name="password">
          <UInput v-model="credentials.password" type="password" />
        </UFormGroup>

        <UButton
          type="submit"
          icon="i-heroicons-arrow-right"
          :loading="loading"
        >
          Iniciar Sesión
        </UButton>
      </UForm>
      <UAlert
        v-if="errorAuth"
        icon="i-heroicons-command-line"
        color="primary"
        variant="subtle"
        title="Opps! Algo salió mal."
        class="mt-4"
        :description="errorAuth"
      />
    </UCard>
  </UContainer>
</template>
