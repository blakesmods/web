import dayjs from "dayjs";
import numeral from "numeral";

const formatters = {
  formatDate(date, format) {
    return dayjs(date).format(format);
  },
  formatNumber(number, format) {
    return numeral(number).format(format);
  }
};

export const useFormatters = () => formatters;
