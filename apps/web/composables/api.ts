import { useFetch, UseFetchOptions } from "#app";
import { Ref } from "@vue/reactivity";
import { useToast } from "primevue/usetoast";

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://api.blakesmods.com";

export const useAPI = async (
  url: string | Ref<string> | (() => string),
  options?: UseFetchOptions<string>
) => {
  const result = await useFetch(url, { baseURL, ...options });

  if (result.error.value) {
    const toast = useToast();

    toast.add({
      severity: "error",
      summary: "An Error has Occurred",
      detail: "Please try again later.",
      life: 5000
    });
  }

  return result;
};
