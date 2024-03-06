export const getCurrentDate = () => {
  const options = {
    weekday: "short", // Abbreviated weekday (e.g., "Mon")
    month: "short", // Abbreviated month name (e.g., "Nov")
    day: "numeric", // Numeric day of the month (e.g., "23")
    year: "numeric", // Numeric year (e.g., "2024")
    hour: "numeric", // Numeric hour (e.g., "5")
    minute: "2-digit", // Two-digit minute (e.g., "05")
    hour12: true, // Use 12-hour clock format (e.g., "5:05 pm")
  };

  return new Date().toLocaleString("en-US", options);
};

export const getCurrentHour = () => {
  const options = {
    hour: "numeric", // Numeric hour (e.g., "5")
    hour12: false,
  };

  return new Date().toLocaleString("en-US", options).replace("PM", "");
};
