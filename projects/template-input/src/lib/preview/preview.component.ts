import { Component, Input } from '@angular/core';
import { MessageTemplateUtil, StringUtil } from '@ZoppyTech/utilities';

@Component({
    selector: 'ps-preview',
    templateUrl: './preview.component.html',
    styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {
    @Input() public headerText: string = '';
    @Input() public headerType: string = 'text';
    @Input() public bodyText: string = '';
    @Input() public footerText: string = '';
    @Input() public ctaLabel: string = '';
    @Input() public headerUrl: string = '';

    public processText(text: string): string {
        const variables: string[] = StringUtil.getAllBetween('{{', '}}', text);
        const bolds: string[] = text.match(/\*(.*?)\*/g) ?? [];
        const italics: string[] = text.match(/\_(.*?)\_/g) ?? [];
        const strikethroughs: string[] = text.match(/\-(.*?)\-/g) ?? [];

        for (const bold of bolds) {
            text = text.replace(bold, `<span class="text--bold">${bold.replace('*', '').replace('*', '')}</span>`);
        }
        for (const italic of italics) {
            text = text.replace(italic, `<span class="text--italic">${italic.replace('_', '').replace('_', '')}</span>`);
        }
        for (const strikethrough of strikethroughs) {
            text = text.replace(
                strikethrough,
                `<span class="text--strike-through">${strikethrough.replace('-', '').replace('-', '')}</span>`
            );
        }

        for (const variable of variables) {
            MessageTemplateUtil.validateTemplateParameter(variable)
                ? (text = text.replace(
                      `{{${variable}}}`,
                      `<span class="text--info">{{${MessageTemplateUtil.findFriendlyParameterTextForWhatsapp(variable)}}}</span>`
                  ))
                : (text = text.replace(
                      `{{${variable}}}`,
                      `<span class="text--negative">{{${MessageTemplateUtil.findFriendlyParameterTextForWhatsapp(variable)}}}</span>`
                  ));
        }

        return text;
    }
}
