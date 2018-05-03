import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from '../../shared/shared.module'
import { SectionModule } from '../section/section.module'
import { HeadlinesModule } from '../headlines/headlines.module'
import { CopyModule } from '../copy/copy.module'
import { PageHeaderComponent } from './page-header.component'

@NgModule({
    imports: [
        CommonModule,
        SharedModule.registerDynamicComponents([PageHeaderComponent]),
        SectionModule,
        HeadlinesModule,
        CopyModule
    ],
    declarations: [PageHeaderComponent],
    exports: [PageHeaderComponent]
})
export class PageHeaderModule {}
