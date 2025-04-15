export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth is 0-based
  const year = date.getFullYear();
  return `${month}.${year}.`;
};