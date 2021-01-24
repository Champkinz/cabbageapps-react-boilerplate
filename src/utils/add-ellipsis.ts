export function AddEllipsis(text: string, macCharCount: number) {
    if (text.length > macCharCount) {
        return text.slice(0, macCharCount);
    }
    return text;
}
