export class City {
    constructor(
        public id: number,
        public lang: string,
        public country: {
            code: string,
            name: string
        },
        public kind: string,
        public district: string,
        public name: string,
        public subDistrict: string
    ) { }
}
