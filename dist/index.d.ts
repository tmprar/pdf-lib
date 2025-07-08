import { FontNames, Font as Font$1, EncodingType } from '@pdf-lib/standard-fonts';

declare class PDFHeader {
    static forVersion: (major: number, minor: number) => PDFHeader;
    private readonly major;
    private readonly minor;
    private constructor();
    toString(): string;
    sizeInBytes(): number;
    copyBytesInto(buffer: Uint8Array, offset: number): number;
}

declare class PDFBool extends PDFObject {
    static readonly True: PDFBool;
    static readonly False: PDFBool;
    private readonly value;
    private constructor();
    asBoolean(): boolean;
    clone(): PDFBool;
    toString(): string;
    sizeInBytes(): number;
    copyBytesInto(buffer: Uint8Array, offset: number): number;
}

declare class PDFHexString extends PDFObject {
    static of: (value: string) => PDFHexString;
    static fromText: (value: string) => PDFHexString;
    private readonly value;
    constructor(value: string);
    asBytes(): Uint8Array;
    decodeText(): string;
    decodeDate(): Date;
    asString(): string;
    clone(): PDFHexString;
    toString(): string;
    sizeInBytes(): number;
    copyBytesInto(buffer: Uint8Array, offset: number): number;
}

declare class PDFName extends PDFObject {
    static of: (name: string) => PDFName;
    static readonly Length: PDFName;
    static readonly FlateDecode: PDFName;
    static readonly Resources: PDFName;
    static readonly Font: PDFName;
    static readonly XObject: PDFName;
    static readonly ExtGState: PDFName;
    static readonly Contents: PDFName;
    static readonly Type: PDFName;
    static readonly Parent: PDFName;
    static readonly MediaBox: PDFName;
    static readonly Page: PDFName;
    static readonly Annots: PDFName;
    static readonly TrimBox: PDFName;
    static readonly ArtBox: PDFName;
    static readonly BleedBox: PDFName;
    static readonly CropBox: PDFName;
    static readonly Rotate: PDFName;
    static readonly Title: PDFName;
    static readonly Author: PDFName;
    static readonly Subject: PDFName;
    static readonly Creator: PDFName;
    static readonly Keywords: PDFName;
    static readonly Producer: PDFName;
    static readonly CreationDate: PDFName;
    static readonly ModDate: PDFName;
    private readonly encodedName;
    private constructor();
    asBytes(): Uint8Array;
    decodeText(): string;
    asString(): string;
    /** @deprecated in favor of [[PDFName.asString]] */
    value(): string;
    clone(): PDFName;
    toString(): string;
    sizeInBytes(): number;
    copyBytesInto(buffer: Uint8Array, offset: number): number;
}

declare class PDFNull extends PDFObject {
    asNull(): null;
    clone(): PDFNull;
    toString(): string;
    sizeInBytes(): number;
    copyBytesInto(buffer: Uint8Array, offset: number): number;
}
declare const _default: PDFNull;

declare class PDFNumber extends PDFObject {
    static of: (value: number) => PDFNumber;
    private readonly numberValue;
    private readonly stringValue;
    private constructor();
    asNumber(): number;
    /** @deprecated in favor of [[PDFNumber.asNumber]] */
    value(): number;
    clone(): PDFNumber;
    toString(): string;
    sizeInBytes(): number;
    copyBytesInto(buffer: Uint8Array, offset: number): number;
}

declare class PDFRef extends PDFObject {
    static of: (objectNumber: number, generationNumber?: number) => PDFRef;
    readonly objectNumber: number;
    readonly generationNumber: number;
    readonly tag: string;
    private constructor();
    clone(): PDFRef;
    toString(): string;
    sizeInBytes(): number;
    copyBytesInto(buffer: Uint8Array, offset: number): number;
}

declare class PDFStream extends PDFObject {
    readonly dict: PDFDict;
    constructor(dict: PDFDict);
    clone(_context?: PDFContext): PDFStream;
    getContentsString(): string;
    getContents(): Uint8Array;
    getContentsSize(): number;
    updateDict(): void;
    sizeInBytes(): number;
    toString(): string;
    copyBytesInto(buffer: Uint8Array, offset: number): number;
}

declare class PDFString extends PDFObject {
    static of: (value: string) => PDFString;
    static fromDate: (date: Date) => PDFString;
    private readonly value;
    private constructor();
    asBytes(): Uint8Array;
    decodeText(): string;
    decodeDate(): Date;
    asString(): string;
    clone(): PDFString;
    toString(): string;
    sizeInBytes(): number;
    copyBytesInto(buffer: Uint8Array, offset: number): number;
}

type DictMap = Map<PDFName, PDFObject>;
declare class PDFDict extends PDFObject {
    static withContext: (context: PDFContext) => PDFDict;
    static fromMapWithContext: (map: DictMap, context: PDFContext) => PDFDict;
    readonly context: PDFContext;
    private readonly dict;
    protected constructor(map: DictMap, context: PDFContext);
    keys(): PDFName[];
    values(): PDFObject[];
    entries(): [PDFName, PDFObject][];
    set(key: PDFName, value: PDFObject): void;
    get(key: PDFName, preservePDFNull?: boolean): PDFObject | undefined;
    has(key: PDFName): boolean;
    lookupMaybe(key: PDFName, type: typeof PDFArray): PDFArray | undefined;
    lookupMaybe(key: PDFName, type: typeof PDFBool): PDFBool | undefined;
    lookupMaybe(key: PDFName, type: typeof PDFDict): PDFDict | undefined;
    lookupMaybe(key: PDFName, type: typeof PDFHexString): PDFHexString | undefined;
    lookupMaybe(key: PDFName, type: typeof PDFName): PDFName | undefined;
    lookupMaybe(key: PDFName, type: typeof _default): typeof _default | undefined;
    lookupMaybe(key: PDFName, type: typeof PDFNumber): PDFNumber | undefined;
    lookupMaybe(key: PDFName, type: typeof PDFStream): PDFStream | undefined;
    lookupMaybe(key: PDFName, type: typeof PDFRef): PDFRef | undefined;
    lookupMaybe(key: PDFName, type: typeof PDFString): PDFString | undefined;
    lookupMaybe(ref: PDFName, type1: typeof PDFString, type2: typeof PDFHexString): PDFString | PDFHexString | undefined;
    lookupMaybe(ref: PDFName, type1: typeof PDFDict, type2: typeof PDFStream): PDFDict | PDFStream | undefined;
    lookupMaybe(ref: PDFName, type1: typeof PDFString, type2: typeof PDFHexString, type3: typeof PDFArray): PDFString | PDFHexString | PDFArray | undefined;
    lookup(key: PDFName): PDFObject | undefined;
    lookup(key: PDFName, type: typeof PDFArray): PDFArray;
    lookup(key: PDFName, type: typeof PDFBool): PDFBool;
    lookup(key: PDFName, type: typeof PDFDict): PDFDict;
    lookup(key: PDFName, type: typeof PDFHexString): PDFHexString;
    lookup(key: PDFName, type: typeof PDFName): PDFName;
    lookup(key: PDFName, type: typeof _default): typeof _default;
    lookup(key: PDFName, type: typeof PDFNumber): PDFNumber;
    lookup(key: PDFName, type: typeof PDFStream): PDFStream;
    lookup(key: PDFName, type: typeof PDFRef): PDFRef;
    lookup(key: PDFName, type: typeof PDFString): PDFString;
    lookup(ref: PDFName, type1: typeof PDFString, type2: typeof PDFHexString): PDFString | PDFHexString;
    lookup(ref: PDFName, type1: typeof PDFDict, type2: typeof PDFStream): PDFDict | PDFStream;
    lookup(ref: PDFName, type1: typeof PDFString, type2: typeof PDFHexString, type3: typeof PDFArray): PDFString | PDFHexString | PDFArray;
    delete(key: PDFName): boolean;
    asMap(): Map<PDFName, PDFObject>;
    /** Generate a random key that doesn't exist in current key set */
    uniqueKey(tag?: string): PDFName;
    clone(context?: PDFContext): PDFDict;
    toString(): string;
    sizeInBytes(): number;
    copyBytesInto(buffer: Uint8Array, offset: number): number;
}

declare class PDFRawStream extends PDFStream {
    static of: (dict: PDFDict, contents: Uint8Array) => PDFRawStream;
    readonly contents: Uint8Array;
    private constructor();
    asUint8Array(): Uint8Array;
    clone(context?: PDFContext): PDFRawStream;
    getContentsString(): string;
    getContents(): Uint8Array;
    getContentsSize(): number;
}

declare class PDFArray extends PDFObject {
    static withContext: (context: PDFContext) => PDFArray;
    private readonly array;
    private readonly context;
    private constructor();
    size(): number;
    push(object: PDFObject): void;
    insert(index: number, object: PDFObject): void;
    indexOf(object: PDFObject): number | undefined;
    remove(index: number): void;
    set(idx: number, object: PDFObject): void;
    get(index: number): PDFObject;
    lookupMaybe(index: number, type: typeof PDFArray): PDFArray | undefined;
    lookupMaybe(index: number, type: typeof PDFBool): PDFBool | undefined;
    lookupMaybe(index: number, type: typeof PDFDict): PDFDict | undefined;
    lookupMaybe(index: number, type: typeof PDFHexString): PDFHexString | undefined;
    lookupMaybe(index: number, type: typeof PDFName): PDFName | undefined;
    lookupMaybe(index: number, type: typeof _default): typeof _default | undefined;
    lookupMaybe(index: number, type: typeof PDFNumber): PDFNumber | undefined;
    lookupMaybe(index: number, type: typeof PDFStream): PDFStream | undefined;
    lookupMaybe(index: number, type: typeof PDFRawStream): PDFRawStream | undefined;
    lookupMaybe(index: number, type: typeof PDFRef): PDFRef | undefined;
    lookupMaybe(index: number, type: typeof PDFString): PDFString | undefined;
    lookupMaybe(index: number, type1: typeof PDFString, type2: typeof PDFHexString): PDFString | PDFHexString | undefined;
    lookup(index: number): PDFObject | undefined;
    lookup(index: number, type: typeof PDFArray): PDFArray;
    lookup(index: number, type: typeof PDFBool): PDFBool;
    lookup(index: number, type: typeof PDFDict): PDFDict;
    lookup(index: number, type: typeof PDFHexString): PDFHexString;
    lookup(index: number, type: typeof PDFName): PDFName;
    lookup(index: number, type: typeof _default): typeof _default;
    lookup(index: number, type: typeof PDFNumber): PDFNumber;
    lookup(index: number, type: typeof PDFStream): PDFStream;
    lookup(index: number, type: typeof PDFRawStream): PDFRawStream;
    lookup(index: number, type: typeof PDFRef): PDFRef;
    lookup(index: number, type: typeof PDFString): PDFString;
    lookup(index: number, type1: typeof PDFString, type2: typeof PDFHexString): PDFString | PDFHexString;
    asRectangle(): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    asArray(): PDFObject[];
    clone(context?: PDFContext): PDFArray;
    toString(): string;
    sizeInBytes(): number;
    copyBytesInto(buffer: Uint8Array, offset: number): number;
    scalePDFNumbers(x: number, y: number): void;
}

declare enum PDFOperatorNames {
    NonStrokingColor = "sc",
    NonStrokingColorN = "scn",
    NonStrokingColorRgb = "rg",
    NonStrokingColorGray = "g",
    NonStrokingColorCmyk = "k",
    NonStrokingColorspace = "cs",
    StrokingColor = "SC",
    StrokingColorN = "SCN",
    StrokingColorRgb = "RG",
    StrokingColorGray = "G",
    StrokingColorCmyk = "K",
    StrokingColorspace = "CS",
    BeginMarkedContentSequence = "BDC",
    BeginMarkedContent = "BMC",
    EndMarkedContent = "EMC",
    MarkedContentPointWithProps = "DP",
    MarkedContentPoint = "MP",
    DrawObject = "Do",
    ConcatTransformationMatrix = "cm",
    PopGraphicsState = "Q",
    PushGraphicsState = "q",
    SetFlatness = "i",
    SetGraphicsStateParams = "gs",
    SetLineCapStyle = "J",
    SetLineDashPattern = "d",
    SetLineJoinStyle = "j",
    SetLineMiterLimit = "M",
    SetLineWidth = "w",
    SetTextMatrix = "Tm",
    SetRenderingIntent = "ri",
    AppendRectangle = "re",
    BeginInlineImage = "BI",
    BeginInlineImageData = "ID",
    EndInlineImage = "EI",
    ClipEvenOdd = "W*",
    ClipNonZero = "W",
    CloseAndStroke = "s",
    CloseFillEvenOddAndStroke = "b*",
    CloseFillNonZeroAndStroke = "b",
    ClosePath = "h",
    AppendBezierCurve = "c",
    CurveToReplicateFinalPoint = "y",
    CurveToReplicateInitialPoint = "v",
    EndPath = "n",
    FillEvenOddAndStroke = "B*",
    FillEvenOdd = "f*",
    FillNonZeroAndStroke = "B",
    FillNonZero = "f",
    LegacyFillNonZero = "F",
    LineTo = "l",
    MoveTo = "m",
    ShadingFill = "sh",
    StrokePath = "S",
    BeginText = "BT",
    EndText = "ET",
    MoveText = "Td",
    MoveTextSetLeading = "TD",
    NextLine = "T*",
    SetCharacterSpacing = "Tc",
    SetFontAndSize = "Tf",
    SetTextHorizontalScaling = "Tz",
    SetTextLineHeight = "TL",
    SetTextRenderingMode = "Tr",
    SetTextRise = "Ts",
    SetWordSpacing = "Tw",
    ShowText = "Tj",
    ShowTextAdjusted = "TJ",
    ShowTextLine = "'",// tslint:disable-line quotemark
    ShowTextLineAndSpace = "\"",
    Type3D0 = "d0",
    Type3D1 = "d1",
    BeginCompatibilitySection = "BX",
    EndCompatibilitySection = "EX"
}

type PDFOperatorArg = string | PDFName | PDFArray | PDFNumber | PDFString | PDFHexString;
declare class PDFOperator {
    static of: (name: PDFOperatorNames, args?: PDFOperatorArg[]) => PDFOperator;
    private readonly name;
    private readonly args;
    private constructor();
    clone(context?: PDFContext): PDFOperator;
    toString(): string;
    sizeInBytes(): number;
    copyBytesInto(buffer: Uint8Array, offset: number): number;
}

declare const last: <T>(array: T[]) => T;
declare const typedArrayFor: (value: string | Uint8Array) => Uint8Array;
declare const mergeIntoTypedArray: (...arrays: (string | Uint8Array)[]) => Uint8Array<ArrayBuffer>;
declare const mergeUint8Arrays: (arrays: Uint8Array[]) => Uint8Array;
declare const arrayAsString: (array: Uint8Array | number[]) => string;
declare const byAscendingId: <T extends {
    id: any;
}>(a: T, b: T) => number;
declare const sortedUniq: <T>(array: T[], indexer: (elem: T) => any) => T[];
declare const reverseArray: (array: Uint8Array) => Uint8Array<ArrayBufferLike>;
declare const sum: (array: number[] | Uint8Array) => number;
declare const range: (start: number, end: number) => number[];
declare const pluckIndices: <T>(arr: T[], indices: number[]) => T[];
declare const canBeConvertedToUint8Array: (input: any) => input is string | ArrayBuffer | Uint8Array;
declare const toUint8Array: (input: string | ArrayBuffer | Uint8Array) => Uint8Array<ArrayBufferLike>;

/**
 * Returns a Promise that resolves after at least one tick of the
 * Macro Task Queue occurs.
 */
declare const waitForTick: () => Promise<void>;

declare const toCharCode: (character: string) => number;
declare const toCodePoint: (character: string) => number | undefined;
declare const toHexStringOfMinLength: (num: number, minLength: number) => string;
declare const toHexString: (num: number) => string;
declare const charFromCode: (code: number) => string;
declare const charFromHexCode: (hex: string) => string;
declare const padStart: (value: string, length: number, padChar: string) => string;
declare const copyStringIntoBuffer: (str: string, buffer: Uint8Array, offset: number) => number;
declare const addRandomSuffix: (prefix: string, suffixLength?: number) => string;
declare const escapeRegExp: (str: string) => string;
declare const cleanText: (text: string) => string;
declare const escapedNewlineChars: string[];
declare const newlineChars: string[];
declare const isNewlineChar: (text: string) => boolean;
declare const lineSplit: (text: string) => string[];
declare const mergeLines: (text: string) => string;
declare const charAtIndex: (text: string, index: number) => [string, number];
declare const charSplit: (text: string) => string[];
declare const breakTextIntoLines: (text: string, wordBreaks: string[], maxWidth: number, computeWidthOfText: (t: string) => number) => string[];
declare const parseDate: (dateStr: string) => Date | undefined;
declare const findLastMatch: (value: string, regex: RegExp) => {
    match: RegExpMatchArray | undefined;
    pos: number;
};

/**
 * Encodes a string to UTF-8.
 *
 * @param input The string to be encoded.
 * @param byteOrderMark Whether or not a byte order marker (BOM) should be added
 *                      to the start of the encoding. (default `true`)
 * @returns A Uint8Array containing the UTF-8 encoding of the input string.
 *
 * -----------------------------------------------------------------------------
 *
 * JavaScript strings are composed of Unicode code points. Code points are
 * integers in the range 0 to 1,114,111 (0x10FFFF). When serializing a string,
 * it must be encoded as a sequence of words. A word is typically 8, 16, or 32
 * bytes in size. As such, Unicode defines three encoding forms: UTF-8, UTF-16,
 * and UTF-32. These encoding forms are described in the Unicode standard [1].
 * This function implements the UTF-8 encoding form.
 *
 * -----------------------------------------------------------------------------
 *
 * In UTF-8, each code point is mapped to a sequence of 1, 2, 3, or 4 bytes.
 * Note that the logic which defines this mapping is slightly convoluted, and
 * not as straightforward as the mapping logic for UTF-16 or UTF-32. The UTF-8
 * mapping logic is as follows [2]:
 *
 * • If a code point is in the range U+0000..U+007F, then view it as a 7-bit
 *   integer: 0bxxxxxxx. Map the code point to 1 byte with the first high order
 *   bit set to 0:
 *
 *       b1=0b0xxxxxxx
 *
 * • If a code point is in the range U+0080..U+07FF, then view it as an 11-bit
 *   integer: 0byyyyyxxxxxx. Map the code point to 2 bytes with the first 5 bits
 *   of the code point stored in the first byte, and the last 6 bits stored in
 *   the second byte:
 *
 *       b1=0b110yyyyy    b2=0b10xxxxxx
 *
 * • If a code point is in the range U+0800..U+FFFF, then view it as a 16-bit
 *   integer, 0bzzzzyyyyyyxxxxxx. Map the code point to 3 bytes with the first
 *   4 bits stored in the first byte, the next 6 bits stored in the second byte,
 *   and the last 6 bits in the third byte:
 *
 *       b1=0b1110zzzz    b2=0b10yyyyyy    b3=0b10xxxxxx
 *
 * • If a code point is in the range U+10000...U+10FFFF, then view it as a
 *   21-bit integer, 0bvvvzzzzzzyyyyyyxxxxxx. Map the code point to 4 bytes with
 *   the first 3 bits stored in the first byte, the next 6 bits stored in the
 *   second byte, the next 6 bits stored in the third byte, and the last 6 bits
 *   stored in the fourth byte:
 *
 *       b1=0b11110xxx    b2=0b10zzzzzz    b3=0b10yyyyyy    b4=0b10xxxxxx
 *
 * -----------------------------------------------------------------------------
 *
 * It is important to note, when iterating through the code points of a string
 * in JavaScript, that if a character is encoded as a surrogate pair it will
 * increase the string's length by 2 instead of 1 [4]. For example:
 *
 * ```
 * > 'a'.length
 * 1
 * > '💩'.length
 * 2
 * > '語'.length
 * 1
 * > 'a💩語'.length
 * 4
 * ```
 *
 * The results of the above example are explained by the fact that the
 * characters 'a' and '語' are not represented by surrogate pairs, but '💩' is.
 *
 * Because of this idiosyncrasy in JavaScript's string implementation and APIs,
 * we must "jump" an extra index after encoding a character as a surrogate
 * pair. In practice, this means we must increment the index of our for loop by
 * 2 if we encode a surrogate pair, and 1 in all other cases.
 *
 * -----------------------------------------------------------------------------
 *
 * References:
 *   - [1] https://www.unicode.org/versions/Unicode12.0.0/UnicodeStandard-12.0.pdf
 *         3.9  Unicode Encoding Forms - UTF-8
 *   - [2] http://www.herongyang.com/Unicode/UTF-8-UTF-8-Encoding.html
 *   - [3] http://www.herongyang.com/Unicode/UTF-8-UTF-8-Encoding-Algorithm.html
 *   - [4] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length#Description
 *
 */
declare const utf8Encode: (input: string, byteOrderMark?: boolean) => Uint8Array;
/**
 * Encodes a string to UTF-16.
 *
 * @param input The string to be encoded.
 * @param byteOrderMark Whether or not a byte order marker (BOM) should be added
 *                      to the start of the encoding. (default `true`)
 * @returns A Uint16Array containing the UTF-16 encoding of the input string.
 *
 * -----------------------------------------------------------------------------
 *
 * JavaScript strings are composed of Unicode code points. Code points are
 * integers in the range 0 to 1,114,111 (0x10FFFF). When serializing a string,
 * it must be encoded as a sequence of words. A word is typically 8, 16, or 32
 * bytes in size. As such, Unicode defines three encoding forms: UTF-8, UTF-16,
 * and UTF-32. These encoding forms are described in the Unicode standard [1].
 * This function implements the UTF-16 encoding form.
 *
 * -----------------------------------------------------------------------------
 *
 * In UTF-16, each code point is mapped to one or two 16-bit integers. The
 * UTF-16 mapping logic is as follows [2]:
 *
 * • If a code point is in the range U+0000..U+FFFF, then map the code point to
 *   a 16-bit integer with the most significant byte first.
 *
 * • If a code point is in the range U+10000..U+10000, then map the code point
 *   to two 16-bit integers. The first integer should contain the high surrogate
 *   and the second integer should contain the low surrogate. Both surrogates
 *   should be written with the most significant byte first.
 *
 * -----------------------------------------------------------------------------
 *
 * It is important to note, when iterating through the code points of a string
 * in JavaScript, that if a character is encoded as a surrogate pair it will
 * increase the string's length by 2 instead of 1 [4]. For example:
 *
 * ```
 * > 'a'.length
 * 1
 * > '💩'.length
 * 2
 * > '語'.length
 * 1
 * > 'a💩語'.length
 * 4
 * ```
 *
 * The results of the above example are explained by the fact that the
 * characters 'a' and '語' are not represented by surrogate pairs, but '💩' is.
 *
 * Because of this idiosyncrasy in JavaScript's string implementation and APIs,
 * we must "jump" an extra index after encoding a character as a surrogate
 * pair. In practice, this means we must increment the index of our for loop by
 * 2 if we encode a surrogate pair, and 1 in all other cases.
 *
 * -----------------------------------------------------------------------------
 *
 * References:
 *   - [1] https://www.unicode.org/versions/Unicode12.0.0/UnicodeStandard-12.0.pdf
 *         3.9  Unicode Encoding Forms - UTF-8
 *   - [2] http://www.herongyang.com/Unicode/UTF-16-UTF-16-Encoding.html
 *   - [3] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length#Description
 *
 */
declare const utf16Encode: (input: string, byteOrderMark?: boolean) => Uint16Array;
/**
 * Returns `true` if the `codePoint` is within the
 * Basic Multilingual Plane (BMP). Code points inside the BMP are not encoded
 * with surrogate pairs.
 * @param codePoint The code point to be evaluated.
 *
 * Reference: https://en.wikipedia.org/wiki/UTF-16#Description
 */
declare const isWithinBMP: (codePoint: number) => boolean;
/**
 * Returns `true` if the given `codePoint` is valid and must be represented
 * with a surrogate pair when encoded.
 * @param codePoint The code point to be evaluated.
 *
 * Reference: https://en.wikipedia.org/wiki/UTF-16#Description
 */
declare const hasSurrogates: (codePoint: number) => boolean;
declare const highSurrogate: (codePoint: number) => number;
declare const lowSurrogate: (codePoint: number) => number;
/**
 * Decodes a Uint8Array of data to a string using UTF-16.
 *
 * Note that this function attempts to recover from erronous input by
 * inserting the replacement character (�) to mark invalid code points
 * and surrogate pairs.
 *
 * @param input A Uint8Array containing UTF-16 encoded data
 * @param byteOrderMark Whether or not a byte order marker (BOM) should be read
 *                      at the start of the encoding. (default `true`)
 * @returns The decoded string.
 */
declare const utf16Decode: (input: Uint8Array, byteOrderMark?: boolean) => string;
declare const hasUtf16BOM: (bytes: Uint8Array) => boolean;

/**
 * Converts a number to its string representation in decimal. This function
 * differs from simply converting a number to a string with `.toString()`
 * because this function's output string will **not** contain exponential
 * notation.
 *
 * Credit: https://stackoverflow.com/a/46545519
 */
declare const numberToString: (num: number) => string;
declare const sizeInBytes: (n: number) => number;
/**
 * Converts a number into its constituent bytes and returns them as
 * a number[].
 *
 * Returns most significant byte as first element in array. It may be necessary
 * to call .reverse() to get the bits in the desired order.
 *
 * Example:
 *   bytesFor(0x02A41E) => [ 0b10, 0b10100100, 0b11110 ]
 *
 * Credit for algorithm: https://stackoverflow.com/a/1936865
 */
declare const bytesFor: (n: number) => Uint8Array<ArrayBuffer>;

declare const error: (msg: string) => never;

declare const encodeToBase64: (bytes: Uint8Array) => string;
declare const decodeFromBase64: (base64: string) => Uint8Array;
/**
 * If the `dataUri` input is a data URI, then the data URI prefix must not be
 * longer than 100 characters, or this function will fail to decode it.
 *
 * @param dataUri a base64 data URI or plain base64 string
 * @returns a Uint8Array containing the decoded input
 */
declare const decodeFromBase64DataUri: (dataUri: string) => Uint8Array;

declare const values: (obj: any) => any[];
declare const StandardFontValues: any[];
declare const isStandardFont: (input: any) => input is FontNames;
declare const rectanglesAreEqual: (a: {
    x: number;
    y: number;
    width: number;
    height: number;
}, b: {
    x: number;
    y: number;
    width: number;
    height: number;
}) => boolean;

declare const backtick: (val: any) => string;
declare const singleQuote: (val: any) => string;
type Primitive = string | number | boolean | undefined | null;
declare const createValueErrorMsg: (value: any, valueName: string, values: Primitive[]) => string;
declare const assertIsOneOf: (value: any, valueName: string, allowedValues: Primitive[] | {
    [key: string]: Primitive;
}) => void;
declare const assertIsOneOfOrUndefined: (value: any, valueName: string, allowedValues: Primitive[] | {
    [key: string]: Primitive;
}) => void;
declare const assertIsSubset: (values: any[], valueName: string, allowedValues: Primitive[] | {
    [key: string]: Primitive;
}) => void;
declare const getType: (val: any) => any;
type TypeDescriptor = 'null' | 'undefined' | 'string' | 'number' | 'boolean' | 'symbol' | 'bigint' | DateConstructor | ArrayConstructor | Uint8ArrayConstructor | ArrayBufferConstructor | FunctionConstructor | [Function, string];
declare const isType: (value: any, type: TypeDescriptor) => boolean;
declare const createTypeErrorMsg: (value: any, valueName: string, types: TypeDescriptor[]) => string;
declare const assertIs: (value: any, valueName: string, types: TypeDescriptor[]) => void;
declare const assertOrUndefined: (value: any, valueName: string, types: TypeDescriptor[]) => void;
declare const assertEachIs: (values: any[], valueName: string, types: TypeDescriptor[]) => void;
declare const assertRange: (value: any, valueName: string, min: number, max: number) => void;
declare const assertRangeOrUndefined: (value: any, valueName: string, min: number, max: number) => void;
declare const assertMultiple: (value: any, valueName: string, multiplier: number) => void;
declare const assertInteger: (value: any, valueName: string) => void;
declare const assertPositive: (value: number, valueName: string) => void;

/**
 * Decode a byte array into a string using PDFDocEncoding.
 *
 * @param bytes a byte array (decimal representation) containing a string
 *              encoded with PDFDocEncoding.
 */
declare const pdfDocEncodingDecode: (bytes: Uint8Array) => string;

declare class Cache<T> {
    static readonly populatedBy: <T_1>(populate: () => T_1) => Cache<T_1>;
    private readonly populate;
    private value;
    private constructor();
    getValue(): T | undefined;
    access(): T;
    invalidate(): void;
}

declare class PDFFlateStream extends PDFStream {
    protected readonly contentsCache: Cache<Uint8Array>;
    protected readonly encode: boolean;
    constructor(dict: PDFDict, encode: boolean);
    computeContents: () => Uint8Array;
    getContents(): Uint8Array;
    getContentsSize(): number;
    getUnencodedContents(): Uint8Array;
}

declare class PDFContentStream extends PDFFlateStream {
    static of: (dict: PDFDict, operators: PDFOperator[], encode?: boolean) => PDFContentStream;
    private readonly operators;
    private constructor();
    push(...operators: PDFOperator[]): void;
    clone(context?: PDFContext): PDFContentStream;
    getContentsString(): string;
    getUnencodedContents(): Uint8Array;
    getUnencodedContentsSize(): number;
}

/**
 * Generates a pseudo random number. Although it is not cryptographically secure
 * and uniformly distributed, it is not a concern for the intended use-case,
 * which is to generate distinct numbers.
 *
 * Credit: https://stackoverflow.com/a/19303725/10254049
 */
declare class SimpleRNG {
    static withSeed: (seed: number) => SimpleRNG;
    private seed;
    private constructor();
    nextInt(): number;
}

type LookupKey = PDFRef | PDFObject | undefined;
interface LiteralObject {
    [name: string]: Literal | PDFObject;
}
interface LiteralArray {
    [index: number]: Literal | PDFObject;
}
type Literal = LiteralObject | LiteralArray | string | number | boolean | null | undefined;
declare class PDFContext {
    static create: () => PDFContext;
    largestObjectNumber: number;
    header: PDFHeader;
    trailerInfo: {
        Root?: PDFObject;
        Encrypt?: PDFObject;
        Info?: PDFObject;
        ID?: PDFObject;
    };
    rng: SimpleRNG;
    private readonly indirectObjects;
    private pushGraphicsStateContentStreamRef?;
    private popGraphicsStateContentStreamRef?;
    private constructor();
    assign(ref: PDFRef, object: PDFObject): void;
    nextRef(): PDFRef;
    register(object: PDFObject): PDFRef;
    delete(ref: PDFRef): boolean;
    lookupMaybe(ref: LookupKey, type: typeof PDFArray): PDFArray | undefined;
    lookupMaybe(ref: LookupKey, type: typeof PDFBool): PDFBool | undefined;
    lookupMaybe(ref: LookupKey, type: typeof PDFDict): PDFDict | undefined;
    lookupMaybe(ref: LookupKey, type: typeof PDFHexString): PDFHexString | undefined;
    lookupMaybe(ref: LookupKey, type: typeof PDFName): PDFName | undefined;
    lookupMaybe(ref: LookupKey, type: typeof _default): typeof _default | undefined;
    lookupMaybe(ref: LookupKey, type: typeof PDFNumber): PDFNumber | undefined;
    lookupMaybe(ref: LookupKey, type: typeof PDFStream): PDFStream | undefined;
    lookupMaybe(ref: LookupKey, type: typeof PDFRef): PDFRef | undefined;
    lookupMaybe(ref: LookupKey, type: typeof PDFString): PDFString | undefined;
    lookupMaybe(ref: LookupKey, type1: typeof PDFString, type2: typeof PDFHexString): PDFString | PDFHexString | undefined;
    lookup(ref: LookupKey): PDFObject | undefined;
    lookup(ref: LookupKey, type: typeof PDFArray): PDFArray;
    lookup(ref: LookupKey, type: typeof PDFBool): PDFBool;
    lookup(ref: LookupKey, type: typeof PDFDict): PDFDict;
    lookup(ref: LookupKey, type: typeof PDFHexString): PDFHexString;
    lookup(ref: LookupKey, type: typeof PDFName): PDFName;
    lookup(ref: LookupKey, type: typeof _default): typeof _default;
    lookup(ref: LookupKey, type: typeof PDFNumber): PDFNumber;
    lookup(ref: LookupKey, type: typeof PDFStream): PDFStream;
    lookup(ref: LookupKey, type: typeof PDFRef): PDFRef;
    lookup(ref: LookupKey, type: typeof PDFString): PDFString;
    lookup(ref: LookupKey, type1: typeof PDFString, type2: typeof PDFHexString): PDFString | PDFHexString;
    getObjectRef(pdfObject: PDFObject): PDFRef | undefined;
    enumerateIndirectObjects(): [PDFRef, PDFObject][];
    obj(literal: null | undefined): typeof _default;
    obj(literal: string): PDFName;
    obj(literal: number): PDFNumber;
    obj(literal: boolean): PDFBool;
    obj(literal: LiteralObject): PDFDict;
    obj(literal: LiteralArray): PDFArray;
    stream(contents: string | Uint8Array, dict?: LiteralObject): PDFRawStream;
    flateStream(contents: string | Uint8Array, dict?: LiteralObject): PDFRawStream;
    contentStream(operators: PDFOperator[], dict?: LiteralObject): PDFContentStream;
    formXObject(operators: PDFOperator[], dict?: LiteralObject): PDFContentStream;
    getPushGraphicsStateContentStream(): PDFRef;
    getPopGraphicsStateContentStream(): PDFRef;
    addRandomSuffix(prefix: string, suffixLength?: number): string;
}

declare class PDFObject {
    clone(_context?: PDFContext): PDFObject;
    toString(): string;
    sizeInBytes(): number;
    copyBytesInto(_buffer: Uint8Array, _offset: number): number;
}

declare class MethodNotImplementedError extends Error {
    constructor(className: string, methodName: string);
}
declare class PrivateConstructorError extends Error {
    constructor(className: string);
}
declare class UnexpectedObjectTypeError extends Error {
    constructor(expected: any | any[], actual: any);
}
declare class UnsupportedEncodingError extends Error {
    constructor(encoding: string);
}
declare class ReparseError extends Error {
    constructor(className: string, methodName: string);
}
declare class MissingCatalogError extends Error {
    constructor(ref?: PDFObject);
}
declare class MissingPageContentsEmbeddingError extends Error {
    constructor();
}
declare class UnrecognizedStreamTypeError extends Error {
    constructor(stream: any);
}
declare class PageEmbeddingMismatchedContextError extends Error {
    constructor();
}
declare class PDFArrayIsNotRectangleError extends Error {
    constructor(size: number);
}
declare class InvalidPDFDateStringError extends Error {
    constructor(value: string);
}
declare class InvalidTargetIndexError extends Error {
    constructor(targetIndex: number, Count: number);
}
declare class CorruptPageTreeError extends Error {
    constructor(targetIndex: number, operation: string);
}
declare class IndexOutOfBoundsError extends Error {
    constructor(index: number, min: number, max: number);
}
declare class InvalidAcroFieldValueError extends Error {
    constructor();
}
declare class MultiSelectValueError extends Error {
    constructor();
}
declare class MissingDAEntryError extends Error {
    constructor(fieldName: string);
}
declare class MissingTfOperatorError extends Error {
    constructor(fieldName: string);
}
/***** Parser Errors ******/
interface Position {
    line: number;
    column: number;
    offset: number;
}
declare class NumberParsingError extends Error {
    constructor(pos: Position, value: string);
}
declare class PDFParsingError extends Error {
    constructor(pos: Position, details: string);
}
declare class NextByteAssertionError extends PDFParsingError {
    constructor(pos: Position, expectedByte: number, actualByte: number);
}
declare class PDFObjectParsingError extends PDFParsingError {
    constructor(pos: Position, byte: number);
}
declare class PDFInvalidObjectParsingError extends PDFParsingError {
    constructor(pos: Position);
}
declare class PDFStreamParsingError extends PDFParsingError {
    constructor(pos: Position);
}
declare class UnbalancedParenthesisError extends PDFParsingError {
    constructor(pos: Position);
}
declare class StalledParserError extends PDFParsingError {
    constructor(pos: Position);
}
declare class MissingPDFHeaderError extends PDFParsingError {
    constructor(pos: Position);
}
declare class MissingKeywordError extends PDFParsingError {
    constructor(pos: Position, keyword: number[]);
}

declare enum CharCodes {
    Null = 0,
    Backspace = 8,
    Tab = 9,
    Newline = 10,
    FormFeed = 12,
    CarriageReturn = 13,
    Space = 32,
    ExclamationPoint = 33,
    Hash = 35,
    Percent = 37,
    LeftParen = 40,
    RightParen = 41,
    Plus = 43,
    Minus = 45,
    Dash = 45,
    Period = 46,
    ForwardSlash = 47,
    Zero = 48,
    One = 49,
    Two = 50,
    Three = 51,
    Four = 52,
    Five = 53,
    Six = 54,
    Seven = 55,
    Eight = 56,
    Nine = 57,
    LessThan = 60,
    GreaterThan = 62,
    A = 65,
    D = 68,
    E = 69,
    F = 70,
    O = 79,
    P = 80,
    R = 82,
    LeftSquareBracket = 91,
    BackSlash = 92,
    RightSquareBracket = 93,
    a = 97,
    b = 98,
    d = 100,
    e = 101,
    f = 102,
    i = 105,
    j = 106,
    l = 108,
    m = 109,
    n = 110,
    o = 111,
    r = 114,
    s = 115,
    t = 116,
    u = 117,
    x = 120,
    LeftCurly = 123,
    RightCurly = 125,
    Tilde = 126
}

/**
 * PDFObjectCopier copies PDFObjects from a src context to a dest context.
 * The primary use case for this is to copy pages between PDFs.
 *
 * _Copying_ an object with a PDFObjectCopier is different from _cloning_ an
 * object with its [[PDFObject.clone]] method:
 *
 * ```
 *   const src: PDFContext = ...
 *   const dest: PDFContext = ...
 *   const originalObject: PDFObject = ...
 *   const copiedObject = PDFObjectCopier.for(src, dest).copy(originalObject);
 *   const clonedObject = originalObject.clone();
 * ```
 *
 * Copying an object is equivalent to cloning it and then copying over any other
 * objects that it references. Note that only dictionaries, arrays, and streams
 * (or structures build from them) can contain indirect references to other
 * objects. Copying a PDFObject that is not a dictionary, array, or stream is
 * supported, but is equivalent to cloning it.
 */
declare class PDFObjectCopier {
    static for: (src: PDFContext, dest: PDFContext) => PDFObjectCopier;
    private readonly src;
    private readonly dest;
    private readonly traversedObjects;
    private constructor();
    copy: <T extends PDFObject>(object: T) => T;
    private copyPDFPage;
    private copyPDFDict;
    private copyPDFArray;
    private copyPDFStream;
    private copyPDFIndirectObject;
}

/**
 * Entries should be added using the [[addEntry]] and [[addDeletedEntry]]
 * methods **in order of ascending object number**.
 */
declare class PDFCrossRefSection {
    static create: () => PDFCrossRefSection;
    static createEmpty: () => PDFCrossRefSection;
    private subsections;
    private chunkIdx;
    private chunkLength;
    private constructor();
    addEntry(ref: PDFRef, offset: number): void;
    addDeletedEntry(ref: PDFRef, nextFreeObjectNumber: number): void;
    toString(): string;
    sizeInBytes(): number;
    copyBytesInto(buffer: Uint8Array, offset: number): number;
    private copySubsectionsIntoBuffer;
    private copyEntriesIntoBuffer;
    private append;
}

declare class PDFTrailer {
    static forLastCrossRefSectionOffset: (offset: number) => PDFTrailer;
    private readonly lastXRefOffset;
    private constructor();
    toString(): string;
    sizeInBytes(): number;
    copyBytesInto(buffer: Uint8Array, offset: number): number;
}

declare class PDFTrailerDict {
    static of: (dict: PDFDict) => PDFTrailerDict;
    readonly dict: PDFDict;
    private constructor();
    toString(): string;
    sizeInBytes(): number;
    copyBytesInto(buffer: Uint8Array, offset: number): number;
}

interface SerializationInfo {
    size: number;
    header: PDFHeader;
    indirectObjects: [PDFRef, PDFObject][];
    xref?: PDFCrossRefSection;
    trailerDict?: PDFTrailerDict;
    trailer: PDFTrailer;
}
declare class PDFWriter {
    static forContext: (context: PDFContext, objectsPerTick: number) => PDFWriter;
    protected readonly context: PDFContext;
    protected readonly objectsPerTick: number;
    private parsedObjects;
    protected constructor(context: PDFContext, objectsPerTick: number);
    serializeToBuffer(): Promise<Uint8Array>;
    protected computeIndirectObjectSize([ref, object]: [
        PDFRef,
        PDFObject
    ]): number;
    protected createTrailerDict(): PDFDict;
    protected computeBufferSize(): Promise<SerializationInfo>;
    protected shouldWaitForTick: (n: number) => boolean;
}

declare class PDFStreamWriter extends PDFWriter {
    static forContext: (context: PDFContext, objectsPerTick: number, encodeStreams?: boolean, objectsPerStream?: number) => PDFStreamWriter;
    private readonly encodeStreams;
    private readonly objectsPerStream;
    private constructor();
    protected computeBufferSize(): Promise<{
        size: number;
        header: PDFHeader;
        indirectObjects: [PDFRef, PDFObject][];
        trailer: PDFTrailer;
    }>;
}

/**
 * A note of thanks to the developers of https://github.com/foliojs/pdfkit, as
 * this class borrows from:
 *   https://github.com/foliojs/pdfkit/blob/f91bdd61c164a72ea06be1a43dc0a412afc3925f/lib/font/afm.coffee
 */
declare class StandardFontEmbedder {
    static for: (fontName: FontNames, customName?: string) => StandardFontEmbedder;
    readonly font: Font$1;
    readonly encoding: EncodingType;
    readonly fontName: string;
    readonly customName: string | undefined;
    private constructor();
    /**
     * Encode the JavaScript string into this font. (JavaScript encodes strings in
     * Unicode, but standard fonts use either WinAnsi, ZapfDingbats, or Symbol
     * encodings)
     */
    encodeText(text: string): PDFHexString;
    widthOfTextAtSize(text: string, size: number): number;
    heightOfFontAtSize(size: number, options?: {
        descender?: boolean;
    }): number;
    sizeOfFontAtHeight(height: number): number;
    embedIntoContext(context: PDFContext, ref?: PDFRef): PDFRef;
    private widthOfGlyph;
    private encodeTextAsGlyphs;
}

/**
 * Represents a glyph bounding box
 */
interface BoundingBox {
    minX: number /** The minimum X position in the bounding box */;
    minY: number /** The minimum Y position in the bounding box */;
    maxX: number /** The maxmimum X position in the bounding box */;
    maxY: number /** The maxmimum Y position in the bounding box */;
    width: number /** The width of the bounding box */;
    height: number /** The height of the bounding box */;
}
/**
 * Path objects are returned by glyphs and represent the actual vector outlines
 * for each glyph in the font. Paths can be converted to SVG path data strings,
 * or to functions that can be applied to render the path to a graphics context.
 */
interface Path {
    /**
     * This property represents the path’s bounding box, i.e. the smallest
     * rectangle that contains the entire path shape. This is the exact
     * bounding box, taking into account control points that may be outside the
     * visible shape.
     */
    bbox: BoundingBox;
    /**
     * This property represents the path’s control box. It is like the
     * bounding box, but it includes all points of the path, including control
     * points of bezier segments. It is much faster to compute than the real
     * bounding box, but less accurate if there are control points outside of the
     * visible shape.
     */
    cbox: BoundingBox;
    /**
     * Moves the virtual pen to the given x, y coordinates.
     */
    moveTo(x: number, y: number): void;
    /**
     * Adds a line to the path from the current point to the
     * given x, y coordinates.
     */
    lineTo(x: number, y: number): void;
    /**
     * Adds a quadratic curve to the path from the current point to the
     * given x, y coordinates using cpx, cpy as a control point.
     */
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    /**
     * Adds a bezier curve to the path from the current point to the
     * given x, y coordinates using cp1x, cp1y and cp2x, cp2y as control points.
     */
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    /**
     * Closes the current sub-path by drawing a straight line back to the
     * starting point.
     */
    closePath(): void;
    /**
     * Compiles the path to a JavaScript function that can be applied with a
     * graphics context in order to render the path.
     */
    toFunction(): Function;
    /**
     * Converts the path to an SVG path data string.
     */
    toSVG(): string;
}
/**
 * Glyph objects represent a glyph in the font. They have various properties for
 * accessing metrics and the actual vector path the glyph represents, and
 * methods for rendering the glyph to a graphics context.
 *
 * You do not create glyph objects directly. They are created by various methods
 * on the Font object. There are several subclasses of the base Glyph class
 * internally that may be returned depending on the font format, but they all
 * include the following API.
 */
interface Glyph {
    id: number /** The glyph's id in the font */;
    /**
     * An array of unicode code points that are represented by this glyph. There
     * can be multiple code points in the case of ligatures and other glyphs that
     * represent multiple visual characters.
     */
    codePoints: number[];
    path: Path /** Vector Path object representing the glyph */;
    /**
     * The Glyph’s bounding box, i.e. the rectangle that encloses the glyph
     * outline as tightly as possible.
     */
    bbox: BoundingBox;
    /**
     * The Glyph’s control box. This is often the same as the bounding box, but is
     * faster to compute. Because of the way bezier curves are defined, some of
     * the control points can be outside of the bounding box. Where bbox takes
     * this into account, cbox does not. Thus, cbox is less accurate, but faster
     * to compute.
     */
    cbox: BoundingBox;
    advanceWidth: number /** The Glyph's advance width */;
    /**
     * For COLR glyphs, which are vector based, this returns an array of objects
     * representing the glyphs and colors for each layer in render order.
     */
    layers: any[];
    /**
     * Renders the glyph to the given graphics context, at the specified
     * font size.
     */
    render(context: any, size: number): void;
    /**
     * For SBIX glyphs, which are bitmap based, this returns an object containing
     * some properties about the image, along with the image data itself
     * (usually PNG).
     */
    getImageForSize(size: number): Uint8Array;
}
/**
 * Represents positioning information for a glyph in a GlyphRun.
 */
interface GlyphPosition {
    /**
     * The amount to move the virtual pen in the X direction after rendering
     * this glyph.
     */
    xAdvance: number;
    /**
     * The amount to move the virtual pen in the Y direction after rendering
     * this glyph.
     */
    yAdvance: number;
    /**
     * The offset from the pen position in the X direction at which to render
     * this glyph.
     */
    xOffset: number;
    /**
     * The offset from the pen position in the Y direction at which to render
     * this glyph.
     */
    yOffset: number;
}
/**
 * Represents a run of Glyph and GlyphPosition objects.
 * Returned by the Font.layout method.
 */
interface GlyphRun {
    /**
     * An array of Glyph objects in the run
     */
    glyphs: Glyph[];
    /**
     * An array of GlyphPosition objects for each glyph in the run
     */
    positions: GlyphPosition[];
    /**
     * The script that was requested for shaping. This was either passed in or detected automatically.
     */
    script: string;
    /**
     * The language requested for shaping, as passed in. If `null`, the default language for the
     * script was used.
     */
    language: string | null;
    /**
     * The direction requested for shaping, as passed in (either ltr or rtl).
     * If `null`, the default direction of the script is used.
     */
    direction: 'ltr' | 'rtl' | null;
    /**
     * The features requested during shaping. This is a combination of user
     * specified features and features chosen by the shaper.
     */
    features: object;
    /**
     * The total advance width of the run.
     */
    advanceWidth: number;
    /**
     * The total advance height of the run.
     */
    advanceHeight: number;
    /**
     * The bounding box containing all glyphs in the run.
     */
    bbox: BoundingBox;
}
interface SubsetStream {
    on: (eventType: 'data' | 'end', callback: (data: Uint8Array) => any) => SubsetStream;
}
interface Subset {
    /**
     * Includes the given glyph object or glyph ID in the subset.
     * Returns the glyph's new ID in the subset.
     */
    includeGlyph(glyph: number | Glyph): number;
    /**
     * Returns a stream containing the encoded font file that can be piped to a
     * destination, such as a file.
     */
    encodeStream(): SubsetStream;
}
/**
 * A map of OpenType features as described in OpenType's spec:
 * https://docs.microsoft.com/en-gb/typography/opentype/spec/featurelist.
 */
interface OpenTypeFeatures {
    aalt?: boolean;
    abvf?: boolean;
    abvm?: boolean;
    abvs?: boolean;
    afrc?: boolean;
    akhn?: boolean;
    blwf?: boolean;
    blwm?: boolean;
    blws?: boolean;
    calt?: boolean;
    case?: boolean;
    ccmp?: boolean;
    cfar?: boolean;
    cjct?: boolean;
    clig?: boolean;
    cpct?: boolean;
    cpsp?: boolean;
    cswh?: boolean;
    curs?: boolean;
    cv01?: boolean;
    cv02?: boolean;
    cv03?: boolean;
    cv04?: boolean;
    cv05?: boolean;
    cv06?: boolean;
    cv07?: boolean;
    cv08?: boolean;
    cv09?: boolean;
    cv10?: boolean;
    cv11?: boolean;
    cv22?: boolean;
    cv23?: boolean;
    cv24?: boolean;
    cv25?: boolean;
    cv26?: boolean;
    cv27?: boolean;
    cv28?: boolean;
    cv29?: boolean;
    cv30?: boolean;
    cv31?: boolean;
    cv32?: boolean;
    cv33?: boolean;
    cv34?: boolean;
    cv35?: boolean;
    cv36?: boolean;
    cv37?: boolean;
    cv38?: boolean;
    cv39?: boolean;
    cv40?: boolean;
    cv41?: boolean;
    cv42?: boolean;
    cv43?: boolean;
    cv44?: boolean;
    cv45?: boolean;
    cv46?: boolean;
    cv47?: boolean;
    cv48?: boolean;
    cv49?: boolean;
    cv50?: boolean;
    cv51?: boolean;
    cv52?: boolean;
    cv53?: boolean;
    cv54?: boolean;
    cv55?: boolean;
    cv56?: boolean;
    cv57?: boolean;
    cv58?: boolean;
    cv59?: boolean;
    cv60?: boolean;
    cv61?: boolean;
    cv62?: boolean;
    cv63?: boolean;
    cv64?: boolean;
    cv65?: boolean;
    cv66?: boolean;
    cv67?: boolean;
    cv68?: boolean;
    cv69?: boolean;
    cv70?: boolean;
    cv71?: boolean;
    cv72?: boolean;
    cv73?: boolean;
    cv74?: boolean;
    cv75?: boolean;
    cv76?: boolean;
    cv77?: boolean;
    cv78?: boolean;
    cv79?: boolean;
    cv80?: boolean;
    cv81?: boolean;
    cv82?: boolean;
    cv83?: boolean;
    cv84?: boolean;
    cv85?: boolean;
    cv86?: boolean;
    cv87?: boolean;
    cv88?: boolean;
    cv89?: boolean;
    cv90?: boolean;
    cv91?: boolean;
    cv92?: boolean;
    cv93?: boolean;
    cv94?: boolean;
    cv95?: boolean;
    cv96?: boolean;
    cv97?: boolean;
    cv98?: boolean;
    cv99?: boolean;
    c2pc?: boolean;
    c2sc?: boolean;
    dist?: boolean;
    dlig?: boolean;
    dnom?: boolean;
    dtls?: boolean;
    expt?: boolean;
    falt?: boolean;
    fin2?: boolean;
    fin3?: boolean;
    fina?: boolean;
    flac?: boolean;
    frac?: boolean;
    fwid?: boolean;
    half?: boolean;
    haln?: boolean;
    halt?: boolean;
    hist?: boolean;
    hkna?: boolean;
    hlig?: boolean;
    hngl?: boolean;
    hojo?: boolean;
    hwid?: boolean;
    init?: boolean;
    isol?: boolean;
    ital?: boolean;
    jalt?: boolean;
    jp78?: boolean;
    jp83?: boolean;
    jp90?: boolean;
    jp04?: boolean;
    kern?: boolean;
    lfbd?: boolean;
    liga?: boolean;
    ljmo?: boolean;
    lnum?: boolean;
    locl?: boolean;
    ltra?: boolean;
    ltrm?: boolean;
    mark?: boolean;
    med2?: boolean;
    medi?: boolean;
    mgrk?: boolean;
    mkmk?: boolean;
    mset?: boolean;
    nalt?: boolean;
    nlck?: boolean;
    nukt?: boolean;
    numr?: boolean;
    onum?: boolean;
    opbd?: boolean;
    ordn?: boolean;
    ornm?: boolean;
    palt?: boolean;
    pcap?: boolean;
    pkna?: boolean;
    pnum?: boolean;
    pref?: boolean;
    pres?: boolean;
    pstf?: boolean;
    psts?: boolean;
    pwid?: boolean;
    qwid?: boolean;
    rand?: boolean;
    rclt?: boolean;
    rkrf?: boolean;
    rlig?: boolean;
    rphf?: boolean;
    rtbd?: boolean;
    rtla?: boolean;
    rtlm?: boolean;
    ruby?: boolean;
    rvrn?: boolean;
    salt?: boolean;
    sinf?: boolean;
    size?: boolean;
    smcp?: boolean;
    smpl?: boolean;
    ss01?: boolean;
    ss02?: boolean;
    ss03?: boolean;
    ss04?: boolean;
    ss05?: boolean;
    ss06?: boolean;
    ss07?: boolean;
    ss08?: boolean;
    ss09?: boolean;
    ss10?: boolean;
    ss11?: boolean;
    ss12?: boolean;
    ss13?: boolean;
    ss14?: boolean;
    ss15?: boolean;
    ss16?: boolean;
    ss17?: boolean;
    ss18?: boolean;
    ss19?: boolean;
    ss20?: boolean;
    ssty?: boolean;
    stch?: boolean;
    subs?: boolean;
    sups?: boolean;
    swsh?: boolean;
    titl?: boolean;
    tjmo?: boolean;
    tnam?: boolean;
    tnum?: boolean;
    trad?: boolean;
    twid?: boolean;
    unic?: boolean;
    valt?: boolean;
    vatu?: boolean;
    vert?: boolean;
    vhal?: boolean;
    vjmo?: boolean;
    vkna?: boolean;
    vkrn?: boolean;
    vpal?: boolean;
    vrt2?: boolean;
    vrtr?: boolean;
    zero?: boolean;
}
/**
 * A map of Apple Advanced Typography (AAT) as decribed by Apple’s TrueType
 * Reference manual:
 * https://developer.apple.com/fonts/TrueType-Reference-Manual/RM06/Chap6AATIntro.html
 */
interface AATFeatures {
    acnt?: boolean;
    ankr?: boolean;
    avar?: boolean;
    bdat?: boolean;
    bhed?: boolean;
    bloc?: boolean;
    bsln?: boolean;
    cmap?: boolean;
    cvar?: boolean;
    cvt?: boolean;
    EBSC?: boolean;
    fdsc?: boolean;
    feat?: boolean;
    fmtx?: boolean;
    fond?: boolean;
    fpgm?: boolean;
    fvar?: boolean;
    gasp?: boolean;
    gcid?: boolean;
    glyf?: boolean;
    gvar?: boolean;
    hdmx?: boolean;
    head?: boolean;
    hhea?: boolean;
    hmtx?: boolean;
    just?: boolean;
    kern?: boolean;
    kerx?: boolean;
    lcar?: boolean;
    loca?: boolean;
    ltag?: boolean;
    maxp?: boolean;
    meta?: boolean;
    mort?: boolean;
    morx?: boolean;
    name?: boolean;
    opbd?: boolean;
    'OS/2'?: boolean;
    post?: boolean;
    prep?: boolean;
    prop?: boolean;
    sbix?: boolean;
    trak?: boolean;
    vhea?: boolean;
    vmtx?: boolean;
    xref?: boolean;
    Zapf?: boolean;
}
/**
 * The features is an object mapping OpenType features to a boolean
 * enabling or disabling each. If this is an AAT font,
 * the OpenType feature tags are mapped to AAT features.
 */
interface TypeFeatures extends OpenTypeFeatures, AATFeatures {
    [key: string]: boolean | undefined;
}
/**
 * There are several different types of font objects that are returned by
 * fontkit depending on the font format. They all inherit from the TTFFont class
 * and have the same public API.
 */
interface Font {
    postscriptName: string | null;
    fullName: string | null;
    familyName: string | null;
    subfamilyName: string | null;
    copyright: string | null;
    version: string | null;
    unitsPerEm: number /** Size of the font’s internal coordinate grid */;
    ascent: number /** The font’s ascender */;
    descent: number /** The font’s descender */;
    lineGap: number /** Amount of space that should be included between lines */;
    underlinePosition: number /** Offset from the normal underline position that should be used */;
    underlineThickness: number /** Weight of the underline that should be used */;
    italicAngle: number /** If this is an italic font, the angle the cursor should be drawn at to match the font design */;
    capHeight: number /** Height of capital letters above the baseline. */;
    xHeight: number /** Height of lower case letters. */;
    bbox: BoundingBox /** Font’s bounding box, i.e. the box that encloses all glyphs in the font */;
    numGlyphs: number /** Number of glyphs in the font */;
    characterSet: number[] /** Array of all of the unicode code points supported by the font */;
    availableFeatures: (keyof TypeFeatures)[] /** Array of all OpenType feature tags (or mapped AAT tags) supported by the font */;
    cff: any;
    'OS/2': {
        sFamilyClass: number;
    };
    head: {
        macStyle: {
            italic: boolean;
        };
    };
    post: {
        isFixedPitch: boolean;
    };
    /**
     * Maps a single unicode code point (number) to a Glyph object.
     * Does not perform any advanced substitutions (there is no context to do so).
     */
    glyphForCodePoint(codePoint: number): Glyph;
    /**
     * Returns whether there is glyph in the font for the given
     * unicode code point.
     */
    hasGlyphForCodePoint(codePoint: number): boolean;
    /**
     * This method returns an array of Glyph objects for the given string.
     * This is only a one-to-one mapping from characters to glyphs. For most uses,
     * you should use Font.layout, which provides a much more advanced mapping
     * supporting AAT and OpenType shaping.
     */
    glyphsForString(str: string): Glyph[];
    /**
     * Returns the advance width (described above) for a single glyph id.
     */
    widthOfGlyph(glyphId: number): number;
    /**
     * This method returns a GlyphRun object, which includes an array of Glyphs
     * and GlyphPositions for the given string. Glyph objects are described below.
     * GlyphPosition objects include 4 properties: xAdvance, yAdvance, xOffset,
     * and yOffset.
     *
     * The features parameter is an array of OpenType feature tags to be applied
     * in addition to the default set. If this is an AAT font, the OpenType
     * feature tags are mapped to AAT features.
     */
    layout(str: string, features?: TypeFeatures | (keyof TypeFeatures)[]): GlyphRun;
    /**
     * Returns a glyph object for the given glyph id. You can pass the array of
     * code points this glyph represents for your use later, and it will be
     * stored in the glyph object.
     */
    getGlyph(glyphId: number, codePoints?: number[]): Glyph;
    /**
     * Returns a Subset object for this font.
     */
    createSubset(): Subset;
}
interface Fontkit {
    create(buffer: Uint8Array, postscriptName?: string): Font;
}

/**
 * A note of thanks to the developers of https://github.com/foliojs/pdfkit, as
 * this class borrows from:
 *   https://github.com/devongovett/pdfkit/blob/e71edab0dd4657b5a767804ba86c94c58d01fbca/lib/image/jpeg.coffee
 */
declare class CustomFontEmbedder {
    static for(fontkit: Fontkit, fontData: Uint8Array, customName?: string, fontFeatures?: TypeFeatures): Promise<CustomFontEmbedder>;
    readonly font: Font;
    readonly scale: number;
    readonly fontData: Uint8Array;
    readonly fontName: string;
    readonly customName: string | undefined;
    readonly fontFeatures: TypeFeatures | undefined;
    protected baseFontName: string;
    protected glyphCache: Cache<Glyph[]>;
    protected constructor(font: Font, fontData: Uint8Array, customName?: string, fontFeatures?: TypeFeatures);
    /**
     * Encode the JavaScript string into this font. (JavaScript encodes strings in
     * Unicode, but embedded fonts use their own custom encodings)
     */
    encodeText(text: string): PDFHexString;
    widthOfTextAtSize(text: string, size: number): number;
    heightOfFontAtSize(size: number, options?: {
        descender?: boolean;
    }): number;
    sizeOfFontAtHeight(height: number): number;
    embedIntoContext(context: PDFContext, ref?: PDFRef): Promise<PDFRef>;
    protected embedFontDict(context: PDFContext, ref?: PDFRef): Promise<PDFRef>;
    protected isCFF(): boolean;
    protected embedCIDFontDict(context: PDFContext): Promise<PDFRef>;
    protected embedFontDescriptor(context: PDFContext): Promise<PDFRef>;
    protected serializeFont(): Promise<Uint8Array>;
    protected embedFontStream(context: PDFContext): Promise<PDFRef>;
    protected embedUnicodeCmap(context: PDFContext): PDFRef;
    protected glyphId(glyph?: Glyph): number;
    protected computeWidths(): (number | number[])[];
    private allGlyphsInFontSortedById;
}

/**
 * A note of thanks to the developers of https://github.com/foliojs/pdfkit, as
 * this class borrows from:
 *   https://github.com/devongovett/pdfkit/blob/e71edab0dd4657b5a767804ba86c94c58d01fbca/lib/image/jpeg.coffee
 */
declare class CustomFontSubsetEmbedder extends CustomFontEmbedder {
    static for(fontkit: Fontkit, fontData: Uint8Array, customFontName?: string, fontFeatures?: TypeFeatures): Promise<CustomFontSubsetEmbedder>;
    private readonly subset;
    private readonly glyphs;
    private readonly glyphIdMap;
    private constructor();
    encodeText(text: string): PDFHexString;
    protected isCFF(): boolean;
    protected glyphId(glyph?: Glyph): number;
    protected serializeFont(): Promise<Uint8Array>;
}

/**
 * From the PDF-A3 specification, section **3.1. Requirements - General**.
 * See:
 * * https://www.pdfa.org/wp-content/uploads/2018/10/PDF20_AN002-AF.pdf
 */
declare enum AFRelationship {
    Source = "Source",
    Data = "Data",
    Alternative = "Alternative",
    Supplement = "Supplement",
    EncryptedPayload = "EncryptedPayload",
    FormData = "EncryptedPayload",
    Schema = "Schema",
    Unspecified = "Unspecified"
}
interface EmbeddedFileOptions {
    mimeType?: string;
    description?: string;
    creationDate?: Date;
    modificationDate?: Date;
    afRelationship?: AFRelationship;
}
declare class FileEmbedder {
    static for(bytes: Uint8Array, fileName: string, options?: EmbeddedFileOptions): FileEmbedder;
    private readonly fileData;
    readonly fileName: string;
    readonly options: EmbeddedFileOptions;
    private constructor();
    embedIntoContext(context: PDFContext, ref?: PDFRef): Promise<PDFRef>;
}

declare enum ColorSpace {
    DeviceGray = "DeviceGray",
    DeviceRGB = "DeviceRGB",
    DeviceCMYK = "DeviceCMYK"
}
/**
 * A note of thanks to the developers of https://github.com/foliojs/pdfkit, as
 * this class borrows from:
 *   https://github.com/foliojs/pdfkit/blob/a6af76467ce06bd6a2af4aa7271ccac9ff152a7d/lib/image/jpeg.js
 */
declare class JpegEmbedder {
    static for(imageData: Uint8Array): Promise<JpegEmbedder>;
    readonly bitsPerComponent: number;
    readonly height: number;
    readonly width: number;
    readonly colorSpace: ColorSpace;
    private readonly imageData;
    private constructor();
    embedIntoContext(context: PDFContext, ref?: PDFRef): Promise<PDFRef>;
}

/**
 * A note of thanks to the developers of https://github.com/foliojs/pdfkit, as
 * this class borrows from:
 *   https://github.com/devongovett/pdfkit/blob/e71edab0dd4657b5a767804ba86c94c58d01fbca/lib/image/png.coffee
 */
declare class PngEmbedder {
    static for(imageData: Uint8Array): Promise<PngEmbedder>;
    readonly bitsPerComponent: number;
    readonly height: number;
    readonly width: number;
    readonly colorSpace: 'DeviceRGB';
    private readonly image;
    private constructor();
    embedIntoContext(context: PDFContext, ref?: PDFRef): Promise<PDFRef>;
    private embedAlphaChannel;
}

type TreeNode = PDFPageTree | PDFPageLeaf;
declare class PDFPageTree extends PDFDict {
    static withContext: (context: PDFContext, parent?: PDFRef) => PDFPageTree;
    static fromMapWithContext: (map: DictMap, context: PDFContext) => PDFPageTree;
    Parent(): PDFPageTree | undefined;
    Kids(): PDFArray;
    Count(): PDFNumber;
    pushTreeNode(treeRef: PDFRef): void;
    pushLeafNode(leafRef: PDFRef): void;
    /**
     * Inserts the given ref as a leaf node of this page tree at the specified
     * index (zero-based). Also increments the `Count` of each page tree in the
     * hierarchy to accomodate the new page.
     *
     * Returns the ref of the PDFPageTree node into which `leafRef` was inserted,
     * or `undefined` if it was inserted into the root node (the PDFPageTree upon
     * which the method was first called).
     */
    insertLeafNode(leafRef: PDFRef, targetIndex: number): PDFRef | undefined;
    /**
     * Removes the leaf node at the specified index (zero-based) from this page
     * tree. Also decrements the `Count` of each page tree in the hierarchy to
     * account for the removed page.
     *
     * If `prune` is true, then intermediate tree nodes will be removed from the
     * tree if they contain 0 children after the leaf node is removed.
     */
    removeLeafNode(targetIndex: number, prune?: boolean): void;
    ascend(visitor: (node: PDFPageTree) => any): void;
    /** Performs a Post-Order traversal of this page tree */
    traverse(visitor: (node: TreeNode, ref: PDFRef) => any): void;
    private insertLeafKid;
    private removeKid;
}

declare class PDFPageLeaf extends PDFDict {
    static readonly InheritableEntries: string[];
    static withContextAndParent: (context: PDFContext, parent: PDFRef) => PDFPageLeaf;
    static fromMapWithContext: (map: DictMap, context: PDFContext, autoNormalizeCTM?: boolean) => PDFPageLeaf;
    private normalized;
    private readonly autoNormalizeCTM;
    private constructor();
    clone(context?: PDFContext): PDFPageLeaf;
    Parent(): PDFPageTree | undefined;
    Contents(): PDFStream | PDFArray | undefined;
    Annots(): PDFArray | undefined;
    BleedBox(): PDFArray | undefined;
    TrimBox(): PDFArray | undefined;
    ArtBox(): PDFArray | undefined;
    Resources(): PDFDict | undefined;
    MediaBox(): PDFArray;
    CropBox(): PDFArray | undefined;
    Rotate(): PDFNumber | undefined;
    getInheritableAttribute(name: PDFName): PDFObject | undefined;
    setParent(parentRef: PDFRef): void;
    addContentStream(contentStreamRef: PDFRef): void;
    wrapContentStreams(startStream: PDFRef, endStream: PDFRef): boolean;
    addAnnot(annotRef: PDFRef): void;
    removeAnnot(annotRef: PDFRef): void;
    setFontDictionary(name: PDFName, fontDictRef: PDFRef): void;
    newFontDictionaryKey(tag: string): PDFName;
    newFontDictionary(tag: string, fontDictRef: PDFRef): PDFName;
    setXObject(name: PDFName, xObjectRef: PDFRef): void;
    newXObjectKey(tag: string): PDFName;
    newXObject(tag: string, xObjectRef: PDFRef): PDFName;
    setExtGState(name: PDFName, extGStateRef: PDFRef | PDFDict): void;
    newExtGStateKey(tag: string): PDFName;
    newExtGState(tag: string, extGStateRef: PDFRef | PDFDict): PDFName;
    ascend(visitor: (node: PDFPageTree | PDFPageLeaf) => any): void;
    normalize(): void;
    normalizedEntries(): {
        Annots: PDFArray;
        Resources: PDFDict;
        Contents: PDFArray | undefined;
        Font: PDFDict;
        XObject: PDFDict;
        ExtGState: PDFDict;
    };
}

/**
 * A transformation matrix according to section `8.3.3 Common Transformations`
 * of the PDF specification (page 117).
 *
 * To cite from the spec:
 *
 *   * Translations shall be specified as `[1 0 0 1 tx ty]`, where `tx` and
 *     `ty` shall be the distances to translate the origin of the coordinate
 *     system in the horizontal and vertical dimensions, respectively.
 *   * Scaling shall be obtained by `[sx 0 0 sy 0 0]`. This scales the
 *     coordinates so that 1 unit in the horizontal and vertical dimensions of
 *     the new coordinate system is the same size as `sx` and `sy` units,
 *     respectively, in the previous coordinate system.
 *   * Rotations shall be produced by `[cos(q) sin(q) -sin(q) cos(q) 0 0]`,
 *     which has the effect of rotating the coordinate system axes by an angle
 *     `q` counter clockwise.
 *   * Skew shall be specified by `[1 tan(a) tan(b) 1 0 0]`, which skews the
 *     x-axis by an angle `a` and the y axis by an angle `b`.
 */
type TransformationMatrix = [
    number,
    number,
    number,
    number,
    number,
    number
];

/**
 * Represents a page bounding box.
 * Usually `left` and `bottom` are 0 and right, top are equal
 * to width, height if you want to clip to the whole page.
 *
 *       y
 *       ^
 *       | +--------+ (width,height)
 *       | |        |
 *       | |  Page  |
 *       | |        |
 *       | |        |
 * (0,0) | +--------+
 *       +----------> x
 */
interface PageBoundingBox {
    left: number /** The left of the bounding box */;
    bottom: number /** The bottom of the bounding box */;
    right: number /** The right of the bounding box */;
    top: number /** The top of the bounding box */;
}
declare class PDFPageEmbedder {
    static for(page: PDFPageLeaf, boundingBox?: PageBoundingBox, transformationMatrix?: TransformationMatrix): Promise<PDFPageEmbedder>;
    readonly width: number;
    readonly height: number;
    readonly boundingBox: PageBoundingBox;
    readonly transformationMatrix: TransformationMatrix;
    private readonly page;
    private constructor();
    embedIntoContext(context: PDFContext, ref?: PDFRef): Promise<PDFRef>;
    private decodeContents;
}

declare enum NonFullScreenPageMode {
    /**
     * After exiting FullScreen mode, neither the document outline nor thumbnail
     * images should be visible.
     */
    UseNone = "UseNone",
    /** After exiting FullScreen mode, the document outline should be visible. */
    UseOutlines = "UseOutlines",
    /** After exiting FullScreen mode, thumbnail images should be visible. */
    UseThumbs = "UseThumbs",
    /**
     * After exiting FullScreen mode, the optional content group panel should be
     * visible.
     */
    UseOC = "UseOC"
}
declare enum ReadingDirection {
    /** The predominant reading order is Left to Right. */
    L2R = "L2R",
    /**
     * The predominant reading order is Right to left (including vertical writing
     * systems, such as Chinese, Japanese and Korean).
     */
    R2L = "R2L"
}
declare enum PrintScaling {
    /** No page scaling. */
    None = "None",
    AppDefault = "AppDefault"
}
declare enum Duplex {
    /** The PDF reader should print single-sided. */
    Simplex = "Simplex",
    /**
     * The PDF reader should print double sided and flip on the short edge of the
     * sheet.
     */
    DuplexFlipShortEdge = "DuplexFlipShortEdge",
    /**
     * The PDF reader should print double sided and flip on the long edge of the
     * sheet.
     */
    DuplexFlipLongEdge = "DuplexFlipLongEdge"
}
type BoolViewerPrefKey = 'HideToolbar' | 'HideMenubar' | 'HideWindowUI' | 'FitWindow' | 'CenterWindow' | 'DisplayDocTitle' | 'PickTrayByPDFSize';
type NameViewerPrefKey = 'NonFullScreenPageMode' | 'Direction' | 'PrintScaling' | 'Duplex';
interface PageRange {
    start: number;
    end: number;
}
declare class ViewerPreferences {
    /** @ignore */
    readonly dict: PDFDict;
    /** @ignore */
    static fromDict: (dict: PDFDict) => ViewerPreferences;
    /** @ignore */
    static create: (context: PDFContext) => ViewerPreferences;
    /** @ignore */
    protected constructor(dict: PDFDict);
    protected lookupBool(key: BoolViewerPrefKey): PDFBool | undefined;
    protected lookupName(key: NameViewerPrefKey): PDFName | undefined;
    /** @ignore */
    HideToolbar(): PDFBool | undefined;
    /** @ignore */
    HideMenubar(): PDFBool | undefined;
    /** @ignore */
    HideWindowUI(): PDFBool | undefined;
    /** @ignore */
    FitWindow(): PDFBool | undefined;
    /** @ignore */
    CenterWindow(): PDFBool | undefined;
    /** @ignore */
    DisplayDocTitle(): PDFBool | undefined;
    /** @ignore */
    NonFullScreenPageMode(): PDFName | undefined;
    /** @ignore */
    Direction(): PDFName | undefined;
    /** @ignore */
    PrintScaling(): PDFName | undefined;
    /** @ignore */
    Duplex(): PDFName | undefined;
    /** @ignore */
    PickTrayByPDFSize(): PDFBool | undefined;
    /** @ignore */
    PrintPageRange(): PDFArray | undefined;
    /** @ignore */
    NumCopies(): PDFNumber | undefined;
    /**
     * Returns `true` if PDF readers should hide the toolbar menus when displaying
     * this document.
     * @returns Whether or not toolbars should be hidden.
     */
    getHideToolbar(): boolean;
    /**
     * Returns `true` if PDF readers should hide the menu bar when displaying this
     * document.
     * @returns Whether or not the menu bar should be hidden.
     */
    getHideMenubar(): boolean;
    /**
     * Returns `true` if PDF readers should hide the user interface elements in
     * the document's window (such as scroll bars and navigation controls),
     * leaving only the document's contents displayed.
     * @returns Whether or not user interface elements should be hidden.
     */
    getHideWindowUI(): boolean;
    /**
     * Returns `true` if PDF readers should resize the document's window to fit
     * the size of the first displayed page.
     * @returns Whether or not the window should be resized to fit.
     */
    getFitWindow(): boolean;
    /**
     * Returns `true` if PDF readers should position the document's window in the
     * center of the screen.
     * @returns Whether or not to center the document window.
     */
    getCenterWindow(): boolean;
    /**
     * Returns `true` if the window's title bar should display the document
     * `Title`, taken from the document metadata (see [[PDFDocument.getTitle]]).
     * Returns `false` if the title bar should instead display the filename of the
     * PDF file.
     * @returns Whether to display the document title.
     */
    getDisplayDocTitle(): boolean;
    /**
     * Returns the page mode, which tells the PDF reader how to display the
     * document after exiting full-screen mode.
     * @returns The page mode after exiting full-screen mode.
     */
    getNonFullScreenPageMode(): NonFullScreenPageMode;
    /**
     * Returns the predominant reading order for text.
     * @returns The text reading order.
     */
    getReadingDirection(): ReadingDirection;
    /**
     * Returns the page scaling option that the PDF reader should select when the
     * print dialog is displayed.
     * @returns The page scaling option.
     */
    getPrintScaling(): PrintScaling;
    /**
     * Returns the paper handling option that should be used when printing the
     * file from the print dialog.
     * @returns The paper handling option.
     */
    getDuplex(): Duplex | undefined;
    /**
     * Returns `true` if the PDF page size should be used to select the input
     * paper tray.
     * @returns Whether or not the PDF page size should be used to select the
     *          input paper tray.
     */
    getPickTrayByPDFSize(): boolean | undefined;
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
    getPrintPageRange(): PageRange[];
    /**
     * Returns the number of copies to be printed when the print dialog is opened
     * for this document.
     * @returns The default number of copies to be printed.
     */
    getNumCopies(): number;
    /**
     * Choose whether the PDF reader's toolbars should be hidden while the
     * document is active.
     * @param hideToolbar `true` if the toolbar should be hidden.
     */
    setHideToolbar(hideToolbar: boolean): void;
    /**
     * Choose whether the PDF reader's menu bar should be hidden while the
     * document is active.
     * @param hideMenubar `true` if the menu bar should be hidden.
     */
    setHideMenubar(hideMenubar: boolean): void;
    /**
     * Choose whether the PDF reader should hide user interface elements in the
     * document's window (such as scroll bars and navigation controls), leaving
     * only the document's contents displayed.
     * @param hideWindowUI `true` if the user interface elements should be hidden.
     */
    setHideWindowUI(hideWindowUI: boolean): void;
    /**
     * Choose whether the PDF reader should resize the document's window to fit
     * the size of the first displayed page.
     * @param fitWindow `true` if the window should be resized.
     */
    setFitWindow(fitWindow: boolean): void;
    /**
     * Choose whether the PDF reader should position the document's window in the
     * center of the screen.
     * @param centerWindow `true` if the window should be centered.
     */
    setCenterWindow(centerWindow: boolean): void;
    /**
     * Choose whether the window's title bar should display the document `Title`
     * taken from the document metadata (see [[PDFDocument.setTitle]]). If
     * `false`, the title bar should instead display the PDF filename.
     * @param displayTitle `true` if the document title should be displayed.
     */
    setDisplayDocTitle(displayTitle: boolean): void;
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
    setNonFullScreenPageMode(nonFullScreenPageMode: NonFullScreenPageMode): void;
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
    setReadingDirection(readingDirection: ReadingDirection): void;
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
    setPrintScaling(printScaling: PrintScaling): void;
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
    setDuplex(duplex: Duplex): void;
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
    setPickTrayByPDFSize(pickTrayByPDFSize: boolean): void;
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
    setPrintPageRange(printPageRange: PageRange[] | PageRange): void;
    /**
     * Choose the default number of copies to be printed when the print dialog is
     * opened for this file.
     * @param numCopies The default number of copies.
     */
    setNumCopies(numCopies: number): void;
}

declare class PDFInvalidObject extends PDFObject {
    static of: (data: Uint8Array) => PDFInvalidObject;
    private readonly data;
    private constructor();
    clone(): PDFInvalidObject;
    toString(): string;
    sizeInBytes(): number;
    copyBytesInto(buffer: Uint8Array, offset: number): number;
}

declare class PDFAcroField {
    readonly dict: PDFDict;
    readonly ref: PDFRef;
    protected constructor(dict: PDFDict, ref: PDFRef);
    T(): PDFString | PDFHexString | undefined;
    Ff(): PDFNumber | undefined;
    V(): PDFObject | undefined;
    Kids(): PDFArray | undefined;
    DA(): PDFString | PDFHexString | undefined;
    setKids(kids: PDFObject[]): void;
    getParent(): PDFAcroField | undefined;
    setParent(parent: PDFRef | undefined): void;
    getFullyQualifiedName(): string | undefined;
    getPartialName(): string | undefined;
    setPartialName(partialName: string | undefined): void;
    setDefaultAppearance(appearance: string): void;
    getDefaultAppearance(): string | undefined;
    setFontSize(fontSize: number): void;
    getFlags(): number;
    setFlags(flags: number): void;
    hasFlag(flag: number): boolean;
    setFlag(flag: number): void;
    clearFlag(flag: number): void;
    setFlagTo(flag: number, enable: boolean): void;
    getInheritableAttribute(name: PDFName): PDFObject | undefined;
    ascend(visitor: (node: PDFAcroField) => any): void;
}

declare class BorderStyle {
    readonly dict: PDFDict;
    static fromDict: (dict: PDFDict) => BorderStyle;
    protected constructor(dict: PDFDict);
    W(): PDFNumber | undefined;
    getWidth(): number | undefined;
    setWidth(width: number): void;
}

declare class PDFAnnotation {
    readonly dict: PDFDict;
    static fromDict: (dict: PDFDict) => PDFAnnotation;
    protected constructor(dict: PDFDict);
    Rect(): PDFArray | undefined;
    AP(): PDFDict | undefined;
    F(): PDFNumber | undefined;
    getRectangle(): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    setRectangle(rect: {
        x: number;
        y: number;
        width: number;
        height: number;
    }): void;
    getAppearanceState(): PDFName | undefined;
    setAppearanceState(state: PDFName): void;
    setAppearances(appearances: PDFDict): void;
    ensureAP(): PDFDict;
    getNormalAppearance(): PDFRef | PDFDict;
    /** @param appearance A PDFDict or PDFStream (direct or ref) */
    setNormalAppearance(appearance: PDFRef | PDFDict): void;
    /** @param appearance A PDFDict or PDFStream (direct or ref) */
    setRolloverAppearance(appearance: PDFRef | PDFDict): void;
    /** @param appearance A PDFDict or PDFStream (direct or ref) */
    setDownAppearance(appearance: PDFRef | PDFDict): void;
    removeRolloverAppearance(): void;
    removeDownAppearance(): void;
    getAppearances(): {
        normal: PDFStream | PDFDict;
        rollover?: PDFStream | PDFDict;
        down?: PDFStream | PDFDict;
    } | undefined;
    getFlags(): number;
    setFlags(flags: number): void;
    hasFlag(flag: number): boolean;
    setFlag(flag: number): void;
    clearFlag(flag: number): void;
    setFlagTo(flag: number, enable: boolean): void;
}

declare class AppearanceCharacteristics {
    readonly dict: PDFDict;
    static fromDict: (dict: PDFDict) => AppearanceCharacteristics;
    protected constructor(dict: PDFDict);
    R(): PDFNumber | undefined;
    BC(): PDFArray | undefined;
    BG(): PDFArray | undefined;
    CA(): PDFHexString | PDFString | undefined;
    RC(): PDFHexString | PDFString | undefined;
    AC(): PDFHexString | PDFString | undefined;
    getRotation(): number | undefined;
    getBorderColor(): number[] | undefined;
    getBackgroundColor(): number[] | undefined;
    getCaptions(): {
        normal?: string;
        rollover?: string;
        down?: string;
    };
    setRotation(rotation: number): void;
    setBorderColor(color: number[]): void;
    setBackgroundColor(color: number[]): void;
    setCaptions(captions: {
        normal: string;
        rollover?: string;
        down?: string;
    }): void;
}

declare class PDFWidgetAnnotation extends PDFAnnotation {
    static fromDict: (dict: PDFDict) => PDFWidgetAnnotation;
    static create: (context: PDFContext, parent: PDFRef) => PDFWidgetAnnotation;
    MK(): PDFDict | undefined;
    BS(): PDFDict | undefined;
    DA(): PDFString | PDFHexString | undefined;
    P(): PDFRef | undefined;
    setP(page: PDFRef): void;
    setDefaultAppearance(appearance: string): void;
    getDefaultAppearance(): string | undefined;
    getAppearanceCharacteristics(): AppearanceCharacteristics | undefined;
    getOrCreateAppearanceCharacteristics(): AppearanceCharacteristics;
    getBorderStyle(): BorderStyle | undefined;
    getOrCreateBorderStyle(): BorderStyle;
    getOnValue(): PDFName | undefined;
}

declare class PDFAcroTerminal extends PDFAcroField {
    static fromDict: (dict: PDFDict, ref: PDFRef) => PDFAcroTerminal;
    FT(): PDFName;
    getWidgets(): PDFWidgetAnnotation[];
    addWidget(ref: PDFRef): void;
    removeWidget(idx: number): void;
    normalizedEntries(): {
        Kids: PDFArray;
    };
}

declare class PDFAcroButton extends PDFAcroTerminal {
    Opt(): PDFString | PDFHexString | PDFArray | undefined;
    setOpt(opt: PDFObject[]): void;
    getExportValues(): (PDFString | PDFHexString)[] | undefined;
    removeExportValue(idx: number): void;
    normalizeExportValues(): void;
    /**
     * Reuses existing opt if one exists with the same value (assuming
     * `useExistingIdx` is `true`). Returns index of existing (or new) opt.
     */
    addOpt(opt: PDFHexString | PDFString, useExistingOptIdx: boolean): number;
    addWidgetWithOpt(widget: PDFRef, opt: PDFHexString | PDFString, useExistingOptIdx: boolean): PDFName;
}

declare class PDFAcroCheckBox extends PDFAcroButton {
    static fromDict: (dict: PDFDict, ref: PDFRef) => PDFAcroCheckBox;
    static create: (context: PDFContext) => PDFAcroCheckBox;
    setValue(value: PDFName): void;
    getValue(): PDFName;
    getOnValue(): PDFName | undefined;
}

declare class PDFAcroChoice extends PDFAcroTerminal {
    setValues(values: (PDFString | PDFHexString)[]): void;
    valuesAreValid(values: (PDFString | PDFHexString)[]): boolean;
    updateSelectedIndices(values: (PDFString | PDFHexString)[]): void;
    getValues(): (PDFString | PDFHexString)[];
    Opt(): PDFArray | PDFString | PDFHexString | undefined;
    setOptions(options: {
        value: PDFString | PDFHexString;
        display?: PDFString | PDFHexString;
    }[]): void;
    getOptions(): {
        value: PDFString | PDFHexString;
        display: PDFString | PDFHexString;
    }[];
}

declare class PDFAcroComboBox extends PDFAcroChoice {
    static fromDict: (dict: PDFDict, ref: PDFRef) => PDFAcroComboBox;
    static create: (context: PDFContext) => PDFAcroComboBox;
}

declare class PDFAcroForm {
    readonly dict: PDFDict;
    static fromDict: (dict: PDFDict) => PDFAcroForm;
    static create: (context: PDFContext) => PDFAcroForm;
    private constructor();
    Fields(): PDFArray | undefined;
    getFields(): [PDFAcroField, PDFRef][];
    getAllFields(): [PDFAcroField, PDFRef][];
    addField(field: PDFRef): void;
    removeField(field: PDFAcroField): void;
    normalizedEntries(): {
        Fields: PDFArray;
    };
}

declare class PDFAcroListBox extends PDFAcroChoice {
    static fromDict: (dict: PDFDict, ref: PDFRef) => PDFAcroListBox;
    static create: (context: PDFContext) => PDFAcroListBox;
}

declare class PDFAcroNonTerminal extends PDFAcroField {
    static fromDict: (dict: PDFDict, ref: PDFRef) => PDFAcroNonTerminal;
    static create: (context: PDFContext) => PDFAcroNonTerminal;
    addField(field: PDFRef): void;
    normalizedEntries(): {
        Kids: PDFArray;
    };
}

declare class PDFAcroPushButton extends PDFAcroButton {
    static fromDict: (dict: PDFDict, ref: PDFRef) => PDFAcroPushButton;
    static create: (context: PDFContext) => PDFAcroPushButton;
}

declare class PDFAcroRadioButton extends PDFAcroButton {
    static fromDict: (dict: PDFDict, ref: PDFRef) => PDFAcroRadioButton;
    static create: (context: PDFContext) => PDFAcroRadioButton;
    setValue(value: PDFName): void;
    getValue(): PDFName;
    getOnValues(): PDFName[];
}

declare class PDFAcroSignature extends PDFAcroTerminal {
    static fromDict: (dict: PDFDict, ref: PDFRef) => PDFAcroSignature;
}

declare class PDFAcroText extends PDFAcroTerminal {
    static fromDict: (dict: PDFDict, ref: PDFRef) => PDFAcroText;
    static create: (context: PDFContext) => PDFAcroText;
    MaxLen(): PDFNumber | undefined;
    Q(): PDFNumber | undefined;
    setMaxLength(maxLength: number): void;
    removeMaxLength(): void;
    getMaxLength(): number | undefined;
    setQuadding(quadding: 0 | 1 | 2): void;
    getQuadding(): number | undefined;
    setValue(value: PDFHexString | PDFString): void;
    removeValue(): void;
    getValue(): PDFString | PDFHexString | undefined;
}

/** From PDF spec table 221 */
declare enum AcroFieldFlags {
    /**
     * If set, the user may not change the value of the field. Any associated
     * widget annotations will not interact with the user; that is, they will not
     * respond to mouse clicks or change their appearance in response to mouse
     * motions. This flag is useful for fields whose values are computed or
     * imported from a database.
     */
    ReadOnly,
    /**
     * If set, the field shall have a value at the time it is exported by a
     * submit-form action (see 12.7.5.2, "Submit-Form Action").
     */
    Required,
    /**
     * If set, the field shall not be exported by a submit-form action
     * (see 12.7.5.2, "Submit-Form Action").
     */
    NoExport
}
/** From PDF spec table 226 */
declare enum AcroButtonFlags {
    /**
     * (Radio buttons only) If set, exactly one radio button shall be selected at
     * all times; selecting the currently selected button has no effect. If clear,
     * clicking the selected button deselects it, leaving no button selected.
     */
    NoToggleToOff,
    /**
     * If set, the field is a set of radio buttons; if clear, the field is a check
     * box. This flag may be set only if the Pushbutton flag is clear.
     */
    Radio,
    /**
     * If set, the field is a pushbutton that does not retain a permanent value.
     */
    PushButton,
    /**
     * If set, a group of radio buttons within a radio button field that use the
     * same value for the on state will turn on and off in unison; that is if one
     * is checked, they are all checked. If clear, the buttons are mutually
     * exclusive (the same behavior as HTML radio buttons).
     */
    RadiosInUnison
}
/** From PDF spec table 228 */
declare enum AcroTextFlags {
    /**
     * If set, the field may contain multiple lines of text; if clear, the field's
     * text shall be restricted to a single line.
     */
    Multiline,
    /**
     * If set, the field is intended for entering a secure password that should
     * not be echoed visibly to the screen. Characters typed from the keyboard
     * shall instead be echoed in some unreadable form, such as asterisks or
     * bullet characters.
     * > NOTE   To protect password confidentiality, readers should never store
     * >        the value of the text field in the PDF file if this flag is set.
     */
    Password,
    /**
     * If set, the text entered in the field represents the pathname of a file
     * whose contents shall be submitted as the value of the field.
     */
    FileSelect,
    /**
     * If set, text entered in the field shall not be spell-checked.
     */
    DoNotSpellCheck,
    /**
     * If set, the field shall not scroll (horizontally for single-line fields,
     * vertically for multiple-line fields) to accommodate more text than fits
     * within its annotation rectangle. Once the field is full, no further text
     * shall be accepted for interactive form filling; for non-interactive form
     * filling, the filler should take care not to add more character than will
     * visibly fit in the defined area.
     */
    DoNotScroll,
    /**
     * May be set only if the MaxLen entry is present in the text field dictionary
     * (see Table 229) and if the Multiline, Password, and FileSelect flags are
     * clear. If set, the field shall be automatically divided into as many
     * equally spaced positions, or combs, as the value of MaxLen, and the text
     * is laid out into those combs.
     */
    Comb,
    /**
     * If set, the value of this field shall be a rich text string
     * (see 12.7.3.4, "Rich Text Strings"). If the field has a value, the RV
     * entry of the field dictionary (Table 222) shall specify the rich text
     * string.
     */
    RichText
}
/** From PDF spec table 230 */
declare enum AcroChoiceFlags {
    /**
     * If set, the field is a combo box; if clear, the field is a list box.
     */
    Combo,
    /**
     * If set, the combo box shall include an editable text box as well as a
     * drop-down list; if clear, it shall include only a drop-down list. This
     * flag shall be used only if the Combo flag is set.
     */
    Edit,
    /**
     * If set, the field's option items shall be sorted alphabetically. This flag
     * is intended for use by writers, not by readers. Conforming readers shall
     * display the options in the order in which they occur in the Opt array
     * (see Table 231).
     */
    Sort,
    /**
     * If set, more than one of the field's option items may be selected
     * simultaneously; if clear, at most one item shall be selected.
     */
    MultiSelect,
    /**
     * If set, text entered in the field shall not be spell-checked. This flag
     * shall not be used unless the Combo and Edit flags are both set.
     */
    DoNotSpellCheck,
    /**
     * If set, the new value shall be committed as soon as a selection is made
     * (commonly with the pointing device). In this case, supplying a value for
     * a field involves three actions: selecting the field for fill-in,
     * selecting a choice for the fill-in value, and leaving that field, which
     * finalizes or "commits" the data choice and triggers any actions associated
     * with the entry or changing of this data. If this flag is on, then
     * processing does not wait for leaving the field action to occur, but
     * immediately proceeds to the third step.
     *
     * This option enables applications to perform an action once a selection is
     * made, without requiring the user to exit the field. If clear, the new
     * value is not committed until the user exits the field.
     */
    CommitOnSelChange
}

declare const createPDFAcroFields: (kidDicts?: PDFArray) => [PDFAcroField, PDFRef][];
declare const createPDFAcroField: (dict: PDFDict, ref: PDFRef) => PDFAcroField;

declare class PDFCatalog extends PDFDict {
    static withContextAndPages: (context: PDFContext, pages: PDFPageTree | PDFRef) => PDFCatalog;
    static fromMapWithContext: (map: DictMap, context: PDFContext) => PDFCatalog;
    Pages(): PDFPageTree;
    AcroForm(): PDFDict | undefined;
    getAcroForm(): PDFAcroForm | undefined;
    getOrCreateAcroForm(): PDFAcroForm;
    ViewerPreferences(): PDFDict | undefined;
    getViewerPreferences(): ViewerPreferences | undefined;
    getOrCreateViewerPreferences(): ViewerPreferences;
    /**
     * Inserts the given ref as a leaf node of this catalog's page tree at the
     * specified index (zero-based). Also increments the `Count` of each node in
     * the page tree hierarchy to accomodate the new page.
     *
     * Returns the ref of the PDFPageTree node into which `leafRef` was inserted.
     */
    insertLeafNode(leafRef: PDFRef, index: number): PDFRef;
    removeLeafNode(index: number): void;
}

declare enum EntryType {
    Deleted = 0,
    Uncompressed = 1,
    Compressed = 2
}
interface DeletedEntry {
    type: EntryType.Deleted;
    ref: PDFRef;
    nextFreeObjectNumber: number;
}
interface UncompressedEntry {
    type: EntryType.Uncompressed;
    ref: PDFRef;
    offset: number;
}
interface CompressedEntry {
    type: EntryType.Compressed;
    ref: PDFRef;
    objectStreamRef: PDFRef;
    index: number;
}
type Entry$1 = DeletedEntry | UncompressedEntry | CompressedEntry;
/**
 * Entries should be added using the [[addDeletedEntry]],
 * [[addUncompressedEntry]], and [[addCompressedEntry]] methods
 * **in order of ascending object number**.
 */
declare class PDFCrossRefStream extends PDFFlateStream {
    static create: (dict: PDFDict, encode?: boolean) => PDFCrossRefStream;
    static of: (dict: PDFDict, entries: Entry$1[], encode?: boolean) => PDFCrossRefStream;
    private readonly entries;
    private readonly entryTuplesCache;
    private readonly maxByteWidthsCache;
    private readonly indexCache;
    private constructor();
    addDeletedEntry(ref: PDFRef, nextFreeObjectNumber: number): void;
    addUncompressedEntry(ref: PDFRef, offset: number): void;
    addCompressedEntry(ref: PDFRef, objectStreamRef: PDFRef, index: number): void;
    clone(context?: PDFContext): PDFCrossRefStream;
    getContentsString(): string;
    getUnencodedContents(): Uint8Array;
    getUnencodedContentsSize(): number;
    updateDict(): void;
    private computeIndex;
    private computeEntryTuples;
    private computeMaxEntryByteWidths;
}

type IndirectObject = [PDFRef, PDFObject];
declare class PDFObjectStream extends PDFFlateStream {
    static withContextAndObjects: (context: PDFContext, objects: IndirectObject[], encode?: boolean) => PDFObjectStream;
    private readonly objects;
    private readonly offsets;
    private readonly offsetsString;
    private constructor();
    getObjectsCount(): number;
    clone(context?: PDFContext): PDFObjectStream;
    getContentsString(): string;
    getUnencodedContents(): Uint8Array;
    getUnencodedContentsSize(): number;
    private computeOffsetsString;
    private computeObjectOffsets;
}

declare class ByteStream {
    static of: (bytes: Uint8Array) => ByteStream;
    static fromPDFRawStream: (rawStream: PDFRawStream) => ByteStream;
    private readonly bytes;
    private readonly length;
    private idx;
    private line;
    private column;
    constructor(bytes: Uint8Array);
    moveTo(offset: number): void;
    next(): number;
    assertNext(expected: number): number;
    peek(): number;
    peekAhead(steps: number): number;
    peekAt(offset: number): number;
    done(): boolean;
    offset(): number;
    slice(start: number, end: number): Uint8Array;
    position(): {
        line: number;
        column: number;
        offset: number;
    };
}

declare class BaseParser {
    protected readonly bytes: ByteStream;
    protected readonly capNumbers: boolean;
    constructor(bytes: ByteStream, capNumbers?: boolean);
    protected parseRawInt(): number;
    protected parseRawNumber(): number;
    protected skipWhitespace(): void;
    protected skipLine(): void;
    protected skipComment(): boolean;
    protected skipWhitespaceAndComments(): void;
    protected matchKeyword(keyword: number[]): boolean;
}

declare class PDFObjectParser extends BaseParser {
    static forBytes: (bytes: Uint8Array, context: PDFContext, capNumbers?: boolean) => PDFObjectParser;
    static forByteStream: (byteStream: ByteStream, context: PDFContext, capNumbers?: boolean) => PDFObjectParser;
    protected readonly context: PDFContext;
    constructor(byteStream: ByteStream, context: PDFContext, capNumbers?: boolean);
    parseObject(): PDFObject;
    protected parseNumberOrRef(): PDFNumber | PDFRef;
    protected parseHexString(): PDFHexString;
    protected parseString(): PDFString;
    protected parseName(): PDFName;
    protected parseArray(): PDFArray;
    protected parseDict(): PDFDict;
    protected parseDictOrStream(): PDFDict | PDFStream;
    protected findEndOfStreamFallback(startPos: Position): number;
}

declare class PDFObjectStreamParser extends PDFObjectParser {
    static forStream: (rawStream: PDFRawStream, shouldWaitForTick?: () => boolean) => PDFObjectStreamParser;
    private alreadyParsed;
    private readonly shouldWaitForTick;
    private readonly firstOffset;
    private readonly objectCount;
    constructor(rawStream: PDFRawStream, shouldWaitForTick?: () => boolean);
    parseIntoContext(): Promise<void>;
    private parseOffsetsAndObjectNumbers;
}

declare class PDFParser extends PDFObjectParser {
    static forBytesWithOptions: (pdfBytes: Uint8Array, objectsPerTick?: number, throwOnInvalidObject?: boolean, capNumbers?: boolean) => PDFParser;
    private readonly objectsPerTick;
    private readonly throwOnInvalidObject;
    private alreadyParsed;
    private parsedObjects;
    constructor(pdfBytes: Uint8Array, objectsPerTick?: number, throwOnInvalidObject?: boolean, capNumbers?: boolean);
    parseDocument(): Promise<PDFContext>;
    private maybeRecoverRoot;
    private parseHeader;
    private parseIndirectObjectHeader;
    private matchIndirectObjectHeader;
    private shouldWaitForTick;
    private parseIndirectObject;
    private tryToParseInvalidIndirectObject;
    private parseIndirectObjects;
    private maybeParseCrossRefSection;
    private maybeParseTrailerDict;
    private maybeParseTrailer;
    private parseDocumentSection;
    /**
     * This operation is not necessary for valid PDF files. But some invalid PDFs
     * contain jibberish in between indirect objects. This method is designed to
     * skip past that jibberish, should it exist, until it reaches the next
     * indirect object header, an xref table section, or the file trailer.
     */
    private skipJibberish;
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
    private skipBinaryHeaderComment;
}

interface Entry {
    ref: PDFRef;
    offset: number;
    deleted: boolean;
    inObjectStream: boolean;
}
declare class PDFXRefStreamParser {
    static forStream: (rawStream: PDFRawStream) => PDFXRefStreamParser;
    private alreadyParsed;
    private readonly dict;
    private readonly context;
    private readonly bytes;
    private readonly subsections;
    private readonly byteWidths;
    constructor(rawStream: PDFRawStream);
    parseIntoContext(): Entry[];
    private parseEntries;
}

interface StreamType {
    isEmpty: boolean;
    getByte(): number;
    getUint16(): number;
    getInt32(): number;
    getBytes(length: number, forceClamped?: boolean): Uint8Array | Uint8ClampedArray;
    peekByte(): number;
    peekBytes(length: number, forceClamped?: boolean): Uint8Array | Uint8ClampedArray;
    skip(n: number): void;
    reset(): void;
    makeSubStream(start: number, length: number): StreamType;
    decode(): Uint8Array;
}

declare const decodePDFRawStream: ({ dict, contents }: PDFRawStream) => StreamType;

/** From PDF spec table 165 */
declare enum AnnotationFlags {
    /**
     * If set, do not display the annotation if it does not belong to one of the
     * standard annotation types and no annotation handler is available. If clear,
     * display such an unknown annotation using an appearance stream specified by
     * its appearance dictionary, if any.
     */
    Invisible,
    /**
     * If set, do not display or print the annotation or allow it to interact with
     * the user, regardless of its annotation type or whether an annotation
     * handler is available.
     *
     * In cases where screen space is limited, the ability to hide and show
     * annotations selectively can be used in combination with appearance streams
     * to display auxiliary pop-up information similar in function to online help
     * systems.
     */
    Hidden,
    /**
     * If set, print the annotation when the page is printed. If clear, never
     * print the annotation, regardless of whether it is displayed on the screen.
     *
     * This can be useful for annotations representing interactive pushbuttons,
     * which would serve no meaningful purpose on the printed page.
     */
    Print,
    /**
     * If set, do not scale the annotation’s appearance to match the magnification
     * of the page. The location of the annotation on the page (defined by the
     * upper-left corner of its annotation rectangle) shall remain fixed,
     * regardless of the page magnification.
     */
    NoZoom,
    /**
     * If set, do not rotate the annotation’s appearance to match the rotation of
     * the page. The upper-left corner of the annotation rectangle shall remain in
     * a fixed location on the page, regardless of the page rotation.
     */
    NoRotate,
    /**
     * If set, do not display the annotation on the screen or allow it to interact
     * with the user. The annotation may be printed (depending on the setting of
     * the Print flag) but should be considered hidden for purposes of on-screen
     * display and user interaction.
     */
    NoView,
    /**
     * If set, do not allow the annotation to interact with the user. The
     * annotation may be displayed or printed (depending on the settings of the
     * NoView and Print flags) but should not respond to mouse clicks or change
     * its appearance in response to mouse motions.
     *
     * This flag shall be ignored for widget annotations; its function is
     * subsumed by the ReadOnly flag of the associated form field.
     */
    ReadOnly,
    /**
     * If set, do not allow the annotation to be deleted or its properties
     * (including position and size) to be modified by the user. However, this
     * flag does not restrict changes to the annotation’s contents, such as the
     * value of a form field.
     */
    Locked,
    /**
     * If set, invert the interpretation of the NoView flag for certain events.
     *
     * A typical use is to have an annotation that appears only when a mouse
     * cursor is held over it.
     */
    ToggleNoView,
    /**
     * If set, do not allow the contents of the annotation to be modified by the
     * user. This flag does not restrict deletion of the annotation or changes to
     * other annotation properties, such as position and size.
     */
    LockedContents
}

/**
 * A PDF entity, like images or fonts, which needs to be embedded into the
 * document before saving.
 */
interface Embeddable {
    embed: () => Promise<void>;
}

/**
 * Represents a PDF page that has been embedded in a [[PDFDocument]].
 */
declare class PDFEmbeddedPage implements Embeddable {
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
    static of: (ref: PDFRef, doc: PDFDocument, embedder: PDFPageEmbedder) => PDFEmbeddedPage;
    /** The unique reference assigned to this embedded page within the document. */
    readonly ref: PDFRef;
    /** The document to which this embedded page belongs. */
    readonly doc: PDFDocument;
    /** The width of this page in pixels. */
    readonly width: number;
    /** The height of this page in pixels. */
    readonly height: number;
    private alreadyEmbedded;
    private readonly embedder;
    private constructor();
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
    scale(factor: number): {
        width: number;
        height: number;
    };
    /**
     * Get the width and height of this page. For example:
     * ```js
     * const { width, height } = embeddedPage.size()
     * ```
     * @returns The width and height of the page.
     */
    size(): {
        width: number;
        height: number;
    };
    /**
     * > **NOTE:** You probably don't need to call this method directly. The
     * > [[PDFDocument.save]] and [[PDFDocument.saveAsBase64]] methods will
     * > automatically ensure all embeddable pages get embedded.
     *
     * Embed this embeddable page in its document.
     *
     * @returns Resolves when the embedding is complete.
     */
    embed(): Promise<void>;
}

type ImageEmbedder = JpegEmbedder | PngEmbedder;
/**
 * Represents an image that has been embedded in a [[PDFDocument]].
 */
declare class PDFImage implements Embeddable {
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
    static of: (ref: PDFRef, doc: PDFDocument, embedder: ImageEmbedder) => PDFImage;
    /** The unique reference assigned to this image within the document. */
    readonly ref: PDFRef;
    /** The document to which this image belongs. */
    readonly doc: PDFDocument;
    /** The width of this image in pixels. */
    readonly width: number;
    /** The height of this image in pixels. */
    readonly height: number;
    private embedder;
    private embedTask;
    private constructor();
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
    scale(factor: number): {
        width: number;
        height: number;
    };
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
    scaleToFit(width: number, height: number): {
        width: number;
        height: number;
    };
    /**
     * Get the width and height of this image. For example:
     * ```js
     * const { width, height } = image.size()
     * ```
     * @returns The width and height of the image.
     */
    size(): {
        width: number;
        height: number;
    };
    /**
     * > **NOTE:** You probably don't need to call this method directly. The
     * > [[PDFDocument.save]] and [[PDFDocument.saveAsBase64]] methods will
     * > automatically ensure all images get embedded.
     *
     * Embed this image in its document.
     *
     * @returns Resolves when the embedding is complete.
     */
    embed(): Promise<void>;
}

declare enum ColorTypes {
    Grayscale = "Grayscale",
    RGB = "RGB",
    CMYK = "CMYK"
}
interface Grayscale {
    type: ColorTypes.Grayscale;
    gray: number;
}
interface RGB {
    type: ColorTypes.RGB;
    red: number;
    green: number;
    blue: number;
}
interface CMYK {
    type: ColorTypes.CMYK;
    cyan: number;
    magenta: number;
    yellow: number;
    key: number;
}
type Color = Grayscale | RGB | CMYK;
declare const grayscale: (gray: number) => Grayscale;
declare const rgb: (red: number, green: number, blue: number) => RGB;
declare const cmyk: (cyan: number, magenta: number, yellow: number, key: number) => CMYK;
declare const setFillingColor: (color: Color) => PDFOperator;
declare const setStrokingColor: (color: Color) => PDFOperator;
declare const componentsToColor: (comps?: number[], scale?: number) => Grayscale | RGB | CMYK | undefined;
declare const colorToComponents: (color: Color) => number[];

declare enum RotationTypes {
    Degrees = "degrees",
    Radians = "radians"
}
interface Radians {
    type: RotationTypes.Radians;
    angle: number;
}
interface Degrees {
    type: RotationTypes.Degrees;
    angle: number;
}
type Rotation = Radians | Degrees;
declare const radians: (radianAngle: number) => Radians;
declare const degrees: (degreeAngle: number) => Degrees;
declare const degreesToRadians: (degree: number) => number;
declare const radiansToDegrees: (radian: number) => number;
declare const toRadians: (rotation: Rotation) => number;
declare const toDegrees: (rotation: Rotation) => number;
declare const reduceRotation: (degreeAngle?: number) => 0 | 180 | 90 | 270;
declare const adjustDimsForRotation: (dims: {
    width: number;
    height: number;
}, degreeAngle?: number) => {
    width: number;
    height: number;
};
declare const rotateRectangle: (rectangle: {
    x: number;
    y: number;
    width: number;
    height: number;
}, borderWidth?: number, degreeAngle?: number) => {
    x: number;
    y: number;
    width: number;
    height: number;
};

declare const clip: () => PDFOperator;
declare const clipEvenOdd: () => PDFOperator;
declare const concatTransformationMatrix: (a: number | PDFNumber, b: number | PDFNumber, c: number | PDFNumber, d: number | PDFNumber, e: number | PDFNumber, f: number | PDFNumber) => PDFOperator;
declare const translate: (xPos: number | PDFNumber, yPos: number | PDFNumber) => PDFOperator;
declare const scale: (xPos: number | PDFNumber, yPos: number | PDFNumber) => PDFOperator;
declare const rotateRadians: (angle: number | PDFNumber) => PDFOperator;
declare const rotateDegrees: (angle: number | PDFNumber) => PDFOperator;
declare const skewRadians: (xSkewAngle: number | PDFNumber, ySkewAngle: number | PDFNumber) => PDFOperator;
declare const skewDegrees: (xSkewAngle: number | PDFNumber, ySkewAngle: number | PDFNumber) => PDFOperator;
declare const setDashPattern: (dashArray: (number | PDFNumber)[], dashPhase: number | PDFNumber) => PDFOperator;
declare const restoreDashPattern: () => PDFOperator;
declare enum LineCapStyle {
    Butt = 0,
    Round = 1,
    Projecting = 2
}
declare const setLineCap: (style: LineCapStyle) => PDFOperator;
declare enum LineJoinStyle {
    Miter = 0,
    Round = 1,
    Bevel = 2
}
declare const setLineJoin: (style: LineJoinStyle) => PDFOperator;
declare const setGraphicsState: (state: string | PDFName) => PDFOperator;
declare const pushGraphicsState: () => PDFOperator;
declare const popGraphicsState: () => PDFOperator;
declare const setLineWidth: (width: number | PDFNumber) => PDFOperator;
declare const appendBezierCurve: (x1: number | PDFNumber, y1: number | PDFNumber, x2: number | PDFNumber, y2: number | PDFNumber, x3: number | PDFNumber, y3: number | PDFNumber) => PDFOperator;
declare const appendQuadraticCurve: (x1: number | PDFNumber, y1: number | PDFNumber, x2: number | PDFNumber, y2: number | PDFNumber) => PDFOperator;
declare const closePath: () => PDFOperator;
declare const moveTo: (xPos: number | PDFNumber, yPos: number | PDFNumber) => PDFOperator;
declare const lineTo: (xPos: number | PDFNumber, yPos: number | PDFNumber) => PDFOperator;
/**
 * @param xPos x coordinate for the lower left corner of the rectangle
 * @param yPos y coordinate for the lower left corner of the rectangle
 * @param width width of the rectangle
 * @param height height of the rectangle
 */
declare const rectangle: (xPos: number | PDFNumber, yPos: number | PDFNumber, width: number | PDFNumber, height: number | PDFNumber) => PDFOperator;
/**
 * @param xPos x coordinate for the lower left corner of the square
 * @param yPos y coordinate for the lower left corner of the square
 * @param size width and height of the square
 */
declare const square: (xPos: number, yPos: number, size: number) => PDFOperator;
declare const stroke: () => PDFOperator;
declare const fill: () => PDFOperator;
declare const fillAndStroke: () => PDFOperator;
declare const endPath: () => PDFOperator;
declare const nextLine: () => PDFOperator;
declare const moveText: (x: number | PDFNumber, y: number | PDFNumber) => PDFOperator;
declare const showText: (text: PDFHexString) => PDFOperator;
declare const beginText: () => PDFOperator;
declare const endText: () => PDFOperator;
declare const setFontAndSize: (name: string | PDFName, size: number | PDFNumber) => PDFOperator;
declare const setCharacterSpacing: (spacing: number | PDFNumber) => PDFOperator;
declare const setWordSpacing: (spacing: number | PDFNumber) => PDFOperator;
/** @param squeeze horizontal character spacing */
declare const setCharacterSqueeze: (squeeze: number | PDFNumber) => PDFOperator;
declare const setLineHeight: (lineHeight: number | PDFNumber) => PDFOperator;
declare const setTextRise: (rise: number | PDFNumber) => PDFOperator;
declare enum TextRenderingMode {
    Fill = 0,
    Outline = 1,
    FillAndOutline = 2,
    Invisible = 3,
    FillAndClip = 4,
    OutlineAndClip = 5,
    FillAndOutlineAndClip = 6,
    Clip = 7
}
declare const setTextRenderingMode: (mode: TextRenderingMode) => PDFOperator;
declare const setTextMatrix: (a: number | PDFNumber, b: number | PDFNumber, c: number | PDFNumber, d: number | PDFNumber, e: number | PDFNumber, f: number | PDFNumber) => PDFOperator;
declare const rotateAndSkewTextRadiansAndTranslate: (rotationAngle: number | PDFNumber, xSkewAngle: number | PDFNumber, ySkewAngle: number | PDFNumber, x: number | PDFNumber, y: number | PDFNumber) => PDFOperator;
declare const rotateAndSkewTextDegreesAndTranslate: (rotationAngle: number | PDFNumber, xSkewAngle: number | PDFNumber, ySkewAngle: number | PDFNumber, x: number | PDFNumber, y: number | PDFNumber) => PDFOperator;
declare const drawObject: (name: string | PDFName) => PDFOperator;
declare const setFillingGrayscaleColor: (gray: number | PDFNumber) => PDFOperator;
declare const setStrokingGrayscaleColor: (gray: number | PDFNumber) => PDFOperator;
declare const setFillingRgbColor: (red: number | PDFNumber, green: number | PDFNumber, blue: number | PDFNumber) => PDFOperator;
declare const setStrokingRgbColor: (red: number | PDFNumber, green: number | PDFNumber, blue: number | PDFNumber) => PDFOperator;
declare const setFillingCmykColor: (cyan: number | PDFNumber, magenta: number | PDFNumber, yellow: number | PDFNumber, key: number | PDFNumber) => PDFOperator;
declare const setStrokingCmykColor: (cyan: number | PDFNumber, magenta: number | PDFNumber, yellow: number | PDFNumber, key: number | PDFNumber) => PDFOperator;
declare const beginMarkedContent: (tag: string | PDFName) => PDFOperator;
declare const endMarkedContent: () => PDFOperator;

declare enum BlendMode {
    Normal = "Normal",
    Multiply = "Multiply",
    Screen = "Screen",
    Overlay = "Overlay",
    Darken = "Darken",
    Lighten = "Lighten",
    ColorDodge = "ColorDodge",
    ColorBurn = "ColorBurn",
    HardLight = "HardLight",
    SoftLight = "SoftLight",
    Difference = "Difference",
    Exclusion = "Exclusion"
}
interface PDFPageDrawTextOptions {
    color?: Color;
    opacity?: number;
    blendMode?: BlendMode;
    font?: PDFFont;
    size?: number;
    rotate?: Rotation;
    xSkew?: Rotation;
    ySkew?: Rotation;
    x?: number;
    y?: number;
    lineHeight?: number;
    maxWidth?: number;
    wordBreaks?: string[];
}
interface PDFPageDrawImageOptions {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    rotate?: Rotation;
    xSkew?: Rotation;
    ySkew?: Rotation;
    opacity?: number;
    blendMode?: BlendMode;
}
interface PDFPageDrawPageOptions {
    x?: number;
    y?: number;
    xScale?: number;
    yScale?: number;
    width?: number;
    height?: number;
    rotate?: Rotation;
    xSkew?: Rotation;
    ySkew?: Rotation;
    opacity?: number;
    blendMode?: BlendMode;
}
interface PDFPageDrawSVGOptions {
    x?: number;
    y?: number;
    scale?: number;
    rotate?: Rotation;
    borderWidth?: number;
    color?: Color;
    opacity?: number;
    borderColor?: Color;
    borderOpacity?: number;
    borderDashArray?: number[];
    borderDashPhase?: number;
    borderLineCap?: LineCapStyle;
    blendMode?: BlendMode;
}
interface PDFPageDrawLineOptions {
    start: {
        x: number;
        y: number;
    };
    end: {
        x: number;
        y: number;
    };
    thickness?: number;
    color?: Color;
    opacity?: number;
    lineCap?: LineCapStyle;
    dashArray?: number[];
    dashPhase?: number;
    blendMode?: BlendMode;
}
interface PDFPageDrawRectangleOptions {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    rotate?: Rotation;
    xSkew?: Rotation;
    ySkew?: Rotation;
    borderWidth?: number;
    color?: Color;
    opacity?: number;
    borderColor?: Color;
    borderOpacity?: number;
    borderDashArray?: number[];
    borderDashPhase?: number;
    borderLineCap?: LineCapStyle;
    blendMode?: BlendMode;
}
interface PDFPageDrawSquareOptions {
    x?: number;
    y?: number;
    size?: number;
    rotate?: Rotation;
    xSkew?: Rotation;
    ySkew?: Rotation;
    borderWidth?: number;
    color?: Color;
    opacity?: number;
    borderColor?: Color;
    borderOpacity?: number;
    borderDashArray?: number[];
    borderDashPhase?: number;
    borderLineCap?: LineCapStyle;
    blendMode?: BlendMode;
}
interface PDFPageDrawEllipseOptions {
    x?: number;
    y?: number;
    xScale?: number;
    yScale?: number;
    rotate?: Rotation;
    color?: Color;
    opacity?: number;
    borderColor?: Color;
    borderOpacity?: number;
    borderWidth?: number;
    borderDashArray?: number[];
    borderDashPhase?: number;
    borderLineCap?: LineCapStyle;
    blendMode?: BlendMode;
}
interface PDFPageDrawCircleOptions {
    x?: number;
    y?: number;
    size?: number;
    color?: Color;
    opacity?: number;
    borderColor?: Color;
    borderOpacity?: number;
    borderWidth?: number;
    borderDashArray?: number[];
    borderDashPhase?: number;
    borderLineCap?: LineCapStyle;
    blendMode?: BlendMode;
}

/**
 * Represents a single page of a [[PDFDocument]].
 */
declare class PDFPage {
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
    static of: (leafNode: PDFPageLeaf, ref: PDFRef, doc: PDFDocument) => PDFPage;
    /**
     * > **NOTE:** You probably don't want to call this method directly. Instead,
     * > consider using the [[PDFDocument.addPage]] and [[PDFDocument.insertPage]]
     * > methods, which can create instances of [[PDFPage]] for you.
     *
     * Create an instance of [[PDFPage]].
     *
     * @param doc The document to which the page will belong.
     */
    static create: (doc: PDFDocument) => PDFPage;
    /** The low-level PDFDictionary wrapped by this page. */
    readonly node: PDFPageLeaf;
    /** The unique reference assigned to this page within the document. */
    readonly ref: PDFRef;
    /** The document to which this page belongs. */
    readonly doc: PDFDocument;
    private fontKey?;
    private font?;
    private fontSize;
    private fontColor;
    private lineHeight;
    private x;
    private y;
    private contentStream?;
    private contentStreamRef?;
    private constructor();
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
    setRotation(angle: Rotation): void;
    /**
     * Get this page's rotation angle in degrees. For example:
     * ```js
     * const rotationAngle = page.getRotation().angle;
     * ```
     * @returns The rotation angle of the page in degrees (always a multiple of
     *          90 degrees).
     */
    getRotation(): Rotation;
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
    setSize(width: number, height: number): void;
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
    setWidth(width: number): void;
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
    setHeight(height: number): void;
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
    setMediaBox(x: number, y: number, width: number, height: number): void;
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
    setCropBox(x: number, y: number, width: number, height: number): void;
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
    setBleedBox(x: number, y: number, width: number, height: number): void;
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
    setTrimBox(x: number, y: number, width: number, height: number): void;
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
    setArtBox(x: number, y: number, width: number, height: number): void;
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
    getSize(): {
        width: number;
        height: number;
    };
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
    getWidth(): number;
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
    getHeight(): number;
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
    getMediaBox(): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
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
    getCropBox(): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
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
    getBleedBox(): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
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
    getTrimBox(): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
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
    getArtBox(): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
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
    translateContent(x: number, y: number): void;
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
    scale(x: number, y: number): void;
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
    scaleContent(x: number, y: number): void;
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
    scaleAnnotations(x: number, y: number): void;
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
    resetPosition(): void;
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
    setFont(font: PDFFont): void;
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
    setFontSize(fontSize: number): void;
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
    setFontColor(fontColor: Color): void;
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
    setLineHeight(lineHeight: number): void;
    /**
     * Get the default position of this page. For example:
     * ```js
     * const { x, y } = page.getPosition()
     * ```
     * @returns The default position of the page.
     */
    getPosition(): {
        x: number;
        y: number;
    };
    /**
     * Get the default x coordinate of this page. For example:
     * ```js
     * const x = page.getX()
     * ```
     * @returns The default x coordinate of the page.
     */
    getX(): number;
    /**
     * Get the default y coordinate of this page. For example:
     * ```js
     * const y = page.getY()
     * ```
     * @returns The default y coordinate of the page.
     */
    getY(): number;
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
    moveTo(x: number, y: number): void;
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
    moveDown(yDecrease: number): void;
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
    moveUp(yIncrease: number): void;
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
    moveLeft(xDecrease: number): void;
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
    moveRight(xIncrease: number): void;
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
    pushOperators(...operator: PDFOperator[]): void;
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
    drawText(text: string, options?: PDFPageDrawTextOptions): void;
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
    drawImage(image: PDFImage, options?: PDFPageDrawImageOptions): void;
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
    drawPage(embeddedPage: PDFEmbeddedPage, options?: PDFPageDrawPageOptions): void;
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
    drawSvgPath(path: string, options?: PDFPageDrawSVGOptions): void;
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
    drawLine(options: PDFPageDrawLineOptions): void;
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
    drawRectangle(options?: PDFPageDrawRectangleOptions): void;
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
    drawSquare(options?: PDFPageDrawSquareOptions): void;
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
    drawEllipse(options?: PDFPageDrawEllipseOptions): void;
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
    drawCircle(options?: PDFPageDrawCircleOptions): void;
    private setOrEmbedFont;
    private getFont;
    private resetFont;
    private getContentStream;
    private createContentStream;
    private maybeEmbedGraphicsState;
    private scaleAnnot;
}

declare enum ImageAlignment {
    Left = 0,
    Center = 1,
    Right = 2
}

interface FieldAppearanceOptions {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    textColor?: Color;
    backgroundColor?: Color;
    borderColor?: Color;
    borderWidth?: number;
    rotate?: Rotation;
    font?: PDFFont;
    hidden?: boolean;
}
/**
 * Represents a field of a [[PDFForm]].
 *
 * This class is effectively abstract. All fields in a [[PDFForm]] will
 * actually be an instance of a subclass of this class.
 *
 * Note that each field in a PDF is represented by a single field object.
 * However, a given field object may be rendered at multiple locations within
 * the document (across one or more pages). The rendering of a field is
 * controlled by its widgets. Each widget causes its field to be displayed at a
 * particular location in the document.
 *
 * Most of the time each field in a PDF has only a single widget, and thus is
 * only rendered once. However, if a field is rendered multiple times, it will
 * have multiple widgets - one for each location it is rendered.
 *
 * This abstraction of field objects and widgets is defined in the PDF
 * specification and dictates how PDF files store fields and where they are
 * to be rendered.
 */
declare class PDFField {
    /** The low-level PDFAcroTerminal wrapped by this field. */
    readonly acroField: PDFAcroTerminal;
    /** The unique reference assigned to this field within the document. */
    readonly ref: PDFRef;
    /** The document to which this field belongs. */
    readonly doc: PDFDocument;
    protected constructor(acroField: PDFAcroTerminal, ref: PDFRef, doc: PDFDocument);
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
    getName(): string;
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
    isReadOnly(): boolean;
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
    enableReadOnly(): void;
    /**
     * Allow users to interact with this field and change its value in PDF
     * readers via mouse and keyboard input. For example:
     * ```js
     * const field = form.getField('some.field')
     * field.disableReadOnly()
     * ```
     */
    disableReadOnly(): void;
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
    isRequired(): boolean;
    /**
     * Require this field to have a value when the form is submitted.
     * For example:
     * ```js
     * const field = form.getField('some.field')
     * field.enableRequired()
     * ```
     */
    enableRequired(): void;
    /**
     * Do not require this field to have a value when the form is submitted.
     * For example:
     * ```js
     * const field = form.getField('some.field')
     * field.disableRequired()
     * ```
     */
    disableRequired(): void;
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
    isExported(): boolean;
    /**
     * Indicate that this field's value should be exported when the form is
     * submitted in a PDF reader. For example:
     * ```js
     * const field = form.getField('some.field')
     * field.enableExporting()
     * ```
     */
    enableExporting(): void;
    /**
     * Indicate that this field's value should **not** be exported when the form
     * is submitted in a PDF reader. For example:
     * ```js
     * const field = form.getField('some.field')
     * field.disableExporting()
     * ```
     */
    disableExporting(): void;
    /** @ignore */
    needsAppearancesUpdate(): boolean;
    /** @ignore */
    defaultUpdateAppearances(_font: PDFFont): void;
    protected markAsDirty(): void;
    protected markAsClean(): void;
    protected isDirty(): boolean;
    protected createWidget(options: {
        x: number;
        y: number;
        width: number;
        height: number;
        textColor?: Color;
        backgroundColor?: Color;
        borderColor?: Color;
        borderWidth: number;
        rotate: Rotation;
        caption?: string;
        hidden?: boolean;
        page?: PDFRef;
    }): PDFWidgetAnnotation;
    protected updateWidgetAppearanceWithFont(widget: PDFWidgetAnnotation, font: PDFFont, { normal, rollover, down }: AppearanceMapping<PDFOperator[]>): void;
    protected updateOnOffWidgetAppearance(widget: PDFWidgetAnnotation, onValue: PDFName, { normal, rollover, down, }: AppearanceMapping<{
        on: PDFOperator[];
        off: PDFOperator[];
    }>): void;
    protected updateWidgetAppearances(widget: PDFWidgetAnnotation, { normal, rollover, down }: AppearanceMapping<PDFRef | PDFDict>): void;
    private createAppearanceStream;
    /**
     * Create a FormXObject of the supplied image and add it to context.
     * The FormXObject size is calculated based on the widget (including
     * the alignment).
     * @param widget The widget that should display the image.
     * @param alignment The alignment of the image.
     * @param image The image that should be displayed.
     * @returns The ref for the FormXObject that was added to the context.
     */
    protected createImageAppearanceStream(widget: PDFWidgetAnnotation, image: PDFImage, alignment: ImageAlignment): PDFRef;
    private createAppearanceDict;
}

/**
 * Represents a button field of a [[PDFForm]].
 *
 * [[PDFButton]] fields are interactive controls that users can click with their
 * mouse. This type of [[PDFField]] is not stateful. The purpose of a button
 * is to perform an action when the user clicks on it, such as opening a print
 * modal or resetting the form. Buttons are typically rectangular in shape and
 * have a text label describing the action that they perform when clicked.
 */
declare class PDFButton extends PDFField {
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
    static of: (acroPushButton: PDFAcroPushButton, ref: PDFRef, doc: PDFDocument) => PDFButton;
    /** The low-level PDFAcroPushButton wrapped by this button. */
    readonly acroField: PDFAcroPushButton;
    private constructor();
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
    setImage(image: PDFImage, alignment?: ImageAlignment): void;
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
    setFontSize(fontSize: number): void;
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
    addToPage(text: string, page: PDFPage, options?: FieldAppearanceOptions): void;
    /**
     * Returns `true` if this button has been marked as dirty, or if any of this
     * button's widgets do not have an appearance stream. For example:
     * ```js
     * const button = form.getButton('some.button.field')
     * if (button.needsAppearancesUpdate()) console.log('Needs update')
     * ```
     * @returns Whether or not this button needs an appearance update.
     */
    needsAppearancesUpdate(): boolean;
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
    defaultUpdateAppearances(font: PDFFont): void;
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
    updateAppearances(font: PDFFont, provider?: AppearanceProviderFor<PDFButton>): void;
    private updateWidgetAppearance;
}

/**
 * Represents a check box field of a [[PDFForm]].
 *
 * [[PDFCheckBox]] fields are interactive boxes that users can click with their
 * mouse. This type of [[PDFField]] has two states: `on` and `off`. The purpose
 * of a check box is to enable users to select from one or more options, where
 * each option is represented by a single check box. Check boxes are typically
 * square in shape and display a check mark when they are in the `on` state.
 */
declare class PDFCheckBox extends PDFField {
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
    static of: (acroCheckBox: PDFAcroCheckBox, ref: PDFRef, doc: PDFDocument) => PDFCheckBox;
    /** The low-level PDFAcroCheckBox wrapped by this check box. */
    readonly acroField: PDFAcroCheckBox;
    private constructor();
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
    check(): void;
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
    uncheck(): void;
    /**
     * Returns `true` if this check box is selected (either by a human user via
     * a PDF reader, or else programmatically via software). For example:
     * ```js
     * const checkBox = form.getCheckBox('some.checkBox.field')
     * if (checkBox.isChecked()) console.log('check box is selected')
     * ```
     * @returns Whether or not this check box is selected.
     */
    isChecked(): boolean;
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
    addToPage(page: PDFPage, options?: FieldAppearanceOptions): void;
    /**
     * Returns `true` if any of this check box's widgets do not have an
     * appearance stream for its current state. For example:
     * ```js
     * const checkBox = form.getCheckBox('some.checkBox.field')
     * if (checkBox.needsAppearancesUpdate()) console.log('Needs update')
     * ```
     * @returns Whether or not this check box needs an appearance update.
     */
    needsAppearancesUpdate(): boolean;
    /**
     * Update the appearance streams for each of this check box's widgets using
     * the default appearance provider for check boxes. For example:
     * ```js
     * const checkBox = form.getCheckBox('some.checkBox.field')
     * checkBox.defaultUpdateAppearances()
     * ```
     */
    defaultUpdateAppearances(): void;
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
    updateAppearances(provider?: AppearanceProviderFor<PDFCheckBox>): void;
    private updateWidgetAppearance;
}

/**
 * Represents a dropdown field of a [[PDFForm]].
 *
 * [[PDFDropdown]] fields are interactive text boxes that display a single
 * element (the currently selected value). The purpose of a dropdown is to
 * enable users to select a single option from a set of possible options. Users
 * can click on a dropdown to view the full list of options it provides.
 * Clicking on an option in the list will cause it to be selected and displayed
 * in the dropdown's text box. Some dropdowns allow users to enter text
 * directly into the box from their keyboard, rather than only being allowed to
 * choose an option from the list (see [[PDFDropdown.isEditable]]).
 */
declare class PDFDropdown extends PDFField {
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
    static of: (acroComboBox: PDFAcroComboBox, ref: PDFRef, doc: PDFDocument) => PDFDropdown;
    /** The low-level PDFAcroComboBox wrapped by this dropdown. */
    readonly acroField: PDFAcroComboBox;
    private constructor();
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
    getOptions(): string[];
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
    getSelected(): string[];
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
    setOptions(options: string[]): void;
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
    addOptions(options: string | string[]): void;
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
    select(options: string | string[], merge?: boolean): void;
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
    clear(): void;
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
    setFontSize(fontSize: number): void;
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
    isEditable(): boolean;
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
    enableEditing(): void;
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
    disableEditing(): void;
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
    isSorted(): boolean;
    /**
     * Always display the option list of this dropdown in alphabetical order,
     * irrespective of the order in which the options were added to this dropdown.
     * For example:
     * ```js
     * const dropdown = form.getDropdown('some.dropdown.field')
     * dropdown.enableSorting()
     * ```
     */
    enableSorting(): void;
    /**
     * Do not always display the option list of this dropdown in alphabetical
     * order. Instead, display the options in whichever order they were added
     * to the list. For example:
     * ```js
     * const dropdown = form.getDropdown('some.dropdown.field')
     * dropdown.disableSorting()
     * ```
     */
    disableSorting(): void;
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
    isMultiselect(): boolean;
    /**
     * Allow users to select more than one option from this dropdown's option
     * list. For example:
     * ```js
     * const dropdown = form.getDropdown('some.dropdown.field')
     * dropdown.enableMultiselect()
     * ```
     */
    enableMultiselect(): void;
    /**
     * Do not allow users to select more than one option from this dropdown's
     * option list. For example:
     * ```js
     * const dropdown = form.getDropdown('some.dropdown.field')
     * dropdown.disableMultiselect()
     * ```
     */
    disableMultiselect(): void;
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
    isSpellChecked(): boolean;
    /**
     * Allow PDF readers to spell check the selected option of this dropdown.
     * For example:
     * ```js
     * const dropdown = form.getDropdown('some.dropdown.field')
     * dropdown.enableSpellChecking()
     * ```
     */
    enableSpellChecking(): void;
    /**
     * Do not allow PDF readers to spell check the selected option of this
     * dropdown. For example:
     * ```js
     * const dropdown = form.getDropdown('some.dropdown.field')
     * dropdown.disableSpellChecking()
     * ```
     */
    disableSpellChecking(): void;
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
    isSelectOnClick(): boolean;
    /**
     * Store the option selected by a user immediately after the user clicks the
     * option. Do not wait for the user to leave this dropdown field (by clicking
     * outside of it - on another field, for example). For example:
     * ```js
     * const dropdown = form.getDropdown('some.dropdown.field')
     * dropdown.enableSelectOnClick()
     * ```
     */
    enableSelectOnClick(): void;
    /**
     * Wait to store the option selected by a user until they leave this dropdown
     * field (by clicking outside of it - on another field, for example).
     * For example:
     * ```js
     * const dropdown = form.getDropdown('some.dropdown.field')
     * dropdown.disableSelectOnClick()
     * ```
     */
    disableSelectOnClick(): void;
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
    addToPage(page: PDFPage, options?: FieldAppearanceOptions): void;
    /**
     * Returns `true` if this dropdown has been marked as dirty, or if any of
     * this dropdown's widgets do not have an appearance stream. For example:
     * ```js
     * const dropdown = form.getDropdown('some.dropdown.field')
     * if (dropdown.needsAppearancesUpdate()) console.log('Needs update')
     * ```
     * @returns Whether or not this dropdown needs an appearance update.
     */
    needsAppearancesUpdate(): boolean;
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
    defaultUpdateAppearances(font: PDFFont): void;
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
    updateAppearances(font: PDFFont, provider?: AppearanceProviderFor<PDFDropdown>): void;
    private updateWidgetAppearance;
}

/**
 * Represents an option list field of a [[PDFForm]].
 *
 * [[PDFOptionList]] fields are interactive lists of options. The purpose of an
 * option list is to enable users to select one or more options from a set of
 * possible options. Users are able to see the full set of options without
 * first having to click on the field (though scrolling may be necessary).
 * Clicking an option in the list will cause it to be selected and displayed
 * with a highlighted background. Some option lists allow users to select
 * more than one option (see [[PDFOptionList.isMultiselect]]).
 */
declare class PDFOptionList extends PDFField {
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
    static of: (acroListBox: PDFAcroListBox, ref: PDFRef, doc: PDFDocument) => PDFOptionList;
    /** The low-level PDFAcroListBox wrapped by this option list. */
    readonly acroField: PDFAcroListBox;
    private constructor();
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
    getOptions(): string[];
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
    getSelected(): string[];
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
    setOptions(options: string[]): void;
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
    addOptions(options: string | string[]): void;
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
    select(options: string | string[], merge?: boolean): void;
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
    clear(): void;
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
    setFontSize(fontSize: number): void;
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
    isSorted(): boolean;
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
    enableSorting(): void;
    /**
     * Do not always display the options of this option list in alphabetical
     * order. Instead, display the options in whichever order they were added
     * to this option list. For example:
     * ```js
     * const optionList = form.getOptionList('some.optionList.field')
     * optionList.disableSorting()
     * ```
     */
    disableSorting(): void;
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
    isMultiselect(): boolean;
    /**
     * Allow users to select more than one option from this option list.
     * For example:
     * ```js
     * const optionList = form.getOptionList('some.optionList.field')
     * optionList.enableMultiselect()
     * ```
     */
    enableMultiselect(): void;
    /**
     * Do not allow users to select more than one option from this option list.
     * For example:
     * ```js
     * const optionList = form.getOptionList('some.optionList.field')
     * optionList.disableMultiselect()
     * ```
     */
    disableMultiselect(): void;
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
    isSelectOnClick(): boolean;
    /**
     * Store the option selected by a user immediately after the user clicks the
     * option. Do not wait for the user to leave this option list field (by
     * clicking outside of it - on another field, for example). For example:
     * ```js
     * const optionList = form.getOptionList('some.optionList.field')
     * optionList.enableSelectOnClick()
     * ```
     */
    enableSelectOnClick(): void;
    /**
     * Wait to store the option selected by a user until they leave this option
     * list field (by clicking outside of it - on another field, for example).
     * For example:
     * ```js
     * const optionList = form.getOptionList('some.optionList.field')
     * optionList.disableSelectOnClick()
     * ```
     */
    disableSelectOnClick(): void;
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
    addToPage(page: PDFPage, options?: FieldAppearanceOptions): void;
    /**
     * Returns `true` if this option list has been marked as dirty, or if any of
     * this option list's widgets do not have an appearance stream. For example:
     * ```js
     * const optionList = form.getOptionList('some.optionList.field')
     * if (optionList.needsAppearancesUpdate()) console.log('Needs update')
     * ```
     * @returns Whether or not this option list needs an appearance update.
     */
    needsAppearancesUpdate(): boolean;
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
    defaultUpdateAppearances(font: PDFFont): void;
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
    updateAppearances(font: PDFFont, provider?: AppearanceProviderFor<PDFOptionList>): void;
    private updateWidgetAppearance;
}

/**
 * Represents a radio group field of a [[PDFForm]].
 *
 * [[PDFRadioGroup]] fields are collections of radio buttons. The purpose of a
 * radio group is to enable users to select one option from a set of mutually
 * exclusive choices. Each choice in a radio group is represented by a radio
 * button. Radio buttons each have two states: `on` and `off`. At most one
 * radio button in a group may be in the `on` state at any time. Users can
 * click on a radio button to select it (and thereby automatically deselect any
 * other radio button that might have already been selected). Some radio
 * groups allow users to toggle a selected radio button `off` by clicking on
 * it (see [[PDFRadioGroup.isOffToggleable]]).
 *
 * Note that some radio groups allow multiple radio buttons to be in the `on`
 * state at the same type **if** they represent the same underlying value (see
 * [[PDFRadioGroup.isMutuallyExclusive]]).
 */
declare class PDFRadioGroup extends PDFField {
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
    static of: (acroRadioButton: PDFAcroRadioButton, ref: PDFRef, doc: PDFDocument) => PDFRadioGroup;
    /** The low-level PDFAcroRadioButton wrapped by this radio group. */
    readonly acroField: PDFAcroRadioButton;
    private constructor();
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
    getOptions(): string[];
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
    getSelected(): string | undefined;
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
    select(option: string): void;
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
    clear(): void;
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
    isOffToggleable(): boolean;
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
    enableOffToggling(): void;
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
    disableOffToggling(): void;
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
    isMutuallyExclusive(): boolean;
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
    enableMutualExclusion(): void;
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
    disableMutualExclusion(): void;
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
    addOptionToPage(option: string, page: PDFPage, options?: FieldAppearanceOptions): void;
    /**
     * Returns `true` if any of this group's radio button widgets do not have an
     * appearance stream for their current state. For example:
     * ```js
     * const radioGroup = form.getRadioGroup('some.radioGroup.field')
     * if (radioGroup.needsAppearancesUpdate()) console.log('Needs update')
     * ```
     * @returns Whether or not this radio group needs an appearance update.
     */
    needsAppearancesUpdate(): boolean;
    /**
     * Update the appearance streams for each of this group's radio button widgets
     * using the default appearance provider for radio groups. For example:
     * ```js
     * const radioGroup = form.getRadioGroup('some.radioGroup.field')
     * radioGroup.defaultUpdateAppearances()
     * ```
     */
    defaultUpdateAppearances(): void;
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
    updateAppearances(provider?: AppearanceProviderFor<PDFRadioGroup>): void;
    private updateWidgetAppearance;
}

/**
 * Represents a signature field of a [[PDFForm]].
 *
 * [[PDFSignature]] fields are digital signatures. `pdf-lib` does not
 * currently provide any specialized APIs for creating digital signatures or
 * reading the contents of existing digital signatures.
 */
declare class PDFSignature extends PDFField {
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
    static of: (acroSignature: PDFAcroSignature, ref: PDFRef, doc: PDFDocument) => PDFSignature;
    /** The low-level PDFAcroSignature wrapped by this signature. */
    readonly acroField: PDFAcroSignature;
    private constructor();
    needsAppearancesUpdate(): boolean;
}

declare enum TextAlignment {
    Left = 0,
    Center = 1,
    Right = 2
}

/**
 * Represents a text field of a [[PDFForm]].
 *
 * [[PDFTextField]] fields are boxes that display text entered by the user. The
 * purpose of a text field is to enable users to enter text or view text values
 * in the document prefilled by software. Users can click on a text field and
 * input text via their keyboard. Some text fields allow multiple lines of text
 * to be entered (see [[PDFTextField.isMultiline]]).
 */
declare class PDFTextField extends PDFField {
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
    static of: (acroText: PDFAcroText, ref: PDFRef, doc: PDFDocument) => PDFTextField;
    /** The low-level PDFAcroText wrapped by this text field. */
    readonly acroField: PDFAcroText;
    private constructor();
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
    getText(): string | undefined;
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
    setText(text: string | undefined): void;
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
    getAlignment(): TextAlignment;
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
    setAlignment(alignment: TextAlignment): void;
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
    getMaxLength(): number | undefined;
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
    setMaxLength(maxLength?: number): void;
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
    removeMaxLength(): void;
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
    setImage(image: PDFImage): void;
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
    setFontSize(fontSize: number): void;
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
    isMultiline(): boolean;
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
    enableMultiline(): void;
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
    disableMultiline(): void;
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
    isPassword(): boolean;
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
    enablePassword(): void;
    /**
     * Indicate that this text field is **not** intended for storing a secure
     * password. For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     * textField.disablePassword()
     * ```
     */
    disablePassword(): void;
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
    isFileSelector(): boolean;
    /**
     * Indicate that this text field is intended to store a file path. The
     * contents of the file stored at that path should be submitted as the value
     * of the field. For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     * textField.enableFileSelection()
     * ```
     */
    enableFileSelection(): void;
    /**
     * Indicate that this text field is **not** intended to store a file path.
     * For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     * textField.disableFileSelection()
     * ```
     */
    disableFileSelection(): void;
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
    isSpellChecked(): boolean;
    /**
     * Allow PDF readers to spell check the text entered in this field.
     * For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     * textField.enableSpellChecking()
     * ```
     */
    enableSpellChecking(): void;
    /**
     * Do not allow PDF readers to spell check the text entered in this field.
     * For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     * textField.disableSpellChecking()
     * ```
     */
    disableSpellChecking(): void;
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
    isScrollable(): boolean;
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
    enableScrolling(): void;
    /**
     * Do not allow PDF readers to present a scroll bar to the user when the
     * contents of this text field do not fit within its view bounds. For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     * textField.disableScrolling()
     * ```
     */
    disableScrolling(): void;
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
    isCombed(): boolean;
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
    enableCombing(): void;
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
    disableCombing(): void;
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
    isRichFormatted(): boolean;
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
    enableRichFormatting(): void;
    /**
     * Indicate that this is a standard text field that does not XFA data (rich
     * text). For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     * textField.disableRichFormatting()
     * ```
     */
    disableRichFormatting(): void;
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
    addToPage(page: PDFPage, options?: FieldAppearanceOptions): void;
    /**
     * Returns `true` if this text field has been marked as dirty, or if any of
     * this text field's widgets do not have an appearance stream. For example:
     * ```js
     * const textField = form.getTextField('some.text.field')
     * if (textField.needsAppearancesUpdate()) console.log('Needs update')
     * ```
     * @returns Whether or not this text field needs an appearance update.
     */
    needsAppearancesUpdate(): boolean;
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
    defaultUpdateAppearances(font: PDFFont): void;
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
    updateAppearances(font: PDFFont, provider?: AppearanceProviderFor<PDFTextField>): void;
    private updateWidgetAppearance;
}

interface FlattenOptions {
    updateFieldAppearances: boolean;
}
/**
 * Represents the interactive form of a [[PDFDocument]].
 *
 * Interactive forms (sometimes called _AcroForms_) are collections of fields
 * designed to gather information from a user. A PDF document may contains any
 * number of fields that appear on various pages, all of which make up a single,
 * global interactive form spanning the entire document. This means that
 * instances of [[PDFDocument]] shall contain at most one [[PDFForm]].
 *
 * The fields of an interactive form are represented by [[PDFField]] instances.
 */
declare class PDFForm {
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
    static of: (acroForm: PDFAcroForm, doc: PDFDocument) => PDFForm;
    /** The low-level PDFAcroForm wrapped by this form. */
    readonly acroForm: PDFAcroForm;
    /** The document to which this form belongs. */
    readonly doc: PDFDocument;
    private readonly dirtyFields;
    private readonly defaultFontCache;
    private constructor();
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
    hasXFA(): boolean;
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
    deleteXFA(): void;
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
    getFields(): PDFField[];
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
    getFieldMaybe(name: string): PDFField | undefined;
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
    getField(name: string): PDFField;
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
    getButton(name: string): PDFButton;
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
    getCheckBox(name: string): PDFCheckBox;
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
    getDropdown(name: string): PDFDropdown;
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
    getOptionList(name: string): PDFOptionList;
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
    getRadioGroup(name: string): PDFRadioGroup;
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
    getSignature(name: string): PDFSignature;
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
    getTextField(name: string): PDFTextField;
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
    createButton(name: string): PDFButton;
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
    createCheckBox(name: string): PDFCheckBox;
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
    createDropdown(name: string): PDFDropdown;
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
    createOptionList(name: string): PDFOptionList;
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
    createRadioGroup(name: string): PDFRadioGroup;
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
    createTextField(name: string): PDFTextField;
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
    flatten(options?: FlattenOptions): void;
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
    removeField(field: PDFField): void;
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
    updateFieldAppearances(font?: PDFFont): void;
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
    markFieldAsDirty(fieldRef: PDFRef): void;
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
    markFieldAsClean(fieldRef: PDFRef): void;
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
    fieldIsDirty(fieldRef: PDFRef): boolean;
    getDefaultFont(): PDFFont;
    private findWidgetPage;
    private findWidgetAppearanceRef;
    private findOrCreateNonTerminals;
    private findNonTerminal;
    private embedDefaultFont;
}

declare enum StandardFonts {
    Courier = "Courier",
    CourierBold = "Courier-Bold",
    CourierOblique = "Courier-Oblique",
    CourierBoldOblique = "Courier-BoldOblique",
    Helvetica = "Helvetica",
    HelveticaBold = "Helvetica-Bold",
    HelveticaOblique = "Helvetica-Oblique",
    HelveticaBoldOblique = "Helvetica-BoldOblique",
    TimesRoman = "Times-Roman",
    TimesRomanBold = "Times-Bold",
    TimesRomanItalic = "Times-Italic",
    TimesRomanBoldItalic = "Times-BoldItalic",
    Symbol = "Symbol",
    ZapfDingbats = "ZapfDingbats"
}

declare enum ParseSpeeds {
    Fastest = Infinity,
    Fast = 1500,
    Medium = 500,
    Slow = 100
}
interface AttachmentOptions extends EmbeddedFileOptions {
}
interface SaveOptions {
    useObjectStreams?: boolean;
    addDefaultPage?: boolean;
    objectsPerTick?: number;
    updateFieldAppearances?: boolean;
}
interface Base64SaveOptions extends SaveOptions {
    dataUri?: boolean;
}
interface LoadOptions {
    ignoreEncryption?: boolean;
    parseSpeed?: ParseSpeeds | number;
    throwOnInvalidObject?: boolean;
    updateMetadata?: boolean;
    capNumbers?: boolean;
}
interface CreateOptions {
    updateMetadata?: boolean;
}
interface EmbedFontOptions {
    subset?: boolean;
    customName?: string;
    features?: TypeFeatures;
}
interface SetTitleOptions {
    showInWindowTitleBar: boolean;
}

/**
 * Represents a PDF document.
 */
declare class PDFDocument {
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
    static load(pdf: string | Uint8Array | ArrayBuffer, options?: LoadOptions): Promise<PDFDocument>;
    /**
     * Create a new [[PDFDocument]].
     * @returns Resolves with the newly created document.
     */
    static create(options?: CreateOptions): Promise<PDFDocument>;
    /** The low-level context of this document. */
    readonly context: PDFContext;
    /** The catalog of this document. */
    readonly catalog: PDFCatalog;
    /** Whether or not this document is encrypted. */
    readonly isEncrypted: boolean;
    /** The default word breaks used in PDFPage.drawText */
    defaultWordBreaks: string[];
    private fontkit?;
    private pageCount;
    private readonly pageCache;
    private readonly pageMap;
    private readonly formCache;
    private readonly fonts;
    private readonly images;
    private readonly embeddedPages;
    private readonly embeddedFiles;
    private readonly javaScripts;
    private constructor();
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
    registerFontkit(fontkit: Fontkit): void;
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
    getForm(): PDFForm;
    /**
     * Get this document's title metadata. The title appears in the
     * "Document Properties" section of most PDF readers. For example:
     * ```js
     * const title = pdfDoc.getTitle()
     * ```
     * @returns A string containing the title of this document, if it has one.
     */
    getTitle(): string | undefined;
    /**
     * Get this document's author metadata. The author appears in the
     * "Document Properties" section of most PDF readers. For example:
     * ```js
     * const author = pdfDoc.getAuthor()
     * ```
     * @returns A string containing the author of this document, if it has one.
     */
    getAuthor(): string | undefined;
    /**
     * Get this document's subject metadata. The subject appears in the
     * "Document Properties" section of most PDF readers. For example:
     * ```js
     * const subject = pdfDoc.getSubject()
     * ```
     * @returns A string containing the subject of this document, if it has one.
     */
    getSubject(): string | undefined;
    /**
     * Get this document's keywords metadata. The keywords appear in the
     * "Document Properties" section of most PDF readers. For example:
     * ```js
     * const keywords = pdfDoc.getKeywords()
     * ```
     * @returns A string containing the keywords of this document, if it has any.
     */
    getKeywords(): string | undefined;
    /**
     * Get this document's creator metadata. The creator appears in the
     * "Document Properties" section of most PDF readers. For example:
     * ```js
     * const creator = pdfDoc.getCreator()
     * ```
     * @returns A string containing the creator of this document, if it has one.
     */
    getCreator(): string | undefined;
    /**
     * Get this document's producer metadata. The producer appears in the
     * "Document Properties" section of most PDF readers. For example:
     * ```js
     * const producer = pdfDoc.getProducer()
     * ```
     * @returns A string containing the producer of this document, if it has one.
     */
    getProducer(): string | undefined;
    /**
     * Get this document's creation date metadata. The creation date appears in
     * the "Document Properties" section of most PDF readers. For example:
     * ```js
     * const creationDate = pdfDoc.getCreationDate()
     * ```
     * @returns A Date containing the creation date of this document,
     *          if it has one.
     */
    getCreationDate(): Date | undefined;
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
    getModificationDate(): Date | undefined;
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
    setTitle(title: string, options?: SetTitleOptions): void;
    /**
     * Set this document's author metadata. The author will appear in the
     * "Document Properties" section of most PDF readers. For example:
     * ```js
     * pdfDoc.setAuthor('Humpty Dumpty')
     * ```
     * @param author The author of this document.
     */
    setAuthor(author: string): void;
    /**
     * Set this document's subject metadata. The subject will appear in the
     * "Document Properties" section of most PDF readers. For example:
     * ```js
     * pdfDoc.setSubject('📘 An Epic Tale of Woe 📖')
     * ```
     * @param subject The subject of this document.
     */
    setSubject(subject: string): void;
    /**
     * Set this document's keyword metadata. These keywords will appear in the
     * "Document Properties" section of most PDF readers. For example:
     * ```js
     * pdfDoc.setKeywords(['eggs', 'wall', 'fall', 'king', 'horses', 'men'])
     * ```
     * @param keywords An array of keywords associated with this document.
     */
    setKeywords(keywords: string[]): void;
    /**
     * Set this document's creator metadata. The creator will appear in the
     * "Document Properties" section of most PDF readers. For example:
     * ```js
     * pdfDoc.setCreator('PDF App 9000 🤖')
     * ```
     * @param creator The creator of this document.
     */
    setCreator(creator: string): void;
    /**
     * Set this document's producer metadata. The producer will appear in the
     * "Document Properties" section of most PDF readers. For example:
     * ```js
     * pdfDoc.setProducer('PDF App 9000 🤖')
     * ```
     * @param producer The producer of this document.
     */
    setProducer(producer: string): void;
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
    setLanguage(language: string): void;
    /**
     * Set this document's creation date metadata. The creation date will appear
     * in the "Document Properties" section of most PDF readers. For example:
     * ```js
     * pdfDoc.setCreationDate(new Date())
     * ```
     * @param creationDate The date this document was created.
     */
    setCreationDate(creationDate: Date): void;
    /**
     * Set this document's modification date metadata. The modification date will
     * appear in the "Document Properties" section of most PDF readers. For
     * example:
     * ```js
     * pdfDoc.setModificationDate(new Date())
     * ```
     * @param modificationDate The date this document was last modified.
     */
    setModificationDate(modificationDate: Date): void;
    /**
     * Get the number of pages contained in this document. For example:
     * ```js
     * const totalPages = pdfDoc.getPageCount()
     * ```
     * @returns The number of pages in this document.
     */
    getPageCount(): number;
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
    getPages(): PDFPage[];
    /**
     * Get the page rendered at a particular `index` of the document. For example:
     * ```js
     * pdfDoc.getPage(0)   // The first page of the document
     * pdfDoc.getPage(2)   // The third page of the document
     * pdfDoc.getPage(197) // The 198th page of the document
     * ```
     * @returns The [[PDFPage]] rendered at the given `index` of the document.
     */
    getPage(index: number): PDFPage;
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
    getPageIndices(): number[];
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
    removePage(index: number): void;
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
    addPage(page?: PDFPage | [number, number]): PDFPage;
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
    insertPage(index: number, page?: PDFPage | [number, number]): PDFPage;
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
    copyPages(srcDoc: PDFDocument, indices: number[]): Promise<PDFPage[]>;
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
    copy(): Promise<PDFDocument>;
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
    addJavaScript(name: string, script: string): void;
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
    attach(attachment: string | Uint8Array | ArrayBuffer, name: string, options?: AttachmentOptions): Promise<void>;
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
    embedFont(font: StandardFonts | string | Uint8Array | ArrayBuffer, options?: EmbedFontOptions): Promise<PDFFont>;
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
    embedStandardFont(font: StandardFonts, customName?: string): PDFFont;
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
    embedJpg(jpg: string | Uint8Array | ArrayBuffer): Promise<PDFImage>;
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
    embedPng(png: string | Uint8Array | ArrayBuffer): Promise<PDFImage>;
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
    embedPdf(pdf: string | Uint8Array | ArrayBuffer | PDFDocument, indices?: number[]): Promise<PDFEmbeddedPage[]>;
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
    embedPage(page: PDFPage, boundingBox?: PageBoundingBox, transformationMatrix?: TransformationMatrix): Promise<PDFEmbeddedPage>;
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
    embedPages(pages: PDFPage[], boundingBoxes?: (PageBoundingBox | undefined)[], transformationMatrices?: (TransformationMatrix | undefined)[]): Promise<PDFEmbeddedPage[]>;
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
    flush(): Promise<void>;
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
    save(options?: SaveOptions): Promise<Uint8Array>;
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
    saveAsBase64(options?: Base64SaveOptions): Promise<string>;
    findPageForAnnotationRef(ref: PDFRef): PDFPage | undefined;
    private embedAll;
    private updateInfoDict;
    private getInfoDict;
    private assertFontkit;
    private computePages;
    private getOrCreateForm;
}

type FontEmbedder = CustomFontEmbedder | StandardFontEmbedder;
/**
 * Represents a font that has been embedded in a [[PDFDocument]].
 */
declare class PDFFont implements Embeddable {
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
    static of: (ref: PDFRef, doc: PDFDocument, embedder: FontEmbedder) => PDFFont;
    /** The unique reference assigned to this font within the document. */
    readonly ref: PDFRef;
    /** The document to which this font belongs. */
    readonly doc: PDFDocument;
    /** The name of this font. */
    readonly name: string;
    private modified;
    private readonly embedder;
    private constructor();
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
    encodeText(text: string): PDFHexString;
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
    widthOfTextAtSize(text: string, size: number): number;
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
    heightAtSize(size: number, options?: {
        descender?: boolean;
    }): number;
    /**
     * Compute the font size at which this font is a given height. For example:
     * ```js
     * const fontSize = font.sizeAtHeight(12)
     * ```
     * @param height The height to be used for this calculation.
     * @returns The font size at which this font is the given height.
     */
    sizeAtHeight(height: number): number;
    /**
     * Get the set of unicode code points that can be represented by this font.
     * @returns The set of unicode code points supported by this font.
     */
    getCharacterSet(): number[];
    /**
     * > **NOTE:** You probably don't need to call this method directly. The
     * > [[PDFDocument.save]] and [[PDFDocument.saveAsBase64]] methods will
     * > automatically ensure all fonts get embedded.
     *
     * Embed this font in its document.
     *
     * @returns Resolves when the embedding is complete.
     */
    embed(): Promise<void>;
}

/*********************** Appearance Provider Types ****************************/
type CheckBoxAppearanceProvider = (checkBox: PDFCheckBox, widget: PDFWidgetAnnotation) => AppearanceOrMapping<{
    on: PDFOperator[];
    off: PDFOperator[];
}>;
type RadioGroupAppearanceProvider = (radioGroup: PDFRadioGroup, widget: PDFWidgetAnnotation) => AppearanceOrMapping<{
    on: PDFOperator[];
    off: PDFOperator[];
}>;
type ButtonAppearanceProvider = (button: PDFButton, widget: PDFWidgetAnnotation, font: PDFFont) => AppearanceOrMapping<PDFOperator[]>;
type DropdownAppearanceProvider = (dropdown: PDFDropdown, widget: PDFWidgetAnnotation, font: PDFFont) => AppearanceOrMapping<PDFOperator[]>;
type OptionListAppearanceProvider = (optionList: PDFOptionList, widget: PDFWidgetAnnotation, font: PDFFont) => AppearanceOrMapping<PDFOperator[]>;
type TextFieldAppearanceProvider = (textField: PDFTextField, widget: PDFWidgetAnnotation, font: PDFFont) => AppearanceOrMapping<PDFOperator[]>;
type SignatureAppearanceProvider = (signature: PDFSignature, widget: PDFWidgetAnnotation, font: PDFFont) => AppearanceOrMapping<PDFOperator[]>;
/******************* Appearance Provider Utility Types ************************/
type AppearanceMapping<T> = {
    normal: T;
    rollover?: T;
    down?: T;
};
type AppearanceOrMapping<T> = T | AppearanceMapping<T>;
type AppearanceProviderFor<T extends PDFField> = T extends PDFCheckBox ? CheckBoxAppearanceProvider : T extends PDFRadioGroup ? RadioGroupAppearanceProvider : T extends PDFButton ? ButtonAppearanceProvider : T extends PDFDropdown ? DropdownAppearanceProvider : T extends PDFOptionList ? OptionListAppearanceProvider : T extends PDFTextField ? TextFieldAppearanceProvider : T extends PDFSignature ? SignatureAppearanceProvider : never;
/********************* Appearance Provider Functions **************************/
declare const normalizeAppearance: <T>(appearance: T | AppearanceMapping<T>) => AppearanceMapping<T>;
declare const defaultCheckBoxAppearanceProvider: AppearanceProviderFor<PDFCheckBox>;
declare const defaultRadioGroupAppearanceProvider: AppearanceProviderFor<PDFRadioGroup>;
declare const defaultButtonAppearanceProvider: AppearanceProviderFor<PDFButton>;
declare const defaultTextFieldAppearanceProvider: AppearanceProviderFor<PDFTextField>;
declare const defaultDropdownAppearanceProvider: AppearanceProviderFor<PDFDropdown>;
declare const defaultOptionListAppearanceProvider: AppearanceProviderFor<PDFOptionList>;

interface TextPosition {
    text: string;
    encoded: PDFHexString;
    x: number;
    y: number;
    width: number;
    height: number;
}
interface LayoutBounds {
    x: number;
    y: number;
    width: number;
    height: number;
}
interface LayoutTextOptions {
    alignment: TextAlignment;
    fontSize?: number;
    font: PDFFont;
    bounds: LayoutBounds;
}
interface MultilineTextLayout {
    bounds: LayoutBounds;
    lines: TextPosition[];
    fontSize: number;
    lineHeight: number;
}
declare const layoutMultilineText: (text: string, { alignment, fontSize, font, bounds }: LayoutTextOptions) => MultilineTextLayout;
interface LayoutCombedTextOptions {
    fontSize?: number;
    font: PDFFont;
    bounds: LayoutBounds;
    cellCount: number;
}
interface CombedTextLayout {
    bounds: LayoutBounds;
    cells: TextPosition[];
    fontSize: number;
}
declare const layoutCombedText: (text: string, { fontSize, font, bounds, cellCount }: LayoutCombedTextOptions) => CombedTextLayout;
interface LayoutSinglelineTextOptions {
    alignment: TextAlignment;
    fontSize?: number;
    font: PDFFont;
    bounds: LayoutBounds;
}
interface SinglelineTextLayout {
    bounds: LayoutBounds;
    line: TextPosition;
    fontSize: number;
}
declare const layoutSinglelineText: (text: string, { alignment, fontSize, font, bounds }: LayoutSinglelineTextOptions) => SinglelineTextLayout;

declare class EncryptedPDFError extends Error {
    constructor();
}
declare class FontkitNotRegisteredError extends Error {
    constructor();
}
declare class ForeignPageError extends Error {
    constructor();
}
declare class RemovePageFromEmptyDocumentError extends Error {
    constructor();
}
declare class NoSuchFieldError extends Error {
    constructor(name: string);
}
declare class UnexpectedFieldTypeError extends Error {
    constructor(name: string, expected: any, actual: any);
}
declare class MissingOnValueCheckError extends Error {
    constructor(onValue: any);
}
declare class FieldAlreadyExistsError extends Error {
    constructor(name: string);
}
declare class InvalidFieldNamePartError extends Error {
    constructor(namePart: string);
}
declare class FieldExistsAsNonTerminalError extends Error {
    constructor(name: string);
}
declare class RichTextFieldReadError extends Error {
    constructor(fieldName: string);
}
declare class CombedTextLayoutError extends Error {
    constructor(lineLength: number, cellCount: number);
}
declare class ExceededMaxLengthError extends Error {
    constructor(textLength: number, maxLength: number, name: string);
}
declare class InvalidMaxLengthError extends Error {
    constructor(textLength: number, maxLength: number, name: string);
}

declare const asPDFName: (name: string | PDFName) => PDFName;
declare const asPDFNumber: (num: number | PDFNumber) => PDFNumber;
declare const asNumber: (num: number | PDFNumber) => number;

interface DrawTextOptions {
    color: Color;
    font: string | PDFName;
    size: number | PDFNumber;
    rotate: Rotation;
    xSkew: Rotation;
    ySkew: Rotation;
    x: number | PDFNumber;
    y: number | PDFNumber;
    graphicsState?: string | PDFName;
}
declare const drawText: (line: PDFHexString, options: DrawTextOptions) => PDFOperator[];
interface DrawLinesOfTextOptions extends DrawTextOptions {
    lineHeight: number | PDFNumber;
}
declare const drawLinesOfText: (lines: PDFHexString[], options: DrawLinesOfTextOptions) => PDFOperator[];
declare const drawImage: (name: string | PDFName, options: {
    x: number | PDFNumber;
    y: number | PDFNumber;
    width: number | PDFNumber;
    height: number | PDFNumber;
    rotate: Rotation;
    xSkew: Rotation;
    ySkew: Rotation;
    graphicsState?: string | PDFName;
}) => PDFOperator[];
declare const drawPage: (name: string | PDFName, options: {
    x: number | PDFNumber;
    y: number | PDFNumber;
    xScale: number | PDFNumber;
    yScale: number | PDFNumber;
    rotate: Rotation;
    xSkew: Rotation;
    ySkew: Rotation;
    graphicsState?: string | PDFName;
}) => PDFOperator[];
declare const drawLine: (options: {
    start: {
        x: number | PDFNumber;
        y: number | PDFNumber;
    };
    end: {
        x: number | PDFNumber;
        y: number | PDFNumber;
    };
    thickness: number | PDFNumber;
    color: Color | undefined;
    dashArray?: (number | PDFNumber)[];
    dashPhase?: number | PDFNumber;
    lineCap?: LineCapStyle;
    graphicsState?: string | PDFName;
}) => PDFOperator[];
declare const drawRectangle: (options: {
    x: number | PDFNumber;
    y: number | PDFNumber;
    width: number | PDFNumber;
    height: number | PDFNumber;
    borderWidth: number | PDFNumber;
    color: Color | undefined;
    borderColor: Color | undefined;
    rotate: Rotation;
    xSkew: Rotation;
    ySkew: Rotation;
    borderLineCap?: LineCapStyle;
    borderDashArray?: (number | PDFNumber)[];
    borderDashPhase?: number | PDFNumber;
    graphicsState?: string | PDFName;
}) => PDFOperator[];
/** @deprecated */
declare const drawEllipsePath: (config: {
    x: number | PDFNumber;
    y: number | PDFNumber;
    xScale: number | PDFNumber;
    yScale: number | PDFNumber;
}) => PDFOperator[];
declare const drawEllipse: (options: {
    x: number | PDFNumber;
    y: number | PDFNumber;
    xScale: number | PDFNumber;
    yScale: number | PDFNumber;
    rotate?: Rotation;
    color: Color | undefined;
    borderColor: Color | undefined;
    borderWidth: number | PDFNumber;
    borderDashArray?: (number | PDFNumber)[];
    borderDashPhase?: number | PDFNumber;
    graphicsState?: string | PDFName;
    borderLineCap?: LineCapStyle;
}) => PDFOperator[];
declare const drawSvgPath: (path: string, options: {
    x: number | PDFNumber;
    y: number | PDFNumber;
    rotate?: Rotation;
    scale: number | PDFNumber | undefined;
    color: Color | undefined;
    borderColor: Color | undefined;
    borderWidth: number | PDFNumber;
    borderDashArray?: (number | PDFNumber)[];
    borderDashPhase?: number | PDFNumber;
    borderLineCap?: LineCapStyle;
    graphicsState?: string | PDFName;
}) => PDFOperator[];
declare const drawCheckMark: (options: {
    x: number | PDFNumber;
    y: number | PDFNumber;
    size: number | PDFNumber;
    thickness: number | PDFNumber;
    color: Color | undefined;
}) => PDFOperator[];
declare const rotateInPlace: (options: {
    width: number | PDFNumber;
    height: number | PDFNumber;
    rotation: 0 | 90 | 180 | 270;
}) => PDFOperator[];
declare const drawCheckBox: (options: {
    x: number | PDFNumber;
    y: number | PDFNumber;
    width: number | PDFNumber;
    height: number | PDFNumber;
    thickness: number | PDFNumber;
    borderWidth: number | PDFNumber;
    markColor: Color | undefined;
    color: Color | undefined;
    borderColor: Color | undefined;
    filled: boolean;
}) => PDFOperator[];
declare const drawRadioButton: (options: {
    x: number | PDFNumber;
    y: number | PDFNumber;
    width: number | PDFNumber;
    height: number | PDFNumber;
    borderWidth: number | PDFNumber;
    dotColor: Color | undefined;
    color: Color | undefined;
    borderColor: Color | undefined;
    filled: boolean;
}) => PDFOperator[];
declare const drawButton: (options: {
    x: number | PDFNumber;
    y: number | PDFNumber;
    width: number | PDFNumber;
    height: number | PDFNumber;
    borderWidth: number | PDFNumber;
    color: Color | undefined;
    borderColor: Color | undefined;
    textLines: {
        encoded: PDFHexString;
        x: number;
        y: number;
    }[];
    textColor: Color;
    font: string | PDFName;
    fontSize: number | PDFNumber;
}) => PDFOperator[];
interface DrawTextLinesOptions {
    color: Color;
    font: string | PDFName;
    size: number | PDFNumber;
    rotate: Rotation;
    xSkew: Rotation;
    ySkew: Rotation;
}
declare const drawTextLines: (lines: {
    encoded: PDFHexString;
    x: number;
    y: number;
}[], options: DrawTextLinesOptions) => PDFOperator[];
declare const drawTextField: (options: {
    x: number | PDFNumber;
    y: number | PDFNumber;
    width: number | PDFNumber;
    height: number | PDFNumber;
    borderWidth: number | PDFNumber;
    color: Color | undefined;
    borderColor: Color | undefined;
    textLines: {
        encoded: PDFHexString;
        x: number;
        y: number;
    }[];
    textColor: Color;
    font: string | PDFName;
    fontSize: number | PDFNumber;
    padding: number | PDFNumber;
}) => PDFOperator[];
declare const drawOptionList: (options: {
    x: number | PDFNumber;
    y: number | PDFNumber;
    width: number | PDFNumber;
    height: number | PDFNumber;
    borderWidth: number | PDFNumber;
    color: Color | undefined;
    borderColor: Color | undefined;
    textLines: {
        encoded: PDFHexString;
        x: number;
        y: number;
        height: number;
    }[];
    textColor: Color;
    font: string | PDFName;
    fontSize: number | PDFNumber;
    lineHeight: number | PDFNumber;
    selectedLines: number[];
    selectedColor: Color;
    padding: number | PDFNumber;
}) => PDFOperator[];

declare const PageSizes: {
    '4A0': [number, number];
    '2A0': [number, number];
    A0: [number, number];
    A1: [number, number];
    A2: [number, number];
    A3: [number, number];
    A4: [number, number];
    A5: [number, number];
    A6: [number, number];
    A7: [number, number];
    A8: [number, number];
    A9: [number, number];
    A10: [number, number];
    B0: [number, number];
    B1: [number, number];
    B2: [number, number];
    B3: [number, number];
    B4: [number, number];
    B5: [number, number];
    B6: [number, number];
    B7: [number, number];
    B8: [number, number];
    B9: [number, number];
    B10: [number, number];
    C0: [number, number];
    C1: [number, number];
    C2: [number, number];
    C3: [number, number];
    C4: [number, number];
    C5: [number, number];
    C6: [number, number];
    C7: [number, number];
    C8: [number, number];
    C9: [number, number];
    C10: [number, number];
    RA0: [number, number];
    RA1: [number, number];
    RA2: [number, number];
    RA3: [number, number];
    RA4: [number, number];
    SRA0: [number, number];
    SRA1: [number, number];
    SRA2: [number, number];
    SRA3: [number, number];
    SRA4: [number, number];
    Executive: [number, number];
    Folio: [number, number];
    Legal: [number, number];
    Letter: [number, number];
    Tabloid: [number, number];
};

declare class JavaScriptEmbedder {
    static for(script: string, scriptName: string): JavaScriptEmbedder;
    private readonly script;
    readonly scriptName: string;
    private constructor();
    embedIntoContext(context: PDFContext, ref?: PDFRef): Promise<PDFRef>;
}

/**
 * Represents JavaScript that has been embedded in a [[PDFDocument]].
 */
declare class PDFJavaScript implements Embeddable {
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
    static of: (ref: PDFRef, doc: PDFDocument, embedder: JavaScriptEmbedder) => PDFJavaScript;
    /** The unique reference assigned to this embedded script within the document. */
    readonly ref: PDFRef;
    /** The document to which this embedded script belongs. */
    readonly doc: PDFDocument;
    private alreadyEmbedded;
    private readonly embedder;
    private constructor();
    /**
     * > **NOTE:** You probably don't need to call this method directly. The
     * > [[PDFDocument.save]] and [[PDFDocument.saveAsBase64]] methods will
     * > automatically ensure all JavaScripts get embedded.
     *
     * Embed this JavaScript in its document.
     *
     * @returns Resolves when the embedding is complete.
     */
    embed(): Promise<void>;
}

export { AFRelationship, AcroButtonFlags, AcroChoiceFlags, AcroFieldFlags, AcroTextFlags, AnnotationFlags, AppearanceCharacteristics, type AppearanceMapping, type AppearanceProviderFor, type AttachmentOptions, type Base64SaveOptions, BlendMode, type CMYK, Cache, CharCodes, type Color, ColorTypes, type CombedTextLayout, CombedTextLayoutError, CorruptPageTreeError, type CreateOptions, CustomFontEmbedder, CustomFontSubsetEmbedder, type Degrees, type DrawLinesOfTextOptions, type DrawTextLinesOptions, type DrawTextOptions, Duplex, type EmbedFontOptions, type Embeddable, EncryptedPDFError, ExceededMaxLengthError, FieldAlreadyExistsError, FieldExistsAsNonTerminalError, FileEmbedder, FontkitNotRegisteredError, ForeignPageError, type Grayscale, ImageAlignment, IndexOutOfBoundsError, InvalidAcroFieldValueError, InvalidFieldNamePartError, InvalidMaxLengthError, InvalidPDFDateStringError, InvalidTargetIndexError, JpegEmbedder, type LayoutBounds, type LayoutCombedTextOptions, type LayoutSinglelineTextOptions, type LayoutTextOptions, LineCapStyle, LineJoinStyle, type LoadOptions, MethodNotImplementedError, MissingCatalogError, MissingDAEntryError, MissingKeywordError, MissingOnValueCheckError, MissingPDFHeaderError, MissingPageContentsEmbeddingError, MissingTfOperatorError, MultiSelectValueError, type MultilineTextLayout, NextByteAssertionError, NoSuchFieldError, NonFullScreenPageMode, NumberParsingError, PDFAcroButton, PDFAcroCheckBox, PDFAcroChoice, PDFAcroComboBox, PDFAcroField, PDFAcroForm, PDFAcroListBox, PDFAcroNonTerminal, PDFAcroPushButton, PDFAcroRadioButton, PDFAcroSignature, PDFAcroTerminal, PDFAcroText, PDFAnnotation, PDFArray, PDFArrayIsNotRectangleError, PDFBool, PDFButton, PDFCatalog, PDFCheckBox, PDFContentStream, PDFContext, PDFCrossRefSection, PDFCrossRefStream, PDFDict, PDFDocument, PDFDropdown, PDFEmbeddedPage, PDFField, PDFFlateStream, PDFFont, PDFForm, PDFHeader, PDFHexString, PDFImage, PDFInvalidObject, PDFInvalidObjectParsingError, PDFJavaScript, PDFName, _default as PDFNull, PDFNumber, PDFObject, PDFObjectCopier, PDFObjectParser, PDFObjectParsingError, PDFObjectStream, PDFObjectStreamParser, PDFOperator, PDFOperatorNames, PDFOptionList, PDFPage, type PDFPageDrawCircleOptions, type PDFPageDrawEllipseOptions, type PDFPageDrawImageOptions, type PDFPageDrawLineOptions, type PDFPageDrawPageOptions, type PDFPageDrawRectangleOptions, type PDFPageDrawSVGOptions, type PDFPageDrawSquareOptions, type PDFPageDrawTextOptions, PDFPageEmbedder, PDFPageLeaf, PDFPageTree, PDFParser, PDFParsingError, PDFRadioGroup, PDFRawStream, PDFRef, PDFSignature, PDFStream, PDFStreamParsingError, PDFStreamWriter, PDFString, PDFTextField, PDFTrailer, PDFTrailerDict, PDFWidgetAnnotation, PDFWriter, PDFXRefStreamParser, type PageBoundingBox, PageEmbeddingMismatchedContextError, PageSizes, ParseSpeeds, PngEmbedder, type Position, PrintScaling, PrivateConstructorError, type RGB, type Radians, ReadingDirection, RemovePageFromEmptyDocumentError, ReparseError, RichTextFieldReadError, type Rotation, RotationTypes, type SaveOptions, type SetTitleOptions, type SinglelineTextLayout, StalledParserError, StandardFontEmbedder, StandardFontValues, StandardFonts, TextAlignment, type TextPosition, TextRenderingMode, type TransformationMatrix, type TypeDescriptor, UnbalancedParenthesisError, UnexpectedFieldTypeError, UnexpectedObjectTypeError, UnrecognizedStreamTypeError, UnsupportedEncodingError, ViewerPreferences, addRandomSuffix, adjustDimsForRotation, appendBezierCurve, appendQuadraticCurve, arrayAsString, asNumber, asPDFName, asPDFNumber, assertEachIs, assertInteger, assertIs, assertIsOneOf, assertIsOneOfOrUndefined, assertIsSubset, assertMultiple, assertOrUndefined, assertPositive, assertRange, assertRangeOrUndefined, backtick, beginMarkedContent, beginText, breakTextIntoLines, byAscendingId, bytesFor, canBeConvertedToUint8Array, charAtIndex, charFromCode, charFromHexCode, charSplit, cleanText, clip, clipEvenOdd, closePath, cmyk, colorToComponents, componentsToColor, concatTransformationMatrix, copyStringIntoBuffer, createPDFAcroField, createPDFAcroFields, createTypeErrorMsg, createValueErrorMsg, decodeFromBase64, decodeFromBase64DataUri, decodePDFRawStream, defaultButtonAppearanceProvider, defaultCheckBoxAppearanceProvider, defaultDropdownAppearanceProvider, defaultOptionListAppearanceProvider, defaultRadioGroupAppearanceProvider, defaultTextFieldAppearanceProvider, degrees, degreesToRadians, drawButton, drawCheckBox, drawCheckMark, drawEllipse, drawEllipsePath, drawImage, drawLine, drawLinesOfText, drawObject, drawOptionList, drawPage, drawRadioButton, drawRectangle, drawSvgPath, drawText, drawTextField, drawTextLines, encodeToBase64, endMarkedContent, endPath, endText, error, escapeRegExp, escapedNewlineChars, fill, fillAndStroke, findLastMatch, getType, grayscale, hasSurrogates, hasUtf16BOM, highSurrogate, isNewlineChar, isStandardFont, isType, isWithinBMP, last, layoutCombedText, layoutMultilineText, layoutSinglelineText, lineSplit, lineTo, lowSurrogate, mergeIntoTypedArray, mergeLines, mergeUint8Arrays, moveText, moveTo, newlineChars, nextLine, normalizeAppearance, numberToString, padStart, parseDate, pdfDocEncodingDecode, pluckIndices, popGraphicsState, pushGraphicsState, radians, radiansToDegrees, range, rectangle, rectanglesAreEqual, reduceRotation, restoreDashPattern, reverseArray, rgb, rotateAndSkewTextDegreesAndTranslate, rotateAndSkewTextRadiansAndTranslate, rotateDegrees, rotateInPlace, rotateRadians, rotateRectangle, scale, setCharacterSpacing, setCharacterSqueeze, setDashPattern, setFillingCmykColor, setFillingColor, setFillingGrayscaleColor, setFillingRgbColor, setFontAndSize, setGraphicsState, setLineCap, setLineHeight, setLineJoin, setLineWidth, setStrokingCmykColor, setStrokingColor, setStrokingGrayscaleColor, setStrokingRgbColor, setTextMatrix, setTextRenderingMode, setTextRise, setWordSpacing, showText, singleQuote, sizeInBytes, skewDegrees, skewRadians, sortedUniq, square, stroke, sum, toCharCode, toCodePoint, toDegrees, toHexString, toHexStringOfMinLength, toRadians, toUint8Array, translate, typedArrayFor, utf16Decode, utf16Encode, utf8Encode, values, waitForTick };
