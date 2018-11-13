/* eslint-env node, mocha */
const expect = require('chai').expect;
const sinon = require('sinon');
const { BusinessEntity } = require('../src');

/**
 * This test entity is used to see if the 'Other' parameter is spread in the
 * constructor parameters
 * @extends BusinessEntity
 */
class TestEntity extends BusinessEntity {
    constructor({ id, broker, otherProp }) {
        super({ id, broker });
        this.otherProp = otherProp;
    }
}

describe('BusinessEntity', function () {
    describe('#spawn', function () {
        it('Should assign broker to the entity instance', function () {
            // Arrange
            const broker = sinon.stub();
            const parentEntity = new BusinessEntity({ broker });
            const fakeId = '1111-1111-1111-1111';
            // Act
            const child = parentEntity.spawn(BusinessEntity, fakeId);
            // Assert
            expect(child).to.have.property('broker').and.equal(broker);
            expect(child).to.have.property('id').and.equal(fakeId);
        });
        it('Should assign passed "other" properties', function () {
            // Arrange
            const broker = sinon.stub();
            const parentEntity = new BusinessEntity({ broker });
            const otherProp = '1111-1111-1111-1111';
            // Act
            const child = parentEntity.spawn(TestEntity, { otherProp });
            // Assert
            expect(child).to.have.property('otherProp').and.equal(otherProp);
        });
    });
});
