import { Component, Input } from '@angular/core'
import { FormElement } from '../form-element'
import { FValidationMessage } from '../typings'

@Component({
    selector: 'cmp-f-input',
    templateUrl: './f-input.component.html',
    styleUrls: ['./f-input.component.scss']
})
export class FInputComponent extends FormElement {
    @Input() public validation: Array<FValidationMessage> = []

    @Input() public explanation: Array<string> = []
}
