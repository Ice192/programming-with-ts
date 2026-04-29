//Exercise 1 - Day of the Week
function Week (day: number) : string {
    switch (day) {
        case 1:
            return 'This is Monday'
            break;
        case 2:
            return 'This is Tuesday'
            break;
        case 3:
            return 'This is Wednesday'
            break;
        case 4:
            return 'This is Thursday '
            break;
        case 5:
            return 'This is Friday'
            break;
        case 6:
            return 'This is Saturday'
            break;
        case 7:
            return 'This is Sunday'
            break;
        default:
            throw new Error('Input diluar range input 1 - 7')
            break;
    }
}

try {
    console.log(Week(8))
} catch (error) {
    console.log(error)
}