import { Component, Input, OnInit } from '@angular/core';
import { Property } from 'src/app/components/utilization/utilization.component';

@Component({
    selector: 'app-page-datepicker',
    templateUrl: './page-datepicker.component.html',
    styleUrls: ['./page-datepicker.component.scss']
})
export class PageDatepickerComponent implements OnInit {
    public properties: Array<Property> = [];
    public batata: any = new Date();
    public constructor() {}

    public ngOnInit(): void {
        this.properties = [
            {
                name: 'ngModel',
                type: 'string',
                definition: 'Two way binding property to bind value',
                defaultValue: ''
            },
            {
                name: 'mask',
                type: 'string',
                definition: 'Mask inserted to input field',
                defaultValue: ''
            },
            {
                name: 'type',
                type: 'string',
                definition: 'Type of the input, can be text, email, number, etc.',
                defaultValue: 'text'
            },
            {
                name: 'rows',
                type: 'number',
                definition: 'Number os rows, if more than one, input becomes a textarea',
                defaultValue: '1'
            },
            {
                name: 'maxCharactersAllowed',
                type: 'number',
                definition: 'Maximum number of characters allowed to value',
                defaultValue: 'null'
            },
            {
                name: 'debounce',
                type: 'number',
                definition: 'Amount of miliseconds to wait until call input callback change, ideal for API´s',
                defaultValue: '0'
            },
            {
                name: 'disabled',
                type: 'boolean',
                definition: 'Disable the input',
                defaultValue: 'false'
            },
            {
                name: 'errors',
                type: 'Array<string>',
                definition: 'add errors to input to make it red and show errors',
                defaultValue: '[]'
            },
            {
                name: 'placeholder',
                type: 'string',
                definition: 'Input placeholder',
                defaultValue: ''
            },
            {
                name: 'icon',
                type: 'string',
                definition: 'show icon on right',
                defaultValue: ''
            },
            {
                name: 'iconColor',
                type: 'string',
                definition: 'change icon color',
                defaultValue: ''
            },
            {
                name: 'showErrors',
                type: 'boolean',
                definition: 'Show array of errors',
                defaultValue: 'false'
            },
            {
                name: 'onFocus',
                type: 'EventEmitter',
                definition: 'Trigger on Focus',
                defaultValue: ''
            },
            {
                name: 'onBlur',
                type: 'EventEmitter',
                definition: 'Trigger on Blur',
                defaultValue: ''
            },
            {
                name: 'ngModelChange',
                type: 'EventEmitter',
                definition: 'Trigger whenever value changes',
                defaultValue: ''
            }
        ];
    }
}
