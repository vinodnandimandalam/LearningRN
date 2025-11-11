const formatDate = (date: string) => {
  try {
    const dateObject = new Date(date);
    if (isNaN(dateObject.getTime())) {
      return null;
    }
    return dateObject.toISOString().split('T')[0];
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { formatDate };
