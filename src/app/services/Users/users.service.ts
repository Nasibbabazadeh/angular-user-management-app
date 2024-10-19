import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { TUser } from '../../models/user.model'
import { GenericHttpService } from '../Generic/generic.service'

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    users: TUser[] = []
    private _endpoint = 'users'

    constructor(private _genericHttp: GenericHttpService) {}

    getAllUsers(): Observable<TUser[]> {
        return this._genericHttp.getMethod<TUser[]>(this._endpoint)
    }
    deleteUserById(id: number): Observable<boolean> {
        return this._genericHttp.deleteMethod(`${this._endpoint}/${id}`)
    }
    addNewUser(userModel: TUser): Observable<TUser> {
        return this._genericHttp.postMethod<TUser>(this._endpoint, userModel)
    }
    updateUserById(id: number, userModel: TUser): Observable<TUser> {
        return this._genericHttp.putMethod<TUser>(
            `${this._endpoint}/${id}`,
            userModel
        )
    }
}
