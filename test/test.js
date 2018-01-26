'use strict'

var expect = require('chai').expect
var toPrettyDay = require('../index')

describe('toPrettyDay', function(){
    it('should return Sunday when 0 is provided', function(){
        expect(toPrettyDay(0)).to.equal("Sunday")
    })

    it('should return Monday when 1 is provided', function(){
        expect(toPrettyDay(1)).to.equal("Monday")
    })

    it('should return Tuesday when 2 is provided', function(){
        expect(toPrettyDay(2)).to.equal("Tuesday")
    })

    it('should return Wednesday when 3 is provided', function(){
        expect(toPrettyDay(3)).to.equal("Wednesday")
    })

    it('should return Thursday when 0 is provided', function(){
        expect(toPrettyDay(4)).to.equal("Thursday")
    })

    it('should return Friday when 0 is provided', function(){
        expect(toPrettyDay(5)).to.equal("Friday")
    })

    it('should return Saturday when 0 is provided', function(){
        expect(toPrettyDay(6)).to.equal("Saturday")
    })
})