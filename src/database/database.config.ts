import { createConnection } from "mysql2"

export const dbConnection = createConnection({
    host: 'localhost',
    user: 'root',
    password: 'SDstudiobyc00..',
    database: 'test',
})