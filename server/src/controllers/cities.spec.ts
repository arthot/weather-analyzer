import * as chai from 'chai'
import { expect } from 'chai'
import chaiHttp = require('chai-http')
import { server } from 'src/server'
import * as Service from 'src/store/city/service'
import { CityModel } from 'src/store/city/city'

chai.use(chaiHttp);

const ROOT_URL = '/api/cities';
const SEARCH_URL = '/search'

let agent: ChaiHttp.Agent;

describe(ROOT_URL, () => {

    before(() => {
        agent = chai.request.agent(server);
    })

    it(`${SEARCH_URL} should validate lang`, async () => {
        return agent
            .get(`${ROOT_URL}${SEARCH_URL}/0/0`)
            .send({})
            .then(() => new Error('should return http error'))
            .catch(err => {
                const { errors } = err.response.body;
                expect(errors).has.property('lang');
            })
    })

    it(`${SEARCH_URL} should validate query`, async () => {
        return agent
            .get(`${ROOT_URL}${SEARCH_URL}/en/0`)
            .send({})
            .then(() => new Error('should return http error'))
            .catch(err => {
                const { errors } = err.response.body;
                expect(errors).has.property('query');
            })
    })

    it(`${SEARCH_URL} should return empty`, async () => {
        return agent
            .get(`${ROOT_URL}${SEARCH_URL}/en/${Date.now()}`)
            .send({})
            .then(res => {
                expect(res.body).is.an('array');
                expect(res.body.length).eq(0);
            })
    })

    it(`${SEARCH_URL} should return values`, async () => {
        const cityId = Date.now();
        const query = 'query ' + cityId;
        const lang = 'en';

        await Service.cache(
            { id: undefined, query, lang, date: Date.now() },
            [{ id: cityId, lang, name: 'b', country: { code: '', name: '' }, district: '', kind: 'T', subDistinct: '' }]
        );

        return agent
            .get(`${ROOT_URL}${SEARCH_URL}/${lang}/${query}`)
            .send({})
            .then(res => {
                expect(res.body).is.an('array');
                expect(res.body.length).eq(1);
                expect(res.body[0].id).eq(cityId);
            })
    })

    it(`/:id should return values`, async () => {
        const cityId = Date.now();
        const lang = 'en';
        const city = { id: cityId, lang, name: 'b', country: { code: '', name: '' }, district: '', kind: 'T', subDistinct: '' };

        await CityModel.query().insert(city);

        return agent
            .get(`${ROOT_URL}/${lang}/${cityId}`)
            .send({})
            .then(res => {
                expect(res.body).deep.eq(city);
            })
    })

    after(() => {
        server.close();
    })
})
