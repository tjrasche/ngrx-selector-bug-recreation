import {Injectable} from "@angular/core";
import {createEffect} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {fooEntitySelectors} from "../selectors";
import {tap} from "rxjs";

@Injectable()
export class AppEffects {
  constructor(private store: Store) {
  }

  selectorEffect$ = createEffect(() => {
      return this.store.select(fooEntitySelectors).pipe(
        tap(selectedStuff => console.log(selectedStuff))
      );
  }, {dispatch: false})
}
