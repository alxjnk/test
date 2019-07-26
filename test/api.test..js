let chai = require('chai');
let should = chai.should();
let expect = chai.expect;
var FormData = require('form-data');
let axios = require('../axios');
let json =  require('../mocks/mocks.json')

describe('API TESTING', () => {
    describe('API CALLS', () => {
        it('/auth/login/index.php should return User info', done => {
            let formData = new FormData();
            formData.append("login", json.login);
            formData.append("password", json.password);
            axios.post("/auth/login/index.php", formData, {
                headers: {
                "Content-Type": "multipart/form-data"
                }
            })
            .then(res => {
                res.status.should.be.equal(200);
                expect(res.data).to.have.own.property('result_message_id');
                done();
            })
            .catch(err => console.log(err))
        })
        // it('/auth/login/index.php should return User info', done => {
        //     let formData = new FormData();
        //     formData.append("login", 'biotest');
        //     formData.append("password", 'a522fadc6c79e1b23b471f06cd3be773d2620a40');
        //     axios.post("/auth/login/index.php", formData, {
        //         headers: {
        //         "Content-Type": "multipart/form-data"
        //         }
        //     })
        //     .then(res => {
        //         res.status.should.be.equal(200);
        //         console.log(res.data)
        //         done();
        //     })
        // })
    })
});