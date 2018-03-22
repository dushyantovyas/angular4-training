import { NgModule } from '@angular/core';
import { MatSnackBarModule, MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatSnackBarModule
    ],
    exports: [
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatSnackBarModule
    ]

})

export class MaterialModule {

}
