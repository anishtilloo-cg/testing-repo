
// const dummayText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

export function chunkingText(text: string, chunkSize: number) {
  const chunks: string[] = [];
  for (let i = 0; i < text.length; i += chunkSize) {
    chunks.push(text.slice(i, i + chunkSize));
  }
  return chunks;
}

export function defaultTextSplitter(text: string, separator = ' ', limit?: number) {
  let splittedTextList: string[] = [];

  if (!separator) {
    separator = ' ';
  }

  let word = '';

  for (let index = 0; index < text.length; index++) {
    if (limit && splittedTextList.length < limit) break;
    const element = text[index];
    word += element;
    if (element === separator) {
      splittedTextList.push(word.trim());
      word = '';
    }
  }
  if (limit && splittedTextList.length < limit && word) {
    splittedTextList.push(word);
  }

  return splittedTextList;
}