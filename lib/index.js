const map = require('./map');

/**
 * romajiConv
 *
 * @param   string romaji   - ローマ字
 * @return  string hiragana - ひらがな
 */
const romajiConv = romaji => {
  const hiragana = Object.keys(map).reduce((romajiHiragana, pattern) => {
    const replacement = map[pattern];
    const regex = new RegExp(pattern, 'gi');
    return romajiHiragana.replace(regex, replacement);
  }, romaji);

  return hiragana;
};

module.exports = romajiConv;
