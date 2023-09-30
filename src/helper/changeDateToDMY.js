import dayjs from "dayjs";

export const changeDateToDMY = async (date) => {
  return dayjs(date).format("DD-MM-YY");
};
