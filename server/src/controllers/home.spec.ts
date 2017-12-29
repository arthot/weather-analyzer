import * as chai from 'chai'
import { expect } from 'chai'
import chaiHttp = require('chai-http')
import { server } from 'src/server'
import * as Service from 'src/store/days/service'

chai.use(chaiHttp);

const ROOT_URL = '/';

let agent: ChaiHttp.Agent;

describe(ROOT_URL, () => {

    before(() => {
        agent = chai.request.agent(server);
    })

    it(`should render index page`, async () => {
        return agent
            .get(ROOT_URL)
            .send({})
            .then(res => {
                expect(res.status).eq(200);
                expect(res.text).include('<div id="root"></div>');
            })
    })

    after(() => {
        server.close();
    })
})
