import { Routes } from '@angular/router';
import { ComponentCompositionComponent } from './components/component-composition/component-composition.component';

export const routes: Routes = [
    {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home'
    },
    {
        path: 'component-composition',
        component: ComponentCompositionComponent
    }
];
