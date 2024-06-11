import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class Service {

    private serviceItems = new BehaviorSubject<any[]>([]);
    serviceItems$ = this.serviceItems.asObservable();
    checked :boolean = false;

    addService(item: any) {
        const serviceItems = this.serviceItems.value;
        item.push(this.checked);
        serviceItems.push(item);
        this.serviceItems.next(serviceItems);
    }
}
