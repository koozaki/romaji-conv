/**
 * マッピングオブジェクトのkeyとvalueを入れ替える関数
 *
 * @param   object  mapObject - マッピングオブジェクト
 * @return  object  - value:key になったマッピングオブジェクト
 */
const reverseMap = mapObject => {
  const reversedMapObject = {};

  Object.keys(mapObject).forEach(_key => {
    const key = mapObject[_key];
    const value = _key;
    reversedMapObject[key] = value;
  });

  return reversedMapObject;
};

module.exports = reverseMap;
