import dayjs from "dayjs";
import numeral from "numeral";

const formatters = {
  formatDate(date: any, format: string) {
    return dayjs(date).format(format);
  },
  formatNumber(number: number, format: string) {
    return numeral(number).format(format);
  }
};

export const useFormatters = () => formatters;
