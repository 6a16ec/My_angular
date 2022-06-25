import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'singleIngredient',
  templateUrl: './singleIngredient.component.html',
  styleUrls: ['./singleIngredient.component.css']
})
export class IngredientComponent {

  @Input() ingredient: string = '';
  @Output() deleteEvent = new EventEmitter();

  deleteIngredient() {
    this.deleteEvent.emit();
  }
}
