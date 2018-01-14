import { City } from 'src/common/city'

export enum SearchItemType {
    Hint,
    Location,
    Error,
}

export abstract class SearchItem {
    constructor(public type: SearchItemType, public key: any) { }
}
export class HintSearchItem extends SearchItem {
    constructor(public text: string) {
        super(SearchItemType.Hint, text);
    }
}
export class LocationSearchItem extends SearchItem {
    constructor(public location: City) {
        super(SearchItemType.Location, location.id);
    }
}
export class ErrorSearchItem extends SearchItem {
    constructor(public text: string) {
        super(SearchItemType.Error, text);
    }
}
