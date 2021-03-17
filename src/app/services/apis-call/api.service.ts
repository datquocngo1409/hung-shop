import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class API {
    public token: String;

    constructor(private http: HttpClient) {

    }

    getAllUser() {
        return this.http.get(environment.apiUrl + `users`, {});
    }

    getStudentById(id) {
        return this.http.get(environment.apiUrl + `users/` + id, {});
    }

    signup(value: any) {
        return this.http.post(environment.apiUrl + `users`, value);
    }

    updateUser(id, value: any) {
        return this.http.patch(environment.apiUrl + `users/` + id, value);
    }
}
