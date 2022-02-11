import dayjsWithPluginsAttached from './dayjsWithPluginsAttached';

const ISO_DATE_FORMAT = 'YYYY-MM-DD';
const DDMMYYYY_DATE_FORMAT = 'DD.MM.YYYY';

const today = dayjsWithPluginsAttached.startOf('day');
const tomorrow = today.add(1, 'day').startOf('day');

export default {
    today,
    tomorrow,
    ISO_DATE_FORMAT,
    DDMMYYYY_DATE_FORMAT,
};
