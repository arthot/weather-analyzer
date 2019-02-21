export const SearchItemType = {
    Hint: 'Hint',
    Location: 'Location',
    Error: 'Error',
}

export class SearchItem {
    constructor(type, key) {
        this.type = type;
        this.key = key;
    }
}

export class HintSearchItem extends SearchItem {
    constructor(text) {
        super(SearchItemType.Hint, text);
        this.text = text;
    }
}

export class LocationSearchItem extends SearchItem {
    constructor(location) {
        super(SearchItemType.Location, location.id);
        this.location = location;
    }
}

export class ErrorSearchItem extends SearchItem {
    constructor(text) {
        super(SearchItemType.Error, text);
        this.text = text;
    }
}
