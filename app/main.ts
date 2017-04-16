
import { bootstrap } from 'angular2/platform/browser';
import { AppComponent } from './app.component';
import { MediaItemService } from './media.item.service';
import { provide } from 'angular2/core';
import { LOOKUP_LIST, lookupLists } from './providers';


bootstrap(

    AppComponent,
    [MediaItemService, provide(LOOKUP_LIST, { useValue: lookupLists })]

);