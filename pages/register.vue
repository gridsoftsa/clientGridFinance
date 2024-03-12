<script lang="ts" setup>
import type { FormError, FormSubmitEvent } from "#ui/types";
const { login } = useSanctumAuth();

definePageMeta({
  middleware: ["sanctum:guest"],
});

let loading = ref(false);

const user = reactive({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

const validate = (user: any): FormError[] => {
  const errors = [];
  if (!user.name)
    errors.push({ path: "name", message: "El campo Nombre es requerido." });
  if (!user.email)
    errors.push({ path: "email", message: "El campo Email es requerido." });
  if (!user.password)
    errors.push({
      path: "password",
      message: "El campo Contraseña es requerido.",
    });
  if (user.password !== user.password_confirmation)
    errors.push({
      path: "password_confirmation",
      message: "Las contraseñas no coinciden.",
    });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  try {
    loading.value = true;
    await useApiFetch("register", {
      method: "POST",
      body: JSON.stringify(user),
    });
    await login({
      email: user.email,
      password: user.password,
    });
  } catch (e) {
    loading.value = false;
    const error = useApiError(e);

    if (error.isValidationError) {
      console.log(error.bag);
      return;
    }
  }
}
</script>

<template>
  <UContainer class="flex items-center justify-center h-screen">
    <UCard class="w-full max-w-md">
      <template #header>
        <h1 class="text-2xl font-semibold text-center">Registrarse</h1>
      </template>
      <UForm
        :validate="validate"
        :state="user"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormGroup label="Nombre" name="name">
          <UInput v-model="user.name" />
        </UFormGroup>

        <UFormGroup label="Email" name="email">
          <UInput v-model="user.email" />
        </UFormGroup>

        <UFormGroup label="Contraseña" name="password">
          <UInput v-model="user.password" type="password" />
        </UFormGroup>

        <UFormGroup label="Confirmar Contraseña" name="password_confirmation">
          <UInput v-model="user.password_confirmation" type="password" />
        </UFormGroup>

        <UButton
          type="submit"
          icon="i-heroicons-arrow-right"
          :loading="loading"
        >
          Registrarse
        </UButton>
      </UForm>
    </UCard>
  </UContainer>
</template>
