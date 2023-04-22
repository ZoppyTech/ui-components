export class TemplateInputUtil {
    public static pasteHtmlAtCaret(html: string): void {
        let sel: any;
        let range: any;
        if (window.getSelection) {
            // IE9 and non-IE
            sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                range = sel.getRangeAt(0);
                range.deleteContents();

                let el: any = document.createElement('div');
                el.innerHTML = html;
                let frag: any = document.createDocumentFragment(),
                    node,
                    lastNode;
                while ((node = el.firstChild)) {
                    lastNode = frag.appendChild(node);
                }
                range.insertNode(frag);

                if (lastNode) {
                    range = range.cloneRange();
                    range.setStartAfter(lastNode);
                    range.collapse(true);
                    sel.removeAllRanges();
                    sel.addRange(range);
                }
            }
        } else if (document.getSelection() && document.getSelection()?.type != 'Control') {
            (document as any).getSelection()?.createRange()?.pasteHTML(html);
        }
    }

    public static getCaretPos(divEditable: any) {}

    public static setCurrentCursorPosition(divEditable: any) {
        divEditable.focus();
        document.execCommand('selectAll', false, undefined);
        document.getSelection()?.collapseToEnd();
        console.log(`executou aqui?????`);
    }

    public static removeCharacter(text: string, index: number) {
        return text.slice(0, index) + text.slice(index + 1);
    }
}
