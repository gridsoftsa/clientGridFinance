import type { UseFetchOptions } from "#app";

export function useApiFetch<T>(path: string, options: UseFetchOptions<T> = {}) {
  let headers: any = {};
  const config = useRuntimeConfig();

  return useFetch(`${config.public.apiBase}${path}`, {
    credentials: "include",
    watch: false,
    ...options,
    headers: {
      ...options?.headers,
    },
  });
}
