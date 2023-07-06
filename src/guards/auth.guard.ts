import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    // Lógica para verificar la autenticación o los permisos del usuario
    // Retorna true si el usuario tiene acceso, o false si no lo tiene
    return true;
  }
}