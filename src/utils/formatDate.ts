const formatDate = (date: Date): string => {
  const dateOnly = date.toString().split('T')[0];
  const newDate = new Date(dateOnly);
  return Intl.DateTimeFormat('pt-BR').format(newDate);
};

export default formatDate;
