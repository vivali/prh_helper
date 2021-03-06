import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ManaProjectSharedModule } from '../shared';

import { HOME_ROUTE, HomeComponent } from './';
import { NgAutoCompleteModule } from 'ng-auto-complete/ng-autocomplete.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        ManaProjectSharedModule,
        NgAutoCompleteModule,
        FormsModule,
        RouterModule.forRoot([ HOME_ROUTE ], { useHash: false })
    ],
    declarations: [
        HomeComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ManaProjectHomeModule {}
