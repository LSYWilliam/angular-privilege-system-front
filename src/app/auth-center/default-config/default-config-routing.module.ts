import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultConfigComponent} from "./component/default-config.component";

const routes: Routes = [
    {
        path: '',
        component: DefaultConfigComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
    ]
})
export class DefaultConfigRoutingModule {}
