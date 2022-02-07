import dayjs from 'dayjs';

function isSameOrBefore(date, otherDate) {
    const dateFormats = ['YYYY-MM-DD', 'DD.MM.YYYY'];
    const dateInQuestion = dayjs(date, dateFormats).utc(true);
    const formattedOtherDate = dayjs(otherDate, dateFormats).utc(true);
    return dateInQuestion.isBefore(formattedOtherDate) || dateInQuestion.isSame(formattedOtherDate);
}


export default isSameOrBefore;
