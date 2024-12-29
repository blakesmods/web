import dayjs from "dayjs";
import numeral from "numeral";

export const formatDate = (date: any, format: string) => {
  return dayjs(date).format(format);
};

export const formatNumber = (number: number, format: string) => {
  return numeral(number).format(format);
};
