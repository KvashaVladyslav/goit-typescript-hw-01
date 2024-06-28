enum DayOfWeek {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
}


const isWeekend = (day: DayOfWeek): boolean => {
    return day === DayOfWeek.SATURDAY || day === DayOfWeek.SUNDAY
}

console.log(isWeekend(5));