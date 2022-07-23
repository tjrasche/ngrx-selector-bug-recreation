import {EntitySelectorsFactory} from "@ngrx/data";
import {FOO} from "./entity-metadata";

export const fooEntitySelectors = new EntitySelectorsFactory().createCollectionSelector(FOO);


