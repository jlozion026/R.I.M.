export  const truncateString = (word: string, maxLength: number): string => {
    if (word.length > maxLength) {
      return word.substring(0, maxLength) + "...";
    }
    return word
  }
