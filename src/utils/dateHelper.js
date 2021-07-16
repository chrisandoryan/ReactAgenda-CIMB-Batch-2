import moment from "moment";

const convertToDate = (dateString) => {
    let dateMoment = moment(dateString);
    return dateMoment.format("DD MMMM YYYY");
}

const convertToTime = (dateString) => {
    let dateMoment = moment(dateString);
    return dateMoment.format("HH:mm");
}

export { convertToDate, convertToTime }