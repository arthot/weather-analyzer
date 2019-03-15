import * as chai from 'chai'
import { expect } from 'chai'
import chaiHttp = require('chai-http')
import { server } from 'src/server'
import * as Service from 'src/store/days/service'

chai.use(chaiHttp);

const ROOT_URL = '/api/weather/';

let agent: ChaiHttp.Agent;

describe(ROOT_URL, () => {

    before(() => {
        agent = chai.request.agent(server);
    })

    it(`should validate cityId`, async () => {
        return agent
            .get(`${ROOT_URL}/a/1`)
            .send({})
            .then(() => new Error('should return http error'))
            .catch(err => {              
                expect(err.response).to.have.status(400);
                const { errors } = err.response.body;
                expect(errors).has.property('cityId');
            })
    })

    it(`should validate query`, async () => {
        return agent
            .get(`${ROOT_URL}/123/a`)
            .send({})
            .then(() => new Error('should return http error'))
            .catch(err => {
                expect(err.response).to.have.status(400);
                const { errors } = err.response.body;
                expect(errors).has.property('month');
            })
    })

    it(`should return values`, async () => {
        const cityId = Date.now();
        const month = 12;
        const date = new Date(Date.UTC(new Date().getFullYear() + 1, month - 1, 31));

        await Service.save([{ cityId, date: date.toISOString(), chance: 1, cloudiness: 1, fallout: true, temperature: 0 }]);

        return agent
            .get(`${ROOT_URL}/${cityId}/${month}`)
            .send({})
            .then(res => {
                expect(res).to.have.status(200);
                expect(res.body).is.an('object');
                expect(res.body[date.toISOString()].cityId).eq(cityId);
                
            })
    })

    after(() => {
        server.close();
    })
})
