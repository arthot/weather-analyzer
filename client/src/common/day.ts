export class Day {
    constructor(
        public date: Date,
        public temperature: number,
        public cloudiness: number,
        public fallout: boolean,
        public chance: number,
        public cityId: number
    ) { }
}
