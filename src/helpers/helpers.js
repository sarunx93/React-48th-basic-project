import moment from "moment";

export const formatDate = (dob) => {
  const dateDob = moment(new Date(dob)).format("DD-MMMM-YYYY");
  return dateDob;
};
