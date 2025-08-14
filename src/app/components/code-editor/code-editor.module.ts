import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeEditorComponent } from './code-editor.component';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        CodeEditorComponent
    ],
    exports: [
        CodeEditorComponent
    ]
})
export class CodeEditorModule { }