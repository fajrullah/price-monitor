// import * as moment from 'moment/moment';
import moment from 'moment';

const today = new Date();
// const hourago = new Date(today.getTime() - (1000*60*60));
export const timeNowLocal = moment(today).local().format('YYYY-MM-DD HH:mm:ss');

export const toDateLocal  = (date) => {
    return moment(date).local().format('YYYY-MM-DD')
} 

export const toDateTimeLocal  = (date) => {
    return moment(date).local().format('DD-MM-YYYY HH:mm:ss')
}

export const toDateTimeLocalDB  = (date) => {
    return moment(date).local().format('YYYY-MM-DD HH:mm:ss')
} 