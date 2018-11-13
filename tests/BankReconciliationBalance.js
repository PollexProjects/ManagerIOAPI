/* eslint-env node, mocha */
const expect = require('chai').expect;
const sinon = require('sinon');
const { BankReconciliationBalance, BankAccount, ManagerBroker } = require('../src');

describe('Entity BankReconciliationBalance', function() {
    // Setup mock broker
    before(function() {
        // Set up variables
        this.broker = new ManagerBroker();
        this.businessId = '0000-0000-0000-0000';
        this.entityId = '1111-1111-1111-1111';
        this.accountId = '2222-2222-2222-2222';
        this.requestPath = `/${this.businessId}/${this.entityId}.json`;
        this.response =
        {
            'Account': this.accountId,
            'Date': '2018-03-24',
            'ClosingBalance': 3487.28,
            'Timestamp': 636722028575233200
        };

        // Setup stubs
        this.broker.getResource = sinon.stub();
        this.broker.getResource.resolves({ data: this.response });
    });

    describe('.account', function() {
        it('should be a BankAccount', function(done) {
            BankReconciliationBalance.Get(this.entityId, this.businessId, this.broker)
                .then(result => {
                    expect(this.broker.getResource.called).to.equal(true);
                    expect(result).to.have.property('account');
                    expect(result.account).to.not.be.undefined;
                    expect(result.account).to.be.instanceof(BankAccount);
                    expect(result.account.id).to.equal(this.accountId);
                    done();
                })
                .catch(done);
        });
    });
});
