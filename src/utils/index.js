export const calculateDay = (diaSQL) => {
  let dateObj = new Date(diaSQL);
  let month = dateObj.getUTCMonth() + 1; //months from 1-12
  let day = dateObj.getUTCDate();
  let year = dateObj.getUTCFullYear();
  return `${day}-${month}-${year} ${diaSQL.substr(11, 5)}`;
};