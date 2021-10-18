import dayjs from "dayjs";

export function test() {
  return dayjs().format("DD.MM.YYYY");
}