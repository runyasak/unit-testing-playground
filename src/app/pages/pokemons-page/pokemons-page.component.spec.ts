import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';

import { PokemonsPageComponent } from './pokemons-page.component';

const stubValue = {
  getPokemons$: () => of([{ name: 'hello world', img: 'my img' }]),
};

describe('PokemonsPageComponent', () => {
  let component: PokemonsPageComponent;
  let fixture: ComponentFixture<PokemonsPageComponent>;

  beforeEach(async () => {
    TestBed.overrideProvider(PokemonService, {
      useValue: stubValue,
    });

    await TestBed.configureTestingModule({
      imports: [PokemonsPageComponent, HttpClientTestingModule],
      providers: [PokemonService],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonsPageComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render pokemon', () => {
    expect(fixture.nativeElement.textContent).toMatch(/hello world/i);
  });
});
