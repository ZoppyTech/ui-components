export class TemplateInputUtil {
    public static pasteHtmlAtCaret(html: string) {
        let sel: any, range: any;
        if (window.getSelection) {
            // IE9 and non-IE
            sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                range = sel.getRangeAt(0);
                range.deleteContents();

                // Range.createContextualFragment() would be useful here but is
                // non-standard and not supported in all browsers (IE9, for one)
                let el = document.createElement('div');
                el.innerHTML = html;
                let frag = document.createDocumentFragment(),
                    node,
                    lastNode;
                while ((node = el.firstChild)) {
                    lastNode = frag.appendChild(node);
                }
                range.insertNode(frag);

                // Preserve the selection
                if (lastNode) {
                    range = range.cloneRange();
                    range.setStartAfter(lastNode);
                    range.collapse(true);
                    sel.removeAllRanges();
                    sel.addRange(range);
                }
            }
        }
    }

    public static removeCharacter(text: string, index: number) {
        return text.slice(0, index) + text.slice(index + 1);
    }
}
