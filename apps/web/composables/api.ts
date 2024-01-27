import { useFetch, UseFetchOptions } from "#app";
import { Ref } from "@vue/reactivity";

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:5000"
    : "https://api.blakesmods.com";

export const useAPI = async (
  url: string | Ref<string> | (() => string),
  options?: UseFetchOptions<string>
) => {
  const result = await useFetch(url, { baseURL, ...options });

  if (result.error.value) {
    const toast = useToast();

    toast.add({
      title: "An Error has Occurred",
      description: "Please try again later.",
      icon: "i-heroicons-exclamation-circle"
    });
  }

  return result;
};
