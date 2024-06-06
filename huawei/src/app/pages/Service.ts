import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class Service {

    private serviceItems = new BehaviorSubject<any[]>([]);
    serviceItems$ = this.serviceItems.asObservable();

    addService(item: any) {
        const serviceItems = this.serviceItems.value;
        serviceItems.push(item);
        this.serviceItems.next(serviceItems);
    }
}
