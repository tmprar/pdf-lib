"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AFRelationship: () => AFRelationship,
  AcroButtonFlags: () => AcroButtonFlags,
  AcroChoiceFlags: () => AcroChoiceFlags,
  AcroFieldFlags: () => AcroFieldFlags,
  AcroTextFlags: () => AcroTextFlags,
  AnnotationFlags: () => AnnotationFlags,
  AppearanceCharacteristics: () => AppearanceCharacteristics_default,
  BlendMode: () => BlendMode,
  Cache: () => Cache_default,
  CharCodes: () => CharCodes_default,
  ColorTypes: () => ColorTypes,
  CombedTextLayoutError: () => CombedTextLayoutError,
  CorruptPageTreeError: () => CorruptPageTreeError,
  CustomFontEmbedder: () => CustomFontEmbedder_default,
  CustomFontSubsetEmbedder: () => CustomFontSubsetEmbedder_default,
  Duplex: () => Duplex,
  EncryptedPDFError: () => EncryptedPDFError,
  ExceededMaxLengthError: () => ExceededMaxLengthError,
  FieldAlreadyExistsError: () => FieldAlreadyExistsError,
  FieldExistsAsNonTerminalError: () => FieldExistsAsNonTerminalError,
  FileEmbedder: () => FileEmbedder_default,
  FontkitNotRegisteredError: () => FontkitNotRegisteredError,
  ForeignPageError: () => ForeignPageError,
  ImageAlignment: () => ImageAlignment,
  IndexOutOfBoundsError: () => IndexOutOfBoundsError,
  InvalidAcroFieldValueError: () => InvalidAcroFieldValueError,
  InvalidFieldNamePartError: () => InvalidFieldNamePartError,
  InvalidMaxLengthError: () => InvalidMaxLengthError,
  InvalidPDFDateStringError: () => InvalidPDFDateStringError,
  InvalidTargetIndexError: () => InvalidTargetIndexError,
  JpegEmbedder: () => JpegEmbedder_default,
  LineCapStyle: () => LineCapStyle,
  LineJoinStyle: () => LineJoinStyle,
  MethodNotImplementedError: () => MethodNotImplementedError,
  MissingCatalogError: () => MissingCatalogError,
  MissingDAEntryError: () => MissingDAEntryError,
  MissingKeywordError: () => MissingKeywordError,
  MissingOnValueCheckError: () => MissingOnValueCheckError,
  MissingPDFHeaderError: () => MissingPDFHeaderError,
  MissingPageContentsEmbeddingError: () => MissingPageContentsEmbeddingError,
  MissingTfOperatorError: () => MissingTfOperatorError,
  MultiSelectValueError: () => MultiSelectValueError,
  NextByteAssertionError: () => NextByteAssertionError,
  NoSuchFieldError: () => NoSuchFieldError,
  NonFullScreenPageMode: () => NonFullScreenPageMode,
  NumberParsingError: () => NumberParsingError,
  PDFAcroButton: () => PDFAcroButton_default,
  PDFAcroCheckBox: () => PDFAcroCheckBox_default,
  PDFAcroChoice: () => PDFAcroChoice_default,
  PDFAcroComboBox: () => PDFAcroComboBox_default,
  PDFAcroField: () => PDFAcroField_default,
  PDFAcroForm: () => PDFAcroForm_default,
  PDFAcroListBox: () => PDFAcroListBox_default,
  PDFAcroNonTerminal: () => PDFAcroNonTerminal_default,
  PDFAcroPushButton: () => PDFAcroPushButton_default,
  PDFAcroRadioButton: () => PDFAcroRadioButton_default,
  PDFAcroSignature: () => PDFAcroSignature_default,
  PDFAcroTerminal: () => PDFAcroTerminal_default,
  PDFAcroText: () => PDFAcroText_default,
  PDFAnnotation: () => PDFAnnotation_default,
  PDFArray: () => PDFArray_default,
  PDFArrayIsNotRectangleError: () => PDFArrayIsNotRectangleError,
  PDFBool: () => PDFBool_default,
  PDFButton: () => PDFButton,
  PDFCatalog: () => PDFCatalog_default,
  PDFCheckBox: () => PDFCheckBox,
  PDFContentStream: () => PDFContentStream_default,
  PDFContext: () => PDFContext_default,
  PDFCrossRefSection: () => PDFCrossRefSection_default,
  PDFCrossRefStream: () => PDFCrossRefStream_default,
  PDFDict: () => PDFDict_default,
  PDFDocument: () => PDFDocument,
  PDFDropdown: () => PDFDropdown,
  PDFEmbeddedPage: () => PDFEmbeddedPage,
  PDFField: () => PDFField,
  PDFFlateStream: () => PDFFlateStream_default,
  PDFFont: () => PDFFont,
  PDFForm: () => PDFForm,
  PDFHeader: () => PDFHeader_default,
  PDFHexString: () => PDFHexString_default,
  PDFImage: () => PDFImage,
  PDFInvalidObject: () => PDFInvalidObject_default,
  PDFInvalidObjectParsingError: () => PDFInvalidObjectParsingError,
  PDFJavaScript: () => PDFJavaScript,
  PDFName: () => PDFName_default,
  PDFNull: () => PDFNull_default,
  PDFNumber: () => PDFNumber_default,
  PDFObject: () => PDFObject_default,
  PDFObjectCopier: () => PDFObjectCopier_default,
  PDFObjectParser: () => PDFObjectParser_default,
  PDFObjectParsingError: () => PDFObjectParsingError,
  PDFObjectStream: () => PDFObjectStream_default,
  PDFObjectStreamParser: () => PDFObjectStreamParser_default,
  PDFOperator: () => PDFOperator_default,
  PDFOperatorNames: () => PDFOperatorNames_default,
  PDFOptionList: () => PDFOptionList,
  PDFPage: () => PDFPage,
  PDFPageEmbedder: () => PDFPageEmbedder_default,
  PDFPageLeaf: () => PDFPageLeaf_default,
  PDFPageTree: () => PDFPageTree_default,
  PDFParser: () => PDFParser_default,
  PDFParsingError: () => PDFParsingError,
  PDFRadioGroup: () => PDFRadioGroup,
  PDFRawStream: () => PDFRawStream_default,
  PDFRef: () => PDFRef_default,
  PDFSignature: () => PDFSignature,
  PDFStream: () => PDFStream_default,
  PDFStreamParsingError: () => PDFStreamParsingError,
  PDFStreamWriter: () => PDFStreamWriter_default,
  PDFString: () => PDFString_default,
  PDFTextField: () => PDFTextField,
  PDFTrailer: () => PDFTrailer_default,
  PDFTrailerDict: () => PDFTrailerDict_default,
  PDFWidgetAnnotation: () => PDFWidgetAnnotation_default,
  PDFWriter: () => PDFWriter_default,
  PDFXRefStreamParser: () => PDFXRefStreamParser_default,
  PageEmbeddingMismatchedContextError: () => PageEmbeddingMismatchedContextError,
  PageSizes: () => PageSizes,
  ParseSpeeds: () => ParseSpeeds,
  PngEmbedder: () => PngEmbedder_default,
  PrintScaling: () => PrintScaling,
  PrivateConstructorError: () => PrivateConstructorError,
  ReadingDirection: () => ReadingDirection,
  RemovePageFromEmptyDocumentError: () => RemovePageFromEmptyDocumentError,
  ReparseError: () => ReparseError,
  RichTextFieldReadError: () => RichTextFieldReadError,
  RotationTypes: () => RotationTypes,
  StalledParserError: () => StalledParserError,
  StandardFontEmbedder: () => StandardFontEmbedder_default,
  StandardFontValues: () => StandardFontValues,
  StandardFonts: () => StandardFonts,
  TextAlignment: () => TextAlignment,
  TextRenderingMode: () => TextRenderingMode,
  UnbalancedParenthesisError: () => UnbalancedParenthesisError,
  UnexpectedFieldTypeError: () => UnexpectedFieldTypeError,
  UnexpectedObjectTypeError: () => UnexpectedObjectTypeError,
  UnrecognizedStreamTypeError: () => UnrecognizedStreamTypeError,
  UnsupportedEncodingError: () => UnsupportedEncodingError,
  ViewerPreferences: () => ViewerPreferences_default,
  addRandomSuffix: () => addRandomSuffix,
  adjustDimsForRotation: () => adjustDimsForRotation,
  appendBezierCurve: () => appendBezierCurve,
  appendQuadraticCurve: () => appendQuadraticCurve,
  arrayAsString: () => arrayAsString,
  asNumber: () => asNumber,
  asPDFName: () => asPDFName,
  asPDFNumber: () => asPDFNumber,
  assertEachIs: () => assertEachIs,
  assertInteger: () => assertInteger,
  assertIs: () => assertIs,
  assertIsOneOf: () => assertIsOneOf,
  assertIsOneOfOrUndefined: () => assertIsOneOfOrUndefined,
  assertIsSubset: () => assertIsSubset,
  assertMultiple: () => assertMultiple,
  assertOrUndefined: () => assertOrUndefined,
  assertPositive: () => assertPositive,
  assertRange: () => assertRange,
  assertRangeOrUndefined: () => assertRangeOrUndefined,
  backtick: () => backtick,
  beginMarkedContent: () => beginMarkedContent,
  beginText: () => beginText,
  breakTextIntoLines: () => breakTextIntoLines,
  byAscendingId: () => byAscendingId,
  bytesFor: () => bytesFor,
  canBeConvertedToUint8Array: () => canBeConvertedToUint8Array,
  charAtIndex: () => charAtIndex,
  charFromCode: () => charFromCode,
  charFromHexCode: () => charFromHexCode,
  charSplit: () => charSplit,
  cleanText: () => cleanText,
  clip: () => clip,
  clipEvenOdd: () => clipEvenOdd,
  closePath: () => closePath,
  cmyk: () => cmyk,
  colorToComponents: () => colorToComponents,
  componentsToColor: () => componentsToColor,
  concatTransformationMatrix: () => concatTransformationMatrix,
  copyStringIntoBuffer: () => copyStringIntoBuffer,
  createPDFAcroField: () => createPDFAcroField,
  createPDFAcroFields: () => createPDFAcroFields,
  createTypeErrorMsg: () => createTypeErrorMsg,
  createValueErrorMsg: () => createValueErrorMsg,
  decodeFromBase64: () => decodeFromBase64,
  decodeFromBase64DataUri: () => decodeFromBase64DataUri,
  decodePDFRawStream: () => decodePDFRawStream,
  defaultButtonAppearanceProvider: () => defaultButtonAppearanceProvider,
  defaultCheckBoxAppearanceProvider: () => defaultCheckBoxAppearanceProvider,
  defaultDropdownAppearanceProvider: () => defaultDropdownAppearanceProvider,
  defaultOptionListAppearanceProvider: () => defaultOptionListAppearanceProvider,
  defaultRadioGroupAppearanceProvider: () => defaultRadioGroupAppearanceProvider,
  defaultTextFieldAppearanceProvider: () => defaultTextFieldAppearanceProvider,
  degrees: () => degrees,
  degreesToRadians: () => degreesToRadians,
  drawButton: () => drawButton,
  drawCheckBox: () => drawCheckBox,
  drawCheckMark: () => drawCheckMark,
  drawEllipse: () => drawEllipse,
  drawEllipsePath: () => drawEllipsePath,
  drawImage: () => drawImage,
  drawLine: () => drawLine,
  drawLinesOfText: () => drawLinesOfText,
  drawObject: () => drawObject,
  drawOptionList: () => drawOptionList,
  drawPage: () => drawPage,
  drawRadioButton: () => drawRadioButton,
  drawRectangle: () => drawRectangle,
  drawSvgPath: () => drawSvgPath,
  drawText: () => drawText,
  drawTextField: () => drawTextField,
  drawTextLines: () => drawTextLines,
  encodeToBase64: () => encodeToBase64,
  endMarkedContent: () => endMarkedContent,
  endPath: () => endPath,
  endText: () => endText,
  error: () => error,
  escapeRegExp: () => escapeRegExp,
  escapedNewlineChars: () => escapedNewlineChars,
  fill: () => fill,
  fillAndStroke: () => fillAndStroke,
  findLastMatch: () => findLastMatch,
  getType: () => getType,
  grayscale: () => grayscale,
  hasSurrogates: () => hasSurrogates,
  hasUtf16BOM: () => hasUtf16BOM,
  highSurrogate: () => highSurrogate,
  isNewlineChar: () => isNewlineChar,
  isStandardFont: () => isStandardFont,
  isType: () => isType,
  isWithinBMP: () => isWithinBMP,
  last: () => last,
  layoutCombedText: () => layoutCombedText,
  layoutMultilineText: () => layoutMultilineText,
  layoutSinglelineText: () => layoutSinglelineText,
  lineSplit: () => lineSplit,
  lineTo: () => lineTo,
  lowSurrogate: () => lowSurrogate,
  mergeIntoTypedArray: () => mergeIntoTypedArray,
  mergeLines: () => mergeLines,
  mergeUint8Arrays: () => mergeUint8Arrays,
  moveText: () => moveText,
  moveTo: () => moveTo,
  newlineChars: () => newlineChars,
  nextLine: () => nextLine,
  normalizeAppearance: () => normalizeAppearance,
  numberToString: () => numberToString,
  padStart: () => padStart,
  parseDate: () => parseDate,
  pdfDocEncodingDecode: () => pdfDocEncodingDecode,
  pluckIndices: () => pluckIndices,
  popGraphicsState: () => popGraphicsState,
  pushGraphicsState: () => pushGraphicsState,
  radians: () => radians,
  radiansToDegrees: () => radiansToDegrees,
  range: () => range,
  rectangle: () => rectangle,
  rectanglesAreEqual: () => rectanglesAreEqual,
  reduceRotation: () => reduceRotation,
  restoreDashPattern: () => restoreDashPattern,
  reverseArray: () => reverseArray,
  rgb: () => rgb,
  rotateAndSkewTextDegreesAndTranslate: () => rotateAndSkewTextDegreesAndTranslate,
  rotateAndSkewTextRadiansAndTranslate: () => rotateAndSkewTextRadiansAndTranslate,
  rotateDegrees: () => rotateDegrees,
  rotateInPlace: () => rotateInPlace,
  rotateRadians: () => rotateRadians,
  rotateRectangle: () => rotateRectangle,
  scale: () => scale,
  setCharacterSpacing: () => setCharacterSpacing,
  setCharacterSqueeze: () => setCharacterSqueeze,
  setDashPattern: () => setDashPattern,
  setFillingCmykColor: () => setFillingCmykColor,
  setFillingColor: () => setFillingColor,
  setFillingGrayscaleColor: () => setFillingGrayscaleColor,
  setFillingRgbColor: () => setFillingRgbColor,
  setFontAndSize: () => setFontAndSize,
  setGraphicsState: () => setGraphicsState,
  setLineCap: () => setLineCap,
  setLineHeight: () => setLineHeight,
  setLineJoin: () => setLineJoin,
  setLineWidth: () => setLineWidth,
  setStrokingCmykColor: () => setStrokingCmykColor,
  setStrokingColor: () => setStrokingColor,
  setStrokingGrayscaleColor: () => setStrokingGrayscaleColor,
  setStrokingRgbColor: () => setStrokingRgbColor,
  setTextMatrix: () => setTextMatrix,
  setTextRenderingMode: () => setTextRenderingMode,
  setTextRise: () => setTextRise,
  setWordSpacing: () => setWordSpacing,
  showText: () => showText,
  singleQuote: () => singleQuote,
  sizeInBytes: () => sizeInBytes,
  skewDegrees: () => skewDegrees,
  skewRadians: () => skewRadians,
  sortedUniq: () => sortedUniq,
  square: () => square,
  stroke: () => stroke,
  sum: () => sum,
  toCharCode: () => toCharCode,
  toCodePoint: () => toCodePoint,
  toDegrees: () => toDegrees,
  toHexString: () => toHexString,
  toHexStringOfMinLength: () => toHexStringOfMinLength,
  toRadians: () => toRadians,
  toUint8Array: () => toUint8Array,
  translate: () => translate,
  typedArrayFor: () => typedArrayFor,
  utf16Decode: () => utf16Decode,
  utf16Encode: () => utf16Encode,
  utf8Encode: () => utf8Encode,
  values: () => values,
  waitForTick: () => waitForTick
});
module.exports = __toCommonJS(index_exports);

// src/utils/base64.ts
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup = new Uint8Array(256);
for (let i = 0; i < chars.length; i++) {
  lookup[chars.charCodeAt(i)] = i;
}
var encodeToBase64 = (bytes) => {
  let base64 = "";
  const len = bytes.length;
  for (let i = 0; i < len; i += 3) {
    base64 += chars[bytes[i] >> 2];
    base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
    base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
    base64 += chars[bytes[i + 2] & 63];
  }
  if (len % 3 === 2) {
    base64 = base64.substring(0, base64.length - 1) + "=";
  } else if (len % 3 === 1) {
    base64 = base64.substring(0, base64.length - 2) + "==";
  }
  return base64;
};
var decodeFromBase64 = (base64) => {
  let bufferLength = base64.length * 0.75;
  const len = base64.length;
  let i;
  let p = 0;
  let encoded1;
  let encoded2;
  let encoded3;
  let encoded4;
  if (base64[base64.length - 1] === "=") {
    bufferLength--;
    if (base64[base64.length - 2] === "=") {
      bufferLength--;
    }
  }
  const bytes = new Uint8Array(bufferLength);
  for (i = 0; i < len; i += 4) {
    encoded1 = lookup[base64.charCodeAt(i)];
    encoded2 = lookup[base64.charCodeAt(i + 1)];
    encoded3 = lookup[base64.charCodeAt(i + 2)];
    encoded4 = lookup[base64.charCodeAt(i + 3)];
    bytes[p++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return bytes;
};
var DATA_URI_PREFIX_REGEX = /^(data)?:?([\w\/\+]+)?;?(charset=[\w-]+|base64)?.*,/i;
var decodeFromBase64DataUri = (dataUri) => {
  const trimmedUri = dataUri.trim();
  const prefix = trimmedUri.substring(0, 100);
  const res = prefix.match(DATA_URI_PREFIX_REGEX);
  if (!res) return decodeFromBase64(trimmedUri);
  const [fullMatch] = res;
  const data = trimmedUri.substring(fullMatch.length);
  return decodeFromBase64(data);
};

// src/utils/strings.ts
var toCharCode = (character) => character.charCodeAt(0);
var toCodePoint = (character) => character.codePointAt(0);
var toHexStringOfMinLength = (num, minLength) => padStart(num.toString(16), minLength, "0").toUpperCase();
var toHexString = (num) => toHexStringOfMinLength(num, 2);
var charFromCode = (code) => String.fromCharCode(code);
var charFromHexCode = (hex) => charFromCode(parseInt(hex, 16));
var padStart = (value, length, padChar) => {
  let padding = "";
  for (let idx = 0, len = length - value.length; idx < len; idx++) {
    padding += padChar;
  }
  return padding + value;
};
var copyStringIntoBuffer = (str, buffer, offset) => {
  const length = str.length;
  for (let idx = 0; idx < length; idx++) {
    buffer[offset++] = str.charCodeAt(idx);
  }
  return length;
};
var addRandomSuffix = (prefix, suffixLength = 4) => `${prefix}-${Math.floor(Math.random() * 10 ** suffixLength)}`;
var escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
var cleanText = (text) => text.replace(/\t|\u0085|\u2028|\u2029/g, "    ").replace(/[\b\v]/g, "");
var escapedNewlineChars = ["\\n", "\\f", "\\r", "\\u000B"];
var newlineChars = ["\n", "\f", "\r", "\v"];
var isNewlineChar = (text) => /^[\n\f\r\u000B]$/.test(text);
var lineSplit = (text) => text.split(/[\n\f\r\u000B]/);
var mergeLines = (text) => text.replace(/[\n\f\r\u000B]/g, " ");
var charAtIndex = (text, index) => {
  const cuFirst = text.charCodeAt(index);
  let cuSecond;
  const nextIndex = index + 1;
  let length = 1;
  if (
    // Check if it's the start of a surrogate pair.
    cuFirst >= 55296 && cuFirst <= 56319 && // high surrogate
    text.length > nextIndex
  ) {
    cuSecond = text.charCodeAt(nextIndex);
    if (cuSecond >= 56320 && cuSecond <= 57343) length = 2;
  }
  return [text.slice(index, index + length), length];
};
var charSplit = (text) => {
  const chars2 = [];
  for (let idx = 0, len = text.length; idx < len; ) {
    const [c, cLen] = charAtIndex(text, idx);
    chars2.push(c);
    idx += cLen;
  }
  return chars2;
};
var buildWordBreakRegex = (wordBreaks) => {
  const newlineCharUnion = escapedNewlineChars.join("|");
  const escapedRules = ["$"];
  for (let idx = 0, len = wordBreaks.length; idx < len; idx++) {
    const wordBreak = wordBreaks[idx];
    if (isNewlineChar(wordBreak)) {
      throw new TypeError(`\`wordBreak\` must not include ${newlineCharUnion}`);
    }
    escapedRules.push(wordBreak === "" ? "." : escapeRegExp(wordBreak));
  }
  const breakRules = escapedRules.join("|");
  return new RegExp(`(${newlineCharUnion})|((.*?)(${breakRules}))`, "gm");
};
var breakTextIntoLines = (text, wordBreaks, maxWidth, computeWidthOfText) => {
  const regex = buildWordBreakRegex(wordBreaks);
  const words = cleanText(text).match(regex);
  let currLine = "";
  let currWidth = 0;
  const lines = [];
  const pushCurrLine = () => {
    if (currLine !== "") lines.push(currLine);
    currLine = "";
    currWidth = 0;
  };
  for (let idx = 0, len = words.length; idx < len; idx++) {
    const word = words[idx];
    if (isNewlineChar(word)) {
      pushCurrLine();
    } else {
      const width = computeWidthOfText(word);
      if (currWidth + width > maxWidth) pushCurrLine();
      currLine += word;
      currWidth += width;
    }
  }
  pushCurrLine();
  return lines;
};
var dateRegex = /^D:(\d\d\d\d)(\d\d)?(\d\d)?(\d\d)?(\d\d)?(\d\d)?([+\-Z])?(\d\d)?'?(\d\d)?'?$/;
var parseDate = (dateStr) => {
  const match = dateStr.match(dateRegex);
  if (!match) return void 0;
  const [
    ,
    year,
    month = "01",
    day = "01",
    hours = "00",
    mins = "00",
    secs = "00",
    offsetSign = "Z",
    offsetHours = "00",
    offsetMins = "00"
  ] = match;
  const tzOffset = offsetSign === "Z" ? "Z" : `${offsetSign}${offsetHours}:${offsetMins}`;
  const date = /* @__PURE__ */ new Date(
    `${year}-${month}-${day}T${hours}:${mins}:${secs}${tzOffset}`
  );
  return date;
};
var findLastMatch = (value, regex) => {
  let position = 0;
  let lastMatch;
  while (position < value.length) {
    const match = value.substring(position).match(regex);
    if (!match) return { match: lastMatch, pos: position };
    lastMatch = match;
    position += (match.index ?? 0) + match[0].length;
  }
  return { match: lastMatch, pos: position };
};

// src/utils/arrays.ts
var last = (array) => array[array.length - 1];
var typedArrayFor = (value) => {
  if (value instanceof Uint8Array) return value;
  const length = value.length;
  const typedArray = new Uint8Array(length);
  for (let idx = 0; idx < length; idx++) {
    typedArray[idx] = value.charCodeAt(idx);
  }
  return typedArray;
};
var mergeIntoTypedArray = (...arrays) => {
  const arrayCount = arrays.length;
  const typedArrays = [];
  for (let idx = 0; idx < arrayCount; idx++) {
    const element = arrays[idx];
    typedArrays[idx] = element instanceof Uint8Array ? element : typedArrayFor(element);
  }
  let totalSize = 0;
  for (let idx = 0; idx < arrayCount; idx++) {
    totalSize += arrays[idx].length;
  }
  const merged = new Uint8Array(totalSize);
  let offset = 0;
  for (let arrIdx = 0; arrIdx < arrayCount; arrIdx++) {
    const arr = typedArrays[arrIdx];
    for (let byteIdx = 0, arrLen = arr.length; byteIdx < arrLen; byteIdx++) {
      merged[offset++] = arr[byteIdx];
    }
  }
  return merged;
};
var mergeUint8Arrays = (arrays) => {
  let totalSize = 0;
  for (let idx = 0, len = arrays.length; idx < len; idx++) {
    totalSize += arrays[idx].length;
  }
  const mergedBuffer = new Uint8Array(totalSize);
  let offset = 0;
  for (let idx = 0, len = arrays.length; idx < len; idx++) {
    const array = arrays[idx];
    mergedBuffer.set(array, offset);
    offset += array.length;
  }
  return mergedBuffer;
};
var arrayAsString = (array) => {
  let str = "";
  for (let idx = 0, len = array.length; idx < len; idx++) {
    str += charFromCode(array[idx]);
  }
  return str;
};
var byAscendingId = (a, b) => a.id - b.id;
var sortedUniq = (array, indexer) => {
  const uniq = [];
  for (let idx = 0, len = array.length; idx < len; idx++) {
    const curr = array[idx];
    const prev = array[idx - 1];
    if (idx === 0 || indexer(curr) !== indexer(prev)) {
      uniq.push(curr);
    }
  }
  return uniq;
};
var reverseArray = (array) => {
  const arrayLen = array.length;
  for (let idx = 0, len = Math.floor(arrayLen / 2); idx < len; idx++) {
    const leftIdx = idx;
    const rightIdx = arrayLen - idx - 1;
    const temp = array[idx];
    array[leftIdx] = array[rightIdx];
    array[rightIdx] = temp;
  }
  return array;
};
var sum = (array) => {
  let total = 0;
  for (let idx = 0, len = array.length; idx < len; idx++) {
    total += array[idx];
  }
  return total;
};
var range = (start, end) => {
  const arr = new Array(end - start);
  for (let idx = 0, len = arr.length; idx < len; idx++) {
    arr[idx] = start + idx;
  }
  return arr;
};
var pluckIndices = (arr, indices) => {
  const plucked = new Array(indices.length);
  for (let idx = 0, len = indices.length; idx < len; idx++) {
    plucked[idx] = arr[indices[idx]];
  }
  return plucked;
};
var canBeConvertedToUint8Array = (input) => input instanceof Uint8Array || input instanceof ArrayBuffer || typeof input === "string";
var toUint8Array = (input) => {
  if (typeof input === "string") {
    return decodeFromBase64DataUri(input);
  } else if (input instanceof ArrayBuffer) {
    return new Uint8Array(input);
  } else if (input instanceof Uint8Array) {
    return input;
  } else {
    throw new TypeError(
      "`input` must be one of `string | ArrayBuffer | Uint8Array`"
    );
  }
};

// src/utils/async.ts
var waitForTick = () => new Promise((resolve) => {
  setTimeout(() => resolve(), 0);
});

// src/utils/unicode.ts
var utf8Encode = (input, byteOrderMark = true) => {
  const encoded = [];
  if (byteOrderMark) encoded.push(239, 187, 191);
  for (let idx = 0, len = input.length; idx < len; ) {
    const codePoint = input.codePointAt(idx);
    if (codePoint < 128) {
      const byte1 = codePoint & 127;
      encoded.push(byte1);
      idx += 1;
    } else if (codePoint < 2048) {
      const byte1 = codePoint >> 6 & 31 | 192;
      const byte2 = codePoint & 63 | 128;
      encoded.push(byte1, byte2);
      idx += 1;
    } else if (codePoint < 65536) {
      const byte1 = codePoint >> 12 & 15 | 224;
      const byte2 = codePoint >> 6 & 63 | 128;
      const byte3 = codePoint & 63 | 128;
      encoded.push(byte1, byte2, byte3);
      idx += 1;
    } else if (codePoint < 1114112) {
      const byte1 = codePoint >> 18 & 7 | 240;
      const byte2 = codePoint >> 12 & 63 | 128;
      const byte3 = codePoint >> 6 & 63 | 128;
      const byte4 = codePoint >> 0 & 63 | 128;
      encoded.push(byte1, byte2, byte3, byte4);
      idx += 2;
    } else throw new Error(`Invalid code point: 0x${toHexString(codePoint)}`);
  }
  return new Uint8Array(encoded);
};
var utf16Encode = (input, byteOrderMark = true) => {
  const encoded = [];
  if (byteOrderMark) encoded.push(65279);
  for (let idx = 0, len = input.length; idx < len; ) {
    const codePoint = input.codePointAt(idx);
    if (codePoint < 65536) {
      encoded.push(codePoint);
      idx += 1;
    } else if (codePoint < 1114112) {
      encoded.push(highSurrogate(codePoint), lowSurrogate(codePoint));
      idx += 2;
    } else throw new Error(`Invalid code point: 0x${toHexString(codePoint)}`);
  }
  return new Uint16Array(encoded);
};
var isWithinBMP = (codePoint) => codePoint >= 0 && codePoint <= 65535;
var hasSurrogates = (codePoint) => codePoint >= 65536 && codePoint <= 1114111;
var highSurrogate = (codePoint) => Math.floor((codePoint - 65536) / 1024) + 55296;
var lowSurrogate = (codePoint) => (codePoint - 65536) % 1024 + 56320;
var REPLACEMENT = "\uFFFD".codePointAt(0);
var utf16Decode = (input, byteOrderMark = true) => {
  if (input.length <= 1) return String.fromCodePoint(REPLACEMENT);
  const byteOrder = byteOrderMark ? readBOM(input) : "BigEndian" /* BigEndian */;
  let idx = byteOrderMark ? 2 : 0;
  const codePoints = [];
  while (input.length - idx >= 2) {
    const first = decodeValues(input[idx++], input[idx++], byteOrder);
    if (isHighSurrogate(first)) {
      if (input.length - idx < 2) {
        codePoints.push(REPLACEMENT);
      } else {
        const second = decodeValues(input[idx++], input[idx++], byteOrder);
        if (isLowSurrogate(second)) {
          codePoints.push(first, second);
        } else {
          codePoints.push(REPLACEMENT);
        }
      }
    } else if (isLowSurrogate(first)) {
      idx += 2;
      codePoints.push(REPLACEMENT);
    } else {
      codePoints.push(first);
    }
  }
  if (idx < input.length) codePoints.push(REPLACEMENT);
  return String.fromCodePoint(...codePoints);
};
var isHighSurrogate = (codePoint) => codePoint >= 55296 && codePoint <= 56319;
var isLowSurrogate = (codePoint) => codePoint >= 56320 && codePoint <= 57343;
var decodeValues = (first, second, byteOrder) => {
  if (byteOrder === "LittleEndian" /* LittleEndian */) return second << 8 | first;
  if (byteOrder === "BigEndian" /* BigEndian */) return first << 8 | second;
  throw new Error(`Invalid byteOrder: ${byteOrder}`);
};
var readBOM = (bytes) => hasUtf16BigEndianBOM(bytes) ? "BigEndian" /* BigEndian */ : hasUtf16LittleEndianBOM(bytes) ? "LittleEndian" /* LittleEndian */ : "BigEndian" /* BigEndian */;
var hasUtf16BigEndianBOM = (bytes) => bytes[0] === 254 && bytes[1] === 255;
var hasUtf16LittleEndianBOM = (bytes) => bytes[0] === 255 && bytes[1] === 254;
var hasUtf16BOM = (bytes) => hasUtf16BigEndianBOM(bytes) || hasUtf16LittleEndianBOM(bytes);

// src/utils/numbers.ts
var numberToString = (num) => {
  let numStr = String(num);
  if (Math.abs(num) < 1) {
    const e = parseInt(num.toString().split("e-")[1]);
    if (e) {
      const negative = num < 0;
      if (negative) num *= -1;
      num *= Math.pow(10, e - 1);
      numStr = "0." + new Array(e).join("0") + num.toString().substring(2);
      if (negative) numStr = "-" + numStr;
    }
  } else {
    let e = parseInt(num.toString().split("+")[1]);
    if (e > 20) {
      e -= 20;
      num /= Math.pow(10, e);
      numStr = num.toString() + new Array(e + 1).join("0");
    }
  }
  return numStr;
};
var sizeInBytes = (n) => Math.ceil(n.toString(2).length / 8);
var bytesFor = (n) => {
  const bytes = new Uint8Array(sizeInBytes(n));
  for (let i = 1; i <= bytes.length; i++) {
    bytes[i - 1] = n >> (bytes.length - i) * 8;
  }
  return bytes;
};

// src/utils/errors.ts
var error = (msg) => {
  throw new Error(msg);
};

// src/utils/objects.ts
var import_standard_fonts = require("@pdf-lib/standard-fonts");
var values = (obj) => Object.keys(obj).map((k) => obj[k]);
var StandardFontValues = values(import_standard_fonts.FontNames);
var isStandardFont = (input) => StandardFontValues.includes(input);
var rectanglesAreEqual = (a, b) => a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;

// src/utils/validators.ts
var backtick = (val) => `\`${val}\``;
var singleQuote = (val) => `'${val}'`;
var formatValue = (value) => {
  const type = typeof value;
  if (type === "string") return singleQuote(value);
  else if (type === "undefined") return backtick(value);
  else return value;
};
var createValueErrorMsg = (value, valueName, values2) => {
  const allowedValues = new Array(values2.length);
  for (let idx = 0, len = values2.length; idx < len; idx++) {
    const v = values2[idx];
    allowedValues[idx] = formatValue(v);
  }
  const joinedValues = allowedValues.join(" or ");
  return `${backtick(valueName)} must be one of ${joinedValues}, but was actually ${formatValue(value)}`;
};
var assertIsOneOf = (value, valueName, allowedValues) => {
  if (!Array.isArray(allowedValues)) {
    allowedValues = values(allowedValues);
  }
  for (let idx = 0, len = allowedValues.length; idx < len; idx++) {
    if (value === allowedValues[idx]) return;
  }
  throw new TypeError(createValueErrorMsg(value, valueName, allowedValues));
};
var assertIsOneOfOrUndefined = (value, valueName, allowedValues) => {
  if (!Array.isArray(allowedValues)) {
    allowedValues = values(allowedValues);
  }
  assertIsOneOf(value, valueName, allowedValues.concat(void 0));
};
var assertIsSubset = (values2, valueName, allowedValues) => {
  if (!Array.isArray(allowedValues)) {
    allowedValues = values(allowedValues);
  }
  for (let idx = 0, len = values2.length; idx < len; idx++) {
    assertIsOneOf(values2[idx], valueName, allowedValues);
  }
};
var getType = (val) => {
  if (val === null) return "null";
  if (val === void 0) return "undefined";
  if (typeof val === "string") return "string";
  if (isNaN(val)) return "NaN";
  if (typeof val === "number") return "number";
  if (typeof val === "boolean") return "boolean";
  if (typeof val === "symbol") return "symbol";
  if (typeof val === "bigint") return "bigint";
  if (val.constructor && val.constructor.name) return val.constructor.name;
  if (val.name) return val.name;
  if (val.constructor) return String(val.constructor);
  return String(val);
};
var isType = (value, type) => {
  if (type === "null") return value === null;
  if (type === "undefined") return value === void 0;
  if (type === "string") return typeof value === "string";
  if (type === "number") return typeof value === "number" && !isNaN(value);
  if (type === "boolean") return typeof value === "boolean";
  if (type === "symbol") return typeof value === "symbol";
  if (type === "bigint") return typeof value === "bigint";
  if (type === Date) return value instanceof Date;
  if (type === Array) return value instanceof Array;
  if (type === Uint8Array) return value instanceof Uint8Array;
  if (type === ArrayBuffer) return value instanceof ArrayBuffer;
  if (type === Function) return value instanceof Function;
  return value instanceof type[0];
};
var createTypeErrorMsg = (value, valueName, types) => {
  const allowedTypes = new Array(types.length);
  for (let idx = 0, len = types.length; idx < len; idx++) {
    const type = types[idx];
    if (type === "null") allowedTypes[idx] = backtick("null");
    if (type === "undefined") allowedTypes[idx] = backtick("undefined");
    if (type === "string") allowedTypes[idx] = backtick("string");
    else if (type === "number") allowedTypes[idx] = backtick("number");
    else if (type === "boolean") allowedTypes[idx] = backtick("boolean");
    else if (type === "symbol") allowedTypes[idx] = backtick("symbol");
    else if (type === "bigint") allowedTypes[idx] = backtick("bigint");
    else if (type === Array) allowedTypes[idx] = backtick("Array");
    else if (type === Uint8Array) allowedTypes[idx] = backtick("Uint8Array");
    else if (type === ArrayBuffer) allowedTypes[idx] = backtick("ArrayBuffer");
    else allowedTypes[idx] = backtick(type[1]);
  }
  const joinedTypes = allowedTypes.join(" or ");
  return `${backtick(valueName)} must be of type ${joinedTypes}, but was actually of type ${backtick(getType(value))}`;
};
var assertIs = (value, valueName, types) => {
  for (let idx = 0, len = types.length; idx < len; idx++) {
    if (isType(value, types[idx])) return;
  }
  throw new TypeError(createTypeErrorMsg(value, valueName, types));
};
var assertOrUndefined = (value, valueName, types) => {
  assertIs(value, valueName, types.concat("undefined"));
};
var assertEachIs = (values2, valueName, types) => {
  for (let idx = 0, len = values2.length; idx < len; idx++) {
    assertIs(values2[idx], valueName, types);
  }
};
var assertRange = (value, valueName, min, max) => {
  assertIs(value, valueName, ["number"]);
  assertIs(min, "min", ["number"]);
  assertIs(max, "max", ["number"]);
  max = Math.max(min, max);
  if (value < min || value > max) {
    throw new Error(`${backtick(valueName)} must be at least ${min} and at most ${max}, but was actually ${value}`);
  }
};
var assertRangeOrUndefined = (value, valueName, min, max) => {
  assertIs(value, valueName, ["number", "undefined"]);
  if (typeof value === "number") assertRange(value, valueName, min, max);
};
var assertMultiple = (value, valueName, multiplier) => {
  assertIs(value, valueName, ["number"]);
  if (value % multiplier !== 0) {
    throw new Error(`${backtick(valueName)} must be a multiple of ${multiplier}, but was actually ${value}`);
  }
};
var assertInteger = (value, valueName) => {
  if (!Number.isInteger(value)) {
    throw new Error(
      `${backtick(valueName)} must be an integer, but was actually ${value}`
    );
  }
};
var assertPositive = (value, valueName) => {
  if (![1, 0].includes(Math.sign(value))) {
    throw new Error(`${backtick(valueName)} must be a positive number or 0, but was actually ${value}`);
  }
};

// src/utils/pdfDocEncoding.ts
var pdfDocEncodingToUnicode = new Uint16Array(256);
for (let idx = 0; idx < 256; idx++) {
  pdfDocEncodingToUnicode[idx] = idx;
}
pdfDocEncodingToUnicode[22] = toCharCode("");
pdfDocEncodingToUnicode[24] = toCharCode("\u02D8");
pdfDocEncodingToUnicode[25] = toCharCode("\u02C7");
pdfDocEncodingToUnicode[26] = toCharCode("\u02C6");
pdfDocEncodingToUnicode[27] = toCharCode("\u02D9");
pdfDocEncodingToUnicode[28] = toCharCode("\u02DD");
pdfDocEncodingToUnicode[29] = toCharCode("\u02DB");
pdfDocEncodingToUnicode[30] = toCharCode("\u02DA");
pdfDocEncodingToUnicode[31] = toCharCode("\u02DC");
pdfDocEncodingToUnicode[127] = toCharCode("\uFFFD");
pdfDocEncodingToUnicode[128] = toCharCode("\u2022");
pdfDocEncodingToUnicode[129] = toCharCode("\u2020");
pdfDocEncodingToUnicode[130] = toCharCode("\u2021");
pdfDocEncodingToUnicode[131] = toCharCode("\u2026");
pdfDocEncodingToUnicode[132] = toCharCode("\u2014");
pdfDocEncodingToUnicode[133] = toCharCode("\u2013");
pdfDocEncodingToUnicode[134] = toCharCode("\u0192");
pdfDocEncodingToUnicode[135] = toCharCode("\u2044");
pdfDocEncodingToUnicode[136] = toCharCode("\u2039");
pdfDocEncodingToUnicode[137] = toCharCode("\u203A");
pdfDocEncodingToUnicode[138] = toCharCode("\u2212");
pdfDocEncodingToUnicode[139] = toCharCode("\u2030");
pdfDocEncodingToUnicode[140] = toCharCode("\u201E");
pdfDocEncodingToUnicode[141] = toCharCode("\u201C");
pdfDocEncodingToUnicode[142] = toCharCode("\u201D");
pdfDocEncodingToUnicode[143] = toCharCode("\u2018");
pdfDocEncodingToUnicode[144] = toCharCode("\u2019");
pdfDocEncodingToUnicode[145] = toCharCode("\u201A");
pdfDocEncodingToUnicode[146] = toCharCode("\u2122");
pdfDocEncodingToUnicode[147] = toCharCode("\uFB01");
pdfDocEncodingToUnicode[148] = toCharCode("\uFB02");
pdfDocEncodingToUnicode[149] = toCharCode("\u0141");
pdfDocEncodingToUnicode[150] = toCharCode("\u0152");
pdfDocEncodingToUnicode[151] = toCharCode("\u0160");
pdfDocEncodingToUnicode[152] = toCharCode("\u0178");
pdfDocEncodingToUnicode[153] = toCharCode("\u017D");
pdfDocEncodingToUnicode[154] = toCharCode("\u0131");
pdfDocEncodingToUnicode[155] = toCharCode("\u0142");
pdfDocEncodingToUnicode[156] = toCharCode("\u0153");
pdfDocEncodingToUnicode[157] = toCharCode("\u0161");
pdfDocEncodingToUnicode[158] = toCharCode("\u017E");
pdfDocEncodingToUnicode[159] = toCharCode("\uFFFD");
pdfDocEncodingToUnicode[160] = toCharCode("\u20AC");
pdfDocEncodingToUnicode[173] = toCharCode("\uFFFD");
var pdfDocEncodingDecode = (bytes) => {
  const codePoints = new Array(bytes.length);
  for (let idx = 0, len = bytes.length; idx < len; idx++) {
    codePoints[idx] = pdfDocEncodingToUnicode[bytes[idx]];
  }
  return String.fromCodePoint(...codePoints);
};

// src/utils/Cache.ts
var _Cache = class _Cache {
  constructor(populate) {
    __publicField(this, "populate");
    __publicField(this, "value");
    this.populate = populate;
    this.value = void 0;
  }
  getValue() {
    return this.value;
  }
  access() {
    if (!this.value) this.value = this.populate();
    return this.value;
  }
  invalidate() {
    this.value = void 0;
  }
};
__publicField(_Cache, "populatedBy", (populate) => new _Cache(populate));
var Cache = _Cache;
var Cache_default = Cache;

// src/core/errors.ts
var MethodNotImplementedError = class extends Error {
  constructor(className, methodName) {
    const msg = `Method ${className}.${methodName}() not implemented`;
    super(msg);
  }
};
var PrivateConstructorError = class extends Error {
  constructor(className) {
    const msg = `Cannot construct ${className} - it has a private constructor`;
    super(msg);
  }
};
var UnexpectedObjectTypeError = class extends Error {
  constructor(expected, actual) {
    const name = (t) => t?.name ?? t?.constructor?.name;
    const expectedTypes = Array.isArray(expected) ? expected.map(name) : [name(expected)];
    const msg = `Expected instance of ${expectedTypes.join(" or ")}, but got instance of ${actual ? name(actual) : actual}`;
    super(msg);
  }
};
var UnsupportedEncodingError = class extends Error {
  constructor(encoding) {
    const msg = `${encoding} stream encoding not supported`;
    super(msg);
  }
};
var ReparseError = class extends Error {
  constructor(className, methodName) {
    const msg = `Cannot call ${className}.${methodName}() more than once`;
    super(msg);
  }
};
var MissingCatalogError = class extends Error {
  constructor(ref) {
    const msg = `Missing catalog (ref=${ref})`;
    super(msg);
  }
};
var MissingPageContentsEmbeddingError = class extends Error {
  constructor() {
    const msg = "Can't embed page with missing Contents";
    super(msg);
  }
};
var UnrecognizedStreamTypeError = class extends Error {
  constructor(stream2) {
    const streamType = stream2?.contructor?.name ?? stream2?.name ?? stream2;
    const msg = `Unrecognized stream type: ${streamType}`;
    super(msg);
  }
};
var PageEmbeddingMismatchedContextError = class extends Error {
  constructor() {
    const msg = "Found mismatched contexts while embedding pages. All pages in the array passed to `PDFDocument.embedPages()` must be from the same document.";
    super(msg);
  }
};
var PDFArrayIsNotRectangleError = class extends Error {
  constructor(size) {
    const msg = `Attempted to convert PDFArray with ${size} elements to rectangle, but must have exactly 4 elements.`;
    super(msg);
  }
};
var InvalidPDFDateStringError = class extends Error {
  constructor(value) {
    const msg = `Attempted to convert "${value}" to a date, but it does not match the PDF date string format.`;
    super(msg);
  }
};
var InvalidTargetIndexError = class extends Error {
  constructor(targetIndex, Count) {
    const msg = `Invalid targetIndex specified: targetIndex=${targetIndex} must be less than Count=${Count}`;
    super(msg);
  }
};
var CorruptPageTreeError = class extends Error {
  constructor(targetIndex, operation) {
    const msg = `Failed to ${operation} at targetIndex=${targetIndex} due to corrupt page tree: It is likely that one or more 'Count' entries are invalid`;
    super(msg);
  }
};
var IndexOutOfBoundsError = class extends Error {
  constructor(index, min, max) {
    const msg = `index should be at least ${min} and at most ${max}, but was actually ${index}`;
    super(msg);
  }
};
var InvalidAcroFieldValueError = class extends Error {
  constructor() {
    const msg = "Attempted to set invalid field value";
    super(msg);
  }
};
var MultiSelectValueError = class extends Error {
  constructor() {
    const msg = "Attempted to select multiple values for single-select field";
    super(msg);
  }
};
var MissingDAEntryError = class extends Error {
  constructor(fieldName) {
    const msg = `No /DA (default appearance) entry found for field: ${fieldName}`;
    super(msg);
  }
};
var MissingTfOperatorError = class extends Error {
  constructor(fieldName) {
    const msg = `No Tf operator found for DA of field: ${fieldName}`;
    super(msg);
  }
};
var NumberParsingError = class extends Error {
  constructor(pos, value) {
    const msg = `Failed to parse number (line:${pos.line} col:${pos.column} offset=${pos.offset}): "${value}"`;
    super(msg);
  }
};
var PDFParsingError = class extends Error {
  constructor(pos, details) {
    const msg = `Failed to parse PDF document (line:${pos.line} col:${pos.column} offset=${pos.offset}): ${details}`;
    super(msg);
  }
};
var NextByteAssertionError = class extends PDFParsingError {
  constructor(pos, expectedByte, actualByte) {
    const msg = `Expected next byte to be ${expectedByte} but it was actually ${actualByte}`;
    super(pos, msg);
  }
};
var PDFObjectParsingError = class extends PDFParsingError {
  constructor(pos, byte) {
    const msg = `Failed to parse PDF object starting with the following byte: ${byte}`;
    super(pos, msg);
  }
};
var PDFInvalidObjectParsingError = class extends PDFParsingError {
  constructor(pos) {
    const msg = "Failed to parse invalid PDF object";
    super(pos, msg);
  }
};
var PDFStreamParsingError = class extends PDFParsingError {
  constructor(pos) {
    const msg = "Failed to parse PDF stream";
    super(pos, msg);
  }
};
var UnbalancedParenthesisError = class extends PDFParsingError {
  constructor(pos) {
    const msg = "Failed to parse PDF literal string due to unbalanced parenthesis";
    super(pos, msg);
  }
};
var StalledParserError = class extends PDFParsingError {
  constructor(pos) {
    const msg = "Parser stalled";
    super(pos, msg);
  }
};
var MissingPDFHeaderError = class extends PDFParsingError {
  constructor(pos) {
    const msg = "No PDF header found";
    super(pos, msg);
  }
};
var MissingKeywordError = class extends PDFParsingError {
  constructor(pos, keyword) {
    const msg = `Did not find expected keyword '${arrayAsString(keyword)}'`;
    super(pos, msg);
  }
};

// src/core/syntax/CharCodes.ts
var CharCodes = /* @__PURE__ */ ((CharCodes2) => {
  CharCodes2[CharCodes2["Null"] = 0] = "Null";
  CharCodes2[CharCodes2["Backspace"] = 8] = "Backspace";
  CharCodes2[CharCodes2["Tab"] = 9] = "Tab";
  CharCodes2[CharCodes2["Newline"] = 10] = "Newline";
  CharCodes2[CharCodes2["FormFeed"] = 12] = "FormFeed";
  CharCodes2[CharCodes2["CarriageReturn"] = 13] = "CarriageReturn";
  CharCodes2[CharCodes2["Space"] = 32] = "Space";
  CharCodes2[CharCodes2["ExclamationPoint"] = 33] = "ExclamationPoint";
  CharCodes2[CharCodes2["Hash"] = 35] = "Hash";
  CharCodes2[CharCodes2["Percent"] = 37] = "Percent";
  CharCodes2[CharCodes2["LeftParen"] = 40] = "LeftParen";
  CharCodes2[CharCodes2["RightParen"] = 41] = "RightParen";
  CharCodes2[CharCodes2["Plus"] = 43] = "Plus";
  CharCodes2[CharCodes2["Minus"] = 45] = "Minus";
  CharCodes2[CharCodes2["Dash"] = 45] = "Dash";
  CharCodes2[CharCodes2["Period"] = 46] = "Period";
  CharCodes2[CharCodes2["ForwardSlash"] = 47] = "ForwardSlash";
  CharCodes2[CharCodes2["Zero"] = 48] = "Zero";
  CharCodes2[CharCodes2["One"] = 49] = "One";
  CharCodes2[CharCodes2["Two"] = 50] = "Two";
  CharCodes2[CharCodes2["Three"] = 51] = "Three";
  CharCodes2[CharCodes2["Four"] = 52] = "Four";
  CharCodes2[CharCodes2["Five"] = 53] = "Five";
  CharCodes2[CharCodes2["Six"] = 54] = "Six";
  CharCodes2[CharCodes2["Seven"] = 55] = "Seven";
  CharCodes2[CharCodes2["Eight"] = 56] = "Eight";
  CharCodes2[CharCodes2["Nine"] = 57] = "Nine";
  CharCodes2[CharCodes2["LessThan"] = 60] = "LessThan";
  CharCodes2[CharCodes2["GreaterThan"] = 62] = "GreaterThan";
  CharCodes2[CharCodes2["A"] = 65] = "A";
  CharCodes2[CharCodes2["D"] = 68] = "D";
  CharCodes2[CharCodes2["E"] = 69] = "E";
  CharCodes2[CharCodes2["F"] = 70] = "F";
  CharCodes2[CharCodes2["O"] = 79] = "O";
  CharCodes2[CharCodes2["P"] = 80] = "P";
  CharCodes2[CharCodes2["R"] = 82] = "R";
  CharCodes2[CharCodes2["LeftSquareBracket"] = 91] = "LeftSquareBracket";
  CharCodes2[CharCodes2["BackSlash"] = 92] = "BackSlash";
  CharCodes2[CharCodes2["RightSquareBracket"] = 93] = "RightSquareBracket";
  CharCodes2[CharCodes2["a"] = 97] = "a";
  CharCodes2[CharCodes2["b"] = 98] = "b";
  CharCodes2[CharCodes2["d"] = 100] = "d";
  CharCodes2[CharCodes2["e"] = 101] = "e";
  CharCodes2[CharCodes2["f"] = 102] = "f";
  CharCodes2[CharCodes2["i"] = 105] = "i";
  CharCodes2[CharCodes2["j"] = 106] = "j";
  CharCodes2[CharCodes2["l"] = 108] = "l";
  CharCodes2[CharCodes2["m"] = 109] = "m";
  CharCodes2[CharCodes2["n"] = 110] = "n";
  CharCodes2[CharCodes2["o"] = 111] = "o";
  CharCodes2[CharCodes2["r"] = 114] = "r";
  CharCodes2[CharCodes2["s"] = 115] = "s";
  CharCodes2[CharCodes2["t"] = 116] = "t";
  CharCodes2[CharCodes2["u"] = 117] = "u";
  CharCodes2[CharCodes2["x"] = 120] = "x";
  CharCodes2[CharCodes2["LeftCurly"] = 123] = "LeftCurly";
  CharCodes2[CharCodes2["RightCurly"] = 125] = "RightCurly";
  CharCodes2[CharCodes2["Tilde"] = 126] = "Tilde";
  return CharCodes2;
})(CharCodes || {});
var CharCodes_default = CharCodes;

// src/core/PDFContext.ts
var import_pako2 = __toESM(require("pako"));

// src/core/document/PDFHeader.ts
var _PDFHeader = class _PDFHeader {
  constructor(major, minor) {
    __publicField(this, "major");
    __publicField(this, "minor");
    this.major = String(major);
    this.minor = String(minor);
  }
  toString() {
    const bc = charFromCode(129);
    return `%PDF-${this.major}.${this.minor}
%${bc}${bc}${bc}${bc}`;
  }
  sizeInBytes() {
    return 12 + this.major.length + this.minor.length;
  }
  copyBytesInto(buffer, offset) {
    const initialOffset = offset;
    buffer[offset++] = CharCodes_default.Percent;
    buffer[offset++] = CharCodes_default.P;
    buffer[offset++] = CharCodes_default.D;
    buffer[offset++] = CharCodes_default.F;
    buffer[offset++] = CharCodes_default.Dash;
    offset += copyStringIntoBuffer(this.major, buffer, offset);
    buffer[offset++] = CharCodes_default.Period;
    offset += copyStringIntoBuffer(this.minor, buffer, offset);
    buffer[offset++] = CharCodes_default.Newline;
    buffer[offset++] = CharCodes_default.Percent;
    buffer[offset++] = 129;
    buffer[offset++] = 129;
    buffer[offset++] = 129;
    buffer[offset++] = 129;
    return offset - initialOffset;
  }
};
__publicField(_PDFHeader, "forVersion", (major, minor) => new _PDFHeader(major, minor));
var PDFHeader = _PDFHeader;
var PDFHeader_default = PDFHeader;

// src/core/objects/PDFObject.ts
var PDFObject = class {
  clone(_context) {
    throw new MethodNotImplementedError(this.constructor.name, "clone");
  }
  toString() {
    throw new MethodNotImplementedError(this.constructor.name, "toString");
  }
  sizeInBytes() {
    throw new MethodNotImplementedError(this.constructor.name, "sizeInBytes");
  }
  copyBytesInto(_buffer, _offset) {
    throw new MethodNotImplementedError(this.constructor.name, "copyBytesInto");
  }
};
var PDFObject_default = PDFObject;

// src/core/objects/PDFNumber.ts
var _PDFNumber = class _PDFNumber extends PDFObject_default {
  constructor(value) {
    super();
    __publicField(this, "numberValue");
    __publicField(this, "stringValue");
    this.numberValue = value;
    this.stringValue = numberToString(value);
  }
  asNumber() {
    return this.numberValue;
  }
  /** @deprecated in favor of [[PDFNumber.asNumber]] */
  value() {
    return this.numberValue;
  }
  clone() {
    return _PDFNumber.of(this.numberValue);
  }
  toString() {
    return this.stringValue;
  }
  sizeInBytes() {
    return this.stringValue.length;
  }
  copyBytesInto(buffer, offset) {
    offset += copyStringIntoBuffer(this.stringValue, buffer, offset);
    return this.stringValue.length;
  }
};
__publicField(_PDFNumber, "of", (value) => new _PDFNumber(value));
var PDFNumber = _PDFNumber;
var PDFNumber_default = PDFNumber;

// src/core/objects/PDFArray.ts
var _PDFArray = class _PDFArray extends PDFObject_default {
  constructor(context) {
    super();
    __publicField(this, "array");
    __publicField(this, "context");
    this.array = [];
    this.context = context;
  }
  size() {
    return this.array.length;
  }
  push(object) {
    this.array.push(object);
  }
  insert(index, object) {
    this.array.splice(index, 0, object);
  }
  indexOf(object) {
    const index = this.array.indexOf(object);
    return index === -1 ? void 0 : index;
  }
  remove(index) {
    this.array.splice(index, 1);
  }
  set(idx, object) {
    this.array[idx] = object;
  }
  get(index) {
    return this.array[index];
  }
  lookupMaybe(index, ...types) {
    return this.context.lookupMaybe(
      this.get(index),
      ...types
    );
  }
  lookup(index, ...types) {
    return this.context.lookup(
      this.get(index),
      ...types
    );
  }
  asRectangle() {
    if (this.size() !== 4) throw new PDFArrayIsNotRectangleError(this.size());
    const lowerLeftX = this.lookup(0, PDFNumber_default).asNumber();
    const lowerLeftY = this.lookup(1, PDFNumber_default).asNumber();
    const upperRightX = this.lookup(2, PDFNumber_default).asNumber();
    const upperRightY = this.lookup(3, PDFNumber_default).asNumber();
    const x = lowerLeftX;
    const y = lowerLeftY;
    const width = upperRightX - lowerLeftX;
    const height = upperRightY - lowerLeftY;
    return { x, y, width, height };
  }
  asArray() {
    return this.array.slice();
  }
  clone(context) {
    const clone = _PDFArray.withContext(context || this.context);
    for (let idx = 0, len = this.size(); idx < len; idx++) {
      clone.push(this.array[idx]);
    }
    return clone;
  }
  toString() {
    let arrayString = "[ ";
    for (let idx = 0, len = this.size(); idx < len; idx++) {
      arrayString += this.get(idx).toString();
      arrayString += " ";
    }
    arrayString += "]";
    return arrayString;
  }
  sizeInBytes() {
    let size = 3;
    for (let idx = 0, len = this.size(); idx < len; idx++) {
      size += this.get(idx).sizeInBytes() + 1;
    }
    return size;
  }
  copyBytesInto(buffer, offset) {
    const initialOffset = offset;
    buffer[offset++] = CharCodes_default.LeftSquareBracket;
    buffer[offset++] = CharCodes_default.Space;
    for (let idx = 0, len = this.size(); idx < len; idx++) {
      offset += this.get(idx).copyBytesInto(buffer, offset);
      buffer[offset++] = CharCodes_default.Space;
    }
    buffer[offset++] = CharCodes_default.RightSquareBracket;
    return offset - initialOffset;
  }
  scalePDFNumbers(x, y) {
    for (let idx = 0, len = this.size(); idx < len; idx++) {
      const el = this.lookup(idx);
      if (el instanceof PDFNumber_default) {
        const factor = idx % 2 === 0 ? x : y;
        this.set(idx, PDFNumber_default.of(el.asNumber() * factor));
      }
    }
  }
};
__publicField(_PDFArray, "withContext", (context) => new _PDFArray(context));
var PDFArray = _PDFArray;
var PDFArray_default = PDFArray;

// src/core/objects/PDFBool.ts
var ENFORCER = {};
var _PDFBool = class _PDFBool extends PDFObject_default {
  constructor(enforcer, value) {
    if (enforcer !== ENFORCER) throw new PrivateConstructorError("PDFBool");
    super();
    __publicField(this, "value");
    this.value = value;
  }
  asBoolean() {
    return this.value;
  }
  clone() {
    return this;
  }
  toString() {
    return String(this.value);
  }
  sizeInBytes() {
    return this.value ? 4 : 5;
  }
  copyBytesInto(buffer, offset) {
    if (this.value) {
      buffer[offset++] = CharCodes_default.t;
      buffer[offset++] = CharCodes_default.r;
      buffer[offset++] = CharCodes_default.u;
      buffer[offset++] = CharCodes_default.e;
      return 4;
    } else {
      buffer[offset++] = CharCodes_default.f;
      buffer[offset++] = CharCodes_default.a;
      buffer[offset++] = CharCodes_default.l;
      buffer[offset++] = CharCodes_default.s;
      buffer[offset++] = CharCodes_default.e;
      return 5;
    }
  }
};
__publicField(_PDFBool, "True", new _PDFBool(ENFORCER, true));
__publicField(_PDFBool, "False", new _PDFBool(ENFORCER, false));
var PDFBool = _PDFBool;
var PDFBool_default = PDFBool;

// src/core/syntax/Delimiters.ts
var IsDelimiter = new Uint8Array(256);
IsDelimiter[CharCodes_default.LeftParen] = 1;
IsDelimiter[CharCodes_default.RightParen] = 1;
IsDelimiter[CharCodes_default.LessThan] = 1;
IsDelimiter[CharCodes_default.GreaterThan] = 1;
IsDelimiter[CharCodes_default.LeftSquareBracket] = 1;
IsDelimiter[CharCodes_default.RightSquareBracket] = 1;
IsDelimiter[CharCodes_default.LeftCurly] = 1;
IsDelimiter[CharCodes_default.RightCurly] = 1;
IsDelimiter[CharCodes_default.ForwardSlash] = 1;
IsDelimiter[CharCodes_default.Percent] = 1;

// src/core/syntax/Whitespace.ts
var IsWhitespace = new Uint8Array(256);
IsWhitespace[CharCodes_default.Null] = 1;
IsWhitespace[CharCodes_default.Tab] = 1;
IsWhitespace[CharCodes_default.Newline] = 1;
IsWhitespace[CharCodes_default.FormFeed] = 1;
IsWhitespace[CharCodes_default.CarriageReturn] = 1;
IsWhitespace[CharCodes_default.Space] = 1;

// src/core/syntax/Irregular.ts
var IsIrregular = new Uint8Array(256);
for (let idx = 0, len = 256; idx < len; idx++) {
  IsIrregular[idx] = IsWhitespace[idx] || IsDelimiter[idx] ? 1 : 0;
}
IsIrregular[CharCodes_default.Hash] = 1;

// src/core/objects/PDFName.ts
var decodeName = (name) => name.replace(/#([\dABCDEF]{2})/g, (_, hex) => charFromHexCode(hex));
var isRegularChar = (charCode) => charCode >= CharCodes_default.ExclamationPoint && charCode <= CharCodes_default.Tilde && !IsIrregular[charCode];
var ENFORCER2 = {};
var pool = /* @__PURE__ */ new Map();
var _PDFName = class _PDFName extends PDFObject_default {
  constructor(enforcer, name) {
    if (enforcer !== ENFORCER2) throw new PrivateConstructorError("PDFName");
    super();
    /* tslint:enable member-ordering */
    __publicField(this, "encodedName");
    let encodedName = "/";
    for (let idx = 0, len = name.length; idx < len; idx++) {
      const character = name[idx];
      const code = toCharCode(character);
      encodedName += isRegularChar(code) ? character : `#${toHexString(code)}`;
    }
    this.encodedName = encodedName;
  }
  asBytes() {
    const bytes = [];
    let hex = "";
    let escaped = false;
    const pushByte = (byte) => {
      if (byte !== void 0) bytes.push(byte);
      escaped = false;
    };
    for (let idx = 1, len = this.encodedName.length; idx < len; idx++) {
      const char = this.encodedName[idx];
      const byte = toCharCode(char);
      const nextChar = this.encodedName[idx + 1];
      if (!escaped) {
        if (byte === CharCodes_default.Hash) escaped = true;
        else pushByte(byte);
      } else {
        if (byte >= CharCodes_default.Zero && byte <= CharCodes_default.Nine || byte >= CharCodes_default.a && byte <= CharCodes_default.f || byte >= CharCodes_default.A && byte <= CharCodes_default.F) {
          hex += char;
          if (hex.length === 2 || !(nextChar >= "0" && nextChar <= "9" || nextChar >= "a" && nextChar <= "f" || nextChar >= "A" && nextChar <= "F")) {
            pushByte(parseInt(hex, 16));
            hex = "";
          }
        } else {
          pushByte(byte);
        }
      }
    }
    return new Uint8Array(bytes);
  }
  // TODO: This should probably use `utf8Decode()`
  // TODO: Polyfill Array.from?
  decodeText() {
    const bytes = this.asBytes();
    return String.fromCharCode(...Array.from(bytes));
  }
  asString() {
    return this.encodedName;
  }
  /** @deprecated in favor of [[PDFName.asString]] */
  value() {
    return this.encodedName;
  }
  clone() {
    return this;
  }
  toString() {
    return this.encodedName;
  }
  sizeInBytes() {
    return this.encodedName.length;
  }
  copyBytesInto(buffer, offset) {
    offset += copyStringIntoBuffer(this.encodedName, buffer, offset);
    return this.encodedName.length;
  }
};
__publicField(_PDFName, "of", (name) => {
  const decodedValue = decodeName(name);
  let instance = pool.get(decodedValue);
  if (!instance) {
    instance = new _PDFName(ENFORCER2, decodedValue);
    pool.set(decodedValue, instance);
  }
  return instance;
});
/* tslint:disable member-ordering */
__publicField(_PDFName, "Length", _PDFName.of("Length"));
__publicField(_PDFName, "FlateDecode", _PDFName.of("FlateDecode"));
__publicField(_PDFName, "Resources", _PDFName.of("Resources"));
__publicField(_PDFName, "Font", _PDFName.of("Font"));
__publicField(_PDFName, "XObject", _PDFName.of("XObject"));
__publicField(_PDFName, "ExtGState", _PDFName.of("ExtGState"));
__publicField(_PDFName, "Contents", _PDFName.of("Contents"));
__publicField(_PDFName, "Type", _PDFName.of("Type"));
__publicField(_PDFName, "Parent", _PDFName.of("Parent"));
__publicField(_PDFName, "MediaBox", _PDFName.of("MediaBox"));
__publicField(_PDFName, "Page", _PDFName.of("Page"));
__publicField(_PDFName, "Annots", _PDFName.of("Annots"));
__publicField(_PDFName, "TrimBox", _PDFName.of("TrimBox"));
__publicField(_PDFName, "ArtBox", _PDFName.of("ArtBox"));
__publicField(_PDFName, "BleedBox", _PDFName.of("BleedBox"));
__publicField(_PDFName, "CropBox", _PDFName.of("CropBox"));
__publicField(_PDFName, "Rotate", _PDFName.of("Rotate"));
__publicField(_PDFName, "Title", _PDFName.of("Title"));
__publicField(_PDFName, "Author", _PDFName.of("Author"));
__publicField(_PDFName, "Subject", _PDFName.of("Subject"));
__publicField(_PDFName, "Creator", _PDFName.of("Creator"));
__publicField(_PDFName, "Keywords", _PDFName.of("Keywords"));
__publicField(_PDFName, "Producer", _PDFName.of("Producer"));
__publicField(_PDFName, "CreationDate", _PDFName.of("CreationDate"));
__publicField(_PDFName, "ModDate", _PDFName.of("ModDate"));
var PDFName = _PDFName;
var PDFName_default = PDFName;

// src/core/objects/PDFNull.ts
var PDFNull = class extends PDFObject_default {
  asNull() {
    return null;
  }
  clone() {
    return this;
  }
  toString() {
    return "null";
  }
  sizeInBytes() {
    return 4;
  }
  copyBytesInto(buffer, offset) {
    buffer[offset++] = CharCodes_default.n;
    buffer[offset++] = CharCodes_default.u;
    buffer[offset++] = CharCodes_default.l;
    buffer[offset++] = CharCodes_default.l;
    return 4;
  }
};
var PDFNull_default = new PDFNull();

// src/core/objects/PDFDict.ts
var _PDFDict = class _PDFDict extends PDFObject_default {
  constructor(map, context) {
    super();
    __publicField(this, "context");
    __publicField(this, "dict");
    this.dict = map;
    this.context = context;
  }
  keys() {
    return Array.from(this.dict.keys());
  }
  values() {
    return Array.from(this.dict.values());
  }
  entries() {
    return Array.from(this.dict.entries());
  }
  set(key, value) {
    this.dict.set(key, value);
  }
  get(key, preservePDFNull = false) {
    const value = this.dict.get(key);
    if (value === PDFNull_default && !preservePDFNull) return void 0;
    return value;
  }
  has(key) {
    const value = this.dict.get(key);
    return value !== void 0 && value !== PDFNull_default;
  }
  lookupMaybe(key, ...types) {
    const preservePDFNull = types.includes(PDFNull_default);
    const value = this.context.lookupMaybe(
      this.get(key, preservePDFNull),
      ...types
    );
    if (value === PDFNull_default && !preservePDFNull) return void 0;
    return value;
  }
  lookup(key, ...types) {
    const preservePDFNull = types.includes(PDFNull_default);
    const value = this.context.lookup(
      this.get(key, preservePDFNull),
      ...types
    );
    if (value === PDFNull_default && !preservePDFNull) return void 0;
    return value;
  }
  delete(key) {
    return this.dict.delete(key);
  }
  asMap() {
    return new Map(this.dict);
  }
  /** Generate a random key that doesn't exist in current key set */
  uniqueKey(tag = "") {
    const existingKeys = this.keys();
    let key = PDFName_default.of(this.context.addRandomSuffix(tag, 10));
    while (existingKeys.includes(key)) {
      key = PDFName_default.of(this.context.addRandomSuffix(tag, 10));
    }
    return key;
  }
  clone(context) {
    const clone = _PDFDict.withContext(context || this.context);
    const entries = this.entries();
    for (let idx = 0, len = entries.length; idx < len; idx++) {
      const [key, value] = entries[idx];
      clone.set(key, value);
    }
    return clone;
  }
  toString() {
    let dictString = "<<\n";
    const entries = this.entries();
    for (let idx = 0, len = entries.length; idx < len; idx++) {
      const [key, value] = entries[idx];
      dictString += key.toString() + " " + value.toString() + "\n";
    }
    dictString += ">>";
    return dictString;
  }
  sizeInBytes() {
    let size = 5;
    const entries = this.entries();
    for (let idx = 0, len = entries.length; idx < len; idx++) {
      const [key, value] = entries[idx];
      size += key.sizeInBytes() + value.sizeInBytes() + 2;
    }
    return size;
  }
  copyBytesInto(buffer, offset) {
    const initialOffset = offset;
    buffer[offset++] = CharCodes_default.LessThan;
    buffer[offset++] = CharCodes_default.LessThan;
    buffer[offset++] = CharCodes_default.Newline;
    const entries = this.entries();
    for (let idx = 0, len = entries.length; idx < len; idx++) {
      const [key, value] = entries[idx];
      offset += key.copyBytesInto(buffer, offset);
      buffer[offset++] = CharCodes_default.Space;
      offset += value.copyBytesInto(buffer, offset);
      buffer[offset++] = CharCodes_default.Newline;
    }
    buffer[offset++] = CharCodes_default.GreaterThan;
    buffer[offset++] = CharCodes_default.GreaterThan;
    return offset - initialOffset;
  }
};
__publicField(_PDFDict, "withContext", (context) => new _PDFDict(/* @__PURE__ */ new Map(), context));
__publicField(_PDFDict, "fromMapWithContext", (map, context) => new _PDFDict(map, context));
var PDFDict = _PDFDict;
var PDFDict_default = PDFDict;

// src/core/objects/PDFStream.ts
var PDFStream = class extends PDFObject_default {
  constructor(dict) {
    super();
    __publicField(this, "dict");
    this.dict = dict;
  }
  clone(_context) {
    throw new MethodNotImplementedError(this.constructor.name, "clone");
  }
  getContentsString() {
    throw new MethodNotImplementedError(
      this.constructor.name,
      "getContentsString"
    );
  }
  getContents() {
    throw new MethodNotImplementedError(this.constructor.name, "getContents");
  }
  getContentsSize() {
    throw new MethodNotImplementedError(
      this.constructor.name,
      "getContentsSize"
    );
  }
  updateDict() {
    const contentsSize = this.getContentsSize();
    this.dict.set(PDFName_default.Length, PDFNumber_default.of(contentsSize));
  }
  sizeInBytes() {
    this.updateDict();
    return this.dict.sizeInBytes() + this.getContentsSize() + 18;
  }
  toString() {
    this.updateDict();
    let streamString = this.dict.toString();
    streamString += "\nstream\n";
    streamString += this.getContentsString();
    streamString += "\nendstream";
    return streamString;
  }
  copyBytesInto(buffer, offset) {
    this.updateDict();
    const initialOffset = offset;
    offset += this.dict.copyBytesInto(buffer, offset);
    buffer[offset++] = CharCodes_default.Newline;
    buffer[offset++] = CharCodes_default.s;
    buffer[offset++] = CharCodes_default.t;
    buffer[offset++] = CharCodes_default.r;
    buffer[offset++] = CharCodes_default.e;
    buffer[offset++] = CharCodes_default.a;
    buffer[offset++] = CharCodes_default.m;
    buffer[offset++] = CharCodes_default.Newline;
    const contents = this.getContents();
    for (let idx = 0, len = contents.length; idx < len; idx++) {
      buffer[offset++] = contents[idx];
    }
    buffer[offset++] = CharCodes_default.Newline;
    buffer[offset++] = CharCodes_default.e;
    buffer[offset++] = CharCodes_default.n;
    buffer[offset++] = CharCodes_default.d;
    buffer[offset++] = CharCodes_default.s;
    buffer[offset++] = CharCodes_default.t;
    buffer[offset++] = CharCodes_default.r;
    buffer[offset++] = CharCodes_default.e;
    buffer[offset++] = CharCodes_default.a;
    buffer[offset++] = CharCodes_default.m;
    return offset - initialOffset;
  }
};
var PDFStream_default = PDFStream;

// src/core/objects/PDFRawStream.ts
var _PDFRawStream = class _PDFRawStream extends PDFStream_default {
  constructor(dict, contents) {
    super(dict);
    __publicField(this, "contents");
    this.contents = contents;
  }
  asUint8Array() {
    return this.contents.slice();
  }
  clone(context) {
    return _PDFRawStream.of(this.dict.clone(context), this.contents.slice());
  }
  getContentsString() {
    return arrayAsString(this.contents);
  }
  getContents() {
    return this.contents;
  }
  getContentsSize() {
    return this.contents.length;
  }
};
__publicField(_PDFRawStream, "of", (dict, contents) => new _PDFRawStream(dict, contents));
var PDFRawStream = _PDFRawStream;
var PDFRawStream_default = PDFRawStream;

// src/core/objects/PDFRef.ts
var ENFORCER3 = {};
var pool2 = /* @__PURE__ */ new Map();
var _PDFRef = class _PDFRef extends PDFObject_default {
  constructor(enforcer, objectNumber, generationNumber) {
    if (enforcer !== ENFORCER3) throw new PrivateConstructorError("PDFRef");
    super();
    __publicField(this, "objectNumber");
    __publicField(this, "generationNumber");
    __publicField(this, "tag");
    this.objectNumber = objectNumber;
    this.generationNumber = generationNumber;
    this.tag = `${objectNumber} ${generationNumber} R`;
  }
  clone() {
    return this;
  }
  toString() {
    return this.tag;
  }
  sizeInBytes() {
    return this.tag.length;
  }
  copyBytesInto(buffer, offset) {
    offset += copyStringIntoBuffer(this.tag, buffer, offset);
    return this.tag.length;
  }
};
__publicField(_PDFRef, "of", (objectNumber, generationNumber = 0) => {
  const tag = `${objectNumber} ${generationNumber} R`;
  let instance = pool2.get(tag);
  if (!instance) {
    instance = new _PDFRef(ENFORCER3, objectNumber, generationNumber);
    pool2.set(tag, instance);
  }
  return instance;
});
var PDFRef = _PDFRef;
var PDFRef_default = PDFRef;

// src/core/operators/PDFOperator.ts
var _PDFOperator = class _PDFOperator {
  constructor(name, args) {
    __publicField(this, "name");
    __publicField(this, "args");
    this.name = name;
    this.args = args || [];
  }
  clone(context) {
    const args = new Array(this.args.length);
    for (let idx = 0, len = args.length; idx < len; idx++) {
      const arg = this.args[idx];
      args[idx] = arg instanceof PDFObject_default ? arg.clone(context) : arg;
    }
    return _PDFOperator.of(this.name, args);
  }
  toString() {
    let value = "";
    for (let idx = 0, len = this.args.length; idx < len; idx++) {
      value += String(this.args[idx]) + " ";
    }
    value += this.name;
    return value;
  }
  sizeInBytes() {
    let size = 0;
    for (let idx = 0, len = this.args.length; idx < len; idx++) {
      const arg = this.args[idx];
      size += (arg instanceof PDFObject_default ? arg.sizeInBytes() : arg.length) + 1;
    }
    size += this.name.length;
    return size;
  }
  copyBytesInto(buffer, offset) {
    const initialOffset = offset;
    for (let idx = 0, len = this.args.length; idx < len; idx++) {
      const arg = this.args[idx];
      if (arg instanceof PDFObject_default) {
        offset += arg.copyBytesInto(buffer, offset);
      } else {
        offset += copyStringIntoBuffer(arg, buffer, offset);
      }
      buffer[offset++] = CharCodes_default.Space;
    }
    offset += copyStringIntoBuffer(this.name, buffer, offset);
    return offset - initialOffset;
  }
};
__publicField(_PDFOperator, "of", (name, args) => new _PDFOperator(name, args));
var PDFOperator = _PDFOperator;
var PDFOperator_default = PDFOperator;

// src/core/operators/PDFOperatorNames.ts
var PDFOperatorNames = /* @__PURE__ */ ((PDFOperatorNames2) => {
  PDFOperatorNames2["NonStrokingColor"] = "sc";
  PDFOperatorNames2["NonStrokingColorN"] = "scn";
  PDFOperatorNames2["NonStrokingColorRgb"] = "rg";
  PDFOperatorNames2["NonStrokingColorGray"] = "g";
  PDFOperatorNames2["NonStrokingColorCmyk"] = "k";
  PDFOperatorNames2["NonStrokingColorspace"] = "cs";
  PDFOperatorNames2["StrokingColor"] = "SC";
  PDFOperatorNames2["StrokingColorN"] = "SCN";
  PDFOperatorNames2["StrokingColorRgb"] = "RG";
  PDFOperatorNames2["StrokingColorGray"] = "G";
  PDFOperatorNames2["StrokingColorCmyk"] = "K";
  PDFOperatorNames2["StrokingColorspace"] = "CS";
  PDFOperatorNames2["BeginMarkedContentSequence"] = "BDC";
  PDFOperatorNames2["BeginMarkedContent"] = "BMC";
  PDFOperatorNames2["EndMarkedContent"] = "EMC";
  PDFOperatorNames2["MarkedContentPointWithProps"] = "DP";
  PDFOperatorNames2["MarkedContentPoint"] = "MP";
  PDFOperatorNames2["DrawObject"] = "Do";
  PDFOperatorNames2["ConcatTransformationMatrix"] = "cm";
  PDFOperatorNames2["PopGraphicsState"] = "Q";
  PDFOperatorNames2["PushGraphicsState"] = "q";
  PDFOperatorNames2["SetFlatness"] = "i";
  PDFOperatorNames2["SetGraphicsStateParams"] = "gs";
  PDFOperatorNames2["SetLineCapStyle"] = "J";
  PDFOperatorNames2["SetLineDashPattern"] = "d";
  PDFOperatorNames2["SetLineJoinStyle"] = "j";
  PDFOperatorNames2["SetLineMiterLimit"] = "M";
  PDFOperatorNames2["SetLineWidth"] = "w";
  PDFOperatorNames2["SetTextMatrix"] = "Tm";
  PDFOperatorNames2["SetRenderingIntent"] = "ri";
  PDFOperatorNames2["AppendRectangle"] = "re";
  PDFOperatorNames2["BeginInlineImage"] = "BI";
  PDFOperatorNames2["BeginInlineImageData"] = "ID";
  PDFOperatorNames2["EndInlineImage"] = "EI";
  PDFOperatorNames2["ClipEvenOdd"] = "W*";
  PDFOperatorNames2["ClipNonZero"] = "W";
  PDFOperatorNames2["CloseAndStroke"] = "s";
  PDFOperatorNames2["CloseFillEvenOddAndStroke"] = "b*";
  PDFOperatorNames2["CloseFillNonZeroAndStroke"] = "b";
  PDFOperatorNames2["ClosePath"] = "h";
  PDFOperatorNames2["AppendBezierCurve"] = "c";
  PDFOperatorNames2["CurveToReplicateFinalPoint"] = "y";
  PDFOperatorNames2["CurveToReplicateInitialPoint"] = "v";
  PDFOperatorNames2["EndPath"] = "n";
  PDFOperatorNames2["FillEvenOddAndStroke"] = "B*";
  PDFOperatorNames2["FillEvenOdd"] = "f*";
  PDFOperatorNames2["FillNonZeroAndStroke"] = "B";
  PDFOperatorNames2["FillNonZero"] = "f";
  PDFOperatorNames2["LegacyFillNonZero"] = "F";
  PDFOperatorNames2["LineTo"] = "l";
  PDFOperatorNames2["MoveTo"] = "m";
  PDFOperatorNames2["ShadingFill"] = "sh";
  PDFOperatorNames2["StrokePath"] = "S";
  PDFOperatorNames2["BeginText"] = "BT";
  PDFOperatorNames2["EndText"] = "ET";
  PDFOperatorNames2["MoveText"] = "Td";
  PDFOperatorNames2["MoveTextSetLeading"] = "TD";
  PDFOperatorNames2["NextLine"] = "T*";
  PDFOperatorNames2["SetCharacterSpacing"] = "Tc";
  PDFOperatorNames2["SetFontAndSize"] = "Tf";
  PDFOperatorNames2["SetTextHorizontalScaling"] = "Tz";
  PDFOperatorNames2["SetTextLineHeight"] = "TL";
  PDFOperatorNames2["SetTextRenderingMode"] = "Tr";
  PDFOperatorNames2["SetTextRise"] = "Ts";
  PDFOperatorNames2["SetWordSpacing"] = "Tw";
  PDFOperatorNames2["ShowText"] = "Tj";
  PDFOperatorNames2["ShowTextAdjusted"] = "TJ";
  PDFOperatorNames2["ShowTextLine"] = "'";
  PDFOperatorNames2["ShowTextLineAndSpace"] = '"';
  PDFOperatorNames2["Type3D0"] = "d0";
  PDFOperatorNames2["Type3D1"] = "d1";
  PDFOperatorNames2["BeginCompatibilitySection"] = "BX";
  PDFOperatorNames2["EndCompatibilitySection"] = "EX";
  return PDFOperatorNames2;
})(PDFOperatorNames || {});
var PDFOperatorNames_default = PDFOperatorNames;

// src/core/structures/PDFFlateStream.ts
var import_pako = __toESM(require("pako"));
var PDFFlateStream = class extends PDFStream_default {
  constructor(dict, encode) {
    super(dict);
    __publicField(this, "contentsCache");
    __publicField(this, "encode");
    __publicField(this, "computeContents", () => {
      const unencodedContents = this.getUnencodedContents();
      return this.encode ? import_pako.default.deflate(unencodedContents) : unencodedContents;
    });
    this.encode = encode;
    if (encode) dict.set(PDFName_default.of("Filter"), PDFName_default.of("FlateDecode"));
    this.contentsCache = Cache_default.populatedBy(this.computeContents);
  }
  getContents() {
    return this.contentsCache.access();
  }
  getContentsSize() {
    return this.contentsCache.access().length;
  }
  getUnencodedContents() {
    throw new MethodNotImplementedError(
      this.constructor.name,
      "getUnencodedContents"
    );
  }
};
var PDFFlateStream_default = PDFFlateStream;

// src/core/structures/PDFContentStream.ts
var _PDFContentStream = class _PDFContentStream extends PDFFlateStream_default {
  constructor(dict, operators, encode = true) {
    super(dict, encode);
    __publicField(this, "operators");
    this.operators = operators;
  }
  push(...operators) {
    this.operators.push(...operators);
  }
  clone(context) {
    const operators = new Array(this.operators.length);
    for (let idx = 0, len = this.operators.length; idx < len; idx++) {
      operators[idx] = this.operators[idx].clone(context);
    }
    const { dict, encode } = this;
    return _PDFContentStream.of(dict.clone(context), operators, encode);
  }
  getContentsString() {
    let value = "";
    for (let idx = 0, len = this.operators.length; idx < len; idx++) {
      value += `${this.operators[idx]}
`;
    }
    return value;
  }
  getUnencodedContents() {
    const buffer = new Uint8Array(this.getUnencodedContentsSize());
    let offset = 0;
    for (let idx = 0, len = this.operators.length; idx < len; idx++) {
      offset += this.operators[idx].copyBytesInto(buffer, offset);
      buffer[offset++] = CharCodes_default.Newline;
    }
    return buffer;
  }
  getUnencodedContentsSize() {
    let size = 0;
    for (let idx = 0, len = this.operators.length; idx < len; idx++) {
      size += this.operators[idx].sizeInBytes() + 1;
    }
    return size;
  }
};
__publicField(_PDFContentStream, "of", (dict, operators, encode = true) => new _PDFContentStream(dict, operators, encode));
var PDFContentStream = _PDFContentStream;
var PDFContentStream_default = PDFContentStream;

// src/utils/rng.ts
var _SimpleRNG = class _SimpleRNG {
  constructor(seed) {
    __publicField(this, "seed");
    this.seed = seed;
  }
  nextInt() {
    const x = Math.sin(this.seed++) * 1e4;
    return x - Math.floor(x);
  }
};
__publicField(_SimpleRNG, "withSeed", (seed) => new _SimpleRNG(seed));
var SimpleRNG = _SimpleRNG;

// src/core/PDFContext.ts
var byAscendingObjectNumber = ([a], [b]) => a.objectNumber - b.objectNumber;
var _PDFContext = class _PDFContext {
  constructor() {
    __publicField(this, "largestObjectNumber");
    __publicField(this, "header");
    __publicField(this, "trailerInfo");
    __publicField(this, "rng");
    __publicField(this, "indirectObjects");
    __publicField(this, "pushGraphicsStateContentStreamRef");
    __publicField(this, "popGraphicsStateContentStreamRef");
    this.largestObjectNumber = 0;
    this.header = PDFHeader_default.forVersion(1, 7);
    this.trailerInfo = {};
    this.indirectObjects = /* @__PURE__ */ new Map();
    this.rng = SimpleRNG.withSeed(1);
  }
  assign(ref, object) {
    this.indirectObjects.set(ref, object);
    if (ref.objectNumber > this.largestObjectNumber) {
      this.largestObjectNumber = ref.objectNumber;
    }
  }
  nextRef() {
    this.largestObjectNumber += 1;
    return PDFRef_default.of(this.largestObjectNumber);
  }
  register(object) {
    const ref = this.nextRef();
    this.assign(ref, object);
    return ref;
  }
  delete(ref) {
    return this.indirectObjects.delete(ref);
  }
  lookupMaybe(ref, ...types) {
    const preservePDFNull = types.includes(PDFNull_default);
    const result = ref instanceof PDFRef_default ? this.indirectObjects.get(ref) : ref;
    if (!result || result === PDFNull_default && !preservePDFNull) return void 0;
    for (let idx = 0, len = types.length; idx < len; idx++) {
      const type = types[idx];
      if (type === PDFNull_default) {
        if (result === PDFNull_default) return result;
      } else {
        if (result instanceof type) return result;
      }
    }
    throw new UnexpectedObjectTypeError(types, result);
  }
  lookup(ref, ...types) {
    const result = ref instanceof PDFRef_default ? this.indirectObjects.get(ref) : ref;
    if (types.length === 0) return result;
    for (let idx = 0, len = types.length; idx < len; idx++) {
      const type = types[idx];
      if (type === PDFNull_default) {
        if (result === PDFNull_default) return result;
      } else {
        if (result instanceof type) return result;
      }
    }
    throw new UnexpectedObjectTypeError(types, result);
  }
  getObjectRef(pdfObject) {
    const entries = Array.from(this.indirectObjects.entries());
    for (let idx = 0, len = entries.length; idx < len; idx++) {
      const [ref, object] = entries[idx];
      if (object === pdfObject) {
        return ref;
      }
    }
    return void 0;
  }
  enumerateIndirectObjects() {
    return Array.from(this.indirectObjects.entries()).sort(
      byAscendingObjectNumber
    );
  }
  obj(literal) {
    if (literal instanceof PDFObject_default) {
      return literal;
    } else if (literal === null || literal === void 0) {
      return PDFNull_default;
    } else if (typeof literal === "string") {
      return PDFName_default.of(literal);
    } else if (typeof literal === "number") {
      return PDFNumber_default.of(literal);
    } else if (typeof literal === "boolean") {
      return literal ? PDFBool_default.True : PDFBool_default.False;
    } else if (Array.isArray(literal)) {
      const array = PDFArray_default.withContext(this);
      for (let idx = 0, len = literal.length; idx < len; idx++) {
        array.push(this.obj(literal[idx]));
      }
      return array;
    } else {
      const dict = PDFDict_default.withContext(this);
      const keys = Object.keys(literal);
      for (let idx = 0, len = keys.length; idx < len; idx++) {
        const key = keys[idx];
        const value = literal[key];
        if (value !== void 0) dict.set(PDFName_default.of(key), this.obj(value));
      }
      return dict;
    }
  }
  stream(contents, dict = {}) {
    return PDFRawStream_default.of(this.obj(dict), typedArrayFor(contents));
  }
  flateStream(contents, dict = {}) {
    return this.stream(import_pako2.default.deflate(typedArrayFor(contents)), {
      ...dict,
      Filter: "FlateDecode"
    });
  }
  contentStream(operators, dict = {}) {
    return PDFContentStream_default.of(this.obj(dict), operators);
  }
  formXObject(operators, dict = {}) {
    return this.contentStream(operators, {
      BBox: this.obj([0, 0, 0, 0]),
      Matrix: this.obj([1, 0, 0, 1, 0, 0]),
      ...dict,
      Type: "XObject",
      Subtype: "Form"
    });
  }
  /*
   * Reference to PDFContentStream that contains a single PDFOperator: `q`.
   * Used by [[PDFPageLeaf]] instances to ensure that when content streams are
   * added to a modified PDF, they start in the default, unchanged graphics
   * state.
   */
  getPushGraphicsStateContentStream() {
    if (this.pushGraphicsStateContentStreamRef) {
      return this.pushGraphicsStateContentStreamRef;
    }
    const dict = this.obj({});
    const op = PDFOperator_default.of(PDFOperatorNames_default.PushGraphicsState);
    const stream2 = PDFContentStream_default.of(dict, [op]);
    this.pushGraphicsStateContentStreamRef = this.register(stream2);
    return this.pushGraphicsStateContentStreamRef;
  }
  /*
   * Reference to PDFContentStream that contains a single PDFOperator: `Q`.
   * Used by [[PDFPageLeaf]] instances to ensure that when content streams are
   * added to a modified PDF, they start in the default, unchanged graphics
   * state.
   */
  getPopGraphicsStateContentStream() {
    if (this.popGraphicsStateContentStreamRef) {
      return this.popGraphicsStateContentStreamRef;
    }
    const dict = this.obj({});
    const op = PDFOperator_default.of(PDFOperatorNames_default.PopGraphicsState);
    const stream2 = PDFContentStream_default.of(dict, [op]);
    this.popGraphicsStateContentStreamRef = this.register(stream2);
    return this.popGraphicsStateContentStreamRef;
  }
  addRandomSuffix(prefix, suffixLength = 4) {
    return `${prefix}-${Math.floor(this.rng.nextInt() * 10 ** suffixLength)}`;
  }
};
__publicField(_PDFContext, "create", () => new _PDFContext());
var PDFContext = _PDFContext;
var PDFContext_default = PDFContext;

// src/core/structures/PDFPageLeaf.ts
var _PDFPageLeaf = class _PDFPageLeaf extends PDFDict_default {
  constructor(map, context, autoNormalizeCTM = true) {
    super(map, context);
    __publicField(this, "normalized", false);
    __publicField(this, "autoNormalizeCTM");
    this.autoNormalizeCTM = autoNormalizeCTM;
  }
  clone(context) {
    const clone = _PDFPageLeaf.fromMapWithContext(
      /* @__PURE__ */ new Map(),
      context || this.context,
      this.autoNormalizeCTM
    );
    const entries = this.entries();
    for (let idx = 0, len = entries.length; idx < len; idx++) {
      const [key, value] = entries[idx];
      clone.set(key, value);
    }
    return clone;
  }
  Parent() {
    return this.lookupMaybe(PDFName_default.Parent, PDFDict_default);
  }
  Contents() {
    return this.lookup(PDFName_default.of("Contents"));
  }
  Annots() {
    return this.lookupMaybe(PDFName_default.Annots, PDFArray_default);
  }
  BleedBox() {
    return this.lookupMaybe(PDFName_default.BleedBox, PDFArray_default);
  }
  TrimBox() {
    return this.lookupMaybe(PDFName_default.TrimBox, PDFArray_default);
  }
  ArtBox() {
    return this.lookupMaybe(PDFName_default.ArtBox, PDFArray_default);
  }
  Resources() {
    const dictOrRef = this.getInheritableAttribute(PDFName_default.Resources);
    return this.context.lookupMaybe(dictOrRef, PDFDict_default);
  }
  MediaBox() {
    const arrayOrRef = this.getInheritableAttribute(PDFName_default.MediaBox);
    return this.context.lookup(arrayOrRef, PDFArray_default);
  }
  CropBox() {
    const arrayOrRef = this.getInheritableAttribute(PDFName_default.CropBox);
    return this.context.lookupMaybe(arrayOrRef, PDFArray_default);
  }
  Rotate() {
    const numberOrRef = this.getInheritableAttribute(PDFName_default.Rotate);
    return this.context.lookupMaybe(numberOrRef, PDFNumber_default);
  }
  getInheritableAttribute(name) {
    let attribute;
    this.ascend((node) => {
      if (!attribute) attribute = node.get(name);
    });
    return attribute;
  }
  setParent(parentRef) {
    this.set(PDFName_default.Parent, parentRef);
  }
  addContentStream(contentStreamRef) {
    const Contents = this.normalizedEntries().Contents || this.context.obj([]);
    this.set(PDFName_default.Contents, Contents);
    Contents.push(contentStreamRef);
  }
  wrapContentStreams(startStream, endStream) {
    const Contents = this.Contents();
    if (Contents instanceof PDFArray_default) {
      Contents.insert(0, startStream);
      Contents.push(endStream);
      return true;
    }
    return false;
  }
  addAnnot(annotRef) {
    const { Annots } = this.normalizedEntries();
    Annots.push(annotRef);
  }
  removeAnnot(annotRef) {
    const { Annots } = this.normalizedEntries();
    const index = Annots.indexOf(annotRef);
    if (index !== void 0) {
      Annots.remove(index);
    }
  }
  setFontDictionary(name, fontDictRef) {
    const { Font: Font2 } = this.normalizedEntries();
    Font2.set(name, fontDictRef);
  }
  newFontDictionaryKey(tag) {
    const { Font: Font2 } = this.normalizedEntries();
    return Font2.uniqueKey(tag);
  }
  newFontDictionary(tag, fontDictRef) {
    const key = this.newFontDictionaryKey(tag);
    this.setFontDictionary(key, fontDictRef);
    return key;
  }
  setXObject(name, xObjectRef) {
    const { XObject } = this.normalizedEntries();
    XObject.set(name, xObjectRef);
  }
  newXObjectKey(tag) {
    const { XObject } = this.normalizedEntries();
    return XObject.uniqueKey(tag);
  }
  newXObject(tag, xObjectRef) {
    const key = this.newXObjectKey(tag);
    this.setXObject(key, xObjectRef);
    return key;
  }
  setExtGState(name, extGStateRef) {
    const { ExtGState } = this.normalizedEntries();
    ExtGState.set(name, extGStateRef);
  }
  newExtGStateKey(tag) {
    const { ExtGState } = this.normalizedEntries();
    return ExtGState.uniqueKey(tag);
  }
  newExtGState(tag, extGStateRef) {
    const key = this.newExtGStateKey(tag);
    this.setExtGState(key, extGStateRef);
    return key;
  }
  ascend(visitor) {
    visitor(this);
    const Parent = this.Parent();
    if (Parent) Parent.ascend(visitor);
  }
  normalize() {
    if (this.normalized) return;
    const { context } = this;
    const contentsRef = this.get(PDFName_default.Contents);
    const contents = this.context.lookup(contentsRef);
    if (contents instanceof PDFStream_default) {
      this.set(PDFName_default.Contents, context.obj([contentsRef]));
    }
    if (this.autoNormalizeCTM) {
      this.wrapContentStreams(
        this.context.getPushGraphicsStateContentStream(),
        this.context.getPopGraphicsStateContentStream()
      );
    }
    const dictOrRef = this.getInheritableAttribute(PDFName_default.Resources);
    const Resources = context.lookupMaybe(dictOrRef, PDFDict_default) || context.obj({});
    this.set(PDFName_default.Resources, Resources);
    const Font2 = Resources.lookupMaybe(PDFName_default.Font, PDFDict_default) || context.obj({});
    Resources.set(PDFName_default.Font, Font2);
    const XObject = Resources.lookupMaybe(PDFName_default.XObject, PDFDict_default) || context.obj({});
    Resources.set(PDFName_default.XObject, XObject);
    const ExtGState = Resources.lookupMaybe(PDFName_default.ExtGState, PDFDict_default) || context.obj({});
    Resources.set(PDFName_default.ExtGState, ExtGState);
    const Annots = this.Annots() || context.obj([]);
    this.set(PDFName_default.Annots, Annots);
    this.normalized = true;
  }
  normalizedEntries() {
    this.normalize();
    const Annots = this.Annots();
    const Resources = this.Resources();
    const Contents = this.Contents();
    return {
      Annots,
      Resources,
      Contents,
      Font: Resources.lookup(PDFName_default.Font, PDFDict_default),
      XObject: Resources.lookup(PDFName_default.XObject, PDFDict_default),
      ExtGState: Resources.lookup(PDFName_default.ExtGState, PDFDict_default)
    };
  }
};
__publicField(_PDFPageLeaf, "InheritableEntries", [
  "Resources",
  "MediaBox",
  "CropBox",
  "Rotate"
]);
__publicField(_PDFPageLeaf, "withContextAndParent", (context, parent) => {
  const dict = /* @__PURE__ */ new Map();
  dict.set(PDFName_default.Type, PDFName_default.Page);
  dict.set(PDFName_default.Parent, parent);
  dict.set(PDFName_default.Resources, context.obj({}));
  dict.set(PDFName_default.MediaBox, context.obj([0, 0, 612, 792]));
  return new _PDFPageLeaf(dict, context, false);
});
__publicField(_PDFPageLeaf, "fromMapWithContext", (map, context, autoNormalizeCTM = true) => new _PDFPageLeaf(map, context, autoNormalizeCTM));
var PDFPageLeaf = _PDFPageLeaf;
var PDFPageLeaf_default = PDFPageLeaf;

// src/core/PDFObjectCopier.ts
var _PDFObjectCopier = class _PDFObjectCopier {
  constructor(src, dest) {
    __publicField(this, "src");
    __publicField(this, "dest");
    __publicField(this, "traversedObjects", /* @__PURE__ */ new Map());
    // prettier-ignore
    __publicField(this, "copy", (object) => object instanceof PDFPageLeaf_default ? this.copyPDFPage(object) : object instanceof PDFDict_default ? this.copyPDFDict(object) : object instanceof PDFArray_default ? this.copyPDFArray(object) : object instanceof PDFStream_default ? this.copyPDFStream(object) : object instanceof PDFRef_default ? this.copyPDFIndirectObject(object) : object.clone());
    __publicField(this, "copyPDFPage", (originalPage) => {
      const clonedPage = originalPage.clone();
      const { InheritableEntries } = PDFPageLeaf_default;
      for (let idx = 0, len = InheritableEntries.length; idx < len; idx++) {
        const key = PDFName_default.of(InheritableEntries[idx]);
        const value = clonedPage.getInheritableAttribute(key);
        if (!clonedPage.get(key) && value) clonedPage.set(key, value);
      }
      clonedPage.delete(PDFName_default.of("Parent"));
      return this.copyPDFDict(clonedPage);
    });
    __publicField(this, "copyPDFDict", (originalDict) => {
      if (this.traversedObjects.has(originalDict)) {
        return this.traversedObjects.get(originalDict);
      }
      const clonedDict = originalDict.clone(this.dest);
      this.traversedObjects.set(originalDict, clonedDict);
      const entries = originalDict.entries();
      for (let idx = 0, len = entries.length; idx < len; idx++) {
        const [key, value] = entries[idx];
        clonedDict.set(key, this.copy(value));
      }
      return clonedDict;
    });
    __publicField(this, "copyPDFArray", (originalArray) => {
      if (this.traversedObjects.has(originalArray)) {
        return this.traversedObjects.get(originalArray);
      }
      const clonedArray = originalArray.clone(this.dest);
      this.traversedObjects.set(originalArray, clonedArray);
      for (let idx = 0, len = originalArray.size(); idx < len; idx++) {
        const value = originalArray.get(idx);
        clonedArray.set(idx, this.copy(value));
      }
      return clonedArray;
    });
    __publicField(this, "copyPDFStream", (originalStream) => {
      if (this.traversedObjects.has(originalStream)) {
        return this.traversedObjects.get(originalStream);
      }
      const clonedStream = originalStream.clone(this.dest);
      this.traversedObjects.set(originalStream, clonedStream);
      const entries = originalStream.dict.entries();
      for (let idx = 0, len = entries.length; idx < len; idx++) {
        const [key, value] = entries[idx];
        clonedStream.dict.set(key, this.copy(value));
      }
      return clonedStream;
    });
    __publicField(this, "copyPDFIndirectObject", (ref) => {
      const alreadyMapped = this.traversedObjects.has(ref);
      if (!alreadyMapped) {
        const newRef = this.dest.nextRef();
        this.traversedObjects.set(ref, newRef);
        const dereferencedValue = this.src.lookup(ref);
        if (dereferencedValue) {
          const cloned = this.copy(dereferencedValue);
          this.dest.assign(newRef, cloned);
        }
      }
      return this.traversedObjects.get(ref);
    });
    this.src = src;
    this.dest = dest;
  }
};
__publicField(_PDFObjectCopier, "for", (src, dest) => new _PDFObjectCopier(src, dest));
var PDFObjectCopier = _PDFObjectCopier;
var PDFObjectCopier_default = PDFObjectCopier;

// src/core/document/PDFCrossRefSection.ts
var _PDFCrossRefSection = class _PDFCrossRefSection {
  constructor(firstEntry) {
    __publicField(this, "subsections");
    __publicField(this, "chunkIdx");
    __publicField(this, "chunkLength");
    this.subsections = firstEntry ? [[firstEntry]] : [];
    this.chunkIdx = 0;
    this.chunkLength = firstEntry ? 1 : 0;
  }
  addEntry(ref, offset) {
    this.append({ ref, offset, deleted: false });
  }
  addDeletedEntry(ref, nextFreeObjectNumber) {
    this.append({ ref, offset: nextFreeObjectNumber, deleted: true });
  }
  toString() {
    let section = "xref\n";
    for (let rangeIdx = 0, rangeLen = this.subsections.length; rangeIdx < rangeLen; rangeIdx++) {
      const range2 = this.subsections[rangeIdx];
      section += `${range2[0].ref.objectNumber} ${range2.length}
`;
      for (let entryIdx = 0, entryLen = range2.length; entryIdx < entryLen; entryIdx++) {
        const entry = range2[entryIdx];
        section += padStart(String(entry.offset), 10, "0");
        section += " ";
        section += padStart(String(entry.ref.generationNumber), 5, "0");
        section += " ";
        section += entry.deleted ? "f" : "n";
        section += " \n";
      }
    }
    return section;
  }
  sizeInBytes() {
    let size = 5;
    for (let idx = 0, len = this.subsections.length; idx < len; idx++) {
      const subsection = this.subsections[idx];
      const subsectionLength = subsection.length;
      const [firstEntry] = subsection;
      size += 2;
      size += String(firstEntry.ref.objectNumber).length;
      size += String(subsectionLength).length;
      size += 20 * subsectionLength;
    }
    return size;
  }
  copyBytesInto(buffer, offset) {
    const initialOffset = offset;
    buffer[offset++] = CharCodes_default.x;
    buffer[offset++] = CharCodes_default.r;
    buffer[offset++] = CharCodes_default.e;
    buffer[offset++] = CharCodes_default.f;
    buffer[offset++] = CharCodes_default.Newline;
    offset += this.copySubsectionsIntoBuffer(this.subsections, buffer, offset);
    return offset - initialOffset;
  }
  copySubsectionsIntoBuffer(subsections, buffer, offset) {
    const initialOffset = offset;
    const length = subsections.length;
    for (let idx = 0; idx < length; idx++) {
      const subsection = this.subsections[idx];
      const firstObjectNumber = String(subsection[0].ref.objectNumber);
      offset += copyStringIntoBuffer(firstObjectNumber, buffer, offset);
      buffer[offset++] = CharCodes_default.Space;
      const rangeLength = String(subsection.length);
      offset += copyStringIntoBuffer(rangeLength, buffer, offset);
      buffer[offset++] = CharCodes_default.Newline;
      offset += this.copyEntriesIntoBuffer(subsection, buffer, offset);
    }
    return offset - initialOffset;
  }
  copyEntriesIntoBuffer(entries, buffer, offset) {
    const length = entries.length;
    for (let idx = 0; idx < length; idx++) {
      const entry = entries[idx];
      const entryOffset = padStart(String(entry.offset), 10, "0");
      offset += copyStringIntoBuffer(entryOffset, buffer, offset);
      buffer[offset++] = CharCodes_default.Space;
      const entryGen = padStart(String(entry.ref.generationNumber), 5, "0");
      offset += copyStringIntoBuffer(entryGen, buffer, offset);
      buffer[offset++] = CharCodes_default.Space;
      buffer[offset++] = entry.deleted ? CharCodes_default.f : CharCodes_default.n;
      buffer[offset++] = CharCodes_default.Space;
      buffer[offset++] = CharCodes_default.Newline;
    }
    return 20 * length;
  }
  append(currEntry) {
    if (this.chunkLength === 0) {
      this.subsections.push([currEntry]);
      this.chunkIdx = 0;
      this.chunkLength = 1;
      return;
    }
    const chunk = this.subsections[this.chunkIdx];
    const prevEntry = chunk[this.chunkLength - 1];
    if (currEntry.ref.objectNumber - prevEntry.ref.objectNumber > 1) {
      this.subsections.push([currEntry]);
      this.chunkIdx += 1;
      this.chunkLength = 1;
    } else {
      chunk.push(currEntry);
      this.chunkLength += 1;
    }
  }
};
__publicField(_PDFCrossRefSection, "create", () => new _PDFCrossRefSection({
  ref: PDFRef_default.of(0, 65535),
  offset: 0,
  deleted: true
}));
__publicField(_PDFCrossRefSection, "createEmpty", () => new _PDFCrossRefSection());
var PDFCrossRefSection = _PDFCrossRefSection;
var PDFCrossRefSection_default = PDFCrossRefSection;

// src/core/document/PDFTrailer.ts
var _PDFTrailer = class _PDFTrailer {
  constructor(lastXRefOffset) {
    __publicField(this, "lastXRefOffset");
    this.lastXRefOffset = String(lastXRefOffset);
  }
  toString() {
    return `startxref
${this.lastXRefOffset}
%%EOF`;
  }
  sizeInBytes() {
    return 16 + this.lastXRefOffset.length;
  }
  copyBytesInto(buffer, offset) {
    const initialOffset = offset;
    buffer[offset++] = CharCodes_default.s;
    buffer[offset++] = CharCodes_default.t;
    buffer[offset++] = CharCodes_default.a;
    buffer[offset++] = CharCodes_default.r;
    buffer[offset++] = CharCodes_default.t;
    buffer[offset++] = CharCodes_default.x;
    buffer[offset++] = CharCodes_default.r;
    buffer[offset++] = CharCodes_default.e;
    buffer[offset++] = CharCodes_default.f;
    buffer[offset++] = CharCodes_default.Newline;
    offset += copyStringIntoBuffer(this.lastXRefOffset, buffer, offset);
    buffer[offset++] = CharCodes_default.Newline;
    buffer[offset++] = CharCodes_default.Percent;
    buffer[offset++] = CharCodes_default.Percent;
    buffer[offset++] = CharCodes_default.E;
    buffer[offset++] = CharCodes_default.O;
    buffer[offset++] = CharCodes_default.F;
    return offset - initialOffset;
  }
};
__publicField(_PDFTrailer, "forLastCrossRefSectionOffset", (offset) => new _PDFTrailer(offset));
var PDFTrailer = _PDFTrailer;
var PDFTrailer_default = PDFTrailer;

// src/core/document/PDFTrailerDict.ts
var _PDFTrailerDict = class _PDFTrailerDict {
  constructor(dict) {
    __publicField(this, "dict");
    this.dict = dict;
  }
  toString() {
    return `trailer
${this.dict.toString()}`;
  }
  sizeInBytes() {
    return 8 + this.dict.sizeInBytes();
  }
  copyBytesInto(buffer, offset) {
    const initialOffset = offset;
    buffer[offset++] = CharCodes_default.t;
    buffer[offset++] = CharCodes_default.r;
    buffer[offset++] = CharCodes_default.a;
    buffer[offset++] = CharCodes_default.i;
    buffer[offset++] = CharCodes_default.l;
    buffer[offset++] = CharCodes_default.e;
    buffer[offset++] = CharCodes_default.r;
    buffer[offset++] = CharCodes_default.Newline;
    offset += this.dict.copyBytesInto(buffer, offset);
    return offset - initialOffset;
  }
};
__publicField(_PDFTrailerDict, "of", (dict) => new _PDFTrailerDict(dict));
var PDFTrailerDict = _PDFTrailerDict;
var PDFTrailerDict_default = PDFTrailerDict;

// src/core/structures/PDFObjectStream.ts
var _PDFObjectStream = class _PDFObjectStream extends PDFFlateStream_default {
  constructor(context, objects, encode = true) {
    super(context.obj({}), encode);
    __publicField(this, "objects");
    __publicField(this, "offsets");
    __publicField(this, "offsetsString");
    this.objects = objects;
    this.offsets = this.computeObjectOffsets();
    this.offsetsString = this.computeOffsetsString();
    this.dict.set(PDFName_default.of("Type"), PDFName_default.of("ObjStm"));
    this.dict.set(PDFName_default.of("N"), PDFNumber_default.of(this.objects.length));
    this.dict.set(PDFName_default.of("First"), PDFNumber_default.of(this.offsetsString.length));
  }
  getObjectsCount() {
    return this.objects.length;
  }
  clone(context) {
    return _PDFObjectStream.withContextAndObjects(
      context || this.dict.context,
      this.objects.slice(),
      this.encode
    );
  }
  getContentsString() {
    let value = this.offsetsString;
    for (let idx = 0, len = this.objects.length; idx < len; idx++) {
      const [, object] = this.objects[idx];
      value += `${object}
`;
    }
    return value;
  }
  getUnencodedContents() {
    const buffer = new Uint8Array(this.getUnencodedContentsSize());
    let offset = copyStringIntoBuffer(this.offsetsString, buffer, 0);
    for (let idx = 0, len = this.objects.length; idx < len; idx++) {
      const [, object] = this.objects[idx];
      offset += object.copyBytesInto(buffer, offset);
      buffer[offset++] = CharCodes_default.Newline;
    }
    return buffer;
  }
  getUnencodedContentsSize() {
    return this.offsetsString.length + last(this.offsets)[1] + last(this.objects)[1].sizeInBytes() + 1;
  }
  computeOffsetsString() {
    let offsetsString = "";
    for (let idx = 0, len = this.offsets.length; idx < len; idx++) {
      const [objectNumber, offset] = this.offsets[idx];
      offsetsString += `${objectNumber} ${offset} `;
    }
    return offsetsString;
  }
  computeObjectOffsets() {
    let offset = 0;
    const offsets = new Array(this.objects.length);
    for (let idx = 0, len = this.objects.length; idx < len; idx++) {
      const [ref, object] = this.objects[idx];
      offsets[idx] = [ref.objectNumber, offset];
      offset += object.sizeInBytes() + 1;
    }
    return offsets;
  }
};
__publicField(_PDFObjectStream, "withContextAndObjects", (context, objects, encode = true) => new _PDFObjectStream(context, objects, encode));
var PDFObjectStream = _PDFObjectStream;
var PDFObjectStream_default = PDFObjectStream;

// src/core/writers/PDFWriter.ts
var _PDFWriter = class _PDFWriter {
  constructor(context, objectsPerTick) {
    __publicField(this, "context");
    __publicField(this, "objectsPerTick");
    __publicField(this, "parsedObjects", 0);
    __publicField(this, "shouldWaitForTick", (n) => {
      this.parsedObjects += n;
      return this.parsedObjects % this.objectsPerTick === 0;
    });
    this.context = context;
    this.objectsPerTick = objectsPerTick;
  }
  async serializeToBuffer() {
    const { size, header, indirectObjects, xref, trailerDict, trailer } = await this.computeBufferSize();
    let offset = 0;
    const buffer = new Uint8Array(size);
    offset += header.copyBytesInto(buffer, offset);
    buffer[offset++] = CharCodes_default.Newline;
    buffer[offset++] = CharCodes_default.Newline;
    for (let idx = 0, len = indirectObjects.length; idx < len; idx++) {
      const [ref, object] = indirectObjects[idx];
      const objectNumber = String(ref.objectNumber);
      offset += copyStringIntoBuffer(objectNumber, buffer, offset);
      buffer[offset++] = CharCodes_default.Space;
      const generationNumber = String(ref.generationNumber);
      offset += copyStringIntoBuffer(generationNumber, buffer, offset);
      buffer[offset++] = CharCodes_default.Space;
      buffer[offset++] = CharCodes_default.o;
      buffer[offset++] = CharCodes_default.b;
      buffer[offset++] = CharCodes_default.j;
      buffer[offset++] = CharCodes_default.Newline;
      offset += object.copyBytesInto(buffer, offset);
      buffer[offset++] = CharCodes_default.Newline;
      buffer[offset++] = CharCodes_default.e;
      buffer[offset++] = CharCodes_default.n;
      buffer[offset++] = CharCodes_default.d;
      buffer[offset++] = CharCodes_default.o;
      buffer[offset++] = CharCodes_default.b;
      buffer[offset++] = CharCodes_default.j;
      buffer[offset++] = CharCodes_default.Newline;
      buffer[offset++] = CharCodes_default.Newline;
      const n = object instanceof PDFObjectStream_default ? object.getObjectsCount() : 1;
      if (this.shouldWaitForTick(n)) await waitForTick();
    }
    if (xref) {
      offset += xref.copyBytesInto(buffer, offset);
      buffer[offset++] = CharCodes_default.Newline;
    }
    if (trailerDict) {
      offset += trailerDict.copyBytesInto(buffer, offset);
      buffer[offset++] = CharCodes_default.Newline;
      buffer[offset++] = CharCodes_default.Newline;
    }
    offset += trailer.copyBytesInto(buffer, offset);
    return buffer;
  }
  computeIndirectObjectSize([ref, object]) {
    const refSize = ref.sizeInBytes() + 3;
    const objectSize = object.sizeInBytes() + 9;
    return refSize + objectSize;
  }
  createTrailerDict() {
    return this.context.obj({
      Size: this.context.largestObjectNumber + 1,
      Root: this.context.trailerInfo.Root,
      Encrypt: this.context.trailerInfo.Encrypt,
      Info: this.context.trailerInfo.Info,
      ID: this.context.trailerInfo.ID
    });
  }
  async computeBufferSize() {
    const header = PDFHeader_default.forVersion(1, 7);
    let size = header.sizeInBytes() + 2;
    const xref = PDFCrossRefSection_default.create();
    const indirectObjects = this.context.enumerateIndirectObjects();
    for (let idx = 0, len = indirectObjects.length; idx < len; idx++) {
      const indirectObject = indirectObjects[idx];
      const [ref] = indirectObject;
      xref.addEntry(ref, size);
      size += this.computeIndirectObjectSize(indirectObject);
      if (this.shouldWaitForTick(1)) await waitForTick();
    }
    const xrefOffset = size;
    size += xref.sizeInBytes() + 1;
    const trailerDict = PDFTrailerDict_default.of(this.createTrailerDict());
    size += trailerDict.sizeInBytes() + 2;
    const trailer = PDFTrailer_default.forLastCrossRefSectionOffset(xrefOffset);
    size += trailer.sizeInBytes();
    return { size, header, indirectObjects, xref, trailerDict, trailer };
  }
};
__publicField(_PDFWriter, "forContext", (context, objectsPerTick) => new _PDFWriter(context, objectsPerTick));
var PDFWriter = _PDFWriter;
var PDFWriter_default = PDFWriter;

// src/core/objects/PDFInvalidObject.ts
var _PDFInvalidObject = class _PDFInvalidObject extends PDFObject_default {
  constructor(data) {
    super();
    __publicField(this, "data");
    this.data = data;
  }
  clone() {
    return _PDFInvalidObject.of(this.data.slice());
  }
  toString() {
    return `PDFInvalidObject(${this.data.length} bytes)`;
  }
  sizeInBytes() {
    return this.data.length;
  }
  copyBytesInto(buffer, offset) {
    const length = this.data.length;
    for (let idx = 0; idx < length; idx++) {
      buffer[offset++] = this.data[idx];
    }
    return length;
  }
};
__publicField(_PDFInvalidObject, "of", (data) => new _PDFInvalidObject(data));
var PDFInvalidObject = _PDFInvalidObject;
var PDFInvalidObject_default = PDFInvalidObject;

// src/core/structures/PDFCrossRefStream.ts
var _PDFCrossRefStream = class _PDFCrossRefStream extends PDFFlateStream_default {
  constructor(dict, entries, encode = true) {
    super(dict, encode);
    __publicField(this, "entries");
    __publicField(this, "entryTuplesCache");
    __publicField(this, "maxByteWidthsCache");
    __publicField(this, "indexCache");
    // Returns an array of integer pairs for each subsection of the cross ref
    // section, where each integer pair represents:
    //   firstObjectNumber(OfSection), length(OfSection)
    __publicField(this, "computeIndex", () => {
      const subsections = [];
      let subsectionLength = 0;
      for (let idx = 0, len = this.entries.length; idx < len; idx++) {
        const currEntry = this.entries[idx];
        const prevEntry = this.entries[idx - 1];
        if (idx === 0) {
          subsections.push(currEntry.ref.objectNumber);
        } else if (currEntry.ref.objectNumber - prevEntry.ref.objectNumber > 1) {
          subsections.push(subsectionLength);
          subsections.push(currEntry.ref.objectNumber);
          subsectionLength = 0;
        }
        subsectionLength += 1;
      }
      subsections.push(subsectionLength);
      return subsections;
    });
    __publicField(this, "computeEntryTuples", () => {
      const entryTuples = new Array(this.entries.length);
      for (let idx = 0, len = this.entries.length; idx < len; idx++) {
        const entry = this.entries[idx];
        if (entry.type === 0 /* Deleted */) {
          const { type, nextFreeObjectNumber, ref } = entry;
          entryTuples[idx] = [type, nextFreeObjectNumber, ref.generationNumber];
        }
        if (entry.type === 1 /* Uncompressed */) {
          const { type, offset, ref } = entry;
          entryTuples[idx] = [type, offset, ref.generationNumber];
        }
        if (entry.type === 2 /* Compressed */) {
          const { type, objectStreamRef, index } = entry;
          entryTuples[idx] = [type, objectStreamRef.objectNumber, index];
        }
      }
      return entryTuples;
    });
    __publicField(this, "computeMaxEntryByteWidths", () => {
      const entryTuples = this.entryTuplesCache.access();
      const widths = [0, 0, 0];
      for (let idx = 0, len = entryTuples.length; idx < len; idx++) {
        const [first, second, third] = entryTuples[idx];
        const firstSize = sizeInBytes(first);
        const secondSize = sizeInBytes(second);
        const thirdSize = sizeInBytes(third);
        if (firstSize > widths[0]) widths[0] = firstSize;
        if (secondSize > widths[1]) widths[1] = secondSize;
        if (thirdSize > widths[2]) widths[2] = thirdSize;
      }
      return widths;
    });
    this.entries = entries || [];
    this.entryTuplesCache = Cache_default.populatedBy(this.computeEntryTuples);
    this.maxByteWidthsCache = Cache_default.populatedBy(this.computeMaxEntryByteWidths);
    this.indexCache = Cache_default.populatedBy(this.computeIndex);
    dict.set(PDFName_default.of("Type"), PDFName_default.of("XRef"));
  }
  addDeletedEntry(ref, nextFreeObjectNumber) {
    const type = 0 /* Deleted */;
    this.entries.push({ type, ref, nextFreeObjectNumber });
    this.entryTuplesCache.invalidate();
    this.maxByteWidthsCache.invalidate();
    this.indexCache.invalidate();
    this.contentsCache.invalidate();
  }
  addUncompressedEntry(ref, offset) {
    const type = 1 /* Uncompressed */;
    this.entries.push({ type, ref, offset });
    this.entryTuplesCache.invalidate();
    this.maxByteWidthsCache.invalidate();
    this.indexCache.invalidate();
    this.contentsCache.invalidate();
  }
  addCompressedEntry(ref, objectStreamRef, index) {
    const type = 2 /* Compressed */;
    this.entries.push({ type, ref, objectStreamRef, index });
    this.entryTuplesCache.invalidate();
    this.maxByteWidthsCache.invalidate();
    this.indexCache.invalidate();
    this.contentsCache.invalidate();
  }
  clone(context) {
    const { dict, entries, encode } = this;
    return _PDFCrossRefStream.of(dict.clone(context), entries.slice(), encode);
  }
  getContentsString() {
    const entryTuples = this.entryTuplesCache.access();
    const byteWidths = this.maxByteWidthsCache.access();
    let value = "";
    for (let entryIdx = 0, entriesLen = entryTuples.length; entryIdx < entriesLen; entryIdx++) {
      const [first, second, third] = entryTuples[entryIdx];
      const firstBytes = reverseArray(bytesFor(first));
      const secondBytes = reverseArray(bytesFor(second));
      const thirdBytes = reverseArray(bytesFor(third));
      for (let idx = byteWidths[0] - 1; idx >= 0; idx--) {
        value += (firstBytes[idx] || 0).toString(2);
      }
      for (let idx = byteWidths[1] - 1; idx >= 0; idx--) {
        value += (secondBytes[idx] || 0).toString(2);
      }
      for (let idx = byteWidths[2] - 1; idx >= 0; idx--) {
        value += (thirdBytes[idx] || 0).toString(2);
      }
    }
    return value;
  }
  getUnencodedContents() {
    const entryTuples = this.entryTuplesCache.access();
    const byteWidths = this.maxByteWidthsCache.access();
    const buffer = new Uint8Array(this.getUnencodedContentsSize());
    let offset = 0;
    for (let entryIdx = 0, entriesLen = entryTuples.length; entryIdx < entriesLen; entryIdx++) {
      const [first, second, third] = entryTuples[entryIdx];
      const firstBytes = reverseArray(bytesFor(first));
      const secondBytes = reverseArray(bytesFor(second));
      const thirdBytes = reverseArray(bytesFor(third));
      for (let idx = byteWidths[0] - 1; idx >= 0; idx--) {
        buffer[offset++] = firstBytes[idx] || 0;
      }
      for (let idx = byteWidths[1] - 1; idx >= 0; idx--) {
        buffer[offset++] = secondBytes[idx] || 0;
      }
      for (let idx = byteWidths[2] - 1; idx >= 0; idx--) {
        buffer[offset++] = thirdBytes[idx] || 0;
      }
    }
    return buffer;
  }
  getUnencodedContentsSize() {
    const byteWidths = this.maxByteWidthsCache.access();
    const entryWidth = sum(byteWidths);
    return entryWidth * this.entries.length;
  }
  updateDict() {
    super.updateDict();
    const byteWidths = this.maxByteWidthsCache.access();
    const index = this.indexCache.access();
    const { context } = this.dict;
    this.dict.set(PDFName_default.of("W"), context.obj(byteWidths));
    this.dict.set(PDFName_default.of("Index"), context.obj(index));
  }
};
__publicField(_PDFCrossRefStream, "create", (dict, encode = true) => {
  const stream2 = new _PDFCrossRefStream(dict, [], encode);
  stream2.addDeletedEntry(PDFRef_default.of(0, 65535), 0);
  return stream2;
});
__publicField(_PDFCrossRefStream, "of", (dict, entries, encode = true) => new _PDFCrossRefStream(dict, entries, encode));
var PDFCrossRefStream = _PDFCrossRefStream;
var PDFCrossRefStream_default = PDFCrossRefStream;

// src/core/writers/PDFStreamWriter.ts
var _PDFStreamWriter = class _PDFStreamWriter extends PDFWriter_default {
  constructor(context, objectsPerTick, encodeStreams, objectsPerStream) {
    super(context, objectsPerTick);
    __publicField(this, "encodeStreams");
    __publicField(this, "objectsPerStream");
    this.encodeStreams = encodeStreams;
    this.objectsPerStream = objectsPerStream;
  }
  async computeBufferSize() {
    let objectNumber = this.context.largestObjectNumber + 1;
    const header = PDFHeader_default.forVersion(1, 7);
    let size = header.sizeInBytes() + 2;
    const xrefStream = PDFCrossRefStream_default.create(
      this.createTrailerDict(),
      this.encodeStreams
    );
    const uncompressedObjects = [];
    const compressedObjects = [];
    const objectStreamRefs = [];
    const indirectObjects = this.context.enumerateIndirectObjects();
    for (let idx = 0, len = indirectObjects.length; idx < len; idx++) {
      const indirectObject = indirectObjects[idx];
      const [ref, object] = indirectObject;
      const shouldNotCompress = ref === this.context.trailerInfo.Encrypt || object instanceof PDFStream_default || object instanceof PDFInvalidObject_default || ref.generationNumber !== 0;
      if (shouldNotCompress) {
        uncompressedObjects.push(indirectObject);
        xrefStream.addUncompressedEntry(ref, size);
        size += this.computeIndirectObjectSize(indirectObject);
        if (this.shouldWaitForTick(1)) await waitForTick();
      } else {
        let chunk = last(compressedObjects);
        let objectStreamRef = last(objectStreamRefs);
        if (!chunk || chunk.length % this.objectsPerStream === 0) {
          chunk = [];
          compressedObjects.push(chunk);
          objectStreamRef = PDFRef_default.of(objectNumber++);
          objectStreamRefs.push(objectStreamRef);
        }
        xrefStream.addCompressedEntry(ref, objectStreamRef, chunk.length);
        chunk.push(indirectObject);
      }
    }
    for (let idx = 0, len = compressedObjects.length; idx < len; idx++) {
      const chunk = compressedObjects[idx];
      const ref = objectStreamRefs[idx];
      const objectStream = PDFObjectStream_default.withContextAndObjects(
        this.context,
        chunk,
        this.encodeStreams
      );
      xrefStream.addUncompressedEntry(ref, size);
      size += this.computeIndirectObjectSize([ref, objectStream]);
      uncompressedObjects.push([ref, objectStream]);
      if (this.shouldWaitForTick(chunk.length)) await waitForTick();
    }
    const xrefStreamRef = PDFRef_default.of(objectNumber++);
    xrefStream.dict.set(PDFName_default.of("Size"), PDFNumber_default.of(objectNumber));
    xrefStream.addUncompressedEntry(xrefStreamRef, size);
    const xrefOffset = size;
    size += this.computeIndirectObjectSize([xrefStreamRef, xrefStream]);
    uncompressedObjects.push([xrefStreamRef, xrefStream]);
    const trailer = PDFTrailer_default.forLastCrossRefSectionOffset(xrefOffset);
    size += trailer.sizeInBytes();
    return { size, header, indirectObjects: uncompressedObjects, trailer };
  }
};
__publicField(_PDFStreamWriter, "forContext", (context, objectsPerTick, encodeStreams = true, objectsPerStream = 50) => new _PDFStreamWriter(
  context,
  objectsPerTick,
  encodeStreams,
  objectsPerStream
));
var PDFStreamWriter = _PDFStreamWriter;
var PDFStreamWriter_default = PDFStreamWriter;

// src/core/embedders/StandardFontEmbedder.ts
var import_standard_fonts2 = require("@pdf-lib/standard-fonts");

// src/core/objects/PDFHexString.ts
var _PDFHexString = class _PDFHexString extends PDFObject_default {
  constructor(value) {
    super();
    __publicField(this, "value");
    this.value = value;
  }
  asBytes() {
    const hex = this.value + (this.value.length % 2 === 1 ? "0" : "");
    const hexLength = hex.length;
    const bytes = new Uint8Array(hex.length / 2);
    let hexOffset = 0;
    let bytesOffset = 0;
    while (hexOffset < hexLength) {
      const byte = parseInt(hex.substring(hexOffset, hexOffset + 2), 16);
      bytes[bytesOffset] = byte;
      hexOffset += 2;
      bytesOffset += 1;
    }
    return bytes;
  }
  decodeText() {
    const bytes = this.asBytes();
    if (hasUtf16BOM(bytes)) return utf16Decode(bytes);
    return pdfDocEncodingDecode(bytes);
  }
  decodeDate() {
    const text = this.decodeText();
    const date = parseDate(text);
    if (!date) throw new InvalidPDFDateStringError(text);
    return date;
  }
  asString() {
    return this.value;
  }
  clone() {
    return _PDFHexString.of(this.value);
  }
  toString() {
    return `<${this.value}>`;
  }
  sizeInBytes() {
    return this.value.length + 2;
  }
  copyBytesInto(buffer, offset) {
    buffer[offset++] = CharCodes_default.LessThan;
    offset += copyStringIntoBuffer(this.value, buffer, offset);
    buffer[offset++] = CharCodes_default.GreaterThan;
    return this.value.length + 2;
  }
};
__publicField(_PDFHexString, "of", (value) => new _PDFHexString(value));
__publicField(_PDFHexString, "fromText", (value) => {
  const encoded = utf16Encode(value);
  let hex = "";
  for (let idx = 0, len = encoded.length; idx < len; idx++) {
    hex += toHexStringOfMinLength(encoded[idx], 4);
  }
  return new _PDFHexString(hex);
});
var PDFHexString = _PDFHexString;
var PDFHexString_default = PDFHexString;

// src/core/embedders/StandardFontEmbedder.ts
var _StandardFontEmbedder = class _StandardFontEmbedder {
  constructor(fontName, customName) {
    __publicField(this, "font");
    __publicField(this, "encoding");
    __publicField(this, "fontName");
    __publicField(this, "customName");
    this.encoding = fontName === import_standard_fonts2.FontNames.ZapfDingbats ? import_standard_fonts2.Encodings.ZapfDingbats : fontName === import_standard_fonts2.FontNames.Symbol ? import_standard_fonts2.Encodings.Symbol : import_standard_fonts2.Encodings.WinAnsi;
    this.font = import_standard_fonts2.Font.load(fontName);
    this.fontName = this.font.FontName;
    this.customName = customName;
  }
  /**
   * Encode the JavaScript string into this font. (JavaScript encodes strings in
   * Unicode, but standard fonts use either WinAnsi, ZapfDingbats, or Symbol
   * encodings)
   */
  encodeText(text) {
    const glyphs = this.encodeTextAsGlyphs(text);
    const hexCodes = new Array(glyphs.length);
    for (let idx = 0, len = glyphs.length; idx < len; idx++) {
      hexCodes[idx] = toHexString(glyphs[idx].code);
    }
    return PDFHexString_default.of(hexCodes.join(""));
  }
  widthOfTextAtSize(text, size) {
    const glyphs = this.encodeTextAsGlyphs(text);
    let totalWidth = 0;
    for (let idx = 0, len = glyphs.length; idx < len; idx++) {
      const left = glyphs[idx].name;
      const right = (glyphs[idx + 1] || {}).name;
      const kernAmount = this.font.getXAxisKerningForPair(left, right) || 0;
      totalWidth += this.widthOfGlyph(left) + kernAmount;
    }
    const scale2 = size / 1e3;
    return totalWidth * scale2;
  }
  heightOfFontAtSize(size, options = {}) {
    const { descender = true } = options;
    const { Ascender, Descender, FontBBox } = this.font;
    const yTop = Ascender || FontBBox[3];
    const yBottom = Descender || FontBBox[1];
    let height = yTop - yBottom;
    if (!descender) height += Descender || 0;
    return height / 1e3 * size;
  }
  sizeOfFontAtHeight(height) {
    const { Ascender, Descender, FontBBox } = this.font;
    const yTop = Ascender || FontBBox[3];
    const yBottom = Descender || FontBBox[1];
    return 1e3 * height / (yTop - yBottom);
  }
  embedIntoContext(context, ref) {
    const fontDict = context.obj({
      Type: "Font",
      Subtype: "Type1",
      BaseFont: this.customName || this.fontName,
      Encoding: this.encoding === import_standard_fonts2.Encodings.WinAnsi ? "WinAnsiEncoding" : void 0
    });
    if (ref) {
      context.assign(ref, fontDict);
      return ref;
    } else {
      return context.register(fontDict);
    }
  }
  widthOfGlyph(glyphName) {
    return this.font.getWidthOfGlyph(glyphName) || 250;
  }
  encodeTextAsGlyphs(text) {
    const codePoints = Array.from(text);
    const glyphs = new Array(codePoints.length);
    for (let idx = 0, len = codePoints.length; idx < len; idx++) {
      const codePoint = toCodePoint(codePoints[idx]);
      glyphs[idx] = this.encoding.encodeUnicodeCodePoint(codePoint);
    }
    return glyphs;
  }
};
__publicField(_StandardFontEmbedder, "for", (fontName, customName) => new _StandardFontEmbedder(fontName, customName));
var StandardFontEmbedder = _StandardFontEmbedder;
var StandardFontEmbedder_default = StandardFontEmbedder;

// src/core/embedders/CMap.ts
var createCmap = (glyphs, glyphId) => {
  const bfChars = new Array(glyphs.length);
  for (let idx = 0, len = glyphs.length; idx < len; idx++) {
    const glyph = glyphs[idx];
    const id = cmapHexFormat(cmapHexString(glyphId(glyph)));
    const unicode = cmapHexFormat(...glyph.codePoints.map(cmapCodePointFormat));
    bfChars[idx] = [id, unicode];
  }
  return fillCmapTemplate(bfChars);
};
var fillCmapTemplate = (bfChars) => `/CIDInit /ProcSet findresource begin
12 dict begin
begincmap
/CIDSystemInfo <<
  /Registry (Adobe)
  /Ordering (UCS)
  /Supplement 0
>> def
/CMapName /Adobe-Identity-UCS def
/CMapType 2 def
1 begincodespacerange
<0000><ffff>
endcodespacerange
${bfChars.length} beginbfchar
${bfChars.map(([glyphId, codePoint]) => `${glyphId} ${codePoint}`).join("\n")}
endbfchar
endcmap
CMapName currentdict /CMap defineresource pop
end
end`;
var cmapHexFormat = (...values2) => `<${values2.join("")}>`;
var cmapHexString = (value) => toHexStringOfMinLength(value, 4);
var cmapCodePointFormat = (codePoint) => {
  if (isWithinBMP(codePoint)) return cmapHexString(codePoint);
  if (hasSurrogates(codePoint)) {
    const hs = highSurrogate(codePoint);
    const ls = lowSurrogate(codePoint);
    return `${cmapHexString(hs)}${cmapHexString(ls)}`;
  }
  const hex = toHexString(codePoint);
  const msg = `0x${hex} is not a valid UTF-8 or UTF-16 codepoint.`;
  throw new Error(msg);
};

// src/core/embedders/FontFlags.ts
var makeFontFlags = (options) => {
  let flags = 0;
  const flipBit = (bit) => {
    flags |= 1 << bit - 1;
  };
  if (options.fixedPitch) flipBit(1);
  if (options.serif) flipBit(2);
  if (options.symbolic) flipBit(3);
  if (options.script) flipBit(4);
  if (options.nonsymbolic) flipBit(6);
  if (options.italic) flipBit(7);
  if (options.allCap) flipBit(17);
  if (options.smallCap) flipBit(18);
  if (options.forceBold) flipBit(19);
  return flags;
};
var deriveFontFlags = (font) => {
  const familyClass = font["OS/2"] ? font["OS/2"].sFamilyClass : 0;
  const flags = makeFontFlags({
    fixedPitch: font.post.isFixedPitch,
    serif: 1 <= familyClass && familyClass <= 7,
    symbolic: true,
    // Assume the font uses non-latin characters
    script: familyClass === 10,
    italic: font.head.macStyle.italic
  });
  return flags;
};

// src/core/objects/PDFString.ts
var _PDFString = class _PDFString extends PDFObject_default {
  constructor(value) {
    super();
    __publicField(this, "value");
    this.value = value;
  }
  asBytes() {
    const bytes = [];
    let octal = "";
    let escaped = false;
    const pushByte = (byte) => {
      if (byte !== void 0) bytes.push(byte);
      escaped = false;
    };
    for (let idx = 0, len = this.value.length; idx < len; idx++) {
      const char = this.value[idx];
      const byte = toCharCode(char);
      const nextChar = this.value[idx + 1];
      if (!escaped) {
        if (byte === CharCodes_default.BackSlash) escaped = true;
        else pushByte(byte);
      } else {
        if (byte === CharCodes_default.Newline) pushByte();
        else if (byte === CharCodes_default.CarriageReturn) pushByte();
        else if (byte === CharCodes_default.n) pushByte(CharCodes_default.Newline);
        else if (byte === CharCodes_default.r) pushByte(CharCodes_default.CarriageReturn);
        else if (byte === CharCodes_default.t) pushByte(CharCodes_default.Tab);
        else if (byte === CharCodes_default.b) pushByte(CharCodes_default.Backspace);
        else if (byte === CharCodes_default.f) pushByte(CharCodes_default.FormFeed);
        else if (byte === CharCodes_default.LeftParen) pushByte(CharCodes_default.LeftParen);
        else if (byte === CharCodes_default.RightParen) pushByte(CharCodes_default.RightParen);
        else if (byte === CharCodes_default.Backspace) pushByte(CharCodes_default.BackSlash);
        else if (byte >= CharCodes_default.Zero && byte <= CharCodes_default.Seven) {
          octal += char;
          if (octal.length === 3 || !(nextChar >= "0" && nextChar <= "7")) {
            pushByte(parseInt(octal, 8));
            octal = "";
          }
        } else {
          pushByte(byte);
        }
      }
    }
    return new Uint8Array(bytes);
  }
  decodeText() {
    const bytes = this.asBytes();
    if (hasUtf16BOM(bytes)) return utf16Decode(bytes);
    return pdfDocEncodingDecode(bytes);
  }
  decodeDate() {
    const text = this.decodeText();
    const date = parseDate(text);
    if (!date) throw new InvalidPDFDateStringError(text);
    return date;
  }
  asString() {
    return this.value;
  }
  clone() {
    return _PDFString.of(this.value);
  }
  toString() {
    return `(${this.value})`;
  }
  sizeInBytes() {
    return this.value.length + 2;
  }
  copyBytesInto(buffer, offset) {
    buffer[offset++] = CharCodes_default.LeftParen;
    offset += copyStringIntoBuffer(this.value, buffer, offset);
    buffer[offset++] = CharCodes_default.RightParen;
    return this.value.length + 2;
  }
};
// The PDF spec allows newlines and parens to appear directly within a literal
// string. These character _may_ be escaped. But they do not _have_ to be. So
// for simplicity, we will not bother escaping them.
__publicField(_PDFString, "of", (value) => new _PDFString(value));
__publicField(_PDFString, "fromDate", (date) => {
  const year = padStart(String(date.getUTCFullYear()), 4, "0");
  const month = padStart(String(date.getUTCMonth() + 1), 2, "0");
  const day = padStart(String(date.getUTCDate()), 2, "0");
  const hours = padStart(String(date.getUTCHours()), 2, "0");
  const mins = padStart(String(date.getUTCMinutes()), 2, "0");
  const secs = padStart(String(date.getUTCSeconds()), 2, "0");
  return new _PDFString(`D:${year}${month}${day}${hours}${mins}${secs}Z`);
});
var PDFString = _PDFString;
var PDFString_default = PDFString;

// src/core/embedders/CustomFontEmbedder.ts
var CustomFontEmbedder = class _CustomFontEmbedder {
  constructor(font, fontData, customName, fontFeatures) {
    __publicField(this, "font");
    __publicField(this, "scale");
    __publicField(this, "fontData");
    __publicField(this, "fontName");
    __publicField(this, "customName");
    __publicField(this, "fontFeatures");
    __publicField(this, "baseFontName");
    __publicField(this, "glyphCache");
    __publicField(this, "allGlyphsInFontSortedById", () => {
      const glyphs = new Array(this.font.characterSet.length);
      for (let idx = 0, len = glyphs.length; idx < len; idx++) {
        const codePoint = this.font.characterSet[idx];
        glyphs[idx] = this.font.glyphForCodePoint(codePoint);
      }
      return sortedUniq(glyphs.sort(byAscendingId), (g) => g.id);
    });
    this.font = font;
    this.scale = 1e3 / this.font.unitsPerEm;
    this.fontData = fontData;
    this.fontName = this.font.postscriptName || "Font";
    this.customName = customName;
    this.fontFeatures = fontFeatures;
    this.baseFontName = "";
    this.glyphCache = Cache_default.populatedBy(this.allGlyphsInFontSortedById);
  }
  static async for(fontkit, fontData, customName, fontFeatures) {
    const font = await fontkit.create(fontData);
    return new _CustomFontEmbedder(font, fontData, customName, fontFeatures);
  }
  /**
   * Encode the JavaScript string into this font. (JavaScript encodes strings in
   * Unicode, but embedded fonts use their own custom encodings)
   */
  encodeText(text) {
    const { glyphs } = this.font.layout(text, this.fontFeatures);
    const hexCodes = new Array(glyphs.length);
    for (let idx = 0, len = glyphs.length; idx < len; idx++) {
      hexCodes[idx] = toHexStringOfMinLength(glyphs[idx].id, 4);
    }
    return PDFHexString_default.of(hexCodes.join(""));
  }
  // The advanceWidth takes into account kerning automatically, so we don't
  // have to do that manually like we do for the standard fonts.
  widthOfTextAtSize(text, size) {
    const { glyphs } = this.font.layout(text, this.fontFeatures);
    let totalWidth = 0;
    for (let idx = 0, len = glyphs.length; idx < len; idx++) {
      totalWidth += glyphs[idx].advanceWidth * this.scale;
    }
    const scale2 = size / 1e3;
    return totalWidth * scale2;
  }
  heightOfFontAtSize(size, options = {}) {
    const { descender = true } = options;
    const { ascent, descent, bbox } = this.font;
    const yTop = (ascent || bbox.maxY) * this.scale;
    const yBottom = (descent || bbox.minY) * this.scale;
    let height = yTop - yBottom;
    if (!descender) height -= Math.abs(descent) || 0;
    return height / 1e3 * size;
  }
  sizeOfFontAtHeight(height) {
    const { ascent, descent, bbox } = this.font;
    const yTop = (ascent || bbox.maxY) * this.scale;
    const yBottom = (descent || bbox.minY) * this.scale;
    return 1e3 * height / (yTop - yBottom);
  }
  embedIntoContext(context, ref) {
    this.baseFontName = this.customName || context.addRandomSuffix(this.fontName);
    return this.embedFontDict(context, ref);
  }
  async embedFontDict(context, ref) {
    const cidFontDictRef = await this.embedCIDFontDict(context);
    const unicodeCMapRef = this.embedUnicodeCmap(context);
    const fontDict = context.obj({
      Type: "Font",
      Subtype: "Type0",
      BaseFont: this.baseFontName,
      Encoding: "Identity-H",
      DescendantFonts: [cidFontDictRef],
      ToUnicode: unicodeCMapRef
    });
    if (ref) {
      context.assign(ref, fontDict);
      return ref;
    } else {
      return context.register(fontDict);
    }
  }
  isCFF() {
    return this.font.cff;
  }
  async embedCIDFontDict(context) {
    const fontDescriptorRef = await this.embedFontDescriptor(context);
    const cidFontDict = context.obj({
      Type: "Font",
      Subtype: this.isCFF() ? "CIDFontType0" : "CIDFontType2",
      CIDToGIDMap: "Identity",
      BaseFont: this.baseFontName,
      CIDSystemInfo: {
        Registry: PDFString_default.of("Adobe"),
        Ordering: PDFString_default.of("Identity"),
        Supplement: 0
      },
      FontDescriptor: fontDescriptorRef,
      W: this.computeWidths()
    });
    return context.register(cidFontDict);
  }
  async embedFontDescriptor(context) {
    const fontStreamRef = await this.embedFontStream(context);
    const { scale: scale2 } = this;
    const { italicAngle, ascent, descent, capHeight, xHeight } = this.font;
    const { minX, minY, maxX, maxY } = this.font.bbox;
    const fontDescriptor = context.obj({
      Type: "FontDescriptor",
      FontName: this.baseFontName,
      Flags: deriveFontFlags(this.font),
      FontBBox: [minX * scale2, minY * scale2, maxX * scale2, maxY * scale2],
      ItalicAngle: italicAngle,
      Ascent: ascent * scale2,
      Descent: descent * scale2,
      CapHeight: (capHeight || ascent) * scale2,
      XHeight: (xHeight || 0) * scale2,
      // Not sure how to compute/find this, nor is anybody else really:
      // https://stackoverflow.com/questions/35485179/stemv-value-of-the-truetype-font
      StemV: 0,
      [this.isCFF() ? "FontFile3" : "FontFile2"]: fontStreamRef
    });
    return context.register(fontDescriptor);
  }
  async serializeFont() {
    return this.fontData;
  }
  async embedFontStream(context) {
    const fontStream = context.flateStream(await this.serializeFont(), {
      Subtype: this.isCFF() ? "CIDFontType0C" : void 0
    });
    return context.register(fontStream);
  }
  embedUnicodeCmap(context) {
    const cmap = createCmap(this.glyphCache.access(), this.glyphId.bind(this));
    const cmapStream = context.flateStream(cmap);
    return context.register(cmapStream);
  }
  glyphId(glyph) {
    return glyph ? glyph.id : -1;
  }
  computeWidths() {
    const glyphs = this.glyphCache.access();
    const widths = [];
    let currSection = [];
    for (let idx = 0, len = glyphs.length; idx < len; idx++) {
      const currGlyph = glyphs[idx];
      const prevGlyph = glyphs[idx - 1];
      const currGlyphId = this.glyphId(currGlyph);
      const prevGlyphId = this.glyphId(prevGlyph);
      if (idx === 0) {
        widths.push(currGlyphId);
      } else if (currGlyphId - prevGlyphId !== 1) {
        widths.push(currSection);
        widths.push(currGlyphId);
        currSection = [];
      }
      currSection.push(currGlyph.advanceWidth * this.scale);
    }
    widths.push(currSection);
    return widths;
  }
};
var CustomFontEmbedder_default = CustomFontEmbedder;

// src/core/embedders/CustomFontSubsetEmbedder.ts
var CustomFontSubsetEmbedder = class _CustomFontSubsetEmbedder extends CustomFontEmbedder_default {
  constructor(font, fontData, customFontName, fontFeatures) {
    super(font, fontData, customFontName, fontFeatures);
    __publicField(this, "subset");
    __publicField(this, "glyphs");
    __publicField(this, "glyphIdMap");
    this.subset = this.font.createSubset();
    this.glyphs = [];
    this.glyphCache = Cache_default.populatedBy(() => this.glyphs);
    this.glyphIdMap = /* @__PURE__ */ new Map();
  }
  static async for(fontkit, fontData, customFontName, fontFeatures) {
    const font = await fontkit.create(fontData);
    return new _CustomFontSubsetEmbedder(
      font,
      fontData,
      customFontName,
      fontFeatures
    );
  }
  encodeText(text) {
    const { glyphs } = this.font.layout(text, this.fontFeatures);
    const hexCodes = new Array(glyphs.length);
    for (let idx = 0, len = glyphs.length; idx < len; idx++) {
      const glyph = glyphs[idx];
      const subsetGlyphId = this.subset.includeGlyph(glyph);
      this.glyphs[subsetGlyphId - 1] = glyph;
      this.glyphIdMap.set(glyph.id, subsetGlyphId);
      hexCodes[idx] = toHexStringOfMinLength(subsetGlyphId, 4);
    }
    this.glyphCache.invalidate();
    return PDFHexString_default.of(hexCodes.join(""));
  }
  isCFF() {
    return this.subset.cff;
  }
  glyphId(glyph) {
    return glyph ? this.glyphIdMap.get(glyph.id) : -1;
  }
  serializeFont() {
    return new Promise((resolve, reject) => {
      const parts = [];
      this.subset.encodeStream().on("data", (bytes) => parts.push(bytes)).on("end", () => resolve(mergeUint8Arrays(parts))).on("error", (err) => reject(err));
    });
  }
};
var CustomFontSubsetEmbedder_default = CustomFontSubsetEmbedder;

// src/core/embedders/FileEmbedder.ts
var AFRelationship = /* @__PURE__ */ ((AFRelationship2) => {
  AFRelationship2["Source"] = "Source";
  AFRelationship2["Data"] = "Data";
  AFRelationship2["Alternative"] = "Alternative";
  AFRelationship2["Supplement"] = "Supplement";
  AFRelationship2["EncryptedPayload"] = "EncryptedPayload";
  AFRelationship2["FormData"] = "EncryptedPayload";
  AFRelationship2["Schema"] = "Schema";
  AFRelationship2["Unspecified"] = "Unspecified";
  return AFRelationship2;
})(AFRelationship || {});
var FileEmbedder = class _FileEmbedder {
  constructor(fileData, fileName, options = {}) {
    __publicField(this, "fileData");
    __publicField(this, "fileName");
    __publicField(this, "options");
    this.fileData = fileData;
    this.fileName = fileName;
    this.options = options;
  }
  static for(bytes, fileName, options = {}) {
    return new _FileEmbedder(bytes, fileName, options);
  }
  async embedIntoContext(context, ref) {
    const {
      mimeType,
      description,
      creationDate,
      modificationDate,
      afRelationship
    } = this.options;
    const embeddedFileStream = context.flateStream(this.fileData, {
      Type: "EmbeddedFile",
      Subtype: mimeType ?? void 0,
      Params: {
        Size: this.fileData.length,
        CreationDate: creationDate ? PDFString_default.fromDate(creationDate) : void 0,
        ModDate: modificationDate ? PDFString_default.fromDate(modificationDate) : void 0
      }
    });
    const embeddedFileStreamRef = context.register(embeddedFileStream);
    const fileSpecDict = context.obj({
      Type: "Filespec",
      F: PDFString_default.of(this.fileName),
      // TODO: Assert that this is plain ASCII
      UF: PDFHexString_default.fromText(this.fileName),
      EF: { F: embeddedFileStreamRef },
      Desc: description ? PDFHexString_default.fromText(description) : void 0,
      AFRelationship: afRelationship ?? void 0
    });
    if (ref) {
      context.assign(ref, fileSpecDict);
      return ref;
    } else {
      return context.register(fileSpecDict);
    }
  }
};
var FileEmbedder_default = FileEmbedder;

// src/core/embedders/JpegEmbedder.ts
var MARKERS = [
  65472,
  65473,
  65474,
  65475,
  65477,
  65478,
  65479,
  65480,
  65481,
  65482,
  65483,
  65484,
  65485,
  65486,
  65487
];
var ChannelToColorSpace = {
  1: "DeviceGray" /* DeviceGray */,
  3: "DeviceRGB" /* DeviceRGB */,
  4: "DeviceCMYK" /* DeviceCMYK */
};
var JpegEmbedder = class _JpegEmbedder {
  constructor(imageData, bitsPerComponent, width, height, colorSpace) {
    __publicField(this, "bitsPerComponent");
    __publicField(this, "height");
    __publicField(this, "width");
    __publicField(this, "colorSpace");
    __publicField(this, "imageData");
    this.imageData = imageData;
    this.bitsPerComponent = bitsPerComponent;
    this.width = width;
    this.height = height;
    this.colorSpace = colorSpace;
  }
  static async for(imageData) {
    const dataView = new DataView(imageData.buffer);
    const soi = dataView.getUint16(0);
    if (soi !== 65496) throw new Error("SOI not found in JPEG");
    let pos = 2;
    let marker;
    while (pos < dataView.byteLength) {
      marker = dataView.getUint16(pos);
      pos += 2;
      if (MARKERS.includes(marker)) break;
      pos += dataView.getUint16(pos);
    }
    if (!MARKERS.includes(marker)) throw new Error("Invalid JPEG");
    pos += 2;
    const bitsPerComponent = dataView.getUint8(pos++);
    const height = dataView.getUint16(pos);
    pos += 2;
    const width = dataView.getUint16(pos);
    pos += 2;
    const channelByte = dataView.getUint8(pos++);
    const channelName = ChannelToColorSpace[channelByte];
    if (!channelName) throw new Error("Unknown JPEG channel.");
    const colorSpace = channelName;
    return new _JpegEmbedder(
      imageData,
      bitsPerComponent,
      width,
      height,
      colorSpace
    );
  }
  async embedIntoContext(context, ref) {
    const xObject = context.stream(this.imageData, {
      Type: "XObject",
      Subtype: "Image",
      BitsPerComponent: this.bitsPerComponent,
      Width: this.width,
      Height: this.height,
      ColorSpace: this.colorSpace,
      Filter: "DCTDecode",
      // CMYK JPEG streams in PDF are typically stored complemented,
      // with 1 as 'off' and 0 as 'on' (PDF 32000-1:2008, 8.6.4.4).
      //
      // Standalone CMYK JPEG (usually exported by Photoshop) are
      // stored inverse, with 0 as 'off' and 1 as 'on', like RGB.
      //
      // Applying a swap here as a hedge that most bytes passing
      // through this method will benefit from it.
      Decode: this.colorSpace === "DeviceCMYK" /* DeviceCMYK */ ? [1, 0, 1, 0, 1, 0, 1, 0] : void 0
    });
    if (ref) {
      context.assign(ref, xObject);
      return ref;
    } else {
      return context.register(xObject);
    }
  }
};
var JpegEmbedder_default = JpegEmbedder;

// src/utils/png.ts
var import_upng = __toESM(require("@pdf-lib/upng"));
var getImageType = (ctype) => {
  if (ctype === 0) return "Greyscale" /* Greyscale */;
  if (ctype === 2) return "Truecolour" /* Truecolour */;
  if (ctype === 3) return "IndexedColour" /* IndexedColour */;
  if (ctype === 4) return "GreyscaleWithAlpha" /* GreyscaleWithAlpha */;
  if (ctype === 6) return "TruecolourWithAlpha" /* TruecolourWithAlpha */;
  throw new Error(`Unknown color type: ${ctype}`);
};
var splitAlphaChannel = (rgbaChannel) => {
  const pixelCount = Math.floor(rgbaChannel.length / 4);
  const rgbChannel = new Uint8Array(pixelCount * 3);
  const alphaChannel = new Uint8Array(pixelCount * 1);
  let rgbaOffset = 0;
  let rgbOffset = 0;
  let alphaOffset = 0;
  while (rgbaOffset < rgbaChannel.length) {
    rgbChannel[rgbOffset++] = rgbaChannel[rgbaOffset++];
    rgbChannel[rgbOffset++] = rgbaChannel[rgbaOffset++];
    rgbChannel[rgbOffset++] = rgbaChannel[rgbaOffset++];
    alphaChannel[alphaOffset++] = rgbaChannel[rgbaOffset++];
  }
  return { rgbChannel, alphaChannel };
};
var _PNG = class _PNG {
  constructor(pngData) {
    __publicField(this, "rgbChannel");
    __publicField(this, "alphaChannel");
    __publicField(this, "type");
    __publicField(this, "width");
    __publicField(this, "height");
    __publicField(this, "bitsPerComponent");
    let buffer;
    if (pngData.buffer instanceof ArrayBuffer) {
      buffer = pngData.buffer;
    } else {
      buffer = new ArrayBuffer(pngData.byteLength);
      new Uint8Array(buffer).set(pngData);
    }
    const upng = import_upng.default.decode(buffer);
    const frames = import_upng.default.toRGBA8(upng);
    if (frames.length > 1) throw new Error("Animated PNGs are not supported");
    const frame = new Uint8Array(frames[0]);
    const { rgbChannel, alphaChannel } = splitAlphaChannel(frame);
    this.rgbChannel = rgbChannel;
    const hasAlphaValues = alphaChannel.some((a) => a < 255);
    if (hasAlphaValues) this.alphaChannel = alphaChannel;
    this.type = getImageType(upng.ctype);
    this.width = upng.width;
    this.height = upng.height;
    this.bitsPerComponent = 8;
  }
};
__publicField(_PNG, "load", (pngData) => new _PNG(pngData));
var PNG = _PNG;

// src/core/embedders/PngEmbedder.ts
var PngEmbedder = class _PngEmbedder {
  constructor(png) {
    __publicField(this, "bitsPerComponent");
    __publicField(this, "height");
    __publicField(this, "width");
    __publicField(this, "colorSpace");
    __publicField(this, "image");
    this.image = png;
    this.bitsPerComponent = png.bitsPerComponent;
    this.width = png.width;
    this.height = png.height;
    this.colorSpace = "DeviceRGB";
  }
  static async for(imageData) {
    const png = PNG.load(imageData);
    return new _PngEmbedder(png);
  }
  async embedIntoContext(context, ref) {
    const SMask = this.embedAlphaChannel(context);
    const xObject = context.flateStream(this.image.rgbChannel, {
      Type: "XObject",
      Subtype: "Image",
      BitsPerComponent: this.image.bitsPerComponent,
      Width: this.image.width,
      Height: this.image.height,
      ColorSpace: this.colorSpace,
      SMask
    });
    if (ref) {
      context.assign(ref, xObject);
      return ref;
    } else {
      return context.register(xObject);
    }
  }
  embedAlphaChannel(context) {
    if (!this.image.alphaChannel) return void 0;
    const xObject = context.flateStream(this.image.alphaChannel, {
      Type: "XObject",
      Subtype: "Image",
      Height: this.image.height,
      Width: this.image.width,
      BitsPerComponent: this.image.bitsPerComponent,
      ColorSpace: "DeviceGray",
      Decode: [0, 1]
    });
    return context.register(xObject);
  }
};
var PngEmbedder_default = PngEmbedder;

// src/core/streams/Stream.ts
var Stream = class _Stream {
  constructor(buffer, start, length) {
    __publicField(this, "bytes");
    __publicField(this, "start");
    __publicField(this, "pos");
    __publicField(this, "end");
    this.bytes = buffer;
    this.start = start || 0;
    this.pos = this.start;
    this.end = !!start && !!length ? start + length : this.bytes.length;
  }
  get length() {
    return this.end - this.start;
  }
  get isEmpty() {
    return this.length === 0;
  }
  getByte() {
    if (this.pos >= this.end) {
      return -1;
    }
    return this.bytes[this.pos++];
  }
  getUint16() {
    const b0 = this.getByte();
    const b1 = this.getByte();
    if (b0 === -1 || b1 === -1) {
      return -1;
    }
    return (b0 << 8) + b1;
  }
  getInt32() {
    const b0 = this.getByte();
    const b1 = this.getByte();
    const b2 = this.getByte();
    const b3 = this.getByte();
    return (b0 << 24) + (b1 << 16) + (b2 << 8) + b3;
  }
  // Returns subarray of original buffer, should only be read.
  getBytes(length, forceClamped = false) {
    const bytes = this.bytes;
    const pos = this.pos;
    const strEnd = this.end;
    if (!length) {
      const subarray = bytes.subarray(pos, strEnd);
      return forceClamped ? new Uint8ClampedArray(subarray) : subarray;
    } else {
      let end = pos + length;
      if (end > strEnd) {
        end = strEnd;
      }
      this.pos = end;
      const subarray = bytes.subarray(pos, end);
      return forceClamped ? new Uint8ClampedArray(subarray) : subarray;
    }
  }
  peekByte() {
    const peekedByte = this.getByte();
    this.pos--;
    return peekedByte;
  }
  peekBytes(length, forceClamped = false) {
    const bytes = this.getBytes(length, forceClamped);
    this.pos -= bytes.length;
    return bytes;
  }
  skip(n) {
    if (!n) {
      n = 1;
    }
    this.pos += n;
  }
  reset() {
    this.pos = this.start;
  }
  moveStart() {
    this.start = this.pos;
  }
  makeSubStream(start, length) {
    return new _Stream(this.bytes, start, length);
  }
  decode() {
    return this.bytes;
  }
};
var Stream_default = Stream;

// src/core/streams/DecodeStream.ts
var emptyBuffer = new Uint8Array(0);
var DecodeStream = class {
  constructor(maybeMinBufferLength) {
    __publicField(this, "bufferLength");
    __publicField(this, "buffer");
    __publicField(this, "eof");
    __publicField(this, "pos");
    __publicField(this, "minBufferLength");
    this.pos = 0;
    this.bufferLength = 0;
    this.eof = false;
    this.buffer = emptyBuffer;
    this.minBufferLength = 512;
    if (maybeMinBufferLength) {
      while (this.minBufferLength < maybeMinBufferLength) {
        this.minBufferLength *= 2;
      }
    }
  }
  get isEmpty() {
    while (!this.eof && this.bufferLength === 0) {
      this.readBlock();
    }
    return this.bufferLength === 0;
  }
  getByte() {
    const pos = this.pos;
    while (this.bufferLength <= pos) {
      if (this.eof) {
        return -1;
      }
      this.readBlock();
    }
    return this.buffer[this.pos++];
  }
  getUint16() {
    const b0 = this.getByte();
    const b1 = this.getByte();
    if (b0 === -1 || b1 === -1) {
      return -1;
    }
    return (b0 << 8) + b1;
  }
  getInt32() {
    const b0 = this.getByte();
    const b1 = this.getByte();
    const b2 = this.getByte();
    const b3 = this.getByte();
    return (b0 << 24) + (b1 << 16) + (b2 << 8) + b3;
  }
  getBytes(length, forceClamped = false) {
    let end;
    const pos = this.pos;
    if (length) {
      this.ensureBuffer(pos + length);
      end = pos + length;
      while (!this.eof && this.bufferLength < end) {
        this.readBlock();
      }
      const bufEnd = this.bufferLength;
      if (end > bufEnd) {
        end = bufEnd;
      }
    } else {
      while (!this.eof) {
        this.readBlock();
      }
      end = this.bufferLength;
    }
    this.pos = end;
    const subarray = this.buffer.subarray(pos, end);
    return forceClamped && !(subarray instanceof Uint8ClampedArray) ? new Uint8ClampedArray(subarray) : subarray;
  }
  peekByte() {
    const peekedByte = this.getByte();
    this.pos--;
    return peekedByte;
  }
  peekBytes(length, forceClamped = false) {
    const bytes = this.getBytes(length, forceClamped);
    this.pos -= bytes.length;
    return bytes;
  }
  skip(n) {
    if (!n) {
      n = 1;
    }
    this.pos += n;
  }
  reset() {
    this.pos = 0;
  }
  makeSubStream(start, length) {
    const end = start + length;
    while (this.bufferLength <= end && !this.eof) {
      this.readBlock();
    }
    return new Stream_default(
      this.buffer,
      start,
      length
      /* dict */
    );
  }
  decode() {
    while (!this.eof) this.readBlock();
    return this.buffer.subarray(0, this.bufferLength);
  }
  readBlock() {
    throw new MethodNotImplementedError(this.constructor.name, "readBlock");
  }
  ensureBuffer(requested) {
    const buffer = this.buffer;
    if (requested <= buffer.byteLength) {
      return buffer;
    }
    let size = this.minBufferLength;
    while (size < requested) {
      size *= 2;
    }
    const buffer2 = new Uint8Array(size);
    buffer2.set(buffer);
    return this.buffer = buffer2;
  }
  // getBaseStreams() {
  //   if (this.str && this.str.getBaseStreams) {
  //     return this.str.getBaseStreams();
  //   }
  //   return [];
  // }
};
var DecodeStream_default = DecodeStream;

// src/core/streams/Ascii85Stream.ts
var isSpace = (ch) => ch === 32 || ch === 9 || ch === 13 || ch === 10;
var Ascii85Stream = class extends DecodeStream_default {
  constructor(stream2, maybeLength) {
    super(maybeLength);
    __publicField(this, "stream");
    __publicField(this, "input");
    this.stream = stream2;
    this.input = new Uint8Array(5);
    if (maybeLength) {
      maybeLength = 0.8 * maybeLength;
    }
  }
  readBlock() {
    const TILDA_CHAR = 126;
    const Z_LOWER_CHAR = 122;
    const EOF = -1;
    const stream2 = this.stream;
    let c = stream2.getByte();
    while (isSpace(c)) {
      c = stream2.getByte();
    }
    if (c === EOF || c === TILDA_CHAR) {
      this.eof = true;
      return;
    }
    const bufferLength = this.bufferLength;
    let buffer;
    let i;
    if (c === Z_LOWER_CHAR) {
      buffer = this.ensureBuffer(bufferLength + 4);
      for (i = 0; i < 4; ++i) {
        buffer[bufferLength + i] = 0;
      }
      this.bufferLength += 4;
    } else {
      const input = this.input;
      input[0] = c;
      for (i = 1; i < 5; ++i) {
        c = stream2.getByte();
        while (isSpace(c)) {
          c = stream2.getByte();
        }
        input[i] = c;
        if (c === EOF || c === TILDA_CHAR) {
          break;
        }
      }
      buffer = this.ensureBuffer(bufferLength + i - 1);
      this.bufferLength += i - 1;
      if (i < 5) {
        for (; i < 5; ++i) {
          input[i] = 33 + 84;
        }
        this.eof = true;
      }
      let t = 0;
      for (i = 0; i < 5; ++i) {
        t = t * 85 + (input[i] - 33);
      }
      for (i = 3; i >= 0; --i) {
        buffer[bufferLength + i] = t & 255;
        t >>= 8;
      }
    }
  }
};
var Ascii85Stream_default = Ascii85Stream;

// src/core/streams/AsciiHexStream.ts
var AsciiHexStream = class extends DecodeStream_default {
  constructor(stream2, maybeLength) {
    super(maybeLength);
    __publicField(this, "stream");
    __publicField(this, "firstDigit");
    this.stream = stream2;
    this.firstDigit = -1;
    if (maybeLength) {
      maybeLength = 0.5 * maybeLength;
    }
  }
  readBlock() {
    const UPSTREAM_BLOCK_SIZE = 8e3;
    const bytes = this.stream.getBytes(UPSTREAM_BLOCK_SIZE);
    if (!bytes.length) {
      this.eof = true;
      return;
    }
    const maxDecodeLength = bytes.length + 1 >> 1;
    const buffer = this.ensureBuffer(this.bufferLength + maxDecodeLength);
    let bufferLength = this.bufferLength;
    let firstDigit = this.firstDigit;
    for (let i = 0, ii = bytes.length; i < ii; i++) {
      const ch = bytes[i];
      let digit;
      if (ch >= 48 && ch <= 57) {
        digit = ch & 15;
      } else if (ch >= 65 && ch <= 70 || ch >= 97 && ch <= 102) {
        digit = (ch & 15) + 9;
      } else if (ch === 62) {
        this.eof = true;
        break;
      } else {
        continue;
      }
      if (firstDigit < 0) {
        firstDigit = digit;
      } else {
        buffer[bufferLength++] = firstDigit << 4 | digit;
        firstDigit = -1;
      }
    }
    if (firstDigit >= 0 && this.eof) {
      buffer[bufferLength++] = firstDigit << 4;
      firstDigit = -1;
    }
    this.firstDigit = firstDigit;
    this.bufferLength = bufferLength;
  }
};
var AsciiHexStream_default = AsciiHexStream;

// src/core/streams/FlateStream.ts
var codeLenCodeMap = new Int32Array([
  16,
  17,
  18,
  0,
  8,
  7,
  9,
  6,
  10,
  5,
  11,
  4,
  12,
  3,
  13,
  2,
  14,
  1,
  15
]);
var lengthDecode = new Int32Array([
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  65547,
  65549,
  65551,
  65553,
  131091,
  131095,
  131099,
  131103,
  196643,
  196651,
  196659,
  196667,
  262211,
  262227,
  262243,
  262259,
  327811,
  327843,
  327875,
  327907,
  258,
  258,
  258
]);
var distDecode = new Int32Array([
  1,
  2,
  3,
  4,
  65541,
  65543,
  131081,
  131085,
  196625,
  196633,
  262177,
  262193,
  327745,
  327777,
  393345,
  393409,
  459009,
  459137,
  524801,
  525057,
  590849,
  591361,
  657409,
  658433,
  724993,
  727041,
  794625,
  798721,
  868353,
  876545
]);
var fixedLitCodeTab = [new Int32Array([
  459008,
  524368,
  524304,
  524568,
  459024,
  524400,
  524336,
  590016,
  459016,
  524384,
  524320,
  589984,
  524288,
  524416,
  524352,
  590048,
  459012,
  524376,
  524312,
  589968,
  459028,
  524408,
  524344,
  590032,
  459020,
  524392,
  524328,
  59e4,
  524296,
  524424,
  524360,
  590064,
  459010,
  524372,
  524308,
  524572,
  459026,
  524404,
  524340,
  590024,
  459018,
  524388,
  524324,
  589992,
  524292,
  524420,
  524356,
  590056,
  459014,
  524380,
  524316,
  589976,
  459030,
  524412,
  524348,
  590040,
  459022,
  524396,
  524332,
  590008,
  524300,
  524428,
  524364,
  590072,
  459009,
  524370,
  524306,
  524570,
  459025,
  524402,
  524338,
  590020,
  459017,
  524386,
  524322,
  589988,
  524290,
  524418,
  524354,
  590052,
  459013,
  524378,
  524314,
  589972,
  459029,
  524410,
  524346,
  590036,
  459021,
  524394,
  524330,
  590004,
  524298,
  524426,
  524362,
  590068,
  459011,
  524374,
  524310,
  524574,
  459027,
  524406,
  524342,
  590028,
  459019,
  524390,
  524326,
  589996,
  524294,
  524422,
  524358,
  590060,
  459015,
  524382,
  524318,
  589980,
  459031,
  524414,
  524350,
  590044,
  459023,
  524398,
  524334,
  590012,
  524302,
  524430,
  524366,
  590076,
  459008,
  524369,
  524305,
  524569,
  459024,
  524401,
  524337,
  590018,
  459016,
  524385,
  524321,
  589986,
  524289,
  524417,
  524353,
  590050,
  459012,
  524377,
  524313,
  589970,
  459028,
  524409,
  524345,
  590034,
  459020,
  524393,
  524329,
  590002,
  524297,
  524425,
  524361,
  590066,
  459010,
  524373,
  524309,
  524573,
  459026,
  524405,
  524341,
  590026,
  459018,
  524389,
  524325,
  589994,
  524293,
  524421,
  524357,
  590058,
  459014,
  524381,
  524317,
  589978,
  459030,
  524413,
  524349,
  590042,
  459022,
  524397,
  524333,
  590010,
  524301,
  524429,
  524365,
  590074,
  459009,
  524371,
  524307,
  524571,
  459025,
  524403,
  524339,
  590022,
  459017,
  524387,
  524323,
  589990,
  524291,
  524419,
  524355,
  590054,
  459013,
  524379,
  524315,
  589974,
  459029,
  524411,
  524347,
  590038,
  459021,
  524395,
  524331,
  590006,
  524299,
  524427,
  524363,
  590070,
  459011,
  524375,
  524311,
  524575,
  459027,
  524407,
  524343,
  590030,
  459019,
  524391,
  524327,
  589998,
  524295,
  524423,
  524359,
  590062,
  459015,
  524383,
  524319,
  589982,
  459031,
  524415,
  524351,
  590046,
  459023,
  524399,
  524335,
  590014,
  524303,
  524431,
  524367,
  590078,
  459008,
  524368,
  524304,
  524568,
  459024,
  524400,
  524336,
  590017,
  459016,
  524384,
  524320,
  589985,
  524288,
  524416,
  524352,
  590049,
  459012,
  524376,
  524312,
  589969,
  459028,
  524408,
  524344,
  590033,
  459020,
  524392,
  524328,
  590001,
  524296,
  524424,
  524360,
  590065,
  459010,
  524372,
  524308,
  524572,
  459026,
  524404,
  524340,
  590025,
  459018,
  524388,
  524324,
  589993,
  524292,
  524420,
  524356,
  590057,
  459014,
  524380,
  524316,
  589977,
  459030,
  524412,
  524348,
  590041,
  459022,
  524396,
  524332,
  590009,
  524300,
  524428,
  524364,
  590073,
  459009,
  524370,
  524306,
  524570,
  459025,
  524402,
  524338,
  590021,
  459017,
  524386,
  524322,
  589989,
  524290,
  524418,
  524354,
  590053,
  459013,
  524378,
  524314,
  589973,
  459029,
  524410,
  524346,
  590037,
  459021,
  524394,
  524330,
  590005,
  524298,
  524426,
  524362,
  590069,
  459011,
  524374,
  524310,
  524574,
  459027,
  524406,
  524342,
  590029,
  459019,
  524390,
  524326,
  589997,
  524294,
  524422,
  524358,
  590061,
  459015,
  524382,
  524318,
  589981,
  459031,
  524414,
  524350,
  590045,
  459023,
  524398,
  524334,
  590013,
  524302,
  524430,
  524366,
  590077,
  459008,
  524369,
  524305,
  524569,
  459024,
  524401,
  524337,
  590019,
  459016,
  524385,
  524321,
  589987,
  524289,
  524417,
  524353,
  590051,
  459012,
  524377,
  524313,
  589971,
  459028,
  524409,
  524345,
  590035,
  459020,
  524393,
  524329,
  590003,
  524297,
  524425,
  524361,
  590067,
  459010,
  524373,
  524309,
  524573,
  459026,
  524405,
  524341,
  590027,
  459018,
  524389,
  524325,
  589995,
  524293,
  524421,
  524357,
  590059,
  459014,
  524381,
  524317,
  589979,
  459030,
  524413,
  524349,
  590043,
  459022,
  524397,
  524333,
  590011,
  524301,
  524429,
  524365,
  590075,
  459009,
  524371,
  524307,
  524571,
  459025,
  524403,
  524339,
  590023,
  459017,
  524387,
  524323,
  589991,
  524291,
  524419,
  524355,
  590055,
  459013,
  524379,
  524315,
  589975,
  459029,
  524411,
  524347,
  590039,
  459021,
  524395,
  524331,
  590007,
  524299,
  524427,
  524363,
  590071,
  459011,
  524375,
  524311,
  524575,
  459027,
  524407,
  524343,
  590031,
  459019,
  524391,
  524327,
  589999,
  524295,
  524423,
  524359,
  590063,
  459015,
  524383,
  524319,
  589983,
  459031,
  524415,
  524351,
  590047,
  459023,
  524399,
  524335,
  590015,
  524303,
  524431,
  524367,
  590079
]), 9];
var fixedDistCodeTab = [new Int32Array([
  327680,
  327696,
  327688,
  327704,
  327684,
  327700,
  327692,
  327708,
  327682,
  327698,
  327690,
  327706,
  327686,
  327702,
  327694,
  0,
  327681,
  327697,
  327689,
  327705,
  327685,
  327701,
  327693,
  327709,
  327683,
  327699,
  327691,
  327707,
  327687,
  327703,
  327695,
  0
]), 5];
var FlateStream = class extends DecodeStream_default {
  constructor(stream2, maybeLength) {
    super(maybeLength);
    __publicField(this, "stream");
    __publicField(this, "codeSize");
    __publicField(this, "codeBuf");
    this.stream = stream2;
    const cmf = stream2.getByte();
    const flg = stream2.getByte();
    if (cmf === -1 || flg === -1) {
      throw new Error(`Invalid header in flate stream: ${cmf}, ${flg}`);
    }
    if ((cmf & 15) !== 8) {
      throw new Error(
        `Unknown compression method in flate stream: ${cmf}, ${flg}`
      );
    }
    if (((cmf << 8) + flg) % 31 !== 0) {
      throw new Error(`Bad FCHECK in flate stream: ${cmf}, ${flg}`);
    }
    if (flg & 32) {
      throw new Error(`FDICT bit set in flate stream: ${cmf}, ${flg}`);
    }
    this.codeSize = 0;
    this.codeBuf = 0;
  }
  readBlock() {
    let buffer;
    let len;
    const str = this.stream;
    let hdr = this.getBits(3);
    if (hdr & 1) {
      this.eof = true;
    }
    hdr >>= 1;
    if (hdr === 0) {
      let b;
      if ((b = str.getByte()) === -1) {
        throw new Error("Bad block header in flate stream");
      }
      let blockLen = b;
      if ((b = str.getByte()) === -1) {
        throw new Error("Bad block header in flate stream");
      }
      blockLen |= b << 8;
      if ((b = str.getByte()) === -1) {
        throw new Error("Bad block header in flate stream");
      }
      let check = b;
      if ((b = str.getByte()) === -1) {
        throw new Error("Bad block header in flate stream");
      }
      check |= b << 8;
      if (check !== (~blockLen & 65535) && (blockLen !== 0 || check !== 0)) {
        throw new Error("Bad uncompressed block length in flate stream");
      }
      this.codeBuf = 0;
      this.codeSize = 0;
      const bufferLength = this.bufferLength;
      buffer = this.ensureBuffer(bufferLength + blockLen);
      const end = bufferLength + blockLen;
      this.bufferLength = end;
      if (blockLen === 0) {
        if (str.peekByte() === -1) {
          this.eof = true;
        }
      } else {
        for (let n = bufferLength; n < end; ++n) {
          if ((b = str.getByte()) === -1) {
            this.eof = true;
            break;
          }
          buffer[n] = b;
        }
      }
      return;
    }
    let litCodeTable;
    let distCodeTable;
    if (hdr === 1) {
      litCodeTable = fixedLitCodeTab;
      distCodeTable = fixedDistCodeTab;
    } else if (hdr === 2) {
      const numLitCodes = this.getBits(5) + 257;
      const numDistCodes = this.getBits(5) + 1;
      const numCodeLenCodes = this.getBits(4) + 4;
      const codeLenCodeLengths = new Uint8Array(codeLenCodeMap.length);
      let i;
      for (i = 0; i < numCodeLenCodes; ++i) {
        codeLenCodeLengths[codeLenCodeMap[i]] = this.getBits(3);
      }
      const codeLenCodeTab = this.generateHuffmanTable(codeLenCodeLengths);
      len = 0;
      i = 0;
      const codes = numLitCodes + numDistCodes;
      const codeLengths = new Uint8Array(codes);
      let bitsLength;
      let bitsOffset;
      let what;
      while (i < codes) {
        const code = this.getCode(codeLenCodeTab);
        if (code === 16) {
          bitsLength = 2;
          bitsOffset = 3;
          what = len;
        } else if (code === 17) {
          bitsLength = 3;
          bitsOffset = 3;
          what = len = 0;
        } else if (code === 18) {
          bitsLength = 7;
          bitsOffset = 11;
          what = len = 0;
        } else {
          codeLengths[i++] = len = code;
          continue;
        }
        let repeatLength = this.getBits(bitsLength) + bitsOffset;
        while (repeatLength-- > 0) {
          codeLengths[i++] = what;
        }
      }
      litCodeTable = this.generateHuffmanTable(
        codeLengths.subarray(0, numLitCodes)
      );
      distCodeTable = this.generateHuffmanTable(
        codeLengths.subarray(numLitCodes, codes)
      );
    } else {
      throw new Error("Unknown block type in flate stream");
    }
    buffer = this.buffer;
    let limit = buffer ? buffer.length : 0;
    let pos = this.bufferLength;
    while (true) {
      let code1 = this.getCode(litCodeTable);
      if (code1 < 256) {
        if (pos + 1 >= limit) {
          buffer = this.ensureBuffer(pos + 1);
          limit = buffer.length;
        }
        buffer[pos++] = code1;
        continue;
      }
      if (code1 === 256) {
        this.bufferLength = pos;
        return;
      }
      code1 -= 257;
      code1 = lengthDecode[code1];
      let code2 = code1 >> 16;
      if (code2 > 0) {
        code2 = this.getBits(code2);
      }
      len = (code1 & 65535) + code2;
      code1 = this.getCode(distCodeTable);
      code1 = distDecode[code1];
      code2 = code1 >> 16;
      if (code2 > 0) {
        code2 = this.getBits(code2);
      }
      const dist = (code1 & 65535) + code2;
      if (pos + len >= limit) {
        buffer = this.ensureBuffer(pos + len);
        limit = buffer.length;
      }
      for (let k = 0; k < len; ++k, ++pos) {
        buffer[pos] = buffer[pos - dist];
      }
    }
  }
  getBits(bits) {
    const str = this.stream;
    let codeSize = this.codeSize;
    let codeBuf = this.codeBuf;
    let b;
    while (codeSize < bits) {
      if ((b = str.getByte()) === -1) {
        throw new Error("Bad encoding in flate stream");
      }
      codeBuf |= b << codeSize;
      codeSize += 8;
    }
    b = codeBuf & (1 << bits) - 1;
    this.codeBuf = codeBuf >> bits;
    this.codeSize = codeSize -= bits;
    return b;
  }
  getCode(table) {
    const str = this.stream;
    const codes = table[0];
    const maxLen = table[1];
    let codeSize = this.codeSize;
    let codeBuf = this.codeBuf;
    let b;
    while (codeSize < maxLen) {
      if ((b = str.getByte()) === -1) {
        break;
      }
      codeBuf |= b << codeSize;
      codeSize += 8;
    }
    const code = codes[codeBuf & (1 << maxLen) - 1];
    if (typeof codes === "number") {
      console.log("FLATE:", code);
    }
    const codeLen = code >> 16;
    const codeVal = code & 65535;
    if (codeLen < 1 || codeSize < codeLen) {
      throw new Error("Bad encoding in flate stream");
    }
    this.codeBuf = codeBuf >> codeLen;
    this.codeSize = codeSize - codeLen;
    return codeVal;
  }
  generateHuffmanTable(lengths) {
    const n = lengths.length;
    let maxLen = 0;
    let i;
    for (i = 0; i < n; ++i) {
      if (lengths[i] > maxLen) {
        maxLen = lengths[i];
      }
    }
    const size = 1 << maxLen;
    const codes = new Int32Array(size);
    for (let len = 1, code = 0, skip = 2; len <= maxLen; ++len, code <<= 1, skip <<= 1) {
      for (let val = 0; val < n; ++val) {
        if (lengths[val] === len) {
          let code2 = 0;
          let t = code;
          for (i = 0; i < len; ++i) {
            code2 = code2 << 1 | t & 1;
            t >>= 1;
          }
          for (i = code2; i < size; i += skip) {
            codes[i] = len << 16 | val;
          }
          ++code;
        }
      }
    }
    return [codes, maxLen];
  }
};
var FlateStream_default = FlateStream;

// src/core/streams/LZWStream.ts
var LZWStream = class extends DecodeStream_default {
  constructor(stream2, maybeLength, earlyChange) {
    super(maybeLength);
    __publicField(this, "stream");
    __publicField(this, "cachedData");
    __publicField(this, "bitsCached");
    __publicField(this, "lzwState");
    this.stream = stream2;
    this.cachedData = 0;
    this.bitsCached = 0;
    const maxLzwDictionarySize = 4096;
    const lzwState = {
      earlyChange,
      codeLength: 9,
      nextCode: 258,
      dictionaryValues: new Uint8Array(maxLzwDictionarySize),
      dictionaryLengths: new Uint16Array(maxLzwDictionarySize),
      dictionaryPrevCodes: new Uint16Array(maxLzwDictionarySize),
      currentSequence: new Uint8Array(maxLzwDictionarySize),
      currentSequenceLength: 0
    };
    for (let i = 0; i < 256; ++i) {
      lzwState.dictionaryValues[i] = i;
      lzwState.dictionaryLengths[i] = 1;
    }
    this.lzwState = lzwState;
  }
  readBlock() {
    const blockSize = 512;
    let estimatedDecodedSize = blockSize * 2;
    const decodedSizeDelta = blockSize;
    let i;
    let j;
    let q;
    const lzwState = this.lzwState;
    if (!lzwState) {
      return;
    }
    const earlyChange = lzwState.earlyChange;
    let nextCode = lzwState.nextCode;
    const dictionaryValues = lzwState.dictionaryValues;
    const dictionaryLengths = lzwState.dictionaryLengths;
    const dictionaryPrevCodes = lzwState.dictionaryPrevCodes;
    let codeLength = lzwState.codeLength;
    let prevCode = lzwState.prevCode;
    const currentSequence = lzwState.currentSequence;
    let currentSequenceLength = lzwState.currentSequenceLength;
    let decodedLength = 0;
    let currentBufferLength = this.bufferLength;
    let buffer = this.ensureBuffer(this.bufferLength + estimatedDecodedSize);
    for (i = 0; i < blockSize; i++) {
      const code = this.readBits(codeLength);
      const hasPrev = currentSequenceLength > 0;
      if (!code || code < 256) {
        currentSequence[0] = code;
        currentSequenceLength = 1;
      } else if (code >= 258) {
        if (code < nextCode) {
          currentSequenceLength = dictionaryLengths[code];
          for (j = currentSequenceLength - 1, q = code; j >= 0; j--) {
            currentSequence[j] = dictionaryValues[q];
            q = dictionaryPrevCodes[q];
          }
        } else {
          currentSequence[currentSequenceLength++] = currentSequence[0];
        }
      } else if (code === 256) {
        codeLength = 9;
        nextCode = 258;
        currentSequenceLength = 0;
        continue;
      } else {
        this.eof = true;
        delete this.lzwState;
        break;
      }
      if (hasPrev) {
        dictionaryPrevCodes[nextCode] = prevCode;
        dictionaryLengths[nextCode] = dictionaryLengths[prevCode] + 1;
        dictionaryValues[nextCode] = currentSequence[0];
        nextCode++;
        codeLength = nextCode + earlyChange & nextCode + earlyChange - 1 ? codeLength : Math.min(
          Math.log(nextCode + earlyChange) / 0.6931471805599453 + 1,
          12
        ) | 0;
      }
      prevCode = code;
      decodedLength += currentSequenceLength;
      if (estimatedDecodedSize < decodedLength) {
        do {
          estimatedDecodedSize += decodedSizeDelta;
        } while (estimatedDecodedSize < decodedLength);
        buffer = this.ensureBuffer(this.bufferLength + estimatedDecodedSize);
      }
      for (j = 0; j < currentSequenceLength; j++) {
        buffer[currentBufferLength++] = currentSequence[j];
      }
    }
    lzwState.nextCode = nextCode;
    lzwState.codeLength = codeLength;
    lzwState.prevCode = prevCode;
    lzwState.currentSequenceLength = currentSequenceLength;
    this.bufferLength = currentBufferLength;
  }
  readBits(n) {
    let bitsCached = this.bitsCached;
    let cachedData = this.cachedData;
    while (bitsCached < n) {
      const c = this.stream.getByte();
      if (c === -1) {
        this.eof = true;
        return null;
      }
      cachedData = cachedData << 8 | c;
      bitsCached += 8;
    }
    this.bitsCached = bitsCached -= n;
    this.cachedData = cachedData;
    return cachedData >>> bitsCached & (1 << n) - 1;
  }
};
var LZWStream_default = LZWStream;

// src/core/streams/RunLengthStream.ts
var RunLengthStream = class extends DecodeStream_default {
  constructor(stream2, maybeLength) {
    super(maybeLength);
    __publicField(this, "stream");
    this.stream = stream2;
  }
  readBlock() {
    const repeatHeader = this.stream.getBytes(2);
    if (!repeatHeader || repeatHeader.length < 2 || repeatHeader[0] === 128) {
      this.eof = true;
      return;
    }
    let buffer;
    let bufferLength = this.bufferLength;
    let n = repeatHeader[0];
    if (n < 128) {
      buffer = this.ensureBuffer(bufferLength + n + 1);
      buffer[bufferLength++] = repeatHeader[1];
      if (n > 0) {
        const source = this.stream.getBytes(n);
        buffer.set(source, bufferLength);
        bufferLength += n;
      }
    } else {
      n = 257 - n;
      const b = repeatHeader[1];
      buffer = this.ensureBuffer(bufferLength + n + 1);
      for (let i = 0; i < n; i++) {
        buffer[bufferLength++] = b;
      }
    }
    this.bufferLength = bufferLength;
  }
};
var RunLengthStream_default = RunLengthStream;

// src/core/streams/decode.ts
var decodeStream = (stream2, encoding, params) => {
  if (encoding === PDFName_default.of("FlateDecode")) {
    return new FlateStream_default(stream2);
  }
  if (encoding === PDFName_default.of("LZWDecode")) {
    let earlyChange = 1;
    if (params instanceof PDFDict_default) {
      const EarlyChange = params.lookup(PDFName_default.of("EarlyChange"));
      if (EarlyChange instanceof PDFNumber_default) {
        earlyChange = EarlyChange.asNumber();
      }
    }
    return new LZWStream_default(stream2, void 0, earlyChange);
  }
  if (encoding === PDFName_default.of("ASCII85Decode")) {
    return new Ascii85Stream_default(stream2);
  }
  if (encoding === PDFName_default.of("ASCIIHexDecode")) {
    return new AsciiHexStream_default(stream2);
  }
  if (encoding === PDFName_default.of("RunLengthDecode")) {
    return new RunLengthStream_default(stream2);
  }
  throw new UnsupportedEncodingError(encoding.asString());
};
var decodePDFRawStream = ({ dict, contents }) => {
  let stream2 = new Stream_default(contents);
  const Filter = dict.lookup(PDFName_default.of("Filter"));
  const DecodeParms = dict.lookup(PDFName_default.of("DecodeParms"));
  if (Filter instanceof PDFName_default) {
    stream2 = decodeStream(
      stream2,
      Filter,
      DecodeParms
    );
  } else if (Filter instanceof PDFArray_default) {
    for (let idx = 0, len = Filter.size(); idx < len; idx++) {
      stream2 = decodeStream(
        stream2,
        Filter.lookup(idx, PDFName_default),
        DecodeParms && DecodeParms.lookupMaybe(idx, PDFDict_default)
      );
    }
  } else if (Filter) {
    throw new UnexpectedObjectTypeError([PDFName_default, PDFArray_default], Filter);
  }
  return stream2;
};

// src/core/embedders/PDFPageEmbedder.ts
var fullPageBoundingBox = (page) => {
  const mediaBox = page.MediaBox();
  const width = mediaBox.lookup(2, PDFNumber_default).asNumber() - mediaBox.lookup(0, PDFNumber_default).asNumber();
  const height = mediaBox.lookup(3, PDFNumber_default).asNumber() - mediaBox.lookup(1, PDFNumber_default).asNumber();
  return { left: 0, bottom: 0, right: width, top: height };
};
var boundingBoxAdjustedMatrix = (bb) => [1, 0, 0, 1, -bb.left, -bb.bottom];
var PDFPageEmbedder = class _PDFPageEmbedder {
  constructor(page, boundingBox, transformationMatrix) {
    __publicField(this, "width");
    __publicField(this, "height");
    __publicField(this, "boundingBox");
    __publicField(this, "transformationMatrix");
    __publicField(this, "page");
    this.page = page;
    const bb = boundingBox ?? fullPageBoundingBox(page);
    this.width = bb.right - bb.left;
    this.height = bb.top - bb.bottom;
    this.boundingBox = bb;
    this.transformationMatrix = transformationMatrix ?? boundingBoxAdjustedMatrix(bb);
  }
  static async for(page, boundingBox, transformationMatrix) {
    return new _PDFPageEmbedder(page, boundingBox, transformationMatrix);
  }
  async embedIntoContext(context, ref) {
    const { Contents, Resources } = this.page.normalizedEntries();
    if (!Contents) throw new MissingPageContentsEmbeddingError();
    const decodedContents = this.decodeContents(Contents);
    const { left, bottom, right, top } = this.boundingBox;
    const xObject = context.flateStream(decodedContents, {
      Type: "XObject",
      Subtype: "Form",
      FormType: 1,
      BBox: [left, bottom, right, top],
      Matrix: this.transformationMatrix,
      Resources
    });
    if (ref) {
      context.assign(ref, xObject);
      return ref;
    } else {
      return context.register(xObject);
    }
  }
  // `contents` is an array of streams which are merged to include them in the XObject.
  // This methods extracts each stream and joins them with a newline character.
  decodeContents(contents) {
    const newline = Uint8Array.of(CharCodes_default.Newline);
    const decodedContents = [];
    for (let idx = 0, len = contents.size(); idx < len; idx++) {
      const stream2 = contents.lookup(idx, PDFStream_default);
      let content;
      if (stream2 instanceof PDFRawStream_default) {
        content = decodePDFRawStream(stream2).decode();
      } else if (stream2 instanceof PDFContentStream_default) {
        content = stream2.getUnencodedContents();
      } else {
        throw new UnrecognizedStreamTypeError(stream2);
      }
      decodedContents.push(content, newline);
    }
    return mergeIntoTypedArray(...decodedContents);
  }
};
var PDFPageEmbedder_default = PDFPageEmbedder;

// src/core/interactive/ViewerPreferences.ts
var asEnum = (rawValue, enumType) => {
  if (rawValue === void 0) return void 0;
  return enumType[rawValue];
};
var NonFullScreenPageMode = /* @__PURE__ */ ((NonFullScreenPageMode2) => {
  NonFullScreenPageMode2["UseNone"] = "UseNone";
  NonFullScreenPageMode2["UseOutlines"] = "UseOutlines";
  NonFullScreenPageMode2["UseThumbs"] = "UseThumbs";
  NonFullScreenPageMode2["UseOC"] = "UseOC";
  return NonFullScreenPageMode2;
})(NonFullScreenPageMode || {});
var ReadingDirection = /* @__PURE__ */ ((ReadingDirection2) => {
  ReadingDirection2["L2R"] = "L2R";
  ReadingDirection2["R2L"] = "R2L";
  return ReadingDirection2;
})(ReadingDirection || {});
var PrintScaling = /* @__PURE__ */ ((PrintScaling2) => {
  PrintScaling2["None"] = "None";
  PrintScaling2["AppDefault"] = "AppDefault";
  return PrintScaling2;
})(PrintScaling || {});
var Duplex = /* @__PURE__ */ ((Duplex2) => {
  Duplex2["Simplex"] = "Simplex";
  Duplex2["DuplexFlipShortEdge"] = "DuplexFlipShortEdge";
  Duplex2["DuplexFlipLongEdge"] = "DuplexFlipLongEdge";
  return Duplex2;
})(Duplex || {});
var _ViewerPreferences = class _ViewerPreferences {
  /** @ignore */
  constructor(dict) {
    /** @ignore */
    __publicField(this, "dict");
    this.dict = dict;
  }
  lookupBool(key) {
    const returnObj = this.dict.lookup(PDFName_default.of(key));
    if (returnObj instanceof PDFBool_default) return returnObj;
    return void 0;
  }
  lookupName(key) {
    const returnObj = this.dict.lookup(PDFName_default.of(key));
    if (returnObj instanceof PDFName_default) return returnObj;
    return void 0;
  }
  /** @ignore */
  HideToolbar() {
    return this.lookupBool("HideToolbar");
  }
  /** @ignore */
  HideMenubar() {
    return this.lookupBool("HideMenubar");
  }
  /** @ignore */
  HideWindowUI() {
    return this.lookupBool("HideWindowUI");
  }
  /** @ignore */
  FitWindow() {
    return this.lookupBool("FitWindow");
  }
  /** @ignore */
  CenterWindow() {
    return this.lookupBool("CenterWindow");
  }
  /** @ignore */
  DisplayDocTitle() {
    return this.lookupBool("DisplayDocTitle");
  }
  /** @ignore */
  NonFullScreenPageMode() {
    return this.lookupName("NonFullScreenPageMode");
  }
  /** @ignore */
  Direction() {
    return this.lookupName("Direction");
  }
  /** @ignore */
  PrintScaling() {
    return this.lookupName("PrintScaling");
  }
  /** @ignore */
  Duplex() {
    return this.lookupName("Duplex");
  }
  /** @ignore */
  PickTrayByPDFSize() {
    return this.lookupBool("PickTrayByPDFSize");
  }
  /** @ignore */
  PrintPageRange() {
    const PrintPageRange = this.dict.lookup(PDFName_default.of("PrintPageRange"));
    if (PrintPageRange instanceof PDFArray_default) return PrintPageRange;
    return void 0;
  }
  /** @ignore */
  NumCopies() {
    const NumCopies = this.dict.lookup(PDFName_default.of("NumCopies"));
    if (NumCopies instanceof PDFNumber_default) return NumCopies;
    return void 0;
  }
  /**
   * Returns `true` if PDF readers should hide the toolbar menus when displaying
   * this document.
   * @returns Whether or not toolbars should be hidden.
   */
  getHideToolbar() {
    return this.HideToolbar()?.asBoolean() ?? false;
  }
  /**
   * Returns `true` if PDF readers should hide the menu bar when displaying this
   * document.
   * @returns Whether or not the menu bar should be hidden.
   */
  getHideMenubar() {
    return this.HideMenubar()?.asBoolean() ?? false;
  }
  /**
   * Returns `true` if PDF readers should hide the user interface elements in
   * the document's window (such as scroll bars and navigation controls),
   * leaving only the document's contents displayed.
   * @returns Whether or not user interface elements should be hidden.
   */
  getHideWindowUI() {
    return this.HideWindowUI()?.asBoolean() ?? false;
  }
  /**
   * Returns `true` if PDF readers should resize the document's window to fit
   * the size of the first displayed page.
   * @returns Whether or not the window should be resized to fit.
   */
  getFitWindow() {
    return this.FitWindow()?.asBoolean() ?? false;
  }
  /**
   * Returns `true` if PDF readers should position the document's window in the
   * center of the screen.
   * @returns Whether or not to center the document window.
   */
  getCenterWindow() {
    return this.CenterWindow()?.asBoolean() ?? false;
  }
  /**
   * Returns `true` if the window's title bar should display the document
   * `Title`, taken from the document metadata (see [[PDFDocument.getTitle]]).
   * Returns `false` if the title bar should instead display the filename of the
   * PDF file.
   * @returns Whether to display the document title.
   */
  getDisplayDocTitle() {
    return this.DisplayDocTitle()?.asBoolean() ?? false;
  }
  /**
   * Returns the page mode, which tells the PDF reader how to display the
   * document after exiting full-screen mode.
   * @returns The page mode after exiting full-screen mode.
   */
  getNonFullScreenPageMode() {
    const mode = this.NonFullScreenPageMode()?.decodeText();
    return asEnum(mode, NonFullScreenPageMode) ?? "UseNone" /* UseNone */;
  }
  /**
   * Returns the predominant reading order for text.
   * @returns The text reading order.
   */
  getReadingDirection() {
    const direction = this.Direction()?.decodeText();
    return asEnum(direction, ReadingDirection) ?? "L2R" /* L2R */;
  }
  /**
   * Returns the page scaling option that the PDF reader should select when the
   * print dialog is displayed.
   * @returns The page scaling option.
   */
  getPrintScaling() {
    const scaling = this.PrintScaling()?.decodeText();
    return asEnum(scaling, PrintScaling) ?? "AppDefault" /* AppDefault */;
  }
  /**
   * Returns the paper handling option that should be used when printing the
   * file from the print dialog.
   * @returns The paper handling option.
   */
  getDuplex() {
    const duplex = this.Duplex()?.decodeText();
    return asEnum(duplex, Duplex);
  }
  /**
   * Returns `true` if the PDF page size should be used to select the input
   * paper tray.
   * @returns Whether or not the PDF page size should be used to select the
   *          input paper tray.
   */
  getPickTrayByPDFSize() {
    return this.PickTrayByPDFSize()?.asBoolean();
  }
  /**
   * Returns an array of page number ranges, which are the values used to
   * initialize the print dialog box when the file is printed. Each range
   * specifies the first (`start`) and last (`end`) pages in a sub-range of
   * pages to be printed. The first page of the PDF file is denoted by 0.
   * For example:
   * ```js
   * const viewerPrefs = pdfDoc.catalog.getOrCreateViewerPreferences()
   * const includesPage3 = viewerPrefs
   *   .getPrintRanges()
   *   .some(pr => pr.start =< 2 && pr.end >= 2)
   * if (includesPage3) console.log('printRange includes page 3')
   * ```
   * @returns An array of objects, each with the properties `start` and `end`,
   *          denoting page indices. If not, specified an empty array is
   *          returned.
   */
  getPrintPageRange() {
    const rng = this.PrintPageRange();
    if (!rng) return [];
    const pageRanges = [];
    for (let i = 0; i < rng.size(); i += 2) {
      const start = rng.lookup(i, PDFNumber_default).asNumber();
      const end = rng.lookup(i + 1, PDFNumber_default).asNumber();
      pageRanges.push({ start, end });
    }
    return pageRanges;
  }
  /**
   * Returns the number of copies to be printed when the print dialog is opened
   * for this document.
   * @returns The default number of copies to be printed.
   */
  getNumCopies() {
    return this.NumCopies()?.asNumber() ?? 1;
  }
  /**
   * Choose whether the PDF reader's toolbars should be hidden while the
   * document is active.
   * @param hideToolbar `true` if the toolbar should be hidden.
   */
  setHideToolbar(hideToolbar) {
    const HideToolbar = this.dict.context.obj(hideToolbar);
    this.dict.set(PDFName_default.of("HideToolbar"), HideToolbar);
  }
  /**
   * Choose whether the PDF reader's menu bar should be hidden while the
   * document is active.
   * @param hideMenubar `true` if the menu bar should be hidden.
   */
  setHideMenubar(hideMenubar) {
    const HideMenubar = this.dict.context.obj(hideMenubar);
    this.dict.set(PDFName_default.of("HideMenubar"), HideMenubar);
  }
  /**
   * Choose whether the PDF reader should hide user interface elements in the
   * document's window (such as scroll bars and navigation controls), leaving
   * only the document's contents displayed.
   * @param hideWindowUI `true` if the user interface elements should be hidden.
   */
  setHideWindowUI(hideWindowUI) {
    const HideWindowUI = this.dict.context.obj(hideWindowUI);
    this.dict.set(PDFName_default.of("HideWindowUI"), HideWindowUI);
  }
  /**
   * Choose whether the PDF reader should resize the document's window to fit
   * the size of the first displayed page.
   * @param fitWindow `true` if the window should be resized.
   */
  setFitWindow(fitWindow) {
    const FitWindow = this.dict.context.obj(fitWindow);
    this.dict.set(PDFName_default.of("FitWindow"), FitWindow);
  }
  /**
   * Choose whether the PDF reader should position the document's window in the
   * center of the screen.
   * @param centerWindow `true` if the window should be centered.
   */
  setCenterWindow(centerWindow) {
    const CenterWindow = this.dict.context.obj(centerWindow);
    this.dict.set(PDFName_default.of("CenterWindow"), CenterWindow);
  }
  /**
   * Choose whether the window's title bar should display the document `Title`
   * taken from the document metadata (see [[PDFDocument.setTitle]]). If
   * `false`, the title bar should instead display the PDF filename.
   * @param displayTitle `true` if the document title should be displayed.
   */
  setDisplayDocTitle(displayTitle) {
    const DisplayDocTitle = this.dict.context.obj(displayTitle);
    this.dict.set(PDFName_default.of("DisplayDocTitle"), DisplayDocTitle);
  }
  /**
   * Choose how the PDF reader should display the document upon exiting
   * full-screen mode. This entry is meaningful only if the value of the
   * `PageMode` entry in the document's [[PDFCatalog]] is `FullScreen`.
   *
   * For example:
   * ```js
   * import { PDFDocument, NonFullScreenPageMode, PDFName } from 'pdf-lib'
   *
   * const pdfDoc = await PDFDocument.create()
   *
   * // Set the PageMode
   * pdfDoc.catalog.set(PDFName.of('PageMode'),PDFName.of('FullScreen'))
   *
   * // Set what happens when full-screen is closed
   * const viewerPrefs = pdfDoc.catalog.getOrCreateViewerPreferences()
   * viewerPrefs.setNonFullScreenPageMode(NonFullScreenPageMode.UseOutlines)
   * ```
   *
   * @param nonFullScreenPageMode How the document should be displayed upon
   *                              exiting full screen mode.
   */
  setNonFullScreenPageMode(nonFullScreenPageMode) {
    assertIsOneOf(
      nonFullScreenPageMode,
      "nonFullScreenPageMode",
      NonFullScreenPageMode
    );
    const mode = PDFName_default.of(nonFullScreenPageMode);
    this.dict.set(PDFName_default.of("NonFullScreenPageMode"), mode);
  }
  /**
   * Choose the predominant reading order for text.
   *
   * This entry has no direct effect on the document's contents or page
   * numbering, but may be used to determine the relative positioning of pages
   * when displayed side by side or printed n-up.
   *
   * For example:
   * ```js
   * import { PDFDocument, ReadingDirection } from 'pdf-lib'
   *
   * const pdfDoc = await PDFDocument.create()
   * const viewerPrefs = pdfDoc.catalog.getOrCreateViewerPreferences()
   * viewerPrefs.setReadingDirection(ReadingDirection.R2L)
   * ```
   *
   * @param readingDirection The reading order for text.
   */
  setReadingDirection(readingDirection) {
    assertIsOneOf(readingDirection, "readingDirection", ReadingDirection);
    const direction = PDFName_default.of(readingDirection);
    this.dict.set(PDFName_default.of("Direction"), direction);
  }
  /**
   * Choose the page scaling option that should be selected when a print dialog
   * is displayed for this document.
   *
   * For example:
   * ```js
   * import { PDFDocument, PrintScaling } from 'pdf-lib'
   *
   * const pdfDoc = await PDFDocument.create()
   * const viewerPrefs = pdfDoc.catalog.getOrCreateViewerPreferences()
   * viewerPrefs.setPrintScaling(PrintScaling.None)
   * ```
   *
   * @param printScaling The print scaling option.
   */
  setPrintScaling(printScaling) {
    assertIsOneOf(printScaling, "printScaling", PrintScaling);
    const scaling = PDFName_default.of(printScaling);
    this.dict.set(PDFName_default.of("PrintScaling"), scaling);
  }
  /**
   * Choose the paper handling option that should be selected by default in the
   * print dialog.
   *
   * For example:
   * ```js
   * import { PDFDocument, Duplex } from 'pdf-lib'
   *
   * const pdfDoc = await PDFDocument.create()
   * const viewerPrefs = pdfDoc.catalog.getOrCreateViewerPreferences()
   * viewerPrefs.setDuplex(Duplex.DuplexFlipShortEdge)
   * ```
   *
   * @param duplex The double or single sided printing option.
   */
  setDuplex(duplex) {
    assertIsOneOf(duplex, "duplex", Duplex);
    const dup = PDFName_default.of(duplex);
    this.dict.set(PDFName_default.of("Duplex"), dup);
  }
  /**
   * Choose whether the PDF document's page size should be used to select the
   * input paper tray when printing. This setting influences only the preset
   * values used to populate the print dialog presented by a PDF reader.
   *
   * If PickTrayByPDFSize is true, the check box in the print dialog associated
   * with input paper tray should be checked. This setting has no effect on
   * operating systems that do not provide the ability to pick the input tray
   * by size.
   *
   * @param pickTrayByPDFSize `true` if the document's page size should be used
   *                          to select the input paper tray.
   */
  setPickTrayByPDFSize(pickTrayByPDFSize) {
    const PickTrayByPDFSize = this.dict.context.obj(pickTrayByPDFSize);
    this.dict.set(PDFName_default.of("PickTrayByPDFSize"), PickTrayByPDFSize);
  }
  /**
   * Choose the page numbers used to initialize the print dialog box when the
   * file is printed. The first page of the PDF file is denoted by 0.
   *
   * For example:
   * ```js
   * import { PDFDocument } from 'pdf-lib'
   *
   * const pdfDoc = await PDFDocument.create()
   * const viewerPrefs = pdfDoc.catalog.getOrCreateViewerPreferences()
   *
   * // We can set the default print range to only the first page
   * viewerPrefs.setPrintPageRange({ start: 0, end: 0 })
   *
   * // Or we can supply noncontiguous ranges (e.g. pages 1, 3, and 5-7)
   * viewerPrefs.setPrintPageRange([
   *   { start: 0, end: 0 },
   *   { start: 2, end: 2 },
   *   { start: 4, end: 6 },
   * ])
   * ```
   *
   * @param printPageRange An object or array of objects, each with the
   *                       properties `start` and `end`, denoting a range of
   *                       page indices.
   */
  setPrintPageRange(printPageRange) {
    if (!Array.isArray(printPageRange)) printPageRange = [printPageRange];
    const flatRange = [];
    for (let idx = 0, len = printPageRange.length; idx < len; idx++) {
      flatRange.push(printPageRange[idx].start);
      flatRange.push(printPageRange[idx].end);
    }
    assertEachIs(flatRange, "printPageRange", ["number"]);
    const pageRanges = this.dict.context.obj(flatRange);
    this.dict.set(PDFName_default.of("PrintPageRange"), pageRanges);
  }
  /**
   * Choose the default number of copies to be printed when the print dialog is
   * opened for this file.
   * @param numCopies The default number of copies.
   */
  setNumCopies(numCopies) {
    assertRange(numCopies, "numCopies", 1, Number.MAX_VALUE);
    assertInteger(numCopies, "numCopies");
    const NumCopies = this.dict.context.obj(numCopies);
    this.dict.set(PDFName_default.of("NumCopies"), NumCopies);
  }
};
/** @ignore */
__publicField(_ViewerPreferences, "fromDict", (dict) => new _ViewerPreferences(dict));
/** @ignore */
__publicField(_ViewerPreferences, "create", (context) => {
  const dict = context.obj({});
  return new _ViewerPreferences(dict);
});
var ViewerPreferences = _ViewerPreferences;
var ViewerPreferences_default = ViewerPreferences;

// src/core/acroform/PDFAcroField.ts
var tfRegex = /\/([^\0\t\n\f\r\ ]+)[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]+Tf/;
var PDFAcroField = class _PDFAcroField {
  constructor(dict, ref) {
    __publicField(this, "dict");
    __publicField(this, "ref");
    this.dict = dict;
    this.ref = ref;
  }
  T() {
    return this.dict.lookupMaybe(PDFName_default.of("T"), PDFString_default, PDFHexString_default);
  }
  Ff() {
    const numberOrRef = this.getInheritableAttribute(PDFName_default.of("Ff"));
    return this.dict.context.lookupMaybe(numberOrRef, PDFNumber_default);
  }
  V() {
    const valueOrRef = this.getInheritableAttribute(PDFName_default.of("V"));
    return this.dict.context.lookup(valueOrRef);
  }
  Kids() {
    return this.dict.lookupMaybe(PDFName_default.of("Kids"), PDFArray_default);
  }
  // Parent(): PDFDict | undefined {
  //   return this.dict.lookupMaybe(PDFName.of('Parent'), PDFDict);
  // }
  DA() {
    const da = this.dict.lookup(PDFName_default.of("DA"));
    if (da instanceof PDFString_default || da instanceof PDFHexString_default) return da;
    return void 0;
  }
  setKids(kids) {
    this.dict.set(PDFName_default.of("Kids"), this.dict.context.obj(kids));
  }
  getParent() {
    const parentRef = this.dict.get(PDFName_default.of("Parent"));
    if (parentRef instanceof PDFRef_default) {
      const parent = this.dict.lookup(PDFName_default.of("Parent"), PDFDict_default);
      return new _PDFAcroField(parent, parentRef);
    }
    return void 0;
  }
  setParent(parent) {
    if (!parent) this.dict.delete(PDFName_default.of("Parent"));
    else this.dict.set(PDFName_default.of("Parent"), parent);
  }
  getFullyQualifiedName() {
    const parent = this.getParent();
    if (!parent) return this.getPartialName();
    return `${parent.getFullyQualifiedName()}.${this.getPartialName()}`;
  }
  getPartialName() {
    return this.T()?.decodeText();
  }
  setPartialName(partialName) {
    if (!partialName) this.dict.delete(PDFName_default.of("T"));
    else this.dict.set(PDFName_default.of("T"), PDFHexString_default.fromText(partialName));
  }
  setDefaultAppearance(appearance) {
    this.dict.set(PDFName_default.of("DA"), PDFString_default.of(appearance));
  }
  getDefaultAppearance() {
    const DA = this.DA();
    if (DA instanceof PDFHexString_default) {
      return DA.decodeText();
    }
    return DA?.asString();
  }
  setFontSize(fontSize) {
    const name = this.getFullyQualifiedName() ?? "";
    const da = this.getDefaultAppearance();
    if (!da) throw new MissingDAEntryError(name);
    const daMatch = findLastMatch(da, tfRegex);
    if (!daMatch.match) throw new MissingTfOperatorError(name);
    const daStart = da.slice(0, daMatch.pos - daMatch.match[0].length);
    const daEnd = daMatch.pos <= da.length ? da.slice(daMatch.pos) : "";
    const fontName = daMatch.match[1];
    const modifiedDa = `${daStart} /${fontName} ${fontSize} Tf ${daEnd}`;
    this.setDefaultAppearance(modifiedDa);
  }
  getFlags() {
    return this.Ff()?.asNumber() ?? 0;
  }
  setFlags(flags) {
    this.dict.set(PDFName_default.of("Ff"), PDFNumber_default.of(flags));
  }
  hasFlag(flag3) {
    const flags = this.getFlags();
    return (flags & flag3) !== 0;
  }
  setFlag(flag3) {
    const flags = this.getFlags();
    this.setFlags(flags | flag3);
  }
  clearFlag(flag3) {
    const flags = this.getFlags();
    this.setFlags(flags & ~flag3);
  }
  setFlagTo(flag3, enable) {
    if (enable) this.setFlag(flag3);
    else this.clearFlag(flag3);
  }
  getInheritableAttribute(name) {
    let attribute;
    this.ascend((node) => {
      if (!attribute) attribute = node.dict.get(name);
    });
    return attribute;
  }
  ascend(visitor) {
    visitor(this);
    const parent = this.getParent();
    if (parent) parent.ascend(visitor);
  }
};
var PDFAcroField_default = PDFAcroField;

// src/core/annotation/BorderStyle.ts
var _BorderStyle = class _BorderStyle {
  constructor(dict) {
    __publicField(this, "dict");
    this.dict = dict;
  }
  W() {
    const W = this.dict.lookup(PDFName_default.of("W"));
    if (W instanceof PDFNumber_default) return W;
    return void 0;
  }
  getWidth() {
    return this.W()?.asNumber() ?? 1;
  }
  setWidth(width) {
    const W = this.dict.context.obj(width);
    this.dict.set(PDFName_default.of("W"), W);
  }
};
__publicField(_BorderStyle, "fromDict", (dict) => new _BorderStyle(dict));
var BorderStyle = _BorderStyle;
var BorderStyle_default = BorderStyle;

// src/core/annotation/PDFAnnotation.ts
var _PDFAnnotation = class _PDFAnnotation {
  constructor(dict) {
    __publicField(this, "dict");
    this.dict = dict;
  }
  // This is technically required by the PDF spec
  Rect() {
    return this.dict.lookup(PDFName_default.of("Rect"), PDFArray_default);
  }
  AP() {
    return this.dict.lookupMaybe(PDFName_default.of("AP"), PDFDict_default);
  }
  F() {
    const numberOrRef = this.dict.lookup(PDFName_default.of("F"));
    return this.dict.context.lookupMaybe(numberOrRef, PDFNumber_default);
  }
  getRectangle() {
    const Rect = this.Rect();
    return Rect?.asRectangle() ?? { x: 0, y: 0, width: 0, height: 0 };
  }
  setRectangle(rect) {
    const { x, y, width, height } = rect;
    const Rect = this.dict.context.obj([x, y, x + width, y + height]);
    this.dict.set(PDFName_default.of("Rect"), Rect);
  }
  getAppearanceState() {
    const AS = this.dict.lookup(PDFName_default.of("AS"));
    if (AS instanceof PDFName_default) return AS;
    return void 0;
  }
  setAppearanceState(state) {
    this.dict.set(PDFName_default.of("AS"), state);
  }
  setAppearances(appearances) {
    this.dict.set(PDFName_default.of("AP"), appearances);
  }
  ensureAP() {
    let AP = this.AP();
    if (!AP) {
      AP = this.dict.context.obj({});
      this.dict.set(PDFName_default.of("AP"), AP);
    }
    return AP;
  }
  getNormalAppearance() {
    const AP = this.ensureAP();
    const N = AP.get(PDFName_default.of("N"));
    if (N instanceof PDFRef_default || N instanceof PDFDict_default) return N;
    throw new Error(`Unexpected N type: ${N?.constructor.name}`);
  }
  /** @param appearance A PDFDict or PDFStream (direct or ref) */
  setNormalAppearance(appearance) {
    const AP = this.ensureAP();
    AP.set(PDFName_default.of("N"), appearance);
  }
  /** @param appearance A PDFDict or PDFStream (direct or ref) */
  setRolloverAppearance(appearance) {
    const AP = this.ensureAP();
    AP.set(PDFName_default.of("R"), appearance);
  }
  /** @param appearance A PDFDict or PDFStream (direct or ref) */
  setDownAppearance(appearance) {
    const AP = this.ensureAP();
    AP.set(PDFName_default.of("D"), appearance);
  }
  removeRolloverAppearance() {
    const AP = this.AP();
    AP?.delete(PDFName_default.of("R"));
  }
  removeDownAppearance() {
    const AP = this.AP();
    AP?.delete(PDFName_default.of("D"));
  }
  getAppearances() {
    const AP = this.AP();
    if (!AP) return void 0;
    const N = AP.lookup(PDFName_default.of("N"), PDFDict_default, PDFStream_default);
    const R = AP.lookupMaybe(PDFName_default.of("R"), PDFDict_default, PDFStream_default);
    const D = AP.lookupMaybe(PDFName_default.of("D"), PDFDict_default, PDFStream_default);
    return { normal: N, rollover: R, down: D };
  }
  getFlags() {
    return this.F()?.asNumber() ?? 0;
  }
  setFlags(flags) {
    this.dict.set(PDFName_default.of("F"), PDFNumber_default.of(flags));
  }
  hasFlag(flag3) {
    const flags = this.getFlags();
    return (flags & flag3) !== 0;
  }
  setFlag(flag3) {
    const flags = this.getFlags();
    this.setFlags(flags | flag3);
  }
  clearFlag(flag3) {
    const flags = this.getFlags();
    this.setFlags(flags & ~flag3);
  }
  setFlagTo(flag3, enable) {
    if (enable) this.setFlag(flag3);
    else this.clearFlag(flag3);
  }
};
__publicField(_PDFAnnotation, "fromDict", (dict) => new _PDFAnnotation(dict));
var PDFAnnotation = _PDFAnnotation;
var PDFAnnotation_default = PDFAnnotation;

// src/core/annotation/AppearanceCharacteristics.ts
var _AppearanceCharacteristics = class _AppearanceCharacteristics {
  constructor(dict) {
    __publicField(this, "dict");
    this.dict = dict;
  }
  R() {
    const R = this.dict.lookup(PDFName_default.of("R"));
    if (R instanceof PDFNumber_default) return R;
    return void 0;
  }
  BC() {
    const BC = this.dict.lookup(PDFName_default.of("BC"));
    if (BC instanceof PDFArray_default) return BC;
    return void 0;
  }
  BG() {
    const BG = this.dict.lookup(PDFName_default.of("BG"));
    if (BG instanceof PDFArray_default) return BG;
    return void 0;
  }
  CA() {
    const CA = this.dict.lookup(PDFName_default.of("CA"));
    if (CA instanceof PDFHexString_default || CA instanceof PDFString_default) return CA;
    return void 0;
  }
  RC() {
    const RC = this.dict.lookup(PDFName_default.of("RC"));
    if (RC instanceof PDFHexString_default || RC instanceof PDFString_default) return RC;
    return void 0;
  }
  AC() {
    const AC = this.dict.lookup(PDFName_default.of("AC"));
    if (AC instanceof PDFHexString_default || AC instanceof PDFString_default) return AC;
    return void 0;
  }
  getRotation() {
    return this.R()?.asNumber();
  }
  getBorderColor() {
    const BC = this.BC();
    if (!BC) return void 0;
    const components = [];
    for (let idx = 0, len = BC?.size(); idx < len; idx++) {
      const component = BC.get(idx);
      if (component instanceof PDFNumber_default) components.push(component.asNumber());
    }
    return components;
  }
  getBackgroundColor() {
    const BG = this.BG();
    if (!BG) return void 0;
    const components = [];
    for (let idx = 0, len = BG?.size(); idx < len; idx++) {
      const component = BG.get(idx);
      if (component instanceof PDFNumber_default) components.push(component.asNumber());
    }
    return components;
  }
  getCaptions() {
    const CA = this.CA();
    const RC = this.RC();
    const AC = this.AC();
    return {
      normal: CA?.decodeText(),
      rollover: RC?.decodeText(),
      down: AC?.decodeText()
    };
  }
  setRotation(rotation) {
    const R = this.dict.context.obj(rotation);
    this.dict.set(PDFName_default.of("R"), R);
  }
  setBorderColor(color) {
    const BC = this.dict.context.obj(color);
    this.dict.set(PDFName_default.of("BC"), BC);
  }
  setBackgroundColor(color) {
    const BG = this.dict.context.obj(color);
    this.dict.set(PDFName_default.of("BG"), BG);
  }
  setCaptions(captions) {
    const CA = PDFHexString_default.fromText(captions.normal);
    this.dict.set(PDFName_default.of("CA"), CA);
    if (captions.rollover) {
      const RC = PDFHexString_default.fromText(captions.rollover);
      this.dict.set(PDFName_default.of("RC"), RC);
    } else {
      this.dict.delete(PDFName_default.of("RC"));
    }
    if (captions.down) {
      const AC = PDFHexString_default.fromText(captions.down);
      this.dict.set(PDFName_default.of("AC"), AC);
    } else {
      this.dict.delete(PDFName_default.of("AC"));
    }
  }
};
__publicField(_AppearanceCharacteristics, "fromDict", (dict) => new _AppearanceCharacteristics(dict));
var AppearanceCharacteristics = _AppearanceCharacteristics;
var AppearanceCharacteristics_default = AppearanceCharacteristics;

// src/core/annotation/PDFWidgetAnnotation.ts
var _PDFWidgetAnnotation = class _PDFWidgetAnnotation extends PDFAnnotation_default {
  MK() {
    const MK = this.dict.lookup(PDFName_default.of("MK"));
    if (MK instanceof PDFDict_default) return MK;
    return void 0;
  }
  BS() {
    const BS = this.dict.lookup(PDFName_default.of("BS"));
    if (BS instanceof PDFDict_default) return BS;
    return void 0;
  }
  DA() {
    const da = this.dict.lookup(PDFName_default.of("DA"));
    if (da instanceof PDFString_default || da instanceof PDFHexString_default) return da;
    return void 0;
  }
  P() {
    const P = this.dict.get(PDFName_default.of("P"));
    if (P instanceof PDFRef_default) return P;
    return void 0;
  }
  setP(page) {
    this.dict.set(PDFName_default.of("P"), page);
  }
  setDefaultAppearance(appearance) {
    this.dict.set(PDFName_default.of("DA"), PDFString_default.of(appearance));
  }
  getDefaultAppearance() {
    const DA = this.DA();
    if (DA instanceof PDFHexString_default) {
      return DA.decodeText();
    }
    return DA?.asString();
  }
  getAppearanceCharacteristics() {
    const MK = this.MK();
    if (MK) return AppearanceCharacteristics_default.fromDict(MK);
    return void 0;
  }
  getOrCreateAppearanceCharacteristics() {
    const MK = this.MK();
    if (MK) return AppearanceCharacteristics_default.fromDict(MK);
    const ac = AppearanceCharacteristics_default.fromDict(this.dict.context.obj({}));
    this.dict.set(PDFName_default.of("MK"), ac.dict);
    return ac;
  }
  getBorderStyle() {
    const BS = this.BS();
    if (BS) return BorderStyle_default.fromDict(BS);
    return void 0;
  }
  getOrCreateBorderStyle() {
    const BS = this.BS();
    if (BS) return BorderStyle_default.fromDict(BS);
    const bs = BorderStyle_default.fromDict(this.dict.context.obj({}));
    this.dict.set(PDFName_default.of("BS"), bs.dict);
    return bs;
  }
  getOnValue() {
    const normal = this.getAppearances()?.normal;
    if (normal instanceof PDFDict_default) {
      const keys = normal.keys();
      for (let idx = 0, len = keys.length; idx < len; idx++) {
        const key = keys[idx];
        if (key !== PDFName_default.of("Off")) return key;
      }
    }
    return void 0;
  }
};
__publicField(_PDFWidgetAnnotation, "fromDict", (dict) => new _PDFWidgetAnnotation(dict));
__publicField(_PDFWidgetAnnotation, "create", (context, parent) => {
  const dict = context.obj({
    Type: "Annot",
    Subtype: "Widget",
    Rect: [0, 0, 0, 0],
    Parent: parent
  });
  return new _PDFWidgetAnnotation(dict);
});
var PDFWidgetAnnotation = _PDFWidgetAnnotation;
var PDFWidgetAnnotation_default = PDFWidgetAnnotation;

// src/core/acroform/PDFAcroTerminal.ts
var _PDFAcroTerminal = class _PDFAcroTerminal extends PDFAcroField_default {
  FT() {
    const nameOrRef = this.getInheritableAttribute(PDFName_default.of("FT"));
    return this.dict.context.lookup(nameOrRef, PDFName_default);
  }
  getWidgets() {
    const kidDicts = this.Kids();
    if (!kidDicts) return [PDFWidgetAnnotation_default.fromDict(this.dict)];
    const widgets = new Array(kidDicts.size());
    for (let idx = 0, len = kidDicts.size(); idx < len; idx++) {
      const dict = kidDicts.lookup(idx, PDFDict_default);
      widgets[idx] = PDFWidgetAnnotation_default.fromDict(dict);
    }
    return widgets;
  }
  addWidget(ref) {
    const { Kids } = this.normalizedEntries();
    Kids.push(ref);
  }
  removeWidget(idx) {
    const kidDicts = this.Kids();
    if (!kidDicts) {
      if (idx !== 0) throw new IndexOutOfBoundsError(idx, 0, 0);
      this.setKids([]);
    } else {
      if (idx < 0 || idx > kidDicts.size()) {
        throw new IndexOutOfBoundsError(idx, 0, kidDicts.size());
      }
      kidDicts.remove(idx);
    }
  }
  normalizedEntries() {
    let Kids = this.Kids();
    if (!Kids) {
      Kids = this.dict.context.obj([this.ref]);
      this.dict.set(PDFName_default.of("Kids"), Kids);
    }
    return { Kids };
  }
};
__publicField(_PDFAcroTerminal, "fromDict", (dict, ref) => new _PDFAcroTerminal(dict, ref));
var PDFAcroTerminal = _PDFAcroTerminal;
var PDFAcroTerminal_default = PDFAcroTerminal;

// src/core/acroform/PDFAcroButton.ts
var PDFAcroButton = class extends PDFAcroTerminal_default {
  Opt() {
    return this.dict.lookupMaybe(
      PDFName_default.of("Opt"),
      PDFString_default,
      PDFHexString_default,
      PDFArray_default
    );
  }
  setOpt(opt) {
    this.dict.set(PDFName_default.of("Opt"), this.dict.context.obj(opt));
  }
  getExportValues() {
    const opt = this.Opt();
    if (!opt) return void 0;
    if (opt instanceof PDFString_default || opt instanceof PDFHexString_default) {
      return [opt];
    }
    const values2 = [];
    for (let idx = 0, len = opt.size(); idx < len; idx++) {
      const value = opt.lookup(idx);
      if (value instanceof PDFString_default || value instanceof PDFHexString_default) {
        values2.push(value);
      }
    }
    return values2;
  }
  removeExportValue(idx) {
    const opt = this.Opt();
    if (!opt) return;
    if (opt instanceof PDFString_default || opt instanceof PDFHexString_default) {
      if (idx !== 0) throw new IndexOutOfBoundsError(idx, 0, 0);
      this.setOpt([]);
    } else {
      if (idx < 0 || idx > opt.size()) {
        throw new IndexOutOfBoundsError(idx, 0, opt.size());
      }
      opt.remove(idx);
    }
  }
  // Enforce use use of /Opt even if it isn't strictly necessary
  normalizeExportValues() {
    const exportValues = this.getExportValues() ?? [];
    const Opt = [];
    const widgets = this.getWidgets();
    for (let idx = 0, len = widgets.length; idx < len; idx++) {
      const widget = widgets[idx];
      const exportVal = exportValues[idx] ?? PDFHexString_default.fromText(widget.getOnValue()?.decodeText() ?? "");
      Opt.push(exportVal);
    }
    this.setOpt(Opt);
  }
  /**
   * Reuses existing opt if one exists with the same value (assuming
   * `useExistingIdx` is `true`). Returns index of existing (or new) opt.
   */
  addOpt(opt, useExistingOptIdx) {
    this.normalizeExportValues();
    const optText = opt.decodeText();
    let existingIdx;
    if (useExistingOptIdx) {
      const exportValues = this.getExportValues() ?? [];
      for (let idx = 0, len = exportValues.length; idx < len; idx++) {
        const exportVal = exportValues[idx];
        if (exportVal.decodeText() === optText) existingIdx = idx;
      }
    }
    const Opt = this.Opt();
    Opt.push(opt);
    return existingIdx ?? Opt.size() - 1;
  }
  addWidgetWithOpt(widget, opt, useExistingOptIdx) {
    const optIdx = this.addOpt(opt, useExistingOptIdx);
    const apStateValue = PDFName_default.of(String(optIdx));
    this.addWidget(widget);
    return apStateValue;
  }
};
var PDFAcroButton_default = PDFAcroButton;

// src/core/acroform/PDFAcroCheckBox.ts
var _PDFAcroCheckBox = class _PDFAcroCheckBox extends PDFAcroButton_default {
  setValue(value) {
    const onValue = this.getOnValue() ?? PDFName_default.of("Yes");
    if (value !== onValue && value !== PDFName_default.of("Off")) {
      throw new InvalidAcroFieldValueError();
    }
    this.dict.set(PDFName_default.of("V"), value);
    const widgets = this.getWidgets();
    for (let idx = 0, len = widgets.length; idx < len; idx++) {
      const widget = widgets[idx];
      const state = widget.getOnValue() === value ? value : PDFName_default.of("Off");
      widget.setAppearanceState(state);
    }
  }
  getValue() {
    const v = this.V();
    if (v instanceof PDFName_default) return v;
    return PDFName_default.of("Off");
  }
  getOnValue() {
    const [widget] = this.getWidgets();
    return widget?.getOnValue();
  }
};
__publicField(_PDFAcroCheckBox, "fromDict", (dict, ref) => new _PDFAcroCheckBox(dict, ref));
__publicField(_PDFAcroCheckBox, "create", (context) => {
  const dict = context.obj({
    FT: "Btn",
    Kids: []
  });
  const ref = context.register(dict);
  return new _PDFAcroCheckBox(dict, ref);
});
var PDFAcroCheckBox = _PDFAcroCheckBox;
var PDFAcroCheckBox_default = PDFAcroCheckBox;

// src/core/acroform/flags.ts
var flag = (bitIndex) => 1 << bitIndex;
var AcroFieldFlags = ((AcroFieldFlags2) => {
  AcroFieldFlags2[AcroFieldFlags2["ReadOnly"] = flag(0)] = "ReadOnly";
  AcroFieldFlags2[AcroFieldFlags2["Required"] = flag(1)] = "Required";
  AcroFieldFlags2[AcroFieldFlags2["NoExport"] = flag(2)] = "NoExport";
  return AcroFieldFlags2;
})(AcroFieldFlags || {});
var AcroButtonFlags = ((AcroButtonFlags2) => {
  AcroButtonFlags2[AcroButtonFlags2["NoToggleToOff"] = flag(14)] = "NoToggleToOff";
  AcroButtonFlags2[AcroButtonFlags2["Radio"] = flag(15)] = "Radio";
  AcroButtonFlags2[AcroButtonFlags2["PushButton"] = flag(16)] = "PushButton";
  AcroButtonFlags2[AcroButtonFlags2["RadiosInUnison"] = flag(25)] = "RadiosInUnison";
  return AcroButtonFlags2;
})(AcroButtonFlags || {});
var AcroTextFlags = ((AcroTextFlags2) => {
  AcroTextFlags2[AcroTextFlags2["Multiline"] = flag(12)] = "Multiline";
  AcroTextFlags2[AcroTextFlags2["Password"] = flag(13)] = "Password";
  AcroTextFlags2[AcroTextFlags2["FileSelect"] = flag(20)] = "FileSelect";
  AcroTextFlags2[AcroTextFlags2["DoNotSpellCheck"] = flag(22)] = "DoNotSpellCheck";
  AcroTextFlags2[AcroTextFlags2["DoNotScroll"] = flag(23)] = "DoNotScroll";
  AcroTextFlags2[AcroTextFlags2["Comb"] = flag(24)] = "Comb";
  AcroTextFlags2[AcroTextFlags2["RichText"] = flag(25)] = "RichText";
  return AcroTextFlags2;
})(AcroTextFlags || {});
var AcroChoiceFlags = ((AcroChoiceFlags2) => {
  AcroChoiceFlags2[AcroChoiceFlags2["Combo"] = flag(17)] = "Combo";
  AcroChoiceFlags2[AcroChoiceFlags2["Edit"] = flag(18)] = "Edit";
  AcroChoiceFlags2[AcroChoiceFlags2["Sort"] = flag(19)] = "Sort";
  AcroChoiceFlags2[AcroChoiceFlags2["MultiSelect"] = flag(21)] = "MultiSelect";
  AcroChoiceFlags2[AcroChoiceFlags2["DoNotSpellCheck"] = flag(22)] = "DoNotSpellCheck";
  AcroChoiceFlags2[AcroChoiceFlags2["CommitOnSelChange"] = flag(26)] = "CommitOnSelChange";
  return AcroChoiceFlags2;
})(AcroChoiceFlags || {});

// src/core/acroform/PDFAcroChoice.ts
var PDFAcroChoice = class extends PDFAcroTerminal_default {
  setValues(values2) {
    if (this.hasFlag(AcroChoiceFlags.Combo) && !this.hasFlag(AcroChoiceFlags.Edit) && !this.valuesAreValid(values2)) {
      throw new InvalidAcroFieldValueError();
    }
    if (values2.length === 0) {
      this.dict.delete(PDFName_default.of("V"));
    }
    if (values2.length === 1) {
      this.dict.set(PDFName_default.of("V"), values2[0]);
    }
    if (values2.length > 1) {
      if (!this.hasFlag(AcroChoiceFlags.MultiSelect)) {
        throw new MultiSelectValueError();
      }
      this.dict.set(PDFName_default.of("V"), this.dict.context.obj(values2));
    }
    this.updateSelectedIndices(values2);
  }
  valuesAreValid(values2) {
    const options = this.getOptions();
    for (let idx = 0, len = values2.length; idx < len; idx++) {
      const val = values2[idx].decodeText();
      if (!options.find((o) => val === (o.display || o.value).decodeText())) {
        return false;
      }
    }
    return true;
  }
  updateSelectedIndices(values2) {
    if (values2.length > 1) {
      const indices = new Array(values2.length);
      const options = this.getOptions();
      for (let idx = 0, len = values2.length; idx < len; idx++) {
        const val = values2[idx].decodeText();
        indices[idx] = options.findIndex(
          (o) => val === (o.display || o.value).decodeText()
        );
      }
      this.dict.set(PDFName_default.of("I"), this.dict.context.obj(indices.sort()));
    } else {
      this.dict.delete(PDFName_default.of("I"));
    }
  }
  getValues() {
    const v = this.V();
    if (v instanceof PDFString_default || v instanceof PDFHexString_default) return [v];
    if (v instanceof PDFArray_default) {
      const values2 = [];
      for (let idx = 0, len = v.size(); idx < len; idx++) {
        const value = v.lookup(idx);
        if (value instanceof PDFString_default || value instanceof PDFHexString_default) {
          values2.push(value);
        }
      }
      return values2;
    }
    return [];
  }
  Opt() {
    return this.dict.lookupMaybe(
      PDFName_default.of("Opt"),
      PDFString_default,
      PDFHexString_default,
      PDFArray_default
    );
  }
  setOptions(options) {
    const newOpt = new Array(options.length);
    for (let idx = 0, len = options.length; idx < len; idx++) {
      const { value, display } = options[idx];
      newOpt[idx] = this.dict.context.obj([value, display || value]);
    }
    this.dict.set(PDFName_default.of("Opt"), this.dict.context.obj(newOpt));
  }
  getOptions() {
    const Opt = this.Opt();
    if (Opt instanceof PDFString_default || Opt instanceof PDFHexString_default) {
      return [{ value: Opt, display: Opt }];
    }
    if (Opt instanceof PDFArray_default) {
      const res = [];
      for (let idx = 0, len = Opt.size(); idx < len; idx++) {
        const item = Opt.lookup(idx);
        if (item instanceof PDFString_default || item instanceof PDFHexString_default) {
          res.push({ value: item, display: item });
        }
        if (item instanceof PDFArray_default) {
          if (item.size() > 0) {
            const first = item.lookup(0, PDFString_default, PDFHexString_default);
            const second = item.lookupMaybe(1, PDFString_default, PDFHexString_default);
            res.push({ value: first, display: second || first });
          }
        }
      }
      return res;
    }
    return [];
  }
};
var PDFAcroChoice_default = PDFAcroChoice;

// src/core/acroform/PDFAcroComboBox.ts
var _PDFAcroComboBox = class _PDFAcroComboBox extends PDFAcroChoice_default {
};
__publicField(_PDFAcroComboBox, "fromDict", (dict, ref) => new _PDFAcroComboBox(dict, ref));
__publicField(_PDFAcroComboBox, "create", (context) => {
  const dict = context.obj({
    FT: "Ch",
    Ff: AcroChoiceFlags.Combo,
    Kids: []
  });
  const ref = context.register(dict);
  return new _PDFAcroComboBox(dict, ref);
});
var PDFAcroComboBox = _PDFAcroComboBox;
var PDFAcroComboBox_default = PDFAcroComboBox;

// src/core/acroform/PDFAcroNonTerminal.ts
var _PDFAcroNonTerminal = class _PDFAcroNonTerminal extends PDFAcroField_default {
  addField(field) {
    const { Kids } = this.normalizedEntries();
    Kids?.push(field);
  }
  normalizedEntries() {
    let Kids = this.Kids();
    if (!Kids) {
      Kids = this.dict.context.obj([]);
      this.dict.set(PDFName_default.of("Kids"), Kids);
    }
    return { Kids };
  }
};
__publicField(_PDFAcroNonTerminal, "fromDict", (dict, ref) => new _PDFAcroNonTerminal(dict, ref));
__publicField(_PDFAcroNonTerminal, "create", (context) => {
  const dict = context.obj({});
  const ref = context.register(dict);
  return new _PDFAcroNonTerminal(dict, ref);
});
var PDFAcroNonTerminal = _PDFAcroNonTerminal;
var PDFAcroNonTerminal_default = PDFAcroNonTerminal;

// src/core/acroform/PDFAcroSignature.ts
var _PDFAcroSignature = class _PDFAcroSignature extends PDFAcroTerminal_default {
};
__publicField(_PDFAcroSignature, "fromDict", (dict, ref) => new _PDFAcroSignature(dict, ref));
var PDFAcroSignature = _PDFAcroSignature;
var PDFAcroSignature_default = PDFAcroSignature;

// src/core/acroform/PDFAcroText.ts
var _PDFAcroText = class _PDFAcroText extends PDFAcroTerminal_default {
  MaxLen() {
    const maxLen = this.dict.lookup(PDFName_default.of("MaxLen"));
    if (maxLen instanceof PDFNumber_default) return maxLen;
    return void 0;
  }
  Q() {
    const q = this.dict.lookup(PDFName_default.of("Q"));
    if (q instanceof PDFNumber_default) return q;
    return void 0;
  }
  setMaxLength(maxLength) {
    this.dict.set(PDFName_default.of("MaxLen"), PDFNumber_default.of(maxLength));
  }
  removeMaxLength() {
    this.dict.delete(PDFName_default.of("MaxLen"));
  }
  getMaxLength() {
    return this.MaxLen()?.asNumber();
  }
  setQuadding(quadding) {
    this.dict.set(PDFName_default.of("Q"), PDFNumber_default.of(quadding));
  }
  getQuadding() {
    return this.Q()?.asNumber();
  }
  setValue(value) {
    this.dict.set(PDFName_default.of("V"), value);
  }
  removeValue() {
    this.dict.delete(PDFName_default.of("V"));
  }
  getValue() {
    const v = this.V();
    if (v instanceof PDFString_default || v instanceof PDFHexString_default) return v;
    return void 0;
  }
};
__publicField(_PDFAcroText, "fromDict", (dict, ref) => new _PDFAcroText(dict, ref));
__publicField(_PDFAcroText, "create", (context) => {
  const dict = context.obj({
    FT: "Tx",
    Kids: []
  });
  const ref = context.register(dict);
  return new _PDFAcroText(dict, ref);
});
var PDFAcroText = _PDFAcroText;
var PDFAcroText_default = PDFAcroText;

// src/core/acroform/PDFAcroPushButton.ts
var _PDFAcroPushButton = class _PDFAcroPushButton extends PDFAcroButton_default {
};
__publicField(_PDFAcroPushButton, "fromDict", (dict, ref) => new _PDFAcroPushButton(dict, ref));
__publicField(_PDFAcroPushButton, "create", (context) => {
  const dict = context.obj({
    FT: "Btn",
    Ff: AcroButtonFlags.PushButton,
    Kids: []
  });
  const ref = context.register(dict);
  return new _PDFAcroPushButton(dict, ref);
});
var PDFAcroPushButton = _PDFAcroPushButton;
var PDFAcroPushButton_default = PDFAcroPushButton;

// src/core/acroform/PDFAcroRadioButton.ts
var _PDFAcroRadioButton = class _PDFAcroRadioButton extends PDFAcroButton_default {
  setValue(value) {
    const onValues = this.getOnValues();
    if (!onValues.includes(value) && value !== PDFName_default.of("Off")) {
      throw new InvalidAcroFieldValueError();
    }
    this.dict.set(PDFName_default.of("V"), value);
    const widgets = this.getWidgets();
    for (let idx = 0, len = widgets.length; idx < len; idx++) {
      const widget = widgets[idx];
      const state = widget.getOnValue() === value ? value : PDFName_default.of("Off");
      widget.setAppearanceState(state);
    }
  }
  getValue() {
    const v = this.V();
    if (v instanceof PDFName_default) return v;
    return PDFName_default.of("Off");
  }
  getOnValues() {
    const widgets = this.getWidgets();
    const onValues = [];
    for (let idx = 0, len = widgets.length; idx < len; idx++) {
      const onValue = widgets[idx].getOnValue();
      if (onValue) onValues.push(onValue);
    }
    return onValues;
  }
};
__publicField(_PDFAcroRadioButton, "fromDict", (dict, ref) => new _PDFAcroRadioButton(dict, ref));
__publicField(_PDFAcroRadioButton, "create", (context) => {
  const dict = context.obj({
    FT: "Btn",
    Ff: AcroButtonFlags.Radio,
    Kids: []
  });
  const ref = context.register(dict);
  return new _PDFAcroRadioButton(dict, ref);
});
var PDFAcroRadioButton = _PDFAcroRadioButton;
var PDFAcroRadioButton_default = PDFAcroRadioButton;

// src/core/acroform/PDFAcroListBox.ts
var _PDFAcroListBox = class _PDFAcroListBox extends PDFAcroChoice_default {
};
__publicField(_PDFAcroListBox, "fromDict", (dict, ref) => new _PDFAcroListBox(dict, ref));
__publicField(_PDFAcroListBox, "create", (context) => {
  const dict = context.obj({
    FT: "Ch",
    Kids: []
  });
  const ref = context.register(dict);
  return new _PDFAcroListBox(dict, ref);
});
var PDFAcroListBox = _PDFAcroListBox;
var PDFAcroListBox_default = PDFAcroListBox;

// src/core/acroform/utils.ts
var createPDFAcroFields = (kidDicts) => {
  if (!kidDicts) return [];
  const kids = [];
  for (let idx = 0, len = kidDicts.size(); idx < len; idx++) {
    const ref = kidDicts.get(idx);
    const dict = kidDicts.lookup(idx);
    if (ref instanceof PDFRef_default && dict instanceof PDFDict_default) {
      kids.push([createPDFAcroField(dict, ref), ref]);
    }
  }
  return kids;
};
var createPDFAcroField = (dict, ref) => {
  const isNonTerminal = isNonTerminalAcroField(dict);
  if (isNonTerminal) return PDFAcroNonTerminal_default.fromDict(dict, ref);
  return createPDFAcroTerminal(dict, ref);
};
var isNonTerminalAcroField = (dict) => {
  const kids = dict.lookup(PDFName_default.of("Kids"));
  if (kids instanceof PDFArray_default) {
    for (let idx = 0, len = kids.size(); idx < len; idx++) {
      const kid = kids.lookup(idx);
      const kidIsField = kid instanceof PDFDict_default && kid.has(PDFName_default.of("T"));
      if (kidIsField) return true;
    }
  }
  return false;
};
var createPDFAcroTerminal = (dict, ref) => {
  const ftNameOrRef = getInheritableAttribute(dict, PDFName_default.of("FT"));
  const type = dict.context.lookup(ftNameOrRef, PDFName_default);
  if (type === PDFName_default.of("Btn")) return createPDFAcroButton(dict, ref);
  if (type === PDFName_default.of("Ch")) return createPDFAcroChoice(dict, ref);
  if (type === PDFName_default.of("Tx")) return PDFAcroText_default.fromDict(dict, ref);
  if (type === PDFName_default.of("Sig")) return PDFAcroSignature_default.fromDict(dict, ref);
  return PDFAcroTerminal_default.fromDict(dict, ref);
};
var createPDFAcroButton = (dict, ref) => {
  const ffNumberOrRef = getInheritableAttribute(dict, PDFName_default.of("Ff"));
  const ffNumber = dict.context.lookupMaybe(ffNumberOrRef, PDFNumber_default);
  const flags = ffNumber?.asNumber() ?? 0;
  if (flagIsSet(flags, AcroButtonFlags.PushButton)) {
    return PDFAcroPushButton_default.fromDict(dict, ref);
  } else if (flagIsSet(flags, AcroButtonFlags.Radio)) {
    return PDFAcroRadioButton_default.fromDict(dict, ref);
  } else {
    return PDFAcroCheckBox_default.fromDict(dict, ref);
  }
};
var createPDFAcroChoice = (dict, ref) => {
  const ffNumberOrRef = getInheritableAttribute(dict, PDFName_default.of("Ff"));
  const ffNumber = dict.context.lookupMaybe(ffNumberOrRef, PDFNumber_default);
  const flags = ffNumber?.asNumber() ?? 0;
  if (flagIsSet(flags, AcroChoiceFlags.Combo)) {
    return PDFAcroComboBox_default.fromDict(dict, ref);
  } else {
    return PDFAcroListBox_default.fromDict(dict, ref);
  }
};
var flagIsSet = (flags, flag3) => (flags & flag3) !== 0;
var getInheritableAttribute = (startNode, name) => {
  let attribute;
  ascend(startNode, (node) => {
    if (!attribute) attribute = node.get(name);
  });
  return attribute;
};
var ascend = (startNode, visitor) => {
  visitor(startNode);
  const Parent = startNode.lookupMaybe(PDFName_default.of("Parent"), PDFDict_default);
  if (Parent) ascend(Parent, visitor);
};

// src/core/acroform/PDFAcroForm.ts
var _PDFAcroForm = class _PDFAcroForm {
  constructor(dict) {
    __publicField(this, "dict");
    this.dict = dict;
  }
  Fields() {
    const fields = this.dict.lookup(PDFName_default.of("Fields"));
    if (fields instanceof PDFArray_default) return fields;
    return void 0;
  }
  getFields() {
    const { Fields } = this.normalizedEntries();
    const fields = new Array(Fields.size());
    for (let idx = 0, len = Fields.size(); idx < len; idx++) {
      const ref = Fields.get(idx);
      const dict = Fields.lookup(idx, PDFDict_default);
      fields[idx] = [createPDFAcroField(dict, ref), ref];
    }
    return fields;
  }
  getAllFields() {
    const allFields = [];
    const pushFields = (fields) => {
      if (!fields) return;
      for (let idx = 0, len = fields.length; idx < len; idx++) {
        const field = fields[idx];
        allFields.push(field);
        const [fieldModel] = field;
        if (fieldModel instanceof PDFAcroNonTerminal_default) {
          pushFields(createPDFAcroFields(fieldModel.Kids()));
        }
      }
    };
    pushFields(this.getFields());
    return allFields;
  }
  addField(field) {
    const { Fields } = this.normalizedEntries();
    Fields?.push(field);
  }
  removeField(field) {
    const parent = field.getParent();
    const fields = parent === void 0 ? this.normalizedEntries().Fields : parent.Kids();
    const index = fields?.indexOf(field.ref);
    if (fields === void 0 || index === void 0) {
      throw new Error(
        `Tried to remove inexistent field ${field.getFullyQualifiedName()}`
      );
    }
    fields.remove(index);
    if (parent !== void 0 && fields.size() === 0) {
      this.removeField(parent);
    }
  }
  normalizedEntries() {
    let Fields = this.Fields();
    if (!Fields) {
      Fields = this.dict.context.obj([]);
      this.dict.set(PDFName_default.of("Fields"), Fields);
    }
    return { Fields };
  }
};
__publicField(_PDFAcroForm, "fromDict", (dict) => new _PDFAcroForm(dict));
__publicField(_PDFAcroForm, "create", (context) => {
  const dict = context.obj({ Fields: [] });
  return new _PDFAcroForm(dict);
});
var PDFAcroForm = _PDFAcroForm;
var PDFAcroForm_default = PDFAcroForm;

// src/core/structures/PDFCatalog.ts
var _PDFCatalog = class _PDFCatalog extends PDFDict_default {
  Pages() {
    return this.lookup(PDFName_default.of("Pages"), PDFDict_default);
  }
  AcroForm() {
    return this.lookupMaybe(PDFName_default.of("AcroForm"), PDFDict_default);
  }
  getAcroForm() {
    const dict = this.AcroForm();
    if (!dict) return void 0;
    return PDFAcroForm_default.fromDict(dict);
  }
  getOrCreateAcroForm() {
    let acroForm = this.getAcroForm();
    if (!acroForm) {
      acroForm = PDFAcroForm_default.create(this.context);
      const acroFormRef = this.context.register(acroForm.dict);
      this.set(PDFName_default.of("AcroForm"), acroFormRef);
    }
    return acroForm;
  }
  ViewerPreferences() {
    return this.lookupMaybe(PDFName_default.of("ViewerPreferences"), PDFDict_default);
  }
  getViewerPreferences() {
    const dict = this.ViewerPreferences();
    if (!dict) return void 0;
    return ViewerPreferences_default.fromDict(dict);
  }
  getOrCreateViewerPreferences() {
    let viewerPrefs = this.getViewerPreferences();
    if (!viewerPrefs) {
      viewerPrefs = ViewerPreferences_default.create(this.context);
      const viewerPrefsRef = this.context.register(viewerPrefs.dict);
      this.set(PDFName_default.of("ViewerPreferences"), viewerPrefsRef);
    }
    return viewerPrefs;
  }
  /**
   * Inserts the given ref as a leaf node of this catalog's page tree at the
   * specified index (zero-based). Also increments the `Count` of each node in
   * the page tree hierarchy to accomodate the new page.
   *
   * Returns the ref of the PDFPageTree node into which `leafRef` was inserted.
   */
  insertLeafNode(leafRef, index) {
    const pagesRef = this.get(PDFName_default.of("Pages"));
    const maybeParentRef = this.Pages().insertLeafNode(leafRef, index);
    return maybeParentRef || pagesRef;
  }
  removeLeafNode(index) {
    this.Pages().removeLeafNode(index);
  }
};
__publicField(_PDFCatalog, "withContextAndPages", (context, pages) => {
  const dict = /* @__PURE__ */ new Map();
  dict.set(PDFName_default.of("Type"), PDFName_default.of("Catalog"));
  dict.set(PDFName_default.of("Pages"), pages);
  return new _PDFCatalog(dict, context);
});
__publicField(_PDFCatalog, "fromMapWithContext", (map, context) => new _PDFCatalog(map, context));
var PDFCatalog = _PDFCatalog;
var PDFCatalog_default = PDFCatalog;

// src/core/structures/PDFPageTree.ts
var _PDFPageTree = class _PDFPageTree extends PDFDict_default {
  Parent() {
    return this.lookup(PDFName_default.of("Parent"));
  }
  Kids() {
    return this.lookup(PDFName_default.of("Kids"), PDFArray_default);
  }
  Count() {
    return this.lookup(PDFName_default.of("Count"), PDFNumber_default);
  }
  pushTreeNode(treeRef) {
    const Kids = this.Kids();
    Kids.push(treeRef);
  }
  pushLeafNode(leafRef) {
    const Kids = this.Kids();
    this.insertLeafKid(Kids.size(), leafRef);
  }
  /**
   * Inserts the given ref as a leaf node of this page tree at the specified
   * index (zero-based). Also increments the `Count` of each page tree in the
   * hierarchy to accomodate the new page.
   *
   * Returns the ref of the PDFPageTree node into which `leafRef` was inserted,
   * or `undefined` if it was inserted into the root node (the PDFPageTree upon
   * which the method was first called).
   */
  insertLeafNode(leafRef, targetIndex) {
    const Kids = this.Kids();
    const Count = this.Count().asNumber();
    if (targetIndex > Count) {
      throw new InvalidTargetIndexError(targetIndex, Count);
    }
    let leafsRemainingUntilTarget = targetIndex;
    for (let idx = 0, len = Kids.size(); idx < len; idx++) {
      if (leafsRemainingUntilTarget === 0) {
        this.insertLeafKid(idx, leafRef);
        return void 0;
      }
      const kidRef = Kids.get(idx);
      const kid = this.context.lookup(kidRef);
      if (kid instanceof _PDFPageTree) {
        if (kid.Count().asNumber() > leafsRemainingUntilTarget) {
          return kid.insertLeafNode(leafRef, leafsRemainingUntilTarget) || kidRef;
        } else {
          leafsRemainingUntilTarget -= kid.Count().asNumber();
        }
      }
      if (kid instanceof PDFPageLeaf_default) {
        leafsRemainingUntilTarget -= 1;
      }
    }
    if (leafsRemainingUntilTarget === 0) {
      this.insertLeafKid(Kids.size(), leafRef);
      return void 0;
    }
    throw new CorruptPageTreeError(targetIndex, "insertLeafNode");
  }
  /**
   * Removes the leaf node at the specified index (zero-based) from this page
   * tree. Also decrements the `Count` of each page tree in the hierarchy to
   * account for the removed page.
   *
   * If `prune` is true, then intermediate tree nodes will be removed from the
   * tree if they contain 0 children after the leaf node is removed.
   */
  removeLeafNode(targetIndex, prune = true) {
    const Kids = this.Kids();
    const Count = this.Count().asNumber();
    if (targetIndex >= Count) {
      throw new InvalidTargetIndexError(targetIndex, Count);
    }
    let leafsRemainingUntilTarget = targetIndex;
    for (let idx = 0, len = Kids.size(); idx < len; idx++) {
      const kidRef = Kids.get(idx);
      const kid = this.context.lookup(kidRef);
      if (kid instanceof _PDFPageTree) {
        if (kid.Count().asNumber() > leafsRemainingUntilTarget) {
          kid.removeLeafNode(leafsRemainingUntilTarget, prune);
          if (prune && kid.Kids().size() === 0) Kids.remove(idx);
          return;
        } else {
          leafsRemainingUntilTarget -= kid.Count().asNumber();
        }
      }
      if (kid instanceof PDFPageLeaf_default) {
        if (leafsRemainingUntilTarget === 0) {
          this.removeKid(idx);
          return;
        } else {
          leafsRemainingUntilTarget -= 1;
        }
      }
    }
    throw new CorruptPageTreeError(targetIndex, "removeLeafNode");
  }
  ascend(visitor) {
    visitor(this);
    const Parent = this.Parent();
    if (Parent) Parent.ascend(visitor);
  }
  /** Performs a Post-Order traversal of this page tree */
  traverse(visitor) {
    const Kids = this.Kids();
    for (let idx = 0, len = Kids.size(); idx < len; idx++) {
      const kidRef = Kids.get(idx);
      const kid = this.context.lookup(kidRef);
      if (kid instanceof _PDFPageTree) kid.traverse(visitor);
      visitor(kid, kidRef);
    }
  }
  insertLeafKid(kidIdx, leafRef) {
    const Kids = this.Kids();
    this.ascend((node) => {
      const newCount = node.Count().asNumber() + 1;
      node.set(PDFName_default.of("Count"), PDFNumber_default.of(newCount));
    });
    Kids.insert(kidIdx, leafRef);
  }
  removeKid(kidIdx) {
    const Kids = this.Kids();
    const kid = Kids.lookup(kidIdx);
    if (kid instanceof PDFPageLeaf_default) {
      this.ascend((node) => {
        const newCount = node.Count().asNumber() - 1;
        node.set(PDFName_default.of("Count"), PDFNumber_default.of(newCount));
      });
    }
    Kids.remove(kidIdx);
  }
};
__publicField(_PDFPageTree, "withContext", (context, parent) => {
  const dict = /* @__PURE__ */ new Map();
  dict.set(PDFName_default.of("Type"), PDFName_default.of("Pages"));
  dict.set(PDFName_default.of("Kids"), context.obj([]));
  dict.set(PDFName_default.of("Count"), context.obj(0));
  if (parent) dict.set(PDFName_default.of("Parent"), parent);
  return new _PDFPageTree(dict, context);
});
__publicField(_PDFPageTree, "fromMapWithContext", (map, context) => new _PDFPageTree(map, context));
var PDFPageTree = _PDFPageTree;
var PDFPageTree_default = PDFPageTree;

// src/core/syntax/Numeric.ts
var IsDigit = new Uint8Array(256);
IsDigit[CharCodes_default.Zero] = 1;
IsDigit[CharCodes_default.One] = 1;
IsDigit[CharCodes_default.Two] = 1;
IsDigit[CharCodes_default.Three] = 1;
IsDigit[CharCodes_default.Four] = 1;
IsDigit[CharCodes_default.Five] = 1;
IsDigit[CharCodes_default.Six] = 1;
IsDigit[CharCodes_default.Seven] = 1;
IsDigit[CharCodes_default.Eight] = 1;
IsDigit[CharCodes_default.Nine] = 1;
var IsNumericPrefix = new Uint8Array(256);
IsNumericPrefix[CharCodes_default.Period] = 1;
IsNumericPrefix[CharCodes_default.Plus] = 1;
IsNumericPrefix[CharCodes_default.Minus] = 1;
var IsNumeric = new Uint8Array(256);
for (let idx = 0, len = 256; idx < len; idx++) {
  IsNumeric[idx] = IsDigit[idx] || IsNumericPrefix[idx] ? 1 : 0;
}

// src/core/parser/BaseParser.ts
var { Newline, CarriageReturn } = CharCodes_default;
var BaseParser = class {
  constructor(bytes, capNumbers = false) {
    __publicField(this, "bytes");
    __publicField(this, "capNumbers");
    this.bytes = bytes;
    this.capNumbers = capNumbers;
  }
  parseRawInt() {
    let value = "";
    while (!this.bytes.done()) {
      const byte = this.bytes.peek();
      if (!IsDigit[byte]) break;
      value += charFromCode(this.bytes.next());
    }
    const numberValue = Number(value);
    if (!value || !isFinite(numberValue)) {
      throw new NumberParsingError(this.bytes.position(), value);
    }
    return numberValue;
  }
  // TODO: Maybe handle exponential format?
  // TODO: Compare performance of string concatenation to charFromCode(...bytes)
  parseRawNumber() {
    let value = "";
    while (!this.bytes.done()) {
      const byte = this.bytes.peek();
      if (!IsNumeric[byte]) break;
      value += charFromCode(this.bytes.next());
      if (byte === CharCodes_default.Period) break;
    }
    while (!this.bytes.done()) {
      const byte = this.bytes.peek();
      if (!IsDigit[byte]) break;
      value += charFromCode(this.bytes.next());
    }
    const numberValue = Number(value);
    if (!value || !isFinite(numberValue)) {
      throw new NumberParsingError(this.bytes.position(), value);
    }
    if (numberValue > Number.MAX_SAFE_INTEGER) {
      if (this.capNumbers) {
        const msg = `Parsed number that is too large for some PDF readers: ${value}, using Number.MAX_SAFE_INTEGER instead.`;
        console.warn(msg);
        return Number.MAX_SAFE_INTEGER;
      } else {
        const msg = `Parsed number that is too large for some PDF readers: ${value}, not capping.`;
        console.warn(msg);
      }
    }
    return numberValue;
  }
  skipWhitespace() {
    while (!this.bytes.done() && IsWhitespace[this.bytes.peek()]) {
      this.bytes.next();
    }
  }
  skipLine() {
    while (!this.bytes.done()) {
      const byte = this.bytes.peek();
      if (byte === Newline || byte === CarriageReturn) return;
      this.bytes.next();
    }
  }
  skipComment() {
    if (this.bytes.peek() !== CharCodes_default.Percent) return false;
    while (!this.bytes.done()) {
      const byte = this.bytes.peek();
      if (byte === Newline || byte === CarriageReturn) return true;
      this.bytes.next();
    }
    return true;
  }
  skipWhitespaceAndComments() {
    this.skipWhitespace();
    while (this.skipComment()) this.skipWhitespace();
  }
  matchKeyword(keyword) {
    const initialOffset = this.bytes.offset();
    for (let idx = 0, len = keyword.length; idx < len; idx++) {
      if (this.bytes.done() || this.bytes.next() !== keyword[idx]) {
        this.bytes.moveTo(initialOffset);
        return false;
      }
    }
    return true;
  }
};
var BaseParser_default = BaseParser;

// src/core/parser/ByteStream.ts
var _ByteStream = class _ByteStream {
  constructor(bytes) {
    __publicField(this, "bytes");
    __publicField(this, "length");
    __publicField(this, "idx", 0);
    __publicField(this, "line", 0);
    __publicField(this, "column", 0);
    this.bytes = bytes;
    this.length = this.bytes.length;
  }
  moveTo(offset) {
    this.idx = offset;
  }
  next() {
    const byte = this.bytes[this.idx++];
    if (byte === CharCodes_default.Newline) {
      this.line += 1;
      this.column = 0;
    } else {
      this.column += 1;
    }
    return byte;
  }
  assertNext(expected) {
    if (this.peek() !== expected) {
      throw new NextByteAssertionError(this.position(), expected, this.peek());
    }
    return this.next();
  }
  peek() {
    return this.bytes[this.idx];
  }
  peekAhead(steps) {
    return this.bytes[this.idx + steps];
  }
  peekAt(offset) {
    return this.bytes[offset];
  }
  done() {
    return this.idx >= this.length;
  }
  offset() {
    return this.idx;
  }
  slice(start, end) {
    return this.bytes.slice(start, end);
  }
  position() {
    return { line: this.line, column: this.column, offset: this.idx };
  }
};
__publicField(_ByteStream, "of", (bytes) => new _ByteStream(bytes));
__publicField(_ByteStream, "fromPDFRawStream", (rawStream) => _ByteStream.of(decodePDFRawStream(rawStream).decode()));
var ByteStream = _ByteStream;
var ByteStream_default = ByteStream;

// src/core/syntax/Keywords.ts
var { Space, CarriageReturn: CarriageReturn2, Newline: Newline2 } = CharCodes_default;
var stream = [
  CharCodes_default.s,
  CharCodes_default.t,
  CharCodes_default.r,
  CharCodes_default.e,
  CharCodes_default.a,
  CharCodes_default.m
];
var endstream = [
  CharCodes_default.e,
  CharCodes_default.n,
  CharCodes_default.d,
  CharCodes_default.s,
  CharCodes_default.t,
  CharCodes_default.r,
  CharCodes_default.e,
  CharCodes_default.a,
  CharCodes_default.m
];
var Keywords = {
  header: [
    CharCodes_default.Percent,
    CharCodes_default.P,
    CharCodes_default.D,
    CharCodes_default.F,
    CharCodes_default.Dash
  ],
  eof: [
    CharCodes_default.Percent,
    CharCodes_default.Percent,
    CharCodes_default.E,
    CharCodes_default.O,
    CharCodes_default.F
  ],
  obj: [CharCodes_default.o, CharCodes_default.b, CharCodes_default.j],
  endobj: [
    CharCodes_default.e,
    CharCodes_default.n,
    CharCodes_default.d,
    CharCodes_default.o,
    CharCodes_default.b,
    CharCodes_default.j
  ],
  xref: [CharCodes_default.x, CharCodes_default.r, CharCodes_default.e, CharCodes_default.f],
  trailer: [
    CharCodes_default.t,
    CharCodes_default.r,
    CharCodes_default.a,
    CharCodes_default.i,
    CharCodes_default.l,
    CharCodes_default.e,
    CharCodes_default.r
  ],
  startxref: [
    CharCodes_default.s,
    CharCodes_default.t,
    CharCodes_default.a,
    CharCodes_default.r,
    CharCodes_default.t,
    CharCodes_default.x,
    CharCodes_default.r,
    CharCodes_default.e,
    CharCodes_default.f
  ],
  true: [CharCodes_default.t, CharCodes_default.r, CharCodes_default.u, CharCodes_default.e],
  false: [CharCodes_default.f, CharCodes_default.a, CharCodes_default.l, CharCodes_default.s, CharCodes_default.e],
  null: [CharCodes_default.n, CharCodes_default.u, CharCodes_default.l, CharCodes_default.l],
  stream,
  streamEOF1: [...stream, Space, CarriageReturn2, Newline2],
  streamEOF2: [...stream, CarriageReturn2, Newline2],
  streamEOF3: [...stream, CarriageReturn2],
  streamEOF4: [...stream, Newline2],
  endstream,
  EOF1endstream: [CarriageReturn2, Newline2, ...endstream],
  EOF2endstream: [CarriageReturn2, ...endstream],
  EOF3endstream: [Newline2, ...endstream]
};

// src/core/parser/PDFObjectParser.ts
var _PDFObjectParser = class _PDFObjectParser extends BaseParser_default {
  constructor(byteStream, context, capNumbers = false) {
    super(byteStream, capNumbers);
    __publicField(this, "context");
    this.context = context;
  }
  // TODO: Is it possible to reduce duplicate parsing for ref lookaheads?
  parseObject() {
    this.skipWhitespaceAndComments();
    if (this.matchKeyword(Keywords.true)) return PDFBool_default.True;
    if (this.matchKeyword(Keywords.false)) return PDFBool_default.False;
    if (this.matchKeyword(Keywords.null)) return PDFNull_default;
    const byte = this.bytes.peek();
    if (byte === CharCodes_default.LessThan && this.bytes.peekAhead(1) === CharCodes_default.LessThan) {
      return this.parseDictOrStream();
    }
    if (byte === CharCodes_default.LessThan) return this.parseHexString();
    if (byte === CharCodes_default.LeftParen) return this.parseString();
    if (byte === CharCodes_default.ForwardSlash) return this.parseName();
    if (byte === CharCodes_default.LeftSquareBracket) return this.parseArray();
    if (IsNumeric[byte]) return this.parseNumberOrRef();
    throw new PDFObjectParsingError(this.bytes.position(), byte);
  }
  parseNumberOrRef() {
    const firstNum = this.parseRawNumber();
    this.skipWhitespaceAndComments();
    const lookaheadStart = this.bytes.offset();
    if (IsDigit[this.bytes.peek()]) {
      const secondNum = this.parseRawNumber();
      this.skipWhitespaceAndComments();
      if (this.bytes.peek() === CharCodes_default.R) {
        this.bytes.assertNext(CharCodes_default.R);
        return PDFRef_default.of(firstNum, secondNum);
      }
    }
    this.bytes.moveTo(lookaheadStart);
    return PDFNumber_default.of(firstNum);
  }
  // TODO: Maybe update PDFHexString.of() logic to remove whitespace and validate input?
  parseHexString() {
    let value = "";
    this.bytes.assertNext(CharCodes_default.LessThan);
    while (!this.bytes.done() && this.bytes.peek() !== CharCodes_default.GreaterThan) {
      value += charFromCode(this.bytes.next());
    }
    this.bytes.assertNext(CharCodes_default.GreaterThan);
    return PDFHexString_default.of(value);
  }
  parseString() {
    let nestingLvl = 0;
    let isEscaped = false;
    let value = "";
    while (!this.bytes.done()) {
      const byte = this.bytes.next();
      value += charFromCode(byte);
      if (!isEscaped) {
        if (byte === CharCodes_default.LeftParen) nestingLvl += 1;
        if (byte === CharCodes_default.RightParen) nestingLvl -= 1;
      }
      if (byte === CharCodes_default.BackSlash) {
        isEscaped = !isEscaped;
      } else if (isEscaped) {
        isEscaped = false;
      }
      if (nestingLvl === 0) {
        return PDFString_default.of(value.substring(1, value.length - 1));
      }
    }
    throw new UnbalancedParenthesisError(this.bytes.position());
  }
  // TODO: Compare performance of string concatenation to charFromCode(...bytes)
  // TODO: Maybe preallocate small Uint8Array if can use charFromCode?
  parseName() {
    this.bytes.assertNext(CharCodes_default.ForwardSlash);
    let name = "";
    while (!this.bytes.done()) {
      const byte = this.bytes.peek();
      if (IsWhitespace[byte] || IsDelimiter[byte]) break;
      name += charFromCode(byte);
      this.bytes.next();
    }
    return PDFName_default.of(name);
  }
  parseArray() {
    this.bytes.assertNext(CharCodes_default.LeftSquareBracket);
    this.skipWhitespaceAndComments();
    const pdfArray = PDFArray_default.withContext(this.context);
    while (this.bytes.peek() !== CharCodes_default.RightSquareBracket) {
      const element = this.parseObject();
      pdfArray.push(element);
      this.skipWhitespaceAndComments();
    }
    this.bytes.assertNext(CharCodes_default.RightSquareBracket);
    return pdfArray;
  }
  parseDict() {
    this.bytes.assertNext(CharCodes_default.LessThan);
    this.bytes.assertNext(CharCodes_default.LessThan);
    this.skipWhitespaceAndComments();
    const dict = /* @__PURE__ */ new Map();
    while (!this.bytes.done() && this.bytes.peek() !== CharCodes_default.GreaterThan && this.bytes.peekAhead(1) !== CharCodes_default.GreaterThan) {
      const key = this.parseName();
      const value = this.parseObject();
      dict.set(key, value);
      this.skipWhitespaceAndComments();
    }
    this.skipWhitespaceAndComments();
    this.bytes.assertNext(CharCodes_default.GreaterThan);
    this.bytes.assertNext(CharCodes_default.GreaterThan);
    const Type = dict.get(PDFName_default.of("Type"));
    if (Type === PDFName_default.of("Catalog")) {
      return PDFCatalog_default.fromMapWithContext(dict, this.context);
    } else if (Type === PDFName_default.of("Pages")) {
      return PDFPageTree_default.fromMapWithContext(dict, this.context);
    } else if (Type === PDFName_default.of("Page")) {
      return PDFPageLeaf_default.fromMapWithContext(dict, this.context);
    } else {
      return PDFDict_default.fromMapWithContext(dict, this.context);
    }
  }
  parseDictOrStream() {
    const startPos = this.bytes.position();
    const dict = this.parseDict();
    this.skipWhitespaceAndComments();
    if (!this.matchKeyword(Keywords.streamEOF1) && !this.matchKeyword(Keywords.streamEOF2) && !this.matchKeyword(Keywords.streamEOF3) && !this.matchKeyword(Keywords.streamEOF4) && !this.matchKeyword(Keywords.stream)) {
      return dict;
    }
    const start = this.bytes.offset();
    let end;
    const Length = dict.get(PDFName_default.of("Length"));
    if (Length instanceof PDFNumber_default) {
      end = start + Length.asNumber();
      this.bytes.moveTo(end);
      this.skipWhitespaceAndComments();
      if (!this.matchKeyword(Keywords.endstream)) {
        this.bytes.moveTo(start);
        end = this.findEndOfStreamFallback(startPos);
      }
    } else {
      end = this.findEndOfStreamFallback(startPos);
    }
    const contents = this.bytes.slice(start, end);
    return PDFRawStream_default.of(dict, contents);
  }
  findEndOfStreamFallback(startPos) {
    let nestingLvl = 1;
    let end = this.bytes.offset();
    while (!this.bytes.done()) {
      end = this.bytes.offset();
      if (this.matchKeyword(Keywords.stream)) {
        nestingLvl += 1;
      } else if (this.matchKeyword(Keywords.EOF1endstream) || this.matchKeyword(Keywords.EOF2endstream) || this.matchKeyword(Keywords.EOF3endstream) || this.matchKeyword(Keywords.endstream)) {
        nestingLvl -= 1;
      } else {
        this.bytes.next();
      }
      if (nestingLvl === 0) break;
    }
    if (nestingLvl !== 0) throw new PDFStreamParsingError(startPos);
    return end;
  }
};
__publicField(_PDFObjectParser, "forBytes", (bytes, context, capNumbers) => new _PDFObjectParser(ByteStream_default.of(bytes), context, capNumbers));
__publicField(_PDFObjectParser, "forByteStream", (byteStream, context, capNumbers = false) => new _PDFObjectParser(byteStream, context, capNumbers));
var PDFObjectParser = _PDFObjectParser;
var PDFObjectParser_default = PDFObjectParser;

// src/core/parser/PDFObjectStreamParser.ts
var _PDFObjectStreamParser = class _PDFObjectStreamParser extends PDFObjectParser_default {
  constructor(rawStream, shouldWaitForTick) {
    super(ByteStream_default.fromPDFRawStream(rawStream), rawStream.dict.context);
    __publicField(this, "alreadyParsed");
    __publicField(this, "shouldWaitForTick");
    __publicField(this, "firstOffset");
    __publicField(this, "objectCount");
    const { dict } = rawStream;
    this.alreadyParsed = false;
    this.shouldWaitForTick = shouldWaitForTick || (() => false);
    this.firstOffset = dict.lookup(PDFName_default.of("First"), PDFNumber_default).asNumber();
    this.objectCount = dict.lookup(PDFName_default.of("N"), PDFNumber_default).asNumber();
  }
  async parseIntoContext() {
    if (this.alreadyParsed) {
      throw new ReparseError("PDFObjectStreamParser", "parseIntoContext");
    }
    this.alreadyParsed = true;
    const offsetsAndObjectNumbers = this.parseOffsetsAndObjectNumbers();
    for (let idx = 0, len = offsetsAndObjectNumbers.length; idx < len; idx++) {
      const { objectNumber, offset } = offsetsAndObjectNumbers[idx];
      this.bytes.moveTo(this.firstOffset + offset);
      const object = this.parseObject();
      const ref = PDFRef_default.of(objectNumber, 0);
      this.context.assign(ref, object);
      if (this.shouldWaitForTick()) await waitForTick();
    }
  }
  parseOffsetsAndObjectNumbers() {
    const offsetsAndObjectNumbers = [];
    for (let idx = 0, len = this.objectCount; idx < len; idx++) {
      this.skipWhitespaceAndComments();
      const objectNumber = this.parseRawInt();
      this.skipWhitespaceAndComments();
      const offset = this.parseRawInt();
      offsetsAndObjectNumbers.push({ objectNumber, offset });
    }
    return offsetsAndObjectNumbers;
  }
};
__publicField(_PDFObjectStreamParser, "forStream", (rawStream, shouldWaitForTick) => new _PDFObjectStreamParser(rawStream, shouldWaitForTick));
var PDFObjectStreamParser = _PDFObjectStreamParser;
var PDFObjectStreamParser_default = PDFObjectStreamParser;

// src/core/parser/PDFXRefStreamParser.ts
var _PDFXRefStreamParser = class _PDFXRefStreamParser {
  constructor(rawStream) {
    __publicField(this, "alreadyParsed");
    __publicField(this, "dict");
    __publicField(this, "context");
    __publicField(this, "bytes");
    __publicField(this, "subsections");
    __publicField(this, "byteWidths");
    this.alreadyParsed = false;
    this.dict = rawStream.dict;
    this.bytes = ByteStream_default.fromPDFRawStream(rawStream);
    this.context = this.dict.context;
    const Size = this.dict.lookup(PDFName_default.of("Size"), PDFNumber_default);
    const Index = this.dict.lookup(PDFName_default.of("Index"));
    if (Index instanceof PDFArray_default) {
      this.subsections = [];
      for (let idx = 0, len = Index.size(); idx < len; idx += 2) {
        const firstObjectNumber = Index.lookup(idx + 0, PDFNumber_default).asNumber();
        const length = Index.lookup(idx + 1, PDFNumber_default).asNumber();
        this.subsections.push({ firstObjectNumber, length });
      }
    } else {
      this.subsections = [{ firstObjectNumber: 0, length: Size.asNumber() }];
    }
    const W = this.dict.lookup(PDFName_default.of("W"), PDFArray_default);
    this.byteWidths = [-1, -1, -1];
    for (let idx = 0, len = W.size(); idx < len; idx++) {
      this.byteWidths[idx] = W.lookup(idx, PDFNumber_default).asNumber();
    }
  }
  parseIntoContext() {
    if (this.alreadyParsed) {
      throw new ReparseError("PDFXRefStreamParser", "parseIntoContext");
    }
    this.alreadyParsed = true;
    this.context.trailerInfo = {
      Root: this.dict.get(PDFName_default.of("Root")),
      Encrypt: this.dict.get(PDFName_default.of("Encrypt")),
      Info: this.dict.get(PDFName_default.of("Info")),
      ID: this.dict.get(PDFName_default.of("ID"))
    };
    const entries = this.parseEntries();
    return entries;
  }
  parseEntries() {
    const entries = [];
    const [typeFieldWidth, offsetFieldWidth, genFieldWidth] = this.byteWidths;
    for (let subsectionIdx = 0, subsectionLen = this.subsections.length; subsectionIdx < subsectionLen; subsectionIdx++) {
      const { firstObjectNumber, length } = this.subsections[subsectionIdx];
      for (let objIdx = 0; objIdx < length; objIdx++) {
        let type = 0;
        for (let idx = 0, len = typeFieldWidth; idx < len; idx++) {
          type = type << 8 | this.bytes.next();
        }
        let offset = 0;
        for (let idx = 0, len = offsetFieldWidth; idx < len; idx++) {
          offset = offset << 8 | this.bytes.next();
        }
        let generationNumber = 0;
        for (let idx = 0, len = genFieldWidth; idx < len; idx++) {
          generationNumber = generationNumber << 8 | this.bytes.next();
        }
        if (typeFieldWidth === 0) type = 1;
        const objectNumber = firstObjectNumber + objIdx;
        const entry = {
          ref: PDFRef_default.of(objectNumber, generationNumber),
          offset,
          deleted: type === 0,
          inObjectStream: type === 2
        };
        entries.push(entry);
      }
    }
    return entries;
  }
};
__publicField(_PDFXRefStreamParser, "forStream", (rawStream) => new _PDFXRefStreamParser(rawStream));
var PDFXRefStreamParser = _PDFXRefStreamParser;
var PDFXRefStreamParser_default = PDFXRefStreamParser;

// src/core/parser/PDFParser.ts
var _PDFParser = class _PDFParser extends PDFObjectParser_default {
  constructor(pdfBytes, objectsPerTick = Infinity, throwOnInvalidObject = false, capNumbers = false) {
    super(ByteStream_default.of(pdfBytes), PDFContext_default.create(), capNumbers);
    __publicField(this, "objectsPerTick");
    __publicField(this, "throwOnInvalidObject");
    __publicField(this, "alreadyParsed", false);
    __publicField(this, "parsedObjects", 0);
    __publicField(this, "shouldWaitForTick", () => {
      this.parsedObjects += 1;
      return this.parsedObjects % this.objectsPerTick === 0;
    });
    this.objectsPerTick = objectsPerTick;
    this.throwOnInvalidObject = throwOnInvalidObject;
  }
  async parseDocument() {
    if (this.alreadyParsed) {
      throw new ReparseError("PDFParser", "parseDocument");
    }
    this.alreadyParsed = true;
    this.context.header = this.parseHeader();
    let prevOffset;
    while (!this.bytes.done()) {
      await this.parseDocumentSection();
      const offset = this.bytes.offset();
      if (offset === prevOffset) {
        throw new StalledParserError(this.bytes.position());
      }
      prevOffset = offset;
    }
    this.maybeRecoverRoot();
    if (this.context.lookup(PDFRef_default.of(0))) {
      console.warn("Removing parsed object: 0 0 R");
      this.context.delete(PDFRef_default.of(0));
    }
    return this.context;
  }
  maybeRecoverRoot() {
    const isValidCatalog = (obj) => obj instanceof PDFDict_default && obj.lookup(PDFName_default.of("Type")) === PDFName_default.of("Catalog");
    const catalog = this.context.lookup(this.context.trailerInfo.Root);
    if (!isValidCatalog(catalog)) {
      const indirectObjects = this.context.enumerateIndirectObjects();
      for (let idx = 0, len = indirectObjects.length; idx < len; idx++) {
        const [ref, object] = indirectObjects[idx];
        if (isValidCatalog(object)) {
          this.context.trailerInfo.Root = ref;
        }
      }
    }
  }
  parseHeader() {
    while (!this.bytes.done()) {
      if (this.matchKeyword(Keywords.header)) {
        const major = this.parseRawInt();
        this.bytes.assertNext(CharCodes_default.Period);
        const minor = this.parseRawInt();
        const header = PDFHeader_default.forVersion(major, minor);
        this.skipBinaryHeaderComment();
        return header;
      }
      this.bytes.next();
    }
    throw new MissingPDFHeaderError(this.bytes.position());
  }
  parseIndirectObjectHeader() {
    this.skipWhitespaceAndComments();
    const objectNumber = this.parseRawInt();
    this.skipWhitespaceAndComments();
    const generationNumber = this.parseRawInt();
    this.skipWhitespaceAndComments();
    if (!this.matchKeyword(Keywords.obj)) {
      throw new MissingKeywordError(this.bytes.position(), Keywords.obj);
    }
    return PDFRef_default.of(objectNumber, generationNumber);
  }
  matchIndirectObjectHeader() {
    const initialOffset = this.bytes.offset();
    try {
      this.parseIndirectObjectHeader();
      return true;
    } catch (e) {
      this.bytes.moveTo(initialOffset);
      return false;
    }
  }
  async parseIndirectObject() {
    const ref = this.parseIndirectObjectHeader();
    this.skipWhitespaceAndComments();
    const object = this.parseObject();
    this.skipWhitespaceAndComments();
    this.matchKeyword(Keywords.endobj);
    if (object instanceof PDFRawStream_default && object.dict.lookup(PDFName_default.of("Type")) === PDFName_default.of("ObjStm")) {
      await PDFObjectStreamParser_default.forStream(
        object,
        this.shouldWaitForTick
      ).parseIntoContext();
    } else if (object instanceof PDFRawStream_default && object.dict.lookup(PDFName_default.of("Type")) === PDFName_default.of("XRef")) {
      PDFXRefStreamParser_default.forStream(object).parseIntoContext();
    } else {
      this.context.assign(ref, object);
    }
    return ref;
  }
  // TODO: Improve and clean this up
  tryToParseInvalidIndirectObject() {
    const startPos = this.bytes.position();
    const msg = `Trying to parse invalid object: ${JSON.stringify(startPos)})`;
    if (this.throwOnInvalidObject) throw new Error(msg);
    console.warn(msg);
    const ref = this.parseIndirectObjectHeader();
    console.warn(`Invalid object ref: ${ref}`);
    this.skipWhitespaceAndComments();
    const start = this.bytes.offset();
    let failed = true;
    while (!this.bytes.done()) {
      if (this.matchKeyword(Keywords.endobj)) {
        failed = false;
      }
      if (!failed) break;
      this.bytes.next();
    }
    if (failed) throw new PDFInvalidObjectParsingError(startPos);
    const end = this.bytes.offset() - Keywords.endobj.length;
    const object = PDFInvalidObject_default.of(this.bytes.slice(start, end));
    this.context.assign(ref, object);
    return ref;
  }
  async parseIndirectObjects() {
    this.skipWhitespaceAndComments();
    while (!this.bytes.done() && IsDigit[this.bytes.peek()]) {
      const initialOffset = this.bytes.offset();
      try {
        await this.parseIndirectObject();
      } catch (e) {
        this.bytes.moveTo(initialOffset);
        this.tryToParseInvalidIndirectObject();
      }
      this.skipWhitespaceAndComments();
      this.skipJibberish();
      if (this.shouldWaitForTick()) await waitForTick();
    }
  }
  maybeParseCrossRefSection() {
    this.skipWhitespaceAndComments();
    if (!this.matchKeyword(Keywords.xref)) return;
    this.skipWhitespaceAndComments();
    let objectNumber = -1;
    const xref = PDFCrossRefSection_default.createEmpty();
    while (!this.bytes.done() && IsDigit[this.bytes.peek()]) {
      const firstInt = this.parseRawInt();
      this.skipWhitespaceAndComments();
      const secondInt = this.parseRawInt();
      this.skipWhitespaceAndComments();
      const byte = this.bytes.peek();
      if (byte === CharCodes_default.n || byte === CharCodes_default.f) {
        const ref = PDFRef_default.of(objectNumber, secondInt);
        if (this.bytes.next() === CharCodes_default.n) {
          xref.addEntry(ref, firstInt);
        } else {
          xref.addDeletedEntry(ref, firstInt);
        }
        objectNumber += 1;
      } else {
        objectNumber = firstInt;
      }
      this.skipWhitespaceAndComments();
    }
    return xref;
  }
  maybeParseTrailerDict() {
    this.skipWhitespaceAndComments();
    if (!this.matchKeyword(Keywords.trailer)) return;
    this.skipWhitespaceAndComments();
    const dict = this.parseDict();
    const { context } = this;
    context.trailerInfo = {
      Root: dict.get(PDFName_default.of("Root")) || context.trailerInfo.Root,
      Encrypt: dict.get(PDFName_default.of("Encrypt")) || context.trailerInfo.Encrypt,
      Info: dict.get(PDFName_default.of("Info")) || context.trailerInfo.Info,
      ID: dict.get(PDFName_default.of("ID")) || context.trailerInfo.ID
    };
  }
  maybeParseTrailer() {
    this.skipWhitespaceAndComments();
    if (!this.matchKeyword(Keywords.startxref)) return;
    this.skipWhitespaceAndComments();
    const offset = this.parseRawInt();
    this.skipWhitespace();
    this.matchKeyword(Keywords.eof);
    this.skipWhitespaceAndComments();
    this.matchKeyword(Keywords.eof);
    this.skipWhitespaceAndComments();
    return PDFTrailer_default.forLastCrossRefSectionOffset(offset);
  }
  async parseDocumentSection() {
    await this.parseIndirectObjects();
    this.maybeParseCrossRefSection();
    this.maybeParseTrailerDict();
    this.maybeParseTrailer();
    this.skipJibberish();
  }
  /**
   * This operation is not necessary for valid PDF files. But some invalid PDFs
   * contain jibberish in between indirect objects. This method is designed to
   * skip past that jibberish, should it exist, until it reaches the next
   * indirect object header, an xref table section, or the file trailer.
   */
  skipJibberish() {
    this.skipWhitespaceAndComments();
    while (!this.bytes.done()) {
      const initialOffset = this.bytes.offset();
      const byte = this.bytes.peek();
      const isAlphaNumeric = byte >= CharCodes_default.Space && byte <= CharCodes_default.Tilde;
      if (isAlphaNumeric) {
        if (this.matchKeyword(Keywords.xref) || this.matchKeyword(Keywords.trailer) || this.matchKeyword(Keywords.startxref) || this.matchIndirectObjectHeader()) {
          this.bytes.moveTo(initialOffset);
          break;
        }
      }
      this.bytes.next();
    }
  }
  /**
   * Skips the binary comment following a PDF header. The specification
   * defines this binary comment (section 7.5.2 File Header) as a sequence of 4
   * or more bytes that are 128 or greater, and which are preceded by a "%".
   *
   * This would imply that to strip out this binary comment, we could check for
   * a sequence of bytes starting with "%", and remove all subsequent bytes that
   * are 128 or greater. This works for many documents that properly comply with
   * the spec. But in the wild, there are PDFs that omit the leading "%", and
   * include bytes that are less than 128 (e.g. 0 or 1). So in order to parse
   * these headers correctly, we just throw out all bytes leading up to the
   * first indirect object header.
   */
  skipBinaryHeaderComment() {
    this.skipWhitespaceAndComments();
    try {
      const initialOffset = this.bytes.offset();
      this.parseIndirectObjectHeader();
      this.bytes.moveTo(initialOffset);
    } catch (e) {
      this.bytes.next();
      this.skipWhitespaceAndComments();
    }
  }
};
__publicField(_PDFParser, "forBytesWithOptions", (pdfBytes, objectsPerTick, throwOnInvalidObject, capNumbers) => new _PDFParser(pdfBytes, objectsPerTick, throwOnInvalidObject, capNumbers));
var PDFParser = _PDFParser;
var PDFParser_default = PDFParser;

// src/core/annotation/flags.ts
var flag2 = (bitIndex) => 1 << bitIndex;
var AnnotationFlags = ((AnnotationFlags2) => {
  AnnotationFlags2[AnnotationFlags2["Invisible"] = flag2(0)] = "Invisible";
  AnnotationFlags2[AnnotationFlags2["Hidden"] = flag2(1)] = "Hidden";
  AnnotationFlags2[AnnotationFlags2["Print"] = flag2(2)] = "Print";
  AnnotationFlags2[AnnotationFlags2["NoZoom"] = flag2(3)] = "NoZoom";
  AnnotationFlags2[AnnotationFlags2["NoRotate"] = flag2(4)] = "NoRotate";
  AnnotationFlags2[AnnotationFlags2["NoView"] = flag2(5)] = "NoView";
  AnnotationFlags2[AnnotationFlags2["ReadOnly"] = flag2(6)] = "ReadOnly";
  AnnotationFlags2[AnnotationFlags2["Locked"] = flag2(7)] = "Locked";
  AnnotationFlags2[AnnotationFlags2["ToggleNoView"] = flag2(8)] = "ToggleNoView";
  AnnotationFlags2[AnnotationFlags2["LockedContents"] = flag2(9)] = "LockedContents";
  return AnnotationFlags2;
})(AnnotationFlags || {});

// src/api/objects.ts
var asPDFName = (name) => name instanceof PDFName_default ? name : PDFName_default.of(name);
var asPDFNumber = (num) => num instanceof PDFNumber_default ? num : PDFNumber_default.of(num);
var asNumber = (num) => num instanceof PDFNumber_default ? num.asNumber() : num;

// src/api/rotations.ts
var RotationTypes = /* @__PURE__ */ ((RotationTypes2) => {
  RotationTypes2["Degrees"] = "degrees";
  RotationTypes2["Radians"] = "radians";
  return RotationTypes2;
})(RotationTypes || {});
var radians = (radianAngle) => {
  assertIs(radianAngle, "radianAngle", ["number"]);
  return { type: "radians" /* Radians */, angle: radianAngle };
};
var degrees = (degreeAngle) => {
  assertIs(degreeAngle, "degreeAngle", ["number"]);
  return { type: "degrees" /* Degrees */, angle: degreeAngle };
};
var { Radians, Degrees } = RotationTypes;
var degreesToRadians = (degree) => degree * Math.PI / 180;
var radiansToDegrees = (radian) => radian * 180 / Math.PI;
var toRadians = (rotation) => rotation.type === Radians ? rotation.angle : rotation.type === Degrees ? degreesToRadians(rotation.angle) : error(`Invalid rotation: ${JSON.stringify(rotation)}`);
var toDegrees = (rotation) => rotation.type === Radians ? radiansToDegrees(rotation.angle) : rotation.type === Degrees ? rotation.angle : error(`Invalid rotation: ${JSON.stringify(rotation)}`);
var reduceRotation = (degreeAngle = 0) => {
  const quadrants = degreeAngle / 90 % 4;
  if (quadrants === 0) return 0;
  if (quadrants === 1) return 90;
  if (quadrants === 2) return 180;
  if (quadrants === 3) return 270;
  return 0;
};
var adjustDimsForRotation = (dims, degreeAngle = 0) => {
  const rotation = reduceRotation(degreeAngle);
  return rotation === 90 || rotation === 270 ? { width: dims.height, height: dims.width } : { width: dims.width, height: dims.height };
};
var rotateRectangle = (rectangle2, borderWidth = 0, degreeAngle = 0) => {
  const { x, y, width: w, height: h } = rectangle2;
  const r = reduceRotation(degreeAngle);
  const b = borderWidth / 2;
  if (r === 0) return { x: x - b, y: y - b, width: w, height: h };
  else if (r === 90) return { x: x - h + b, y: y - b, width: h, height: w };
  else if (r === 180) return { x: x - w + b, y: y - h + b, width: w, height: h };
  else if (r === 270) return { x: x - b, y: y - w + b, width: h, height: w };
  else return { x: x - b, y: y - b, width: w, height: h };
};

// src/api/operators.ts
var clip = () => PDFOperator_default.of(PDFOperatorNames_default.ClipNonZero);
var clipEvenOdd = () => PDFOperator_default.of(PDFOperatorNames_default.ClipEvenOdd);
var { cos, sin, tan } = Math;
var concatTransformationMatrix = (a, b, c, d, e, f) => PDFOperator_default.of(PDFOperatorNames_default.ConcatTransformationMatrix, [
  asPDFNumber(a),
  asPDFNumber(b),
  asPDFNumber(c),
  asPDFNumber(d),
  asPDFNumber(e),
  asPDFNumber(f)
]);
var translate = (xPos, yPos) => concatTransformationMatrix(1, 0, 0, 1, xPos, yPos);
var scale = (xPos, yPos) => concatTransformationMatrix(xPos, 0, 0, yPos, 0, 0);
var rotateRadians = (angle) => concatTransformationMatrix(
  cos(asNumber(angle)),
  sin(asNumber(angle)),
  -sin(asNumber(angle)),
  cos(asNumber(angle)),
  0,
  0
);
var rotateDegrees = (angle) => rotateRadians(degreesToRadians(asNumber(angle)));
var skewRadians = (xSkewAngle, ySkewAngle) => concatTransformationMatrix(
  1,
  tan(asNumber(xSkewAngle)),
  tan(asNumber(ySkewAngle)),
  1,
  0,
  0
);
var skewDegrees = (xSkewAngle, ySkewAngle) => skewRadians(
  degreesToRadians(asNumber(xSkewAngle)),
  degreesToRadians(asNumber(ySkewAngle))
);
var setDashPattern = (dashArray, dashPhase) => PDFOperator_default.of(PDFOperatorNames_default.SetLineDashPattern, [
  `[${dashArray.map(asPDFNumber).join(" ")}]`,
  asPDFNumber(dashPhase)
]);
var restoreDashPattern = () => setDashPattern([], 0);
var LineCapStyle = /* @__PURE__ */ ((LineCapStyle3) => {
  LineCapStyle3[LineCapStyle3["Butt"] = 0] = "Butt";
  LineCapStyle3[LineCapStyle3["Round"] = 1] = "Round";
  LineCapStyle3[LineCapStyle3["Projecting"] = 2] = "Projecting";
  return LineCapStyle3;
})(LineCapStyle || {});
var setLineCap = (style) => PDFOperator_default.of(PDFOperatorNames_default.SetLineCapStyle, [asPDFNumber(style)]);
var LineJoinStyle = /* @__PURE__ */ ((LineJoinStyle2) => {
  LineJoinStyle2[LineJoinStyle2["Miter"] = 0] = "Miter";
  LineJoinStyle2[LineJoinStyle2["Round"] = 1] = "Round";
  LineJoinStyle2[LineJoinStyle2["Bevel"] = 2] = "Bevel";
  return LineJoinStyle2;
})(LineJoinStyle || {});
var setLineJoin = (style) => PDFOperator_default.of(PDFOperatorNames_default.SetLineJoinStyle, [asPDFNumber(style)]);
var setGraphicsState = (state) => PDFOperator_default.of(PDFOperatorNames_default.SetGraphicsStateParams, [asPDFName(state)]);
var pushGraphicsState = () => PDFOperator_default.of(PDFOperatorNames_default.PushGraphicsState);
var popGraphicsState = () => PDFOperator_default.of(PDFOperatorNames_default.PopGraphicsState);
var setLineWidth = (width) => PDFOperator_default.of(PDFOperatorNames_default.SetLineWidth, [asPDFNumber(width)]);
var appendBezierCurve = (x1, y1, x2, y2, x3, y3) => PDFOperator_default.of(PDFOperatorNames_default.AppendBezierCurve, [
  asPDFNumber(x1),
  asPDFNumber(y1),
  asPDFNumber(x2),
  asPDFNumber(y2),
  asPDFNumber(x3),
  asPDFNumber(y3)
]);
var appendQuadraticCurve = (x1, y1, x2, y2) => PDFOperator_default.of(PDFOperatorNames_default.CurveToReplicateInitialPoint, [
  asPDFNumber(x1),
  asPDFNumber(y1),
  asPDFNumber(x2),
  asPDFNumber(y2)
]);
var closePath = () => PDFOperator_default.of(PDFOperatorNames_default.ClosePath);
var moveTo = (xPos, yPos) => PDFOperator_default.of(PDFOperatorNames_default.MoveTo, [asPDFNumber(xPos), asPDFNumber(yPos)]);
var lineTo = (xPos, yPos) => PDFOperator_default.of(PDFOperatorNames_default.LineTo, [asPDFNumber(xPos), asPDFNumber(yPos)]);
var rectangle = (xPos, yPos, width, height) => PDFOperator_default.of(PDFOperatorNames_default.AppendRectangle, [
  asPDFNumber(xPos),
  asPDFNumber(yPos),
  asPDFNumber(width),
  asPDFNumber(height)
]);
var square = (xPos, yPos, size) => rectangle(xPos, yPos, size, size);
var stroke = () => PDFOperator_default.of(PDFOperatorNames_default.StrokePath);
var fill = () => PDFOperator_default.of(PDFOperatorNames_default.FillNonZero);
var fillAndStroke = () => PDFOperator_default.of(PDFOperatorNames_default.FillNonZeroAndStroke);
var endPath = () => PDFOperator_default.of(PDFOperatorNames_default.EndPath);
var nextLine = () => PDFOperator_default.of(PDFOperatorNames_default.NextLine);
var moveText = (x, y) => PDFOperator_default.of(PDFOperatorNames_default.MoveText, [asPDFNumber(x), asPDFNumber(y)]);
var showText = (text) => PDFOperator_default.of(PDFOperatorNames_default.ShowText, [text]);
var beginText = () => PDFOperator_default.of(PDFOperatorNames_default.BeginText);
var endText = () => PDFOperator_default.of(PDFOperatorNames_default.EndText);
var setFontAndSize = (name, size) => PDFOperator_default.of(PDFOperatorNames_default.SetFontAndSize, [asPDFName(name), asPDFNumber(size)]);
var setCharacterSpacing = (spacing) => PDFOperator_default.of(PDFOperatorNames_default.SetCharacterSpacing, [asPDFNumber(spacing)]);
var setWordSpacing = (spacing) => PDFOperator_default.of(PDFOperatorNames_default.SetWordSpacing, [asPDFNumber(spacing)]);
var setCharacterSqueeze = (squeeze) => PDFOperator_default.of(PDFOperatorNames_default.SetTextHorizontalScaling, [asPDFNumber(squeeze)]);
var setLineHeight = (lineHeight) => PDFOperator_default.of(PDFOperatorNames_default.SetTextLineHeight, [asPDFNumber(lineHeight)]);
var setTextRise = (rise) => PDFOperator_default.of(PDFOperatorNames_default.SetTextRise, [asPDFNumber(rise)]);
var TextRenderingMode = /* @__PURE__ */ ((TextRenderingMode2) => {
  TextRenderingMode2[TextRenderingMode2["Fill"] = 0] = "Fill";
  TextRenderingMode2[TextRenderingMode2["Outline"] = 1] = "Outline";
  TextRenderingMode2[TextRenderingMode2["FillAndOutline"] = 2] = "FillAndOutline";
  TextRenderingMode2[TextRenderingMode2["Invisible"] = 3] = "Invisible";
  TextRenderingMode2[TextRenderingMode2["FillAndClip"] = 4] = "FillAndClip";
  TextRenderingMode2[TextRenderingMode2["OutlineAndClip"] = 5] = "OutlineAndClip";
  TextRenderingMode2[TextRenderingMode2["FillAndOutlineAndClip"] = 6] = "FillAndOutlineAndClip";
  TextRenderingMode2[TextRenderingMode2["Clip"] = 7] = "Clip";
  return TextRenderingMode2;
})(TextRenderingMode || {});
var setTextRenderingMode = (mode) => PDFOperator_default.of(PDFOperatorNames_default.SetTextRenderingMode, [asPDFNumber(mode)]);
var setTextMatrix = (a, b, c, d, e, f) => PDFOperator_default.of(PDFOperatorNames_default.SetTextMatrix, [
  asPDFNumber(a),
  asPDFNumber(b),
  asPDFNumber(c),
  asPDFNumber(d),
  asPDFNumber(e),
  asPDFNumber(f)
]);
var rotateAndSkewTextRadiansAndTranslate = (rotationAngle, xSkewAngle, ySkewAngle, x, y) => setTextMatrix(
  cos(asNumber(rotationAngle)),
  sin(asNumber(rotationAngle)) + tan(asNumber(xSkewAngle)),
  -sin(asNumber(rotationAngle)) + tan(asNumber(ySkewAngle)),
  cos(asNumber(rotationAngle)),
  x,
  y
);
var rotateAndSkewTextDegreesAndTranslate = (rotationAngle, xSkewAngle, ySkewAngle, x, y) => rotateAndSkewTextRadiansAndTranslate(
  degreesToRadians(asNumber(rotationAngle)),
  degreesToRadians(asNumber(xSkewAngle)),
  degreesToRadians(asNumber(ySkewAngle)),
  x,
  y
);
var drawObject = (name) => PDFOperator_default.of(PDFOperatorNames_default.DrawObject, [asPDFName(name)]);
var setFillingGrayscaleColor = (gray) => PDFOperator_default.of(PDFOperatorNames_default.NonStrokingColorGray, [asPDFNumber(gray)]);
var setStrokingGrayscaleColor = (gray) => PDFOperator_default.of(PDFOperatorNames_default.StrokingColorGray, [asPDFNumber(gray)]);
var setFillingRgbColor = (red, green, blue) => PDFOperator_default.of(PDFOperatorNames_default.NonStrokingColorRgb, [
  asPDFNumber(red),
  asPDFNumber(green),
  asPDFNumber(blue)
]);
var setStrokingRgbColor = (red, green, blue) => PDFOperator_default.of(PDFOperatorNames_default.StrokingColorRgb, [
  asPDFNumber(red),
  asPDFNumber(green),
  asPDFNumber(blue)
]);
var setFillingCmykColor = (cyan, magenta, yellow, key) => PDFOperator_default.of(PDFOperatorNames_default.NonStrokingColorCmyk, [
  asPDFNumber(cyan),
  asPDFNumber(magenta),
  asPDFNumber(yellow),
  asPDFNumber(key)
]);
var setStrokingCmykColor = (cyan, magenta, yellow, key) => PDFOperator_default.of(PDFOperatorNames_default.StrokingColorCmyk, [
  asPDFNumber(cyan),
  asPDFNumber(magenta),
  asPDFNumber(yellow),
  asPDFNumber(key)
]);
var beginMarkedContent = (tag) => PDFOperator_default.of(PDFOperatorNames_default.BeginMarkedContent, [asPDFName(tag)]);
var endMarkedContent = () => PDFOperator_default.of(PDFOperatorNames_default.EndMarkedContent);

// src/api/colors.ts
var ColorTypes = /* @__PURE__ */ ((ColorTypes2) => {
  ColorTypes2["Grayscale"] = "Grayscale";
  ColorTypes2["RGB"] = "RGB";
  ColorTypes2["CMYK"] = "CMYK";
  return ColorTypes2;
})(ColorTypes || {});
var grayscale = (gray) => {
  assertRange(gray, "gray", 0, 1);
  return { type: "Grayscale" /* Grayscale */, gray };
};
var rgb = (red, green, blue) => {
  assertRange(red, "red", 0, 1);
  assertRange(green, "green", 0, 1);
  assertRange(blue, "blue", 0, 1);
  return { type: "RGB" /* RGB */, red, green, blue };
};
var cmyk = (cyan, magenta, yellow, key) => {
  assertRange(cyan, "cyan", 0, 1);
  assertRange(magenta, "magenta", 0, 1);
  assertRange(yellow, "yellow", 0, 1);
  assertRange(key, "key", 0, 1);
  return { type: "CMYK" /* CMYK */, cyan, magenta, yellow, key };
};
var { Grayscale, RGB, CMYK } = ColorTypes;
var setFillingColor = (color) => color.type === Grayscale ? setFillingGrayscaleColor(color.gray) : color.type === RGB ? setFillingRgbColor(color.red, color.green, color.blue) : color.type === CMYK ? setFillingCmykColor(color.cyan, color.magenta, color.yellow, color.key) : error(`Invalid color: ${JSON.stringify(color)}`);
var setStrokingColor = (color) => color.type === Grayscale ? setStrokingGrayscaleColor(color.gray) : color.type === RGB ? setStrokingRgbColor(color.red, color.green, color.blue) : color.type === CMYK ? setStrokingCmykColor(color.cyan, color.magenta, color.yellow, color.key) : error(`Invalid color: ${JSON.stringify(color)}`);
var componentsToColor = (comps, scale2 = 1) => comps?.length === 1 ? grayscale(
  comps[0] * scale2
) : comps?.length === 3 ? rgb(
  comps[0] * scale2,
  comps[1] * scale2,
  comps[2] * scale2
) : comps?.length === 4 ? cmyk(
  comps[0] * scale2,
  comps[1] * scale2,
  comps[2] * scale2,
  comps[3] * scale2
) : void 0;
var colorToComponents = (color) => color.type === Grayscale ? [color.gray] : color.type === RGB ? [color.red, color.green, color.blue] : color.type === CMYK ? [color.cyan, color.magenta, color.yellow, color.key] : error(`Invalid color: ${JSON.stringify(color)}`);

// src/api/svgPath.ts
var cx = 0;
var cy = 0;
var px = 0;
var py = 0;
var sx = 0;
var sy = 0;
var parameters = /* @__PURE__ */ new Map([
  ["A", 7],
  ["a", 7],
  ["C", 6],
  ["c", 6],
  ["H", 1],
  ["h", 1],
  ["L", 2],
  ["l", 2],
  ["M", 2],
  ["m", 2],
  ["Q", 4],
  ["q", 4],
  ["S", 4],
  ["s", 4],
  ["T", 2],
  ["t", 2],
  ["V", 1],
  ["v", 1],
  ["Z", 0],
  ["z", 0]
]);
var parse = (path) => {
  let cmd;
  const ret = [];
  let args = [];
  let curArg = "";
  let foundDecimal = false;
  let params = 0;
  for (const c of path) {
    if (parameters.has(c)) {
      params = parameters.get(c);
      if (cmd) {
        if (curArg.length > 0) {
          args[args.length] = +curArg;
        }
        ret[ret.length] = { cmd, args };
        args = [];
        curArg = "";
        foundDecimal = false;
      }
      cmd = c;
    } else if ([" ", ","].includes(c) || c === "-" && curArg.length > 0 && curArg[curArg.length - 1] !== "e" || c === "." && foundDecimal) {
      if (curArg.length === 0) {
        continue;
      }
      if (args.length === params) {
        ret[ret.length] = { cmd, args };
        args = [+curArg];
        if (cmd === "M") {
          cmd = "L";
        }
        if (cmd === "m") {
          cmd = "l";
        }
      } else {
        args[args.length] = +curArg;
      }
      foundDecimal = c === ".";
      curArg = ["-", "."].includes(c) ? c : "";
    } else {
      curArg += c;
      if (c === ".") {
        foundDecimal = true;
      }
    }
  }
  if (curArg.length > 0) {
    if (args.length === params) {
      ret[ret.length] = { cmd, args };
      args = [+curArg];
      if (cmd === "M") {
        cmd = "L";
      }
      if (cmd === "m") {
        cmd = "l";
      }
    } else {
      args[args.length] = +curArg;
    }
  }
  ret[ret.length] = { cmd, args };
  return ret;
};
var apply = (commands) => {
  cx = cy = px = py = sx = sy = 0;
  let cmds = [];
  for (let i = 0; i < commands.length; i++) {
    const c = commands[i];
    if (c.cmd && typeof runners[c.cmd] === "function") {
      const cmd = runners[c.cmd](c.args);
      if (Array.isArray(cmd)) {
        cmds = cmds.concat(cmd);
      } else {
        cmds.push(cmd);
      }
    }
  }
  return cmds;
};
var runners = {
  M(a) {
    cx = a[0];
    cy = a[1];
    px = py = null;
    sx = cx;
    sy = cy;
    return moveTo(cx, cy);
  },
  m(a) {
    cx += a[0];
    cy += a[1];
    px = py = null;
    sx = cx;
    sy = cy;
    return moveTo(cx, cy);
  },
  C(a) {
    cx = a[4];
    cy = a[5];
    px = a[2];
    py = a[3];
    return appendBezierCurve(a[0], a[1], a[2], a[3], a[4], a[5]);
  },
  c(a) {
    const cmd = appendBezierCurve(
      a[0] + cx,
      a[1] + cy,
      a[2] + cx,
      a[3] + cy,
      a[4] + cx,
      a[5] + cy
    );
    px = cx + a[2];
    py = cy + a[3];
    cx += a[4];
    cy += a[5];
    return cmd;
  },
  S(a) {
    if (px === null || py === null) {
      px = cx;
      py = cy;
    }
    const cmd = appendBezierCurve(
      cx - (px - cx),
      cy - (py - cy),
      a[0],
      a[1],
      a[2],
      a[3]
    );
    px = a[0];
    py = a[1];
    cx = a[2];
    cy = a[3];
    return cmd;
  },
  s(a) {
    if (px === null || py === null) {
      px = cx;
      py = cy;
    }
    const cmd = appendBezierCurve(
      cx - (px - cx),
      cy - (py - cy),
      cx + a[0],
      cy + a[1],
      cx + a[2],
      cy + a[3]
    );
    px = cx + a[0];
    py = cy + a[1];
    cx += a[2];
    cy += a[3];
    return cmd;
  },
  Q(a) {
    px = a[0];
    py = a[1];
    cx = a[2];
    cy = a[3];
    return appendQuadraticCurve(a[0], a[1], cx, cy);
  },
  q(a) {
    const cmd = appendQuadraticCurve(
      a[0] + cx,
      a[1] + cy,
      a[2] + cx,
      a[3] + cy
    );
    px = cx + a[0];
    py = cy + a[1];
    cx += a[2];
    cy += a[3];
    return cmd;
  },
  T(a) {
    if (px === null || py === null) {
      px = cx;
      py = cy;
    } else {
      px = cx - (px - cx);
      py = cy - (py - cy);
    }
    const cmd = appendQuadraticCurve(px, py, a[0], a[1]);
    px = cx - (px - cx);
    py = cy - (py - cy);
    cx = a[0];
    cy = a[1];
    return cmd;
  },
  t(a) {
    if (px === null || py === null) {
      px = cx;
      py = cy;
    } else {
      px = cx - (px - cx);
      py = cy - (py - cy);
    }
    const cmd = appendQuadraticCurve(px, py, cx + a[0], cy + a[1]);
    cx += a[0];
    cy += a[1];
    return cmd;
  },
  A(a) {
    const cmds = solveArc(cx, cy, a);
    cx = a[5];
    cy = a[6];
    return cmds;
  },
  a(a) {
    a[5] += cx;
    a[6] += cy;
    const cmds = solveArc(cx, cy, a);
    cx = a[5];
    cy = a[6];
    return cmds;
  },
  L(a) {
    cx = a[0];
    cy = a[1];
    px = py = null;
    return lineTo(cx, cy);
  },
  l(a) {
    cx += a[0];
    cy += a[1];
    px = py = null;
    return lineTo(cx, cy);
  },
  H(a) {
    cx = a[0];
    px = py = null;
    return lineTo(cx, cy);
  },
  h(a) {
    cx += a[0];
    px = py = null;
    return lineTo(cx, cy);
  },
  V(a) {
    cy = a[0];
    px = py = null;
    return lineTo(cx, cy);
  },
  v(a) {
    cy += a[0];
    px = py = null;
    return lineTo(cx, cy);
  },
  Z() {
    const cmd = closePath();
    cx = sx;
    cy = sy;
    return cmd;
  },
  z() {
    const cmd = closePath();
    cx = sx;
    cy = sy;
    return cmd;
  }
};
var solveArc = (x, y, coords) => {
  const [rx, ry, rot, large, sweep, ex, ey] = coords;
  const segs = arcToSegments(ex, ey, rx, ry, large, sweep, rot, x, y);
  const cmds = [];
  for (const seg of segs) {
    const bez = segmentToBezier(...seg);
    cmds.push(appendBezierCurve(...bez));
  }
  return cmds;
};
var arcToSegments = (x, y, rx, ry, large, sweep, rotateX, ox, oy) => {
  const th = rotateX * (Math.PI / 180);
  const sinTh = Math.sin(th);
  const cosTh = Math.cos(th);
  rx = Math.abs(rx);
  ry = Math.abs(ry);
  px = cosTh * (ox - x) * 0.5 + sinTh * (oy - y) * 0.5;
  py = cosTh * (oy - y) * 0.5 - sinTh * (ox - x) * 0.5;
  let pl = px * px / (rx * rx) + py * py / (ry * ry);
  if (pl > 1) {
    pl = Math.sqrt(pl);
    rx *= pl;
    ry *= pl;
  }
  const a00 = cosTh / rx;
  const a01 = sinTh / rx;
  const a10 = -sinTh / ry;
  const a11 = cosTh / ry;
  const x0 = a00 * ox + a01 * oy;
  const y0 = a10 * ox + a11 * oy;
  const x1 = a00 * x + a01 * y;
  const y1 = a10 * x + a11 * y;
  const d = (x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0);
  let sfactorSq = 1 / d - 0.25;
  if (sfactorSq < 0) {
    sfactorSq = 0;
  }
  let sfactor = Math.sqrt(sfactorSq);
  if (sweep === large) {
    sfactor = -sfactor;
  }
  const xc = 0.5 * (x0 + x1) - sfactor * (y1 - y0);
  const yc = 0.5 * (y0 + y1) + sfactor * (x1 - x0);
  const th0 = Math.atan2(y0 - yc, x0 - xc);
  const th1 = Math.atan2(y1 - yc, x1 - xc);
  let thArc = th1 - th0;
  if (thArc < 0 && sweep === 1) {
    thArc += 2 * Math.PI;
  } else if (thArc > 0 && sweep === 0) {
    thArc -= 2 * Math.PI;
  }
  const segments = Math.ceil(Math.abs(thArc / (Math.PI * 0.5 + 1e-3)));
  const result = [];
  for (let i = 0; i < segments; i++) {
    const th2 = th0 + i * thArc / segments;
    const th3 = th0 + (i + 1) * thArc / segments;
    result[i] = [xc, yc, th2, th3, rx, ry, sinTh, cosTh];
  }
  return result;
};
var segmentToBezier = (cx1, cy1, th0, th1, rx, ry, sinTh, cosTh) => {
  const a00 = cosTh * rx;
  const a01 = -sinTh * ry;
  const a10 = sinTh * rx;
  const a11 = cosTh * ry;
  const thHalf = 0.5 * (th1 - th0);
  const t = 8 / 3 * Math.sin(thHalf * 0.5) * Math.sin(thHalf * 0.5) / Math.sin(thHalf);
  const x1 = cx1 + Math.cos(th0) - t * Math.sin(th0);
  const y1 = cy1 + Math.sin(th0) + t * Math.cos(th0);
  const x3 = cx1 + Math.cos(th1);
  const y3 = cy1 + Math.sin(th1);
  const x2 = x3 + t * Math.sin(th1);
  const y2 = y3 - t * Math.cos(th1);
  const result = [
    a00 * x1 + a01 * y1,
    a10 * x1 + a11 * y1,
    a00 * x2 + a01 * y2,
    a10 * x2 + a11 * y2,
    a00 * x3 + a01 * y3,
    a10 * x3 + a11 * y3
  ];
  return result;
};
var svgPathToOperators = (path) => apply(parse(path));

// src/api/operations.ts
var drawText = (line, options) => [
  pushGraphicsState(),
  options.graphicsState && setGraphicsState(options.graphicsState),
  beginText(),
  setFillingColor(options.color),
  setFontAndSize(options.font, options.size),
  rotateAndSkewTextRadiansAndTranslate(
    toRadians(options.rotate),
    toRadians(options.xSkew),
    toRadians(options.ySkew),
    options.x,
    options.y
  ),
  showText(line),
  endText(),
  popGraphicsState()
].filter(Boolean);
var drawLinesOfText = (lines, options) => {
  const operators = [
    pushGraphicsState(),
    options.graphicsState && setGraphicsState(options.graphicsState),
    beginText(),
    setFillingColor(options.color),
    setFontAndSize(options.font, options.size),
    setLineHeight(options.lineHeight),
    rotateAndSkewTextRadiansAndTranslate(
      toRadians(options.rotate),
      toRadians(options.xSkew),
      toRadians(options.ySkew),
      options.x,
      options.y
    )
  ].filter(Boolean);
  for (let idx = 0, len = lines.length; idx < len; idx++) {
    operators.push(showText(lines[idx]), nextLine());
  }
  operators.push(endText(), popGraphicsState());
  return operators;
};
var drawImage = (name, options) => [
  pushGraphicsState(),
  options.graphicsState && setGraphicsState(options.graphicsState),
  translate(options.x, options.y),
  rotateRadians(toRadians(options.rotate)),
  scale(options.width, options.height),
  skewRadians(toRadians(options.xSkew), toRadians(options.ySkew)),
  drawObject(name),
  popGraphicsState()
].filter(Boolean);
var drawPage = (name, options) => [
  pushGraphicsState(),
  options.graphicsState && setGraphicsState(options.graphicsState),
  translate(options.x, options.y),
  rotateRadians(toRadians(options.rotate)),
  scale(options.xScale, options.yScale),
  skewRadians(toRadians(options.xSkew), toRadians(options.ySkew)),
  drawObject(name),
  popGraphicsState()
].filter(Boolean);
var drawLine = (options) => [
  pushGraphicsState(),
  options.graphicsState && setGraphicsState(options.graphicsState),
  options.color && setStrokingColor(options.color),
  setLineWidth(options.thickness),
  setDashPattern(options.dashArray ?? [], options.dashPhase ?? 0),
  moveTo(options.start.x, options.start.y),
  options.lineCap && setLineCap(options.lineCap),
  moveTo(options.start.x, options.start.y),
  lineTo(options.end.x, options.end.y),
  stroke(),
  popGraphicsState()
].filter(Boolean);
var drawRectangle = (options) => [
  pushGraphicsState(),
  options.graphicsState && setGraphicsState(options.graphicsState),
  options.color && setFillingColor(options.color),
  options.borderColor && setStrokingColor(options.borderColor),
  setLineWidth(options.borderWidth),
  options.borderLineCap && setLineCap(options.borderLineCap),
  setDashPattern(options.borderDashArray ?? [], options.borderDashPhase ?? 0),
  translate(options.x, options.y),
  rotateRadians(toRadians(options.rotate)),
  skewRadians(toRadians(options.xSkew), toRadians(options.ySkew)),
  moveTo(0, 0),
  lineTo(0, options.height),
  lineTo(options.width, options.height),
  lineTo(options.width, 0),
  closePath(),
  // prettier-ignore
  options.color && options.borderWidth ? fillAndStroke() : options.color ? fill() : options.borderColor ? stroke() : closePath(),
  popGraphicsState()
].filter(Boolean);
var KAPPA = 4 * ((Math.sqrt(2) - 1) / 3);
var drawEllipsePath = (config) => {
  let x = asNumber(config.x);
  let y = asNumber(config.y);
  const xScale = asNumber(config.xScale);
  const yScale = asNumber(config.yScale);
  x -= xScale;
  y -= yScale;
  const ox = xScale * KAPPA;
  const oy = yScale * KAPPA;
  const xe = x + xScale * 2;
  const ye = y + yScale * 2;
  const xm = x + xScale;
  const ym = y + yScale;
  return [
    pushGraphicsState(),
    moveTo(x, ym),
    appendBezierCurve(x, ym - oy, xm - ox, y, xm, y),
    appendBezierCurve(xm + ox, y, xe, ym - oy, xe, ym),
    appendBezierCurve(xe, ym + oy, xm + ox, ye, xm, ye),
    appendBezierCurve(xm - ox, ye, x, ym + oy, x, ym),
    popGraphicsState()
  ];
};
var drawEllipseCurves = (config) => {
  const centerX = asNumber(config.x);
  const centerY = asNumber(config.y);
  const xScale = asNumber(config.xScale);
  const yScale = asNumber(config.yScale);
  const x = -xScale;
  const y = -yScale;
  const ox = xScale * KAPPA;
  const oy = yScale * KAPPA;
  const xe = x + xScale * 2;
  const ye = y + yScale * 2;
  const xm = x + xScale;
  const ym = y + yScale;
  return [
    translate(centerX, centerY),
    rotateRadians(toRadians(config.rotate)),
    moveTo(x, ym),
    appendBezierCurve(x, ym - oy, xm - ox, y, xm, y),
    appendBezierCurve(xm + ox, y, xe, ym - oy, xe, ym),
    appendBezierCurve(xe, ym + oy, xm + ox, ye, xm, ye),
    appendBezierCurve(xm - ox, ye, x, ym + oy, x, ym)
  ];
};
var drawEllipse = (options) => [
  pushGraphicsState(),
  options.graphicsState && setGraphicsState(options.graphicsState),
  options.color && setFillingColor(options.color),
  options.borderColor && setStrokingColor(options.borderColor),
  setLineWidth(options.borderWidth),
  options.borderLineCap && setLineCap(options.borderLineCap),
  setDashPattern(options.borderDashArray ?? [], options.borderDashPhase ?? 0),
  // The `drawEllipsePath` branch is only here for backwards compatibility.
  // See https://github.com/Hopding/pdf-lib/pull/511#issuecomment-667685655.
  ...options.rotate === void 0 ? drawEllipsePath({
    x: options.x,
    y: options.y,
    xScale: options.xScale,
    yScale: options.yScale
  }) : drawEllipseCurves({
    x: options.x,
    y: options.y,
    xScale: options.xScale,
    yScale: options.yScale,
    rotate: options.rotate ?? degrees(0)
  }),
  // prettier-ignore
  options.color && options.borderWidth ? fillAndStroke() : options.color ? fill() : options.borderColor ? stroke() : closePath(),
  popGraphicsState()
].filter(Boolean);
var drawSvgPath = (path, options) => [
  pushGraphicsState(),
  options.graphicsState && setGraphicsState(options.graphicsState),
  translate(options.x, options.y),
  rotateRadians(toRadians(options.rotate ?? degrees(0))),
  // SVG path Y axis is opposite pdf-lib's
  options.scale ? scale(options.scale, -options.scale) : scale(1, -1),
  options.color && setFillingColor(options.color),
  options.borderColor && setStrokingColor(options.borderColor),
  options.borderWidth && setLineWidth(options.borderWidth),
  options.borderLineCap && setLineCap(options.borderLineCap),
  setDashPattern(options.borderDashArray ?? [], options.borderDashPhase ?? 0),
  ...svgPathToOperators(path),
  // prettier-ignore
  options.color && options.borderWidth ? fillAndStroke() : options.color ? fill() : options.borderColor ? stroke() : closePath(),
  popGraphicsState()
].filter(Boolean);
var drawCheckMark = (options) => {
  const size = asNumber(options.size);
  const p2x = -1 + 0.75;
  const p2y = -1 + 0.51;
  const p3y = 1 - 0.525;
  const p3x = 1 - 0.31;
  const p1x = -1 + 0.325;
  const p1y = -((p1x - p2x) * (p3x - p2x)) / (p3y - p2y) + p2y;
  return [
    pushGraphicsState(),
    options.color && setStrokingColor(options.color),
    setLineWidth(options.thickness),
    translate(options.x, options.y),
    moveTo(p1x * size, p1y * size),
    lineTo(p2x * size, p2y * size),
    lineTo(p3x * size, p3y * size),
    stroke(),
    popGraphicsState()
  ].filter(Boolean);
};
var rotateInPlace = (options) => options.rotation === 0 ? [
  translate(0, 0),
  rotateDegrees(0)
] : options.rotation === 90 ? [
  translate(options.width, 0),
  rotateDegrees(90)
] : options.rotation === 180 ? [
  translate(options.width, options.height),
  rotateDegrees(180)
] : options.rotation === 270 ? [
  translate(0, options.height),
  rotateDegrees(270)
] : [];
var drawCheckBox = (options) => {
  const outline = drawRectangle({
    x: options.x,
    y: options.y,
    width: options.width,
    height: options.height,
    borderWidth: options.borderWidth,
    color: options.color,
    borderColor: options.borderColor,
    rotate: degrees(0),
    xSkew: degrees(0),
    ySkew: degrees(0)
  });
  if (!options.filled) return outline;
  const width = asNumber(options.width);
  const height = asNumber(options.height);
  const checkMarkSize = Math.min(width, height) / 2;
  const checkMark = drawCheckMark({
    x: width / 2,
    y: height / 2,
    size: checkMarkSize,
    thickness: options.thickness,
    color: options.markColor
  });
  return [pushGraphicsState(), ...outline, ...checkMark, popGraphicsState()];
};
var drawRadioButton = (options) => {
  const width = asNumber(options.width);
  const height = asNumber(options.height);
  const outlineScale = Math.min(width, height) / 2;
  const outline = drawEllipse({
    x: options.x,
    y: options.y,
    xScale: outlineScale,
    yScale: outlineScale,
    color: options.color,
    borderColor: options.borderColor,
    borderWidth: options.borderWidth
  });
  if (!options.filled) return outline;
  const dot = drawEllipse({
    x: options.x,
    y: options.y,
    xScale: outlineScale * 0.45,
    yScale: outlineScale * 0.45,
    color: options.dotColor,
    borderColor: void 0,
    borderWidth: 0
  });
  return [pushGraphicsState(), ...outline, ...dot, popGraphicsState()];
};
var drawButton = (options) => {
  const x = asNumber(options.x);
  const y = asNumber(options.y);
  const width = asNumber(options.width);
  const height = asNumber(options.height);
  const background = drawRectangle({
    x,
    y,
    width,
    height,
    borderWidth: options.borderWidth,
    color: options.color,
    borderColor: options.borderColor,
    rotate: degrees(0),
    xSkew: degrees(0),
    ySkew: degrees(0)
  });
  const lines = drawTextLines(options.textLines, {
    color: options.textColor,
    font: options.font,
    size: options.fontSize,
    rotate: degrees(0),
    xSkew: degrees(0),
    ySkew: degrees(0)
  });
  return [pushGraphicsState(), ...background, ...lines, popGraphicsState()];
};
var drawTextLines = (lines, options) => {
  const operators = [
    beginText(),
    setFillingColor(options.color),
    setFontAndSize(options.font, options.size)
  ];
  for (let idx = 0, len = lines.length; idx < len; idx++) {
    const { encoded, x, y } = lines[idx];
    operators.push(
      rotateAndSkewTextRadiansAndTranslate(
        toRadians(options.rotate),
        toRadians(options.xSkew),
        toRadians(options.ySkew),
        x,
        y
      ),
      showText(encoded)
    );
  }
  operators.push(endText());
  return operators;
};
var drawTextField = (options) => {
  const x = asNumber(options.x);
  const y = asNumber(options.y);
  const width = asNumber(options.width);
  const height = asNumber(options.height);
  const borderWidth = asNumber(options.borderWidth);
  const padding = asNumber(options.padding);
  const clipX = x + borderWidth / 2 + padding;
  const clipY = y + borderWidth / 2 + padding;
  const clipWidth = width - (borderWidth / 2 + padding) * 2;
  const clipHeight = height - (borderWidth / 2 + padding) * 2;
  const clippingArea = [
    moveTo(clipX, clipY),
    lineTo(clipX, clipY + clipHeight),
    lineTo(clipX + clipWidth, clipY + clipHeight),
    lineTo(clipX + clipWidth, clipY),
    closePath(),
    clip(),
    endPath()
  ];
  const background = drawRectangle({
    x,
    y,
    width,
    height,
    borderWidth: options.borderWidth,
    color: options.color,
    borderColor: options.borderColor,
    rotate: degrees(0),
    xSkew: degrees(0),
    ySkew: degrees(0)
  });
  const lines = drawTextLines(options.textLines, {
    color: options.textColor,
    font: options.font,
    size: options.fontSize,
    rotate: degrees(0),
    xSkew: degrees(0),
    ySkew: degrees(0)
  });
  const markedContent = [
    beginMarkedContent("Tx"),
    pushGraphicsState(),
    ...lines,
    popGraphicsState(),
    endMarkedContent()
  ];
  return [
    pushGraphicsState(),
    ...background,
    ...clippingArea,
    ...markedContent,
    popGraphicsState()
  ];
};
var drawOptionList = (options) => {
  const x = asNumber(options.x);
  const y = asNumber(options.y);
  const width = asNumber(options.width);
  const height = asNumber(options.height);
  const lineHeight = asNumber(options.lineHeight);
  const borderWidth = asNumber(options.borderWidth);
  const padding = asNumber(options.padding);
  const clipX = x + borderWidth / 2 + padding;
  const clipY = y + borderWidth / 2 + padding;
  const clipWidth = width - (borderWidth / 2 + padding) * 2;
  const clipHeight = height - (borderWidth / 2 + padding) * 2;
  const clippingArea = [
    moveTo(clipX, clipY),
    lineTo(clipX, clipY + clipHeight),
    lineTo(clipX + clipWidth, clipY + clipHeight),
    lineTo(clipX + clipWidth, clipY),
    closePath(),
    clip(),
    endPath()
  ];
  const background = drawRectangle({
    x,
    y,
    width,
    height,
    borderWidth: options.borderWidth,
    color: options.color,
    borderColor: options.borderColor,
    rotate: degrees(0),
    xSkew: degrees(0),
    ySkew: degrees(0)
  });
  const highlights = [];
  for (let idx = 0, len = options.selectedLines.length; idx < len; idx++) {
    const line = options.textLines[options.selectedLines[idx]];
    highlights.push(
      ...drawRectangle({
        x: line.x - padding,
        y: line.y - (lineHeight - line.height) / 2,
        width: width - borderWidth,
        height: line.height + (lineHeight - line.height) / 2,
        borderWidth: 0,
        color: options.selectedColor,
        borderColor: void 0,
        rotate: degrees(0),
        xSkew: degrees(0),
        ySkew: degrees(0)
      })
    );
  }
  const lines = drawTextLines(options.textLines, {
    color: options.textColor,
    font: options.font,
    size: options.fontSize,
    rotate: degrees(0),
    xSkew: degrees(0),
    ySkew: degrees(0)
  });
  const markedContent = [
    beginMarkedContent("Tx"),
    pushGraphicsState(),
    ...lines,
    popGraphicsState(),
    endMarkedContent()
  ];
  return [
    pushGraphicsState(),
    ...background,
    ...highlights,
    ...clippingArea,
    ...markedContent,
    popGraphicsState()
  ];
};

// src/api/errors.ts
var EncryptedPDFError = class extends Error {
  constructor() {
    const msg = "Input document to `PDFDocument.load` is encrypted. You can use `PDFDocument.load(..., { ignoreEncryption: true })` if you wish to load the document anyways.";
    super(msg);
  }
};
var FontkitNotRegisteredError = class extends Error {
  constructor() {
    const msg = "Input to `PDFDocument.embedFont` was a custom font, but no `fontkit` instance was found. You must register a `fontkit` instance with `PDFDocument.registerFontkit(...)` before embedding custom fonts.";
    super(msg);
  }
};
var ForeignPageError = class extends Error {
  constructor() {
    const msg = "A `page` passed to `PDFDocument.addPage` or `PDFDocument.insertPage` was from a different (foreign) PDF document. If you want to copy pages from one PDFDocument to another, you must use `PDFDocument.copyPages(...)` to copy the pages before adding or inserting them.";
    super(msg);
  }
};
var RemovePageFromEmptyDocumentError = class extends Error {
  constructor() {
    const msg = "PDFDocument has no pages so `PDFDocument.removePage` cannot be called";
    super(msg);
  }
};
var NoSuchFieldError = class extends Error {
  constructor(name) {
    const msg = `PDFDocument has no form field with the name "${name}"`;
    super(msg);
  }
};
var UnexpectedFieldTypeError = class extends Error {
  constructor(name, expected, actual) {
    const expectedType = expected?.name;
    const actualType = actual?.constructor?.name ?? actual;
    const msg = `Expected field "${name}" to be of type ${expectedType}, but it is actually of type ${actualType}`;
    super(msg);
  }
};
var MissingOnValueCheckError = class extends Error {
  constructor(onValue) {
    const msg = `Failed to select check box due to missing onValue: "${onValue}"`;
    super(msg);
  }
};
var FieldAlreadyExistsError = class extends Error {
  constructor(name) {
    const msg = `A field already exists with the specified name: "${name}"`;
    super(msg);
  }
};
var InvalidFieldNamePartError = class extends Error {
  constructor(namePart) {
    const msg = `Field name contains invalid component: "${namePart}"`;
    super(msg);
  }
};
var FieldExistsAsNonTerminalError = class extends Error {
  constructor(name) {
    const msg = `A non-terminal field already exists with the specified name: "${name}"`;
    super(msg);
  }
};
var RichTextFieldReadError = class extends Error {
  constructor(fieldName) {
    const msg = `Reading rich text fields is not supported: Attempted to read rich text field: ${fieldName}`;
    super(msg);
  }
};
var CombedTextLayoutError = class extends Error {
  constructor(lineLength, cellCount) {
    const msg = `Failed to layout combed text as lineLength=${lineLength} is greater than cellCount=${cellCount}`;
    super(msg);
  }
};
var ExceededMaxLengthError = class extends Error {
  constructor(textLength, maxLength, name) {
    const msg = `Attempted to set text with length=${textLength} for TextField with maxLength=${maxLength} and name=${name}`;
    super(msg);
  }
};
var InvalidMaxLengthError = class extends Error {
  constructor(textLength, maxLength, name) {
    const msg = `Attempted to set maxLength=${maxLength}, which is less than ${textLength}, the length of this field's current value (name=${name})`;
    super(msg);
  }
};

// src/api/text/alignment.ts
var TextAlignment = /* @__PURE__ */ ((TextAlignment2) => {
  TextAlignment2[TextAlignment2["Left"] = 0] = "Left";
  TextAlignment2[TextAlignment2["Center"] = 1] = "Center";
  TextAlignment2[TextAlignment2["Right"] = 2] = "Right";
  return TextAlignment2;
})(TextAlignment || {});

// src/api/text/layout.ts
var MIN_FONT_SIZE = 4;
var MAX_FONT_SIZE = 500;
var computeFontSize = (lines, font, bounds, multiline = false) => {
  let fontSize = MIN_FONT_SIZE;
  while (fontSize < MAX_FONT_SIZE) {
    let linesUsed = 0;
    for (let lineIdx = 0, lineLen = lines.length; lineIdx < lineLen; lineIdx++) {
      linesUsed += 1;
      const line = lines[lineIdx];
      const words = line.split(" ");
      let spaceInLineRemaining = bounds.width;
      for (let idx = 0, len = words.length; idx < len; idx++) {
        const isLastWord = idx === len - 1;
        const word = isLastWord ? words[idx] : words[idx] + " ";
        const widthOfWord = font.widthOfTextAtSize(word, fontSize);
        spaceInLineRemaining -= widthOfWord;
        if (spaceInLineRemaining <= 0) {
          linesUsed += 1;
          spaceInLineRemaining = bounds.width - widthOfWord;
        }
      }
    }
    if (!multiline && linesUsed > lines.length) return fontSize - 1;
    const height = font.heightAtSize(fontSize);
    const lineHeight = height + height * 0.2;
    const totalHeight = lineHeight * linesUsed;
    if (totalHeight > Math.abs(bounds.height)) return fontSize - 1;
    fontSize += 1;
  }
  return fontSize;
};
var computeCombedFontSize = (line, font, bounds, cellCount) => {
  const cellWidth = bounds.width / cellCount;
  const cellHeight = bounds.height;
  let fontSize = MIN_FONT_SIZE;
  const chars2 = charSplit(line);
  while (fontSize < MAX_FONT_SIZE) {
    for (let idx = 0, len = chars2.length; idx < len; idx++) {
      const c = chars2[idx];
      const tooLong = font.widthOfTextAtSize(c, fontSize) > cellWidth * 0.75;
      if (tooLong) return fontSize - 1;
    }
    const height = font.heightAtSize(fontSize, { descender: false });
    if (height > cellHeight) return fontSize - 1;
    fontSize += 1;
  }
  return fontSize;
};
var lastIndexOfWhitespace = (line) => {
  for (let idx = line.length; idx > 0; idx--) {
    if (/\s/.test(line[idx])) return idx;
  }
  return void 0;
};
var splitOutLines = (input, maxWidth, font, fontSize) => {
  let lastWhitespaceIdx = input.length;
  while (lastWhitespaceIdx > 0) {
    const line = input.substring(0, lastWhitespaceIdx);
    const encoded = font.encodeText(line);
    const width = font.widthOfTextAtSize(line, fontSize);
    if (width < maxWidth) {
      const remainder = input.substring(lastWhitespaceIdx) || void 0;
      return { line, encoded, width, remainder };
    }
    lastWhitespaceIdx = lastIndexOfWhitespace(line) ?? 0;
  }
  return {
    line: input,
    encoded: font.encodeText(input),
    width: font.widthOfTextAtSize(input, fontSize),
    remainder: void 0
  };
};
var layoutMultilineText = (text, { alignment, fontSize, font, bounds }) => {
  const lines = lineSplit(cleanText(text));
  if (fontSize === void 0 || fontSize === 0) {
    fontSize = computeFontSize(lines, font, bounds, true);
  }
  const height = font.heightAtSize(fontSize);
  const lineHeight = height + height * 0.2;
  const textLines = [];
  let minX = bounds.x;
  let minY = bounds.y;
  let maxX = bounds.x + bounds.width;
  let maxY = bounds.y + bounds.height;
  let y = bounds.y + bounds.height;
  for (let idx = 0, len = lines.length; idx < len; idx++) {
    let prevRemainder = lines[idx];
    while (prevRemainder !== void 0) {
      const { line, encoded, width, remainder } = splitOutLines(
        prevRemainder,
        bounds.width,
        font,
        fontSize
      );
      const x = alignment === 0 /* Left */ ? bounds.x : alignment === 1 /* Center */ ? bounds.x + bounds.width / 2 - width / 2 : alignment === 2 /* Right */ ? bounds.x + bounds.width - width : bounds.x;
      y -= lineHeight;
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x + width > maxX) maxX = x + width;
      if (y + height > maxY) maxY = y + height;
      textLines.push({ text: line, encoded, width, height, x, y });
      prevRemainder = remainder?.trim();
    }
  }
  return {
    fontSize,
    lineHeight,
    lines: textLines,
    bounds: {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    }
  };
};
var layoutCombedText = (text, { fontSize, font, bounds, cellCount }) => {
  const line = mergeLines(cleanText(text));
  if (line.length > cellCount) {
    throw new CombedTextLayoutError(line.length, cellCount);
  }
  if (fontSize === void 0 || fontSize === 0) {
    fontSize = computeCombedFontSize(line, font, bounds, cellCount);
  }
  const cellWidth = bounds.width / cellCount;
  const height = font.heightAtSize(fontSize, { descender: false });
  const y = bounds.y + (bounds.height / 2 - height / 2);
  const cells = [];
  let minX = bounds.x;
  let minY = bounds.y;
  let maxX = bounds.x + bounds.width;
  let maxY = bounds.y + bounds.height;
  let cellOffset = 0;
  let charOffset = 0;
  while (cellOffset < cellCount) {
    const [char, charLength] = charAtIndex(line, charOffset);
    const encoded = font.encodeText(char);
    const width = font.widthOfTextAtSize(char, fontSize);
    const cellCenter = bounds.x + (cellWidth * cellOffset + cellWidth / 2);
    const x = cellCenter - width / 2;
    if (x < minX) minX = x;
    if (y < minY) minY = y;
    if (x + width > maxX) maxX = x + width;
    if (y + height > maxY) maxY = y + height;
    cells.push({ text: line, encoded, width, height, x, y });
    cellOffset += 1;
    charOffset += charLength;
  }
  return {
    fontSize,
    cells,
    bounds: {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    }
  };
};
var layoutSinglelineText = (text, { alignment, fontSize, font, bounds }) => {
  const line = mergeLines(cleanText(text));
  if (fontSize === void 0 || fontSize === 0) {
    fontSize = computeFontSize([line], font, bounds);
  }
  const encoded = font.encodeText(line);
  const width = font.widthOfTextAtSize(line, fontSize);
  const height = font.heightAtSize(fontSize, { descender: false });
  const x = alignment === 0 /* Left */ ? bounds.x : alignment === 1 /* Center */ ? bounds.x + bounds.width / 2 - width / 2 : alignment === 2 /* Right */ ? bounds.x + bounds.width - width : bounds.x;
  const y = bounds.y + (bounds.height / 2 - height / 2);
  return {
    fontSize,
    line: { text: line, encoded, width, height, x, y },
    bounds: { x, y, width, height }
  };
};

// src/api/form/appearances.ts
var normalizeAppearance = (appearance) => {
  if (typeof appearance === "object" && appearance !== null && "normal" in appearance) {
    return appearance;
  }
  return { normal: appearance };
};
var tfRegex2 = /\/([^\0\t\n\f\r\ ]+)[\0\t\n\f\r\ ]+(\d*\.\d+|\d+)[\0\t\n\f\r\ ]+Tf/;
var getDefaultFontSize = (field) => {
  const da = field.getDefaultAppearance() ?? "";
  const daMatch = findLastMatch(da, tfRegex2).match ?? [];
  const defaultFontSize = Number(daMatch[2]);
  return isFinite(defaultFontSize) ? defaultFontSize : void 0;
};
var colorRegex = /(\d*\.\d+|\d+)[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]+(g|rg|k)/;
var getDefaultColor = (field) => {
  const da = field.getDefaultAppearance() ?? "";
  const daMatch = findLastMatch(da, colorRegex).match;
  const [, c1, c2, c3, c4, colorSpace] = daMatch ?? [];
  if (colorSpace === "g" && c1) {
    return grayscale(Number(c1));
  }
  if (colorSpace === "rg" && c1 && c2 && c3) {
    return rgb(Number(c1), Number(c2), Number(c3));
  }
  if (colorSpace === "k" && c1 && c2 && c3 && c4) {
    return cmyk(Number(c1), Number(c2), Number(c3), Number(c4));
  }
  return void 0;
};
var updateDefaultAppearance = (field, color, font, fontSize = 0) => {
  const da = [
    setFillingColor(color).toString(),
    setFontAndSize(font?.name ?? "dummy__noop", fontSize).toString()
  ].join("\n");
  field.setDefaultAppearance(da);
};
var defaultCheckBoxAppearanceProvider = (checkBox, widget) => {
  const widgetColor = getDefaultColor(widget);
  const fieldColor = getDefaultColor(checkBox.acroField);
  const rectangle2 = widget.getRectangle();
  const ap = widget.getAppearanceCharacteristics();
  const bs = widget.getBorderStyle();
  const borderWidth = bs?.getWidth() ?? 0;
  const rotation = reduceRotation(ap?.getRotation());
  const { width, height } = adjustDimsForRotation(rectangle2, rotation);
  const rotate = rotateInPlace({ ...rectangle2, rotation });
  const black = rgb(0, 0, 0);
  const borderColor = componentsToColor(ap?.getBorderColor()) ?? black;
  const normalBackgroundColor = componentsToColor(ap?.getBackgroundColor());
  const downBackgroundColor = componentsToColor(ap?.getBackgroundColor(), 0.8);
  const textColor = widgetColor ?? fieldColor ?? black;
  if (widgetColor) {
    updateDefaultAppearance(widget, textColor);
  } else {
    updateDefaultAppearance(checkBox.acroField, textColor);
  }
  const options = {
    x: 0 + borderWidth / 2,
    y: 0 + borderWidth / 2,
    width: width - borderWidth,
    height: height - borderWidth,
    thickness: 1.5,
    borderWidth,
    borderColor,
    markColor: textColor
  };
  return {
    normal: {
      on: [
        ...rotate,
        ...drawCheckBox({
          ...options,
          color: normalBackgroundColor,
          filled: true
        })
      ],
      off: [
        ...rotate,
        ...drawCheckBox({
          ...options,
          color: normalBackgroundColor,
          filled: false
        })
      ]
    },
    down: {
      on: [
        ...rotate,
        ...drawCheckBox({
          ...options,
          color: downBackgroundColor,
          filled: true
        })
      ],
      off: [
        ...rotate,
        ...drawCheckBox({
          ...options,
          color: downBackgroundColor,
          filled: false
        })
      ]
    }
  };
};
var defaultRadioGroupAppearanceProvider = (radioGroup, widget) => {
  const widgetColor = getDefaultColor(widget);
  const fieldColor = getDefaultColor(radioGroup.acroField);
  const rectangle2 = widget.getRectangle();
  const ap = widget.getAppearanceCharacteristics();
  const bs = widget.getBorderStyle();
  const borderWidth = bs?.getWidth() ?? 0;
  const rotation = reduceRotation(ap?.getRotation());
  const { width, height } = adjustDimsForRotation(rectangle2, rotation);
  const rotate = rotateInPlace({ ...rectangle2, rotation });
  const black = rgb(0, 0, 0);
  const borderColor = componentsToColor(ap?.getBorderColor()) ?? black;
  const normalBackgroundColor = componentsToColor(ap?.getBackgroundColor());
  const downBackgroundColor = componentsToColor(ap?.getBackgroundColor(), 0.8);
  const textColor = widgetColor ?? fieldColor ?? black;
  if (widgetColor) {
    updateDefaultAppearance(widget, textColor);
  } else {
    updateDefaultAppearance(radioGroup.acroField, textColor);
  }
  const options = {
    x: width / 2,
    y: height / 2,
    width: width - borderWidth,
    height: height - borderWidth,
    borderWidth,
    borderColor,
    dotColor: textColor
  };
  return {
    normal: {
      on: [
        ...rotate,
        ...drawRadioButton({
          ...options,
          color: normalBackgroundColor,
          filled: true
        })
      ],
      off: [
        ...rotate,
        ...drawRadioButton({
          ...options,
          color: normalBackgroundColor,
          filled: false
        })
      ]
    },
    down: {
      on: [
        ...rotate,
        ...drawRadioButton({
          ...options,
          color: downBackgroundColor,
          filled: true
        })
      ],
      off: [
        ...rotate,
        ...drawRadioButton({
          ...options,
          color: downBackgroundColor,
          filled: false
        })
      ]
    }
  };
};
var defaultButtonAppearanceProvider = (button, widget, font) => {
  const widgetColor = getDefaultColor(widget);
  const fieldColor = getDefaultColor(button.acroField);
  const widgetFontSize = getDefaultFontSize(widget);
  const fieldFontSize = getDefaultFontSize(button.acroField);
  const rectangle2 = widget.getRectangle();
  const ap = widget.getAppearanceCharacteristics();
  const bs = widget.getBorderStyle();
  const captions = ap?.getCaptions();
  const normalText = captions?.normal ?? "";
  const downText = captions?.down ?? normalText ?? "";
  const borderWidth = bs?.getWidth() ?? 0;
  const rotation = reduceRotation(ap?.getRotation());
  const { width, height } = adjustDimsForRotation(rectangle2, rotation);
  const rotate = rotateInPlace({ ...rectangle2, rotation });
  const black = rgb(0, 0, 0);
  const borderColor = componentsToColor(ap?.getBorderColor());
  const normalBackgroundColor = componentsToColor(ap?.getBackgroundColor());
  const downBackgroundColor = componentsToColor(ap?.getBackgroundColor(), 0.8);
  const bounds = {
    x: borderWidth,
    y: borderWidth,
    width: width - borderWidth * 2,
    height: height - borderWidth * 2
  };
  const normalLayout = layoutSinglelineText(normalText, {
    alignment: 1 /* Center */,
    fontSize: widgetFontSize ?? fieldFontSize,
    font,
    bounds
  });
  const downLayout = layoutSinglelineText(downText, {
    alignment: 1 /* Center */,
    fontSize: widgetFontSize ?? fieldFontSize,
    font,
    bounds
  });
  const fontSize = Math.min(normalLayout.fontSize, downLayout.fontSize);
  const textColor = widgetColor ?? fieldColor ?? black;
  if (widgetColor || widgetFontSize !== void 0) {
    updateDefaultAppearance(widget, textColor, font, fontSize);
  } else {
    updateDefaultAppearance(button.acroField, textColor, font, fontSize);
  }
  const options = {
    x: 0 + borderWidth / 2,
    y: 0 + borderWidth / 2,
    width: width - borderWidth,
    height: height - borderWidth,
    borderWidth,
    borderColor,
    textColor,
    font: font.name,
    fontSize
  };
  return {
    normal: [
      ...rotate,
      ...drawButton({
        ...options,
        color: normalBackgroundColor,
        textLines: [normalLayout.line]
      })
    ],
    down: [
      ...rotate,
      ...drawButton({
        ...options,
        color: downBackgroundColor,
        textLines: [downLayout.line]
      })
    ]
  };
};
var defaultTextFieldAppearanceProvider = (textField, widget, font) => {
  const widgetColor = getDefaultColor(widget);
  const fieldColor = getDefaultColor(textField.acroField);
  const widgetFontSize = getDefaultFontSize(widget);
  const fieldFontSize = getDefaultFontSize(textField.acroField);
  const rectangle2 = widget.getRectangle();
  const ap = widget.getAppearanceCharacteristics();
  const bs = widget.getBorderStyle();
  const text = textField.getText() ?? "";
  const borderWidth = bs?.getWidth() ?? 0;
  const rotation = reduceRotation(ap?.getRotation());
  const { width, height } = adjustDimsForRotation(rectangle2, rotation);
  const rotate = rotateInPlace({ ...rectangle2, rotation });
  const black = rgb(0, 0, 0);
  const borderColor = componentsToColor(ap?.getBorderColor());
  const normalBackgroundColor = componentsToColor(ap?.getBackgroundColor());
  let textLines;
  let fontSize;
  const padding = textField.isCombed() ? 0 : 1;
  const bounds = {
    x: borderWidth + padding,
    y: borderWidth + padding,
    width: width - (borderWidth + padding) * 2,
    height: height - (borderWidth + padding) * 2
  };
  if (textField.isMultiline()) {
    const layout = layoutMultilineText(text, {
      alignment: textField.getAlignment(),
      fontSize: widgetFontSize ?? fieldFontSize,
      font,
      bounds
    });
    textLines = layout.lines;
    fontSize = layout.fontSize;
  } else if (textField.isCombed()) {
    const layout = layoutCombedText(text, {
      fontSize: widgetFontSize ?? fieldFontSize,
      font,
      bounds,
      cellCount: textField.getMaxLength() ?? 0
    });
    textLines = layout.cells;
    fontSize = layout.fontSize;
  } else {
    const layout = layoutSinglelineText(text, {
      alignment: textField.getAlignment(),
      fontSize: widgetFontSize ?? fieldFontSize,
      font,
      bounds
    });
    textLines = [layout.line];
    fontSize = layout.fontSize;
  }
  const textColor = widgetColor ?? fieldColor ?? black;
  if (widgetColor || widgetFontSize !== void 0) {
    updateDefaultAppearance(widget, textColor, font, fontSize);
  } else {
    updateDefaultAppearance(textField.acroField, textColor, font, fontSize);
  }
  const options = {
    x: 0 + borderWidth / 2,
    y: 0 + borderWidth / 2,
    width: width - borderWidth,
    height: height - borderWidth,
    borderWidth: borderWidth ?? 0,
    borderColor,
    textColor,
    font: font.name,
    fontSize,
    color: normalBackgroundColor,
    textLines,
    padding
  };
  return [...rotate, ...drawTextField(options)];
};
var defaultDropdownAppearanceProvider = (dropdown, widget, font) => {
  const widgetColor = getDefaultColor(widget);
  const fieldColor = getDefaultColor(dropdown.acroField);
  const widgetFontSize = getDefaultFontSize(widget);
  const fieldFontSize = getDefaultFontSize(dropdown.acroField);
  const rectangle2 = widget.getRectangle();
  const ap = widget.getAppearanceCharacteristics();
  const bs = widget.getBorderStyle();
  const text = dropdown.getSelected()[0] ?? "";
  const borderWidth = bs?.getWidth() ?? 0;
  const rotation = reduceRotation(ap?.getRotation());
  const { width, height } = adjustDimsForRotation(rectangle2, rotation);
  const rotate = rotateInPlace({ ...rectangle2, rotation });
  const black = rgb(0, 0, 0);
  const borderColor = componentsToColor(ap?.getBorderColor());
  const normalBackgroundColor = componentsToColor(ap?.getBackgroundColor());
  const padding = 1;
  const bounds = {
    x: borderWidth + padding,
    y: borderWidth + padding,
    width: width - (borderWidth + padding) * 2,
    height: height - (borderWidth + padding) * 2
  };
  const { line, fontSize } = layoutSinglelineText(text, {
    alignment: 0 /* Left */,
    fontSize: widgetFontSize ?? fieldFontSize,
    font,
    bounds
  });
  const textColor = widgetColor ?? fieldColor ?? black;
  if (widgetColor || widgetFontSize !== void 0) {
    updateDefaultAppearance(widget, textColor, font, fontSize);
  } else {
    updateDefaultAppearance(dropdown.acroField, textColor, font, fontSize);
  }
  const options = {
    x: 0 + borderWidth / 2,
    y: 0 + borderWidth / 2,
    width: width - borderWidth,
    height: height - borderWidth,
    borderWidth: borderWidth ?? 0,
    borderColor,
    textColor,
    font: font.name,
    fontSize,
    color: normalBackgroundColor,
    textLines: [line],
    padding
  };
  return [...rotate, ...drawTextField(options)];
};
var defaultOptionListAppearanceProvider = (optionList, widget, font) => {
  const widgetColor = getDefaultColor(widget);
  const fieldColor = getDefaultColor(optionList.acroField);
  const widgetFontSize = getDefaultFontSize(widget);
  const fieldFontSize = getDefaultFontSize(optionList.acroField);
  const rectangle2 = widget.getRectangle();
  const ap = widget.getAppearanceCharacteristics();
  const bs = widget.getBorderStyle();
  const borderWidth = bs?.getWidth() ?? 0;
  const rotation = reduceRotation(ap?.getRotation());
  const { width, height } = adjustDimsForRotation(rectangle2, rotation);
  const rotate = rotateInPlace({ ...rectangle2, rotation });
  const black = rgb(0, 0, 0);
  const borderColor = componentsToColor(ap?.getBorderColor());
  const normalBackgroundColor = componentsToColor(ap?.getBackgroundColor());
  const options = optionList.getOptions();
  const selected = optionList.getSelected();
  if (optionList.isSorted()) options.sort();
  let text = "";
  for (let idx = 0, len = options.length; idx < len; idx++) {
    text += options[idx];
    if (idx < len - 1) text += "\n";
  }
  const padding = 1;
  const bounds = {
    x: borderWidth + padding,
    y: borderWidth + padding,
    width: width - (borderWidth + padding) * 2,
    height: height - (borderWidth + padding) * 2
  };
  const { lines, fontSize, lineHeight } = layoutMultilineText(text, {
    alignment: 0 /* Left */,
    fontSize: widgetFontSize ?? fieldFontSize,
    font,
    bounds
  });
  const selectedLines = [];
  for (let idx = 0, len = lines.length; idx < len; idx++) {
    const line = lines[idx];
    if (selected.includes(line.text)) selectedLines.push(idx);
  }
  const blue = rgb(153 / 255, 193 / 255, 218 / 255);
  const textColor = widgetColor ?? fieldColor ?? black;
  if (widgetColor || widgetFontSize !== void 0) {
    updateDefaultAppearance(widget, textColor, font, fontSize);
  } else {
    updateDefaultAppearance(optionList.acroField, textColor, font, fontSize);
  }
  return [
    ...rotate,
    ...drawOptionList({
      x: 0 + borderWidth / 2,
      y: 0 + borderWidth / 2,
      width: width - borderWidth,
      height: height - borderWidth,
      borderWidth: borderWidth ?? 0,
      borderColor,
      textColor,
      font: font.name,
      fontSize,
      color: normalBackgroundColor,
      textLines: lines,
      lineHeight,
      selectedColor: blue,
      selectedLines,
      padding
    })
  ];
};

// src/api/PDFEmbeddedPage.ts
var _PDFEmbeddedPage = class _PDFEmbeddedPage {
  constructor(ref, doc, embedder) {
    /** The unique reference assigned to this embedded page within the document. */
    __publicField(this, "ref");
    /** The document to which this embedded page belongs. */
    __publicField(this, "doc");
    /** The width of this page in pixels. */
    __publicField(this, "width");
    /** The height of this page in pixels. */
    __publicField(this, "height");
    __publicField(this, "alreadyEmbedded", false);
    __publicField(this, "embedder");
    assertIs(ref, "ref", [[PDFRef_default, "PDFRef"]]);
    assertIs(doc, "doc", [[PDFDocument, "PDFDocument"]]);
    assertIs(embedder, "embedder", [[PDFPageEmbedder_default, "PDFPageEmbedder"]]);
    this.ref = ref;
    this.doc = doc;
    this.width = embedder.width;
    this.height = embedder.height;
    this.embedder = embedder;
  }
  /**
   * Compute the width and height of this page after being scaled by the
   * given `factor`. For example:
   * ```js
   * embeddedPage.width  // => 500
   * embeddedPage.height // => 250
   *
   * const scaled = embeddedPage.scale(0.5)
   * scaled.width  // => 250
   * scaled.height // => 125
   * ```
   * This operation is often useful before drawing a page with
   * [[PDFPage.drawPage]] to compute the `width` and `height` options.
   * @param factor The factor by which this page should be scaled.
   * @returns The width and height of the page after being scaled.
   */
  scale(factor) {
    assertIs(factor, "factor", ["number"]);
    return { width: this.width * factor, height: this.height * factor };
  }
  /**
   * Get the width and height of this page. For example:
   * ```js
   * const { width, height } = embeddedPage.size()
   * ```
   * @returns The width and height of the page.
   */
  size() {
    return this.scale(1);
  }
  /**
   * > **NOTE:** You probably don't need to call this method directly. The
   * > [[PDFDocument.save]] and [[PDFDocument.saveAsBase64]] methods will
   * > automatically ensure all embeddable pages get embedded.
   *
   * Embed this embeddable page in its document.
   *
   * @returns Resolves when the embedding is complete.
   */
  async embed() {
    if (!this.alreadyEmbedded) {
      await this.embedder.embedIntoContext(this.doc.context, this.ref);
      this.alreadyEmbedded = true;
    }
  }
};
/**
 * > **NOTE:** You probably don't want to call this method directly. Instead,
 * > consider using the [[PDFDocument.embedPdf]] and
 * > [[PDFDocument.embedPage]] methods, which will create instances of
 * > [[PDFEmbeddedPage]] for you.
 *
 * Create an instance of [[PDFEmbeddedPage]] from an existing ref and embedder
 *
 * @param ref The unique reference for this embedded page.
 * @param doc The document to which the embedded page will belong.
 * @param embedder The embedder that will be used to embed the page.
 */
__publicField(_PDFEmbeddedPage, "of", (ref, doc, embedder) => new _PDFEmbeddedPage(ref, doc, embedder));
var PDFEmbeddedPage = _PDFEmbeddedPage;

// src/api/PDFFont.ts
var _PDFFont = class _PDFFont {
  constructor(ref, doc, embedder) {
    /** The unique reference assigned to this font within the document. */
    __publicField(this, "ref");
    /** The document to which this font belongs. */
    __publicField(this, "doc");
    /** The name of this font. */
    __publicField(this, "name");
    __publicField(this, "modified", true);
    __publicField(this, "embedder");
    assertIs(ref, "ref", [[PDFRef_default, "PDFRef"]]);
    assertIs(doc, "doc", [[PDFDocument, "PDFDocument"]]);
    assertIs(embedder, "embedder", [
      [CustomFontEmbedder_default, "CustomFontEmbedder"],
      [StandardFontEmbedder_default, "StandardFontEmbedder"]
    ]);
    this.ref = ref;
    this.doc = doc;
    this.name = embedder.fontName;
    this.embedder = embedder;
  }
  /**
   * > **NOTE:** You probably don't need to call this method directly. The
   * > [[PDFPage.drawText]] method will automatically encode the text it is
   * > given.
   *
   * Encodes a string of text in this font.
   *
   * @param text The text to be encoded.
   * @returns The encoded text as a hex string.
   */
  encodeText(text) {
    assertIs(text, "text", ["string"]);
    this.modified = true;
    return this.embedder.encodeText(text);
  }
  /**
   * Measure the width of a string of text drawn in this font at a given size.
   * For example:
   * ```js
   * const width = font.widthOfTextAtSize('Foo Bar Qux Baz', 36)
   * ```
   * @param text The string of text to be measured.
   * @param size The font size to be used for this measurement.
   * @returns The width of the string of text when drawn in this font at the
   *          given size.
   */
  widthOfTextAtSize(text, size) {
    assertIs(text, "text", ["string"]);
    assertIs(size, "size", ["number"]);
    return this.embedder.widthOfTextAtSize(text, size);
  }
  /**
   * Measure the height of this font at a given size. For example:
   * ```js
   * const height = font.heightAtSize(24)
   * ```
   *
   * The `options.descender` value controls whether or not the font's
   * descender is included in the height calculation.
   *
   * @param size The font size to be used for this measurement.
   * @param options The options to be used when computing this measurement.
   * @returns The height of this font at the given size.
   */
  heightAtSize(size, options) {
    assertIs(size, "size", ["number"]);
    assertOrUndefined(options?.descender, "options.descender", ["boolean"]);
    return this.embedder.heightOfFontAtSize(size, {
      descender: options?.descender ?? true
    });
  }
  /**
   * Compute the font size at which this font is a given height. For example:
   * ```js
   * const fontSize = font.sizeAtHeight(12)
   * ```
   * @param height The height to be used for this calculation.
   * @returns The font size at which this font is the given height.
   */
  sizeAtHeight(height) {
    assertIs(height, "height", ["number"]);
    return this.embedder.sizeOfFontAtHeight(height);
  }
  /**
   * Get the set of unicode code points that can be represented by this font.
   * @returns The set of unicode code points supported by this font.
   */
  getCharacterSet() {
    if (this.embedder instanceof StandardFontEmbedder_default) {
      return this.embedder.encoding.supportedCodePoints;
    } else {
      return this.embedder.font.characterSet;
    }
  }
  /**
   * > **NOTE:** You probably don't need to call this method directly. The
   * > [[PDFDocument.save]] and [[PDFDocument.saveAsBase64]] methods will
   * > automatically ensure all fonts get embedded.
   *
   * Embed this font in its document.
   *
   * @returns Resolves when the embedding is complete.
   */
  async embed() {
    if (this.modified) {
      await this.embedder.embedIntoContext(this.doc.context, this.ref);
      this.modified = false;
    }
  }
};
/**
 * > **NOTE:** You probably don't want to call this method directly. Instead,
 * > consider using the [[PDFDocument.embedFont]] and
 * > [[PDFDocument.embedStandardFont]] methods, which will create instances
 * > of [[PDFFont]] for you.
 *
 * Create an instance of [[PDFFont]] from an existing ref and embedder
 *
 * @param ref The unique reference for this font.
 * @param doc The document to which the font will belong.
 * @param embedder The embedder that will be used to embed the font.
 */
__publicField(_PDFFont, "of", (ref, doc, embedder) => new _PDFFont(ref, doc, embedder));
var PDFFont = _PDFFont;

// src/api/PDFImage.ts
var _PDFImage = class _PDFImage {
  constructor(ref, doc, embedder) {
    /** The unique reference assigned to this image within the document. */
    __publicField(this, "ref");
    /** The document to which this image belongs. */
    __publicField(this, "doc");
    /** The width of this image in pixels. */
    __publicField(this, "width");
    /** The height of this image in pixels. */
    __publicField(this, "height");
    __publicField(this, "embedder");
    __publicField(this, "embedTask");
    assertIs(ref, "ref", [[PDFRef_default, "PDFRef"]]);
    assertIs(doc, "doc", [[PDFDocument, "PDFDocument"]]);
    assertIs(embedder, "embedder", [
      [JpegEmbedder_default, "JpegEmbedder"],
      [PngEmbedder_default, "PngEmbedder"]
    ]);
    this.ref = ref;
    this.doc = doc;
    this.width = embedder.width;
    this.height = embedder.height;
    this.embedder = embedder;
  }
  /**
   * Compute the width and height of this image after being scaled by the
   * given `factor`. For example:
   * ```js
   * image.width  // => 500
   * image.height // => 250
   *
   * const scaled = image.scale(0.5)
   * scaled.width  // => 250
   * scaled.height // => 125
   * ```
   * This operation is often useful before drawing an image with
   * [[PDFPage.drawImage]] to compute the `width` and `height` options.
   * @param factor The factor by which this image should be scaled.
   * @returns The width and height of the image after being scaled.
   */
  scale(factor) {
    assertIs(factor, "factor", ["number"]);
    return { width: this.width * factor, height: this.height * factor };
  }
  /**
   * Get the width and height of this image after scaling it as large as
   * possible while maintaining its aspect ratio and not exceeding the
   * specified `width` and `height`. For example:
   * ```
   * image.width  // => 500
   * image.height // => 250
   *
   * const scaled = image.scaleToFit(750, 1000)
   * scaled.width  // => 750
   * scaled.height // => 375
   * ```
   * The `width` and `height` parameters can also be thought of as the width
   * and height of a box that the scaled image must fit within.
   * @param width The bounding box's width.
   * @param height The bounding box's height.
   * @returns The width and height of the image after being scaled.
   */
  scaleToFit(width, height) {
    assertIs(width, "width", ["number"]);
    assertIs(height, "height", ["number"]);
    const imgWidthScale = width / this.width;
    const imgHeightScale = height / this.height;
    const scale2 = Math.min(imgWidthScale, imgHeightScale);
    return this.scale(scale2);
  }
  /**
   * Get the width and height of this image. For example:
   * ```js
   * const { width, height } = image.size()
   * ```
   * @returns The width and height of the image.
   */
  size() {
    return this.scale(1);
  }
  /**
   * > **NOTE:** You probably don't need to call this method directly. The
   * > [[PDFDocument.save]] and [[PDFDocument.saveAsBase64]] methods will
   * > automatically ensure all images get embedded.
   *
   * Embed this image in its document.
   *
   * @returns Resolves when the embedding is complete.
   */
  async embed() {
    if (!this.embedder) return;
    if (!this.embedTask) {
      const { doc, ref } = this;
      this.embedTask = this.embedder.embedIntoContext(doc.context, ref);
    }
    await this.embedTask;
    this.embedder = void 0;
  }
};
/**
 * > **NOTE:** You probably don't want to call this method directly. Instead,
 * > consider using the [[PDFDocument.embedPng]] and [[PDFDocument.embedJpg]]
 * > methods, which will create instances of [[PDFImage]] for you.
 *
 * Create an instance of [[PDFImage]] from an existing ref and embedder
 *
 * @param ref The unique reference for this image.
 * @param doc The document to which the image will belong.
 * @param embedder The embedder that will be used to embed the image.
 */
__publicField(_PDFImage, "of", (ref, doc, embedder) => new _PDFImage(ref, doc, embedder));
var PDFImage = _PDFImage;

// src/api/image/alignment.ts
var ImageAlignment = /* @__PURE__ */ ((ImageAlignment2) => {
  ImageAlignment2[ImageAlignment2["Left"] = 0] = "Left";
  ImageAlignment2[ImageAlignment2["Center"] = 1] = "Center";
  ImageAlignment2[ImageAlignment2["Right"] = 2] = "Right";
  return ImageAlignment2;
})(ImageAlignment || {});

// src/api/form/PDFField.ts
var assertFieldAppearanceOptions = (options) => {
  assertOrUndefined(options?.x, "options.x", ["number"]);
  assertOrUndefined(options?.y, "options.y", ["number"]);
  assertOrUndefined(options?.width, "options.width", ["number"]);
  assertOrUndefined(options?.height, "options.height", ["number"]);
  assertOrUndefined(options?.textColor, "options.textColor", [
    [Object, "Color"]
  ]);
  assertOrUndefined(options?.backgroundColor, "options.backgroundColor", [
    [Object, "Color"]
  ]);
  assertOrUndefined(options?.borderColor, "options.borderColor", [
    [Object, "Color"]
  ]);
  assertOrUndefined(options?.borderWidth, "options.borderWidth", ["number"]);
  assertOrUndefined(options?.rotate, "options.rotate", [[Object, "Rotation"]]);
};
var PDFField = class {
  constructor(acroField, ref, doc) {
    /** The low-level PDFAcroTerminal wrapped by this field. */
    __publicField(this, "acroField");
    /** The unique reference assigned to this field within the document. */
    __publicField(this, "ref");
    /** The document to which this field belongs. */
    __publicField(this, "doc");
    assertIs(acroField, "acroField", [[PDFAcroTerminal_default, "PDFAcroTerminal"]]);
    assertIs(ref, "ref", [[PDFRef_default, "PDFRef"]]);
    assertIs(doc, "doc", [[PDFDocument, "PDFDocument"]]);
    this.acroField = acroField;
    this.ref = ref;
    this.doc = doc;
  }
  /**
   * Get the fully qualified name of this field. For example:
   * ```js
   * const fields = form.getFields()
   * fields.forEach(field => {
   *   const name = field.getName()
   *   console.log('Field name:', name)
   * })
   * ```
   * Note that PDF fields are structured as a tree. Each field is the
   * descendent of a series of ancestor nodes all the way up to the form node,
   * which is always the root of the tree. Each node in the tree (except for
   * the form node) has a partial name. Partial names can be composed of any
   * unicode characters except a period (`.`). The fully qualified name of a
   * field is composed of the partial names of all its ancestors joined
   * with periods. This means that splitting the fully qualified name on
   * periods and taking the last element of the resulting array will give you
   * the partial name of a specific field.
   * @returns The fully qualified name of this field.
   */
  getName() {
    return this.acroField.getFullyQualifiedName() ?? "";
  }
  /**
   * Returns `true` if this field is read only. This means that PDF readers
   * will not allow users to interact with the field or change its value. See
   * [[PDFField.enableReadOnly]] and [[PDFField.disableReadOnly]].
   * For example:
   * ```js
   * const field = form.getField('some.field')
   * if (field.isReadOnly()) console.log('Read only is enabled')
   * ```
   * @returns Whether or not this is a read only field.
   */
  isReadOnly() {
    return this.acroField.hasFlag(AcroFieldFlags.ReadOnly);
  }
  /**
   * Prevent PDF readers from allowing users to interact with this field or
   * change its value. The field will not respond to mouse or keyboard input.
   * For example:
   * ```js
   * const field = form.getField('some.field')
   * field.enableReadOnly()
   * ```
   * Useful for fields whose values are computed, imported from a database, or
   * prefilled by software before being displayed to the user.
   */
  enableReadOnly() {
    this.acroField.setFlagTo(AcroFieldFlags.ReadOnly, true);
  }
  /**
   * Allow users to interact with this field and change its value in PDF
   * readers via mouse and keyboard input. For example:
   * ```js
   * const field = form.getField('some.field')
   * field.disableReadOnly()
   * ```
   */
  disableReadOnly() {
    this.acroField.setFlagTo(AcroFieldFlags.ReadOnly, false);
  }
  /**
   * Returns `true` if this field must have a value when the form is submitted.
   * See [[PDFField.enableRequired]] and [[PDFField.disableRequired]].
   * For example:
   * ```js
   * const field = form.getField('some.field')
   * if (field.isRequired()) console.log('Field is required')
   * ```
   * @returns Whether or not this field is required.
   */
  isRequired() {
    return this.acroField.hasFlag(AcroFieldFlags.Required);
  }
  /**
   * Require this field to have a value when the form is submitted.
   * For example:
   * ```js
   * const field = form.getField('some.field')
   * field.enableRequired()
   * ```
   */
  enableRequired() {
    this.acroField.setFlagTo(AcroFieldFlags.Required, true);
  }
  /**
   * Do not require this field to have a value when the form is submitted.
   * For example:
   * ```js
   * const field = form.getField('some.field')
   * field.disableRequired()
   * ```
   */
  disableRequired() {
    this.acroField.setFlagTo(AcroFieldFlags.Required, false);
  }
  /**
   * Returns `true` if this field's value should be exported when the form is
   * submitted. See [[PDFField.enableExporting]] and
   * [[PDFField.disableExporting]].
   * For example:
   * ```js
   * const field = form.getField('some.field')
   * if (field.isExported()) console.log('Exporting is enabled')
   * ```
   * @returns Whether or not this field's value should be exported.
   */
  isExported() {
    return !this.acroField.hasFlag(AcroFieldFlags.NoExport);
  }
  /**
   * Indicate that this field's value should be exported when the form is
   * submitted in a PDF reader. For example:
   * ```js
   * const field = form.getField('some.field')
   * field.enableExporting()
   * ```
   */
  enableExporting() {
    this.acroField.setFlagTo(AcroFieldFlags.NoExport, false);
  }
  /**
   * Indicate that this field's value should **not** be exported when the form
   * is submitted in a PDF reader. For example:
   * ```js
   * const field = form.getField('some.field')
   * field.disableExporting()
   * ```
   */
  disableExporting() {
    this.acroField.setFlagTo(AcroFieldFlags.NoExport, true);
  }
  /** @ignore */
  needsAppearancesUpdate() {
    throw new MethodNotImplementedError(
      this.constructor.name,
      "needsAppearancesUpdate"
    );
  }
  /** @ignore */
  defaultUpdateAppearances(_font) {
    throw new MethodNotImplementedError(
      this.constructor.name,
      "defaultUpdateAppearances"
    );
  }
  markAsDirty() {
    this.doc.getForm().markFieldAsDirty(this.ref);
  }
  markAsClean() {
    this.doc.getForm().markFieldAsClean(this.ref);
  }
  isDirty() {
    return this.doc.getForm().fieldIsDirty(this.ref);
  }
  createWidget(options) {
    const textColor = options.textColor;
    const backgroundColor = options.backgroundColor;
    const borderColor = options.borderColor;
    const borderWidth = options.borderWidth;
    const degreesAngle = toDegrees(options.rotate);
    const caption = options.caption;
    const x = options.x;
    const y = options.y;
    const width = options.width + borderWidth;
    const height = options.height + borderWidth;
    const hidden = Boolean(options.hidden);
    const pageRef = options.page;
    assertMultiple(degreesAngle, "degreesAngle", 90);
    const widget = PDFWidgetAnnotation_default.create(this.doc.context, this.ref);
    const rect = rotateRectangle(
      { x, y, width, height },
      borderWidth,
      degreesAngle
    );
    widget.setRectangle(rect);
    if (pageRef) widget.setP(pageRef);
    const ac = widget.getOrCreateAppearanceCharacteristics();
    if (backgroundColor) {
      ac.setBackgroundColor(colorToComponents(backgroundColor));
    }
    ac.setRotation(degreesAngle);
    if (caption) ac.setCaptions({ normal: caption });
    if (borderColor) ac.setBorderColor(colorToComponents(borderColor));
    const bs = widget.getOrCreateBorderStyle();
    if (borderWidth !== void 0) bs.setWidth(borderWidth);
    widget.setFlagTo(AnnotationFlags.Print, true);
    widget.setFlagTo(AnnotationFlags.Hidden, hidden);
    widget.setFlagTo(AnnotationFlags.Invisible, false);
    if (textColor) {
      const da = this.acroField.getDefaultAppearance() ?? "";
      const newDa = da + "\n" + setFillingColor(textColor).toString();
      this.acroField.setDefaultAppearance(newDa);
    }
    return widget;
  }
  updateWidgetAppearanceWithFont(widget, font, { normal, rollover, down }) {
    this.updateWidgetAppearances(widget, {
      normal: this.createAppearanceStream(widget, normal, font),
      rollover: rollover && this.createAppearanceStream(widget, rollover, font),
      down: down && this.createAppearanceStream(widget, down, font)
    });
  }
  updateOnOffWidgetAppearance(widget, onValue, {
    normal,
    rollover,
    down
  }) {
    this.updateWidgetAppearances(widget, {
      normal: this.createAppearanceDict(widget, normal, onValue),
      rollover: rollover && this.createAppearanceDict(widget, rollover, onValue),
      down: down && this.createAppearanceDict(widget, down, onValue)
    });
  }
  updateWidgetAppearances(widget, { normal, rollover, down }) {
    widget.setNormalAppearance(normal);
    if (rollover) {
      widget.setRolloverAppearance(rollover);
    } else {
      widget.removeRolloverAppearance();
    }
    if (down) {
      widget.setDownAppearance(down);
    } else {
      widget.removeDownAppearance();
    }
  }
  // // TODO: Do we need to do this...?
  // private foo(font: PDFFont, dict: PDFDict) {
  //   if (!dict.lookup(PDFName.of('DR'))) {
  //     dict.set(PDFName.of('DR'), dict.context.obj({}));
  //   }
  //   const DR = dict.lookup(PDFName.of('DR'), PDFDict);
  //   if (!DR.lookup(PDFName.of('Font'))) {
  //     DR.set(PDFName.of('Font'), dict.context.obj({}));
  //   }
  //   const Font = DR.lookup(PDFName.of('Font'), PDFDict);
  //   Font.set(PDFName.of(font.name), font.ref);
  // }
  createAppearanceStream(widget, appearance, font) {
    const { context } = this.acroField.dict;
    const { width, height } = widget.getRectangle();
    const Resources = font && { Font: { [font.name]: font.ref } };
    const stream2 = context.formXObject(appearance, {
      Resources,
      BBox: context.obj([0, 0, width, height]),
      Matrix: context.obj([1, 0, 0, 1, 0, 0])
    });
    const streamRef = context.register(stream2);
    return streamRef;
  }
  /**
   * Create a FormXObject of the supplied image and add it to context.
   * The FormXObject size is calculated based on the widget (including
   * the alignment).
   * @param widget The widget that should display the image.
   * @param alignment The alignment of the image.
   * @param image The image that should be displayed.
   * @returns The ref for the FormXObject that was added to the context.
   */
  createImageAppearanceStream(widget, image, alignment) {
    const { context } = this.acroField.dict;
    const rectangle2 = widget.getRectangle();
    const ap = widget.getAppearanceCharacteristics();
    const bs = widget.getBorderStyle();
    const borderWidth = bs?.getWidth() ?? 0;
    const rotation = reduceRotation(ap?.getRotation());
    const rotate = rotateInPlace({ ...rectangle2, rotation });
    const adj = adjustDimsForRotation(rectangle2, rotation);
    const imageDims = image.scaleToFit(
      adj.width - borderWidth * 2,
      adj.height - borderWidth * 2
    );
    const options = {
      x: borderWidth,
      y: borderWidth,
      width: imageDims.width,
      height: imageDims.height,
      //
      rotate: degrees(0),
      xSkew: degrees(0),
      ySkew: degrees(0)
    };
    if (alignment === 1 /* Center */) {
      options.x += (adj.width - borderWidth * 2) / 2 - imageDims.width / 2;
      options.y += (adj.height - borderWidth * 2) / 2 - imageDims.height / 2;
    } else if (alignment === 2 /* Right */) {
      options.x = adj.width - borderWidth - imageDims.width;
      options.y = adj.height - borderWidth - imageDims.height;
    }
    const imageName = this.doc.context.addRandomSuffix("Image", 10);
    const appearance = [...rotate, ...drawImage(imageName, options)];
    const Resources = { XObject: { [imageName]: image.ref } };
    const stream2 = context.formXObject(appearance, {
      Resources,
      BBox: context.obj([0, 0, rectangle2.width, rectangle2.height]),
      Matrix: context.obj([1, 0, 0, 1, 0, 0])
    });
    return context.register(stream2);
  }
  createAppearanceDict(widget, appearance, onValue) {
    const { context } = this.acroField.dict;
    const onStreamRef = this.createAppearanceStream(widget, appearance.on);
    const offStreamRef = this.createAppearanceStream(widget, appearance.off);
    const appearanceDict = context.obj({});
    appearanceDict.set(onValue, onStreamRef);
    appearanceDict.set(PDFName_default.of("Off"), offStreamRef);
    return appearanceDict;
  }
};

// src/api/form/PDFCheckBox.ts
var _PDFCheckBox = class _PDFCheckBox extends PDFField {
  constructor(acroCheckBox, ref, doc) {
    super(acroCheckBox, ref, doc);
    /** The low-level PDFAcroCheckBox wrapped by this check box. */
    __publicField(this, "acroField");
    assertIs(acroCheckBox, "acroCheckBox", [
      [PDFAcroCheckBox_default, "PDFAcroCheckBox"]
    ]);
    this.acroField = acroCheckBox;
  }
  /**
   * Mark this check box. This operation is analogous to a human user clicking
   * a check box to fill it in a PDF reader. This method will update the
   * underlying state of the check box field to indicate it has been selected.
   * PDF libraries and readers will be able to extract this value from the
   * saved document and determine that it was selected.
   *
   * For example:
   * ```js
   * const checkBox = form.getCheckBox('some.checkBox.field')
   * checkBox.check()
   * ```
   *
   * This method will mark this check box as dirty, causing its appearance
   * streams to be updated when either [[PDFDocument.save]] or
   * [[PDFForm.updateFieldAppearances]] is called. The updated appearance
   * streams will display a check mark inside the widgets of this check box
   * field.
   */
  check() {
    const onValue = this.acroField.getOnValue() ?? PDFName_default.of("Yes");
    this.markAsDirty();
    this.acroField.setValue(onValue);
  }
  /**
   * Clears this check box. This operation is analogous to a human user clicking
   * a check box to unmark it in a PDF reader. This method will update the
   * underlying state of the check box field to indicate it has been deselected.
   * PDF libraries and readers will be able to extract this value from the
   * saved document and determine that it was not selected.
   *
   * For example:
   * ```js
   * const checkBox = form.getCheckBox('some.checkBox.field')
   * checkBox.uncheck()
   * ```
   *
   * This method will mark this check box as dirty. See [[PDFCheckBox.check]]
   * for more details about what this means.
   */
  uncheck() {
    this.markAsDirty();
    this.acroField.setValue(PDFName_default.of("Off"));
  }
  /**
   * Returns `true` if this check box is selected (either by a human user via
   * a PDF reader, or else programmatically via software). For example:
   * ```js
   * const checkBox = form.getCheckBox('some.checkBox.field')
   * if (checkBox.isChecked()) console.log('check box is selected')
   * ```
   * @returns Whether or not this check box is selected.
   */
  isChecked() {
    const onValue = this.acroField.getOnValue();
    return !!onValue && onValue === this.acroField.getValue();
  }
  /**
   * Show this check box on the specified page. For example:
   * ```js
   * const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
   * const page = pdfDoc.addPage()
   *
   * const form = pdfDoc.getForm()
   * const checkBox = form.createCheckBox('some.checkBox.field')
   *
   * checkBox.addToPage(page, {
   *   x: 50,
   *   y: 75,
   *   width: 25,
   *   height: 25,
   *   textColor: rgb(1, 0, 0),
   *   backgroundColor: rgb(0, 1, 0),
   *   borderColor: rgb(0, 0, 1),
   *   borderWidth: 2,
   *   rotate: degrees(90),
   * })
   * ```
   * This will create a new widget for this check box field.
   * @param page The page to which this check box widget should be added.
   * @param options The options to be used when adding this check box widget.
   */
  addToPage(page, options) {
    assertIs(page, "page", [[PDFPage, "PDFPage"]]);
    assertFieldAppearanceOptions(options);
    if (!options) options = {};
    if (!("textColor" in options)) options.textColor = rgb(0, 0, 0);
    if (!("backgroundColor" in options)) options.backgroundColor = rgb(1, 1, 1);
    if (!("borderColor" in options)) options.borderColor = rgb(0, 0, 0);
    if (!("borderWidth" in options)) options.borderWidth = 1;
    const widget = this.createWidget({
      x: options.x ?? 0,
      y: options.y ?? 0,
      width: options.width ?? 50,
      height: options.height ?? 50,
      textColor: options.textColor,
      backgroundColor: options.backgroundColor,
      borderColor: options.borderColor,
      borderWidth: options.borderWidth ?? 0,
      rotate: options.rotate ?? degrees(0),
      hidden: options.hidden,
      page: page.ref
    });
    const widgetRef = this.doc.context.register(widget.dict);
    this.acroField.addWidget(widgetRef);
    widget.setAppearanceState(PDFName_default.of("Off"));
    this.updateWidgetAppearance(widget, PDFName_default.of("Yes"));
    page.node.addAnnot(widgetRef);
  }
  /**
   * Returns `true` if any of this check box's widgets do not have an
   * appearance stream for its current state. For example:
   * ```js
   * const checkBox = form.getCheckBox('some.checkBox.field')
   * if (checkBox.needsAppearancesUpdate()) console.log('Needs update')
   * ```
   * @returns Whether or not this check box needs an appearance update.
   */
  needsAppearancesUpdate() {
    const widgets = this.acroField.getWidgets();
    for (let idx = 0, len = widgets.length; idx < len; idx++) {
      const widget = widgets[idx];
      const state = widget.getAppearanceState();
      const normal = widget.getAppearances()?.normal;
      if (!(normal instanceof PDFDict_default)) return true;
      if (state && !normal.has(state)) return true;
    }
    return false;
  }
  /**
   * Update the appearance streams for each of this check box's widgets using
   * the default appearance provider for check boxes. For example:
   * ```js
   * const checkBox = form.getCheckBox('some.checkBox.field')
   * checkBox.defaultUpdateAppearances()
   * ```
   */
  defaultUpdateAppearances() {
    this.updateAppearances();
  }
  /**
   * Update the appearance streams for each of this check box's widgets using
   * the given appearance provider. If no `provider` is passed, the default
   * appearance provider for check boxs will be used. For example:
   * ```js
   * const checkBox = form.getCheckBox('some.checkBox.field')
   * checkBox.updateAppearances((field, widget) => {
   *   ...
   *   return {
   *     normal: { on: drawCheckBox(...), off: drawCheckBox(...) },
   *     down: { on: drawCheckBox(...), off: drawCheckBox(...) },
   *   }
   * })
   * ```
   * @param provider Optionally, the appearance provider to be used for
   *                 generating the contents of the appearance streams.
   */
  updateAppearances(provider) {
    assertOrUndefined(provider, "provider", [Function]);
    const widgets = this.acroField.getWidgets();
    for (let idx = 0, len = widgets.length; idx < len; idx++) {
      const widget = widgets[idx];
      const onValue = widget.getOnValue() ?? PDFName_default.of("Yes");
      if (!onValue) continue;
      this.updateWidgetAppearance(widget, onValue, provider);
    }
    this.markAsClean();
  }
  updateWidgetAppearance(widget, onValue, provider) {
    const apProvider = provider ?? defaultCheckBoxAppearanceProvider;
    const appearances = normalizeAppearance(apProvider(this, widget));
    this.updateOnOffWidgetAppearance(widget, onValue, appearances);
  }
};
/**
 * > **NOTE:** You probably don't want to call this method directly. Instead,
 * > consider using the [[PDFForm.getCheckBox]] method, which will create an
 * > instance of [[PDFCheckBox]] for you.
 *
 * Create an instance of [[PDFCheckBox]] from an existing acroCheckBox and ref
 *
 * @param acroCheckBox The underlying `PDFAcroCheckBox` for this check box.
 * @param ref The unique reference for this check box.
 * @param doc The document to which this check box will belong.
 */
__publicField(_PDFCheckBox, "of", (acroCheckBox, ref, doc) => new _PDFCheckBox(acroCheckBox, ref, doc));
var PDFCheckBox = _PDFCheckBox;

// src/api/form/PDFDropdown.ts
var _PDFDropdown = class _PDFDropdown extends PDFField {
  constructor(acroComboBox, ref, doc) {
    super(acroComboBox, ref, doc);
    /** The low-level PDFAcroComboBox wrapped by this dropdown. */
    __publicField(this, "acroField");
    assertIs(acroComboBox, "acroComboBox", [
      [PDFAcroComboBox_default, "PDFAcroComboBox"]
    ]);
    this.acroField = acroComboBox;
  }
  /**
   * Get the list of available options for this dropdown. These options will be
   * displayed to users who click on this dropdown in a PDF reader.
   * For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * const options = dropdown.getOptions()
   * console.log('Dropdown options:', options)
   * ```
   * @returns The options for this dropdown.
   */
  getOptions() {
    const rawOptions = this.acroField.getOptions();
    const options = new Array(rawOptions.length);
    for (let idx = 0, len = options.length; idx < len; idx++) {
      const { display, value } = rawOptions[idx];
      options[idx] = (display ?? value).decodeText();
    }
    return options;
  }
  /**
   * Get the selected options for this dropdown. These are the values that were
   * selected by a human user via a PDF reader, or programatically via
   * software.
   * For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * const selections = dropdown.getSelected()
   * console.log('Dropdown selections:', selections)
   * ```
   * > **NOTE:** Note that PDF readers only display one selected option when
   * > rendering dropdowns. However, the PDF specification does allow for
   * > multiple values to be selected in a dropdown. As such, the `pdf-lib`
   * > API supports this. However, in most cases the array returned by this
   * > method will contain only a single element (or no elements).
   * @returns The selected options in this dropdown.
   */
  getSelected() {
    const values2 = this.acroField.getValues();
    const selected = new Array(values2.length);
    for (let idx = 0, len = values2.length; idx < len; idx++) {
      selected[idx] = values2[idx].decodeText();
    }
    return selected;
  }
  /**
   * Set the list of options that are available for this dropdown. These are
   * the values that will be available for users to select when they view this
   * dropdown in a PDF reader. Note that preexisting options for this dropdown
   * will be removed. Only the values passed as `options` will be available to
   * select.
   * For example:
   * ```js
   * const dropdown = form.getDropdown('planets.dropdown')
   * dropdown.setOptions(['Earth', 'Mars', 'Pluto', 'Venus'])
   * ```
   * @param options The options that should be available in this dropdown.
   */
  setOptions(options) {
    assertIs(options, "options", [Array]);
    const optionObjects = new Array(options.length);
    for (let idx = 0, len = options.length; idx < len; idx++) {
      optionObjects[idx] = { value: PDFHexString_default.fromText(options[idx]) };
    }
    this.acroField.setOptions(optionObjects);
  }
  /**
   * Add to the list of options that are available for this dropdown. Users
   * will be able to select these values in a PDF reader. In addition to the
   * values passed as `options`, any preexisting options for this dropdown will
   * still be available for users to select.
   * For example:
   * ```js
   * const dropdown = form.getDropdown('rockets.dropdown')
   * dropdown.addOptions(['Saturn IV', 'Falcon Heavy'])
   * ```
   * @param options New options that should be available in this dropdown.
   */
  addOptions(options) {
    assertIs(options, "options", ["string", Array]);
    const optionsArr = Array.isArray(options) ? options : [options];
    const existingOptions = this.acroField.getOptions();
    const newOptions = new Array(optionsArr.length);
    for (let idx = 0, len = optionsArr.length; idx < len; idx++) {
      newOptions[idx] = { value: PDFHexString_default.fromText(optionsArr[idx]) };
    }
    this.acroField.setOptions(existingOptions.concat(newOptions));
  }
  /**
   * Select one or more values for this dropdown. This operation is analogous
   * to a human user opening the dropdown in a PDF reader and clicking on a
   * value to select it. This method will update the underlying state of the
   * dropdown to indicate which values have been selected. PDF libraries and
   * readers will be able to extract these values from the saved document and
   * determine which values were selected.
   *
   * For example:
   * ```js
   * const dropdown = form.getDropdown('best.superhero.dropdown')
   * dropdown.select('One Punch Man')
   * ```
   *
   * This method will mark this dropdown as dirty, causing its appearance
   * streams to be updated when either [[PDFDocument.save]] or
   * [[PDFForm.updateFieldAppearances]] is called. The updated streams will
   * display the selected option inside the widgets of this dropdown.
   *
   * **IMPORTANT:** The default font used to update appearance streams is
   * [[StandardFonts.Helvetica]]. Note that this is a WinAnsi font. This means
   * that encoding errors will be thrown if the selected option for this field
   * contains characters outside the WinAnsi character set (the latin alphabet).
   *
   * Embedding a custom font and passing it to
   * [[PDFForm.updateFieldAppearances]] or [[PDFDropdown.updateAppearances]]
   * allows you to generate appearance streams with characters outside the
   * latin alphabet (assuming the custom font supports them).
   *
   * Selecting an option that does not exist in this dropdown's option list
   * (see [[PDFDropdown.getOptions]]) will enable editing on this dropdown
   * (see [[PDFDropdown.enableEditing]]).
   *
   * > **NOTE:** PDF readers only display one selected option when rendering
   * > dropdowns. However, the PDF specification does allow for multiple values
   * > to be selected in a dropdown. As such, the `pdf-lib` API supports this.
   * > However, it is not recommended to select more than one value with this
   * > method, as only one will be visible. [[PDFOptionList]] fields are better
   * > suited for displaying multiple selected values.
   *
   * @param options The options to be selected.
   * @param merge Whether or not existing selections should be preserved.
   */
  select(options, merge = false) {
    assertIs(options, "options", ["string", Array]);
    assertIs(merge, "merge", ["boolean"]);
    const optionsArr = Array.isArray(options) ? options : [options];
    const validOptions = this.getOptions();
    const hasCustomOption = optionsArr.find(
      (option) => !validOptions.includes(option)
    );
    if (hasCustomOption) this.enableEditing();
    this.markAsDirty();
    if (optionsArr.length > 1 || optionsArr.length === 1 && merge) {
      this.enableMultiselect();
    }
    const values2 = new Array(optionsArr.length);
    for (let idx = 0, len = optionsArr.length; idx < len; idx++) {
      values2[idx] = PDFHexString_default.fromText(optionsArr[idx]);
    }
    if (merge) {
      const existingValues = this.acroField.getValues();
      this.acroField.setValues(existingValues.concat(values2));
    } else {
      this.acroField.setValues(values2);
    }
  }
  /**
   * Clear all selected values for this dropdown. This operation is equivalent
   * to selecting an empty list. This method will update the underlying state
   * of the dropdown to indicate that no values have been selected.
   * For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * dropdown.clear()
   * ```
   * This method will mark this text field as dirty. See [[PDFDropdown.select]]
   * for more details about what this means.
   */
  clear() {
    this.markAsDirty();
    this.acroField.setValues([]);
  }
  /**
   * Set the font size for this field. Larger font sizes will result in larger
   * text being displayed when PDF readers render this dropdown. Font sizes may
   * be integer or floating point numbers. Supplying a negative font size will
   * cause this method to throw an error.
   *
   * For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * dropdown.setFontSize(4)
   * dropdown.setFontSize(15.7)
   * ```
   *
   * > This method depends upon the existence of a default appearance
   * > (`/DA`) string. If this field does not have a default appearance string,
   * > or that string does not contain a font size (via the `Tf` operator),
   * > then this method will throw an error.
   *
   * @param fontSize The font size to be used when rendering text in this field.
   */
  setFontSize(fontSize) {
    assertPositive(fontSize, "fontSize");
    this.acroField.setFontSize(fontSize);
    this.markAsDirty();
  }
  /**
   * Returns `true` if users are allowed to edit the selected value of this
   * dropdown directly and are not constrained by the list of available
   * options. See [[PDFDropdown.enableEditing]] and
   * [[PDFDropdown.disableEditing]]. For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * if (dropdown.isEditable()) console.log('Editing is enabled')
   * ```
   * @returns Whether or not this dropdown is editable.
   */
  isEditable() {
    return this.acroField.hasFlag(AcroChoiceFlags.Edit);
  }
  /**
   * Allow users to edit the selected value of this dropdown in PDF readers
   * with their keyboard. This means that the selected value of this dropdown
   * will not be constrained by the list of available options. However, if this
   * dropdown has any available options, users will still be allowed to select
   * from that list.
   * For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * dropdown.enableEditing()
   * ```
   */
  enableEditing() {
    this.acroField.setFlagTo(AcroChoiceFlags.Edit, true);
  }
  /**
   * Do not allow users to edit the selected value of this dropdown in PDF
   * readers with their keyboard. This will constrain the selected value of
   * this dropdown to the list of available options. Users will only be able
   * to select an option from that list.
   * For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * dropdown.disableEditing()
   * ```
   */
  disableEditing() {
    this.acroField.setFlagTo(AcroChoiceFlags.Edit, false);
  }
  /**
   * Returns `true` if the option list of this dropdown is always displayed
   * in alphabetical order, irrespective of the order in which the options
   * were added to the dropdown. See [[PDFDropdown.enableSorting]] and
   * [[PDFDropdown.disableSorting]]. For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * if (dropdown.isSorted()) console.log('Sorting is enabled')
   * ```
   * @returns Whether or not this dropdown's options are sorted.
   */
  isSorted() {
    return this.acroField.hasFlag(AcroChoiceFlags.Sort);
  }
  /**
   * Always display the option list of this dropdown in alphabetical order,
   * irrespective of the order in which the options were added to this dropdown.
   * For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * dropdown.enableSorting()
   * ```
   */
  enableSorting() {
    this.acroField.setFlagTo(AcroChoiceFlags.Sort, true);
  }
  /**
   * Do not always display the option list of this dropdown in alphabetical
   * order. Instead, display the options in whichever order they were added
   * to the list. For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * dropdown.disableSorting()
   * ```
   */
  disableSorting() {
    this.acroField.setFlagTo(AcroChoiceFlags.Sort, false);
  }
  /**
   * Returns `true` if multiple options can be selected from this dropdown's
   * option list. See [[PDFDropdown.enableMultiselect]] and
   * [[PDFDropdown.disableMultiselect]]. For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * if (dropdown.isMultiselect()) console.log('Multiselect is enabled')
   * ```
   * @returns Whether or not multiple options can be selected.
   */
  isMultiselect() {
    return this.acroField.hasFlag(AcroChoiceFlags.MultiSelect);
  }
  /**
   * Allow users to select more than one option from this dropdown's option
   * list. For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * dropdown.enableMultiselect()
   * ```
   */
  enableMultiselect() {
    this.acroField.setFlagTo(AcroChoiceFlags.MultiSelect, true);
  }
  /**
   * Do not allow users to select more than one option from this dropdown's
   * option list. For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * dropdown.disableMultiselect()
   * ```
   */
  disableMultiselect() {
    this.acroField.setFlagTo(AcroChoiceFlags.MultiSelect, false);
  }
  /**
   * Returns `true` if the selected option should be spell checked by PDF
   * readers. Spell checking will only be performed if this dropdown allows
   * editing (see [[PDFDropdown.isEditable]]). See
   * [[PDFDropdown.enableSpellChecking]] and
   * [[PDFDropdown.disableSpellChecking]]. For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * if (dropdown.isSpellChecked()) console.log('Spell checking is enabled')
   * ```
   * @returns Whether or not this dropdown can be spell checked.
   */
  isSpellChecked() {
    return !this.acroField.hasFlag(AcroChoiceFlags.DoNotSpellCheck);
  }
  /**
   * Allow PDF readers to spell check the selected option of this dropdown.
   * For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * dropdown.enableSpellChecking()
   * ```
   */
  enableSpellChecking() {
    this.acroField.setFlagTo(AcroChoiceFlags.DoNotSpellCheck, false);
  }
  /**
   * Do not allow PDF readers to spell check the selected option of this
   * dropdown. For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * dropdown.disableSpellChecking()
   * ```
   */
  disableSpellChecking() {
    this.acroField.setFlagTo(AcroChoiceFlags.DoNotSpellCheck, true);
  }
  /**
   * Returns `true` if the option selected by a user is stored, or "committed",
   * when the user clicks the option. The alternative is that the user's
   * selection is stored when the user leaves this dropdown field (by clicking
   * outside of it - on another field, for example). See
   * [[PDFDropdown.enableSelectOnClick]] and
   * [[PDFDropdown.disableSelectOnClick]]. For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * if (dropdown.isSelectOnClick()) console.log('Select on click is enabled')
   * ```
   * @returns Whether or not options are selected immediately after they are
   *          clicked.
   */
  isSelectOnClick() {
    return this.acroField.hasFlag(AcroChoiceFlags.CommitOnSelChange);
  }
  /**
   * Store the option selected by a user immediately after the user clicks the
   * option. Do not wait for the user to leave this dropdown field (by clicking
   * outside of it - on another field, for example). For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * dropdown.enableSelectOnClick()
   * ```
   */
  enableSelectOnClick() {
    this.acroField.setFlagTo(AcroChoiceFlags.CommitOnSelChange, true);
  }
  /**
   * Wait to store the option selected by a user until they leave this dropdown
   * field (by clicking outside of it - on another field, for example).
   * For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * dropdown.disableSelectOnClick()
   * ```
   */
  disableSelectOnClick() {
    this.acroField.setFlagTo(AcroChoiceFlags.CommitOnSelChange, false);
  }
  /**
   * Show this dropdown on the specified page. For example:
   * ```js
   * const ubuntuFont = await pdfDoc.embedFont(ubuntuFontBytes)
   * const page = pdfDoc.addPage()
   *
   * const form = pdfDoc.getForm()
   * const dropdown = form.createDropdown('best.gundam')
   * dropdown.setOptions(['Exia', 'Dynames'])
   * dropdown.select('Exia')
   *
   * dropdown.addToPage(page, {
   *   x: 50,
   *   y: 75,
   *   width: 200,
   *   height: 100,
   *   textColor: rgb(1, 0, 0),
   *   backgroundColor: rgb(0, 1, 0),
   *   borderColor: rgb(0, 0, 1),
   *   borderWidth: 2,
   *   rotate: degrees(90),
   *   font: ubuntuFont,
   * })
   * ```
   * This will create a new widget for this dropdown field.
   * @param page The page to which this dropdown widget should be added.
   * @param options The options to be used when adding this dropdown widget.
   */
  addToPage(page, options) {
    assertIs(page, "page", [[PDFPage, "PDFPage"]]);
    assertFieldAppearanceOptions(options);
    if (!options) options = {};
    if (!("textColor" in options)) options.textColor = rgb(0, 0, 0);
    if (!("backgroundColor" in options)) options.backgroundColor = rgb(1, 1, 1);
    if (!("borderColor" in options)) options.borderColor = rgb(0, 0, 0);
    if (!("borderWidth" in options)) options.borderWidth = 1;
    const widget = this.createWidget({
      x: options.x ?? 0,
      y: options.y ?? 0,
      width: options.width ?? 200,
      height: options.height ?? 50,
      textColor: options.textColor,
      backgroundColor: options.backgroundColor,
      borderColor: options.borderColor,
      borderWidth: options.borderWidth ?? 0,
      rotate: options.rotate ?? degrees(0),
      hidden: options.hidden,
      page: page.ref
    });
    const widgetRef = this.doc.context.register(widget.dict);
    this.acroField.addWidget(widgetRef);
    const font = options.font ?? this.doc.getForm().getDefaultFont();
    this.updateWidgetAppearance(widget, font);
    page.node.addAnnot(widgetRef);
  }
  /**
   * Returns `true` if this dropdown has been marked as dirty, or if any of
   * this dropdown's widgets do not have an appearance stream. For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * if (dropdown.needsAppearancesUpdate()) console.log('Needs update')
   * ```
   * @returns Whether or not this dropdown needs an appearance update.
   */
  needsAppearancesUpdate() {
    if (this.isDirty()) return true;
    const widgets = this.acroField.getWidgets();
    for (let idx = 0, len = widgets.length; idx < len; idx++) {
      const widget = widgets[idx];
      const hasAppearances = widget.getAppearances()?.normal instanceof PDFStream_default;
      if (!hasAppearances) return true;
    }
    return false;
  }
  /**
   * Update the appearance streams for each of this dropdown's widgets using
   * the default appearance provider for dropdowns. For example:
   * ```js
   * const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
   * const dropdown = form.getDropdown('some.dropdown.field')
   * dropdown.defaultUpdateAppearances(helvetica)
   * ```
   * @param font The font to be used for creating the appearance streams.
   */
  defaultUpdateAppearances(font) {
    assertIs(font, "font", [[PDFFont, "PDFFont"]]);
    this.updateAppearances(font);
  }
  /**
   * Update the appearance streams for each of this dropdown's widgets using
   * the given appearance provider. If no `provider` is passed, the default
   * appearance provider for dropdowns will be used. For example:
   * ```js
   * const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
   * const dropdown = form.getDropdown('some.dropdown.field')
   * dropdown.updateAppearances(helvetica, (field, widget, font) => {
   *   ...
   *   return drawTextField(...)
   * })
   * ```
   * @param font The font to be used for creating the appearance streams.
   * @param provider Optionally, the appearance provider to be used for
   *                 generating the contents of the appearance streams.
   */
  updateAppearances(font, provider) {
    assertIs(font, "font", [[PDFFont, "PDFFont"]]);
    assertOrUndefined(provider, "provider", [Function]);
    const widgets = this.acroField.getWidgets();
    for (let idx = 0, len = widgets.length; idx < len; idx++) {
      const widget = widgets[idx];
      this.updateWidgetAppearance(widget, font, provider);
    }
    this.markAsClean();
  }
  // getOption(index: number): string {}
  // getSelectedIndices(): number[] {}
  // removeOptions(option: string | string[]) {}
  // removeIndices(option: number[]) {}
  // deselect(options: string | string[]) {}
  // deselectIndices(optionIndices: number[]) {}
  updateWidgetAppearance(widget, font, provider) {
    const apProvider = provider ?? defaultDropdownAppearanceProvider;
    const appearances = normalizeAppearance(apProvider(this, widget, font));
    this.updateWidgetAppearanceWithFont(widget, font, appearances);
  }
};
/**
 * > **NOTE:** You probably don't want to call this method directly. Instead,
 * > consider using the [[PDFForm.getDropdown]] method, which will create an
 * > instance of [[PDFDropdown]] for you.
 *
 * Create an instance of [[PDFDropdown]] from an existing acroComboBox and ref
 *
 * @param acroComboBox The underlying `PDFAcroComboBox` for this dropdown.
 * @param ref The unique reference for this dropdown.
 * @param doc The document to which this dropdown will belong.
 */
__publicField(_PDFDropdown, "of", (acroComboBox, ref, doc) => new _PDFDropdown(acroComboBox, ref, doc));
var PDFDropdown = _PDFDropdown;

// src/api/form/PDFOptionList.ts
var _PDFOptionList = class _PDFOptionList extends PDFField {
  constructor(acroListBox, ref, doc) {
    super(acroListBox, ref, doc);
    /** The low-level PDFAcroListBox wrapped by this option list. */
    __publicField(this, "acroField");
    assertIs(acroListBox, "acroListBox", [[PDFAcroListBox_default, "PDFAcroListBox"]]);
    this.acroField = acroListBox;
  }
  /**
   * Get the list of available options for this option list. These options will
   * be displayed to users who view this option list in a PDF reader.
   * For example:
   * ```js
   * const optionList = form.getOptionList('some.optionList.field')
   * const options = optionList.getOptions()
   * console.log('Option List options:', options)
   * ```
   * @returns The options for this option list.
   */
  getOptions() {
    const rawOptions = this.acroField.getOptions();
    const options = new Array(rawOptions.length);
    for (let idx = 0, len = options.length; idx < len; idx++) {
      const { display, value } = rawOptions[idx];
      options[idx] = (display ?? value).decodeText();
    }
    return options;
  }
  /**
   * Get the selected options for this option list. These are the values that
   * were selected by a human user via a PDF reader, or programatically via
   * software.
   * For example:
   * ```js
   * const optionList = form.getOptionList('some.optionList.field')
   * const selections = optionList.getSelected()
   * console.log('Option List selections:', selections)
   * ```
   * @returns The selected options for this option list.
   */
  getSelected() {
    const values2 = this.acroField.getValues();
    const selected = new Array(values2.length);
    for (let idx = 0, len = values2.length; idx < len; idx++) {
      selected[idx] = values2[idx].decodeText();
    }
    return selected;
  }
  /**
   * Set the list of options that are available for this option list. These are
   * the values that will be available for users to select when they view this
   * option list in a PDF reader. Note that preexisting options for this
   * option list will be removed. Only the values passed as `options` will be
   * available to select.
   *
   * For example:
   * ```js
   * const optionList = form.getOptionList('planets.optionList')
   * optionList.setOptions(['Earth', 'Mars', 'Pluto', 'Venus'])
   * ```
   *
   * This method will mark this option list as dirty, causing its appearance
   * streams to be updated when either [[PDFDocument.save]] or
   * [[PDFForm.updateFieldAppearances]] is called. The updated streams will
   * display the options this field contains inside the widgets of this text
   * field (with selected options highlighted).
   *
   * **IMPORTANT:** The default font used to update appearance streams is
   * [[StandardFonts.Helvetica]]. Note that this is a WinAnsi font. This means
   * that encoding errors will be thrown if this field contains any options
   * with characters outside the WinAnsi character set (the latin alphabet).
   *
   * Embedding a custom font and passing it to
   * [[PDFForm.updateFieldAppearances]] or [[PDFOptionList.updateAppearances]]
   * allows you to generate appearance streams with characters outside the
   * latin alphabet (assuming the custom font supports them).
   *
   * @param options The options that should be available in this option list.
   */
  setOptions(options) {
    assertIs(options, "options", [Array]);
    this.markAsDirty();
    const optionObjects = new Array(options.length);
    for (let idx = 0, len = options.length; idx < len; idx++) {
      optionObjects[idx] = { value: PDFHexString_default.fromText(options[idx]) };
    }
    this.acroField.setOptions(optionObjects);
  }
  /**
   * Add to the list of options that are available for this option list. Users
   * will be able to select these values in a PDF reader. In addition to the
   * values passed as `options`, any preexisting options for this option list
   * will still be available for users to select.
   * For example:
   * ```js
   * const optionList = form.getOptionList('rockets.optionList')
   * optionList.addOptions(['Saturn IV', 'Falcon Heavy'])
   * ```
   * This method will mark this option list as dirty. See
   * [[PDFOptionList.setOptions]] for more details about what this means.
   * @param options New options that should be available in this option list.
   */
  addOptions(options) {
    assertIs(options, "options", ["string", Array]);
    this.markAsDirty();
    const optionsArr = Array.isArray(options) ? options : [options];
    const existingOptions = this.acroField.getOptions();
    const newOptions = new Array(optionsArr.length);
    for (let idx = 0, len = optionsArr.length; idx < len; idx++) {
      newOptions[idx] = { value: PDFHexString_default.fromText(optionsArr[idx]) };
    }
    this.acroField.setOptions(existingOptions.concat(newOptions));
  }
  /**
   * Select one or more values for this option list. This operation is analogous
   * to a human user opening the option list in a PDF reader and clicking on one
   * or more values to select them. This method will update the underlying state
   * of the option list to indicate which values have been selected. PDF
   * libraries and readers will be able to extract these values from the saved
   * document and determine which values were selected.
   * For example:
   * ```js
   * const optionList = form.getOptionList('best.superheroes.optionList')
   * optionList.select(['One Punch Man', 'Iron Man'])
   * ```
   * This method will mark this option list as dirty. See
   * [[PDFOptionList.setOptions]] for more details about what this means.
   * @param options The options to be selected.
   * @param merge Whether or not existing selections should be preserved.
   */
  select(options, merge = false) {
    assertIs(options, "options", ["string", Array]);
    assertIs(merge, "merge", ["boolean"]);
    const optionsArr = Array.isArray(options) ? options : [options];
    const validOptions = this.getOptions();
    assertIsSubset(optionsArr, "option", validOptions);
    this.markAsDirty();
    if (optionsArr.length > 1 || optionsArr.length === 1 && merge) {
      this.enableMultiselect();
    }
    const values2 = new Array(optionsArr.length);
    for (let idx = 0, len = optionsArr.length; idx < len; idx++) {
      values2[idx] = PDFHexString_default.fromText(optionsArr[idx]);
    }
    if (merge) {
      const existingValues = this.acroField.getValues();
      this.acroField.setValues(existingValues.concat(values2));
    } else {
      this.acroField.setValues(values2);
    }
  }
  /**
   * Clear all selected values for this option list. This operation is
   * equivalent to selecting an empty list. This method will update the
   * underlying state of the option list to indicate that no values have been
   * selected.
   * For example:
   * ```js
   * const optionList = form.getOptionList('some.optionList.field')
   * optionList.clear()
   * ```
   * This method will mark this option list as dirty. See
   * [[PDFOptionList.setOptions]] for more details about what this means.
   */
  clear() {
    this.markAsDirty();
    this.acroField.setValues([]);
  }
  /**
   * Set the font size for the text in this field. There needs to be a
   * default appearance string (DA) set with a font value specified
   * for this to work. For example:
   * ```js
   * const optionList = form.getOptionList('some.optionList.field')
   * optionList.setFontSize(4);
   * ```
   * @param fontSize The font size to set the font to.
   */
  /**
   * Set the font size for this field. Larger font sizes will result in larger
   * text being displayed when PDF readers render this option list. Font sizes
   * may be integer or floating point numbers. Supplying a negative font size
   * will cause this method to throw an error.
   *
   * For example:
   * ```js
   * const optionList = form.getOptionList('some.optionList.field')
   * optionList.setFontSize(4)
   * optionList.setFontSize(15.7)
   * ```
   *
   * > This method depends upon the existence of a default appearance
   * > (`/DA`) string. If this field does not have a default appearance string,
   * > or that string does not contain a font size (via the `Tf` operator),
   * > then this method will throw an error.
   *
   * @param fontSize The font size to be used when rendering text in this field.
   */
  setFontSize(fontSize) {
    assertPositive(fontSize, "fontSize");
    this.acroField.setFontSize(fontSize);
    this.markAsDirty();
  }
  /**
   * Returns `true` if the options of this option list are always displayed
   * in alphabetical order, irrespective of the order in which the options
   * were added to the option list. See [[PDFOptionList.enableSorting]] and
   * [[PDFOptionList.disableSorting]]. For example:
   * ```js
   * const optionList = form.getOptionList('some.optionList.field')
   * if (optionList.isSorted()) console.log('Sorting is enabled')
   * ```
   * @returns Whether or not this option list is sorted.
   */
  isSorted() {
    return this.acroField.hasFlag(AcroChoiceFlags.Sort);
  }
  /**
   * Always display the options of this option list in alphabetical order,
   * irrespective of the order in which the options were added to this option
   * list.
   * For example:
   * ```js
   * const optionList = form.getOptionList('some.optionList.field')
   * optionList.enableSorting()
   * ```
   */
  enableSorting() {
    this.acroField.setFlagTo(AcroChoiceFlags.Sort, true);
  }
  /**
   * Do not always display the options of this option list in alphabetical
   * order. Instead, display the options in whichever order they were added
   * to this option list. For example:
   * ```js
   * const optionList = form.getOptionList('some.optionList.field')
   * optionList.disableSorting()
   * ```
   */
  disableSorting() {
    this.acroField.setFlagTo(AcroChoiceFlags.Sort, false);
  }
  /**
   * Returns `true` if multiple options can be selected from this option list.
   * See [[PDFOptionList.enableMultiselect]] and
   * [[PDFOptionList.disableMultiselect]]. For example:
   * ```js
   * const optionList = form.getOptionList('some.optionList.field')
   * if (optionList.isMultiselect()) console.log('Multiselect is enabled')
   * ```
   * @returns Whether or not multiple options can be selected.
   */
  isMultiselect() {
    return this.acroField.hasFlag(AcroChoiceFlags.MultiSelect);
  }
  /**
   * Allow users to select more than one option from this option list.
   * For example:
   * ```js
   * const optionList = form.getOptionList('some.optionList.field')
   * optionList.enableMultiselect()
   * ```
   */
  enableMultiselect() {
    this.acroField.setFlagTo(AcroChoiceFlags.MultiSelect, true);
  }
  /**
   * Do not allow users to select more than one option from this option list.
   * For example:
   * ```js
   * const optionList = form.getOptionList('some.optionList.field')
   * optionList.disableMultiselect()
   * ```
   */
  disableMultiselect() {
    this.acroField.setFlagTo(AcroChoiceFlags.MultiSelect, false);
  }
  /**
   * Returns `true` if the option selected by a user is stored, or "committed",
   * when the user clicks the option. The alternative is that the user's
   * selection is stored when the user leaves this option list field (by
   * clicking outside of it - on another field, for example). See
   * [[PDFOptionList.enableSelectOnClick]] and
   * [[PDFOptionList.disableSelectOnClick]]. For example:
   * ```js
   * const optionList = form.getOptionList('some.optionList.field')
   * if (optionList.isSelectOnClick()) console.log('Select on click is enabled')
   * ```
   * @returns Whether or not options are selected immediately after they are
   *          clicked.
   */
  isSelectOnClick() {
    return this.acroField.hasFlag(AcroChoiceFlags.CommitOnSelChange);
  }
  /**
   * Store the option selected by a user immediately after the user clicks the
   * option. Do not wait for the user to leave this option list field (by
   * clicking outside of it - on another field, for example). For example:
   * ```js
   * const optionList = form.getOptionList('some.optionList.field')
   * optionList.enableSelectOnClick()
   * ```
   */
  enableSelectOnClick() {
    this.acroField.setFlagTo(AcroChoiceFlags.CommitOnSelChange, true);
  }
  /**
   * Wait to store the option selected by a user until they leave this option
   * list field (by clicking outside of it - on another field, for example).
   * For example:
   * ```js
   * const optionList = form.getOptionList('some.optionList.field')
   * optionList.disableSelectOnClick()
   * ```
   */
  disableSelectOnClick() {
    this.acroField.setFlagTo(AcroChoiceFlags.CommitOnSelChange, false);
  }
  /**
   * Show this option list on the specified page. For example:
   * ```js
   * const ubuntuFont = await pdfDoc.embedFont(ubuntuFontBytes)
   * const page = pdfDoc.addPage()
   *
   * const form = pdfDoc.getForm()
   * const optionList = form.createOptionList('best.gundams')
   * optionList.setOptions(['Exia', 'Dynames', 'Kyrios', 'Virtue'])
   * optionList.select(['Exia', 'Virtue'])
   *
   * optionList.addToPage(page, {
   *   x: 50,
   *   y: 75,
   *   width: 200,
   *   height: 100,
   *   textColor: rgb(1, 0, 0),
   *   backgroundColor: rgb(0, 1, 0),
   *   borderColor: rgb(0, 0, 1),
   *   borderWidth: 2,
   *   rotate: degrees(90),
   *   font: ubuntuFont,
   * })
   * ```
   * This will create a new widget for this option list field.
   * @param page The page to which this option list widget should be added.
   * @param options The options to be used when adding this option list widget.
   */
  addToPage(page, options) {
    assertIs(page, "page", [[PDFPage, "PDFPage"]]);
    assertFieldAppearanceOptions(options);
    if (!options) options = {};
    if (!("textColor" in options)) options.textColor = rgb(0, 0, 0);
    if (!("backgroundColor" in options)) options.backgroundColor = rgb(1, 1, 1);
    if (!("borderColor" in options)) options.borderColor = rgb(0, 0, 0);
    if (!("borderWidth" in options)) options.borderWidth = 1;
    const widget = this.createWidget({
      x: options.x ?? 0,
      y: options.y ?? 0,
      width: options.width ?? 200,
      height: options.height ?? 100,
      textColor: options.textColor,
      backgroundColor: options.backgroundColor,
      borderColor: options.borderColor,
      borderWidth: options.borderWidth ?? 0,
      rotate: options.rotate ?? degrees(0),
      hidden: options.hidden,
      page: page.ref
    });
    const widgetRef = this.doc.context.register(widget.dict);
    this.acroField.addWidget(widgetRef);
    const font = options.font ?? this.doc.getForm().getDefaultFont();
    this.updateWidgetAppearance(widget, font);
    page.node.addAnnot(widgetRef);
  }
  /**
   * Returns `true` if this option list has been marked as dirty, or if any of
   * this option list's widgets do not have an appearance stream. For example:
   * ```js
   * const optionList = form.getOptionList('some.optionList.field')
   * if (optionList.needsAppearancesUpdate()) console.log('Needs update')
   * ```
   * @returns Whether or not this option list needs an appearance update.
   */
  needsAppearancesUpdate() {
    if (this.isDirty()) return true;
    const widgets = this.acroField.getWidgets();
    for (let idx = 0, len = widgets.length; idx < len; idx++) {
      const widget = widgets[idx];
      const hasAppearances = widget.getAppearances()?.normal instanceof PDFStream_default;
      if (!hasAppearances) return true;
    }
    return false;
  }
  /**
   * Update the appearance streams for each of this option list's widgets using
   * the default appearance provider for option lists. For example:
   * ```js
   * const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
   * const optionList = form.getOptionList('some.optionList.field')
   * optionList.defaultUpdateAppearances(helvetica)
   * ```
   * @param font The font to be used for creating the appearance streams.
   */
  defaultUpdateAppearances(font) {
    assertIs(font, "font", [[PDFFont, "PDFFont"]]);
    this.updateAppearances(font);
  }
  /**
   * Update the appearance streams for each of this option list's widgets using
   * the given appearance provider. If no `provider` is passed, the default
   * appearance provider for option lists will be used. For example:
   * ```js
   * const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
   * const optionList = form.getOptionList('some.optionList.field')
   * optionList.updateAppearances(helvetica, (field, widget, font) => {
   *   ...
   *   return drawOptionList(...)
   * })
   * ```
   * @param font The font to be used for creating the appearance streams.
   * @param provider Optionally, the appearance provider to be used for
   *                 generating the contents of the appearance streams.
   */
  updateAppearances(font, provider) {
    assertIs(font, "font", [[PDFFont, "PDFFont"]]);
    assertOrUndefined(provider, "provider", [Function]);
    const widgets = this.acroField.getWidgets();
    for (let idx = 0, len = widgets.length; idx < len; idx++) {
      const widget = widgets[idx];
      this.updateWidgetAppearance(widget, font, provider);
    }
    this.markAsClean();
  }
  // getOption(index: number): string {}
  // getSelectedIndices(): number[] {}
  // removeOptions(option: string | string[]) {}
  // removeIndices(option: number[]) {}
  // deselect(options: string | string[]) {}
  // deselectIndices(optionIndices: number[]) {}
  updateWidgetAppearance(widget, font, provider) {
    const apProvider = provider ?? defaultOptionListAppearanceProvider;
    const appearances = normalizeAppearance(apProvider(this, widget, font));
    this.updateWidgetAppearanceWithFont(widget, font, appearances);
  }
};
/**
 * > **NOTE:** You probably don't want to call this method directly. Instead,
 * > consider using the [[PDFForm.getOptionList]] method, which will create
 * > an instance of [[PDFOptionList]] for you.
 *
 * Create an instance of [[PDFOptionList]] from an existing acroListBox and
 * ref
 *
 * @param acroComboBox The underlying `PDFAcroListBox` for this option list.
 * @param ref The unique reference for this option list.
 * @param doc The document to which this option list will belong.
 */
__publicField(_PDFOptionList, "of", (acroListBox, ref, doc) => new _PDFOptionList(acroListBox, ref, doc));
var PDFOptionList = _PDFOptionList;

// src/api/form/PDFRadioGroup.ts
var _PDFRadioGroup = class _PDFRadioGroup extends PDFField {
  constructor(acroRadioButton, ref, doc) {
    super(acroRadioButton, ref, doc);
    /** The low-level PDFAcroRadioButton wrapped by this radio group. */
    __publicField(this, "acroField");
    assertIs(acroRadioButton, "acroRadioButton", [
      [PDFAcroRadioButton_default, "PDFAcroRadioButton"]
    ]);
    this.acroField = acroRadioButton;
  }
  /**
   * Get the list of available options for this radio group. Each option is
   * represented by a radio button. These radio buttons are displayed at
   * various locations in the document, potentially on different pages (though
   * typically they are stacked horizontally or vertically on the same page).
   * For example:
   * ```js
   * const radioGroup = form.getRadioGroup('some.radioGroup.field')
   * const options = radioGroup.getOptions()
   * console.log('Radio Group options:', options)
   * ```
   * @returns The options for this radio group.
   */
  getOptions() {
    const exportValues = this.acroField.getExportValues();
    if (exportValues) {
      const exportOptions = new Array(exportValues.length);
      for (let idx = 0, len = exportValues.length; idx < len; idx++) {
        exportOptions[idx] = exportValues[idx].decodeText();
      }
      return exportOptions;
    }
    const onValues = this.acroField.getOnValues();
    const onOptions = new Array(onValues.length);
    for (let idx = 0, len = onOptions.length; idx < len; idx++) {
      onOptions[idx] = onValues[idx].decodeText();
    }
    return onOptions;
  }
  /**
   * Get the selected option for this radio group. The selected option is
   * represented by the radio button in this group that is turned on. At most
   * one radio button in a group can be selected. If no buttons in this group
   * are selected, `undefined` is returned.
   * For example:
   * ```js
   * const radioGroup = form.getRadioGroup('some.radioGroup.field')
   * const selected = radioGroup.getSelected()
   * console.log('Selected radio button:', selected)
   * ```
   * @returns The selected option for this radio group.
   */
  getSelected() {
    const value = this.acroField.getValue();
    if (value === PDFName_default.of("Off")) return void 0;
    const exportValues = this.acroField.getExportValues();
    if (exportValues) {
      const onValues = this.acroField.getOnValues();
      for (let idx = 0, len = onValues.length; idx < len; idx++) {
        if (onValues[idx] === value) return exportValues[idx].decodeText();
      }
    }
    return value.decodeText();
  }
  // // TODO: Figure out why this seems to crash Acrobat. Maybe it's because we
  // //       aren't removing the widget reference from the page's Annots?
  // removeOption(option: string) {
  //   assertIs(option, 'option', ['string']);
  //   // TODO: Assert is valid `option`!
  //   const onValues = this.acroField.getOnValues();
  //   const exportValues = this.acroField.getExportValues();
  //   if (exportValues) {
  //     for (let idx = 0, len = exportValues.length; idx < len; idx++) {
  //       if (exportValues[idx].decodeText() === option) {
  //         this.acroField.removeWidget(idx);
  //         this.acroField.removeExportValue(idx);
  //       }
  //     }
  //   } else {
  //     for (let idx = 0, len = onValues.length; idx < len; idx++) {
  //       const value = onValues[idx];
  //       if (value.decodeText() === option) {
  //         this.acroField.removeWidget(idx);
  //         this.acroField.removeExportValue(idx);
  //       }
  //     }
  //   }
  // }
  /**
   * Select an option for this radio group. This operation is analogous to a
   * human user clicking one of the radio buttons in this group via a PDF
   * reader to toggle it on. This method will update the underlying state of
   * the radio group to indicate which option has been selected. PDF libraries
   * and readers will be able to extract this value from the saved document and
   * determine which option was selected.
   *
   * For example:
   * ```js
   * const radioGroup = form.getRadioGroup('best.superhero.radioGroup')
   * radioGroup.select('One Punch Man')
   * ```
   *
   * This method will mark this radio group as dirty, causing its appearance
   * streams to be updated when either [[PDFDocument.save]] or
   * [[PDFForm.updateFieldAppearances]] is called. The updated appearance
   * streams will display a dot inside the widget of this check box field
   * that represents the selected option.
   *
   * @param option The option to be selected.
   */
  select(option) {
    assertIs(option, "option", ["string"]);
    const validOptions = this.getOptions();
    assertIsOneOf(option, "option", validOptions);
    this.markAsDirty();
    const onValues = this.acroField.getOnValues();
    const exportValues = this.acroField.getExportValues();
    if (exportValues) {
      for (let idx = 0, len = exportValues.length; idx < len; idx++) {
        if (exportValues[idx].decodeText() === option) {
          this.acroField.setValue(onValues[idx]);
        }
      }
    } else {
      for (let idx = 0, len = onValues.length; idx < len; idx++) {
        const value = onValues[idx];
        if (value.decodeText() === option) this.acroField.setValue(value);
      }
    }
  }
  /**
   * Clear any selected option for this dropdown. This will result in all
   * radio buttons in this group being toggled off. This method will update
   * the underlying state of the dropdown to indicate that no radio buttons
   * have been selected.
   * For example:
   * ```js
   * const radioGroup = form.getRadioGroup('some.radioGroup.field')
   * radioGroup.clear()
   * ```
   * This method will mark this radio group as dirty. See
   * [[PDFRadioGroup.select]] for more details about what this means.
   */
  clear() {
    this.markAsDirty();
    this.acroField.setValue(PDFName_default.of("Off"));
  }
  /**
   * Returns `true` if users can click on radio buttons in this group to toggle
   * them off. The alternative is that once a user clicks on a radio button
   * to select it, the only way to deselect it is by selecting on another radio
   * button in the group. See [[PDFRadioGroup.enableOffToggling]] and
   * [[PDFRadioGroup.disableOffToggling]]. For example:
   * ```js
   * const radioGroup = form.getRadioGroup('some.radioGroup.field')
   * if (radioGroup.isOffToggleable()) console.log('Off toggling is enabled')
   * ```
   */
  isOffToggleable() {
    return !this.acroField.hasFlag(AcroButtonFlags.NoToggleToOff);
  }
  /**
   * Allow users to click on selected radio buttons in this group to toggle
   * them off. For example:
   * ```js
   * const radioGroup = form.getRadioGroup('some.radioGroup.field')
   * radioGroup.enableOffToggling()
   * ```
   * > **NOTE:** This feature is documented in the PDF specification
   * > (Table 226). However, most PDF readers do not respect this option and
   * > prevent users from toggling radio buttons off even when it is enabled.
   * > At the time of this writing (9/6/2020) Mac's Preview software did
   * > respect the option. Adobe Acrobat, Foxit Reader, and Google Chrome did
   * > not.
   */
  enableOffToggling() {
    this.acroField.setFlagTo(AcroButtonFlags.NoToggleToOff, false);
  }
  /**
   * Prevent users from clicking on selected radio buttons in this group to
   * toggle them off. Clicking on a selected radio button will have no effect.
   * The only way to deselect a selected radio button is to click on a
   * different radio button in the group. For example:
   * ```js
   * const radioGroup = form.getRadioGroup('some.radioGroup.field')
   * radioGroup.disableOffToggling()
   * ```
   */
  disableOffToggling() {
    this.acroField.setFlagTo(AcroButtonFlags.NoToggleToOff, true);
  }
  /**
   * Returns `true` if the radio buttons in this group are mutually exclusive.
   * This means that when the user selects a radio button, only that specific
   * button will be turned on. Even if other radio buttons in the group
   * represent the same value, they will not be enabled. The alternative to
   * this is that clicking a radio button will select that button along with
   * any other radio buttons in the group that share the same value. See
   * [[PDFRadioGroup.enableMutualExclusion]] and
   * [[PDFRadioGroup.disableMutualExclusion]].
   * For example:
   * ```js
   * const radioGroup = form.getRadioGroup('some.radioGroup.field')
   * if (radioGroup.isMutuallyExclusive()) console.log('Mutual exclusion is enabled')
   * ```
   */
  isMutuallyExclusive() {
    return !this.acroField.hasFlag(AcroButtonFlags.RadiosInUnison);
  }
  /**
   * When the user clicks a radio button in this group it will be selected. In
   * addition, any other radio buttons in this group that share the same
   * underlying value will also be selected. For example:
   * ```js
   * const radioGroup = form.getRadioGroup('some.radioGroup.field')
   * radioGroup.enableMutualExclusion()
   * ```
   * Note that this option must be enabled prior to adding options to the
   * radio group. It does not currently apply retroactively to existing
   * radio buttons in the group.
   */
  enableMutualExclusion() {
    this.acroField.setFlagTo(AcroButtonFlags.RadiosInUnison, false);
  }
  /**
   * When the user clicks a radio button in this group only it will be selected.
   * No other radio buttons in the group will be selected, even if they share
   * the same underlying value. For example:
   * ```js
   * const radioGroup = form.getRadioGroup('some.radioGroup.field')
   * radioGroup.disableMutualExclusion()
   * ```
   * Note that this option must be disabled prior to adding options to the
   * radio group. It does not currently apply retroactively to existing
   * radio buttons in the group.
   */
  disableMutualExclusion() {
    this.acroField.setFlagTo(AcroButtonFlags.RadiosInUnison, true);
  }
  /**
   * Add a new radio button to this group on the specified page. For example:
   * ```js
   * const page = pdfDoc.addPage()
   *
   * const form = pdfDoc.getForm()
   * const radioGroup = form.createRadioGroup('best.gundam')
   *
   * const options = {
   *   x: 50,
   *   width: 25,
   *   height: 25,
   *   textColor: rgb(1, 0, 0),
   *   backgroundColor: rgb(0, 1, 0),
   *   borderColor: rgb(0, 0, 1),
   *   borderWidth: 2,
   *   rotate: degrees(90),
   * }
   *
   * radioGroup.addOptionToPage('Exia', page, { ...options, y: 50 })
   * radioGroup.addOptionToPage('Dynames', page, { ...options, y: 110 })
   * ```
   * This will create a new radio button widget for this radio group field.
   * @param option The option that the radio button widget represents.
   * @param page The page to which the radio button widget should be added.
   * @param options The options to be used when adding the radio button widget.
   */
  addOptionToPage(option, page, options) {
    assertIs(option, "option", ["string"]);
    assertIs(page, "page", [[PDFPage, "PDFPage"]]);
    assertFieldAppearanceOptions(options);
    const widget = this.createWidget({
      x: options?.x ?? 0,
      y: options?.y ?? 0,
      width: options?.width ?? 50,
      height: options?.height ?? 50,
      textColor: options?.textColor ?? rgb(0, 0, 0),
      backgroundColor: options?.backgroundColor ?? rgb(1, 1, 1),
      borderColor: options?.borderColor ?? rgb(0, 0, 0),
      borderWidth: options?.borderWidth ?? 1,
      rotate: options?.rotate ?? degrees(0),
      hidden: options?.hidden,
      page: page.ref
    });
    const widgetRef = this.doc.context.register(widget.dict);
    const apStateValue = this.acroField.addWidgetWithOpt(
      widgetRef,
      PDFHexString_default.fromText(option),
      !this.isMutuallyExclusive()
    );
    widget.setAppearanceState(PDFName_default.of("Off"));
    this.updateWidgetAppearance(widget, apStateValue);
    page.node.addAnnot(widgetRef);
  }
  /**
   * Returns `true` if any of this group's radio button widgets do not have an
   * appearance stream for their current state. For example:
   * ```js
   * const radioGroup = form.getRadioGroup('some.radioGroup.field')
   * if (radioGroup.needsAppearancesUpdate()) console.log('Needs update')
   * ```
   * @returns Whether or not this radio group needs an appearance update.
   */
  needsAppearancesUpdate() {
    const widgets = this.acroField.getWidgets();
    for (let idx = 0, len = widgets.length; idx < len; idx++) {
      const widget = widgets[idx];
      const state = widget.getAppearanceState();
      const normal = widget.getAppearances()?.normal;
      if (!(normal instanceof PDFDict_default)) return true;
      if (state && !normal.has(state)) return true;
    }
    return false;
  }
  /**
   * Update the appearance streams for each of this group's radio button widgets
   * using the default appearance provider for radio groups. For example:
   * ```js
   * const radioGroup = form.getRadioGroup('some.radioGroup.field')
   * radioGroup.defaultUpdateAppearances()
   * ```
   */
  defaultUpdateAppearances() {
    this.updateAppearances();
  }
  // rg.updateAppearances((field: any, widget: any) => {
  //   assert(field === rg);
  //   assert(widget instanceof PDFWidgetAnnotation);
  //   return { on: [...rectangle, ...circle], off: [...rectangle, ...circle] };
  // });
  /**
   * Update the appearance streams for each of this group's radio button widgets
   * using the given appearance provider. If no `provider` is passed, the
   * default appearance provider for radio groups will be used. For example:
   * ```js
   * const radioGroup = form.getRadioGroup('some.radioGroup.field')
   * radioGroup.updateAppearances((field, widget) => {
   *   ...
   *   return {
   *     normal: { on: drawRadioButton(...), off: drawRadioButton(...) },
   *     down: { on: drawRadioButton(...), off: drawRadioButton(...) },
   *   }
   * })
   * ```
   * @param provider Optionally, the appearance provider to be used for
   *                 generating the contents of the appearance streams.
   */
  updateAppearances(provider) {
    assertOrUndefined(provider, "provider", [Function]);
    const widgets = this.acroField.getWidgets();
    for (let idx = 0, len = widgets.length; idx < len; idx++) {
      const widget = widgets[idx];
      const onValue = widget.getOnValue();
      if (!onValue) continue;
      this.updateWidgetAppearance(widget, onValue, provider);
    }
  }
  updateWidgetAppearance(widget, onValue, provider) {
    const apProvider = provider ?? defaultRadioGroupAppearanceProvider;
    const appearances = normalizeAppearance(apProvider(this, widget));
    this.updateOnOffWidgetAppearance(widget, onValue, appearances);
  }
};
/**
 * > **NOTE:** You probably don't want to call this method directly. Instead,
 * > consider using the [[PDFForm.getOptionList]] method, which will create an
 * > instance of [[PDFOptionList]] for you.
 *
 * Create an instance of [[PDFOptionList]] from an existing acroRadioButton
 * and ref
 *
 * @param acroRadioButton The underlying `PDFAcroRadioButton` for this
 *                        radio group.
 * @param ref The unique reference for this radio group.
 * @param doc The document to which this radio group will belong.
 */
__publicField(_PDFRadioGroup, "of", (acroRadioButton, ref, doc) => new _PDFRadioGroup(acroRadioButton, ref, doc));
var PDFRadioGroup = _PDFRadioGroup;

// src/api/form/PDFSignature.ts
var _PDFSignature = class _PDFSignature extends PDFField {
  constructor(acroSignature, ref, doc) {
    super(acroSignature, ref, doc);
    /** The low-level PDFAcroSignature wrapped by this signature. */
    __publicField(this, "acroField");
    assertIs(acroSignature, "acroSignature", [
      [PDFAcroSignature_default, "PDFAcroSignature"]
    ]);
    this.acroField = acroSignature;
  }
  needsAppearancesUpdate() {
    return false;
  }
};
/**
 * > **NOTE:** You probably don't want to call this method directly. Instead,
 * > consider using the [[PDFForm.getSignature]] method, which will create an
 * > instance of [[PDFSignature]] for you.
 *
 * Create an instance of [[PDFSignature]] from an existing acroSignature and
 * ref
 *
 * @param acroSignature The underlying `PDFAcroSignature` for this signature.
 * @param ref The unique reference for this signature.
 * @param doc The document to which this signature will belong.
 */
__publicField(_PDFSignature, "of", (acroSignature, ref, doc) => new _PDFSignature(acroSignature, ref, doc));
var PDFSignature = _PDFSignature;

// src/api/form/PDFTextField.ts
var _PDFTextField = class _PDFTextField extends PDFField {
  constructor(acroText, ref, doc) {
    super(acroText, ref, doc);
    /** The low-level PDFAcroText wrapped by this text field. */
    __publicField(this, "acroField");
    assertIs(acroText, "acroText", [[PDFAcroText_default, "PDFAcroText"]]);
    this.acroField = acroText;
  }
  /**
   * Get the text that this field contains. This text is visible to users who
   * view this field in a PDF reader.
   *
   * For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * const text = textField.getText()
   * console.log('Text field contents:', text)
   * ```
   *
   * Note that if this text field contains no underlying value, `undefined`
   * will be returned. Text fields may also contain an underlying value that
   * is simply an empty string (`''`). This detail is largely irrelevant for
   * most applications. In general, you'll want to treat both cases the same
   * way and simply consider the text field to be empty. In either case, the
   * text field will appear empty to users when viewed in a PDF reader.
   *
   * An error will be thrown if this is a rich text field. `pdf-lib` does not
   * support reading rich text fields. Nor do most PDF readers and writers.
   * Rich text fields are based on XFA (XML Forms Architecture). Relatively few
   * PDFs use rich text fields or XFA. Unlike PDF itself, XFA is not an ISO
   * standard. XFA has been deprecated in PDF 2.0:
   * * https://en.wikipedia.org/wiki/XFA
   * * http://blog.pdfshareforms.com/pdf-2-0-release-bid-farewell-xfa-forms/
   *
   * @returns The text contained in this text field.
   */
  getText() {
    const value = this.acroField.getValue();
    if (!value && this.isRichFormatted()) {
      throw new RichTextFieldReadError(this.getName());
    }
    return value?.decodeText();
  }
  /**
   * Set the text for this field. This operation is analogous to a human user
   * clicking on the text field in a PDF reader and typing in text via their
   * keyboard. This method will update the underlying state of the text field
   * to indicate what text has been set. PDF libraries and readers will be able
   * to extract these values from the saved document and determine what text
   * was set.
   *
   * For example:
   * ```js
   * const textField = form.getTextField('best.superhero.text.field')
   * textField.setText('One Punch Man')
   * ```
   *
   * This method will mark this text field as dirty, causing its appearance
   * streams to be updated when either [[PDFDocument.save]] or
   * [[PDFForm.updateFieldAppearances]] is called. The updated streams will
   * display the text this field contains inside the widgets of this text
   * field.
   *
   * **IMPORTANT:** The default font used to update appearance streams is
   * [[StandardFonts.Helvetica]]. Note that this is a WinAnsi font. This means
   * that encoding errors will be thrown if this field contains text outside
   * the WinAnsi character set (the latin alphabet).
   *
   * Embedding a custom font and passing it to
   * [[PDFForm.updateFieldAppearances]] or [[PDFTextField.updateAppearances]]
   * allows you to generate appearance streams with characters outside the
   * latin alphabet (assuming the custom font supports them).
   *
   * If this is a rich text field, it will be converted to a standard text
   * field in order to set the text. `pdf-lib` does not support writing rich
   * text strings. Nor do most PDF readers and writers. See
   * [[PDFTextField.getText]] for more information about rich text fields and
   * their deprecation in PDF 2.0.
   *
   * @param text The text this field should contain.
   */
  setText(text) {
    assertOrUndefined(text, "text", ["string"]);
    const maxLength = this.getMaxLength();
    if (maxLength !== void 0 && text && text.length > maxLength) {
      throw new ExceededMaxLengthError(text.length, maxLength, this.getName());
    }
    this.markAsDirty();
    this.disableRichFormatting();
    if (text) {
      this.acroField.setValue(PDFHexString_default.fromText(text));
    } else {
      this.acroField.removeValue();
    }
  }
  /**
   * Get the alignment for this text field. This value represents the
   * justification of the text when it is displayed to the user in PDF readers.
   * There are three possible alignments: left, center, and right. For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * const alignment = textField.getAlignment()
   * if (alignment === TextAlignment.Left) console.log('Text is left justified')
   * if (alignment === TextAlignment.Center) console.log('Text is centered')
   * if (alignment === TextAlignment.Right) console.log('Text is right justified')
   * ```
   * @returns The alignment of this text field.
   */
  getAlignment() {
    const quadding = this.acroField.getQuadding();
    return quadding === 0 ? 0 /* Left */ : quadding === 1 ? 1 /* Center */ : quadding === 2 ? 2 /* Right */ : 0 /* Left */;
  }
  /**
   * Set the alignment for this text field. This will determine the
   * justification of the text when it is displayed to the user in PDF readers.
   * There are three possible alignments: left, center, and right. For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   *
   * // Text will be left justified when displayed
   * textField.setAlignment(TextAlignment.Left)
   *
   * // Text will be centered when displayed
   * textField.setAlignment(TextAlignment.Center)
   *
   * // Text will be right justified when displayed
   * textField.setAlignment(TextAlignment.Right)
   * ```
   * This method will mark this text field as dirty. See
   * [[PDFTextField.setText]] for more details about what this means.
   * @param alignment The alignment for this text field.
   */
  setAlignment(alignment) {
    assertIsOneOf(alignment, "alignment", TextAlignment);
    this.markAsDirty();
    this.acroField.setQuadding(alignment);
  }
  /**
   * Get the maximum length of this field. This value represents the maximum
   * number of characters that can be typed into this field by the user. If
   * this field does not have a maximum length, `undefined` is returned.
   * For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * const maxLength = textField.getMaxLength()
   * if (maxLength === undefined) console.log('No max length')
   * else console.log(`Max length is ${maxLength}`)
   * ```
   * @returns The maximum number of characters allowed in this field, or
   *          `undefined` if no limit exists.
   */
  getMaxLength() {
    return this.acroField.getMaxLength();
  }
  /**
   * Set the maximum length of this field. This limits the number of characters
   * that can be typed into this field by the user. This also limits the length
   * of the string that can be passed to [[PDFTextField.setText]]. This limit
   * can be removed by passing `undefined` as `maxLength`. For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   *
   * // Allow between 0 and 5 characters to be entered
   * textField.setMaxLength(5)
   *
   * // Allow any number of characters to be entered
   * textField.setMaxLength(undefined)
   * ```
   * This method will mark this text field as dirty. See
   * [[PDFTextField.setText]] for more details about what this means.
   * @param maxLength The maximum number of characters allowed in this field, or
   *                  `undefined` to remove the limit.
   */
  setMaxLength(maxLength) {
    assertRangeOrUndefined(maxLength, "maxLength", 0, Number.MAX_SAFE_INTEGER);
    this.markAsDirty();
    if (maxLength === void 0) {
      this.acroField.removeMaxLength();
    } else {
      const text = this.getText();
      if (text && text.length > maxLength) {
        throw new InvalidMaxLengthError(text.length, maxLength, this.getName());
      }
      this.acroField.setMaxLength(maxLength);
    }
  }
  /**
   * Remove the maximum length for this text field. This allows any number of
   * characters to be typed into this field by the user. For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * textField.removeMaxLength()
   * ```
   * Calling this method is equivalent to passing `undefined` to
   * [[PDFTextField.setMaxLength]].
   */
  removeMaxLength() {
    this.markAsDirty();
    this.acroField.removeMaxLength();
  }
  /**
   * Display an image inside the bounds of this text field's widgets. For example:
   * ```js
   * const pngImage = await pdfDoc.embedPng(...)
   * const textField = form.getTextField('some.text.field')
   * textField.setImage(pngImage)
   * ```
   * This will update the appearances streams for each of this text field's widgets.
   * @param image The image that should be displayed.
   */
  setImage(image) {
    const fieldAlignment = this.getAlignment();
    const alignment = fieldAlignment === 1 /* Center */ ? 1 /* Center */ : fieldAlignment === 2 /* Right */ ? 2 /* Right */ : 0 /* Left */;
    const widgets = this.acroField.getWidgets();
    for (let idx = 0, len = widgets.length; idx < len; idx++) {
      const widget = widgets[idx];
      const streamRef = this.createImageAppearanceStream(
        widget,
        image,
        alignment
      );
      this.updateWidgetAppearances(widget, { normal: streamRef });
    }
    this.markAsClean();
  }
  /**
   * Set the font size for this field. Larger font sizes will result in larger
   * text being displayed when PDF readers render this text field. Font sizes
   * may be integer or floating point numbers. Supplying a negative font size
   * will cause this method to throw an error.
   *
   * For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * textField.setFontSize(4)
   * textField.setFontSize(15.7)
   * ```
   *
   * > This method depends upon the existence of a default appearance
   * > (`/DA`) string. If this field does not have a default appearance string,
   * > or that string does not contain a font size (via the `Tf` operator),
   * > then this method will throw an error.
   *
   * @param fontSize The font size to be used when rendering text in this field.
   */
  setFontSize(fontSize) {
    assertPositive(fontSize, "fontSize");
    this.acroField.setFontSize(fontSize);
    this.markAsDirty();
  }
  /**
   * Returns `true` if each line of text is shown on a new line when this
   * field is displayed in a PDF reader. The alternative is that all lines of
   * text are merged onto a single line when displayed. See
   * [[PDFTextField.enableMultiline]] and [[PDFTextField.disableMultiline]].
   * For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * if (textField.isMultiline()) console.log('Multiline is enabled')
   * ```
   * @returns Whether or not this is a multiline text field.
   */
  isMultiline() {
    return this.acroField.hasFlag(AcroTextFlags.Multiline);
  }
  /**
   * Display each line of text on a new line when this field is displayed in a
   * PDF reader. For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * textField.enableMultiline()
   * ```
   * This method will mark this text field as dirty. See
   * [[PDFTextField.setText]] for more details about what this means.
   */
  enableMultiline() {
    this.markAsDirty();
    this.acroField.setFlagTo(AcroTextFlags.Multiline, true);
  }
  /**
   * Display each line of text on the same line when this field is displayed
   * in a PDF reader. For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * textField.disableMultiline()
   * ```
   * This method will mark this text field as dirty. See
   * [[PDFTextField.setText]] for more details about what this means.
   */
  disableMultiline() {
    this.markAsDirty();
    this.acroField.setFlagTo(AcroTextFlags.Multiline, false);
  }
  /**
   * Returns `true` if this is a password text field. This means that the field
   * is intended for storing a secure password. See
   * [[PDFTextField.enablePassword]] and [[PDFTextField.disablePassword]].
   * For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * if (textField.isPassword()) console.log('Password is enabled')
   * ```
   * @returns Whether or not this is a password text field.
   */
  isPassword() {
    return this.acroField.hasFlag(AcroTextFlags.Password);
  }
  /**
   * Indicate that this text field is intended for storing a secure password.
   * For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * textField.enablePassword()
   * ```
   * Values entered into password text fields should not be displayed on the
   * screen by PDF readers. Most PDF readers will display the value as
   * asterisks or bullets. PDF readers should never store values entered by the
   * user into password text fields. Similarly, applications should not
   * write data to a password text field.
   *
   * **Please note that this method does not cause entered values to be
   * encrypted or secured in any way! It simply sets a flag that PDF software
   * and readers can access to determine the _purpose_ of this field.**
   */
  enablePassword() {
    this.acroField.setFlagTo(AcroTextFlags.Password, true);
  }
  /**
   * Indicate that this text field is **not** intended for storing a secure
   * password. For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * textField.disablePassword()
   * ```
   */
  disablePassword() {
    this.acroField.setFlagTo(AcroTextFlags.Password, false);
  }
  /**
   * Returns `true` if the contents of this text field represent a file path.
   * See [[PDFTextField.enableFileSelection]] and
   * [[PDFTextField.disableFileSelection]]. For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * if (textField.isFileSelector()) console.log('Is a file selector')
   * ```
   * @returns Whether or not this field should contain file paths.
   */
  isFileSelector() {
    return this.acroField.hasFlag(AcroTextFlags.FileSelect);
  }
  /**
   * Indicate that this text field is intended to store a file path. The
   * contents of the file stored at that path should be submitted as the value
   * of the field. For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * textField.enableFileSelection()
   * ```
   */
  enableFileSelection() {
    this.acroField.setFlagTo(AcroTextFlags.FileSelect, true);
  }
  /**
   * Indicate that this text field is **not** intended to store a file path.
   * For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * textField.disableFileSelection()
   * ```
   */
  disableFileSelection() {
    this.acroField.setFlagTo(AcroTextFlags.FileSelect, false);
  }
  /**
   * Returns `true` if the text entered in this field should be spell checked
   * by PDF readers. See [[PDFTextField.enableSpellChecking]] and
   * [[PDFTextField.disableSpellChecking]]. For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * if (textField.isSpellChecked()) console.log('Spell checking is enabled')
   * ```
   * @returns Whether or not this field should be spell checked.
   */
  isSpellChecked() {
    return !this.acroField.hasFlag(AcroTextFlags.DoNotSpellCheck);
  }
  /**
   * Allow PDF readers to spell check the text entered in this field.
   * For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * textField.enableSpellChecking()
   * ```
   */
  enableSpellChecking() {
    this.acroField.setFlagTo(AcroTextFlags.DoNotSpellCheck, false);
  }
  /**
   * Do not allow PDF readers to spell check the text entered in this field.
   * For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * textField.disableSpellChecking()
   * ```
   */
  disableSpellChecking() {
    this.acroField.setFlagTo(AcroTextFlags.DoNotSpellCheck, true);
  }
  /**
   * Returns `true` if PDF readers should allow the user to scroll the text
   * field when its contents do not fit within the field's view bounds. See
   * [[PDFTextField.enableScrolling]] and [[PDFTextField.disableScrolling]].
   * For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * if (textField.isScrollable()) console.log('Scrolling is enabled')
   * ```
   * @returns Whether or not the field is scrollable in PDF readers.
   */
  isScrollable() {
    return !this.acroField.hasFlag(AcroTextFlags.DoNotScroll);
  }
  /**
   * Allow PDF readers to present a scroll bar to the user when the contents
   * of this text field do not fit within its view bounds. For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * textField.enableScrolling()
   * ```
   * A horizontal scroll bar should be shown for singleline fields. A vertical
   * scroll bar should be shown for multiline fields.
   */
  enableScrolling() {
    this.acroField.setFlagTo(AcroTextFlags.DoNotScroll, false);
  }
  /**
   * Do not allow PDF readers to present a scroll bar to the user when the
   * contents of this text field do not fit within its view bounds. For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * textField.disableScrolling()
   * ```
   */
  disableScrolling() {
    this.acroField.setFlagTo(AcroTextFlags.DoNotScroll, true);
  }
  /**
   * Returns `true` if this is a combed text field. This means that the field
   * is split into `n` equal size cells with one character in each (where `n`
   * is equal to the max length of the text field). The result is that all
   * characters in this field are displayed an equal distance apart from one
   * another. See [[PDFTextField.enableCombing]] and
   * [[PDFTextField.disableCombing]]. For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * if (textField.isCombed()) console.log('Combing is enabled')
   * ```
   * Note that in order for a text field to be combed, the following must be
   * true (in addition to enabling combing):
   * * It must not be a multiline field (see [[PDFTextField.isMultiline]])
   * * It must not be a password field (see [[PDFTextField.isPassword]])
   * * It must not be a file selector field (see [[PDFTextField.isFileSelector]])
   * * It must have a max length defined (see [[PDFTextField.setMaxLength]])
   * @returns Whether or not this field is combed.
   */
  isCombed() {
    return this.acroField.hasFlag(AcroTextFlags.Comb) && !this.isMultiline() && !this.isPassword() && !this.isFileSelector() && this.getMaxLength() !== void 0;
  }
  /**
   * Split this field into `n` equal size cells with one character in each
   * (where `n` is equal to the max length of the text field). This will cause
   * all characters in the field to be displayed an equal distance apart from
   * one another. For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * textField.enableCombing()
   * ```
   *
   * In addition to calling this method, text fields must have a max length
   * defined in order to be combed (see [[PDFTextField.setMaxLength]]).
   *
   * This method will also call the following three methods internally:
   * * [[PDFTextField.disableMultiline]]
   * * [[PDFTextField.disablePassword]]
   * * [[PDFTextField.disableFileSelection]]
   *
   * This method will mark this text field as dirty. See
   * [[PDFTextField.setText]] for more details about what this means.
   */
  enableCombing() {
    if (this.getMaxLength() === void 0) {
      const msg = "PDFTextFields must have a max length in order to be combed";
      console.warn(msg);
    }
    this.markAsDirty();
    this.disableMultiline();
    this.disablePassword();
    this.disableFileSelection();
    this.acroField.setFlagTo(AcroTextFlags.Comb, true);
  }
  /**
   * Turn off combing for this text field. For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * textField.disableCombing()
   * ```
   * See [[PDFTextField.isCombed]] and [[PDFTextField.enableCombing]] for more
   * information about what combing is.
   *
   * This method will mark this text field as dirty. See
   * [[PDFTextField.setText]] for more details about what this means.
   */
  disableCombing() {
    this.markAsDirty();
    this.acroField.setFlagTo(AcroTextFlags.Comb, false);
  }
  /**
   * Returns `true` if this text field contains rich text. See
   * [[PDFTextField.enableRichFormatting]] and
   * [[PDFTextField.disableRichFormatting]]. For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * if (textField.isRichFormatted()) console.log('Rich formatting enabled')
   * ```
   * @returns Whether or not this field contains rich text.
   */
  isRichFormatted() {
    return this.acroField.hasFlag(AcroTextFlags.RichText);
  }
  /**
   * Indicate that this field contains XFA data - or rich text. For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * textField.enableRichFormatting()
   * ```
   * Note that `pdf-lib` does not support reading or writing rich text fields.
   * Nor do most PDF readers and writers. Rich text fields are based on XFA
   * (XML Forms Architecture). Relatively few PDFs use rich text fields or XFA.
   * Unlike PDF itself, XFA is not an ISO standard. XFA has been deprecated in
   * PDF 2.0:
   * * https://en.wikipedia.org/wiki/XFA
   * * http://blog.pdfshareforms.com/pdf-2-0-release-bid-farewell-xfa-forms/
   */
  enableRichFormatting() {
    this.acroField.setFlagTo(AcroTextFlags.RichText, true);
  }
  /**
   * Indicate that this is a standard text field that does not XFA data (rich
   * text). For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * textField.disableRichFormatting()
   * ```
   */
  disableRichFormatting() {
    this.acroField.setFlagTo(AcroTextFlags.RichText, false);
  }
  /**
   * Show this text field on the specified page. For example:
   * ```js
   * const ubuntuFont = await pdfDoc.embedFont(ubuntuFontBytes)
   * const page = pdfDoc.addPage()
   *
   * const form = pdfDoc.getForm()
   * const textField = form.createTextField('best.gundam')
   * textField.setText('Exia')
   *
   * textField.addToPage(page, {
   *   x: 50,
   *   y: 75,
   *   width: 200,
   *   height: 100,
   *   textColor: rgb(1, 0, 0),
   *   backgroundColor: rgb(0, 1, 0),
   *   borderColor: rgb(0, 0, 1),
   *   borderWidth: 2,
   *   rotate: degrees(90),
   *   font: ubuntuFont,
   * })
   * ```
   * This will create a new widget for this text field.
   * @param page The page to which this text field widget should be added.
   * @param options The options to be used when adding this text field widget.
   */
  addToPage(page, options) {
    assertIs(page, "page", [[PDFPage, "PDFPage"]]);
    assertFieldAppearanceOptions(options);
    if (!options) options = {};
    if (!("textColor" in options)) options.textColor = rgb(0, 0, 0);
    if (!("backgroundColor" in options)) options.backgroundColor = rgb(1, 1, 1);
    if (!("borderColor" in options)) options.borderColor = rgb(0, 0, 0);
    if (!("borderWidth" in options)) options.borderWidth = 1;
    const widget = this.createWidget({
      x: options.x ?? 0,
      y: options.y ?? 0,
      width: options.width ?? 200,
      height: options.height ?? 50,
      textColor: options.textColor,
      backgroundColor: options.backgroundColor,
      borderColor: options.borderColor,
      borderWidth: options.borderWidth ?? 0,
      rotate: options.rotate ?? degrees(0),
      hidden: options.hidden,
      page: page.ref
    });
    const widgetRef = this.doc.context.register(widget.dict);
    this.acroField.addWidget(widgetRef);
    const font = options.font ?? this.doc.getForm().getDefaultFont();
    this.updateWidgetAppearance(widget, font);
    page.node.addAnnot(widgetRef);
  }
  /**
   * Returns `true` if this text field has been marked as dirty, or if any of
   * this text field's widgets do not have an appearance stream. For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * if (textField.needsAppearancesUpdate()) console.log('Needs update')
   * ```
   * @returns Whether or not this text field needs an appearance update.
   */
  needsAppearancesUpdate() {
    if (this.isDirty()) return true;
    const widgets = this.acroField.getWidgets();
    for (let idx = 0, len = widgets.length; idx < len; idx++) {
      const widget = widgets[idx];
      const hasAppearances = widget.getAppearances()?.normal instanceof PDFStream_default;
      if (!hasAppearances) return true;
    }
    return false;
  }
  /**
   * Update the appearance streams for each of this text field's widgets using
   * the default appearance provider for text fields. For example:
   * ```js
   * const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
   * const textField = form.getTextField('some.text.field')
   * textField.defaultUpdateAppearances(helvetica)
   * ```
   * @param font The font to be used for creating the appearance streams.
   */
  defaultUpdateAppearances(font) {
    assertIs(font, "font", [[PDFFont, "PDFFont"]]);
    this.updateAppearances(font);
  }
  /**
   * Update the appearance streams for each of this text field's widgets using
   * the given appearance provider. If no `provider` is passed, the default
   * appearance provider for text fields will be used. For example:
   * ```js
   * const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
   * const textField = form.getTextField('some.text.field')
   * textField.updateAppearances(helvetica, (field, widget, font) => {
   *   ...
   *   return drawTextField(...)
   * })
   * ```
   * @param font The font to be used for creating the appearance streams.
   * @param provider Optionally, the appearance provider to be used for
   *                 generating the contents of the appearance streams.
   */
  updateAppearances(font, provider) {
    assertIs(font, "font", [[PDFFont, "PDFFont"]]);
    assertOrUndefined(provider, "provider", [Function]);
    const widgets = this.acroField.getWidgets();
    for (let idx = 0, len = widgets.length; idx < len; idx++) {
      const widget = widgets[idx];
      this.updateWidgetAppearance(widget, font, provider);
    }
    this.markAsClean();
  }
  updateWidgetAppearance(widget, font, provider) {
    const apProvider = provider ?? defaultTextFieldAppearanceProvider;
    const appearances = normalizeAppearance(apProvider(this, widget, font));
    this.updateWidgetAppearanceWithFont(widget, font, appearances);
  }
};
/**
 * > **NOTE:** You probably don't want to call this method directly. Instead,
 * > consider using the [[PDFForm.getTextField]] method, which will create an
 * > instance of [[PDFTextField]] for you.
 *
 * Create an instance of [[PDFTextField]] from an existing acroText and ref
 *
 * @param acroText The underlying `PDFAcroText` for this text field.
 * @param ref The unique reference for this text field.
 * @param doc The document to which this text field will belong.
 */
__publicField(_PDFTextField, "of", (acroText, ref, doc) => new _PDFTextField(acroText, ref, doc));
var PDFTextField = _PDFTextField;

// src/api/StandardFonts.ts
var StandardFonts = /* @__PURE__ */ ((StandardFonts2) => {
  StandardFonts2["Courier"] = "Courier";
  StandardFonts2["CourierBold"] = "Courier-Bold";
  StandardFonts2["CourierOblique"] = "Courier-Oblique";
  StandardFonts2["CourierBoldOblique"] = "Courier-BoldOblique";
  StandardFonts2["Helvetica"] = "Helvetica";
  StandardFonts2["HelveticaBold"] = "Helvetica-Bold";
  StandardFonts2["HelveticaOblique"] = "Helvetica-Oblique";
  StandardFonts2["HelveticaBoldOblique"] = "Helvetica-BoldOblique";
  StandardFonts2["TimesRoman"] = "Times-Roman";
  StandardFonts2["TimesRomanBold"] = "Times-Bold";
  StandardFonts2["TimesRomanItalic"] = "Times-Italic";
  StandardFonts2["TimesRomanBoldItalic"] = "Times-BoldItalic";
  StandardFonts2["Symbol"] = "Symbol";
  StandardFonts2["ZapfDingbats"] = "ZapfDingbats";
  return StandardFonts2;
})(StandardFonts || {});

// src/api/form/PDFForm.ts
var _PDFForm = class _PDFForm {
  constructor(acroForm, doc) {
    /** The low-level PDFAcroForm wrapped by this form. */
    __publicField(this, "acroForm");
    /** The document to which this form belongs. */
    __publicField(this, "doc");
    __publicField(this, "dirtyFields");
    __publicField(this, "defaultFontCache");
    __publicField(this, "embedDefaultFont", () => this.doc.embedStandardFont("Helvetica" /* Helvetica */));
    assertIs(acroForm, "acroForm", [[PDFAcroForm_default, "PDFAcroForm"]]);
    assertIs(doc, "doc", [[PDFDocument, "PDFDocument"]]);
    this.acroForm = acroForm;
    this.doc = doc;
    this.dirtyFields = /* @__PURE__ */ new Set();
    this.defaultFontCache = Cache_default.populatedBy(this.embedDefaultFont);
  }
  /**
   * Returns `true` if this [[PDFForm]] has XFA data. Most PDFs with form
   * fields do not use XFA as it is not widely supported by PDF readers.
   *
   * > `pdf-lib` does not support creation, modification, or reading of XFA
   * > fields.
   *
   * For example:
   * ```js
   * const form = pdfDoc.getForm()
   * if (form.hasXFA()) console.log('PDF has XFA data')
   * ```
   * @returns Whether or not this form has XFA data.
   */
  hasXFA() {
    return this.acroForm.dict.has(PDFName_default.of("XFA"));
  }
  /**
   * Disconnect the XFA data from this [[PDFForm]] (if any exists). This will
   * force readers to fallback to standard fields if the [[PDFDocument]]
   * contains any. For example:
   *
   * For example:
   * ```js
   * const form = pdfDoc.getForm()
   * form.deleteXFA()
   * ```
   */
  deleteXFA() {
    this.acroForm.dict.delete(PDFName_default.of("XFA"));
  }
  /**
   * Get all fields contained in this [[PDFForm]]. For example:
   * ```js
   * const form = pdfDoc.getForm()
   * const fields = form.getFields()
   * fields.forEach(field => {
   *   const type = field.constructor.name
   *   const name = field.getName()
   *   console.log(`${type}: ${name}`)
   * })
   * ```
   * @returns An array of all fields in this form.
   */
  getFields() {
    const allFields = this.acroForm.getAllFields();
    const fields = [];
    for (let idx = 0, len = allFields.length; idx < len; idx++) {
      const [acroField, ref] = allFields[idx];
      const field = convertToPDFField(acroField, ref, this.doc);
      if (field) fields.push(field);
    }
    return fields;
  }
  /**
   * Get the field in this [[PDFForm]] with the given name. For example:
   * ```js
   * const form = pdfDoc.getForm()
   * const field = form.getFieldMaybe('Page1.Foo.Bar[0]')
   * if (field) console.log('Field exists!')
   * ```
   * @param name A fully qualified field name.
   * @returns The field with the specified name, if one exists.
   */
  getFieldMaybe(name) {
    assertIs(name, "name", ["string"]);
    const fields = this.getFields();
    for (let idx = 0, len = fields.length; idx < len; idx++) {
      const field = fields[idx];
      if (field.getName() === name) return field;
    }
    return void 0;
  }
  /**
   * Get the field in this [[PDFForm]] with the given name. For example:
   * ```js
   * const form = pdfDoc.getForm()
   * const field = form.getField('Page1.Foo.Bar[0]')
   * ```
   * If no field exists with the provided name, an error will be thrown.
   * @param name A fully qualified field name.
   * @returns The field with the specified name.
   */
  getField(name) {
    assertIs(name, "name", ["string"]);
    const field = this.getFieldMaybe(name);
    if (field) return field;
    throw new NoSuchFieldError(name);
  }
  /**
   * Get the button field in this [[PDFForm]] with the given name. For example:
   * ```js
   * const form = pdfDoc.getForm()
   * const button = form.getButton('Page1.Foo.Button[0]')
   * ```
   * An error will be thrown if no field exists with the provided name, or if
   * the field exists but is not a button.
   * @param name A fully qualified button name.
   * @returns The button with the specified name.
   */
  getButton(name) {
    assertIs(name, "name", ["string"]);
    const field = this.getField(name);
    if (field instanceof PDFButton) return field;
    throw new UnexpectedFieldTypeError(name, PDFButton, field);
  }
  /**
   * Get the check box field in this [[PDFForm]] with the given name.
   * For example:
   * ```js
   * const form = pdfDoc.getForm()
   * const checkBox = form.getCheckBox('Page1.Foo.CheckBox[0]')
   * checkBox.check()
   * ```
   * An error will be thrown if no field exists with the provided name, or if
   * the field exists but is not a check box.
   * @param name A fully qualified check box name.
   * @returns The check box with the specified name.
   */
  getCheckBox(name) {
    assertIs(name, "name", ["string"]);
    const field = this.getField(name);
    if (field instanceof PDFCheckBox) return field;
    throw new UnexpectedFieldTypeError(name, PDFCheckBox, field);
  }
  /**
   * Get the dropdown field in this [[PDFForm]] with the given name.
   * For example:
   * ```js
   * const form = pdfDoc.getForm()
   * const dropdown = form.getDropdown('Page1.Foo.Dropdown[0]')
   * const options = dropdown.getOptions()
   * dropdown.select(options[0])
   * ```
   * An error will be thrown if no field exists with the provided name, or if
   * the field exists but is not a dropdown.
   * @param name A fully qualified dropdown name.
   * @returns The dropdown with the specified name.
   */
  getDropdown(name) {
    assertIs(name, "name", ["string"]);
    const field = this.getField(name);
    if (field instanceof PDFDropdown) return field;
    throw new UnexpectedFieldTypeError(name, PDFDropdown, field);
  }
  /**
   * Get the option list field in this [[PDFForm]] with the given name.
   * For example:
   * ```js
   * const form = pdfDoc.getForm()
   * const optionList = form.getOptionList('Page1.Foo.OptionList[0]')
   * const options = optionList.getOptions()
   * optionList.select(options[0])
   * ```
   * An error will be thrown if no field exists with the provided name, or if
   * the field exists but is not an option list.
   * @param name A fully qualified option list name.
   * @returns The option list with the specified name.
   */
  getOptionList(name) {
    assertIs(name, "name", ["string"]);
    const field = this.getField(name);
    if (field instanceof PDFOptionList) return field;
    throw new UnexpectedFieldTypeError(name, PDFOptionList, field);
  }
  /**
   * Get the radio group field in this [[PDFForm]] with the given name.
   * For example:
   * ```js
   * const form = pdfDoc.getForm()
   * const radioGroup = form.getRadioGroup('Page1.Foo.RadioGroup[0]')
   * const options = radioGroup.getOptions()
   * radioGroup.select(options[0])
   * ```
   * An error will be thrown if no field exists with the provided name, or if
   * the field exists but is not a radio group.
   * @param name A fully qualified radio group name.
   * @returns The radio group with the specified name.
   */
  getRadioGroup(name) {
    assertIs(name, "name", ["string"]);
    const field = this.getField(name);
    if (field instanceof PDFRadioGroup) return field;
    throw new UnexpectedFieldTypeError(name, PDFRadioGroup, field);
  }
  /**
   * Get the signature field in this [[PDFForm]] with the given name.
   * For example:
   * ```js
   * const form = pdfDoc.getForm()
   * const signature = form.getSignature('Page1.Foo.Signature[0]')
   * ```
   * An error will be thrown if no field exists with the provided name, or if
   * the field exists but is not a signature.
   * @param name A fully qualified signature name.
   * @returns The signature with the specified name.
   */
  getSignature(name) {
    assertIs(name, "name", ["string"]);
    const field = this.getField(name);
    if (field instanceof PDFSignature) return field;
    throw new UnexpectedFieldTypeError(name, PDFSignature, field);
  }
  /**
   * Get the text field in this [[PDFForm]] with the given name.
   * For example:
   * ```js
   * const form = pdfDoc.getForm()
   * const textField = form.getTextField('Page1.Foo.TextField[0]')
   * textField.setText('Are you designed to act or to be acted upon?')
   * ```
   * An error will be thrown if no field exists with the provided name, or if
   * the field exists but is not a text field.
   * @param name A fully qualified text field name.
   * @returns The text field with the specified name.
   */
  getTextField(name) {
    assertIs(name, "name", ["string"]);
    const field = this.getField(name);
    if (field instanceof PDFTextField) return field;
    throw new UnexpectedFieldTypeError(name, PDFTextField, field);
  }
  /**
   * Create a new button field in this [[PDFForm]] with the given name.
   * For example:
   * ```js
   * const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
   * const page = pdfDoc.addPage()
   *
   * const form = pdfDoc.getForm()
   * const button = form.createButton('cool.new.button')
   *
   * button.addToPage('Do Stuff', font, page)
   * ```
   * An error will be thrown if a field already exists with the provided name.
   * @param name The fully qualified name for the new button.
   * @returns The new button field.
   */
  createButton(name) {
    assertIs(name, "name", ["string"]);
    const nameParts = splitFieldName(name);
    const parent = this.findOrCreateNonTerminals(nameParts.nonTerminal);
    const button = PDFAcroPushButton_default.create(this.doc.context);
    button.setPartialName(nameParts.terminal);
    addFieldToParent(parent, [button, button.ref], nameParts.terminal);
    return PDFButton.of(button, button.ref, this.doc);
  }
  /**
   * Create a new check box field in this [[PDFForm]] with the given name.
   * For example:
   * ```js
   * const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
   * const page = pdfDoc.addPage()
   *
   * const form = pdfDoc.getForm()
   * const checkBox = form.createCheckBox('cool.new.checkBox')
   *
   * checkBox.addToPage(page)
   * ```
   * An error will be thrown if a field already exists with the provided name.
   * @param name The fully qualified name for the new check box.
   * @returns The new check box field.
   */
  createCheckBox(name) {
    assertIs(name, "name", ["string"]);
    const nameParts = splitFieldName(name);
    const parent = this.findOrCreateNonTerminals(nameParts.nonTerminal);
    const checkBox = PDFAcroCheckBox_default.create(this.doc.context);
    checkBox.setPartialName(nameParts.terminal);
    addFieldToParent(parent, [checkBox, checkBox.ref], nameParts.terminal);
    return PDFCheckBox.of(checkBox, checkBox.ref, this.doc);
  }
  /**
   * Create a new dropdown field in this [[PDFForm]] with the given name.
   * For example:
   * ```js
   * const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
   * const page = pdfDoc.addPage()
   *
   * const form = pdfDoc.getForm()
   * const dropdown = form.createDropdown('cool.new.dropdown')
   *
   * dropdown.addToPage(font, page)
   * ```
   * An error will be thrown if a field already exists with the provided name.
   * @param name The fully qualified name for the new dropdown.
   * @returns The new dropdown field.
   */
  createDropdown(name) {
    assertIs(name, "name", ["string"]);
    const nameParts = splitFieldName(name);
    const parent = this.findOrCreateNonTerminals(nameParts.nonTerminal);
    const comboBox = PDFAcroComboBox_default.create(this.doc.context);
    comboBox.setPartialName(nameParts.terminal);
    addFieldToParent(parent, [comboBox, comboBox.ref], nameParts.terminal);
    return PDFDropdown.of(comboBox, comboBox.ref, this.doc);
  }
  /**
   * Create a new option list field in this [[PDFForm]] with the given name.
   * For example:
   * ```js
   * const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
   * const page = pdfDoc.addPage()
   *
   * const form = pdfDoc.getForm()
   * const optionList = form.createOptionList('cool.new.optionList')
   *
   * optionList.addToPage(font, page)
   * ```
   * An error will be thrown if a field already exists with the provided name.
   * @param name The fully qualified name for the new option list.
   * @returns The new option list field.
   */
  createOptionList(name) {
    assertIs(name, "name", ["string"]);
    const nameParts = splitFieldName(name);
    const parent = this.findOrCreateNonTerminals(nameParts.nonTerminal);
    const listBox = PDFAcroListBox_default.create(this.doc.context);
    listBox.setPartialName(nameParts.terminal);
    addFieldToParent(parent, [listBox, listBox.ref], nameParts.terminal);
    return PDFOptionList.of(listBox, listBox.ref, this.doc);
  }
  /**
   * Create a new radio group field in this [[PDFForm]] with the given name.
   * For example:
   * ```js
   * const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
   * const page = pdfDoc.addPage()
   *
   * const form = pdfDoc.getForm()
   * const radioGroup = form.createRadioGroup('cool.new.radioGroup')
   *
   * radioGroup.addOptionToPage('is-dog', page, { y: 0 })
   * radioGroup.addOptionToPage('is-cat', page, { y: 75 })
   * ```
   * An error will be thrown if a field already exists with the provided name.
   * @param name The fully qualified name for the new radio group.
   * @returns The new radio group field.
   */
  createRadioGroup(name) {
    assertIs(name, "name", ["string"]);
    const nameParts = splitFieldName(name);
    const parent = this.findOrCreateNonTerminals(nameParts.nonTerminal);
    const radioButton = PDFAcroRadioButton_default.create(this.doc.context);
    radioButton.setPartialName(nameParts.terminal);
    addFieldToParent(
      parent,
      [radioButton, radioButton.ref],
      nameParts.terminal
    );
    return PDFRadioGroup.of(radioButton, radioButton.ref, this.doc);
  }
  /**
   * Create a new text field in this [[PDFForm]] with the given name.
   * For example:
   * ```js
   * const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
   * const page = pdfDoc.addPage()
   *
   * const form = pdfDoc.getForm()
   * const textField = form.createTextField('cool.new.textField')
   *
   * textField.addToPage(font, page)
   * ```
   * An error will be thrown if a field already exists with the provided name.
   * @param name The fully qualified name for the new radio group.
   * @returns The new radio group field.
   */
  createTextField(name) {
    assertIs(name, "name", ["string"]);
    const nameParts = splitFieldName(name);
    const parent = this.findOrCreateNonTerminals(nameParts.nonTerminal);
    const text = PDFAcroText_default.create(this.doc.context);
    text.setPartialName(nameParts.terminal);
    addFieldToParent(parent, [text, text.ref], nameParts.terminal);
    return PDFTextField.of(text, text.ref, this.doc);
  }
  /**
   * Flatten all fields in this [[PDFForm]].
   *
   * Flattening a form field will take the current appearance for each of that
   * field's widgets and make them part of their page's content stream. All form
   * fields and annotations associated are then removed. Note that once a form
   * has been flattened its fields can no longer be accessed or edited.
   *
   * This operation is often used after filling form fields to ensure a
   * consistent appearance across different PDF readers and/or printers.
   * Another common use case is to copy a template document with form fields
   * into another document. In this scenario you would load the template
   * document, fill its fields, flatten it, and then copy its pages into the
   * recipient document - the filled fields will be copied over.
   *
   * For example:
   * ```js
   * const form = pdfDoc.getForm();
   * form.flatten();
   * ```
   */
  flatten(options = { updateFieldAppearances: true }) {
    if (options.updateFieldAppearances) {
      this.updateFieldAppearances();
    }
    const fields = this.getFields();
    for (let i = 0, lenFields = fields.length; i < lenFields; i++) {
      const field = fields[i];
      const widgets = field.acroField.getWidgets();
      for (let j = 0, lenWidgets = widgets.length; j < lenWidgets; j++) {
        const widget = widgets[j];
        const page = this.findWidgetPage(widget);
        const widgetRef = this.findWidgetAppearanceRef(field, widget);
        const xObjectKey = page.node.newXObject("FlatWidget", widgetRef);
        const rectangle2 = widget.getRectangle();
        const operators = [
          pushGraphicsState(),
          translate(rectangle2.x, rectangle2.y),
          ...rotateInPlace({ ...rectangle2, rotation: 0 }),
          drawObject(xObjectKey),
          popGraphicsState()
        ].filter(Boolean);
        page.pushOperators(...operators);
      }
      this.removeField(field);
    }
  }
  /**
   * Remove a field from this [[PDFForm]].
   *
   * For example:
   * ```js
   * const form = pdfDoc.getForm();
   * const ageField = form.getFields().find(x => x.getName() === 'Age');
   * form.removeField(ageField);
   * ```
   */
  removeField(field) {
    const widgets = field.acroField.getWidgets();
    const pages = /* @__PURE__ */ new Set();
    for (let i = 0, len = widgets.length; i < len; i++) {
      const widget = widgets[i];
      const widgetRef = this.findWidgetAppearanceRef(field, widget);
      const page = this.findWidgetPage(widget);
      pages.add(page);
      page.node.removeAnnot(widgetRef);
    }
    pages.forEach((page) => page.node.removeAnnot(field.ref));
    this.acroForm.removeField(field.acroField);
    const fieldKids = field.acroField.normalizedEntries().Kids;
    const kidsCount = fieldKids.size();
    for (let childIndex = 0; childIndex < kidsCount; childIndex++) {
      const child = fieldKids.get(childIndex);
      if (child instanceof PDFRef_default) {
        this.doc.context.delete(child);
      }
    }
    this.doc.context.delete(field.ref);
  }
  /**
   * Update the appearance streams for all widgets of all fields in this
   * [[PDFForm]]. Appearance streams will only be created for a widget if it
   * does not have any existing appearance streams, or the field's value has
   * changed (e.g. by calling [[PDFTextField.setText]] or
   * [[PDFDropdown.select]]).
   *
   * For example:
   * ```js
   * const courier = await pdfDoc.embedFont(StandardFonts.Courier)
   * const form = pdfDoc.getForm()
   * form.updateFieldAppearances(courier)
   * ```
   *
   * **IMPORTANT:** The default value for the `font` parameter is
   * [[StandardFonts.Helvetica]]. Note that this is a WinAnsi font. This means
   * that encoding errors will be thrown if any fields contain text with
   * characters outside the WinAnsi character set (the latin alphabet).
   *
   * Embedding a custom font and passing that as the `font`
   * parameter allows you to generate appearance streams with non WinAnsi
   * characters (assuming your custom font supports them).
   *
   * > **NOTE:** The [[PDFDocument.save]] method will call this method to
   * > update appearances automatically if a form was accessed via the
   * > [[PDFDocument.getForm]] method prior to saving.
   *
   * @param font Optionally, the font to use when creating new appearances.
   */
  updateFieldAppearances(font) {
    assertOrUndefined(font, "font", [[PDFFont, "PDFFont"]]);
    font = font ?? this.getDefaultFont();
    const fields = this.getFields();
    for (let idx = 0, len = fields.length; idx < len; idx++) {
      const field = fields[idx];
      if (field.needsAppearancesUpdate()) {
        field.defaultUpdateAppearances(font);
      }
    }
  }
  /**
   * Mark a field as dirty. This will cause its appearance streams to be
   * updated by [[PDFForm.updateFieldAppearances]].
   * ```js
   * const form = pdfDoc.getForm()
   * const field = form.getField('foo.bar')
   * form.markFieldAsDirty(field.ref)
   * ```
   * @param fieldRef The reference to the field that should be marked.
   */
  markFieldAsDirty(fieldRef) {
    assertOrUndefined(fieldRef, "fieldRef", [[PDFRef_default, "PDFRef"]]);
    this.dirtyFields.add(fieldRef);
  }
  /**
   * Mark a field as dirty. This will cause its appearance streams to not be
   * updated by [[PDFForm.updateFieldAppearances]].
   * ```js
   * const form = pdfDoc.getForm()
   * const field = form.getField('foo.bar')
   * form.markFieldAsClean(field.ref)
   * ```
   * @param fieldRef The reference to the field that should be marked.
   */
  markFieldAsClean(fieldRef) {
    assertOrUndefined(fieldRef, "fieldRef", [[PDFRef_default, "PDFRef"]]);
    this.dirtyFields.delete(fieldRef);
  }
  /**
   * Returns `true` is the specified field has been marked as dirty.
   * ```js
   * const form = pdfDoc.getForm()
   * const field = form.getField('foo.bar')
   * if (form.fieldIsDirty(field.ref)) console.log('Field is dirty')
   * ```
   * @param fieldRef The reference to the field that should be checked.
   * @returns Whether or not the specified field is dirty.
   */
  fieldIsDirty(fieldRef) {
    assertOrUndefined(fieldRef, "fieldRef", [[PDFRef_default, "PDFRef"]]);
    return this.dirtyFields.has(fieldRef);
  }
  getDefaultFont() {
    return this.defaultFontCache.access();
  }
  findWidgetPage(widget) {
    const pageRef = widget.P();
    let page = this.doc.getPages().find((x) => x.ref === pageRef);
    if (page === void 0) {
      const widgetRef = this.doc.context.getObjectRef(widget.dict);
      if (widgetRef === void 0) {
        throw new Error("Could not find PDFRef for PDFObject");
      }
      page = this.doc.findPageForAnnotationRef(widgetRef);
      if (page === void 0) {
        throw new Error(`Could not find page for PDFRef ${widgetRef}`);
      }
    }
    return page;
  }
  findWidgetAppearanceRef(field, widget) {
    let refOrDict = widget.getNormalAppearance();
    if (refOrDict instanceof PDFDict_default && (field instanceof PDFCheckBox || field instanceof PDFRadioGroup)) {
      const value = field.acroField.getValue();
      const ref = refOrDict.get(value) ?? refOrDict.get(PDFName_default.of("Off"));
      if (ref instanceof PDFRef_default) {
        refOrDict = ref;
      }
    }
    if (!(refOrDict instanceof PDFRef_default)) {
      const name = field.getName();
      throw new Error(`Failed to extract appearance ref for: ${name}`);
    }
    return refOrDict;
  }
  findOrCreateNonTerminals(partialNames) {
    let nonTerminal = [
      this.acroForm
    ];
    for (let idx = 0, len = partialNames.length; idx < len; idx++) {
      const namePart = partialNames[idx];
      if (!namePart) throw new InvalidFieldNamePartError(namePart);
      const [parent, parentRef] = nonTerminal;
      const res = this.findNonTerminal(namePart, parent);
      if (res) {
        nonTerminal = res;
      } else {
        const node = PDFAcroNonTerminal_default.create(this.doc.context);
        node.setPartialName(namePart);
        node.setParent(parentRef);
        const nodeRef = this.doc.context.register(node.dict);
        parent.addField(nodeRef);
        nonTerminal = [node, nodeRef];
      }
    }
    return nonTerminal;
  }
  findNonTerminal(partialName, parent) {
    const fields = parent instanceof PDFAcroForm_default ? this.acroForm.getFields() : createPDFAcroFields(parent.Kids());
    for (let idx = 0, len = fields.length; idx < len; idx++) {
      const [field, ref] = fields[idx];
      if (field.getPartialName() === partialName) {
        if (field instanceof PDFAcroNonTerminal_default) return [field, ref];
        throw new FieldAlreadyExistsError(partialName);
      }
    }
    return void 0;
  }
};
/**
 * > **NOTE:** You probably don't want to call this method directly. Instead,
 * > consider using the [[PDFDocument.getForm]] method, which will create an
 * > instance of [[PDFForm]] for you.
 *
 * Create an instance of [[PDFForm]] from an existing acroForm and embedder
 *
 * @param acroForm The underlying `PDFAcroForm` for this form.
 * @param doc The document to which the form will belong.
 */
__publicField(_PDFForm, "of", (acroForm, doc) => new _PDFForm(acroForm, doc));
var PDFForm = _PDFForm;
var convertToPDFField = (field, ref, doc) => {
  if (field instanceof PDFAcroPushButton_default) return PDFButton.of(field, ref, doc);
  if (field instanceof PDFAcroCheckBox_default) return PDFCheckBox.of(field, ref, doc);
  if (field instanceof PDFAcroComboBox_default) return PDFDropdown.of(field, ref, doc);
  if (field instanceof PDFAcroListBox_default) return PDFOptionList.of(field, ref, doc);
  if (field instanceof PDFAcroText_default) return PDFTextField.of(field, ref, doc);
  if (field instanceof PDFAcroRadioButton_default) {
    return PDFRadioGroup.of(field, ref, doc);
  }
  if (field instanceof PDFAcroSignature_default) {
    return PDFSignature.of(field, ref, doc);
  }
  return void 0;
};
var splitFieldName = (fullyQualifiedName) => {
  if (fullyQualifiedName.length === 0) {
    throw new Error("PDF field names must not be empty strings");
  }
  const parts = fullyQualifiedName.split(".");
  for (let idx = 0, len = parts.length; idx < len; idx++) {
    if (parts[idx] === "") {
      throw new Error(
        `Periods in PDF field names must be separated by at least one character: "${fullyQualifiedName}"`
      );
    }
  }
  if (parts.length === 1) return { nonTerminal: [], terminal: parts[0] };
  return {
    nonTerminal: parts.slice(0, parts.length - 1),
    terminal: parts[parts.length - 1]
  };
};
var addFieldToParent = ([parent, parentRef], [field, fieldRef], partialName) => {
  const entries = parent.normalizedEntries();
  const fields = createPDFAcroFields(
    "Kids" in entries ? entries.Kids : entries.Fields
  );
  for (let idx = 0, len = fields.length; idx < len; idx++) {
    if (fields[idx][0].getPartialName() === partialName) {
      throw new FieldAlreadyExistsError(partialName);
    }
  }
  parent.addField(fieldRef);
  field.setParent(parentRef);
};

// src/api/sizes.ts
var PageSizes = {
  "4A0": [4767.87, 6740.79],
  "2A0": [3370.39, 4767.87],
  A0: [2383.94, 3370.39],
  A1: [1683.78, 2383.94],
  A2: [1190.55, 1683.78],
  A3: [841.89, 1190.55],
  A4: [595.28, 841.89],
  A5: [419.53, 595.28],
  A6: [297.64, 419.53],
  A7: [209.76, 297.64],
  A8: [147.4, 209.76],
  A9: [104.88, 147.4],
  A10: [73.7, 104.88],
  B0: [2834.65, 4008.19],
  B1: [2004.09, 2834.65],
  B2: [1417.32, 2004.09],
  B3: [1000.63, 1417.32],
  B4: [708.66, 1000.63],
  B5: [498.9, 708.66],
  B6: [354.33, 498.9],
  B7: [249.45, 354.33],
  B8: [175.75, 249.45],
  B9: [124.72, 175.75],
  B10: [87.87, 124.72],
  C0: [2599.37, 3676.54],
  C1: [1836.85, 2599.37],
  C2: [1298.27, 1836.85],
  C3: [918.43, 1298.27],
  C4: [649.13, 918.43],
  C5: [459.21, 649.13],
  C6: [323.15, 459.21],
  C7: [229.61, 323.15],
  C8: [161.57, 229.61],
  C9: [113.39, 161.57],
  C10: [79.37, 113.39],
  RA0: [2437.8, 3458.27],
  RA1: [1729.13, 2437.8],
  RA2: [1218.9, 1729.13],
  RA3: [864.57, 1218.9],
  RA4: [609.45, 864.57],
  SRA0: [2551.18, 3628.35],
  SRA1: [1814.17, 2551.18],
  SRA2: [1275.59, 1814.17],
  SRA3: [907.09, 1275.59],
  SRA4: [637.8, 907.09],
  Executive: [521.86, 756],
  Folio: [612, 936],
  Legal: [612, 1008],
  Letter: [612, 792],
  Tabloid: [792, 1224]
};

// src/api/PDFDocumentOptions.ts
var ParseSpeeds = /* @__PURE__ */ ((ParseSpeeds2) => {
  ParseSpeeds2[ParseSpeeds2["Fastest"] = Infinity] = "Fastest";
  ParseSpeeds2[ParseSpeeds2["Fast"] = 1500] = "Fast";
  ParseSpeeds2[ParseSpeeds2["Medium"] = 500] = "Medium";
  ParseSpeeds2[ParseSpeeds2["Slow"] = 100] = "Slow";
  return ParseSpeeds2;
})(ParseSpeeds || {});

// src/api/PDFEmbeddedFile.ts
var _PDFEmbeddedFile = class _PDFEmbeddedFile {
  constructor(ref, doc, embedder) {
    /** The unique reference assigned to this embedded file within the document. */
    __publicField(this, "ref");
    /** The document to which this embedded file belongs. */
    __publicField(this, "doc");
    __publicField(this, "alreadyEmbedded", false);
    __publicField(this, "embedder");
    this.ref = ref;
    this.doc = doc;
    this.embedder = embedder;
  }
  /**
   * > **NOTE:** You probably don't need to call this method directly. The
   * > [[PDFDocument.save]] and [[PDFDocument.saveAsBase64]] methods will
   * > automatically ensure all embeddable files get embedded.
   *
   * Embed this embeddable file in its document.
   *
   * @returns Resolves when the embedding is complete.
   */
  async embed() {
    if (!this.alreadyEmbedded) {
      const ref = await this.embedder.embedIntoContext(
        this.doc.context,
        this.ref
      );
      if (!this.doc.catalog.has(PDFName_default.of("Names"))) {
        this.doc.catalog.set(PDFName_default.of("Names"), this.doc.context.obj({}));
      }
      const Names = this.doc.catalog.lookup(PDFName_default.of("Names"), PDFDict_default);
      if (!Names.has(PDFName_default.of("EmbeddedFiles"))) {
        Names.set(PDFName_default.of("EmbeddedFiles"), this.doc.context.obj({}));
      }
      const EmbeddedFiles = Names.lookup(PDFName_default.of("EmbeddedFiles"), PDFDict_default);
      if (!EmbeddedFiles.has(PDFName_default.of("Names"))) {
        EmbeddedFiles.set(PDFName_default.of("Names"), this.doc.context.obj([]));
      }
      const EFNames = EmbeddedFiles.lookup(PDFName_default.of("Names"), PDFArray_default);
      EFNames.push(PDFHexString_default.fromText(this.embedder.fileName));
      EFNames.push(ref);
      if (!this.doc.catalog.has(PDFName_default.of("AF"))) {
        this.doc.catalog.set(PDFName_default.of("AF"), this.doc.context.obj([]));
      }
      const AF = this.doc.catalog.lookup(PDFName_default.of("AF"), PDFArray_default);
      AF.push(ref);
      this.alreadyEmbedded = true;
    }
  }
};
/**
 * > **NOTE:** You probably don't want to call this method directly. Instead,
 * > consider using the [[PDFDocument.attach]] method, which will create
 * instances of [[PDFEmbeddedFile]] for you.
 *
 * Create an instance of [[PDFEmbeddedFile]] from an existing ref and embedder
 *
 * @param ref The unique reference for this file.
 * @param doc The document to which the file will belong.
 * @param embedder The embedder that will be used to embed the file.
 */
__publicField(_PDFEmbeddedFile, "of", (ref, doc, embedder) => new _PDFEmbeddedFile(ref, doc, embedder));
var PDFEmbeddedFile = _PDFEmbeddedFile;

// src/api/PDFJavaScript.ts
var _PDFJavaScript = class _PDFJavaScript {
  constructor(ref, doc, embedder) {
    /** The unique reference assigned to this embedded script within the document. */
    __publicField(this, "ref");
    /** The document to which this embedded script belongs. */
    __publicField(this, "doc");
    __publicField(this, "alreadyEmbedded", false);
    __publicField(this, "embedder");
    this.ref = ref;
    this.doc = doc;
    this.embedder = embedder;
  }
  /**
   * > **NOTE:** You probably don't need to call this method directly. The
   * > [[PDFDocument.save]] and [[PDFDocument.saveAsBase64]] methods will
   * > automatically ensure all JavaScripts get embedded.
   *
   * Embed this JavaScript in its document.
   *
   * @returns Resolves when the embedding is complete.
   */
  async embed() {
    if (!this.alreadyEmbedded) {
      const { catalog, context } = this.doc;
      const ref = await this.embedder.embedIntoContext(
        this.doc.context,
        this.ref
      );
      if (!catalog.has(PDFName_default.of("Names"))) {
        catalog.set(PDFName_default.of("Names"), context.obj({}));
      }
      const Names = catalog.lookup(PDFName_default.of("Names"), PDFDict_default);
      if (!Names.has(PDFName_default.of("JavaScript"))) {
        Names.set(PDFName_default.of("JavaScript"), context.obj({}));
      }
      const Javascript = Names.lookup(PDFName_default.of("JavaScript"), PDFDict_default);
      if (!Javascript.has(PDFName_default.of("Names"))) {
        Javascript.set(PDFName_default.of("Names"), context.obj([]));
      }
      const JSNames = Javascript.lookup(PDFName_default.of("Names"), PDFArray_default);
      JSNames.push(PDFHexString_default.fromText(this.embedder.scriptName));
      JSNames.push(ref);
      this.alreadyEmbedded = true;
    }
  }
};
/**
 * > **NOTE:** You probably don't want to call this method directly. Instead,
 * > consider using the [[PDFDocument.addJavaScript]] method, which will
 * create instances of [[PDFJavaScript]] for you.
 *
 * Create an instance of [[PDFJavaScript]] from an existing ref and script
 *
 * @param ref The unique reference for this script.
 * @param doc The document to which the script will belong.
 * @param embedder The embedder that will be used to embed the script.
 */
__publicField(_PDFJavaScript, "of", (ref, doc, embedder) => new _PDFJavaScript(ref, doc, embedder));
var PDFJavaScript = _PDFJavaScript;

// src/core/embedders/JavaScriptEmbedder.ts
var JavaScriptEmbedder = class _JavaScriptEmbedder {
  constructor(script, scriptName) {
    __publicField(this, "script");
    __publicField(this, "scriptName");
    this.script = script;
    this.scriptName = scriptName;
  }
  static for(script, scriptName) {
    return new _JavaScriptEmbedder(script, scriptName);
  }
  async embedIntoContext(context, ref) {
    const jsActionDict = context.obj({
      Type: "Action",
      S: "JavaScript",
      JS: PDFHexString_default.fromText(this.script)
    });
    if (ref) {
      context.assign(ref, jsActionDict);
      return ref;
    } else {
      return context.register(jsActionDict);
    }
  }
};
var JavaScriptEmbedder_default = JavaScriptEmbedder;

// src/api/PDFDocument.ts
var PDFDocument = class _PDFDocument {
  constructor(context, ignoreEncryption, updateMetadata) {
    /** The low-level context of this document. */
    __publicField(this, "context");
    /** The catalog of this document. */
    __publicField(this, "catalog");
    /** Whether or not this document is encrypted. */
    __publicField(this, "isEncrypted");
    /** The default word breaks used in PDFPage.drawText */
    __publicField(this, "defaultWordBreaks", [" "]);
    __publicField(this, "fontkit");
    __publicField(this, "pageCount");
    __publicField(this, "pageCache");
    __publicField(this, "pageMap");
    __publicField(this, "formCache");
    __publicField(this, "fonts");
    __publicField(this, "images");
    __publicField(this, "embeddedPages");
    __publicField(this, "embeddedFiles");
    __publicField(this, "javaScripts");
    __publicField(this, "computePages", () => {
      const pages = [];
      this.catalog.Pages().traverse((node, ref) => {
        if (node instanceof PDFPageLeaf_default) {
          let page = this.pageMap.get(node);
          if (!page) {
            page = PDFPage.of(node, ref, this);
            this.pageMap.set(node, page);
          }
          pages.push(page);
        }
      });
      return pages;
    });
    __publicField(this, "getOrCreateForm", () => {
      const acroForm = this.catalog.getOrCreateAcroForm();
      return PDFForm.of(acroForm, this);
    });
    assertIs(context, "context", [[PDFContext_default, "PDFContext"]]);
    assertIs(ignoreEncryption, "ignoreEncryption", ["boolean"]);
    this.context = context;
    this.catalog = context.lookup(context.trailerInfo.Root);
    this.isEncrypted = !!context.lookup(context.trailerInfo.Encrypt);
    this.pageCache = Cache_default.populatedBy(this.computePages);
    this.pageMap = /* @__PURE__ */ new Map();
    this.formCache = Cache_default.populatedBy(this.getOrCreateForm);
    this.fonts = [];
    this.images = [];
    this.embeddedPages = [];
    this.embeddedFiles = [];
    this.javaScripts = [];
    if (!ignoreEncryption && this.isEncrypted) throw new EncryptedPDFError();
    if (updateMetadata) this.updateInfoDict();
  }
  /**
   * Load an existing [[PDFDocument]]. The input data can be provided in
   * multiple formats:
   *
   * | Type          | Contents                                               |
   * | ------------- | ------------------------------------------------------ |
   * | `string`      | A base64 encoded string (or data URI) containing a PDF |
   * | `Uint8Array`  | The raw bytes of a PDF                                 |
   * | `ArrayBuffer` | The raw bytes of a PDF                                 |
   *
   * For example:
   * ```js
   * import { PDFDocument } from 'pdf-lib'
   *
   * // pdf=string
   * const base64 =
   *  'JVBERi0xLjcKJYGBgYEKCjUgMCBvYmoKPDwKL0ZpbHRlciAvRmxhdGVEZWNvZGUKL0xlbm' +
   *  'd0aCAxMDQKPj4Kc3RyZWFtCniccwrhMlAAwaJ0Ln2P1Jyy1JLM5ERdc0MjCwUjE4WQNC4Q' +
   *  '6cNlCFZkqGCqYGSqEJLLZWNuYGZiZmbkYuZsZmlmZGRgZmluDCQNzc3NTM2NzdzMXMxMjQ' +
   *  'ztFEKyuEK0uFxDuAAOERdVCmVuZHN0cmVhbQplbmRvYmoKCjYgMCBvYmoKPDwKL0ZpbHRl' +
   *  'ciAvRmxhdGVEZWNvZGUKL1R5cGUgL09ialN0bQovTiA0Ci9GaXJzdCAyMAovTGVuZ3RoID' +
   *  'IxNQo+PgpzdHJlYW0KeJxVj9GqwjAMhu/zFHkBzTo3nCCCiiKIHPEICuJF3cKoSCu2E8/b' +
   *  '20wPIr1p8v9/8kVhgilmGfawX2CGaVrgcAi0/bsy0lrX7IGWpvJ4iJYEN3gEmrrGBlQwGs' +
   *  'HHO9VBX1wNrxAqMX87RBD5xpJuddqwd82tjAHxzV1U5LPgy52DKXWnr1Lheg+j/c/pzGVr' +
   *  'iqV0VlwZPXGPCJjElw/ybkwUmeoWgxesDXGhHJC/D/iikp1Av80ptKU0FdBEe25pPihAM1' +
   *  'u6ytgaaWfs2Hrz35CJT1+EWmAKZW5kc3RyZWFtCmVuZG9iagoKNyAwIG9iago8PAovU2l6' +
   *  'ZSA4Ci9Sb290IDIgMCBSCi9GaWx0ZXIgL0ZsYXRlRGVjb2RlCi9UeXBlIC9YUmVmCi9MZW' +
   *  '5ndGggMzgKL1cgWyAxIDIgMiBdCi9JbmRleCBbIDAgOCBdCj4+CnN0cmVhbQp4nBXEwREA' +
   *  'EBAEsCwz3vrvRmOOyyOoGhZdutHN2MT55fIAVocD+AplbmRzdHJlYW0KZW5kb2JqCgpzdG' +
   *  'FydHhyZWYKNTEwCiUlRU9G'
   *
   * const dataUri = 'data:application/pdf;base64,' + base64
   *
   * const pdfDoc1 = await PDFDocument.load(base64)
   * const pdfDoc2 = await PDFDocument.load(dataUri)
   *
   * // pdf=Uint8Array
   * import fs from 'fs'
   * const uint8Array = fs.readFileSync('with_update_sections.pdf')
   * const pdfDoc3 = await PDFDocument.load(uint8Array)
   *
   * // pdf=ArrayBuffer
   * const url = 'https://pdf-lib.js.org/assets/with_update_sections.pdf'
   * const arrayBuffer = await fetch(url).then(res => res.arrayBuffer())
   * const pdfDoc4 = await PDFDocument.load(arrayBuffer)
   *
   * ```
   *
   * @param pdf The input data containing a PDF document.
   * @param options The options to be used when loading the document.
   * @returns Resolves with a document loaded from the input.
   */
  static async load(pdf, options = {}) {
    const {
      ignoreEncryption = false,
      parseSpeed = 100 /* Slow */,
      throwOnInvalidObject = false,
      updateMetadata = true,
      capNumbers = false
    } = options;
    assertIs(pdf, "pdf", ["string", Uint8Array, ArrayBuffer]);
    assertIs(ignoreEncryption, "ignoreEncryption", ["boolean"]);
    assertIs(parseSpeed, "parseSpeed", ["number"]);
    assertIs(throwOnInvalidObject, "throwOnInvalidObject", ["boolean"]);
    const bytes = toUint8Array(pdf);
    const context = await PDFParser_default.forBytesWithOptions(
      bytes,
      parseSpeed,
      throwOnInvalidObject,
      capNumbers
    ).parseDocument();
    return new _PDFDocument(context, ignoreEncryption, updateMetadata);
  }
  /**
   * Create a new [[PDFDocument]].
   * @returns Resolves with the newly created document.
   */
  static async create(options = {}) {
    const { updateMetadata = true } = options;
    const context = PDFContext_default.create();
    const pageTree = PDFPageTree_default.withContext(context);
    const pageTreeRef = context.register(pageTree);
    const catalog = PDFCatalog_default.withContextAndPages(context, pageTreeRef);
    context.trailerInfo.Root = context.register(catalog);
    return new _PDFDocument(context, false, updateMetadata);
  }
  /**
   * Register a fontkit instance. This must be done before custom fonts can
   * be embedded. See [here](https://github.com/Hopding/pdf-lib/tree/master#fontkit-installation)
   * for instructions on how to install and register a fontkit instance.
   *
   * > You do **not** need to call this method to embed standard fonts.
   *
   * For example:
   * ```js
   * import { PDFDocument } from 'pdf-lib'
   * import fontkit from '@pdf-lib/fontkit'
   *
   * const pdfDoc = await PDFDocument.create()
   * pdfDoc.registerFontkit(fontkit)
   * ```
   *
   * @param fontkit The fontkit instance to be registered.
   */
  registerFontkit(fontkit) {
    this.fontkit = fontkit;
  }
  /**
   * Get the [[PDFForm]] containing all interactive fields for this document.
   * For example:
   * ```js
   * const form = pdfDoc.getForm()
   * const fields = form.getFields()
   * fields.forEach(field => {
   *   const type = field.constructor.name
   *   const name = field.getName()
   *   console.log(`${type}: ${name}`)
   * })
   * ```
   * @returns The form for this document.
   */
  getForm() {
    const form = this.formCache.access();
    if (form.hasXFA()) {
      console.warn(
        "Removing XFA form data as pdf-lib does not support reading or writing XFA"
      );
      form.deleteXFA();
    }
    return form;
  }
  /**
   * Get this document's title metadata. The title appears in the
   * "Document Properties" section of most PDF readers. For example:
   * ```js
   * const title = pdfDoc.getTitle()
   * ```
   * @returns A string containing the title of this document, if it has one.
   */
  getTitle() {
    const title = this.getInfoDict().lookup(PDFName_default.Title);
    if (!title) return void 0;
    assertIsLiteralOrHexString(title);
    return title.decodeText();
  }
  /**
   * Get this document's author metadata. The author appears in the
   * "Document Properties" section of most PDF readers. For example:
   * ```js
   * const author = pdfDoc.getAuthor()
   * ```
   * @returns A string containing the author of this document, if it has one.
   */
  getAuthor() {
    const author = this.getInfoDict().lookup(PDFName_default.Author);
    if (!author) return void 0;
    assertIsLiteralOrHexString(author);
    return author.decodeText();
  }
  /**
   * Get this document's subject metadata. The subject appears in the
   * "Document Properties" section of most PDF readers. For example:
   * ```js
   * const subject = pdfDoc.getSubject()
   * ```
   * @returns A string containing the subject of this document, if it has one.
   */
  getSubject() {
    const subject = this.getInfoDict().lookup(PDFName_default.Subject);
    if (!subject) return void 0;
    assertIsLiteralOrHexString(subject);
    return subject.decodeText();
  }
  /**
   * Get this document's keywords metadata. The keywords appear in the
   * "Document Properties" section of most PDF readers. For example:
   * ```js
   * const keywords = pdfDoc.getKeywords()
   * ```
   * @returns A string containing the keywords of this document, if it has any.
   */
  getKeywords() {
    const keywords = this.getInfoDict().lookup(PDFName_default.Keywords);
    if (!keywords) return void 0;
    assertIsLiteralOrHexString(keywords);
    return keywords.decodeText();
  }
  /**
   * Get this document's creator metadata. The creator appears in the
   * "Document Properties" section of most PDF readers. For example:
   * ```js
   * const creator = pdfDoc.getCreator()
   * ```
   * @returns A string containing the creator of this document, if it has one.
   */
  getCreator() {
    const creator = this.getInfoDict().lookup(PDFName_default.Creator);
    if (!creator) return void 0;
    assertIsLiteralOrHexString(creator);
    return creator.decodeText();
  }
  /**
   * Get this document's producer metadata. The producer appears in the
   * "Document Properties" section of most PDF readers. For example:
   * ```js
   * const producer = pdfDoc.getProducer()
   * ```
   * @returns A string containing the producer of this document, if it has one.
   */
  getProducer() {
    const producer = this.getInfoDict().lookup(PDFName_default.Producer);
    if (!producer) return void 0;
    assertIsLiteralOrHexString(producer);
    return producer.decodeText();
  }
  /**
   * Get this document's creation date metadata. The creation date appears in
   * the "Document Properties" section of most PDF readers. For example:
   * ```js
   * const creationDate = pdfDoc.getCreationDate()
   * ```
   * @returns A Date containing the creation date of this document,
   *          if it has one.
   */
  getCreationDate() {
    const creationDate = this.getInfoDict().lookup(PDFName_default.CreationDate);
    if (!creationDate) return void 0;
    assertIsLiteralOrHexString(creationDate);
    return creationDate.decodeDate();
  }
  /**
   * Get this document's modification date metadata. The modification date
   * appears in the "Document Properties" section of most PDF readers.
   * For example:
   * ```js
   * const modification = pdfDoc.getModificationDate()
   * ```
   * @returns A Date containing the modification date of this document,
   *          if it has one.
   */
  getModificationDate() {
    const modificationDate = this.getInfoDict().lookup(PDFName_default.ModDate);
    if (!modificationDate) return void 0;
    assertIsLiteralOrHexString(modificationDate);
    return modificationDate.decodeDate();
  }
  /**
   * Set this document's title metadata. The title will appear in the
   * "Document Properties" section of most PDF readers. For example:
   * ```js
   * pdfDoc.setTitle('🥚 The Life of an Egg 🍳')
   * ```
   *
   * To display the title in the window's title bar, set the
   * `showInWindowTitleBar` option to `true` (works for _most_ PDF readers).
   * For example:
   * ```js
   * pdfDoc.setTitle('🥚 The Life of an Egg 🍳', { showInWindowTitleBar: true })
   * ```
   *
   * @param title The title of this document.
   * @param options The options to be used when setting the title.
   */
  setTitle(title, options) {
    assertIs(title, "title", ["string"]);
    const key = PDFName_default.of("Title");
    this.getInfoDict().set(key, PDFHexString_default.fromText(title));
    if (options?.showInWindowTitleBar) {
      const prefs = this.catalog.getOrCreateViewerPreferences();
      prefs.setDisplayDocTitle(true);
    }
  }
  /**
   * Set this document's author metadata. The author will appear in the
   * "Document Properties" section of most PDF readers. For example:
   * ```js
   * pdfDoc.setAuthor('Humpty Dumpty')
   * ```
   * @param author The author of this document.
   */
  setAuthor(author) {
    assertIs(author, "author", ["string"]);
    const key = PDFName_default.of("Author");
    this.getInfoDict().set(key, PDFHexString_default.fromText(author));
  }
  /**
   * Set this document's subject metadata. The subject will appear in the
   * "Document Properties" section of most PDF readers. For example:
   * ```js
   * pdfDoc.setSubject('📘 An Epic Tale of Woe 📖')
   * ```
   * @param subject The subject of this document.
   */
  setSubject(subject) {
    assertIs(subject, "author", ["string"]);
    const key = PDFName_default.of("Subject");
    this.getInfoDict().set(key, PDFHexString_default.fromText(subject));
  }
  /**
   * Set this document's keyword metadata. These keywords will appear in the
   * "Document Properties" section of most PDF readers. For example:
   * ```js
   * pdfDoc.setKeywords(['eggs', 'wall', 'fall', 'king', 'horses', 'men'])
   * ```
   * @param keywords An array of keywords associated with this document.
   */
  setKeywords(keywords) {
    assertIs(keywords, "keywords", [Array]);
    const key = PDFName_default.of("Keywords");
    this.getInfoDict().set(key, PDFHexString_default.fromText(keywords.join(" ")));
  }
  /**
   * Set this document's creator metadata. The creator will appear in the
   * "Document Properties" section of most PDF readers. For example:
   * ```js
   * pdfDoc.setCreator('PDF App 9000 🤖')
   * ```
   * @param creator The creator of this document.
   */
  setCreator(creator) {
    assertIs(creator, "creator", ["string"]);
    const key = PDFName_default.of("Creator");
    this.getInfoDict().set(key, PDFHexString_default.fromText(creator));
  }
  /**
   * Set this document's producer metadata. The producer will appear in the
   * "Document Properties" section of most PDF readers. For example:
   * ```js
   * pdfDoc.setProducer('PDF App 9000 🤖')
   * ```
   * @param producer The producer of this document.
   */
  setProducer(producer) {
    assertIs(producer, "creator", ["string"]);
    const key = PDFName_default.of("Producer");
    this.getInfoDict().set(key, PDFHexString_default.fromText(producer));
  }
  /**
   * Set this document's language metadata. The language will appear in the
   * "Document Properties" section of some PDF readers. For example:
   * ```js
   * pdfDoc.setLanguage('en-us')
   * ```
   *
   * @param language An RFC 3066 _Language-Tag_ denoting the language of this
   *                 document, or an empty string if the language is unknown.
   */
  setLanguage(language) {
    assertIs(language, "language", ["string"]);
    const key = PDFName_default.of("Lang");
    this.catalog.set(key, PDFString_default.of(language));
  }
  /**
   * Set this document's creation date metadata. The creation date will appear
   * in the "Document Properties" section of most PDF readers. For example:
   * ```js
   * pdfDoc.setCreationDate(new Date())
   * ```
   * @param creationDate The date this document was created.
   */
  setCreationDate(creationDate) {
    assertIs(creationDate, "creationDate", [[Date, "Date"]]);
    const key = PDFName_default.of("CreationDate");
    this.getInfoDict().set(key, PDFString_default.fromDate(creationDate));
  }
  /**
   * Set this document's modification date metadata. The modification date will
   * appear in the "Document Properties" section of most PDF readers. For
   * example:
   * ```js
   * pdfDoc.setModificationDate(new Date())
   * ```
   * @param modificationDate The date this document was last modified.
   */
  setModificationDate(modificationDate) {
    assertIs(modificationDate, "modificationDate", [[Date, "Date"]]);
    const key = PDFName_default.of("ModDate");
    this.getInfoDict().set(key, PDFString_default.fromDate(modificationDate));
  }
  /**
   * Get the number of pages contained in this document. For example:
   * ```js
   * const totalPages = pdfDoc.getPageCount()
   * ```
   * @returns The number of pages in this document.
   */
  getPageCount() {
    if (this.pageCount === void 0) this.pageCount = this.getPages().length;
    return this.pageCount;
  }
  /**
   * Get an array of all the pages contained in this document. The pages are
   * stored in the array in the same order that they are rendered in the
   * document. For example:
   * ```js
   * const pages = pdfDoc.getPages()
   * pages[0]   // The first page of the document
   * pages[2]   // The third page of the document
   * pages[197] // The 198th page of the document
   * ```
   * @returns An array of all the pages contained in this document.
   */
  getPages() {
    return this.pageCache.access();
  }
  /**
   * Get the page rendered at a particular `index` of the document. For example:
   * ```js
   * pdfDoc.getPage(0)   // The first page of the document
   * pdfDoc.getPage(2)   // The third page of the document
   * pdfDoc.getPage(197) // The 198th page of the document
   * ```
   * @returns The [[PDFPage]] rendered at the given `index` of the document.
   */
  getPage(index) {
    const pages = this.getPages();
    assertRange(index, "index", 0, pages.length - 1);
    return pages[index];
  }
  /**
   * Get an array of indices for all the pages contained in this document. The
   * array will contain a range of integers from
   * `0..pdfDoc.getPageCount() - 1`. For example:
   * ```js
   * const pdfDoc = await PDFDocument.create()
   * pdfDoc.addPage()
   * pdfDoc.addPage()
   * pdfDoc.addPage()
   *
   * const indices = pdfDoc.getPageIndices()
   * indices // => [0, 1, 2]
   * ```
   * @returns An array of indices for all pages contained in this document.
   */
  getPageIndices() {
    return range(0, this.getPageCount());
  }
  /**
   * Remove the page at a given index from this document. For example:
   * ```js
   * pdfDoc.removePage(0)   // Remove the first page of the document
   * pdfDoc.removePage(2)   // Remove the third page of the document
   * pdfDoc.removePage(197) // Remove the 198th page of the document
   * ```
   * Once a page has been removed, it will no longer be rendered at that index
   * in the document.
   * @param index The index of the page to be removed.
   */
  removePage(index) {
    const pageCount = this.getPageCount();
    if (this.pageCount === 0) throw new RemovePageFromEmptyDocumentError();
    assertRange(index, "index", 0, pageCount - 1);
    this.catalog.removeLeafNode(index);
    this.pageCount = pageCount - 1;
  }
  /**
   * Add a page to the end of this document. This method accepts three
   * different value types for the `page` parameter:
   *
   * | Type               | Behavior                                                                            |
   * | ------------------ | ----------------------------------------------------------------------------------- |
   * | `undefined`        | Create a new page and add it to the end of this document                            |
   * | `[number, number]` | Create a new page with the given dimensions and add it to the end of this document  |
   * | `PDFPage`          | Add the existing page to the end of this document                                   |
   *
   * For example:
   * ```js
   * // page=undefined
   * const newPage = pdfDoc.addPage()
   *
   * // page=[number, number]
   * import { PageSizes } from 'pdf-lib'
   * const newPage1 = pdfDoc.addPage(PageSizes.A7)
   * const newPage2 = pdfDoc.addPage(PageSizes.Letter)
   * const newPage3 = pdfDoc.addPage([500, 750])
   *
   * // page=PDFPage
   * const pdfDoc1 = await PDFDocument.create()
   * const pdfDoc2 = await PDFDocument.load(...)
   * const [existingPage] = await pdfDoc1.copyPages(pdfDoc2, [0])
   * pdfDoc1.addPage(existingPage)
   * ```
   *
   * @param page Optionally, the desired dimensions or existing page.
   * @returns The newly created (or existing) page.
   */
  addPage(page) {
    assertIs(page, "page", ["undefined", [PDFPage, "PDFPage"], Array]);
    return this.insertPage(this.getPageCount(), page);
  }
  /**
   * Insert a page at a given index within this document. This method accepts
   * three different value types for the `page` parameter:
   *
   * | Type               | Behavior                                                                       |
   * | ------------------ | ------------------------------------------------------------------------------ |
   * | `undefined`        | Create a new page and insert it into this document                             |
   * | `[number, number]` | Create a new page with the given dimensions and insert it into this document   |
   * | `PDFPage`          | Insert the existing page into this document                                    |
   *
   * For example:
   * ```js
   * // page=undefined
   * const newPage = pdfDoc.insertPage(2)
   *
   * // page=[number, number]
   * import { PageSizes } from 'pdf-lib'
   * const newPage1 = pdfDoc.insertPage(2, PageSizes.A7)
   * const newPage2 = pdfDoc.insertPage(0, PageSizes.Letter)
   * const newPage3 = pdfDoc.insertPage(198, [500, 750])
   *
   * // page=PDFPage
   * const pdfDoc1 = await PDFDocument.create()
   * const pdfDoc2 = await PDFDocument.load(...)
   * const [existingPage] = await pdfDoc1.copyPages(pdfDoc2, [0])
   * pdfDoc1.insertPage(0, existingPage)
   * ```
   *
   * @param index The index at which the page should be inserted (zero-based).
   * @param page Optionally, the desired dimensions or existing page.
   * @returns The newly created (or existing) page.
   */
  insertPage(index, page) {
    const pageCount = this.getPageCount();
    assertRange(index, "index", 0, pageCount);
    assertIs(page, "page", ["undefined", [PDFPage, "PDFPage"], Array]);
    if (!page || Array.isArray(page)) {
      const dims = Array.isArray(page) ? page : PageSizes.A4;
      page = PDFPage.create(this);
      page.setSize(...dims);
    } else if (page.doc !== this) {
      throw new ForeignPageError();
    }
    const parentRef = this.catalog.insertLeafNode(page.ref, index);
    page.node.setParent(parentRef);
    this.pageMap.set(page.node, page);
    this.pageCache.invalidate();
    this.pageCount = pageCount + 1;
    return page;
  }
  /**
   * Copy pages from a source document into this document. Allows pages to be
   * copied between different [[PDFDocument]] instances. For example:
   * ```js
   * const pdfDoc = await PDFDocument.create()
   * const srcDoc = await PDFDocument.load(...)
   *
   * const copiedPages = await pdfDoc.copyPages(srcDoc, [0, 3, 89])
   * const [firstPage, fourthPage, ninetiethPage] = copiedPages;
   *
   * pdfDoc.addPage(fourthPage)
   * pdfDoc.insertPage(0, ninetiethPage)
   * pdfDoc.addPage(firstPage)
   * ```
   * @param srcDoc The document from which pages should be copied.
   * @param indices The indices of the pages that should be copied.
   * @returns Resolves with an array of pages copied into this document.
   */
  async copyPages(srcDoc, indices) {
    assertIs(srcDoc, "srcDoc", [[_PDFDocument, "PDFDocument"]]);
    assertIs(indices, "indices", [Array]);
    await srcDoc.flush();
    const copier = PDFObjectCopier_default.for(srcDoc.context, this.context);
    const srcPages = srcDoc.getPages();
    const copiedPages = new Array(indices.length);
    for (let idx = 0, len = indices.length; idx < len; idx++) {
      const srcPage = srcPages[indices[idx]];
      const copiedPage = copier.copy(srcPage.node);
      const ref = this.context.register(copiedPage);
      copiedPages[idx] = PDFPage.of(copiedPage, ref, this);
    }
    return copiedPages;
  }
  /**
   * Get a copy of this document.
   *
   * For example:
   * ```js
   * const srcDoc = await PDFDocument.load(...)
   * const pdfDoc = await srcDoc.copy()
   * ```
   *
   * > **NOTE:**  This method won't copy all information over to the new
   * > document (acroforms, outlines, etc...).
   *
   * @returns Resolves with a copy this document.
   */
  async copy() {
    const pdfCopy = await _PDFDocument.create();
    const contentPages = await pdfCopy.copyPages(this, this.getPageIndices());
    for (let idx = 0, len = contentPages.length; idx < len; idx++) {
      pdfCopy.addPage(contentPages[idx]);
    }
    if (this.getAuthor() !== void 0) {
      pdfCopy.setAuthor(this.getAuthor());
    }
    if (this.getCreationDate() !== void 0) {
      pdfCopy.setCreationDate(this.getCreationDate());
    }
    if (this.getCreator() !== void 0) {
      pdfCopy.setCreator(this.getCreator());
    }
    if (this.getModificationDate() !== void 0) {
      pdfCopy.setModificationDate(this.getModificationDate());
    }
    if (this.getProducer() !== void 0) {
      pdfCopy.setProducer(this.getProducer());
    }
    if (this.getSubject() !== void 0) {
      pdfCopy.setSubject(this.getSubject());
    }
    if (this.getTitle() !== void 0) {
      pdfCopy.setTitle(this.getTitle());
    }
    pdfCopy.defaultWordBreaks = this.defaultWordBreaks;
    return pdfCopy;
  }
  /**
   * Add JavaScript to this document. The supplied `script` is executed when the
   * document is opened. The `script` can be used to perform some operation
   * when the document is opened (e.g. logging to the console), or it can be
   * used to define a function that can be referenced later in a JavaScript
   * action. For example:
   * ```js
   * // Show "Hello World!" in the console when the PDF is opened
   * pdfDoc.addJavaScript(
   *   'main',
   *   'console.show(); console.println("Hello World!");'
   * );
   *
   * // Define a function named "foo" that can be called in JavaScript Actions
   * pdfDoc.addJavaScript(
   *   'foo',
   *   'function foo() { return "foo"; }'
   * );
   * ```
   * See the [JavaScript for Acrobat API Reference](https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/js_api_reference.pdf)
   * for details.
   * @param name The name of the script. Must be unique per document.
   * @param script The JavaScript to execute.
   */
  addJavaScript(name, script) {
    assertIs(name, "name", ["string"]);
    assertIs(script, "script", ["string"]);
    const embedder = JavaScriptEmbedder_default.for(script, name);
    const ref = this.context.nextRef();
    const javaScript = PDFJavaScript.of(ref, this, embedder);
    this.javaScripts.push(javaScript);
  }
  /**
   * Add an attachment to this document. Attachments are visible in the
   * "Attachments" panel of Adobe Acrobat and some other PDF readers. Any
   * type of file can be added as an attachment. This includes, but is not
   * limited to, `.png`, `.jpg`, `.pdf`, `.csv`, `.docx`, and `.xlsx` files.
   *
   * The input data can be provided in multiple formats:
   *
   * | Type          | Contents                                                       |
   * | ------------- | -------------------------------------------------------------- |
   * | `string`      | A base64 encoded string (or data URI) containing an attachment |
   * | `Uint8Array`  | The raw bytes of an attachment                                 |
   * | `ArrayBuffer` | The raw bytes of an attachment                                 |
   *
   * For example:
   * ```js
   * // attachment=string
   * await pdfDoc.attach('/9j/4AAQSkZJRgABAQAAAQABAAD/2wBD...', 'cat_riding_unicorn.jpg', {
   *   mimeType: 'image/jpeg',
   *   description: 'Cool cat riding a unicorn! 🦄🐈🕶️',
   *   creationDate: new Date('2019/12/01'),
   *   modificationDate: new Date('2020/04/19'),
   * })
   * await pdfDoc.attach('data:image/jpeg;base64,/9j/4AAQ...', 'cat_riding_unicorn.jpg', {
   *   mimeType: 'image/jpeg',
   *   description: 'Cool cat riding a unicorn! 🦄🐈🕶️',
   *   creationDate: new Date('2019/12/01'),
   *   modificationDate: new Date('2020/04/19'),
   * })
   *
   * // attachment=Uint8Array
   * import fs from 'fs'
   * const uint8Array = fs.readFileSync('cat_riding_unicorn.jpg')
   * await pdfDoc.attach(uint8Array, 'cat_riding_unicorn.jpg', {
   *   mimeType: 'image/jpeg',
   *   description: 'Cool cat riding a unicorn! 🦄🐈🕶️',
   *   creationDate: new Date('2019/12/01'),
   *   modificationDate: new Date('2020/04/19'),
   * })
   *
   * // attachment=ArrayBuffer
   * const url = 'https://pdf-lib.js.org/assets/cat_riding_unicorn.jpg'
   * const arrayBuffer = await fetch(url).then(res => res.arrayBuffer())
   * await pdfDoc.attach(arrayBuffer, 'cat_riding_unicorn.jpg', {
   *   mimeType: 'image/jpeg',
   *   description: 'Cool cat riding a unicorn! 🦄🐈🕶️',
   *   creationDate: new Date('2019/12/01'),
   *   modificationDate: new Date('2020/04/19'),
   * })
   * ```
   *
   * @param attachment The input data containing the file to be attached.
   * @param name The name of the file to be attached.
   * @returns Resolves when the attachment is complete.
   */
  async attach(attachment, name, options = {}) {
    assertIs(attachment, "attachment", ["string", Uint8Array, ArrayBuffer]);
    assertIs(name, "name", ["string"]);
    assertOrUndefined(options.mimeType, "mimeType", ["string"]);
    assertOrUndefined(options.description, "description", ["string"]);
    assertOrUndefined(options.creationDate, "options.creationDate", [Date]);
    assertOrUndefined(options.modificationDate, "options.modificationDate", [
      Date
    ]);
    assertIsOneOfOrUndefined(
      options.afRelationship,
      "options.afRelationship",
      AFRelationship
    );
    const bytes = toUint8Array(attachment);
    const embedder = FileEmbedder_default.for(bytes, name, options);
    const ref = this.context.nextRef();
    const embeddedFile = PDFEmbeddedFile.of(ref, this, embedder);
    this.embeddedFiles.push(embeddedFile);
  }
  /**
   * Embed a font into this document. The input data can be provided in multiple
   * formats:
   *
   * | Type            | Contents                                                |
   * | --------------- | ------------------------------------------------------- |
   * | `StandardFonts` | One of the standard 14 fonts                            |
   * | `string`        | A base64 encoded string (or data URI) containing a font |
   * | `Uint8Array`    | The raw bytes of a font                                 |
   * | `ArrayBuffer`   | The raw bytes of a font                                 |
   *
   * For example:
   * ```js
   * // font=StandardFonts
   * import { StandardFonts } from 'pdf-lib'
   * const font1 = await pdfDoc.embedFont(StandardFonts.Helvetica)
   *
   * // font=string
   * const font2 = await pdfDoc.embedFont('AAEAAAAVAQAABABQRFNJRx/upe...')
   * const font3 = await pdfDoc.embedFont('data:font/opentype;base64,AAEAAA...')
   *
   * // font=Uint8Array
   * import fs from 'fs'
   * const font4 = await pdfDoc.embedFont(fs.readFileSync('Ubuntu-R.ttf'))
   *
   * // font=ArrayBuffer
   * const url = 'https://pdf-lib.js.org/assets/ubuntu/Ubuntu-R.ttf'
   * const ubuntuBytes = await fetch(url).then(res => res.arrayBuffer())
   * const font5 = await pdfDoc.embedFont(ubuntuBytes)
   * ```
   * See also: [[registerFontkit]]
   * @param font The input data for a font.
   * @param options The options to be used when embedding the font.
   * @returns Resolves with the embedded font.
   */
  async embedFont(font, options = {}) {
    const { subset = false, customName, features } = options;
    assertIs(font, "font", ["string", Uint8Array, ArrayBuffer]);
    assertIs(subset, "subset", ["boolean"]);
    let embedder;
    if (isStandardFont(font)) {
      embedder = StandardFontEmbedder_default.for(font, customName);
    } else if (canBeConvertedToUint8Array(font)) {
      const bytes = toUint8Array(font);
      const fontkit = this.assertFontkit();
      embedder = subset ? await CustomFontSubsetEmbedder_default.for(
        fontkit,
        bytes,
        customName,
        features
      ) : await CustomFontEmbedder_default.for(fontkit, bytes, customName, features);
    } else {
      throw new TypeError(
        "`font` must be one of `StandardFonts | string | Uint8Array | ArrayBuffer`"
      );
    }
    const ref = this.context.nextRef();
    const pdfFont = PDFFont.of(ref, this, embedder);
    this.fonts.push(pdfFont);
    return pdfFont;
  }
  /**
   * Embed a standard font into this document.
   * For example:
   * ```js
   * import { StandardFonts } from 'pdf-lib'
   * const helveticaFont = pdfDoc.embedFont(StandardFonts.Helvetica)
   * ```
   * @param font The standard font to be embedded.
   * @param customName The name to be used when embedding the font.
   * @returns The embedded font.
   */
  embedStandardFont(font, customName) {
    assertIs(font, "font", ["string"]);
    if (!isStandardFont(font)) {
      throw new TypeError("`font` must be one of type `StandardFonts`");
    }
    const embedder = StandardFontEmbedder_default.for(font, customName);
    const ref = this.context.nextRef();
    const pdfFont = PDFFont.of(ref, this, embedder);
    this.fonts.push(pdfFont);
    return pdfFont;
  }
  /**
   * Embed a JPEG image into this document. The input data can be provided in
   * multiple formats:
   *
   * | Type          | Contents                                                      |
   * | ------------- | ------------------------------------------------------------- |
   * | `string`      | A base64 encoded string (or data URI) containing a JPEG image |
   * | `Uint8Array`  | The raw bytes of a JPEG image                                 |
   * | `ArrayBuffer` | The raw bytes of a JPEG image                                 |
   *
   * For example:
   * ```js
   * // jpg=string
   * const image1 = await pdfDoc.embedJpg('/9j/4AAQSkZJRgABAQAAAQABAAD/2wBD...')
   * const image2 = await pdfDoc.embedJpg('data:image/jpeg;base64,/9j/4AAQ...')
   *
   * // jpg=Uint8Array
   * import fs from 'fs'
   * const uint8Array = fs.readFileSync('cat_riding_unicorn.jpg')
   * const image3 = await pdfDoc.embedJpg(uint8Array)
   *
   * // jpg=ArrayBuffer
   * const url = 'https://pdf-lib.js.org/assets/cat_riding_unicorn.jpg'
   * const arrayBuffer = await fetch(url).then(res => res.arrayBuffer())
   * const image4 = await pdfDoc.embedJpg(arrayBuffer)
   * ```
   *
   * @param jpg The input data for a JPEG image.
   * @returns Resolves with the embedded image.
   */
  async embedJpg(jpg) {
    assertIs(jpg, "jpg", ["string", Uint8Array, ArrayBuffer]);
    const bytes = toUint8Array(jpg);
    const embedder = await JpegEmbedder_default.for(bytes);
    const ref = this.context.nextRef();
    const pdfImage = PDFImage.of(ref, this, embedder);
    this.images.push(pdfImage);
    return pdfImage;
  }
  /**
   * Embed a PNG image into this document. The input data can be provided in
   * multiple formats:
   *
   * | Type          | Contents                                                     |
   * | ------------- | ------------------------------------------------------------ |
   * | `string`      | A base64 encoded string (or data URI) containing a PNG image |
   * | `Uint8Array`  | The raw bytes of a PNG image                                 |
   * | `ArrayBuffer` | The raw bytes of a PNG image                                 |
   *
   * For example:
   * ```js
   * // png=string
   * const image1 = await pdfDoc.embedPng('iVBORw0KGgoAAAANSUhEUgAAAlgAAAF3...')
   * const image2 = await pdfDoc.embedPng('data:image/png;base64,iVBORw0KGg...')
   *
   * // png=Uint8Array
   * import fs from 'fs'
   * const uint8Array = fs.readFileSync('small_mario.png')
   * const image3 = await pdfDoc.embedPng(uint8Array)
   *
   * // png=ArrayBuffer
   * const url = 'https://pdf-lib.js.org/assets/small_mario.png'
   * const arrayBuffer = await fetch(url).then(res => res.arrayBuffer())
   * const image4 = await pdfDoc.embedPng(arrayBuffer)
   * ```
   *
   * @param png The input data for a PNG image.
   * @returns Resolves with the embedded image.
   */
  async embedPng(png) {
    assertIs(png, "png", ["string", Uint8Array, ArrayBuffer]);
    const bytes = toUint8Array(png);
    const embedder = await PngEmbedder_default.for(bytes);
    const ref = this.context.nextRef();
    const pdfImage = PDFImage.of(ref, this, embedder);
    this.images.push(pdfImage);
    return pdfImage;
  }
  /**
   * Embed one or more PDF pages into this document.
   *
   * For example:
   * ```js
   * const pdfDoc = await PDFDocument.create()
   *
   * const sourcePdfUrl = 'https://pdf-lib.js.org/assets/with_large_page_count.pdf'
   * const sourcePdf = await fetch(sourcePdfUrl).then((res) => res.arrayBuffer())
   *
   * // Embed page 74 of `sourcePdf` into `pdfDoc`
   * const [embeddedPage] = await pdfDoc.embedPdf(sourcePdf, [73])
   * ```
   *
   * See [[PDFDocument.load]] for examples of the allowed input data formats.
   *
   * @param pdf The input data containing a PDF document.
   * @param indices The indices of the pages that should be embedded.
   * @returns Resolves with an array of the embedded pages.
   */
  async embedPdf(pdf, indices = [0]) {
    assertIs(pdf, "pdf", [
      "string",
      Uint8Array,
      ArrayBuffer,
      [_PDFDocument, "PDFDocument"]
    ]);
    assertIs(indices, "indices", [Array]);
    const srcDoc = pdf instanceof _PDFDocument ? pdf : await _PDFDocument.load(pdf);
    const srcPages = pluckIndices(srcDoc.getPages(), indices);
    return this.embedPages(srcPages);
  }
  /**
   * Embed a single PDF page into this document.
   *
   * For example:
   * ```js
   * const pdfDoc = await PDFDocument.create()
   *
   * const sourcePdfUrl = 'https://pdf-lib.js.org/assets/with_large_page_count.pdf'
   * const sourceBuffer = await fetch(sourcePdfUrl).then((res) => res.arrayBuffer())
   * const sourcePdfDoc = await PDFDocument.load(sourceBuffer)
   * const sourcePdfPage = sourcePdfDoc.getPages()[73]
   *
   * const embeddedPage = await pdfDoc.embedPage(
   *   sourcePdfPage,
   *
   *   // Clip a section of the source page so that we only embed part of it
   *   { left: 100, right: 450, bottom: 330, top: 570 },
   *
   *   // Translate all drawings of the embedded page by (10, 200) units
   *   [1, 0, 0, 1, 10, 200],
   * )
   * ```
   *
   * @param page The page to be embedded.
   * @param boundingBox
   * Optionally, an area of the source page that should be embedded
   * (defaults to entire page).
   * @param transformationMatrix
   * Optionally, a transformation matrix that is always applied to the embedded
   * page anywhere it is drawn.
   * @returns Resolves with the embedded pdf page.
   */
  async embedPage(page, boundingBox, transformationMatrix) {
    assertIs(page, "page", [[PDFPage, "PDFPage"]]);
    const [embeddedPage] = await this.embedPages(
      [page],
      [boundingBox],
      [transformationMatrix]
    );
    return embeddedPage;
  }
  /**
   * Embed one or more PDF pages into this document.
   *
   * For example:
   * ```js
   * const pdfDoc = await PDFDocument.create()
   *
   * const sourcePdfUrl = 'https://pdf-lib.js.org/assets/with_large_page_count.pdf'
   * const sourceBuffer = await fetch(sourcePdfUrl).then((res) => res.arrayBuffer())
   * const sourcePdfDoc = await PDFDocument.load(sourceBuffer)
   *
   * const page1 = sourcePdfDoc.getPages()[0]
   * const page2 = sourcePdfDoc.getPages()[52]
   * const page3 = sourcePdfDoc.getPages()[73]
   *
   * const embeddedPages = await pdfDoc.embedPages([page1, page2, page3])
   * ```
   *
   * @param page
   * The pages to be embedded (they must all share the same context).
   * @param boundingBoxes
   * Optionally, an array of clipping boundaries - one for each page
   * (defaults to entirety of each page).
   * @param transformationMatrices
   * Optionally, an array of transformation matrices - one for each page
   * (each page's transformation will apply anywhere it is drawn).
   * @returns Resolves with an array of the embedded pdf pages.
   */
  async embedPages(pages, boundingBoxes = [], transformationMatrices = []) {
    if (pages.length === 0) return [];
    for (let idx = 0, len = pages.length - 1; idx < len; idx++) {
      const currPage = pages[idx];
      const nextPage = pages[idx + 1];
      if (currPage.node.context !== nextPage.node.context) {
        throw new PageEmbeddingMismatchedContextError();
      }
    }
    const context = pages[0].node.context;
    const maybeCopyPage = context === this.context ? (p) => p : PDFObjectCopier_default.for(context, this.context).copy;
    const embeddedPages = new Array(pages.length);
    for (let idx = 0, len = pages.length; idx < len; idx++) {
      const page = maybeCopyPage(pages[idx].node);
      const box = boundingBoxes[idx];
      const matrix = transformationMatrices[idx];
      const embedder = await PDFPageEmbedder_default.for(page, box, matrix);
      const ref = this.context.nextRef();
      embeddedPages[idx] = PDFEmbeddedPage.of(ref, this, embedder);
    }
    this.embeddedPages.push(...embeddedPages);
    return embeddedPages;
  }
  /**
   * > **NOTE:** You shouldn't need to call this method directly. The [[save]]
   * > and [[saveAsBase64]] methods will automatically ensure that all embedded
   * > assets are flushed before serializing the document.
   *
   * Flush all embedded fonts, PDF pages, and images to this document's
   * [[context]].
   *
   * @returns Resolves when the flush is complete.
   */
  async flush() {
    await this.embedAll(this.fonts);
    await this.embedAll(this.images);
    await this.embedAll(this.embeddedPages);
    await this.embedAll(this.embeddedFiles);
    await this.embedAll(this.javaScripts);
  }
  /**
   * Serialize this document to an array of bytes making up a PDF file.
   * For example:
   * ```js
   * const pdfBytes = await pdfDoc.save()
   * ```
   *
   * There are a number of things you can do with the serialized document,
   * depending on the JavaScript environment you're running in:
   * * Write it to a file in Node or React Native
   * * Download it as a Blob in the browser
   * * Render it in an `iframe`
   *
   * @param options The options to be used when saving the document.
   * @returns Resolves with the bytes of the serialized document.
   */
  async save(options = {}) {
    const {
      useObjectStreams = true,
      addDefaultPage = true,
      objectsPerTick = 50,
      updateFieldAppearances = true
    } = options;
    assertIs(useObjectStreams, "useObjectStreams", ["boolean"]);
    assertIs(addDefaultPage, "addDefaultPage", ["boolean"]);
    assertIs(objectsPerTick, "objectsPerTick", ["number"]);
    assertIs(updateFieldAppearances, "updateFieldAppearances", ["boolean"]);
    if (addDefaultPage && this.getPageCount() === 0) this.addPage();
    if (updateFieldAppearances) {
      const form = this.formCache.getValue();
      if (form) form.updateFieldAppearances();
    }
    await this.flush();
    const Writer = useObjectStreams ? PDFStreamWriter_default : PDFWriter_default;
    return Writer.forContext(this.context, objectsPerTick).serializeToBuffer();
  }
  /**
   * Serialize this document to a base64 encoded string or data URI making up a
   * PDF file. For example:
   * ```js
   * const base64String = await pdfDoc.saveAsBase64()
   * base64String // => 'JVBERi0xLjcKJYGBgYEKC...'
   *
   * const base64DataUri = await pdfDoc.saveAsBase64({ dataUri: true })
   * base64DataUri // => 'data:application/pdf;base64,JVBERi0xLjcKJYGBgYEKC...'
   * ```
   *
   * @param options The options to be used when saving the document.
   * @returns Resolves with a base64 encoded string or data URI of the
   *          serialized document.
   */
  async saveAsBase64(options = {}) {
    const { dataUri = false, ...otherOptions } = options;
    assertIs(dataUri, "dataUri", ["boolean"]);
    const bytes = await this.save(otherOptions);
    const base64 = encodeToBase64(bytes);
    return dataUri ? `data:application/pdf;base64,${base64}` : base64;
  }
  findPageForAnnotationRef(ref) {
    const pages = this.getPages();
    for (let idx = 0, len = pages.length; idx < len; idx++) {
      const page = pages[idx];
      const annotations = page.node.Annots();
      if (annotations?.indexOf(ref) !== void 0) {
        return page;
      }
    }
    return void 0;
  }
  async embedAll(embeddables) {
    for (let idx = 0, len = embeddables.length; idx < len; idx++) {
      await embeddables[idx].embed();
    }
  }
  updateInfoDict() {
    const pdfLib = "pdf-lib (https://github.com/Hopding/pdf-lib)";
    const now = /* @__PURE__ */ new Date();
    const info = this.getInfoDict();
    this.setProducer(pdfLib);
    this.setModificationDate(now);
    if (!info.get(PDFName_default.of("Creator"))) this.setCreator(pdfLib);
    if (!info.get(PDFName_default.of("CreationDate"))) this.setCreationDate(now);
  }
  getInfoDict() {
    const existingInfo = this.context.lookup(this.context.trailerInfo.Info);
    if (existingInfo instanceof PDFDict_default) return existingInfo;
    const newInfo = this.context.obj({});
    this.context.trailerInfo.Info = this.context.register(newInfo);
    return newInfo;
  }
  assertFontkit() {
    if (!this.fontkit) throw new FontkitNotRegisteredError();
    return this.fontkit;
  }
};
function assertIsLiteralOrHexString(pdfObject) {
  if (!(pdfObject instanceof PDFHexString_default) && !(pdfObject instanceof PDFString_default)) {
    throw new UnexpectedObjectTypeError([PDFHexString_default, PDFString_default], pdfObject);
  }
}

// src/api/PDFPageOptions.ts
var BlendMode = /* @__PURE__ */ ((BlendMode2) => {
  BlendMode2["Normal"] = "Normal";
  BlendMode2["Multiply"] = "Multiply";
  BlendMode2["Screen"] = "Screen";
  BlendMode2["Overlay"] = "Overlay";
  BlendMode2["Darken"] = "Darken";
  BlendMode2["Lighten"] = "Lighten";
  BlendMode2["ColorDodge"] = "ColorDodge";
  BlendMode2["ColorBurn"] = "ColorBurn";
  BlendMode2["HardLight"] = "HardLight";
  BlendMode2["SoftLight"] = "SoftLight";
  BlendMode2["Difference"] = "Difference";
  BlendMode2["Exclusion"] = "Exclusion";
  return BlendMode2;
})(BlendMode || {});

// src/api/PDFPage.ts
var _PDFPage = class _PDFPage {
  constructor(leafNode, ref, doc) {
    /** The low-level PDFDictionary wrapped by this page. */
    __publicField(this, "node");
    /** The unique reference assigned to this page within the document. */
    __publicField(this, "ref");
    /** The document to which this page belongs. */
    __publicField(this, "doc");
    __publicField(this, "fontKey");
    __publicField(this, "font");
    __publicField(this, "fontSize", 24);
    __publicField(this, "fontColor", rgb(0, 0, 0));
    __publicField(this, "lineHeight", 24);
    __publicField(this, "x", 0);
    __publicField(this, "y", 0);
    __publicField(this, "contentStream");
    __publicField(this, "contentStreamRef");
    assertIs(leafNode, "leafNode", [[PDFPageLeaf_default, "PDFPageLeaf"]]);
    assertIs(ref, "ref", [[PDFRef_default, "PDFRef"]]);
    assertIs(doc, "doc", [[PDFDocument, "PDFDocument"]]);
    this.node = leafNode;
    this.ref = ref;
    this.doc = doc;
  }
  /**
   * Rotate this page by a multiple of 90 degrees. For example:
   * ```js
   * import { degrees } from 'pdf-lib'
   *
   * page.setRotation(degrees(-90))
   * page.setRotation(degrees(0))
   * page.setRotation(degrees(90))
   * page.setRotation(degrees(180))
   * page.setRotation(degrees(270))
   * ```
   * @param angle The angle to rotate this page.
   */
  setRotation(angle) {
    const degreesAngle = toDegrees(angle);
    assertMultiple(degreesAngle, "degreesAngle", 90);
    this.node.set(PDFName_default.of("Rotate"), this.doc.context.obj(degreesAngle));
  }
  /**
   * Get this page's rotation angle in degrees. For example:
   * ```js
   * const rotationAngle = page.getRotation().angle;
   * ```
   * @returns The rotation angle of the page in degrees (always a multiple of
   *          90 degrees).
   */
  getRotation() {
    const Rotate = this.node.Rotate();
    return degrees(Rotate ? Rotate.asNumber() : 0);
  }
  /**
   * Resize this page by increasing or decreasing its width and height. For
   * example:
   * ```js
   * page.setSize(250, 500)
   * page.setSize(page.getWidth() + 50, page.getHeight() + 100)
   * page.setSize(page.getWidth() - 50, page.getHeight() - 100)
   * ```
   *
   * Note that the PDF specification does not allow for pages to have explicit
   * widths and heights. Instead it defines the "size" of a page in terms of
   * five rectangles: the MediaBox, CropBox, BleedBox, TrimBox, and ArtBox. As a
   * result, this method cannot directly change the width and height of a page.
   * Instead, it works by adjusting these five boxes.
   *
   * This method performs the following steps:
   *   1. Set width & height of MediaBox.
   *   2. Set width & height of CropBox, if it has same dimensions as MediaBox.
   *   3. Set width & height of BleedBox, if it has same dimensions as MediaBox.
   *   4. Set width & height of TrimBox, if it has same dimensions as MediaBox.
   *   5. Set width & height of ArtBox, if it has same dimensions as MediaBox.
   *
   * This approach works well for most PDF documents as all PDF pages must
   * have a MediaBox, but relatively few have a CropBox, BleedBox, TrimBox, or
   * ArtBox. And when they do have these additional boxes, they often have the
   * same dimensions as the MediaBox. However, if you find this method does not
   * work for your document, consider setting the boxes directly:
   *   * [[PDFPage.setMediaBox]]
   *   * [[PDFPage.setCropBox]]
   *   * [[PDFPage.setBleedBox]]
   *   * [[PDFPage.setTrimBox]]
   *   * [[PDFPage.setArtBox]]
   *
   * @param width The new width of the page.
   * @param height The new height of the page.
   */
  setSize(width, height) {
    assertIs(width, "width", ["number"]);
    assertIs(height, "height", ["number"]);
    const mediaBox = this.getMediaBox();
    this.setMediaBox(mediaBox.x, mediaBox.y, width, height);
    const cropBox = this.getCropBox();
    const bleedBox = this.getBleedBox();
    const trimBox = this.getTrimBox();
    const artBox = this.getArtBox();
    const hasCropBox = this.node.CropBox();
    const hasBleedBox = this.node.BleedBox();
    const hasTrimBox = this.node.TrimBox();
    const hasArtBox = this.node.ArtBox();
    if (hasCropBox && rectanglesAreEqual(cropBox, mediaBox)) {
      this.setCropBox(mediaBox.x, mediaBox.y, width, height);
    }
    if (hasBleedBox && rectanglesAreEqual(bleedBox, mediaBox)) {
      this.setBleedBox(mediaBox.x, mediaBox.y, width, height);
    }
    if (hasTrimBox && rectanglesAreEqual(trimBox, mediaBox)) {
      this.setTrimBox(mediaBox.x, mediaBox.y, width, height);
    }
    if (hasArtBox && rectanglesAreEqual(artBox, mediaBox)) {
      this.setArtBox(mediaBox.x, mediaBox.y, width, height);
    }
  }
  /**
   * Resize this page by increasing or decreasing its width. For example:
   * ```js
   * page.setWidth(250)
   * page.setWidth(page.getWidth() + 50)
   * page.setWidth(page.getWidth() - 50)
   * ```
   *
   * This method uses [[PDFPage.setSize]] to set the page's width.
   *
   * @param width The new width of the page.
   */
  setWidth(width) {
    assertIs(width, "width", ["number"]);
    this.setSize(width, this.getSize().height);
  }
  /**
   * Resize this page by increasing or decreasing its height. For example:
   * ```js
   * page.setHeight(500)
   * page.setHeight(page.getWidth() + 100)
   * page.setHeight(page.getWidth() - 100)
   * ```
   *
   * This method uses [[PDFPage.setSize]] to set the page's height.
   *
   * @param height The new height of the page.
   */
  setHeight(height) {
    assertIs(height, "height", ["number"]);
    this.setSize(this.getSize().width, height);
  }
  /**
   * Set the MediaBox of this page. For example:
   * ```js
   * const mediaBox = page.getMediaBox()
   *
   * page.setMediaBox(0, 0, 250, 500)
   * page.setMediaBox(mediaBox.x, mediaBox.y, 50, 100)
   * page.setMediaBox(15, 5, mediaBox.width - 50, mediaBox.height - 100)
   * ```
   *
   * See [[PDFPage.getMediaBox]] for details about what the MediaBox represents.
   *
   * @param x The x coordinate of the lower left corner of the new MediaBox.
   * @param y The y coordinate of the lower left corner of the new MediaBox.
   * @param width The width of the new MediaBox.
   * @param height The height of the new MediaBox.
   */
  setMediaBox(x, y, width, height) {
    assertIs(x, "x", ["number"]);
    assertIs(y, "y", ["number"]);
    assertIs(width, "width", ["number"]);
    assertIs(height, "height", ["number"]);
    const mediaBox = this.doc.context.obj([x, y, x + width, y + height]);
    this.node.set(PDFName_default.MediaBox, mediaBox);
  }
  /**
   * Set the CropBox of this page. For example:
   * ```js
   * const cropBox = page.getCropBox()
   *
   * page.setCropBox(0, 0, 250, 500)
   * page.setCropBox(cropBox.x, cropBox.y, 50, 100)
   * page.setCropBox(15, 5, cropBox.width - 50, cropBox.height - 100)
   * ```
   *
   * See [[PDFPage.getCropBox]] for details about what the CropBox represents.
   *
   * @param x The x coordinate of the lower left corner of the new CropBox.
   * @param y The y coordinate of the lower left corner of the new CropBox.
   * @param width The width of the new CropBox.
   * @param height The height of the new CropBox.
   */
  setCropBox(x, y, width, height) {
    assertIs(x, "x", ["number"]);
    assertIs(y, "y", ["number"]);
    assertIs(width, "width", ["number"]);
    assertIs(height, "height", ["number"]);
    const cropBox = this.doc.context.obj([x, y, x + width, y + height]);
    this.node.set(PDFName_default.CropBox, cropBox);
  }
  /**
   * Set the BleedBox of this page. For example:
   * ```js
   * const bleedBox = page.getBleedBox()
   *
   * page.setBleedBox(0, 0, 250, 500)
   * page.setBleedBox(bleedBox.x, bleedBox.y, 50, 100)
   * page.setBleedBox(15, 5, bleedBox.width - 50, bleedBox.height - 100)
   * ```
   *
   * See [[PDFPage.getBleedBox]] for details about what the BleedBox represents.
   *
   * @param x The x coordinate of the lower left corner of the new BleedBox.
   * @param y The y coordinate of the lower left corner of the new BleedBox.
   * @param width The width of the new BleedBox.
   * @param height The height of the new BleedBox.
   */
  setBleedBox(x, y, width, height) {
    assertIs(x, "x", ["number"]);
    assertIs(y, "y", ["number"]);
    assertIs(width, "width", ["number"]);
    assertIs(height, "height", ["number"]);
    const bleedBox = this.doc.context.obj([x, y, x + width, y + height]);
    this.node.set(PDFName_default.BleedBox, bleedBox);
  }
  /**
   * Set the TrimBox of this page. For example:
   * ```js
   * const trimBox = page.getTrimBox()
   *
   * page.setTrimBox(0, 0, 250, 500)
   * page.setTrimBox(trimBox.x, trimBox.y, 50, 100)
   * page.setTrimBox(15, 5, trimBox.width - 50, trimBox.height - 100)
   * ```
   *
   * See [[PDFPage.getTrimBox]] for details about what the TrimBox represents.
   *
   * @param x The x coordinate of the lower left corner of the new TrimBox.
   * @param y The y coordinate of the lower left corner of the new TrimBox.
   * @param width The width of the new TrimBox.
   * @param height The height of the new TrimBox.
   */
  setTrimBox(x, y, width, height) {
    assertIs(x, "x", ["number"]);
    assertIs(y, "y", ["number"]);
    assertIs(width, "width", ["number"]);
    assertIs(height, "height", ["number"]);
    const trimBox = this.doc.context.obj([x, y, x + width, y + height]);
    this.node.set(PDFName_default.TrimBox, trimBox);
  }
  /**
   * Set the ArtBox of this page. For example:
   * ```js
   * const artBox = page.getArtBox()
   *
   * page.setArtBox(0, 0, 250, 500)
   * page.setArtBox(artBox.x, artBox.y, 50, 100)
   * page.setArtBox(15, 5, artBox.width - 50, artBox.height - 100)
   * ```
   *
   * See [[PDFPage.getArtBox]] for details about what the ArtBox represents.
   *
   * @param x The x coordinate of the lower left corner of the new ArtBox.
   * @param y The y coordinate of the lower left corner of the new ArtBox.
   * @param width The width of the new ArtBox.
   * @param height The height of the new ArtBox.
   */
  setArtBox(x, y, width, height) {
    assertIs(x, "x", ["number"]);
    assertIs(y, "y", ["number"]);
    assertIs(width, "width", ["number"]);
    assertIs(height, "height", ["number"]);
    const artBox = this.doc.context.obj([x, y, x + width, y + height]);
    this.node.set(PDFName_default.ArtBox, artBox);
  }
  /**
   * Get this page's width and height. For example:
   * ```js
   * const { width, height } = page.getSize()
   * ```
   *
   * This method uses [[PDFPage.getMediaBox]] to obtain the page's
   * width and height.
   *
   * @returns The width and height of the page.
   */
  getSize() {
    const { width, height } = this.getMediaBox();
    return { width, height };
  }
  /**
   * Get this page's width. For example:
   * ```js
   * const width = page.getWidth()
   * ```
   *
   * This method uses [[PDFPage.getSize]] to obtain the page's size.
   *
   * @returns The width of the page.
   */
  getWidth() {
    return this.getSize().width;
  }
  /**
   * Get this page's height. For example:
   * ```js
   * const height = page.getHeight()
   * ```
   *
   * This method uses [[PDFPage.getSize]] to obtain the page's size.
   *
   * @returns The height of the page.
   */
  getHeight() {
    return this.getSize().height;
  }
  /**
   * Get the rectangle defining this page's MediaBox. For example:
   * ```js
   * const { x, y, width, height } = page.getMediaBox()
   * ```
   *
   * The MediaBox of a page defines the boundaries of the physical medium on
   * which the page is to be displayed/printed. It may include extended area
   * surrounding the page content for bleed marks, printing marks, etc...
   * It may also include areas close to the edges of the medium that cannot be
   * marked because of physical limitations of the output device. Content
   * falling outside this boundary may safely be discarded without affecting
   * the meaning of the PDF file.
   *
   * @returns An object defining the lower left corner of the MediaBox and its
   *          width & height.
   */
  getMediaBox() {
    const mediaBox = this.node.MediaBox();
    return mediaBox.asRectangle();
  }
  /**
   * Get the rectangle defining this page's CropBox. For example:
   * ```js
   * const { x, y, width, height } = page.getCropBox()
   * ```
   *
   * The CropBox of a page defines the region to which the contents of the page
   * shall be clipped when displayed or printed. Unlike the other boxes, the
   * CropBox does not necessarily represent the physical page geometry. It
   * merely imposes clipping on the page contents.
   *
   * The CropBox's default value is the page's MediaBox.
   *
   * @returns An object defining the lower left corner of the CropBox and its
   *          width & height.
   */
  getCropBox() {
    const cropBox = this.node.CropBox();
    return cropBox?.asRectangle() ?? this.getMediaBox();
  }
  /**
   * Get the rectangle defining this page's BleedBox. For example:
   * ```js
   * const { x, y, width, height } = page.getBleedBox()
   * ```
   *
   * The BleedBox of a page defines the region to which the contents of the
   * page shall be clipped when output in a production environment. This may
   * include any extra bleed area needed to accommodate the physical
   * limitations of cutting, folding, and trimming equipment. The actual
   * printed page may include printing marks that fall outside the BleedBox.
   *
   * The BleedBox's default value is the page's CropBox.
   *
   * @returns An object defining the lower left corner of the BleedBox and its
   *          width & height.
   */
  getBleedBox() {
    const bleedBox = this.node.BleedBox();
    return bleedBox?.asRectangle() ?? this.getCropBox();
  }
  /**
   * Get the rectangle defining this page's TrimBox. For example:
   * ```js
   * const { x, y, width, height } = page.getTrimBox()
   * ```
   *
   * The TrimBox of a page defines the intended dimensions of the finished
   * page after trimming. It may be smaller than the MediaBox to allow for
   * production-related content, such as printing instructions, cut marks, or
   * color bars.
   *
   * The TrimBox's default value is the page's CropBox.
   *
   * @returns An object defining the lower left corner of the TrimBox and its
   *          width & height.
   */
  getTrimBox() {
    const trimBox = this.node.TrimBox();
    return trimBox?.asRectangle() ?? this.getCropBox();
  }
  /**
   * Get the rectangle defining this page's ArtBox. For example:
   * ```js
   * const { x, y, width, height } = page.getArtBox()
   * ```
   *
   * The ArtBox of a page defines the extent of the page's meaningful content
   * (including potential white space).
   *
   * The ArtBox's default value is the page's CropBox.
   *
   * @returns An object defining the lower left corner of the ArtBox and its
   *          width & height.
   */
  getArtBox() {
    const artBox = this.node.ArtBox();
    return artBox?.asRectangle() ?? this.getCropBox();
  }
  /**
   * Translate this page's content to a new location on the page. This operation
   * is often useful after resizing the page with [[setSize]]. For example:
   * ```js
   * // Add 50 units of whitespace to the top and right of the page
   * page.setSize(page.getWidth() + 50, page.getHeight() + 50)
   *
   * // Move the page's content from the lower-left corner of the page
   * // to the top-right corner.
   * page.translateContent(50, 50)
   *
   * // Now there are 50 units of whitespace to the left and bottom of the page
   * ```
   * See also: [[resetPosition]]
   * @param x The new position on the x-axis for this page's content.
   * @param y The new position on the y-axis for this page's content.
   */
  translateContent(x, y) {
    assertIs(x, "x", ["number"]);
    assertIs(y, "y", ["number"]);
    this.node.normalize();
    this.getContentStream();
    const start = this.createContentStream(
      pushGraphicsState(),
      translate(x, y)
    );
    const startRef = this.doc.context.register(start);
    const end = this.createContentStream(popGraphicsState());
    const endRef = this.doc.context.register(end);
    this.node.wrapContentStreams(startRef, endRef);
  }
  /**
   * Scale the size, content, and annotations of a page.
   *
   * For example:
   * ```js
   * page.scale(0.5, 0.5);
   * ```
   *
   * @param x The factor by which the width for the page should be scaled
   *          (e.g. `0.5` is 50%).
   * @param y The factor by which the height for the page should be scaled
   *          (e.g. `2.0` is 200%).
   */
  scale(x, y) {
    assertIs(x, "x", ["number"]);
    assertIs(y, "y", ["number"]);
    this.setSize(this.getWidth() * x, this.getHeight() * y);
    this.scaleContent(x, y);
    this.scaleAnnotations(x, y);
  }
  /**
   * Scale the content of a page. This is useful after resizing an existing
   * page. This scales only the content, not the annotations.
   *
   * For example:
   * ```js
   * // Bisect the size of the page
   * page.setSize(page.getWidth() / 2, page.getHeight() / 2);
   *
   * // Scale the content of the page down by 50% in x and y
   * page.scaleContent(0.5, 0.5);
   * ```
   * See also: [[scaleAnnotations]]
   * @param x The factor by which the x-axis for the content should be scaled
   *          (e.g. `0.5` is 50%).
   * @param y The factor by which the y-axis for the content should be scaled
   *          (e.g. `2.0` is 200%).
   */
  scaleContent(x, y) {
    assertIs(x, "x", ["number"]);
    assertIs(y, "y", ["number"]);
    this.node.normalize();
    this.getContentStream();
    const start = this.createContentStream(pushGraphicsState(), scale(x, y));
    const startRef = this.doc.context.register(start);
    const end = this.createContentStream(popGraphicsState());
    const endRef = this.doc.context.register(end);
    this.node.wrapContentStreams(startRef, endRef);
  }
  /**
   * Scale the annotations of a page. This is useful if you want to scale a
   * page with comments or other annotations.
   * ```js
   * // Scale the content of the page down by 50% in x and y
   * page.scaleContent(0.5, 0.5);
   *
   * // Scale the content of the page down by 50% in x and y
   * page.scaleAnnotations(0.5, 0.5);
   * ```
   * See also: [[scaleContent]]
   * @param x The factor by which the x-axis for the annotations should be
   *          scaled (e.g. `0.5` is 50%).
   * @param y The factor by which the y-axis for the annotations should be
   *          scaled (e.g. `2.0` is 200%).
   */
  scaleAnnotations(x, y) {
    assertIs(x, "x", ["number"]);
    assertIs(y, "y", ["number"]);
    const annots = this.node.Annots();
    if (!annots) return;
    for (let idx = 0; idx < annots.size(); idx++) {
      const annot = annots.lookup(idx);
      if (annot instanceof PDFDict_default) this.scaleAnnot(annot, x, y);
    }
  }
  /**
   * Reset the x and y coordinates of this page to `(0, 0)`. This operation is
   * often useful after calling [[translateContent]]. For example:
   * ```js
   * // Shift the page's contents up and to the right by 50 units
   * page.translateContent(50, 50)
   *
   * // This text will shifted - it will be drawn at (50, 50)
   * page.drawText('I am shifted')
   *
   * // Move back to (0, 0)
   * page.resetPosition()
   *
   * // This text will not be shifted - it will be drawn at (0, 0)
   * page.drawText('I am not shifted')
   * ```
   */
  resetPosition() {
    this.getContentStream(false);
    this.x = 0;
    this.y = 0;
  }
  /**
   * Choose a default font for this page. The default font will be used whenever
   * text is drawn on this page and no font is specified. For example:
   * ```js
   * import { StandardFonts } from 'pdf-lib'
   *
   * const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
   * const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
   * const courierFont = await pdfDoc.embedFont(StandardFonts.Courier)
   *
   * const page = pdfDoc.addPage()
   *
   * page.setFont(helveticaFont)
   * page.drawText('I will be drawn in Helvetica')
   *
   * page.setFont(timesRomanFont)
   * page.drawText('I will be drawn in Courier', { font: courierFont })
   * ```
   * @param font The default font to be used when drawing text on this page.
   */
  setFont(font) {
    assertIs(font, "font", [[PDFFont, "PDFFont"]]);
    this.font = font;
    this.fontKey = this.node.newFontDictionary(this.font.name, this.font.ref);
  }
  /**
   * Choose a default font size for this page. The default font size will be
   * used whenever text is drawn on this page and no font size is specified.
   * For example:
   * ```js
   * page.setFontSize(12)
   * page.drawText('I will be drawn in size 12')
   *
   * page.setFontSize(36)
   * page.drawText('I will be drawn in size 24', { fontSize: 24 })
   * ```
   * @param fontSize The default font size to be used when drawing text on this
   *                 page.
   */
  setFontSize(fontSize) {
    assertIs(fontSize, "fontSize", ["number"]);
    this.fontSize = fontSize;
  }
  /**
   * Choose a default font color for this page. The default font color will be
   * used whenever text is drawn on this page and no font color is specified.
   * For example:
   * ```js
   * import { rgb, cmyk, grayscale } from 'pdf-lib'
   *
   * page.setFontColor(rgb(0.97, 0.02, 0.97))
   * page.drawText('I will be drawn in pink')
   *
   * page.setFontColor(cmyk(0.4, 0.7, 0.39, 0.15))
   * page.drawText('I will be drawn in gray', { color: grayscale(0.5) })
   * ```
   * @param fontColor The default font color to be used when drawing text on
   *                  this page.
   */
  setFontColor(fontColor) {
    assertIs(fontColor, "fontColor", [[Object, "Color"]]);
    this.fontColor = fontColor;
  }
  /**
   * Choose a default line height for this page. The default line height will be
   * used whenever text is drawn on this page and no line height is specified.
   * For example:
   * ```js
   * page.setLineHeight(12);
   * page.drawText('These lines will be vertically \n separated by 12 units')
   *
   * page.setLineHeight(36);
   * page.drawText('These lines will be vertically \n separated by 24 units', {
   *   lineHeight: 24
   * })
   * ```
   * @param lineHeight The default line height to be used when drawing text on
   *                   this page.
   */
  setLineHeight(lineHeight) {
    assertIs(lineHeight, "lineHeight", ["number"]);
    this.lineHeight = lineHeight;
  }
  /**
   * Get the default position of this page. For example:
   * ```js
   * const { x, y } = page.getPosition()
   * ```
   * @returns The default position of the page.
   */
  getPosition() {
    return { x: this.x, y: this.y };
  }
  /**
   * Get the default x coordinate of this page. For example:
   * ```js
   * const x = page.getX()
   * ```
   * @returns The default x coordinate of the page.
   */
  getX() {
    return this.x;
  }
  /**
   * Get the default y coordinate of this page. For example:
   * ```js
   * const y = page.getY()
   * ```
   * @returns The default y coordinate of the page.
   */
  getY() {
    return this.y;
  }
  /**
   * Change the default position of this page. For example:
   * ```js
   * page.moveTo(0, 0)
   * page.drawText('I will be drawn at the origin')
   *
   * page.moveTo(0, 25)
   * page.drawText('I will be drawn 25 units up')
   *
   * page.moveTo(25, 25)
   * page.drawText('I will be drawn 25 units up and 25 units to the right')
   * ```
   * @param x The new default position on the x-axis for this page.
   * @param y The new default position on the y-axis for this page.
   */
  moveTo(x, y) {
    assertIs(x, "x", ["number"]);
    assertIs(y, "y", ["number"]);
    this.x = x;
    this.y = y;
  }
  /**
   * Change the default position of this page to be further down the y-axis.
   * For example:
   * ```js
   * page.moveTo(50, 50)
   * page.drawText('I will be drawn at (50, 50)')
   *
   * page.moveDown(10)
   * page.drawText('I will be drawn at (50, 40)')
   * ```
   * @param yDecrease The amount by which the page's default position along the
   *                  y-axis should be decreased.
   */
  moveDown(yDecrease) {
    assertIs(yDecrease, "yDecrease", ["number"]);
    this.y -= yDecrease;
  }
  /**
   * Change the default position of this page to be further up the y-axis.
   * For example:
   * ```js
   * page.moveTo(50, 50)
   * page.drawText('I will be drawn at (50, 50)')
   *
   * page.moveUp(10)
   * page.drawText('I will be drawn at (50, 60)')
   * ```
   * @param yIncrease The amount by which the page's default position along the
   *                  y-axis should be increased.
   */
  moveUp(yIncrease) {
    assertIs(yIncrease, "yIncrease", ["number"]);
    this.y += yIncrease;
  }
  /**
   * Change the default position of this page to be further left on the x-axis.
   * For example:
   * ```js
   * page.moveTo(50, 50)
   * page.drawText('I will be drawn at (50, 50)')
   *
   * page.moveLeft(10)
   * page.drawText('I will be drawn at (40, 50)')
   * ```
   * @param xDecrease The amount by which the page's default position along the
   *                  x-axis should be decreased.
   */
  moveLeft(xDecrease) {
    assertIs(xDecrease, "xDecrease", ["number"]);
    this.x -= xDecrease;
  }
  /**
   * Change the default position of this page to be further right on the y-axis.
   * For example:
   * ```js
   * page.moveTo(50, 50)
   * page.drawText('I will be drawn at (50, 50)')
   *
   * page.moveRight(10)
   * page.drawText('I will be drawn at (60, 50)')
   * ```
   * @param xIncrease The amount by which the page's default position along the
   *                  x-axis should be increased.
   */
  moveRight(xIncrease) {
    assertIs(xIncrease, "xIncrease", ["number"]);
    this.x += xIncrease;
  }
  /**
   * Push one or more operators to the end of this page's current content
   * stream. For example:
   * ```js
   * import {
   *   pushGraphicsState,
   *   moveTo,
   *   lineTo,
   *   closePath,
   *   setFillingColor,
   *   rgb,
   *   fill,
   *   popGraphicsState,
   * } from 'pdf-lib'
   *
   * // Draw a green triangle in the lower-left corner of the page
   * page.pushOperators(
   *   pushGraphicsState(),
   *   moveTo(0, 0),
   *   lineTo(100, 0),
   *   lineTo(50, 100),
   *   closePath(),
   *   setFillingColor(rgb(0.0, 1.0, 0.0)),
   *   fill(),
   *   popGraphicsState(),
   * )
   * ```
   * @param operator The operators to be pushed.
   */
  pushOperators(...operator) {
    assertEachIs(operator, "operator", [[PDFOperator_default, "PDFOperator"]]);
    const contentStream = this.getContentStream();
    contentStream.push(...operator);
  }
  /**
   * Draw one or more lines of text on this page. For example:
   * ```js
   * import { StandardFonts, rgb } from 'pdf-lib'
   *
   * const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
   * const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
   *
   * const page = pdfDoc.addPage()
   *
   * page.setFont(helveticaFont)
   *
   * page.moveTo(5, 200)
   * page.drawText('The Life of an Egg', { size: 36 })
   *
   * page.moveDown(36)
   * page.drawText('An Epic Tale of Woe', { size: 30 })
   *
   * page.drawText(
   *   `Humpty Dumpty sat on a wall \n` +
   *   `Humpty Dumpty had a great fall; \n` +
   *   `All the king's horses and all the king's men \n` +
   *   `Couldn't put Humpty together again. \n`,
   *   {
   *     x: 25,
   *     y: 100,
   *     font: timesRomanFont,
   *     size: 24,
   *     color: rgb(1, 0, 0),
   *     lineHeight: 24,
   *     opacity: 0.75,
   *   },
   * )
   * ```
   * @param text The text to be drawn.
   * @param options The options to be used when drawing the text.
   */
  drawText(text, options = {}) {
    assertIs(text, "text", ["string"]);
    assertOrUndefined(options.color, "options.color", [[Object, "Color"]]);
    assertRangeOrUndefined(options.opacity, "opacity.opacity", 0, 1);
    assertOrUndefined(options.font, "options.font", [[PDFFont, "PDFFont"]]);
    assertOrUndefined(options.size, "options.size", ["number"]);
    assertOrUndefined(options.rotate, "options.rotate", [[Object, "Rotation"]]);
    assertOrUndefined(options.xSkew, "options.xSkew", [[Object, "Rotation"]]);
    assertOrUndefined(options.ySkew, "options.ySkew", [[Object, "Rotation"]]);
    assertOrUndefined(options.x, "options.x", ["number"]);
    assertOrUndefined(options.y, "options.y", ["number"]);
    assertOrUndefined(options.lineHeight, "options.lineHeight", ["number"]);
    assertOrUndefined(options.maxWidth, "options.maxWidth", ["number"]);
    assertOrUndefined(options.wordBreaks, "options.wordBreaks", [Array]);
    assertIsOneOfOrUndefined(options.blendMode, "options.blendMode", BlendMode);
    const { oldFont, newFont, newFontKey } = this.setOrEmbedFont(options.font);
    const fontSize = options.size || this.fontSize;
    const wordBreaks = options.wordBreaks || this.doc.defaultWordBreaks;
    const textWidth = (t) => newFont.widthOfTextAtSize(t, fontSize);
    const lines = options.maxWidth === void 0 ? lineSplit(cleanText(text)) : breakTextIntoLines(text, wordBreaks, options.maxWidth, textWidth);
    const encodedLines = new Array(lines.length);
    for (let idx = 0, len = lines.length; idx < len; idx++) {
      encodedLines[idx] = newFont.encodeText(lines[idx]);
    }
    const graphicsStateKey = this.maybeEmbedGraphicsState({
      opacity: options.opacity,
      blendMode: options.blendMode
    });
    const contentStream = this.getContentStream();
    contentStream.push(
      ...drawLinesOfText(encodedLines, {
        color: options.color ?? this.fontColor,
        font: newFontKey,
        size: fontSize,
        rotate: options.rotate ?? degrees(0),
        xSkew: options.xSkew ?? degrees(0),
        ySkew: options.ySkew ?? degrees(0),
        x: options.x ?? this.x,
        y: options.y ?? this.y,
        lineHeight: options.lineHeight ?? this.lineHeight,
        graphicsState: graphicsStateKey
      })
    );
    if (options.font) {
      if (oldFont) this.setFont(oldFont);
      else this.resetFont();
    }
  }
  /**
   * Draw an image on this page. For example:
   * ```js
   * import { degrees } from 'pdf-lib'
   *
   * const jpgUrl = 'https://pdf-lib.js.org/assets/cat_riding_unicorn.jpg'
   * const jpgImageBytes = await fetch(jpgUrl).then((res) => res.arrayBuffer())
   *
   * const jpgImage = await pdfDoc.embedJpg(jpgImageBytes)
   * const jpgDims = jpgImage.scale(0.5)
   *
   * const page = pdfDoc.addPage()
   *
   * page.drawImage(jpgImage, {
   *   x: 25,
   *   y: 25,
   *   width: jpgDims.width,
   *   height: jpgDims.height,
   *   rotate: degrees(30),
   *   opacity: 0.75,
   * })
   * ```
   * @param image The image to be drawn.
   * @param options The options to be used when drawing the image.
   */
  drawImage(image, options = {}) {
    assertIs(image, "image", [[PDFImage, "PDFImage"]]);
    assertOrUndefined(options.x, "options.x", ["number"]);
    assertOrUndefined(options.y, "options.y", ["number"]);
    assertOrUndefined(options.width, "options.width", ["number"]);
    assertOrUndefined(options.height, "options.height", ["number"]);
    assertOrUndefined(options.rotate, "options.rotate", [[Object, "Rotation"]]);
    assertOrUndefined(options.xSkew, "options.xSkew", [[Object, "Rotation"]]);
    assertOrUndefined(options.ySkew, "options.ySkew", [[Object, "Rotation"]]);
    assertRangeOrUndefined(options.opacity, "opacity.opacity", 0, 1);
    assertIsOneOfOrUndefined(options.blendMode, "options.blendMode", BlendMode);
    const xObjectKey = this.node.newXObject("Image", image.ref);
    const graphicsStateKey = this.maybeEmbedGraphicsState({
      opacity: options.opacity,
      blendMode: options.blendMode
    });
    const contentStream = this.getContentStream();
    contentStream.push(
      ...drawImage(xObjectKey, {
        x: options.x ?? this.x,
        y: options.y ?? this.y,
        width: options.width ?? image.size().width,
        height: options.height ?? image.size().height,
        rotate: options.rotate ?? degrees(0),
        xSkew: options.xSkew ?? degrees(0),
        ySkew: options.ySkew ?? degrees(0),
        graphicsState: graphicsStateKey
      })
    );
  }
  /**
   * Draw an embedded PDF page on this page. For example:
   * ```js
   * import { degrees } from 'pdf-lib'
   *
   * const pdfDoc = await PDFDocument.create()
   * const page = pdfDoc.addPage()
   *
   * const sourcePdfUrl = 'https://pdf-lib.js.org/assets/with_large_page_count.pdf'
   * const sourcePdf = await fetch(sourcePdfUrl).then((res) => res.arrayBuffer())
   *
   * // Embed page 74 from the PDF
   * const [embeddedPage] = await pdfDoc.embedPdf(sourcePdf, 73)
   *
   * page.drawPage(embeddedPage, {
   *   x: 250,
   *   y: 200,
   *   xScale: 0.5,
   *   yScale: 0.5,
   *   rotate: degrees(30),
   *   opacity: 0.75,
   * })
   * ```
   *
   * The `options` argument accepts both `width`/`height` and `xScale`/`yScale`
   * as options. Since each of these options defines the size of the drawn page,
   * if both options are given, `width` and `height` take precedence and the
   * corresponding scale variants are ignored.
   *
   * @param embeddedPage The embedded page to be drawn.
   * @param options The options to be used when drawing the embedded page.
   */
  drawPage(embeddedPage, options = {}) {
    assertIs(embeddedPage, "embeddedPage", [
      [PDFEmbeddedPage, "PDFEmbeddedPage"]
    ]);
    assertOrUndefined(options.x, "options.x", ["number"]);
    assertOrUndefined(options.y, "options.y", ["number"]);
    assertOrUndefined(options.xScale, "options.xScale", ["number"]);
    assertOrUndefined(options.yScale, "options.yScale", ["number"]);
    assertOrUndefined(options.width, "options.width", ["number"]);
    assertOrUndefined(options.height, "options.height", ["number"]);
    assertOrUndefined(options.rotate, "options.rotate", [[Object, "Rotation"]]);
    assertOrUndefined(options.xSkew, "options.xSkew", [[Object, "Rotation"]]);
    assertOrUndefined(options.ySkew, "options.ySkew", [[Object, "Rotation"]]);
    assertRangeOrUndefined(options.opacity, "opacity.opacity", 0, 1);
    assertIsOneOfOrUndefined(options.blendMode, "options.blendMode", BlendMode);
    const xObjectKey = this.node.newXObject(
      "EmbeddedPdfPage",
      embeddedPage.ref
    );
    const graphicsStateKey = this.maybeEmbedGraphicsState({
      opacity: options.opacity,
      blendMode: options.blendMode
    });
    const xScale = options.width !== void 0 ? options.width / embeddedPage.width : options.xScale !== void 0 ? options.xScale : 1;
    const yScale = options.height !== void 0 ? options.height / embeddedPage.height : options.yScale !== void 0 ? options.yScale : 1;
    const contentStream = this.getContentStream();
    contentStream.push(
      ...drawPage(xObjectKey, {
        x: options.x ?? this.x,
        y: options.y ?? this.y,
        xScale,
        yScale,
        rotate: options.rotate ?? degrees(0),
        xSkew: options.xSkew ?? degrees(0),
        ySkew: options.ySkew ?? degrees(0),
        graphicsState: graphicsStateKey
      })
    );
  }
  /**
   * Draw an SVG path on this page. For example:
   * ```js
   * import { rgb } from 'pdf-lib'
   *
   * const svgPath = 'M 0,20 L 100,160 Q 130,200 150,120 C 190,-40 200,200 300,150 L 400,90'
   *
   * // Draw path as black line
   * page.drawSvgPath(svgPath, { x: 25, y: 75 })
   *
   * // Change border style and opacity
   * page.drawSvgPath(svgPath, {
   *   x: 25,
   *   y: 275,
   *   borderColor: rgb(0.5, 0.5, 0.5),
   *   borderWidth: 2,
   *   borderOpacity: 0.75,
   * })
   *
   * // Set fill color and opacity
   * page.drawSvgPath(svgPath, {
   *   x: 25,
   *   y: 475,
   *   color: rgb(1.0, 0, 0),
   *   opacity: 0.75,
   * })
   *
   * // Draw 50% of original size
   * page.drawSvgPath(svgPath, {
   *   x: 25,
   *   y: 675,
   *   scale: 0.5,
   * })
   * ```
   * @param path The SVG path to be drawn.
   * @param options The options to be used when drawing the SVG path.
   */
  drawSvgPath(path, options = {}) {
    assertIs(path, "path", ["string"]);
    assertOrUndefined(options.x, "options.x", ["number"]);
    assertOrUndefined(options.y, "options.y", ["number"]);
    assertOrUndefined(options.scale, "options.scale", ["number"]);
    assertOrUndefined(options.rotate, "options.rotate", [[Object, "Rotation"]]);
    assertOrUndefined(options.borderWidth, "options.borderWidth", ["number"]);
    assertOrUndefined(options.color, "options.color", [[Object, "Color"]]);
    assertRangeOrUndefined(options.opacity, "opacity.opacity", 0, 1);
    assertOrUndefined(options.borderColor, "options.borderColor", [
      [Object, "Color"]
    ]);
    assertOrUndefined(options.borderDashArray, "options.borderDashArray", [
      Array
    ]);
    assertOrUndefined(options.borderDashPhase, "options.borderDashPhase", [
      "number"
    ]);
    assertIsOneOfOrUndefined(
      options.borderLineCap,
      "options.borderLineCap",
      LineCapStyle
    );
    assertRangeOrUndefined(
      options.borderOpacity,
      "options.borderOpacity",
      0,
      1
    );
    assertIsOneOfOrUndefined(options.blendMode, "options.blendMode", BlendMode);
    const graphicsStateKey = this.maybeEmbedGraphicsState({
      opacity: options.opacity,
      borderOpacity: options.borderOpacity,
      blendMode: options.blendMode
    });
    if (!("color" in options) && !("borderColor" in options)) {
      options.borderColor = rgb(0, 0, 0);
    }
    const contentStream = this.getContentStream();
    contentStream.push(
      ...drawSvgPath(path, {
        x: options.x ?? this.x,
        y: options.y ?? this.y,
        scale: options.scale,
        rotate: options.rotate ?? degrees(0),
        color: options.color ?? void 0,
        borderColor: options.borderColor ?? void 0,
        borderWidth: options.borderWidth ?? 0,
        borderDashArray: options.borderDashArray ?? void 0,
        borderDashPhase: options.borderDashPhase ?? void 0,
        borderLineCap: options.borderLineCap ?? void 0,
        graphicsState: graphicsStateKey
      })
    );
  }
  /**
   * Draw a line on this page. For example:
   * ```js
   * import { rgb } from 'pdf-lib'
   *
   * page.drawLine({
   *   start: { x: 25, y: 75 },
   *   end: { x: 125, y: 175 },
   *   thickness: 2,
   *   color: rgb(0.75, 0.2, 0.2),
   *   opacity: 0.75,
   * })
   * ```
   * @param options The options to be used when drawing the line.
   */
  drawLine(options) {
    assertIs(options.start, "options.start", [
      [Object, "{ x: number, y: number }"]
    ]);
    assertIs(options.end, "options.end", [
      [Object, "{ x: number, y: number }"]
    ]);
    assertIs(options.start.x, "options.start.x", ["number"]);
    assertIs(options.start.y, "options.start.y", ["number"]);
    assertIs(options.end.x, "options.end.x", ["number"]);
    assertIs(options.end.y, "options.end.y", ["number"]);
    assertOrUndefined(options.thickness, "options.thickness", ["number"]);
    assertOrUndefined(options.color, "options.color", [[Object, "Color"]]);
    assertOrUndefined(options.dashArray, "options.dashArray", [Array]);
    assertOrUndefined(options.dashPhase, "options.dashPhase", ["number"]);
    assertIsOneOfOrUndefined(options.lineCap, "options.lineCap", LineCapStyle);
    assertRangeOrUndefined(options.opacity, "opacity.opacity", 0, 1);
    assertIsOneOfOrUndefined(options.blendMode, "options.blendMode", BlendMode);
    const graphicsStateKey = this.maybeEmbedGraphicsState({
      borderOpacity: options.opacity,
      blendMode: options.blendMode
    });
    if (!("color" in options)) {
      options.color = rgb(0, 0, 0);
    }
    const contentStream = this.getContentStream();
    contentStream.push(
      ...drawLine({
        start: options.start,
        end: options.end,
        thickness: options.thickness ?? 1,
        color: options.color ?? void 0,
        dashArray: options.dashArray ?? void 0,
        dashPhase: options.dashPhase ?? void 0,
        lineCap: options.lineCap ?? void 0,
        graphicsState: graphicsStateKey
      })
    );
  }
  /**
   * Draw a rectangle on this page. For example:
   * ```js
   * import { degrees, grayscale, rgb } from 'pdf-lib'
   *
   * page.drawRectangle({
   *   x: 25,
   *   y: 75,
   *   width: 250,
   *   height: 75,
   *   rotate: degrees(-15),
   *   borderWidth: 5,
   *   borderColor: grayscale(0.5),
   *   color: rgb(0.75, 0.2, 0.2),
   *   opacity: 0.5,
   *   borderOpacity: 0.75,
   * })
   * ```
   * @param options The options to be used when drawing the rectangle.
   */
  drawRectangle(options = {}) {
    assertOrUndefined(options.x, "options.x", ["number"]);
    assertOrUndefined(options.y, "options.y", ["number"]);
    assertOrUndefined(options.width, "options.width", ["number"]);
    assertOrUndefined(options.height, "options.height", ["number"]);
    assertOrUndefined(options.rotate, "options.rotate", [[Object, "Rotation"]]);
    assertOrUndefined(options.xSkew, "options.xSkew", [[Object, "Rotation"]]);
    assertOrUndefined(options.ySkew, "options.ySkew", [[Object, "Rotation"]]);
    assertOrUndefined(options.borderWidth, "options.borderWidth", ["number"]);
    assertOrUndefined(options.color, "options.color", [[Object, "Color"]]);
    assertRangeOrUndefined(options.opacity, "opacity.opacity", 0, 1);
    assertOrUndefined(options.borderColor, "options.borderColor", [
      [Object, "Color"]
    ]);
    assertOrUndefined(options.borderDashArray, "options.borderDashArray", [
      Array
    ]);
    assertOrUndefined(options.borderDashPhase, "options.borderDashPhase", [
      "number"
    ]);
    assertIsOneOfOrUndefined(
      options.borderLineCap,
      "options.borderLineCap",
      LineCapStyle
    );
    assertRangeOrUndefined(
      options.borderOpacity,
      "options.borderOpacity",
      0,
      1
    );
    assertIsOneOfOrUndefined(options.blendMode, "options.blendMode", BlendMode);
    const graphicsStateKey = this.maybeEmbedGraphicsState({
      opacity: options.opacity,
      borderOpacity: options.borderOpacity,
      blendMode: options.blendMode
    });
    if (!("color" in options) && !("borderColor" in options)) {
      options.color = rgb(0, 0, 0);
    }
    const contentStream = this.getContentStream();
    contentStream.push(
      ...drawRectangle({
        x: options.x ?? this.x,
        y: options.y ?? this.y,
        width: options.width ?? 150,
        height: options.height ?? 100,
        rotate: options.rotate ?? degrees(0),
        xSkew: options.xSkew ?? degrees(0),
        ySkew: options.ySkew ?? degrees(0),
        borderWidth: options.borderWidth ?? 0,
        color: options.color ?? void 0,
        borderColor: options.borderColor ?? void 0,
        borderDashArray: options.borderDashArray ?? void 0,
        borderDashPhase: options.borderDashPhase ?? void 0,
        graphicsState: graphicsStateKey,
        borderLineCap: options.borderLineCap ?? void 0
      })
    );
  }
  /**
   * Draw a square on this page. For example:
   * ```js
   * import { degrees, grayscale, rgb } from 'pdf-lib'
   *
   * page.drawSquare({
   *   x: 25,
   *   y: 75,
   *   size: 100,
   *   rotate: degrees(-15),
   *   borderWidth: 5,
   *   borderColor: grayscale(0.5),
   *   color: rgb(0.75, 0.2, 0.2),
   *   opacity: 0.5,
   *   borderOpacity: 0.75,
   * })
   * ```
   * @param options The options to be used when drawing the square.
   */
  drawSquare(options = {}) {
    const { size } = options;
    assertOrUndefined(size, "size", ["number"]);
    this.drawRectangle({ ...options, width: size, height: size });
  }
  /**
   * Draw an ellipse on this page. For example:
   * ```js
   * import { grayscale, rgb } from 'pdf-lib'
   *
   * page.drawEllipse({
   *   x: 200,
   *   y: 75,
   *   xScale: 100,
   *   yScale: 50,
   *   borderWidth: 5,
   *   borderColor: grayscale(0.5),
   *   color: rgb(0.75, 0.2, 0.2),
   *   opacity: 0.5,
   *   borderOpacity: 0.75,
   * })
   * ```
   * @param options The options to be used when drawing the ellipse.
   */
  drawEllipse(options = {}) {
    assertOrUndefined(options.x, "options.x", ["number"]);
    assertOrUndefined(options.y, "options.y", ["number"]);
    assertOrUndefined(options.xScale, "options.xScale", ["number"]);
    assertOrUndefined(options.yScale, "options.yScale", ["number"]);
    assertOrUndefined(options.rotate, "options.rotate", [[Object, "Rotation"]]);
    assertOrUndefined(options.color, "options.color", [[Object, "Color"]]);
    assertRangeOrUndefined(options.opacity, "opacity.opacity", 0, 1);
    assertOrUndefined(options.borderColor, "options.borderColor", [
      [Object, "Color"]
    ]);
    assertRangeOrUndefined(
      options.borderOpacity,
      "options.borderOpacity",
      0,
      1
    );
    assertOrUndefined(options.borderWidth, "options.borderWidth", ["number"]);
    assertOrUndefined(options.borderDashArray, "options.borderDashArray", [
      Array
    ]);
    assertOrUndefined(options.borderDashPhase, "options.borderDashPhase", [
      "number"
    ]);
    assertIsOneOfOrUndefined(
      options.borderLineCap,
      "options.borderLineCap",
      LineCapStyle
    );
    assertIsOneOfOrUndefined(options.blendMode, "options.blendMode", BlendMode);
    const graphicsStateKey = this.maybeEmbedGraphicsState({
      opacity: options.opacity,
      borderOpacity: options.borderOpacity,
      blendMode: options.blendMode
    });
    if (!("color" in options) && !("borderColor" in options)) {
      options.color = rgb(0, 0, 0);
    }
    const contentStream = this.getContentStream();
    contentStream.push(
      ...drawEllipse({
        x: options.x ?? this.x,
        y: options.y ?? this.y,
        xScale: options.xScale ?? 100,
        yScale: options.yScale ?? 100,
        rotate: options.rotate ?? void 0,
        color: options.color ?? void 0,
        borderColor: options.borderColor ?? void 0,
        borderWidth: options.borderWidth ?? 0,
        borderDashArray: options.borderDashArray ?? void 0,
        borderDashPhase: options.borderDashPhase ?? void 0,
        borderLineCap: options.borderLineCap ?? void 0,
        graphicsState: graphicsStateKey
      })
    );
  }
  /**
   * Draw a circle on this page. For example:
   * ```js
   * import { grayscale, rgb } from 'pdf-lib'
   *
   * page.drawCircle({
   *   x: 200,
   *   y: 150,
   *   size: 100,
   *   borderWidth: 5,
   *   borderColor: grayscale(0.5),
   *   color: rgb(0.75, 0.2, 0.2),
   *   opacity: 0.5,
   *   borderOpacity: 0.75,
   * })
   * ```
   * @param options The options to be used when drawing the ellipse.
   */
  drawCircle(options = {}) {
    const { size = 100 } = options;
    assertOrUndefined(size, "size", ["number"]);
    this.drawEllipse({ ...options, xScale: size, yScale: size });
  }
  setOrEmbedFont(font) {
    const oldFont = this.font;
    const oldFontKey = this.fontKey;
    if (font) this.setFont(font);
    else this.getFont();
    const newFont = this.font;
    const newFontKey = this.fontKey;
    return { oldFont, oldFontKey, newFont, newFontKey };
  }
  getFont() {
    if (!this.font || !this.fontKey) {
      const font = this.doc.embedStandardFont("Helvetica" /* Helvetica */);
      this.setFont(font);
    }
    return [this.font, this.fontKey];
  }
  resetFont() {
    this.font = void 0;
    this.fontKey = void 0;
  }
  getContentStream(useExisting = true) {
    if (useExisting && this.contentStream) return this.contentStream;
    this.contentStream = this.createContentStream();
    this.contentStreamRef = this.doc.context.register(this.contentStream);
    this.node.addContentStream(this.contentStreamRef);
    return this.contentStream;
  }
  createContentStream(...operators) {
    const dict = this.doc.context.obj({});
    const contentStream = PDFContentStream_default.of(dict, operators);
    return contentStream;
  }
  maybeEmbedGraphicsState(options) {
    const { opacity, borderOpacity, blendMode } = options;
    if (opacity === void 0 && borderOpacity === void 0 && blendMode === void 0) {
      return void 0;
    }
    const graphicsState = this.doc.context.obj({
      Type: "ExtGState",
      ca: opacity,
      CA: borderOpacity,
      BM: blendMode
    });
    const key = this.node.newExtGState("GS", graphicsState);
    return key;
  }
  scaleAnnot(annot, x, y) {
    const selectors = ["RD", "CL", "Vertices", "QuadPoints", "L", "Rect"];
    for (let idx = 0, len = selectors.length; idx < len; idx++) {
      const list = annot.lookup(PDFName_default.of(selectors[idx]));
      if (list instanceof PDFArray_default) list.scalePDFNumbers(x, y);
    }
    const inkLists = annot.lookup(PDFName_default.of("InkList"));
    if (inkLists instanceof PDFArray_default) {
      for (let idx = 0, len = inkLists.size(); idx < len; idx++) {
        const arr = inkLists.lookup(idx);
        if (arr instanceof PDFArray_default) arr.scalePDFNumbers(x, y);
      }
    }
  }
};
/**
 * > **NOTE:** You probably don't want to call this method directly. Instead,
 * > consider using the [[PDFDocument.addPage]] and [[PDFDocument.insertPage]]
 * > methods, which can create instances of [[PDFPage]] for you.
 *
 * Create an instance of [[PDFPage]] from an existing leaf node.
 *
 * @param leafNode The leaf node to be wrapped.
 * @param ref The unique reference for the page.
 * @param doc The document to which the page will belong.
 */
__publicField(_PDFPage, "of", (leafNode, ref, doc) => new _PDFPage(leafNode, ref, doc));
/**
 * > **NOTE:** You probably don't want to call this method directly. Instead,
 * > consider using the [[PDFDocument.addPage]] and [[PDFDocument.insertPage]]
 * > methods, which can create instances of [[PDFPage]] for you.
 *
 * Create an instance of [[PDFPage]].
 *
 * @param doc The document to which the page will belong.
 */
__publicField(_PDFPage, "create", (doc) => {
  assertIs(doc, "doc", [[PDFDocument, "PDFDocument"]]);
  const dummyRef = PDFRef_default.of(-1);
  const pageLeaf = PDFPageLeaf_default.withContextAndParent(doc.context, dummyRef);
  const pageRef = doc.context.register(pageLeaf);
  return new _PDFPage(pageLeaf, pageRef, doc);
});
var PDFPage = _PDFPage;

// src/api/form/PDFButton.ts
var _PDFButton = class _PDFButton extends PDFField {
  constructor(acroPushButton, ref, doc) {
    super(acroPushButton, ref, doc);
    /** The low-level PDFAcroPushButton wrapped by this button. */
    __publicField(this, "acroField");
    assertIs(acroPushButton, "acroButton", [
      [PDFAcroPushButton_default, "PDFAcroPushButton"]
    ]);
    this.acroField = acroPushButton;
  }
  /**
   * Display an image inside the bounds of this button's widgets. For example:
   * ```js
   * const pngImage = await pdfDoc.embedPng(...)
   * const button = form.getButton('some.button.field')
   * button.setImage(pngImage, ImageAlignment.Center)
   * ```
   * This will update the appearances streams for each of this button's widgets.
   * @param image The image that should be displayed.
   * @param alignment The alignment of the image.
   */
  setImage(image, alignment = 1 /* Center */) {
    const widgets = this.acroField.getWidgets();
    for (let idx = 0, len = widgets.length; idx < len; idx++) {
      const widget = widgets[idx];
      const streamRef = this.createImageAppearanceStream(
        widget,
        image,
        alignment
      );
      this.updateWidgetAppearances(widget, { normal: streamRef });
    }
    this.markAsClean();
  }
  /**
   * Set the font size for this field. Larger font sizes will result in larger
   * text being displayed when PDF readers render this button. Font sizes may
   * be integer or floating point numbers. Supplying a negative font size will
   * cause this method to throw an error.
   *
   * For example:
   * ```js
   * const button = form.getButton('some.button.field')
   * button.setFontSize(4)
   * button.setFontSize(15.7)
   * ```
   *
   * > This method depends upon the existence of a default appearance
   * > (`/DA`) string. If this field does not have a default appearance string,
   * > or that string does not contain a font size (via the `Tf` operator),
   * > then this method will throw an error.
   *
   * @param fontSize The font size to be used when rendering text in this field.
   */
  setFontSize(fontSize) {
    assertPositive(fontSize, "fontSize");
    this.acroField.setFontSize(fontSize);
    this.markAsDirty();
  }
  /**
   * Show this button on the specified page with the given text. For example:
   * ```js
   * const ubuntuFont = await pdfDoc.embedFont(ubuntuFontBytes)
   * const page = pdfDoc.addPage()
   *
   * const form = pdfDoc.getForm()
   * const button = form.createButton('some.button.field')
   *
   * button.addToPage('Do Stuff', page, {
   *   x: 50,
   *   y: 75,
   *   width: 200,
   *   height: 100,
   *   textColor: rgb(1, 0, 0),
   *   backgroundColor: rgb(0, 1, 0),
   *   borderColor: rgb(0, 0, 1),
   *   borderWidth: 2,
   *   rotate: degrees(90),
   *   font: ubuntuFont,
   * })
   * ```
   * This will create a new widget for this button field.
   * @param text The text to be displayed for this button widget.
   * @param page The page to which this button widget should be added.
   * @param options The options to be used when adding this button widget.
   */
  addToPage(text, page, options) {
    assertOrUndefined(text, "text", ["string"]);
    assertOrUndefined(page, "page", [[PDFPage, "PDFPage"]]);
    assertFieldAppearanceOptions(options);
    const widget = this.createWidget({
      x: (options?.x ?? 0) - (options?.borderWidth ?? 0) / 2,
      y: (options?.y ?? 0) - (options?.borderWidth ?? 0) / 2,
      width: options?.width ?? 100,
      height: options?.height ?? 50,
      textColor: options?.textColor ?? rgb(0, 0, 0),
      backgroundColor: options?.backgroundColor ?? rgb(0.75, 0.75, 0.75),
      borderColor: options?.borderColor,
      borderWidth: options?.borderWidth ?? 0,
      rotate: options?.rotate ?? degrees(0),
      caption: text,
      hidden: options?.hidden,
      page: page.ref
    });
    const widgetRef = this.doc.context.register(widget.dict);
    this.acroField.addWidget(widgetRef);
    const font = options?.font ?? this.doc.getForm().getDefaultFont();
    this.updateWidgetAppearance(widget, font);
    page.node.addAnnot(widgetRef);
  }
  /**
   * Returns `true` if this button has been marked as dirty, or if any of this
   * button's widgets do not have an appearance stream. For example:
   * ```js
   * const button = form.getButton('some.button.field')
   * if (button.needsAppearancesUpdate()) console.log('Needs update')
   * ```
   * @returns Whether or not this button needs an appearance update.
   */
  needsAppearancesUpdate() {
    if (this.isDirty()) return true;
    const widgets = this.acroField.getWidgets();
    for (let idx = 0, len = widgets.length; idx < len; idx++) {
      const widget = widgets[idx];
      const hasAppearances = widget.getAppearances()?.normal instanceof PDFStream_default;
      if (!hasAppearances) return true;
    }
    return false;
  }
  /**
   * Update the appearance streams for each of this button's widgets using
   * the default appearance provider for buttons. For example:
   * ```js
   * const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
   * const button = form.getButton('some.button.field')
   * button.defaultUpdateAppearances(helvetica)
   * ```
   * @param font The font to be used for creating the appearance streams.
   */
  defaultUpdateAppearances(font) {
    assertIs(font, "font", [[PDFFont, "PDFFont"]]);
    this.updateAppearances(font);
  }
  /**
   * Update the appearance streams for each of this button's widgets using
   * the given appearance provider. If no `provider` is passed, the default
   * appearance provider for buttons will be used. For example:
   * ```js
   * const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
   * const button = form.getButton('some.button.field')
   * button.updateAppearances(helvetica, (field, widget, font) => {
   *   ...
   *   return {
   *     normal: drawButton(...),
   *     down: drawButton(...),
   *   }
   * })
   * ```
   * @param font The font to be used for creating the appearance streams.
   * @param provider Optionally, the appearance provider to be used for
   *                 generating the contents of the appearance streams.
   */
  updateAppearances(font, provider) {
    assertIs(font, "font", [[PDFFont, "PDFFont"]]);
    assertOrUndefined(provider, "provider", [Function]);
    const widgets = this.acroField.getWidgets();
    for (let idx = 0, len = widgets.length; idx < len; idx++) {
      const widget = widgets[idx];
      this.updateWidgetAppearance(widget, font, provider);
    }
  }
  updateWidgetAppearance(widget, font, provider) {
    const apProvider = provider ?? defaultButtonAppearanceProvider;
    const appearances = normalizeAppearance(apProvider(this, widget, font));
    this.updateWidgetAppearanceWithFont(widget, font, appearances);
  }
};
/**
 * > **NOTE:** You probably don't want to call this method directly. Instead,
 * > consider using the [[PDFForm.getButton]] method, which will create an
 * > instance of [[PDFButton]] for you.
 *
 * Create an instance of [[PDFButton]] from an existing acroPushButton and ref
 *
 * @param acroPushButton The underlying `PDFAcroPushButton` for this button.
 * @param ref The unique reference for this button.
 * @param doc The document to which this button will belong.
 */
__publicField(_PDFButton, "of", (acroPushButton, ref, doc) => new _PDFButton(acroPushButton, ref, doc));
var PDFButton = _PDFButton;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AFRelationship,
  AcroButtonFlags,
  AcroChoiceFlags,
  AcroFieldFlags,
  AcroTextFlags,
  AnnotationFlags,
  AppearanceCharacteristics,
  BlendMode,
  Cache,
  CharCodes,
  ColorTypes,
  CombedTextLayoutError,
  CorruptPageTreeError,
  CustomFontEmbedder,
  CustomFontSubsetEmbedder,
  Duplex,
  EncryptedPDFError,
  ExceededMaxLengthError,
  FieldAlreadyExistsError,
  FieldExistsAsNonTerminalError,
  FileEmbedder,
  FontkitNotRegisteredError,
  ForeignPageError,
  ImageAlignment,
  IndexOutOfBoundsError,
  InvalidAcroFieldValueError,
  InvalidFieldNamePartError,
  InvalidMaxLengthError,
  InvalidPDFDateStringError,
  InvalidTargetIndexError,
  JpegEmbedder,
  LineCapStyle,
  LineJoinStyle,
  MethodNotImplementedError,
  MissingCatalogError,
  MissingDAEntryError,
  MissingKeywordError,
  MissingOnValueCheckError,
  MissingPDFHeaderError,
  MissingPageContentsEmbeddingError,
  MissingTfOperatorError,
  MultiSelectValueError,
  NextByteAssertionError,
  NoSuchFieldError,
  NonFullScreenPageMode,
  NumberParsingError,
  PDFAcroButton,
  PDFAcroCheckBox,
  PDFAcroChoice,
  PDFAcroComboBox,
  PDFAcroField,
  PDFAcroForm,
  PDFAcroListBox,
  PDFAcroNonTerminal,
  PDFAcroPushButton,
  PDFAcroRadioButton,
  PDFAcroSignature,
  PDFAcroTerminal,
  PDFAcroText,
  PDFAnnotation,
  PDFArray,
  PDFArrayIsNotRectangleError,
  PDFBool,
  PDFButton,
  PDFCatalog,
  PDFCheckBox,
  PDFContentStream,
  PDFContext,
  PDFCrossRefSection,
  PDFCrossRefStream,
  PDFDict,
  PDFDocument,
  PDFDropdown,
  PDFEmbeddedPage,
  PDFField,
  PDFFlateStream,
  PDFFont,
  PDFForm,
  PDFHeader,
  PDFHexString,
  PDFImage,
  PDFInvalidObject,
  PDFInvalidObjectParsingError,
  PDFJavaScript,
  PDFName,
  PDFNull,
  PDFNumber,
  PDFObject,
  PDFObjectCopier,
  PDFObjectParser,
  PDFObjectParsingError,
  PDFObjectStream,
  PDFObjectStreamParser,
  PDFOperator,
  PDFOperatorNames,
  PDFOptionList,
  PDFPage,
  PDFPageEmbedder,
  PDFPageLeaf,
  PDFPageTree,
  PDFParser,
  PDFParsingError,
  PDFRadioGroup,
  PDFRawStream,
  PDFRef,
  PDFSignature,
  PDFStream,
  PDFStreamParsingError,
  PDFStreamWriter,
  PDFString,
  PDFTextField,
  PDFTrailer,
  PDFTrailerDict,
  PDFWidgetAnnotation,
  PDFWriter,
  PDFXRefStreamParser,
  PageEmbeddingMismatchedContextError,
  PageSizes,
  ParseSpeeds,
  PngEmbedder,
  PrintScaling,
  PrivateConstructorError,
  ReadingDirection,
  RemovePageFromEmptyDocumentError,
  ReparseError,
  RichTextFieldReadError,
  RotationTypes,
  StalledParserError,
  StandardFontEmbedder,
  StandardFontValues,
  StandardFonts,
  TextAlignment,
  TextRenderingMode,
  UnbalancedParenthesisError,
  UnexpectedFieldTypeError,
  UnexpectedObjectTypeError,
  UnrecognizedStreamTypeError,
  UnsupportedEncodingError,
  ViewerPreferences,
  addRandomSuffix,
  adjustDimsForRotation,
  appendBezierCurve,
  appendQuadraticCurve,
  arrayAsString,
  asNumber,
  asPDFName,
  asPDFNumber,
  assertEachIs,
  assertInteger,
  assertIs,
  assertIsOneOf,
  assertIsOneOfOrUndefined,
  assertIsSubset,
  assertMultiple,
  assertOrUndefined,
  assertPositive,
  assertRange,
  assertRangeOrUndefined,
  backtick,
  beginMarkedContent,
  beginText,
  breakTextIntoLines,
  byAscendingId,
  bytesFor,
  canBeConvertedToUint8Array,
  charAtIndex,
  charFromCode,
  charFromHexCode,
  charSplit,
  cleanText,
  clip,
  clipEvenOdd,
  closePath,
  cmyk,
  colorToComponents,
  componentsToColor,
  concatTransformationMatrix,
  copyStringIntoBuffer,
  createPDFAcroField,
  createPDFAcroFields,
  createTypeErrorMsg,
  createValueErrorMsg,
  decodeFromBase64,
  decodeFromBase64DataUri,
  decodePDFRawStream,
  defaultButtonAppearanceProvider,
  defaultCheckBoxAppearanceProvider,
  defaultDropdownAppearanceProvider,
  defaultOptionListAppearanceProvider,
  defaultRadioGroupAppearanceProvider,
  defaultTextFieldAppearanceProvider,
  degrees,
  degreesToRadians,
  drawButton,
  drawCheckBox,
  drawCheckMark,
  drawEllipse,
  drawEllipsePath,
  drawImage,
  drawLine,
  drawLinesOfText,
  drawObject,
  drawOptionList,
  drawPage,
  drawRadioButton,
  drawRectangle,
  drawSvgPath,
  drawText,
  drawTextField,
  drawTextLines,
  encodeToBase64,
  endMarkedContent,
  endPath,
  endText,
  error,
  escapeRegExp,
  escapedNewlineChars,
  fill,
  fillAndStroke,
  findLastMatch,
  getType,
  grayscale,
  hasSurrogates,
  hasUtf16BOM,
  highSurrogate,
  isNewlineChar,
  isStandardFont,
  isType,
  isWithinBMP,
  last,
  layoutCombedText,
  layoutMultilineText,
  layoutSinglelineText,
  lineSplit,
  lineTo,
  lowSurrogate,
  mergeIntoTypedArray,
  mergeLines,
  mergeUint8Arrays,
  moveText,
  moveTo,
  newlineChars,
  nextLine,
  normalizeAppearance,
  numberToString,
  padStart,
  parseDate,
  pdfDocEncodingDecode,
  pluckIndices,
  popGraphicsState,
  pushGraphicsState,
  radians,
  radiansToDegrees,
  range,
  rectangle,
  rectanglesAreEqual,
  reduceRotation,
  restoreDashPattern,
  reverseArray,
  rgb,
  rotateAndSkewTextDegreesAndTranslate,
  rotateAndSkewTextRadiansAndTranslate,
  rotateDegrees,
  rotateInPlace,
  rotateRadians,
  rotateRectangle,
  scale,
  setCharacterSpacing,
  setCharacterSqueeze,
  setDashPattern,
  setFillingCmykColor,
  setFillingColor,
  setFillingGrayscaleColor,
  setFillingRgbColor,
  setFontAndSize,
  setGraphicsState,
  setLineCap,
  setLineHeight,
  setLineJoin,
  setLineWidth,
  setStrokingCmykColor,
  setStrokingColor,
  setStrokingGrayscaleColor,
  setStrokingRgbColor,
  setTextMatrix,
  setTextRenderingMode,
  setTextRise,
  setWordSpacing,
  showText,
  singleQuote,
  sizeInBytes,
  skewDegrees,
  skewRadians,
  sortedUniq,
  square,
  stroke,
  sum,
  toCharCode,
  toCodePoint,
  toDegrees,
  toHexString,
  toHexStringOfMinLength,
  toRadians,
  toUint8Array,
  translate,
  typedArrayFor,
  utf16Decode,
  utf16Encode,
  utf8Encode,
  values,
  waitForTick
});
//# sourceMappingURL=index.js.map