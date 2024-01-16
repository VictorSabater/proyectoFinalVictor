import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchBarPageRoutingModule } from './search-bar-routing.module';

import { SearchBarPage } from './search-bar.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SearchBarPageRoutingModule,
        ComponentsModule
    ],
  declarations: [SearchBarPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SearchBarPageModule {}
