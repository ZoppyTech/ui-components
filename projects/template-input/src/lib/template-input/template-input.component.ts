import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ToastService } from '@ZoppyTech/toast';
import { TemplateInputUtil } from './template-input.util';

@Component({
    selector: 'ps-template-input',
    templateUrl: './template-input.component.html',
    styleUrls: ['./template-input.component.scss']
})
export class TemplateInputComponent implements OnInit {
    @Input() public ngModel: any = '';
    @Input() public disabled: boolean = false;
    @Input() public placeholder: string = '';
    @Input() public type: InputType = 'text';

    @Output() public ngModelChange = new EventEmitter<any>();
    @Output() public onFocus = new EventEmitter();
    @Output() public onBlur = new EventEmitter();

    @ViewChild('divEditable') public declare divEditableRef: ElementRef;

    public focus: boolean = false;
    public hover: boolean = false;
    public open: boolean = false;
    public openIcon: boolean = false;
    public bold: boolean = false;
    public italic: boolean = false;
    public strikeThrough: boolean = false;
    public tabSelected: number = 0;
    public caretPosition: number = 0;

    public constructor(private readonly toastService: ToastService) {}
    public ngOnInit(): void {
        setTimeout(() => {
            if (this.divEditable) {
                this.divEditable.innerText = this.ngModel;

                this.divEditable.addEventListener('click', (e: any) => {
                    this.setCaretPosition();
                });
                this.divEditable.addEventListener('keydown', (e: any) => {
                    this.setCaretPosition();
                });
            }
        });
    }

    public setCaretPosition(): void {
        setTimeout(() => {
            this.caretPosition = TemplateInputUtil.getCaretPosition(this.divEditable)
                ? (TemplateInputUtil.getCaretPosition(this.divEditable) as any)
                : 0;
        });
    }

    public emojis: Array<string> = [
        '🙂',
        '😀',
        '😃',
        '😁',
        '😅',
        '😂',
        '🙃',
        '😉',
        '😊',
        '😇',
        '😎',
        '🤓',
        '🧐',
        '🥳',
        '🥰',
        '😍',
        '🤩',
        '😘',
        '😗',
        '😙',
        '😋',
        '😛',
        '😜',
        '🤪',
        '😝',
        '🤑',
        '🤗',
        '🤭',
        '🤫',
        '🤔',
        '😐',
        '🤐',
        '🤨',
        '🤒',
        '🤕',
        '🤢',
        '🥵',
        '🥶',
        '🥴',
        '😵',
        '🤯',
        '😕',
        '😟',
        '🙁',
        '😮',
        '😯',
        '😲',
        '😳',
        '🥺',
        '😦',
        '😧',
        '😨',
        '😰',
        '😥',
        '😢',
        '😭',
        '😱',
        '😖',
        '😣',
        '😞',
        '😓',
        '😩',
        '😫',
        '🥱',
        '😤',
        '😡',
        '😠',
        '🤬',
        '😈',
        '👿',
        '💀',
        '☠',
        '💩',
        '🤡',
        '👹',
        '👺',
        '👻',
        '👽',
        '👾',
        '🤖',
        '💋',
        '💌',
        '💘',
        '💝',
        '💖',
        '💗',
        '💓',
        '💞',
        '💕',
        '💟',
        '❣',
        '💔',
        '❤️‍🔥',
        '❤️‍🩹',
        '❤',
        '🧡',
        '💛',
        '💚',
        '💙',
        '💜',
        '🤎',
        '🖤',
        '🤍',
        '💯',
        '💢',
        '💥',
        '💫',
        '💦',
        '💨',
        '🕳',
        '💣',
        '💬',
        '👁️‍🗨️',
        '🗨',
        '🗯',
        '💭',
        '💤',
        '👋',
        '🤚',
        '🖐',
        '✋',
        '🖖',
        '👌',
        '🤌',
        '🤏',
        '✌',
        '🤞',
        '🤟',
        '🤘',
        '🤙',
        '👈',
        '👉',
        '👆',
        '👇',
        '🖕',
        '☝',
        '🫵',
        '👍',
        '👎',
        '✊',
        '👊',
        '🤛',
        '🤜',
        '👏',
        '🙌',
        '👐',
        '🤲',
        '🤝',
        '🙏',
        '✍',
        '💅',
        '🤳',
        '💪',
        '🦾',
        '🦵',
        '🦿',
        '🦶',
        '👂',
        '🦻',
        '👃',
        '🧠',
        '👣',
        '🫀',
        '🫁',
        '🦷',
        '🦴',
        '👀',
        '👁',
        '👅',
        '👄'
    ];

    public tabs: Array<Tab> = [
        {
            label: 'Cliente',
            icon: 'icon-face'
        },
        {
            label: 'Giftback',
            icon: 'icon-giftback'
        },
        {
            label: 'NPS',
            icon: 'icon-mood'
        },
        {
            label: 'Empresas',
            icon: 'icon-corporate_fare'
        }
    ];

    public parameters: TemplateParameter[] = [
        {
            label: 'Primeiro Nome',
            value: '{{client_first_name}}',
            tab: 0
        },
        {
            label: 'Último Nome',
            value: '{{client_last_name}}',
            tab: 0
        },
        {
            label: 'Idade',
            value: '{{age}}',
            tab: 0
        },
        {
            label: 'Dia do Aniversário',
            value: '{{birthday_day}}',
            tab: 0
        },
        {
            label: 'Mês do Aniversário',
            value: '{{birthday_month}}',
            tab: 0
        },
        {
            label: 'Data da Última Compra',
            value: '{{last_purchase_date}}',
            tab: 0
        },
        {
            label: 'Lista dos Produtos da Última Compra',
            value: '{{product_list}}',
            tab: 0
        },

        {
            label: 'Código do Giftback',
            value: '{{giftback_code}}',
            tab: 1
        },
        {
            label: 'Valor do Giftback',
            value: '{{giftback_amount}}',
            tab: 1
        },
        {
            label: 'Data de Expiração do Giftback',
            value: '{{giftback_expiry_date}}',
            tab: 1
        },
        {
            label: 'Valor Mínimo da compra do Giftback',
            value: '{{giftback_minimum_purchase_value}}',
            tab: 1
        },
        {
            label: 'Valor Percentual do Giftback',
            value: '{{giftback_percent_value}}',
            tab: 1
        },

        {
            label: 'Link do NPS',
            value: '{{nps_link}}',
            tab: 2
        },
        {
            label: 'NPS de Produto',
            value: '{{nps_product_rating}}',
            tab: 2
        },
        {
            label: 'NPS Geral',
            value: '{{nps_rating}}',
            tab: 2
        },
        {
            label: 'NPS de Serviço',
            value: '{{nps_service_rating}}',
            tab: 2
        },

        {
            label: 'Nome da Empresa',
            value: '{{company_name}}',
            tab: 3
        },
        {
            label: 'Nome do Vendedor Responsável',
            value: '{{seller_name}}',
            tab: 3
        },
        {
            label: 'Link da sua Loja Virtual',
            value: '{{store_url}}',
            tab: 3
        }
    ];

    public onInputBlur() {
        if (this.focus) {
            this.onBlur.emit();
            this.focus = false;
        }
    }

    public onInputFocus() {
        if (!this.focus) {
            this.onFocus.emit();
            this.focus = true;
        }
        this.setCaretPosition();
    }

    public get divEditable() {
        return this.divEditableRef?.nativeElement;
    }

    public onModelChange(event: any): void {
        if (this.disabled) return;
        this.ngModel = this.divEditable.innerText;
        this.ngModelChange.emit(this.ngModel);
    }

    public getCaretPosition() {
        const sel: any = document.getSelection();
        sel.modify('extend', 'backward', 'paragraphboundary');
        var pos = sel.toString().length;
        if (sel.anchorNode != undefined) sel.collapseToEnd();
        return pos;
    }

    public toggleOpen(): void {
        if (this.disabled) return;
        this.open = !this.open;
    }

    public toggleOpenEmoji(): void {
        if (this.disabled) return;
        this.openIcon = !this.openIcon;
    }

    public clickBg(): void {
        if (this.hover) return;
        this.open = false;
    }

    public clickBgIcon(): void {
        if (this.hover) return;
        this.openIcon = false;
    }

    public addParameter(parameter: TemplateParameter): void {
        this.divEditable.innerText =
            this.divEditable.innerText.substring(0, this.caretPosition) +
            parameter.value +
            this.divEditable.innerText.substring(this.caretPosition, this.divEditable.innerText.length - 1);

        this.ngModel = this.divEditable.innerText;
        this.ngModelChange.emit(this.ngModel);
        this.open = false;
    }

    public addEmoji(emoji: string): void {
        if (!this.focus) TemplateInputUtil.setCurrentCursorPosition(this.divEditable);
        TemplateInputUtil.pasteHtmlAtCaret(emoji);

        this.ngModel = this.divEditable.innerText;
        this.ngModelChange.emit(this.ngModel);
        this.openIcon = false;
    }

    public toggleBold(): void {
        if (!this.focus) TemplateInputUtil.setCurrentCursorPosition(this.divEditable);
        TemplateInputUtil.pasteHtmlAtCaret('*');

        this.bold = !this.bold;
        this.ngModel = this.divEditable.innerText;
        this.ngModelChange.emit(this.ngModel);
    }

    public toggleItalic(): void {
        if (!this.focus) TemplateInputUtil.setCurrentCursorPosition(this.divEditable);
        TemplateInputUtil.pasteHtmlAtCaret('_');

        this.italic = !this.italic;
        this.ngModel = this.divEditable.innerText;
        this.ngModelChange.emit(this.ngModel);
    }

    public toggleLineThrough(): void {
        if (!this.focus) TemplateInputUtil.setCurrentCursorPosition(this.divEditable);
        TemplateInputUtil.pasteHtmlAtCaret('-');

        this.strikeThrough = !this.strikeThrough;
        this.ngModel = this.divEditable.innerText;
        this.ngModelChange.emit(this.ngModel);
    }
}

interface Tab {
    label: string;
    icon: string;
}

interface TemplateParameter {
    label: string;
    value: string;
    tab: number;
}

type Style = 'bold' | 'italic' | 'line-through';
type InputType = 'text' | 'header';
