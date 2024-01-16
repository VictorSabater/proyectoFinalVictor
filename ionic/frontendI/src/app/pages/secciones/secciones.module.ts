import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeccionesPageRoutingModule } from './secciones-routing.module';

import { SeccionesPage } from './secciones.page';
import {ComponentsModule} from "../../components/components.module";
import {TabsPageModule} from "../tabs/tabs.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeccionesPageRoutingModule,
    ComponentsModule,
    TabsPageModule
  ],
  declarations: [SeccionesPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SeccionesPageModule {}
