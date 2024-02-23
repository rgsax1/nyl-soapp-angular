import { Routes } from '@angular/router';
import { HomeComponent } from './site/home/home.component';
import { AboutComponent } from './site/about/about.component';
import { FormEquipmentComponent } from './site/equipment/form-equipment/form-equipment.component';
import { ListEquipmentComponent } from './site/equipment/list-equipment/list-equipment.component';
import { LoginComponent } from './site/login/login.component';
import { FormMaintenanceComponent } from './site/maintenance/form-maintenance/form-maintenance.component';
import { FormMaintenanceElectricalComponent } from './site/maintenance/form-maintenance-electrical/form-maintenance-electrical.component';
import { FormMaintenanceMechanicalComponent } from './site/maintenance/form-maintenance-mechanical/form-maintenance-mechanical.component';
import { FormOrderComponent } from './site/order/form-order/form-order.component';
import { ListOrderComponent } from './site/order/list-order/list-order.component';
import { FormSectorComponent } from './site/sector/form-sector/form-sector.component';
import { ListSectorComponent } from './site/sector/list-sector/list-sector.component';
import { FormUserComponent } from './site/user/form-user/form-user.component';
import { ListUserComponent } from './site/user/list-user/list-user.component';

export const routes: Routes = [
    {path:'', component: HomeComponent, pathMatch: 'full'},
    {path:'about', component: AboutComponent, pathMatch: 'full'},
    {path:'form-equipment', component: FormEquipmentComponent, pathMatch: 'full'},
    {path:'list-equipment', component: ListEquipmentComponent, pathMatch: 'full'},
    {path:'login', component: LoginComponent, pathMatch: 'full'},
    {path:'form-maintenance', component: FormMaintenanceComponent, pathMatch: 'full'},
    {path:'form-maintenance-electrical', component: FormMaintenanceElectricalComponent, pathMatch: 'full'},
    {path:'form-maintenance-mechanical', component: FormMaintenanceMechanicalComponent, pathMatch: 'full'},
    {path:'form-order', component: FormOrderComponent, pathMatch: 'full'},
    {path:'list-order', component: ListOrderComponent, pathMatch: 'full'},
    {path:'form-sector', component: FormSectorComponent, pathMatch: 'full'},
    {path:'list-sector', component: ListSectorComponent, pathMatch: 'full'},
    {path:'form-user', component: FormUserComponent, pathMatch: 'full'},
    {path:'list-user', component: ListUserComponent, pathMatch: 'full'},
];
