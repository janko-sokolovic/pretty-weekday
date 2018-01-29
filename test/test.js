'use strict'

var expect = require('chai').expect
var PrettyWeekday = require('../index')

describe('toPrettyDay', function () {

    describe('happy path', function () {
        it('should return Sunday when 0 is provided', function () {
            expect(PrettyWeekday.toPrettyDay(0)).to.deep.equal({ name: "Sunday", short: "Sun" })
        })

        it('should return Monday when 1 is provided', function () {
            expect(PrettyWeekday.toPrettyDay(1)).to.deep.equal({ name: "Monday", short: "Mon" })
        })

        it('should return Tuesday when 2 is provided', function () {
            expect(PrettyWeekday.toPrettyDay(2)).to.deep.equal({ name: "Tuesday", short: "Tue" })
        })

        it('should return Wednesday when 3 is provided', function () {
            expect(PrettyWeekday.toPrettyDay(3)).to.deep.equal({ name: "Wednesday", short: "Wed" })
        })

        it('should return Thursday when 0 is provided', function () {
            expect(PrettyWeekday.toPrettyDay(4)).to.deep.equal({ name: "Thursday", short: "Thu" })
        })

        it('should return Friday when 0 is provided', function () {
            expect(PrettyWeekday.toPrettyDay(5)).to.deep.equal({ name: "Friday", short: "Fri" })
        })

        it('should return Saturday when 0 is provided', function () {
            expect(PrettyWeekday.toPrettyDay(6)).to.deep.equal({ name: "Saturday", short: "Sat" })
        })
    })

    describe('wrong param', function () {
        it('should throw invalid format error when -1 provided', function () {
            expect(PrettyWeekday.toPrettyDay.bind(PrettyWeekday, '-1')).to.throw("Invalid day format. Please provide an integer value between 0 (Sunday) - 6 (Saturday)")
        })

        it('should throw invalid format error when 8.1 provided', function () {
            expect(PrettyWeekday.toPrettyDay.bind(PrettyWeekday, '8.1')).to.throw("Invalid day format. Please provide an integer value between 0 (Sunday) - 6 (Saturday)")
        })

        it('should throw invalid format error when string provided', function () {
            expect(PrettyWeekday.toPrettyDay.bind(PrettyWeekday, 'hello world')).to.throw("Invalid day format. Please provide an integer value between 0 (Sunday) - 6 (Saturday)")
        })

        it('should throw invalid format error when boolean provided', function () {
            expect(PrettyWeekday.toPrettyDay.bind(PrettyWeekday, true)).to.throw("Invalid day format. Please provide an integer value between 0 (Sunday) - 6 (Saturday)")
        })

        it('should throw invalid format error when object provided', function () {
            expect(PrettyWeekday.toPrettyDay.bind(PrettyWeekday, { name: 'Neo' })).to.throw("Invalid day format. Please provide an integer value between 0 (Sunday) - 6 (Saturday)")
        })
    })

})