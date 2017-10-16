import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from 'typeorm'
import {City} from 'src/common/city'

@Entity('cities')
export class CityItem extends BaseEntity {

    constructor(city: City){
        super();
        this.id = city.id;
        this.lang = city.lang;
        this.name = city.name;
        this.kind = city.kind;
        this.country_code = city.country.code;
        this.country_name = city.country.name;
        this.district = city.district;
        this.subDistinct = city.subDistinct;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 5})
    lang: string;

    @Column()
    country_code: string;

    @Column()
    country_name: string;

    @Column({length: 4})    
    kind: string;

    @Column()    
    district: string;

    @Column()    
    name: string;

    @Column()    
    subDistinct: string

    toCity() {
        return new City(
            this.id,
            this.lang,
            {code: this.country_code, name: this.country_name},
            this.kind,
            this.district,
            this.name,
            this.subDistinct
        )
    }
}