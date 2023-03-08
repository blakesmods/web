import dayjs from "dayjs";
import numeral from "numeral";

function formatDate(date, format) {
  return dayjs(date).format(format);
}

function formatNumber(number, format) {
  return numeral(number).format(format);
}

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide("formatDate", formatDate);
  nuxtApp.provide("formatNumber", formatNumber);

  nuxtApp.vueApp.mixin({
    data() {
      return {
        isDev: process.env.NODE_ENV === "development"
      };
    },
    methods: {
      formatDate,
      formatNumber
    }
  });
});
