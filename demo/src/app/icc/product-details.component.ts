import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from "./Product"

@Component({
    selector: 'st-product-details',
    templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent {
    // input property 
    @Input() product: Product;
    @Input() id: number;

    discounted: boolean = false;

    // event 
    @Output() delete = new EventEmitter<number>();

    deleteProduct() {
        // raise event and pass id as parameter 
        this.delete.emit(this.id);
    }

    showBestPrice() {
        if (!this.discounted) {
            this.product.price = this.product.price * 0.80;
            this.discounted = true;
        }
    }
}