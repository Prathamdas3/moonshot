import { faker } from "@faker-js/faker";
type DataType = {
  name: string;
  check: boolean;
};

export const data = (() => {
  const data: DataType[] = [];

  for (let i = 0; i <= 100; i++) {
    const name = faker.commerce.product();
    const check = faker.datatype.boolean();
    data.push({ name, check });
  }

  return data;
})();
