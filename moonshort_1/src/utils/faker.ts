import { faker } from "@faker-js/faker";
type DataType = {
  name: string;
  check: boolean;
  userId: number;
};

export const data = async (userId: number) => {
  const data: DataType[] = [];

  for (let i = 0; i < 100; i++) {
    const name = faker.commerce.product();
    const check = faker.datatype.boolean();
    data.push({ name, check, userId });
  }

  return data;
};

export const otp = (() => {
  const otp: string = faker.string.uuid().slice(0, 8).toLowerCase();
  return otp;
})();
