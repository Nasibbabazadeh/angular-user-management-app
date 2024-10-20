import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root',
})
export class PaginationService {
    private _currentPage: number = 1
    constructor() {}

    getCurrentPage(): number {
        return this._currentPage
    }

    setCurrentPage(page: number): void {
        this._currentPage = page
    }

    getItemsPerPage(): number {
        return this._currentPage
    }

    setItemsPerPage(itemsPerPage: number): void {
        this._currentPage = itemsPerPage
    }
}
