export type leksem = {
    value: string,
    color: string
}
export interface Leksem {
    readonly value: string,
    readonly type: string,
    readonly color: string,
    
    getFormatLeksem(): leksem
    
}