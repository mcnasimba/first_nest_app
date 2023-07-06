import { Controller, Get } from '@nestjs/common';
import { dbConnection } from 'src/database/database.config';

@Controller('users')
export class UserController {
    @Get()
    async getUsers(): Promise<any[]> {
        const query = 'CALL obtenerUsuarios();';
        const [rows] = await dbConnection.promise().query(query);
        dbConnection.end(); 
        return rows as any[];
    }


/*     async function crearUsuario(userName: string, userEmail: string, userPassword: string) {
        const connection = await getConnection();
        await connection.query('CALL crearUsuario(?, ?, ?);', [userName, userEmail, userPassword]);
        connection.end();
      }

      async function asignarRolAUsuario(userId: number, roleId: number) {
        const connection = await getConnection();
        await connection.query('CALL asignarRolAUsuario(?, ?);', [userId, roleId]);
        connection.end();
      } */
}