import { Controller, Get } from '@nestjs/common';
import { dbConnection } from 'src/database/database.config';

@Controller('users')
export class UserController {
    @Get()
    async getUsers(): Promise<any[]> {
        const query = 'SELECT * FROM users';
        const [rows] = await dbConnection.promise().query(query);
        return rows as any[];
    }
}