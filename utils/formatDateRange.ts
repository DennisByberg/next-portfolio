function formatDateRange(fromYear: number, toYear: number | null, isActive: boolean) {
  if (isActive) return `${fromYear} - Active Now`;
  if (fromYear === toYear) return `${fromYear}`;
  return `${fromYear} - ${toYear}`;
}

export default formatDateRange;
