import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup } from '@angular/forms'
import { TranslateService } from '@ngx-translate/core'
import { TitleService } from '../../shared/title/title.service'
import { TrackingService } from '../../shared/tracking/tracking.service'
import { FValidationConfig } from '../../components/form-elements/typings'
import { ContactPageService } from './contact-page.service'
import { Page } from '../page'

@Component({
    selector: 'cmp-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent extends Page implements OnInit, OnDestroy {
    public contactForm: FormGroup

    public validation: FValidationConfig = {
        email: [
            {
                type: 'required',
                message: 'CONTACT_PAGE_FORM_EMAIL_VALIDATION_REQUIRED',
            },
            {
                type: 'email',
                message: 'CONTACT_PAGE_FORM_EMAIL_VALIDATION_EMAIL',
            },
        ],
    }

    public constructor(
        private changeDetectorRef: ChangeDetectorRef,
        private formBuilder: FormBuilder,
        public route: ActivatedRoute,
        public translateService: TranslateService,
        public titleService: TitleService,
        private contactPageService: ContactPageService,
        private trackingService: TrackingService,
    ) {
        super(route, translateService, titleService)
    }

    public ngOnInit(): void {
        this.contactForm = this.formBuilder.group({
            name: null,
            email: null,
            subject: null,
            message: null,
        })
        this.changeDetectorRef.detectChanges()
    }

    public ngOnDestroy(): void {
        this.alive = false
    }

    public get name() {
        return this.contactForm.get('name')
    }

    public get email() {
        return this.contactForm.get('email')
    }

    public get subject() {
        return this.contactForm.get('subject')
    }

    public get message() {
        return this.contactForm.get('message')
    }

    public submit(): void {
        if (!this.contactForm.valid) {
            return
        }

        this.contactPageService.send(this.contactForm.value)
        this.trackingService.track('event', {
            eventCategory: 'contact-form',
            eventAction: 'submit',
        })
        this.reset()
    }

    public reset(): void {
        this.contactForm.reset()
    }
}
