import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndividualPageRoutingModule } from './individual-routing.module';

import { IndividualPage } from './individual.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        IndividualPageRoutingModule,
        ComponentsModule,
    ],
  declarations: [IndividualPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class IndividualPageModule {}
