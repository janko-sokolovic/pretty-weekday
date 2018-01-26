'use strict'

var expect = require('chai').expect
var toPrettyDay = require('../index')

describe('toPrettyDay', function () {
    it('should return Sunday when 0 is provided', function () {
        expect(toPrettyDay(0)).to.deep.equal({ name: "Sunday", short: "Sun" })
    })

    it('should return Monday when 1 is provided', function () {
        expect(toPrettyDay(1)).to.deep.equal({ name: "Monday", short: "Mon" })
    })

    it('should return Tuesday when 2 is provided', function () {
        expect(toPrettyDay(2)).to.deep.equal({ name: "Tuesday", short: "Tue" })
    })

    it('should return Wednesday when 3 is provided', function () {
        expect(toPrettyDay(3)).to.deep.equal({ name: "Wednesday", short: "Wed" })
    })

    it('should return Thursday when 0 is provided', function () {
        expect(toPrettyDay(4)).to.deep.equal({ name: "Thursday", short: "Thu" })
    })

    it('should return Friday when 0 is provided', function () {
        expect(toPrettyDay(5)).to.deep.equal({ name: "Friday", short: "Fri" })
    })

    it('should return Saturday when 0 is provided', function () {
        expect(toPrettyDay(6)).to.deep.equal({ name: "Saturday", short: "Sat" })
    })
})