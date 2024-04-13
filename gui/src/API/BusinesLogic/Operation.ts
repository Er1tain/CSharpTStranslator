import {Leksem, leksem} from "./Leksem";

export class Operation implements Leksem {

    public readonly value: string;
    public readonly type: string;
    public readonly color;

    constructor(value: string, type: string) {
        this.value = value;
        this.type = type;
        this.color = "gray";
    }


    public getFormatLeksem(): leksem {
        return {
            value: this.value,
            color: this.color
        }
    }

}