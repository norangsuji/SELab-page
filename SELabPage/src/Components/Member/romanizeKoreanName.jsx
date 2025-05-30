// 국립국어원 로마자 표기법 기반 로마자 변환 함수 (성과 이름 분리 대응)
const initialMap = {
  ㄱ: "g",
  ㄲ: "kk",
  ㄴ: "n",
  ㄷ: "d",
  ㄸ: "tt",
  ㄹ: "r",
  ㅁ: "m",
  ㅂ: "b",
  ㅃ: "pp",
  ㅅ: "s",
  ㅆ: "ss",
  ㅇ: "",
  ㅈ: "j",
  ㅉ: "jj",
  ㅊ: "ch",
  ㅋ: "k",
  ㅌ: "t",
  ㅍ: "p",
  ㅎ: "h",
};

const medialMap = {
  ㅏ: "a",
  ㅐ: "ae",
  ㅑ: "ya",
  ㅒ: "yae",
  ㅓ: "eo",
  ㅔ: "e",
  ㅕ: "yeo",
  ㅖ: "ye",
  ㅗ: "o",
  ㅘ: "wa",
  ㅙ: "wae",
  ㅚ: "oe",
  ㅛ: "yo",
  ㅜ: "u",
  ㅝ: "wo",
  ㅞ: "we",
  ㅟ: "wi",
  ㅠ: "yu",
  ㅡ: "eu",
  ㅢ: "ui",
  ㅣ: "i",
};

const finalMap = {
  "": "",
  ㄱ: "k",
  ㄲ: "k",
  ㄳ: "k",
  ㄴ: "n",
  ㄵ: "n",
  ㄶ: "n",
  ㄷ: "t",
  ㄹ: "l",
  ㄺ: "k",
  ㄻ: "m",
  ㄼ: "p",
  ㄽ: "l",
  ㄾ: "l",
  ㄿ: "p",
  ㅀ: "l",
  ㅁ: "m",
  ㅂ: "p",
  ㅄ: "p",
  ㅅ: "t",
  ㅆ: "t",
  ㅇ: "ng",
  ㅈ: "t",
  ㅊ: "t",
  ㅋ: "k",
  ㅌ: "t",
  ㅍ: "p",
  ㅎ: "t",
};

function decomposeHangul(syllable) {
  const code = syllable.charCodeAt(0) - 0xac00;
  if (code < 0 || code > 11171) return syllable;

  const initial = Math.floor(code / (21 * 28));
  const medial = Math.floor((code % (21 * 28)) / 28);
  const final = code % 28;

  return [initial, medial, final];
}

const choseongList = Object.keys(initialMap);
const jungseongList = Object.keys(medialMap);
const jongseongList = ["", ...Object.keys(finalMap).slice(1)];

const surnameOverrides = {
  김: "Kim",
  이: "Lee",
  박: "Park",
  정: "Jung",
  천: "Chun",
  홍: "Hong",
  최: "Choi",
  조: "Cho",
  강: "Kang",
  윤: "Yoon",
  임: "Im",
  류: "Ryu",
  문: "Moon",
  백: "Baek",
  남: "Nam",
  오: "Oh",
  서: "Seo",
  신: "Shin",
  한: "Han",
  허: "Heo",
  유: "Yoo",
  곽: "Gwak",
  구: "Koo",
  양: "Yang",
  송: "Song",
  배: "Bae",
  안: "An",
  부: "Boo",
  진: "Jin",
};

export function romanizeKoreanName(name) {
  if (!/^[가-힯]+$/.test(name)) return name;

  const surname = name[0];
  const givenName = name.slice(1);
  let result = surnameOverrides[surname] || "";

  if (!result) {
    const [ci, mi, fi] = decomposeHangul(surname);
    const initial = choseongList[ci];
    const medial = jungseongList[mi];
    const final = jongseongList[fi];
    result = (initialMap[initial] || "") + (medialMap[medial] || "") + (finalMap[final] || "");
    result = result.charAt(0).toUpperCase() + result.slice(1);
  }

  result += " "; // 성과 이름 사이 공백 추가

  for (let i = 0; i < givenName.length; i++) {
    const syllable = givenName[i];
    const [ci, mi, fi] = decomposeHangul(syllable);

    const initial = choseongList[ci];
    const medial = jungseongList[mi];
    const final = jongseongList[fi];

    const initialRom = initialMap[initial] || "";
    const medialRom = medialMap[medial] || "";
    const finalRom = finalMap[final] || "";

    result += initialRom + medialRom + finalRom;
  }

  return result;
}
