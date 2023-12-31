const formatTimeToString = (date) => {
    const hours = date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`;
    const minutes = date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`;
    return `${hours}:${minutes}`;
  };
  
export default formatTimeToString;