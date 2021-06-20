import { QueryFile } from "pg-promise";
import path from "path";

function sql(filename) {
  const sqlPath = path.join(__dirname, filename);
  return new QueryFile(sqlPath, { minify: true });
}

export const userSQL = {
  newUser: sql("../sql/newUser.sql"),
  getUser: sql("../sql/getUser.sql"),
}

export const animalSQL = {
  getAnimal: sql("../sql/getAnimal.sql"),
}