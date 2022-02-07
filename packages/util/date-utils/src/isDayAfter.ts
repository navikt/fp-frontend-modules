import dayjs from 'dayjs';

const isDayAfter = (d1: dayjs.Dayjs, d2: dayjs.Dayjs) => {
    const dayAfterD1 = d1.add(1, 'day').utc(true).startOf('day');
    const d2Day = d2.utc(true).startOf('day');
    return dayAfterD1.isSame(d2Day);
};

export default isDayAfter;
