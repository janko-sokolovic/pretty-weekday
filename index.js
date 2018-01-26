'use strict'

var DAYS_MAP = {
    0: { name: "Sunday", short: "Sun" },
    1: { name: "Monday", short: "Mon" },
    2: { name: "Tuesday", short: "Tue" },
    3: { name: "Wednesday", short: "Wed" },
    4: { name: "Thursday", short: "Thu" },
    5: { name: "Friday", short: "Fri" },
    6: { name: "Saturday", short: "Sat" }
}

function toPrettyDay(day) {
    var valid = Number.isInteger(day) && day >= 0 && day <= 6
    if (!valid)
        throw new Error("Day format is not provided. Provide an integer value between 0 (Sunday) - 6 (Saturday)");

    return DAYS_MAP[day];
}

module.exports = toPrettyDay;