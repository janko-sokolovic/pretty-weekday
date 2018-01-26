var DAYS_TO_STRINGS = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
}

function toPrettyDay(day) {
    if (!Number.isInteger(day)) throw new Error("Day format is not provided. Provide an integer value between 0 (Sunday) - 6 (Saturday)");
    return DAYS_TO_STRINGS[day];
}

module.exports = toPrettyDay;