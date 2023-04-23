import prisma from '../configs/database.connection';

const exampleQuery = async () => {
  return prisma.cars.findMany();
};

export default {
  exampleQuery
};
