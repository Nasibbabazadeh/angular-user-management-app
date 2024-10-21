import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { TPost } from '../../models/post.model'
import { GenericHttpService } from '../Generic/generic.service'

@Injectable({
    providedIn: 'root',
})
export class PostService {
    private _endpoint = 'users'
    constructor(
        private _genericHttp: GenericHttpService,
        private _http: HttpClient
    ) {}

    getUserPosts(
        userId: string,
        page: number,
        limit: number
    ): Observable<TPost[]> {
        const url = `${this._genericHttp.baseUrl}/${this._endpoint}/${userId}/posts`
        const params = new HttpParams()
            .set('page', page.toString())
            .set('limit', limit.toString())

        return this._http.get<TPost[]>(url, { params })
    }
    addPost(userId: string, post: TPost): Observable<TPost> {
        return this._genericHttp.postMethod(
            `${this._endpoint}/${userId}/posts`,
            post
        )
    }
    getAllPosts(userId: string): Observable<TPost[]> {
        return this._http.get<TPost[]>(
            `${this._genericHttp.baseUrl}/${this._endpoint}/${userId}/posts`
        )
    }

    updatePost(userId: string, postId: string, post: TPost): Observable<TPost> {
        return this._genericHttp.putMethod<TPost>(
            `${this._endpoint}/${userId}/posts/${postId}`,
            post
        )
    }

    deletePostById(userId: string, postId: string): Observable<TPost> {
        return this._genericHttp.deleteMethod<TPost>(
            `${this._endpoint}/${userId}/posts/${postId}`
        )
    }
}
