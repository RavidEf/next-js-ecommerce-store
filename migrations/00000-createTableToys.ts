import { Sql } from 'postgres';

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE toys (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      first_name varchar(40) NOT NULL,
      image_name varchar(40) NOT NULL,
      toy_description varchar(250) NOT NULL,
      price integer
    )
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE toys `;
}
