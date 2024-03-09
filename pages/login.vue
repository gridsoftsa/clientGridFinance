<script lang="ts" setup>
import type { FormError, FormSubmitEvent } from "#ui/types";
const { login } = useSanctumAuth();

definePageMeta({
  middleware: ["sanctum:guest"],
});

const credentials = reactive({
  email: "test@example.com",
  password: "password",
});

const validate = (credentials: any): FormError[] => {
  const errors = [];
  if (!credentials.email) errors.push({ path: "email", message: "Required" });
  if (!credentials.password)
    errors.push({ path: "password", message: "Required" });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  try {
    await login(credentials);
  } catch (e) {
    const error = useApiError(e);

    if (error.isValidationError) {
      console.log(error.bag);
      return;
    }

    console.error("Request failed not because of a validation", error.code);
  }
}
</script>

<template>
  <UContainer class="flex items-center justify-center h-screen">
    <UCard class="w-full max-w-md">
      <template #header>
        <h1 class="text-2xl font-semibold text-center">Login</h1>
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

        <UFormGroup label="Password" name="password">
          <UInput v-model="credentials.password" type="password" />
        </UFormGroup>

        <UButton type="submit"> Submit </UButton>
      </UForm>
    </UCard>
  </UContainer>
</template>
