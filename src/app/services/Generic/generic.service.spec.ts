import { TestBed } from '@angular/core/testing'

import { GenericHttpService } from './generic.service'

describe('GenericService', () => {
    let service: GenericHttpService

    beforeEach(() => {
        TestBed.configureTestingModule({})
        service = TestBed.inject(GenericHttpService)
    })

    it('should be created', () => {
        expect(service).toBeTruthy()
    })
})
