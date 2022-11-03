import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDetailsComponentComponent } from './article-details-component.component';

describe('ArticleDetailsComponentComponent', () => {
  let component: ArticleDetailsComponentComponent;
  let fixture: ComponentFixture<ArticleDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleDetailsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
