export const StringFormatter = {
  beautifyWord: word =>
    word.length > 1
      ? word[0].toUpperCase() + word.slice(1)
      : word.toUpperCase(),

  beautifyWords: (words, separator) =>
    words.includes(separator)
      ? words
          .split(separator)
          .map(StringFormatter.beautifyWord)
          .join(" ")
      : StringFormatter.beautifyWord(words)
};
