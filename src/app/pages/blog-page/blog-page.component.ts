import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { TitleService } from '../../shared/title/title.service'
import { Page } from '../page'

@Component({
    selector: 'cmp-blog-page',
    templateUrl: './blog-page.component.html',
    styleUrls: ['./blog-page.component.scss'],
})
export class BlogPageComponent extends Page implements OnDestroy {
    public constructor(
        protected route: ActivatedRoute,
        protected translateService: TranslateService,
        protected titleService: TitleService,
    ) {
        super(route, translateService, titleService)
    }

    public ngOnDestroy(): void {
        this.alive = false
    }
}
