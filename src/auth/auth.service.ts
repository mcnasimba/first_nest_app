import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {

    signin() {
        return { msg: 'I have Signed In' }
    }

    signUp() {
        return { msg: 'I have Signed Up' }
    }

}