import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recipe2Component } from './second_recipe.component';

describe('Recipe2Component', () => {
  let component: Recipe2Component;
  let fixture: ComponentFixture<Recipe2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Recipe2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Recipe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
