"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/utils/common.js
  var require_common = __commonJS({
    "node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/utils/common.js"(exports) {
      "use strict";
      var TYPED_OK = typeof Uint8Array !== "undefined" && typeof Uint16Array !== "undefined" && typeof Int32Array !== "undefined";
      function _has(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
      }
      exports.assign = function(obj) {
        var sources = Array.prototype.slice.call(arguments, 1);
        while (sources.length) {
          var source = sources.shift();
          if (!source) {
            continue;
          }
          if (typeof source !== "object") {
            throw new TypeError(source + "must be non-object");
          }
          for (var p in source) {
            if (_has(source, p)) {
              obj[p] = source[p];
            }
          }
        }
        return obj;
      };
      exports.shrinkBuf = function(buf, size) {
        if (buf.length === size) {
          return buf;
        }
        if (buf.subarray) {
          return buf.subarray(0, size);
        }
        buf.length = size;
        return buf;
      };
      var fnTyped = {
        arraySet: function(dest, src, src_offs, len, dest_offs) {
          if (src.subarray && dest.subarray) {
            dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
            return;
          }
          for (var i = 0; i < len; i++) {
            dest[dest_offs + i] = src[src_offs + i];
          }
        },
        // Join array of chunks to single array.
        flattenChunks: function(chunks) {
          var i, l, len, pos, chunk, result;
          len = 0;
          for (i = 0, l = chunks.length; i < l; i++) {
            len += chunks[i].length;
          }
          result = new Uint8Array(len);
          pos = 0;
          for (i = 0, l = chunks.length; i < l; i++) {
            chunk = chunks[i];
            result.set(chunk, pos);
            pos += chunk.length;
          }
          return result;
        }
      };
      var fnUntyped = {
        arraySet: function(dest, src, src_offs, len, dest_offs) {
          for (var i = 0; i < len; i++) {
            dest[dest_offs + i] = src[src_offs + i];
          }
        },
        // Join array of chunks to single array.
        flattenChunks: function(chunks) {
          return [].concat.apply([], chunks);
        }
      };
      exports.setTyped = function(on) {
        if (on) {
          exports.Buf8 = Uint8Array;
          exports.Buf16 = Uint16Array;
          exports.Buf32 = Int32Array;
          exports.assign(exports, fnTyped);
        } else {
          exports.Buf8 = Array;
          exports.Buf16 = Array;
          exports.Buf32 = Array;
          exports.assign(exports, fnUntyped);
        }
      };
      exports.setTyped(TYPED_OK);
    }
  });

  // node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/trees.js
  var require_trees = __commonJS({
    "node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/trees.js"(exports) {
      "use strict";
      var utils = require_common();
      var Z_FIXED = 4;
      var Z_BINARY = 0;
      var Z_TEXT = 1;
      var Z_UNKNOWN = 2;
      function zero(buf) {
        var len = buf.length;
        while (--len >= 0) {
          buf[len] = 0;
        }
      }
      var STORED_BLOCK = 0;
      var STATIC_TREES = 1;
      var DYN_TREES = 2;
      var MIN_MATCH = 3;
      var MAX_MATCH = 258;
      var LENGTH_CODES = 29;
      var LITERALS = 256;
      var L_CODES = LITERALS + 1 + LENGTH_CODES;
      var D_CODES = 30;
      var BL_CODES = 19;
      var HEAP_SIZE = 2 * L_CODES + 1;
      var MAX_BITS = 15;
      var Buf_size = 16;
      var MAX_BL_BITS = 7;
      var END_BLOCK = 256;
      var REP_3_6 = 16;
      var REPZ_3_10 = 17;
      var REPZ_11_138 = 18;
      var extra_lbits = (
        /* extra bits for each length code */
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]
      );
      var extra_dbits = (
        /* extra bits for each distance code */
        [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]
      );
      var extra_blbits = (
        /* extra bits for each bit length code */
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]
      );
      var bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
      var DIST_CODE_LEN = 512;
      var static_ltree = new Array((L_CODES + 2) * 2);
      zero(static_ltree);
      var static_dtree = new Array(D_CODES * 2);
      zero(static_dtree);
      var _dist_code = new Array(DIST_CODE_LEN);
      zero(_dist_code);
      var _length_code = new Array(MAX_MATCH - MIN_MATCH + 1);
      zero(_length_code);
      var base_length = new Array(LENGTH_CODES);
      zero(base_length);
      var base_dist = new Array(D_CODES);
      zero(base_dist);
      function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
        this.static_tree = static_tree;
        this.extra_bits = extra_bits;
        this.extra_base = extra_base;
        this.elems = elems;
        this.max_length = max_length;
        this.has_stree = static_tree && static_tree.length;
      }
      var static_l_desc;
      var static_d_desc;
      var static_bl_desc;
      function TreeDesc(dyn_tree, stat_desc) {
        this.dyn_tree = dyn_tree;
        this.max_code = 0;
        this.stat_desc = stat_desc;
      }
      function d_code(dist) {
        return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
      }
      function put_short(s, w) {
        s.pending_buf[s.pending++] = w & 255;
        s.pending_buf[s.pending++] = w >>> 8 & 255;
      }
      function send_bits(s, value, length) {
        if (s.bi_valid > Buf_size - length) {
          s.bi_buf |= value << s.bi_valid & 65535;
          put_short(s, s.bi_buf);
          s.bi_buf = value >> Buf_size - s.bi_valid;
          s.bi_valid += length - Buf_size;
        } else {
          s.bi_buf |= value << s.bi_valid & 65535;
          s.bi_valid += length;
        }
      }
      function send_code(s, c, tree) {
        send_bits(
          s,
          tree[c * 2],
          tree[c * 2 + 1]
          /*.Len*/
        );
      }
      function bi_reverse(code, len) {
        var res = 0;
        do {
          res |= code & 1;
          code >>>= 1;
          res <<= 1;
        } while (--len > 0);
        return res >>> 1;
      }
      function bi_flush(s) {
        if (s.bi_valid === 16) {
          put_short(s, s.bi_buf);
          s.bi_buf = 0;
          s.bi_valid = 0;
        } else if (s.bi_valid >= 8) {
          s.pending_buf[s.pending++] = s.bi_buf & 255;
          s.bi_buf >>= 8;
          s.bi_valid -= 8;
        }
      }
      function gen_bitlen(s, desc) {
        var tree = desc.dyn_tree;
        var max_code = desc.max_code;
        var stree = desc.stat_desc.static_tree;
        var has_stree = desc.stat_desc.has_stree;
        var extra = desc.stat_desc.extra_bits;
        var base = desc.stat_desc.extra_base;
        var max_length = desc.stat_desc.max_length;
        var h;
        var n, m;
        var bits;
        var xbits;
        var f;
        var overflow = 0;
        for (bits = 0; bits <= MAX_BITS; bits++) {
          s.bl_count[bits] = 0;
        }
        tree[s.heap[s.heap_max] * 2 + 1] = 0;
        for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
          n = s.heap[h];
          bits = tree[tree[n * 2 + 1] * 2 + 1] + 1;
          if (bits > max_length) {
            bits = max_length;
            overflow++;
          }
          tree[n * 2 + 1] = bits;
          if (n > max_code) {
            continue;
          }
          s.bl_count[bits]++;
          xbits = 0;
          if (n >= base) {
            xbits = extra[n - base];
          }
          f = tree[n * 2];
          s.opt_len += f * (bits + xbits);
          if (has_stree) {
            s.static_len += f * (stree[n * 2 + 1] + xbits);
          }
        }
        if (overflow === 0) {
          return;
        }
        do {
          bits = max_length - 1;
          while (s.bl_count[bits] === 0) {
            bits--;
          }
          s.bl_count[bits]--;
          s.bl_count[bits + 1] += 2;
          s.bl_count[max_length]--;
          overflow -= 2;
        } while (overflow > 0);
        for (bits = max_length; bits !== 0; bits--) {
          n = s.bl_count[bits];
          while (n !== 0) {
            m = s.heap[--h];
            if (m > max_code) {
              continue;
            }
            if (tree[m * 2 + 1] !== bits) {
              s.opt_len += (bits - tree[m * 2 + 1]) * tree[m * 2];
              tree[m * 2 + 1] = bits;
            }
            n--;
          }
        }
      }
      function gen_codes(tree, max_code, bl_count) {
        var next_code = new Array(MAX_BITS + 1);
        var code = 0;
        var bits;
        var n;
        for (bits = 1; bits <= MAX_BITS; bits++) {
          next_code[bits] = code = code + bl_count[bits - 1] << 1;
        }
        for (n = 0; n <= max_code; n++) {
          var len = tree[n * 2 + 1];
          if (len === 0) {
            continue;
          }
          tree[n * 2] = bi_reverse(next_code[len]++, len);
        }
      }
      function tr_static_init() {
        var n;
        var bits;
        var length;
        var code;
        var dist;
        var bl_count = new Array(MAX_BITS + 1);
        length = 0;
        for (code = 0; code < LENGTH_CODES - 1; code++) {
          base_length[code] = length;
          for (n = 0; n < 1 << extra_lbits[code]; n++) {
            _length_code[length++] = code;
          }
        }
        _length_code[length - 1] = code;
        dist = 0;
        for (code = 0; code < 16; code++) {
          base_dist[code] = dist;
          for (n = 0; n < 1 << extra_dbits[code]; n++) {
            _dist_code[dist++] = code;
          }
        }
        dist >>= 7;
        for (; code < D_CODES; code++) {
          base_dist[code] = dist << 7;
          for (n = 0; n < 1 << extra_dbits[code] - 7; n++) {
            _dist_code[256 + dist++] = code;
          }
        }
        for (bits = 0; bits <= MAX_BITS; bits++) {
          bl_count[bits] = 0;
        }
        n = 0;
        while (n <= 143) {
          static_ltree[n * 2 + 1] = 8;
          n++;
          bl_count[8]++;
        }
        while (n <= 255) {
          static_ltree[n * 2 + 1] = 9;
          n++;
          bl_count[9]++;
        }
        while (n <= 279) {
          static_ltree[n * 2 + 1] = 7;
          n++;
          bl_count[7]++;
        }
        while (n <= 287) {
          static_ltree[n * 2 + 1] = 8;
          n++;
          bl_count[8]++;
        }
        gen_codes(static_ltree, L_CODES + 1, bl_count);
        for (n = 0; n < D_CODES; n++) {
          static_dtree[n * 2 + 1] = 5;
          static_dtree[n * 2] = bi_reverse(n, 5);
        }
        static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
        static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES, MAX_BITS);
        static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES, MAX_BL_BITS);
      }
      function init_block(s) {
        var n;
        for (n = 0; n < L_CODES; n++) {
          s.dyn_ltree[n * 2] = 0;
        }
        for (n = 0; n < D_CODES; n++) {
          s.dyn_dtree[n * 2] = 0;
        }
        for (n = 0; n < BL_CODES; n++) {
          s.bl_tree[n * 2] = 0;
        }
        s.dyn_ltree[END_BLOCK * 2] = 1;
        s.opt_len = s.static_len = 0;
        s.last_lit = s.matches = 0;
      }
      function bi_windup(s) {
        if (s.bi_valid > 8) {
          put_short(s, s.bi_buf);
        } else if (s.bi_valid > 0) {
          s.pending_buf[s.pending++] = s.bi_buf;
        }
        s.bi_buf = 0;
        s.bi_valid = 0;
      }
      function copy_block(s, buf, len, header) {
        bi_windup(s);
        if (header) {
          put_short(s, len);
          put_short(s, ~len);
        }
        utils.arraySet(s.pending_buf, s.window, buf, len, s.pending);
        s.pending += len;
      }
      function smaller(tree, n, m, depth) {
        var _n2 = n * 2;
        var _m2 = m * 2;
        return tree[_n2] < tree[_m2] || tree[_n2] === tree[_m2] && depth[n] <= depth[m];
      }
      function pqdownheap(s, tree, k) {
        var v = s.heap[k];
        var j = k << 1;
        while (j <= s.heap_len) {
          if (j < s.heap_len && smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
            j++;
          }
          if (smaller(tree, v, s.heap[j], s.depth)) {
            break;
          }
          s.heap[k] = s.heap[j];
          k = j;
          j <<= 1;
        }
        s.heap[k] = v;
      }
      function compress_block(s, ltree, dtree) {
        var dist;
        var lc;
        var lx = 0;
        var code;
        var extra;
        if (s.last_lit !== 0) {
          do {
            dist = s.pending_buf[s.d_buf + lx * 2] << 8 | s.pending_buf[s.d_buf + lx * 2 + 1];
            lc = s.pending_buf[s.l_buf + lx];
            lx++;
            if (dist === 0) {
              send_code(s, lc, ltree);
            } else {
              code = _length_code[lc];
              send_code(s, code + LITERALS + 1, ltree);
              extra = extra_lbits[code];
              if (extra !== 0) {
                lc -= base_length[code];
                send_bits(s, lc, extra);
              }
              dist--;
              code = d_code(dist);
              send_code(s, code, dtree);
              extra = extra_dbits[code];
              if (extra !== 0) {
                dist -= base_dist[code];
                send_bits(s, dist, extra);
              }
            }
          } while (lx < s.last_lit);
        }
        send_code(s, END_BLOCK, ltree);
      }
      function build_tree(s, desc) {
        var tree = desc.dyn_tree;
        var stree = desc.stat_desc.static_tree;
        var has_stree = desc.stat_desc.has_stree;
        var elems = desc.stat_desc.elems;
        var n, m;
        var max_code = -1;
        var node;
        s.heap_len = 0;
        s.heap_max = HEAP_SIZE;
        for (n = 0; n < elems; n++) {
          if (tree[n * 2] !== 0) {
            s.heap[++s.heap_len] = max_code = n;
            s.depth[n] = 0;
          } else {
            tree[n * 2 + 1] = 0;
          }
        }
        while (s.heap_len < 2) {
          node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
          tree[node * 2] = 1;
          s.depth[node] = 0;
          s.opt_len--;
          if (has_stree) {
            s.static_len -= stree[node * 2 + 1];
          }
        }
        desc.max_code = max_code;
        for (n = s.heap_len >> 1; n >= 1; n--) {
          pqdownheap(s, tree, n);
        }
        node = elems;
        do {
          n = s.heap[
            1
            /*SMALLEST*/
          ];
          s.heap[
            1
            /*SMALLEST*/
          ] = s.heap[s.heap_len--];
          pqdownheap(
            s,
            tree,
            1
            /*SMALLEST*/
          );
          m = s.heap[
            1
            /*SMALLEST*/
          ];
          s.heap[--s.heap_max] = n;
          s.heap[--s.heap_max] = m;
          tree[node * 2] = tree[n * 2] + tree[m * 2];
          s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
          tree[n * 2 + 1] = tree[m * 2 + 1] = node;
          s.heap[
            1
            /*SMALLEST*/
          ] = node++;
          pqdownheap(
            s,
            tree,
            1
            /*SMALLEST*/
          );
        } while (s.heap_len >= 2);
        s.heap[--s.heap_max] = s.heap[
          1
          /*SMALLEST*/
        ];
        gen_bitlen(s, desc);
        gen_codes(tree, max_code, s.bl_count);
      }
      function scan_tree(s, tree, max_code) {
        var n;
        var prevlen = -1;
        var curlen;
        var nextlen = tree[0 * 2 + 1];
        var count = 0;
        var max_count = 7;
        var min_count = 4;
        if (nextlen === 0) {
          max_count = 138;
          min_count = 3;
        }
        tree[(max_code + 1) * 2 + 1] = 65535;
        for (n = 0; n <= max_code; n++) {
          curlen = nextlen;
          nextlen = tree[(n + 1) * 2 + 1];
          if (++count < max_count && curlen === nextlen) {
            continue;
          } else if (count < min_count) {
            s.bl_tree[curlen * 2] += count;
          } else if (curlen !== 0) {
            if (curlen !== prevlen) {
              s.bl_tree[curlen * 2]++;
            }
            s.bl_tree[REP_3_6 * 2]++;
          } else if (count <= 10) {
            s.bl_tree[REPZ_3_10 * 2]++;
          } else {
            s.bl_tree[REPZ_11_138 * 2]++;
          }
          count = 0;
          prevlen = curlen;
          if (nextlen === 0) {
            max_count = 138;
            min_count = 3;
          } else if (curlen === nextlen) {
            max_count = 6;
            min_count = 3;
          } else {
            max_count = 7;
            min_count = 4;
          }
        }
      }
      function send_tree(s, tree, max_code) {
        var n;
        var prevlen = -1;
        var curlen;
        var nextlen = tree[0 * 2 + 1];
        var count = 0;
        var max_count = 7;
        var min_count = 4;
        if (nextlen === 0) {
          max_count = 138;
          min_count = 3;
        }
        for (n = 0; n <= max_code; n++) {
          curlen = nextlen;
          nextlen = tree[(n + 1) * 2 + 1];
          if (++count < max_count && curlen === nextlen) {
            continue;
          } else if (count < min_count) {
            do {
              send_code(s, curlen, s.bl_tree);
            } while (--count !== 0);
          } else if (curlen !== 0) {
            if (curlen !== prevlen) {
              send_code(s, curlen, s.bl_tree);
              count--;
            }
            send_code(s, REP_3_6, s.bl_tree);
            send_bits(s, count - 3, 2);
          } else if (count <= 10) {
            send_code(s, REPZ_3_10, s.bl_tree);
            send_bits(s, count - 3, 3);
          } else {
            send_code(s, REPZ_11_138, s.bl_tree);
            send_bits(s, count - 11, 7);
          }
          count = 0;
          prevlen = curlen;
          if (nextlen === 0) {
            max_count = 138;
            min_count = 3;
          } else if (curlen === nextlen) {
            max_count = 6;
            min_count = 3;
          } else {
            max_count = 7;
            min_count = 4;
          }
        }
      }
      function build_bl_tree(s) {
        var max_blindex;
        scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
        scan_tree(s, s.dyn_dtree, s.d_desc.max_code);
        build_tree(s, s.bl_desc);
        for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
          if (s.bl_tree[bl_order[max_blindex] * 2 + 1] !== 0) {
            break;
          }
        }
        s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
        return max_blindex;
      }
      function send_all_trees(s, lcodes, dcodes, blcodes) {
        var rank;
        send_bits(s, lcodes - 257, 5);
        send_bits(s, dcodes - 1, 5);
        send_bits(s, blcodes - 4, 4);
        for (rank = 0; rank < blcodes; rank++) {
          send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1], 3);
        }
        send_tree(s, s.dyn_ltree, lcodes - 1);
        send_tree(s, s.dyn_dtree, dcodes - 1);
      }
      function detect_data_type(s) {
        var black_mask = 4093624447;
        var n;
        for (n = 0; n <= 31; n++, black_mask >>>= 1) {
          if (black_mask & 1 && s.dyn_ltree[n * 2] !== 0) {
            return Z_BINARY;
          }
        }
        if (s.dyn_ltree[9 * 2] !== 0 || s.dyn_ltree[10 * 2] !== 0 || s.dyn_ltree[13 * 2] !== 0) {
          return Z_TEXT;
        }
        for (n = 32; n < LITERALS; n++) {
          if (s.dyn_ltree[n * 2] !== 0) {
            return Z_TEXT;
          }
        }
        return Z_BINARY;
      }
      var static_init_done = false;
      function _tr_init(s) {
        if (!static_init_done) {
          tr_static_init();
          static_init_done = true;
        }
        s.l_desc = new TreeDesc(s.dyn_ltree, static_l_desc);
        s.d_desc = new TreeDesc(s.dyn_dtree, static_d_desc);
        s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);
        s.bi_buf = 0;
        s.bi_valid = 0;
        init_block(s);
      }
      function _tr_stored_block(s, buf, stored_len, last2) {
        send_bits(s, (STORED_BLOCK << 1) + (last2 ? 1 : 0), 3);
        copy_block(s, buf, stored_len, true);
      }
      function _tr_align(s) {
        send_bits(s, STATIC_TREES << 1, 3);
        send_code(s, END_BLOCK, static_ltree);
        bi_flush(s);
      }
      function _tr_flush_block(s, buf, stored_len, last2) {
        var opt_lenb, static_lenb;
        var max_blindex = 0;
        if (s.level > 0) {
          if (s.strm.data_type === Z_UNKNOWN) {
            s.strm.data_type = detect_data_type(s);
          }
          build_tree(s, s.l_desc);
          build_tree(s, s.d_desc);
          max_blindex = build_bl_tree(s);
          opt_lenb = s.opt_len + 3 + 7 >>> 3;
          static_lenb = s.static_len + 3 + 7 >>> 3;
          if (static_lenb <= opt_lenb) {
            opt_lenb = static_lenb;
          }
        } else {
          opt_lenb = static_lenb = stored_len + 5;
        }
        if (stored_len + 4 <= opt_lenb && buf !== -1) {
          _tr_stored_block(s, buf, stored_len, last2);
        } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {
          send_bits(s, (STATIC_TREES << 1) + (last2 ? 1 : 0), 3);
          compress_block(s, static_ltree, static_dtree);
        } else {
          send_bits(s, (DYN_TREES << 1) + (last2 ? 1 : 0), 3);
          send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
          compress_block(s, s.dyn_ltree, s.dyn_dtree);
        }
        init_block(s);
        if (last2) {
          bi_windup(s);
        }
      }
      function _tr_tally(s, dist, lc) {
        s.pending_buf[s.d_buf + s.last_lit * 2] = dist >>> 8 & 255;
        s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 255;
        s.pending_buf[s.l_buf + s.last_lit] = lc & 255;
        s.last_lit++;
        if (dist === 0) {
          s.dyn_ltree[lc * 2]++;
        } else {
          s.matches++;
          dist--;
          s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]++;
          s.dyn_dtree[d_code(dist) * 2]++;
        }
        return s.last_lit === s.lit_bufsize - 1;
      }
      exports._tr_init = _tr_init;
      exports._tr_stored_block = _tr_stored_block;
      exports._tr_flush_block = _tr_flush_block;
      exports._tr_tally = _tr_tally;
      exports._tr_align = _tr_align;
    }
  });

  // node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/adler32.js
  var require_adler32 = __commonJS({
    "node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/adler32.js"(exports, module) {
      "use strict";
      function adler32(adler, buf, len, pos) {
        var s1 = adler & 65535 | 0, s2 = adler >>> 16 & 65535 | 0, n = 0;
        while (len !== 0) {
          n = len > 2e3 ? 2e3 : len;
          len -= n;
          do {
            s1 = s1 + buf[pos++] | 0;
            s2 = s2 + s1 | 0;
          } while (--n);
          s1 %= 65521;
          s2 %= 65521;
        }
        return s1 | s2 << 16 | 0;
      }
      module.exports = adler32;
    }
  });

  // node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/crc32.js
  var require_crc32 = __commonJS({
    "node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/crc32.js"(exports, module) {
      "use strict";
      function makeTable() {
        var c, table = [];
        for (var n = 0; n < 256; n++) {
          c = n;
          for (var k = 0; k < 8; k++) {
            c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;
          }
          table[n] = c;
        }
        return table;
      }
      var crcTable = makeTable();
      function crc32(crc, buf, len, pos) {
        var t = crcTable, end = pos + len;
        crc ^= -1;
        for (var i = pos; i < end; i++) {
          crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 255];
        }
        return crc ^ -1;
      }
      module.exports = crc32;
    }
  });

  // node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/messages.js
  var require_messages = __commonJS({
    "node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/messages.js"(exports, module) {
      "use strict";
      module.exports = {
        2: "need dictionary",
        /* Z_NEED_DICT       2  */
        1: "stream end",
        /* Z_STREAM_END      1  */
        0: "",
        /* Z_OK              0  */
        "-1": "file error",
        /* Z_ERRNO         (-1) */
        "-2": "stream error",
        /* Z_STREAM_ERROR  (-2) */
        "-3": "data error",
        /* Z_DATA_ERROR    (-3) */
        "-4": "insufficient memory",
        /* Z_MEM_ERROR     (-4) */
        "-5": "buffer error",
        /* Z_BUF_ERROR     (-5) */
        "-6": "incompatible version"
        /* Z_VERSION_ERROR (-6) */
      };
    }
  });

  // node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/deflate.js
  var require_deflate = __commonJS({
    "node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/deflate.js"(exports) {
      "use strict";
      var utils = require_common();
      var trees = require_trees();
      var adler32 = require_adler32();
      var crc32 = require_crc32();
      var msg = require_messages();
      var Z_NO_FLUSH = 0;
      var Z_PARTIAL_FLUSH = 1;
      var Z_FULL_FLUSH = 3;
      var Z_FINISH = 4;
      var Z_BLOCK = 5;
      var Z_OK = 0;
      var Z_STREAM_END = 1;
      var Z_STREAM_ERROR = -2;
      var Z_DATA_ERROR = -3;
      var Z_BUF_ERROR = -5;
      var Z_DEFAULT_COMPRESSION = -1;
      var Z_FILTERED = 1;
      var Z_HUFFMAN_ONLY = 2;
      var Z_RLE = 3;
      var Z_FIXED = 4;
      var Z_DEFAULT_STRATEGY = 0;
      var Z_UNKNOWN = 2;
      var Z_DEFLATED = 8;
      var MAX_MEM_LEVEL = 9;
      var MAX_WBITS = 15;
      var DEF_MEM_LEVEL = 8;
      var LENGTH_CODES = 29;
      var LITERALS = 256;
      var L_CODES = LITERALS + 1 + LENGTH_CODES;
      var D_CODES = 30;
      var BL_CODES = 19;
      var HEAP_SIZE = 2 * L_CODES + 1;
      var MAX_BITS = 15;
      var MIN_MATCH = 3;
      var MAX_MATCH = 258;
      var MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1;
      var PRESET_DICT = 32;
      var INIT_STATE = 42;
      var EXTRA_STATE = 69;
      var NAME_STATE = 73;
      var COMMENT_STATE = 91;
      var HCRC_STATE = 103;
      var BUSY_STATE = 113;
      var FINISH_STATE = 666;
      var BS_NEED_MORE = 1;
      var BS_BLOCK_DONE = 2;
      var BS_FINISH_STARTED = 3;
      var BS_FINISH_DONE = 4;
      var OS_CODE = 3;
      function err(strm, errorCode) {
        strm.msg = msg[errorCode];
        return errorCode;
      }
      function rank(f) {
        return (f << 1) - (f > 4 ? 9 : 0);
      }
      function zero(buf) {
        var len = buf.length;
        while (--len >= 0) {
          buf[len] = 0;
        }
      }
      function flush_pending(strm) {
        var s = strm.state;
        var len = s.pending;
        if (len > strm.avail_out) {
          len = strm.avail_out;
        }
        if (len === 0) {
          return;
        }
        utils.arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
        strm.next_out += len;
        s.pending_out += len;
        strm.total_out += len;
        strm.avail_out -= len;
        s.pending -= len;
        if (s.pending === 0) {
          s.pending_out = 0;
        }
      }
      function flush_block_only(s, last2) {
        trees._tr_flush_block(s, s.block_start >= 0 ? s.block_start : -1, s.strstart - s.block_start, last2);
        s.block_start = s.strstart;
        flush_pending(s.strm);
      }
      function put_byte(s, b) {
        s.pending_buf[s.pending++] = b;
      }
      function putShortMSB(s, b) {
        s.pending_buf[s.pending++] = b >>> 8 & 255;
        s.pending_buf[s.pending++] = b & 255;
      }
      function read_buf(strm, buf, start, size) {
        var len = strm.avail_in;
        if (len > size) {
          len = size;
        }
        if (len === 0) {
          return 0;
        }
        strm.avail_in -= len;
        utils.arraySet(buf, strm.input, strm.next_in, len, start);
        if (strm.state.wrap === 1) {
          strm.adler = adler32(strm.adler, buf, len, start);
        } else if (strm.state.wrap === 2) {
          strm.adler = crc32(strm.adler, buf, len, start);
        }
        strm.next_in += len;
        strm.total_in += len;
        return len;
      }
      function longest_match(s, cur_match) {
        var chain_length = s.max_chain_length;
        var scan = s.strstart;
        var match;
        var len;
        var best_len = s.prev_length;
        var nice_match = s.nice_match;
        var limit = s.strstart > s.w_size - MIN_LOOKAHEAD ? s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0;
        var _win = s.window;
        var wmask = s.w_mask;
        var prev = s.prev;
        var strend = s.strstart + MAX_MATCH;
        var scan_end1 = _win[scan + best_len - 1];
        var scan_end = _win[scan + best_len];
        if (s.prev_length >= s.good_match) {
          chain_length >>= 2;
        }
        if (nice_match > s.lookahead) {
          nice_match = s.lookahead;
        }
        do {
          match = cur_match;
          if (_win[match + best_len] !== scan_end || _win[match + best_len - 1] !== scan_end1 || _win[match] !== _win[scan] || _win[++match] !== _win[scan + 1]) {
            continue;
          }
          scan += 2;
          match++;
          do {
          } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && scan < strend);
          len = MAX_MATCH - (strend - scan);
          scan = strend - MAX_MATCH;
          if (len > best_len) {
            s.match_start = cur_match;
            best_len = len;
            if (len >= nice_match) {
              break;
            }
            scan_end1 = _win[scan + best_len - 1];
            scan_end = _win[scan + best_len];
          }
        } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);
        if (best_len <= s.lookahead) {
          return best_len;
        }
        return s.lookahead;
      }
      function fill_window(s) {
        var _w_size = s.w_size;
        var p, n, m, more, str;
        do {
          more = s.window_size - s.lookahead - s.strstart;
          if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
            utils.arraySet(s.window, s.window, _w_size, _w_size, 0);
            s.match_start -= _w_size;
            s.strstart -= _w_size;
            s.block_start -= _w_size;
            n = s.hash_size;
            p = n;
            do {
              m = s.head[--p];
              s.head[p] = m >= _w_size ? m - _w_size : 0;
            } while (--n);
            n = _w_size;
            p = n;
            do {
              m = s.prev[--p];
              s.prev[p] = m >= _w_size ? m - _w_size : 0;
            } while (--n);
            more += _w_size;
          }
          if (s.strm.avail_in === 0) {
            break;
          }
          n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
          s.lookahead += n;
          if (s.lookahead + s.insert >= MIN_MATCH) {
            str = s.strstart - s.insert;
            s.ins_h = s.window[str];
            s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + 1]) & s.hash_mask;
            while (s.insert) {
              s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;
              s.prev[str & s.w_mask] = s.head[s.ins_h];
              s.head[s.ins_h] = str;
              str++;
              s.insert--;
              if (s.lookahead + s.insert < MIN_MATCH) {
                break;
              }
            }
          }
        } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);
      }
      function deflate_stored(s, flush) {
        var max_block_size = 65535;
        if (max_block_size > s.pending_buf_size - 5) {
          max_block_size = s.pending_buf_size - 5;
        }
        for (; ; ) {
          if (s.lookahead <= 1) {
            fill_window(s);
            if (s.lookahead === 0 && flush === Z_NO_FLUSH) {
              return BS_NEED_MORE;
            }
            if (s.lookahead === 0) {
              break;
            }
          }
          s.strstart += s.lookahead;
          s.lookahead = 0;
          var max_start = s.block_start + max_block_size;
          if (s.strstart === 0 || s.strstart >= max_start) {
            s.lookahead = s.strstart - max_start;
            s.strstart = max_start;
            flush_block_only(s, false);
            if (s.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
          }
          if (s.strstart - s.block_start >= s.w_size - MIN_LOOKAHEAD) {
            flush_block_only(s, false);
            if (s.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
          }
        }
        s.insert = 0;
        if (flush === Z_FINISH) {
          flush_block_only(s, true);
          if (s.strm.avail_out === 0) {
            return BS_FINISH_STARTED;
          }
          return BS_FINISH_DONE;
        }
        if (s.strstart > s.block_start) {
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
        return BS_NEED_MORE;
      }
      function deflate_fast(s, flush) {
        var hash_head;
        var bflush;
        for (; ; ) {
          if (s.lookahead < MIN_LOOKAHEAD) {
            fill_window(s);
            if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
              return BS_NEED_MORE;
            }
            if (s.lookahead === 0) {
              break;
            }
          }
          hash_head = 0;
          if (s.lookahead >= MIN_MATCH) {
            s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
            hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = s.strstart;
          }
          if (hash_head !== 0 && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
            s.match_length = longest_match(s, hash_head);
          }
          if (s.match_length >= MIN_MATCH) {
            bflush = trees._tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);
            s.lookahead -= s.match_length;
            if (s.match_length <= s.max_lazy_match && s.lookahead >= MIN_MATCH) {
              s.match_length--;
              do {
                s.strstart++;
                s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
                hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
                s.head[s.ins_h] = s.strstart;
              } while (--s.match_length !== 0);
              s.strstart++;
            } else {
              s.strstart += s.match_length;
              s.match_length = 0;
              s.ins_h = s.window[s.strstart];
              s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + 1]) & s.hash_mask;
            }
          } else {
            bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
            s.lookahead--;
            s.strstart++;
          }
          if (bflush) {
            flush_block_only(s, false);
            if (s.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
          }
        }
        s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
        if (flush === Z_FINISH) {
          flush_block_only(s, true);
          if (s.strm.avail_out === 0) {
            return BS_FINISH_STARTED;
          }
          return BS_FINISH_DONE;
        }
        if (s.last_lit) {
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
        return BS_BLOCK_DONE;
      }
      function deflate_slow(s, flush) {
        var hash_head;
        var bflush;
        var max_insert;
        for (; ; ) {
          if (s.lookahead < MIN_LOOKAHEAD) {
            fill_window(s);
            if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
              return BS_NEED_MORE;
            }
            if (s.lookahead === 0) {
              break;
            }
          }
          hash_head = 0;
          if (s.lookahead >= MIN_MATCH) {
            s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
            hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = s.strstart;
          }
          s.prev_length = s.match_length;
          s.prev_match = s.match_start;
          s.match_length = MIN_MATCH - 1;
          if (hash_head !== 0 && s.prev_length < s.max_lazy_match && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
            s.match_length = longest_match(s, hash_head);
            if (s.match_length <= 5 && (s.strategy === Z_FILTERED || s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096)) {
              s.match_length = MIN_MATCH - 1;
            }
          }
          if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
            max_insert = s.strstart + s.lookahead - MIN_MATCH;
            bflush = trees._tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
            s.lookahead -= s.prev_length - 1;
            s.prev_length -= 2;
            do {
              if (++s.strstart <= max_insert) {
                s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
                hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
                s.head[s.ins_h] = s.strstart;
              }
            } while (--s.prev_length !== 0);
            s.match_available = 0;
            s.match_length = MIN_MATCH - 1;
            s.strstart++;
            if (bflush) {
              flush_block_only(s, false);
              if (s.strm.avail_out === 0) {
                return BS_NEED_MORE;
              }
            }
          } else if (s.match_available) {
            bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);
            if (bflush) {
              flush_block_only(s, false);
            }
            s.strstart++;
            s.lookahead--;
            if (s.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
          } else {
            s.match_available = 1;
            s.strstart++;
            s.lookahead--;
          }
        }
        if (s.match_available) {
          bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);
          s.match_available = 0;
        }
        s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
        if (flush === Z_FINISH) {
          flush_block_only(s, true);
          if (s.strm.avail_out === 0) {
            return BS_FINISH_STARTED;
          }
          return BS_FINISH_DONE;
        }
        if (s.last_lit) {
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
        return BS_BLOCK_DONE;
      }
      function deflate_rle(s, flush) {
        var bflush;
        var prev;
        var scan, strend;
        var _win = s.window;
        for (; ; ) {
          if (s.lookahead <= MAX_MATCH) {
            fill_window(s);
            if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) {
              return BS_NEED_MORE;
            }
            if (s.lookahead === 0) {
              break;
            }
          }
          s.match_length = 0;
          if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
            scan = s.strstart - 1;
            prev = _win[scan];
            if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
              strend = s.strstart + MAX_MATCH;
              do {
              } while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend);
              s.match_length = MAX_MATCH - (strend - scan);
              if (s.match_length > s.lookahead) {
                s.match_length = s.lookahead;
              }
            }
          }
          if (s.match_length >= MIN_MATCH) {
            bflush = trees._tr_tally(s, 1, s.match_length - MIN_MATCH);
            s.lookahead -= s.match_length;
            s.strstart += s.match_length;
            s.match_length = 0;
          } else {
            bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
            s.lookahead--;
            s.strstart++;
          }
          if (bflush) {
            flush_block_only(s, false);
            if (s.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
          }
        }
        s.insert = 0;
        if (flush === Z_FINISH) {
          flush_block_only(s, true);
          if (s.strm.avail_out === 0) {
            return BS_FINISH_STARTED;
          }
          return BS_FINISH_DONE;
        }
        if (s.last_lit) {
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
        return BS_BLOCK_DONE;
      }
      function deflate_huff(s, flush) {
        var bflush;
        for (; ; ) {
          if (s.lookahead === 0) {
            fill_window(s);
            if (s.lookahead === 0) {
              if (flush === Z_NO_FLUSH) {
                return BS_NEED_MORE;
              }
              break;
            }
          }
          s.match_length = 0;
          bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
          s.lookahead--;
          s.strstart++;
          if (bflush) {
            flush_block_only(s, false);
            if (s.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
          }
        }
        s.insert = 0;
        if (flush === Z_FINISH) {
          flush_block_only(s, true);
          if (s.strm.avail_out === 0) {
            return BS_FINISH_STARTED;
          }
          return BS_FINISH_DONE;
        }
        if (s.last_lit) {
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
        return BS_BLOCK_DONE;
      }
      function Config(good_length, max_lazy, nice_length, max_chain, func) {
        this.good_length = good_length;
        this.max_lazy = max_lazy;
        this.nice_length = nice_length;
        this.max_chain = max_chain;
        this.func = func;
      }
      var configuration_table;
      configuration_table = [
        /*      good lazy nice chain */
        new Config(0, 0, 0, 0, deflate_stored),
        /* 0 store only */
        new Config(4, 4, 8, 4, deflate_fast),
        /* 1 max speed, no lazy matches */
        new Config(4, 5, 16, 8, deflate_fast),
        /* 2 */
        new Config(4, 6, 32, 32, deflate_fast),
        /* 3 */
        new Config(4, 4, 16, 16, deflate_slow),
        /* 4 lazy matches */
        new Config(8, 16, 32, 32, deflate_slow),
        /* 5 */
        new Config(8, 16, 128, 128, deflate_slow),
        /* 6 */
        new Config(8, 32, 128, 256, deflate_slow),
        /* 7 */
        new Config(32, 128, 258, 1024, deflate_slow),
        /* 8 */
        new Config(32, 258, 258, 4096, deflate_slow)
        /* 9 max compression */
      ];
      function lm_init(s) {
        s.window_size = 2 * s.w_size;
        zero(s.head);
        s.max_lazy_match = configuration_table[s.level].max_lazy;
        s.good_match = configuration_table[s.level].good_length;
        s.nice_match = configuration_table[s.level].nice_length;
        s.max_chain_length = configuration_table[s.level].max_chain;
        s.strstart = 0;
        s.block_start = 0;
        s.lookahead = 0;
        s.insert = 0;
        s.match_length = s.prev_length = MIN_MATCH - 1;
        s.match_available = 0;
        s.ins_h = 0;
      }
      function DeflateState() {
        this.strm = null;
        this.status = 0;
        this.pending_buf = null;
        this.pending_buf_size = 0;
        this.pending_out = 0;
        this.pending = 0;
        this.wrap = 0;
        this.gzhead = null;
        this.gzindex = 0;
        this.method = Z_DEFLATED;
        this.last_flush = -1;
        this.w_size = 0;
        this.w_bits = 0;
        this.w_mask = 0;
        this.window = null;
        this.window_size = 0;
        this.prev = null;
        this.head = null;
        this.ins_h = 0;
        this.hash_size = 0;
        this.hash_bits = 0;
        this.hash_mask = 0;
        this.hash_shift = 0;
        this.block_start = 0;
        this.match_length = 0;
        this.prev_match = 0;
        this.match_available = 0;
        this.strstart = 0;
        this.match_start = 0;
        this.lookahead = 0;
        this.prev_length = 0;
        this.max_chain_length = 0;
        this.max_lazy_match = 0;
        this.level = 0;
        this.strategy = 0;
        this.good_match = 0;
        this.nice_match = 0;
        this.dyn_ltree = new utils.Buf16(HEAP_SIZE * 2);
        this.dyn_dtree = new utils.Buf16((2 * D_CODES + 1) * 2);
        this.bl_tree = new utils.Buf16((2 * BL_CODES + 1) * 2);
        zero(this.dyn_ltree);
        zero(this.dyn_dtree);
        zero(this.bl_tree);
        this.l_desc = null;
        this.d_desc = null;
        this.bl_desc = null;
        this.bl_count = new utils.Buf16(MAX_BITS + 1);
        this.heap = new utils.Buf16(2 * L_CODES + 1);
        zero(this.heap);
        this.heap_len = 0;
        this.heap_max = 0;
        this.depth = new utils.Buf16(2 * L_CODES + 1);
        zero(this.depth);
        this.l_buf = 0;
        this.lit_bufsize = 0;
        this.last_lit = 0;
        this.d_buf = 0;
        this.opt_len = 0;
        this.static_len = 0;
        this.matches = 0;
        this.insert = 0;
        this.bi_buf = 0;
        this.bi_valid = 0;
      }
      function deflateResetKeep(strm) {
        var s;
        if (!strm || !strm.state) {
          return err(strm, Z_STREAM_ERROR);
        }
        strm.total_in = strm.total_out = 0;
        strm.data_type = Z_UNKNOWN;
        s = strm.state;
        s.pending = 0;
        s.pending_out = 0;
        if (s.wrap < 0) {
          s.wrap = -s.wrap;
        }
        s.status = s.wrap ? INIT_STATE : BUSY_STATE;
        strm.adler = s.wrap === 2 ? 0 : 1;
        s.last_flush = Z_NO_FLUSH;
        trees._tr_init(s);
        return Z_OK;
      }
      function deflateReset(strm) {
        var ret = deflateResetKeep(strm);
        if (ret === Z_OK) {
          lm_init(strm.state);
        }
        return ret;
      }
      function deflateSetHeader(strm, head) {
        if (!strm || !strm.state) {
          return Z_STREAM_ERROR;
        }
        if (strm.state.wrap !== 2) {
          return Z_STREAM_ERROR;
        }
        strm.state.gzhead = head;
        return Z_OK;
      }
      function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
        if (!strm) {
          return Z_STREAM_ERROR;
        }
        var wrap = 1;
        if (level === Z_DEFAULT_COMPRESSION) {
          level = 6;
        }
        if (windowBits < 0) {
          wrap = 0;
          windowBits = -windowBits;
        } else if (windowBits > 15) {
          wrap = 2;
          windowBits -= 16;
        }
        if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED) {
          return err(strm, Z_STREAM_ERROR);
        }
        if (windowBits === 8) {
          windowBits = 9;
        }
        var s = new DeflateState();
        strm.state = s;
        s.strm = strm;
        s.wrap = wrap;
        s.gzhead = null;
        s.w_bits = windowBits;
        s.w_size = 1 << s.w_bits;
        s.w_mask = s.w_size - 1;
        s.hash_bits = memLevel + 7;
        s.hash_size = 1 << s.hash_bits;
        s.hash_mask = s.hash_size - 1;
        s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);
        s.window = new utils.Buf8(s.w_size * 2);
        s.head = new utils.Buf16(s.hash_size);
        s.prev = new utils.Buf16(s.w_size);
        s.lit_bufsize = 1 << memLevel + 6;
        s.pending_buf_size = s.lit_bufsize * 4;
        s.pending_buf = new utils.Buf8(s.pending_buf_size);
        s.d_buf = 1 * s.lit_bufsize;
        s.l_buf = (1 + 2) * s.lit_bufsize;
        s.level = level;
        s.strategy = strategy;
        s.method = method;
        return deflateReset(strm);
      }
      function deflateInit(strm, level) {
        return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
      }
      function deflate(strm, flush) {
        var old_flush, s;
        var beg, val;
        if (!strm || !strm.state || flush > Z_BLOCK || flush < 0) {
          return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
        }
        s = strm.state;
        if (!strm.output || !strm.input && strm.avail_in !== 0 || s.status === FINISH_STATE && flush !== Z_FINISH) {
          return err(strm, strm.avail_out === 0 ? Z_BUF_ERROR : Z_STREAM_ERROR);
        }
        s.strm = strm;
        old_flush = s.last_flush;
        s.last_flush = flush;
        if (s.status === INIT_STATE) {
          if (s.wrap === 2) {
            strm.adler = 0;
            put_byte(s, 31);
            put_byte(s, 139);
            put_byte(s, 8);
            if (!s.gzhead) {
              put_byte(s, 0);
              put_byte(s, 0);
              put_byte(s, 0);
              put_byte(s, 0);
              put_byte(s, 0);
              put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
              put_byte(s, OS_CODE);
              s.status = BUSY_STATE;
            } else {
              put_byte(
                s,
                (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (!s.gzhead.extra ? 0 : 4) + (!s.gzhead.name ? 0 : 8) + (!s.gzhead.comment ? 0 : 16)
              );
              put_byte(s, s.gzhead.time & 255);
              put_byte(s, s.gzhead.time >> 8 & 255);
              put_byte(s, s.gzhead.time >> 16 & 255);
              put_byte(s, s.gzhead.time >> 24 & 255);
              put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
              put_byte(s, s.gzhead.os & 255);
              if (s.gzhead.extra && s.gzhead.extra.length) {
                put_byte(s, s.gzhead.extra.length & 255);
                put_byte(s, s.gzhead.extra.length >> 8 & 255);
              }
              if (s.gzhead.hcrc) {
                strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
              }
              s.gzindex = 0;
              s.status = EXTRA_STATE;
            }
          } else {
            var header = Z_DEFLATED + (s.w_bits - 8 << 4) << 8;
            var level_flags = -1;
            if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
              level_flags = 0;
            } else if (s.level < 6) {
              level_flags = 1;
            } else if (s.level === 6) {
              level_flags = 2;
            } else {
              level_flags = 3;
            }
            header |= level_flags << 6;
            if (s.strstart !== 0) {
              header |= PRESET_DICT;
            }
            header += 31 - header % 31;
            s.status = BUSY_STATE;
            putShortMSB(s, header);
            if (s.strstart !== 0) {
              putShortMSB(s, strm.adler >>> 16);
              putShortMSB(s, strm.adler & 65535);
            }
            strm.adler = 1;
          }
        }
        if (s.status === EXTRA_STATE) {
          if (s.gzhead.extra) {
            beg = s.pending;
            while (s.gzindex < (s.gzhead.extra.length & 65535)) {
              if (s.pending === s.pending_buf_size) {
                if (s.gzhead.hcrc && s.pending > beg) {
                  strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
                }
                flush_pending(strm);
                beg = s.pending;
                if (s.pending === s.pending_buf_size) {
                  break;
                }
              }
              put_byte(s, s.gzhead.extra[s.gzindex] & 255);
              s.gzindex++;
            }
            if (s.gzhead.hcrc && s.pending > beg) {
              strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
            }
            if (s.gzindex === s.gzhead.extra.length) {
              s.gzindex = 0;
              s.status = NAME_STATE;
            }
          } else {
            s.status = NAME_STATE;
          }
        }
        if (s.status === NAME_STATE) {
          if (s.gzhead.name) {
            beg = s.pending;
            do {
              if (s.pending === s.pending_buf_size) {
                if (s.gzhead.hcrc && s.pending > beg) {
                  strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
                }
                flush_pending(strm);
                beg = s.pending;
                if (s.pending === s.pending_buf_size) {
                  val = 1;
                  break;
                }
              }
              if (s.gzindex < s.gzhead.name.length) {
                val = s.gzhead.name.charCodeAt(s.gzindex++) & 255;
              } else {
                val = 0;
              }
              put_byte(s, val);
            } while (val !== 0);
            if (s.gzhead.hcrc && s.pending > beg) {
              strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
            }
            if (val === 0) {
              s.gzindex = 0;
              s.status = COMMENT_STATE;
            }
          } else {
            s.status = COMMENT_STATE;
          }
        }
        if (s.status === COMMENT_STATE) {
          if (s.gzhead.comment) {
            beg = s.pending;
            do {
              if (s.pending === s.pending_buf_size) {
                if (s.gzhead.hcrc && s.pending > beg) {
                  strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
                }
                flush_pending(strm);
                beg = s.pending;
                if (s.pending === s.pending_buf_size) {
                  val = 1;
                  break;
                }
              }
              if (s.gzindex < s.gzhead.comment.length) {
                val = s.gzhead.comment.charCodeAt(s.gzindex++) & 255;
              } else {
                val = 0;
              }
              put_byte(s, val);
            } while (val !== 0);
            if (s.gzhead.hcrc && s.pending > beg) {
              strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
            }
            if (val === 0) {
              s.status = HCRC_STATE;
            }
          } else {
            s.status = HCRC_STATE;
          }
        }
        if (s.status === HCRC_STATE) {
          if (s.gzhead.hcrc) {
            if (s.pending + 2 > s.pending_buf_size) {
              flush_pending(strm);
            }
            if (s.pending + 2 <= s.pending_buf_size) {
              put_byte(s, strm.adler & 255);
              put_byte(s, strm.adler >> 8 & 255);
              strm.adler = 0;
              s.status = BUSY_STATE;
            }
          } else {
            s.status = BUSY_STATE;
          }
        }
        if (s.pending !== 0) {
          flush_pending(strm);
          if (strm.avail_out === 0) {
            s.last_flush = -1;
            return Z_OK;
          }
        } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH) {
          return err(strm, Z_BUF_ERROR);
        }
        if (s.status === FINISH_STATE && strm.avail_in !== 0) {
          return err(strm, Z_BUF_ERROR);
        }
        if (strm.avail_in !== 0 || s.lookahead !== 0 || flush !== Z_NO_FLUSH && s.status !== FINISH_STATE) {
          var bstate = s.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s, flush) : s.strategy === Z_RLE ? deflate_rle(s, flush) : configuration_table[s.level].func(s, flush);
          if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
            s.status = FINISH_STATE;
          }
          if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
            if (strm.avail_out === 0) {
              s.last_flush = -1;
            }
            return Z_OK;
          }
          if (bstate === BS_BLOCK_DONE) {
            if (flush === Z_PARTIAL_FLUSH) {
              trees._tr_align(s);
            } else if (flush !== Z_BLOCK) {
              trees._tr_stored_block(s, 0, 0, false);
              if (flush === Z_FULL_FLUSH) {
                zero(s.head);
                if (s.lookahead === 0) {
                  s.strstart = 0;
                  s.block_start = 0;
                  s.insert = 0;
                }
              }
            }
            flush_pending(strm);
            if (strm.avail_out === 0) {
              s.last_flush = -1;
              return Z_OK;
            }
          }
        }
        if (flush !== Z_FINISH) {
          return Z_OK;
        }
        if (s.wrap <= 0) {
          return Z_STREAM_END;
        }
        if (s.wrap === 2) {
          put_byte(s, strm.adler & 255);
          put_byte(s, strm.adler >> 8 & 255);
          put_byte(s, strm.adler >> 16 & 255);
          put_byte(s, strm.adler >> 24 & 255);
          put_byte(s, strm.total_in & 255);
          put_byte(s, strm.total_in >> 8 & 255);
          put_byte(s, strm.total_in >> 16 & 255);
          put_byte(s, strm.total_in >> 24 & 255);
        } else {
          putShortMSB(s, strm.adler >>> 16);
          putShortMSB(s, strm.adler & 65535);
        }
        flush_pending(strm);
        if (s.wrap > 0) {
          s.wrap = -s.wrap;
        }
        return s.pending !== 0 ? Z_OK : Z_STREAM_END;
      }
      function deflateEnd(strm) {
        var status;
        if (!strm || !strm.state) {
          return Z_STREAM_ERROR;
        }
        status = strm.state.status;
        if (status !== INIT_STATE && status !== EXTRA_STATE && status !== NAME_STATE && status !== COMMENT_STATE && status !== HCRC_STATE && status !== BUSY_STATE && status !== FINISH_STATE) {
          return err(strm, Z_STREAM_ERROR);
        }
        strm.state = null;
        return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
      }
      function deflateSetDictionary(strm, dictionary) {
        var dictLength = dictionary.length;
        var s;
        var str, n;
        var wrap;
        var avail;
        var next;
        var input;
        var tmpDict;
        if (!strm || !strm.state) {
          return Z_STREAM_ERROR;
        }
        s = strm.state;
        wrap = s.wrap;
        if (wrap === 2 || wrap === 1 && s.status !== INIT_STATE || s.lookahead) {
          return Z_STREAM_ERROR;
        }
        if (wrap === 1) {
          strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
        }
        s.wrap = 0;
        if (dictLength >= s.w_size) {
          if (wrap === 0) {
            zero(s.head);
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
          }
          tmpDict = new utils.Buf8(s.w_size);
          utils.arraySet(tmpDict, dictionary, dictLength - s.w_size, s.w_size, 0);
          dictionary = tmpDict;
          dictLength = s.w_size;
        }
        avail = strm.avail_in;
        next = strm.next_in;
        input = strm.input;
        strm.avail_in = dictLength;
        strm.next_in = 0;
        strm.input = dictionary;
        fill_window(s);
        while (s.lookahead >= MIN_MATCH) {
          str = s.strstart;
          n = s.lookahead - (MIN_MATCH - 1);
          do {
            s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;
            s.prev[str & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = str;
            str++;
          } while (--n);
          s.strstart = str;
          s.lookahead = MIN_MATCH - 1;
          fill_window(s);
        }
        s.strstart += s.lookahead;
        s.block_start = s.strstart;
        s.insert = s.lookahead;
        s.lookahead = 0;
        s.match_length = s.prev_length = MIN_MATCH - 1;
        s.match_available = 0;
        strm.next_in = next;
        strm.input = input;
        strm.avail_in = avail;
        s.wrap = wrap;
        return Z_OK;
      }
      exports.deflateInit = deflateInit;
      exports.deflateInit2 = deflateInit2;
      exports.deflateReset = deflateReset;
      exports.deflateResetKeep = deflateResetKeep;
      exports.deflateSetHeader = deflateSetHeader;
      exports.deflate = deflate;
      exports.deflateEnd = deflateEnd;
      exports.deflateSetDictionary = deflateSetDictionary;
      exports.deflateInfo = "pako deflate (from Nodeca project)";
    }
  });

  // node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/utils/strings.js
  var require_strings = __commonJS({
    "node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/utils/strings.js"(exports) {
      "use strict";
      var utils = require_common();
      var STR_APPLY_OK = true;
      var STR_APPLY_UIA_OK = true;
      try {
        String.fromCharCode.apply(null, [0]);
      } catch (__) {
        STR_APPLY_OK = false;
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch (__) {
        STR_APPLY_UIA_OK = false;
      }
      var _utf8len = new utils.Buf8(256);
      for (q = 0; q < 256; q++) {
        _utf8len[q] = q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1;
      }
      var q;
      _utf8len[254] = _utf8len[254] = 1;
      exports.string2buf = function(str) {
        var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;
        for (m_pos = 0; m_pos < str_len; m_pos++) {
          c = str.charCodeAt(m_pos);
          if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
            c2 = str.charCodeAt(m_pos + 1);
            if ((c2 & 64512) === 56320) {
              c = 65536 + (c - 55296 << 10) + (c2 - 56320);
              m_pos++;
            }
          }
          buf_len += c < 128 ? 1 : c < 2048 ? 2 : c < 65536 ? 3 : 4;
        }
        buf = new utils.Buf8(buf_len);
        for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
          c = str.charCodeAt(m_pos);
          if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
            c2 = str.charCodeAt(m_pos + 1);
            if ((c2 & 64512) === 56320) {
              c = 65536 + (c - 55296 << 10) + (c2 - 56320);
              m_pos++;
            }
          }
          if (c < 128) {
            buf[i++] = c;
          } else if (c < 2048) {
            buf[i++] = 192 | c >>> 6;
            buf[i++] = 128 | c & 63;
          } else if (c < 65536) {
            buf[i++] = 224 | c >>> 12;
            buf[i++] = 128 | c >>> 6 & 63;
            buf[i++] = 128 | c & 63;
          } else {
            buf[i++] = 240 | c >>> 18;
            buf[i++] = 128 | c >>> 12 & 63;
            buf[i++] = 128 | c >>> 6 & 63;
            buf[i++] = 128 | c & 63;
          }
        }
        return buf;
      };
      function buf2binstring(buf, len) {
        if (len < 65534) {
          if (buf.subarray && STR_APPLY_UIA_OK || !buf.subarray && STR_APPLY_OK) {
            return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));
          }
        }
        var result = "";
        for (var i = 0; i < len; i++) {
          result += String.fromCharCode(buf[i]);
        }
        return result;
      }
      exports.buf2binstring = function(buf) {
        return buf2binstring(buf, buf.length);
      };
      exports.binstring2buf = function(str) {
        var buf = new utils.Buf8(str.length);
        for (var i = 0, len = buf.length; i < len; i++) {
          buf[i] = str.charCodeAt(i);
        }
        return buf;
      };
      exports.buf2string = function(buf, max) {
        var i, out, c, c_len;
        var len = max || buf.length;
        var utf16buf = new Array(len * 2);
        for (out = 0, i = 0; i < len; ) {
          c = buf[i++];
          if (c < 128) {
            utf16buf[out++] = c;
            continue;
          }
          c_len = _utf8len[c];
          if (c_len > 4) {
            utf16buf[out++] = 65533;
            i += c_len - 1;
            continue;
          }
          c &= c_len === 2 ? 31 : c_len === 3 ? 15 : 7;
          while (c_len > 1 && i < len) {
            c = c << 6 | buf[i++] & 63;
            c_len--;
          }
          if (c_len > 1) {
            utf16buf[out++] = 65533;
            continue;
          }
          if (c < 65536) {
            utf16buf[out++] = c;
          } else {
            c -= 65536;
            utf16buf[out++] = 55296 | c >> 10 & 1023;
            utf16buf[out++] = 56320 | c & 1023;
          }
        }
        return buf2binstring(utf16buf, out);
      };
      exports.utf8border = function(buf, max) {
        var pos;
        max = max || buf.length;
        if (max > buf.length) {
          max = buf.length;
        }
        pos = max - 1;
        while (pos >= 0 && (buf[pos] & 192) === 128) {
          pos--;
        }
        if (pos < 0) {
          return max;
        }
        if (pos === 0) {
          return max;
        }
        return pos + _utf8len[buf[pos]] > max ? pos : max;
      };
    }
  });

  // node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/zstream.js
  var require_zstream = __commonJS({
    "node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/zstream.js"(exports, module) {
      "use strict";
      function ZStream() {
        this.input = null;
        this.next_in = 0;
        this.avail_in = 0;
        this.total_in = 0;
        this.output = null;
        this.next_out = 0;
        this.avail_out = 0;
        this.total_out = 0;
        this.msg = "";
        this.state = null;
        this.data_type = 2;
        this.adler = 0;
      }
      module.exports = ZStream;
    }
  });

  // node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/deflate.js
  var require_deflate2 = __commonJS({
    "node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/deflate.js"(exports) {
      "use strict";
      var zlib_deflate = require_deflate();
      var utils = require_common();
      var strings = require_strings();
      var msg = require_messages();
      var ZStream = require_zstream();
      var toString = Object.prototype.toString;
      var Z_NO_FLUSH = 0;
      var Z_FINISH = 4;
      var Z_OK = 0;
      var Z_STREAM_END = 1;
      var Z_SYNC_FLUSH = 2;
      var Z_DEFAULT_COMPRESSION = -1;
      var Z_DEFAULT_STRATEGY = 0;
      var Z_DEFLATED = 8;
      function Deflate(options) {
        if (!(this instanceof Deflate)) return new Deflate(options);
        this.options = utils.assign({
          level: Z_DEFAULT_COMPRESSION,
          method: Z_DEFLATED,
          chunkSize: 16384,
          windowBits: 15,
          memLevel: 8,
          strategy: Z_DEFAULT_STRATEGY,
          to: ""
        }, options || {});
        var opt = this.options;
        if (opt.raw && opt.windowBits > 0) {
          opt.windowBits = -opt.windowBits;
        } else if (opt.gzip && opt.windowBits > 0 && opt.windowBits < 16) {
          opt.windowBits += 16;
        }
        this.err = 0;
        this.msg = "";
        this.ended = false;
        this.chunks = [];
        this.strm = new ZStream();
        this.strm.avail_out = 0;
        var status = zlib_deflate.deflateInit2(
          this.strm,
          opt.level,
          opt.method,
          opt.windowBits,
          opt.memLevel,
          opt.strategy
        );
        if (status !== Z_OK) {
          throw new Error(msg[status]);
        }
        if (opt.header) {
          zlib_deflate.deflateSetHeader(this.strm, opt.header);
        }
        if (opt.dictionary) {
          var dict;
          if (typeof opt.dictionary === "string") {
            dict = strings.string2buf(opt.dictionary);
          } else if (toString.call(opt.dictionary) === "[object ArrayBuffer]") {
            dict = new Uint8Array(opt.dictionary);
          } else {
            dict = opt.dictionary;
          }
          status = zlib_deflate.deflateSetDictionary(this.strm, dict);
          if (status !== Z_OK) {
            throw new Error(msg[status]);
          }
          this._dict_set = true;
        }
      }
      Deflate.prototype.push = function(data, mode) {
        var strm = this.strm;
        var chunkSize = this.options.chunkSize;
        var status, _mode;
        if (this.ended) {
          return false;
        }
        _mode = mode === ~~mode ? mode : mode === true ? Z_FINISH : Z_NO_FLUSH;
        if (typeof data === "string") {
          strm.input = strings.string2buf(data);
        } else if (toString.call(data) === "[object ArrayBuffer]") {
          strm.input = new Uint8Array(data);
        } else {
          strm.input = data;
        }
        strm.next_in = 0;
        strm.avail_in = strm.input.length;
        do {
          if (strm.avail_out === 0) {
            strm.output = new utils.Buf8(chunkSize);
            strm.next_out = 0;
            strm.avail_out = chunkSize;
          }
          status = zlib_deflate.deflate(strm, _mode);
          if (status !== Z_STREAM_END && status !== Z_OK) {
            this.onEnd(status);
            this.ended = true;
            return false;
          }
          if (strm.avail_out === 0 || strm.avail_in === 0 && (_mode === Z_FINISH || _mode === Z_SYNC_FLUSH)) {
            if (this.options.to === "string") {
              this.onData(strings.buf2binstring(utils.shrinkBuf(strm.output, strm.next_out)));
            } else {
              this.onData(utils.shrinkBuf(strm.output, strm.next_out));
            }
          }
        } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== Z_STREAM_END);
        if (_mode === Z_FINISH) {
          status = zlib_deflate.deflateEnd(this.strm);
          this.onEnd(status);
          this.ended = true;
          return status === Z_OK;
        }
        if (_mode === Z_SYNC_FLUSH) {
          this.onEnd(Z_OK);
          strm.avail_out = 0;
          return true;
        }
        return true;
      };
      Deflate.prototype.onData = function(chunk) {
        this.chunks.push(chunk);
      };
      Deflate.prototype.onEnd = function(status) {
        if (status === Z_OK) {
          if (this.options.to === "string") {
            this.result = this.chunks.join("");
          } else {
            this.result = utils.flattenChunks(this.chunks);
          }
        }
        this.chunks = [];
        this.err = status;
        this.msg = this.strm.msg;
      };
      function deflate(input, options) {
        var deflator = new Deflate(options);
        deflator.push(input, true);
        if (deflator.err) {
          throw deflator.msg || msg[deflator.err];
        }
        return deflator.result;
      }
      function deflateRaw(input, options) {
        options = options || {};
        options.raw = true;
        return deflate(input, options);
      }
      function gzip(input, options) {
        options = options || {};
        options.gzip = true;
        return deflate(input, options);
      }
      exports.Deflate = Deflate;
      exports.deflate = deflate;
      exports.deflateRaw = deflateRaw;
      exports.gzip = gzip;
    }
  });

  // node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/inffast.js
  var require_inffast = __commonJS({
    "node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/inffast.js"(exports, module) {
      "use strict";
      var BAD = 30;
      var TYPE = 12;
      module.exports = function inflate_fast(strm, start) {
        var state;
        var _in;
        var last2;
        var _out;
        var beg;
        var end;
        var dmax;
        var wsize;
        var whave;
        var wnext;
        var s_window;
        var hold;
        var bits;
        var lcode;
        var dcode;
        var lmask;
        var dmask;
        var here;
        var op;
        var len;
        var dist;
        var from;
        var from_source;
        var input, output;
        state = strm.state;
        _in = strm.next_in;
        input = strm.input;
        last2 = _in + (strm.avail_in - 5);
        _out = strm.next_out;
        output = strm.output;
        beg = _out - (start - strm.avail_out);
        end = _out + (strm.avail_out - 257);
        dmax = state.dmax;
        wsize = state.wsize;
        whave = state.whave;
        wnext = state.wnext;
        s_window = state.window;
        hold = state.hold;
        bits = state.bits;
        lcode = state.lencode;
        dcode = state.distcode;
        lmask = (1 << state.lenbits) - 1;
        dmask = (1 << state.distbits) - 1;
        top:
          do {
            if (bits < 15) {
              hold += input[_in++] << bits;
              bits += 8;
              hold += input[_in++] << bits;
              bits += 8;
            }
            here = lcode[hold & lmask];
            dolen:
              for (; ; ) {
                op = here >>> 24;
                hold >>>= op;
                bits -= op;
                op = here >>> 16 & 255;
                if (op === 0) {
                  output[_out++] = here & 65535;
                } else if (op & 16) {
                  len = here & 65535;
                  op &= 15;
                  if (op) {
                    if (bits < op) {
                      hold += input[_in++] << bits;
                      bits += 8;
                    }
                    len += hold & (1 << op) - 1;
                    hold >>>= op;
                    bits -= op;
                  }
                  if (bits < 15) {
                    hold += input[_in++] << bits;
                    bits += 8;
                    hold += input[_in++] << bits;
                    bits += 8;
                  }
                  here = dcode[hold & dmask];
                  dodist:
                    for (; ; ) {
                      op = here >>> 24;
                      hold >>>= op;
                      bits -= op;
                      op = here >>> 16 & 255;
                      if (op & 16) {
                        dist = here & 65535;
                        op &= 15;
                        if (bits < op) {
                          hold += input[_in++] << bits;
                          bits += 8;
                          if (bits < op) {
                            hold += input[_in++] << bits;
                            bits += 8;
                          }
                        }
                        dist += hold & (1 << op) - 1;
                        if (dist > dmax) {
                          strm.msg = "invalid distance too far back";
                          state.mode = BAD;
                          break top;
                        }
                        hold >>>= op;
                        bits -= op;
                        op = _out - beg;
                        if (dist > op) {
                          op = dist - op;
                          if (op > whave) {
                            if (state.sane) {
                              strm.msg = "invalid distance too far back";
                              state.mode = BAD;
                              break top;
                            }
                          }
                          from = 0;
                          from_source = s_window;
                          if (wnext === 0) {
                            from += wsize - op;
                            if (op < len) {
                              len -= op;
                              do {
                                output[_out++] = s_window[from++];
                              } while (--op);
                              from = _out - dist;
                              from_source = output;
                            }
                          } else if (wnext < op) {
                            from += wsize + wnext - op;
                            op -= wnext;
                            if (op < len) {
                              len -= op;
                              do {
                                output[_out++] = s_window[from++];
                              } while (--op);
                              from = 0;
                              if (wnext < len) {
                                op = wnext;
                                len -= op;
                                do {
                                  output[_out++] = s_window[from++];
                                } while (--op);
                                from = _out - dist;
                                from_source = output;
                              }
                            }
                          } else {
                            from += wnext - op;
                            if (op < len) {
                              len -= op;
                              do {
                                output[_out++] = s_window[from++];
                              } while (--op);
                              from = _out - dist;
                              from_source = output;
                            }
                          }
                          while (len > 2) {
                            output[_out++] = from_source[from++];
                            output[_out++] = from_source[from++];
                            output[_out++] = from_source[from++];
                            len -= 3;
                          }
                          if (len) {
                            output[_out++] = from_source[from++];
                            if (len > 1) {
                              output[_out++] = from_source[from++];
                            }
                          }
                        } else {
                          from = _out - dist;
                          do {
                            output[_out++] = output[from++];
                            output[_out++] = output[from++];
                            output[_out++] = output[from++];
                            len -= 3;
                          } while (len > 2);
                          if (len) {
                            output[_out++] = output[from++];
                            if (len > 1) {
                              output[_out++] = output[from++];
                            }
                          }
                        }
                      } else if ((op & 64) === 0) {
                        here = dcode[(here & 65535) + (hold & (1 << op) - 1)];
                        continue dodist;
                      } else {
                        strm.msg = "invalid distance code";
                        state.mode = BAD;
                        break top;
                      }
                      break;
                    }
                } else if ((op & 64) === 0) {
                  here = lcode[(here & 65535) + (hold & (1 << op) - 1)];
                  continue dolen;
                } else if (op & 32) {
                  state.mode = TYPE;
                  break top;
                } else {
                  strm.msg = "invalid literal/length code";
                  state.mode = BAD;
                  break top;
                }
                break;
              }
          } while (_in < last2 && _out < end);
        len = bits >> 3;
        _in -= len;
        bits -= len << 3;
        hold &= (1 << bits) - 1;
        strm.next_in = _in;
        strm.next_out = _out;
        strm.avail_in = _in < last2 ? 5 + (last2 - _in) : 5 - (_in - last2);
        strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
        state.hold = hold;
        state.bits = bits;
        return;
      };
    }
  });

  // node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/inftrees.js
  var require_inftrees = __commonJS({
    "node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/inftrees.js"(exports, module) {
      "use strict";
      var utils = require_common();
      var MAXBITS = 15;
      var ENOUGH_LENS = 852;
      var ENOUGH_DISTS = 592;
      var CODES = 0;
      var LENS = 1;
      var DISTS = 2;
      var lbase = [
        /* Length codes 257..285 base */
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        13,
        15,
        17,
        19,
        23,
        27,
        31,
        35,
        43,
        51,
        59,
        67,
        83,
        99,
        115,
        131,
        163,
        195,
        227,
        258,
        0,
        0
      ];
      var lext = [
        /* Length codes 257..285 extra */
        16,
        16,
        16,
        16,
        16,
        16,
        16,
        16,
        17,
        17,
        17,
        17,
        18,
        18,
        18,
        18,
        19,
        19,
        19,
        19,
        20,
        20,
        20,
        20,
        21,
        21,
        21,
        21,
        16,
        72,
        78
      ];
      var dbase = [
        /* Distance codes 0..29 base */
        1,
        2,
        3,
        4,
        5,
        7,
        9,
        13,
        17,
        25,
        33,
        49,
        65,
        97,
        129,
        193,
        257,
        385,
        513,
        769,
        1025,
        1537,
        2049,
        3073,
        4097,
        6145,
        8193,
        12289,
        16385,
        24577,
        0,
        0
      ];
      var dext = [
        /* Distance codes 0..29 extra */
        16,
        16,
        16,
        16,
        17,
        17,
        18,
        18,
        19,
        19,
        20,
        20,
        21,
        21,
        22,
        22,
        23,
        23,
        24,
        24,
        25,
        25,
        26,
        26,
        27,
        27,
        28,
        28,
        29,
        29,
        64,
        64
      ];
      module.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts) {
        var bits = opts.bits;
        var len = 0;
        var sym = 0;
        var min = 0, max = 0;
        var root = 0;
        var curr = 0;
        var drop = 0;
        var left = 0;
        var used = 0;
        var huff = 0;
        var incr;
        var fill2;
        var low;
        var mask;
        var next;
        var base = null;
        var base_index = 0;
        var end;
        var count = new utils.Buf16(MAXBITS + 1);
        var offs = new utils.Buf16(MAXBITS + 1);
        var extra = null;
        var extra_index = 0;
        var here_bits, here_op, here_val;
        for (len = 0; len <= MAXBITS; len++) {
          count[len] = 0;
        }
        for (sym = 0; sym < codes; sym++) {
          count[lens[lens_index + sym]]++;
        }
        root = bits;
        for (max = MAXBITS; max >= 1; max--) {
          if (count[max] !== 0) {
            break;
          }
        }
        if (root > max) {
          root = max;
        }
        if (max === 0) {
          table[table_index++] = 1 << 24 | 64 << 16 | 0;
          table[table_index++] = 1 << 24 | 64 << 16 | 0;
          opts.bits = 1;
          return 0;
        }
        for (min = 1; min < max; min++) {
          if (count[min] !== 0) {
            break;
          }
        }
        if (root < min) {
          root = min;
        }
        left = 1;
        for (len = 1; len <= MAXBITS; len++) {
          left <<= 1;
          left -= count[len];
          if (left < 0) {
            return -1;
          }
        }
        if (left > 0 && (type === CODES || max !== 1)) {
          return -1;
        }
        offs[1] = 0;
        for (len = 1; len < MAXBITS; len++) {
          offs[len + 1] = offs[len] + count[len];
        }
        for (sym = 0; sym < codes; sym++) {
          if (lens[lens_index + sym] !== 0) {
            work[offs[lens[lens_index + sym]]++] = sym;
          }
        }
        if (type === CODES) {
          base = extra = work;
          end = 19;
        } else if (type === LENS) {
          base = lbase;
          base_index -= 257;
          extra = lext;
          extra_index -= 257;
          end = 256;
        } else {
          base = dbase;
          extra = dext;
          end = -1;
        }
        huff = 0;
        sym = 0;
        len = min;
        next = table_index;
        curr = root;
        drop = 0;
        low = -1;
        used = 1 << root;
        mask = used - 1;
        if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
          return 1;
        }
        for (; ; ) {
          here_bits = len - drop;
          if (work[sym] < end) {
            here_op = 0;
            here_val = work[sym];
          } else if (work[sym] > end) {
            here_op = extra[extra_index + work[sym]];
            here_val = base[base_index + work[sym]];
          } else {
            here_op = 32 + 64;
            here_val = 0;
          }
          incr = 1 << len - drop;
          fill2 = 1 << curr;
          min = fill2;
          do {
            fill2 -= incr;
            table[next + (huff >> drop) + fill2] = here_bits << 24 | here_op << 16 | here_val | 0;
          } while (fill2 !== 0);
          incr = 1 << len - 1;
          while (huff & incr) {
            incr >>= 1;
          }
          if (incr !== 0) {
            huff &= incr - 1;
            huff += incr;
          } else {
            huff = 0;
          }
          sym++;
          if (--count[len] === 0) {
            if (len === max) {
              break;
            }
            len = lens[lens_index + work[sym]];
          }
          if (len > root && (huff & mask) !== low) {
            if (drop === 0) {
              drop = root;
            }
            next += min;
            curr = len - drop;
            left = 1 << curr;
            while (curr + drop < max) {
              left -= count[curr + drop];
              if (left <= 0) {
                break;
              }
              curr++;
              left <<= 1;
            }
            used += 1 << curr;
            if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
              return 1;
            }
            low = huff & mask;
            table[low] = root << 24 | curr << 16 | next - table_index | 0;
          }
        }
        if (huff !== 0) {
          table[next + huff] = len - drop << 24 | 64 << 16 | 0;
        }
        opts.bits = root;
        return 0;
      };
    }
  });

  // node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/inflate.js
  var require_inflate = __commonJS({
    "node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/inflate.js"(exports) {
      "use strict";
      var utils = require_common();
      var adler32 = require_adler32();
      var crc32 = require_crc32();
      var inflate_fast = require_inffast();
      var inflate_table = require_inftrees();
      var CODES = 0;
      var LENS = 1;
      var DISTS = 2;
      var Z_FINISH = 4;
      var Z_BLOCK = 5;
      var Z_TREES = 6;
      var Z_OK = 0;
      var Z_STREAM_END = 1;
      var Z_NEED_DICT = 2;
      var Z_STREAM_ERROR = -2;
      var Z_DATA_ERROR = -3;
      var Z_MEM_ERROR = -4;
      var Z_BUF_ERROR = -5;
      var Z_DEFLATED = 8;
      var HEAD = 1;
      var FLAGS = 2;
      var TIME = 3;
      var OS = 4;
      var EXLEN = 5;
      var EXTRA = 6;
      var NAME = 7;
      var COMMENT = 8;
      var HCRC = 9;
      var DICTID = 10;
      var DICT = 11;
      var TYPE = 12;
      var TYPEDO = 13;
      var STORED = 14;
      var COPY_ = 15;
      var COPY = 16;
      var TABLE = 17;
      var LENLENS = 18;
      var CODELENS = 19;
      var LEN_ = 20;
      var LEN = 21;
      var LENEXT = 22;
      var DIST = 23;
      var DISTEXT = 24;
      var MATCH = 25;
      var LIT = 26;
      var CHECK = 27;
      var LENGTH = 28;
      var DONE = 29;
      var BAD = 30;
      var MEM = 31;
      var SYNC = 32;
      var ENOUGH_LENS = 852;
      var ENOUGH_DISTS = 592;
      var MAX_WBITS = 15;
      var DEF_WBITS = MAX_WBITS;
      function zswap32(q) {
        return (q >>> 24 & 255) + (q >>> 8 & 65280) + ((q & 65280) << 8) + ((q & 255) << 24);
      }
      function InflateState() {
        this.mode = 0;
        this.last = false;
        this.wrap = 0;
        this.havedict = false;
        this.flags = 0;
        this.dmax = 0;
        this.check = 0;
        this.total = 0;
        this.head = null;
        this.wbits = 0;
        this.wsize = 0;
        this.whave = 0;
        this.wnext = 0;
        this.window = null;
        this.hold = 0;
        this.bits = 0;
        this.length = 0;
        this.offset = 0;
        this.extra = 0;
        this.lencode = null;
        this.distcode = null;
        this.lenbits = 0;
        this.distbits = 0;
        this.ncode = 0;
        this.nlen = 0;
        this.ndist = 0;
        this.have = 0;
        this.next = null;
        this.lens = new utils.Buf16(320);
        this.work = new utils.Buf16(288);
        this.lendyn = null;
        this.distdyn = null;
        this.sane = 0;
        this.back = 0;
        this.was = 0;
      }
      function inflateResetKeep(strm) {
        var state;
        if (!strm || !strm.state) {
          return Z_STREAM_ERROR;
        }
        state = strm.state;
        strm.total_in = strm.total_out = state.total = 0;
        strm.msg = "";
        if (state.wrap) {
          strm.adler = state.wrap & 1;
        }
        state.mode = HEAD;
        state.last = 0;
        state.havedict = 0;
        state.dmax = 32768;
        state.head = null;
        state.hold = 0;
        state.bits = 0;
        state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
        state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);
        state.sane = 1;
        state.back = -1;
        return Z_OK;
      }
      function inflateReset(strm) {
        var state;
        if (!strm || !strm.state) {
          return Z_STREAM_ERROR;
        }
        state = strm.state;
        state.wsize = 0;
        state.whave = 0;
        state.wnext = 0;
        return inflateResetKeep(strm);
      }
      function inflateReset2(strm, windowBits) {
        var wrap;
        var state;
        if (!strm || !strm.state) {
          return Z_STREAM_ERROR;
        }
        state = strm.state;
        if (windowBits < 0) {
          wrap = 0;
          windowBits = -windowBits;
        } else {
          wrap = (windowBits >> 4) + 1;
          if (windowBits < 48) {
            windowBits &= 15;
          }
        }
        if (windowBits && (windowBits < 8 || windowBits > 15)) {
          return Z_STREAM_ERROR;
        }
        if (state.window !== null && state.wbits !== windowBits) {
          state.window = null;
        }
        state.wrap = wrap;
        state.wbits = windowBits;
        return inflateReset(strm);
      }
      function inflateInit2(strm, windowBits) {
        var ret;
        var state;
        if (!strm) {
          return Z_STREAM_ERROR;
        }
        state = new InflateState();
        strm.state = state;
        state.window = null;
        ret = inflateReset2(strm, windowBits);
        if (ret !== Z_OK) {
          strm.state = null;
        }
        return ret;
      }
      function inflateInit(strm) {
        return inflateInit2(strm, DEF_WBITS);
      }
      var virgin = true;
      var lenfix;
      var distfix;
      function fixedtables(state) {
        if (virgin) {
          var sym;
          lenfix = new utils.Buf32(512);
          distfix = new utils.Buf32(32);
          sym = 0;
          while (sym < 144) {
            state.lens[sym++] = 8;
          }
          while (sym < 256) {
            state.lens[sym++] = 9;
          }
          while (sym < 280) {
            state.lens[sym++] = 7;
          }
          while (sym < 288) {
            state.lens[sym++] = 8;
          }
          inflate_table(LENS, state.lens, 0, 288, lenfix, 0, state.work, { bits: 9 });
          sym = 0;
          while (sym < 32) {
            state.lens[sym++] = 5;
          }
          inflate_table(DISTS, state.lens, 0, 32, distfix, 0, state.work, { bits: 5 });
          virgin = false;
        }
        state.lencode = lenfix;
        state.lenbits = 9;
        state.distcode = distfix;
        state.distbits = 5;
      }
      function updatewindow(strm, src, end, copy) {
        var dist;
        var state = strm.state;
        if (state.window === null) {
          state.wsize = 1 << state.wbits;
          state.wnext = 0;
          state.whave = 0;
          state.window = new utils.Buf8(state.wsize);
        }
        if (copy >= state.wsize) {
          utils.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
          state.wnext = 0;
          state.whave = state.wsize;
        } else {
          dist = state.wsize - state.wnext;
          if (dist > copy) {
            dist = copy;
          }
          utils.arraySet(state.window, src, end - copy, dist, state.wnext);
          copy -= dist;
          if (copy) {
            utils.arraySet(state.window, src, end - copy, copy, 0);
            state.wnext = copy;
            state.whave = state.wsize;
          } else {
            state.wnext += dist;
            if (state.wnext === state.wsize) {
              state.wnext = 0;
            }
            if (state.whave < state.wsize) {
              state.whave += dist;
            }
          }
        }
        return 0;
      }
      function inflate(strm, flush) {
        var state;
        var input, output;
        var next;
        var put;
        var have, left;
        var hold;
        var bits;
        var _in, _out;
        var copy;
        var from;
        var from_source;
        var here = 0;
        var here_bits, here_op, here_val;
        var last_bits, last_op, last_val;
        var len;
        var ret;
        var hbuf = new utils.Buf8(4);
        var opts;
        var n;
        var order = (
          /* permutation of code lengths */
          [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
        );
        if (!strm || !strm.state || !strm.output || !strm.input && strm.avail_in !== 0) {
          return Z_STREAM_ERROR;
        }
        state = strm.state;
        if (state.mode === TYPE) {
          state.mode = TYPEDO;
        }
        put = strm.next_out;
        output = strm.output;
        left = strm.avail_out;
        next = strm.next_in;
        input = strm.input;
        have = strm.avail_in;
        hold = state.hold;
        bits = state.bits;
        _in = have;
        _out = left;
        ret = Z_OK;
        inf_leave:
          for (; ; ) {
            switch (state.mode) {
              case HEAD:
                if (state.wrap === 0) {
                  state.mode = TYPEDO;
                  break;
                }
                while (bits < 16) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                if (state.wrap & 2 && hold === 35615) {
                  state.check = 0;
                  hbuf[0] = hold & 255;
                  hbuf[1] = hold >>> 8 & 255;
                  state.check = crc32(state.check, hbuf, 2, 0);
                  hold = 0;
                  bits = 0;
                  state.mode = FLAGS;
                  break;
                }
                state.flags = 0;
                if (state.head) {
                  state.head.done = false;
                }
                if (!(state.wrap & 1) || /* check if zlib header allowed */
                (((hold & 255) << 8) + (hold >> 8)) % 31) {
                  strm.msg = "incorrect header check";
                  state.mode = BAD;
                  break;
                }
                if ((hold & 15) !== Z_DEFLATED) {
                  strm.msg = "unknown compression method";
                  state.mode = BAD;
                  break;
                }
                hold >>>= 4;
                bits -= 4;
                len = (hold & 15) + 8;
                if (state.wbits === 0) {
                  state.wbits = len;
                } else if (len > state.wbits) {
                  strm.msg = "invalid window size";
                  state.mode = BAD;
                  break;
                }
                state.dmax = 1 << len;
                strm.adler = state.check = 1;
                state.mode = hold & 512 ? DICTID : TYPE;
                hold = 0;
                bits = 0;
                break;
              case FLAGS:
                while (bits < 16) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                state.flags = hold;
                if ((state.flags & 255) !== Z_DEFLATED) {
                  strm.msg = "unknown compression method";
                  state.mode = BAD;
                  break;
                }
                if (state.flags & 57344) {
                  strm.msg = "unknown header flags set";
                  state.mode = BAD;
                  break;
                }
                if (state.head) {
                  state.head.text = hold >> 8 & 1;
                }
                if (state.flags & 512) {
                  hbuf[0] = hold & 255;
                  hbuf[1] = hold >>> 8 & 255;
                  state.check = crc32(state.check, hbuf, 2, 0);
                }
                hold = 0;
                bits = 0;
                state.mode = TIME;
              /* falls through */
              case TIME:
                while (bits < 32) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                if (state.head) {
                  state.head.time = hold;
                }
                if (state.flags & 512) {
                  hbuf[0] = hold & 255;
                  hbuf[1] = hold >>> 8 & 255;
                  hbuf[2] = hold >>> 16 & 255;
                  hbuf[3] = hold >>> 24 & 255;
                  state.check = crc32(state.check, hbuf, 4, 0);
                }
                hold = 0;
                bits = 0;
                state.mode = OS;
              /* falls through */
              case OS:
                while (bits < 16) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                if (state.head) {
                  state.head.xflags = hold & 255;
                  state.head.os = hold >> 8;
                }
                if (state.flags & 512) {
                  hbuf[0] = hold & 255;
                  hbuf[1] = hold >>> 8 & 255;
                  state.check = crc32(state.check, hbuf, 2, 0);
                }
                hold = 0;
                bits = 0;
                state.mode = EXLEN;
              /* falls through */
              case EXLEN:
                if (state.flags & 1024) {
                  while (bits < 16) {
                    if (have === 0) {
                      break inf_leave;
                    }
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                  }
                  state.length = hold;
                  if (state.head) {
                    state.head.extra_len = hold;
                  }
                  if (state.flags & 512) {
                    hbuf[0] = hold & 255;
                    hbuf[1] = hold >>> 8 & 255;
                    state.check = crc32(state.check, hbuf, 2, 0);
                  }
                  hold = 0;
                  bits = 0;
                } else if (state.head) {
                  state.head.extra = null;
                }
                state.mode = EXTRA;
              /* falls through */
              case EXTRA:
                if (state.flags & 1024) {
                  copy = state.length;
                  if (copy > have) {
                    copy = have;
                  }
                  if (copy) {
                    if (state.head) {
                      len = state.head.extra_len - state.length;
                      if (!state.head.extra) {
                        state.head.extra = new Array(state.head.extra_len);
                      }
                      utils.arraySet(
                        state.head.extra,
                        input,
                        next,
                        // extra field is limited to 65536 bytes
                        // - no need for additional size check
                        copy,
                        /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                        len
                      );
                    }
                    if (state.flags & 512) {
                      state.check = crc32(state.check, input, copy, next);
                    }
                    have -= copy;
                    next += copy;
                    state.length -= copy;
                  }
                  if (state.length) {
                    break inf_leave;
                  }
                }
                state.length = 0;
                state.mode = NAME;
              /* falls through */
              case NAME:
                if (state.flags & 2048) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  copy = 0;
                  do {
                    len = input[next + copy++];
                    if (state.head && len && state.length < 65536) {
                      state.head.name += String.fromCharCode(len);
                    }
                  } while (len && copy < have);
                  if (state.flags & 512) {
                    state.check = crc32(state.check, input, copy, next);
                  }
                  have -= copy;
                  next += copy;
                  if (len) {
                    break inf_leave;
                  }
                } else if (state.head) {
                  state.head.name = null;
                }
                state.length = 0;
                state.mode = COMMENT;
              /* falls through */
              case COMMENT:
                if (state.flags & 4096) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  copy = 0;
                  do {
                    len = input[next + copy++];
                    if (state.head && len && state.length < 65536) {
                      state.head.comment += String.fromCharCode(len);
                    }
                  } while (len && copy < have);
                  if (state.flags & 512) {
                    state.check = crc32(state.check, input, copy, next);
                  }
                  have -= copy;
                  next += copy;
                  if (len) {
                    break inf_leave;
                  }
                } else if (state.head) {
                  state.head.comment = null;
                }
                state.mode = HCRC;
              /* falls through */
              case HCRC:
                if (state.flags & 512) {
                  while (bits < 16) {
                    if (have === 0) {
                      break inf_leave;
                    }
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                  }
                  if (hold !== (state.check & 65535)) {
                    strm.msg = "header crc mismatch";
                    state.mode = BAD;
                    break;
                  }
                  hold = 0;
                  bits = 0;
                }
                if (state.head) {
                  state.head.hcrc = state.flags >> 9 & 1;
                  state.head.done = true;
                }
                strm.adler = state.check = 0;
                state.mode = TYPE;
                break;
              case DICTID:
                while (bits < 32) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                strm.adler = state.check = zswap32(hold);
                hold = 0;
                bits = 0;
                state.mode = DICT;
              /* falls through */
              case DICT:
                if (state.havedict === 0) {
                  strm.next_out = put;
                  strm.avail_out = left;
                  strm.next_in = next;
                  strm.avail_in = have;
                  state.hold = hold;
                  state.bits = bits;
                  return Z_NEED_DICT;
                }
                strm.adler = state.check = 1;
                state.mode = TYPE;
              /* falls through */
              case TYPE:
                if (flush === Z_BLOCK || flush === Z_TREES) {
                  break inf_leave;
                }
              /* falls through */
              case TYPEDO:
                if (state.last) {
                  hold >>>= bits & 7;
                  bits -= bits & 7;
                  state.mode = CHECK;
                  break;
                }
                while (bits < 3) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                state.last = hold & 1;
                hold >>>= 1;
                bits -= 1;
                switch (hold & 3) {
                  case 0:
                    state.mode = STORED;
                    break;
                  case 1:
                    fixedtables(state);
                    state.mode = LEN_;
                    if (flush === Z_TREES) {
                      hold >>>= 2;
                      bits -= 2;
                      break inf_leave;
                    }
                    break;
                  case 2:
                    state.mode = TABLE;
                    break;
                  case 3:
                    strm.msg = "invalid block type";
                    state.mode = BAD;
                }
                hold >>>= 2;
                bits -= 2;
                break;
              case STORED:
                hold >>>= bits & 7;
                bits -= bits & 7;
                while (bits < 32) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                if ((hold & 65535) !== (hold >>> 16 ^ 65535)) {
                  strm.msg = "invalid stored block lengths";
                  state.mode = BAD;
                  break;
                }
                state.length = hold & 65535;
                hold = 0;
                bits = 0;
                state.mode = COPY_;
                if (flush === Z_TREES) {
                  break inf_leave;
                }
              /* falls through */
              case COPY_:
                state.mode = COPY;
              /* falls through */
              case COPY:
                copy = state.length;
                if (copy) {
                  if (copy > have) {
                    copy = have;
                  }
                  if (copy > left) {
                    copy = left;
                  }
                  if (copy === 0) {
                    break inf_leave;
                  }
                  utils.arraySet(output, input, next, copy, put);
                  have -= copy;
                  next += copy;
                  left -= copy;
                  put += copy;
                  state.length -= copy;
                  break;
                }
                state.mode = TYPE;
                break;
              case TABLE:
                while (bits < 14) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                state.nlen = (hold & 31) + 257;
                hold >>>= 5;
                bits -= 5;
                state.ndist = (hold & 31) + 1;
                hold >>>= 5;
                bits -= 5;
                state.ncode = (hold & 15) + 4;
                hold >>>= 4;
                bits -= 4;
                if (state.nlen > 286 || state.ndist > 30) {
                  strm.msg = "too many length or distance symbols";
                  state.mode = BAD;
                  break;
                }
                state.have = 0;
                state.mode = LENLENS;
              /* falls through */
              case LENLENS:
                while (state.have < state.ncode) {
                  while (bits < 3) {
                    if (have === 0) {
                      break inf_leave;
                    }
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                  }
                  state.lens[order[state.have++]] = hold & 7;
                  hold >>>= 3;
                  bits -= 3;
                }
                while (state.have < 19) {
                  state.lens[order[state.have++]] = 0;
                }
                state.lencode = state.lendyn;
                state.lenbits = 7;
                opts = { bits: state.lenbits };
                ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
                state.lenbits = opts.bits;
                if (ret) {
                  strm.msg = "invalid code lengths set";
                  state.mode = BAD;
                  break;
                }
                state.have = 0;
                state.mode = CODELENS;
              /* falls through */
              case CODELENS:
                while (state.have < state.nlen + state.ndist) {
                  for (; ; ) {
                    here = state.lencode[hold & (1 << state.lenbits) - 1];
                    here_bits = here >>> 24;
                    here_op = here >>> 16 & 255;
                    here_val = here & 65535;
                    if (here_bits <= bits) {
                      break;
                    }
                    if (have === 0) {
                      break inf_leave;
                    }
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                  }
                  if (here_val < 16) {
                    hold >>>= here_bits;
                    bits -= here_bits;
                    state.lens[state.have++] = here_val;
                  } else {
                    if (here_val === 16) {
                      n = here_bits + 2;
                      while (bits < n) {
                        if (have === 0) {
                          break inf_leave;
                        }
                        have--;
                        hold += input[next++] << bits;
                        bits += 8;
                      }
                      hold >>>= here_bits;
                      bits -= here_bits;
                      if (state.have === 0) {
                        strm.msg = "invalid bit length repeat";
                        state.mode = BAD;
                        break;
                      }
                      len = state.lens[state.have - 1];
                      copy = 3 + (hold & 3);
                      hold >>>= 2;
                      bits -= 2;
                    } else if (here_val === 17) {
                      n = here_bits + 3;
                      while (bits < n) {
                        if (have === 0) {
                          break inf_leave;
                        }
                        have--;
                        hold += input[next++] << bits;
                        bits += 8;
                      }
                      hold >>>= here_bits;
                      bits -= here_bits;
                      len = 0;
                      copy = 3 + (hold & 7);
                      hold >>>= 3;
                      bits -= 3;
                    } else {
                      n = here_bits + 7;
                      while (bits < n) {
                        if (have === 0) {
                          break inf_leave;
                        }
                        have--;
                        hold += input[next++] << bits;
                        bits += 8;
                      }
                      hold >>>= here_bits;
                      bits -= here_bits;
                      len = 0;
                      copy = 11 + (hold & 127);
                      hold >>>= 7;
                      bits -= 7;
                    }
                    if (state.have + copy > state.nlen + state.ndist) {
                      strm.msg = "invalid bit length repeat";
                      state.mode = BAD;
                      break;
                    }
                    while (copy--) {
                      state.lens[state.have++] = len;
                    }
                  }
                }
                if (state.mode === BAD) {
                  break;
                }
                if (state.lens[256] === 0) {
                  strm.msg = "invalid code -- missing end-of-block";
                  state.mode = BAD;
                  break;
                }
                state.lenbits = 9;
                opts = { bits: state.lenbits };
                ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
                state.lenbits = opts.bits;
                if (ret) {
                  strm.msg = "invalid literal/lengths set";
                  state.mode = BAD;
                  break;
                }
                state.distbits = 6;
                state.distcode = state.distdyn;
                opts = { bits: state.distbits };
                ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
                state.distbits = opts.bits;
                if (ret) {
                  strm.msg = "invalid distances set";
                  state.mode = BAD;
                  break;
                }
                state.mode = LEN_;
                if (flush === Z_TREES) {
                  break inf_leave;
                }
              /* falls through */
              case LEN_:
                state.mode = LEN;
              /* falls through */
              case LEN:
                if (have >= 6 && left >= 258) {
                  strm.next_out = put;
                  strm.avail_out = left;
                  strm.next_in = next;
                  strm.avail_in = have;
                  state.hold = hold;
                  state.bits = bits;
                  inflate_fast(strm, _out);
                  put = strm.next_out;
                  output = strm.output;
                  left = strm.avail_out;
                  next = strm.next_in;
                  input = strm.input;
                  have = strm.avail_in;
                  hold = state.hold;
                  bits = state.bits;
                  if (state.mode === TYPE) {
                    state.back = -1;
                  }
                  break;
                }
                state.back = 0;
                for (; ; ) {
                  here = state.lencode[hold & (1 << state.lenbits) - 1];
                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 255;
                  here_val = here & 65535;
                  if (here_bits <= bits) {
                    break;
                  }
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                if (here_op && (here_op & 240) === 0) {
                  last_bits = here_bits;
                  last_op = here_op;
                  last_val = here_val;
                  for (; ; ) {
                    here = state.lencode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                    here_bits = here >>> 24;
                    here_op = here >>> 16 & 255;
                    here_val = here & 65535;
                    if (last_bits + here_bits <= bits) {
                      break;
                    }
                    if (have === 0) {
                      break inf_leave;
                    }
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                  }
                  hold >>>= last_bits;
                  bits -= last_bits;
                  state.back += last_bits;
                }
                hold >>>= here_bits;
                bits -= here_bits;
                state.back += here_bits;
                state.length = here_val;
                if (here_op === 0) {
                  state.mode = LIT;
                  break;
                }
                if (here_op & 32) {
                  state.back = -1;
                  state.mode = TYPE;
                  break;
                }
                if (here_op & 64) {
                  strm.msg = "invalid literal/length code";
                  state.mode = BAD;
                  break;
                }
                state.extra = here_op & 15;
                state.mode = LENEXT;
              /* falls through */
              case LENEXT:
                if (state.extra) {
                  n = state.extra;
                  while (bits < n) {
                    if (have === 0) {
                      break inf_leave;
                    }
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                  }
                  state.length += hold & (1 << state.extra) - 1;
                  hold >>>= state.extra;
                  bits -= state.extra;
                  state.back += state.extra;
                }
                state.was = state.length;
                state.mode = DIST;
              /* falls through */
              case DIST:
                for (; ; ) {
                  here = state.distcode[hold & (1 << state.distbits) - 1];
                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 255;
                  here_val = here & 65535;
                  if (here_bits <= bits) {
                    break;
                  }
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                if ((here_op & 240) === 0) {
                  last_bits = here_bits;
                  last_op = here_op;
                  last_val = here_val;
                  for (; ; ) {
                    here = state.distcode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                    here_bits = here >>> 24;
                    here_op = here >>> 16 & 255;
                    here_val = here & 65535;
                    if (last_bits + here_bits <= bits) {
                      break;
                    }
                    if (have === 0) {
                      break inf_leave;
                    }
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                  }
                  hold >>>= last_bits;
                  bits -= last_bits;
                  state.back += last_bits;
                }
                hold >>>= here_bits;
                bits -= here_bits;
                state.back += here_bits;
                if (here_op & 64) {
                  strm.msg = "invalid distance code";
                  state.mode = BAD;
                  break;
                }
                state.offset = here_val;
                state.extra = here_op & 15;
                state.mode = DISTEXT;
              /* falls through */
              case DISTEXT:
                if (state.extra) {
                  n = state.extra;
                  while (bits < n) {
                    if (have === 0) {
                      break inf_leave;
                    }
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                  }
                  state.offset += hold & (1 << state.extra) - 1;
                  hold >>>= state.extra;
                  bits -= state.extra;
                  state.back += state.extra;
                }
                if (state.offset > state.dmax) {
                  strm.msg = "invalid distance too far back";
                  state.mode = BAD;
                  break;
                }
                state.mode = MATCH;
              /* falls through */
              case MATCH:
                if (left === 0) {
                  break inf_leave;
                }
                copy = _out - left;
                if (state.offset > copy) {
                  copy = state.offset - copy;
                  if (copy > state.whave) {
                    if (state.sane) {
                      strm.msg = "invalid distance too far back";
                      state.mode = BAD;
                      break;
                    }
                  }
                  if (copy > state.wnext) {
                    copy -= state.wnext;
                    from = state.wsize - copy;
                  } else {
                    from = state.wnext - copy;
                  }
                  if (copy > state.length) {
                    copy = state.length;
                  }
                  from_source = state.window;
                } else {
                  from_source = output;
                  from = put - state.offset;
                  copy = state.length;
                }
                if (copy > left) {
                  copy = left;
                }
                left -= copy;
                state.length -= copy;
                do {
                  output[put++] = from_source[from++];
                } while (--copy);
                if (state.length === 0) {
                  state.mode = LEN;
                }
                break;
              case LIT:
                if (left === 0) {
                  break inf_leave;
                }
                output[put++] = state.length;
                left--;
                state.mode = LEN;
                break;
              case CHECK:
                if (state.wrap) {
                  while (bits < 32) {
                    if (have === 0) {
                      break inf_leave;
                    }
                    have--;
                    hold |= input[next++] << bits;
                    bits += 8;
                  }
                  _out -= left;
                  strm.total_out += _out;
                  state.total += _out;
                  if (_out) {
                    strm.adler = state.check = /*UPDATE(state.check, put - _out, _out);*/
                    state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out);
                  }
                  _out = left;
                  if ((state.flags ? hold : zswap32(hold)) !== state.check) {
                    strm.msg = "incorrect data check";
                    state.mode = BAD;
                    break;
                  }
                  hold = 0;
                  bits = 0;
                }
                state.mode = LENGTH;
              /* falls through */
              case LENGTH:
                if (state.wrap && state.flags) {
                  while (bits < 32) {
                    if (have === 0) {
                      break inf_leave;
                    }
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                  }
                  if (hold !== (state.total & 4294967295)) {
                    strm.msg = "incorrect length check";
                    state.mode = BAD;
                    break;
                  }
                  hold = 0;
                  bits = 0;
                }
                state.mode = DONE;
              /* falls through */
              case DONE:
                ret = Z_STREAM_END;
                break inf_leave;
              case BAD:
                ret = Z_DATA_ERROR;
                break inf_leave;
              case MEM:
                return Z_MEM_ERROR;
              case SYNC:
              /* falls through */
              default:
                return Z_STREAM_ERROR;
            }
          }
        strm.next_out = put;
        strm.avail_out = left;
        strm.next_in = next;
        strm.avail_in = have;
        state.hold = hold;
        state.bits = bits;
        if (state.wsize || _out !== strm.avail_out && state.mode < BAD && (state.mode < CHECK || flush !== Z_FINISH)) {
          if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
            state.mode = MEM;
            return Z_MEM_ERROR;
          }
        }
        _in -= strm.avail_in;
        _out -= strm.avail_out;
        strm.total_in += _in;
        strm.total_out += _out;
        state.total += _out;
        if (state.wrap && _out) {
          strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
          state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out);
        }
        strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === TYPE ? 128 : 0) + (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
        if ((_in === 0 && _out === 0 || flush === Z_FINISH) && ret === Z_OK) {
          ret = Z_BUF_ERROR;
        }
        return ret;
      }
      function inflateEnd(strm) {
        if (!strm || !strm.state) {
          return Z_STREAM_ERROR;
        }
        var state = strm.state;
        if (state.window) {
          state.window = null;
        }
        strm.state = null;
        return Z_OK;
      }
      function inflateGetHeader(strm, head) {
        var state;
        if (!strm || !strm.state) {
          return Z_STREAM_ERROR;
        }
        state = strm.state;
        if ((state.wrap & 2) === 0) {
          return Z_STREAM_ERROR;
        }
        state.head = head;
        head.done = false;
        return Z_OK;
      }
      function inflateSetDictionary(strm, dictionary) {
        var dictLength = dictionary.length;
        var state;
        var dictid;
        var ret;
        if (!strm || !strm.state) {
          return Z_STREAM_ERROR;
        }
        state = strm.state;
        if (state.wrap !== 0 && state.mode !== DICT) {
          return Z_STREAM_ERROR;
        }
        if (state.mode === DICT) {
          dictid = 1;
          dictid = adler32(dictid, dictionary, dictLength, 0);
          if (dictid !== state.check) {
            return Z_DATA_ERROR;
          }
        }
        ret = updatewindow(strm, dictionary, dictLength, dictLength);
        if (ret) {
          state.mode = MEM;
          return Z_MEM_ERROR;
        }
        state.havedict = 1;
        return Z_OK;
      }
      exports.inflateReset = inflateReset;
      exports.inflateReset2 = inflateReset2;
      exports.inflateResetKeep = inflateResetKeep;
      exports.inflateInit = inflateInit;
      exports.inflateInit2 = inflateInit2;
      exports.inflate = inflate;
      exports.inflateEnd = inflateEnd;
      exports.inflateGetHeader = inflateGetHeader;
      exports.inflateSetDictionary = inflateSetDictionary;
      exports.inflateInfo = "pako inflate (from Nodeca project)";
    }
  });

  // node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/constants.js
  var require_constants = __commonJS({
    "node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/constants.js"(exports, module) {
      "use strict";
      module.exports = {
        /* Allowed flush values; see deflate() and inflate() below for details */
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        /* Return codes for the compression/decompression functions. Negative values
        * are errors, positive values are used for special but normal events.
        */
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        //Z_MEM_ERROR:     -4,
        Z_BUF_ERROR: -5,
        //Z_VERSION_ERROR: -6,
        /* compression levels */
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        /* Possible values of the data_type field (though see inflate()) */
        Z_BINARY: 0,
        Z_TEXT: 1,
        //Z_ASCII:                1, // = Z_TEXT (deprecated)
        Z_UNKNOWN: 2,
        /* The deflate compression method */
        Z_DEFLATED: 8
        //Z_NULL:                 null // Use -1 or null inline, depending on var type
      };
    }
  });

  // node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/gzheader.js
  var require_gzheader = __commonJS({
    "node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/gzheader.js"(exports, module) {
      "use strict";
      function GZheader() {
        this.text = 0;
        this.time = 0;
        this.xflags = 0;
        this.os = 0;
        this.extra = null;
        this.extra_len = 0;
        this.name = "";
        this.comment = "";
        this.hcrc = 0;
        this.done = false;
      }
      module.exports = GZheader;
    }
  });

  // node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/inflate.js
  var require_inflate2 = __commonJS({
    "node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/inflate.js"(exports) {
      "use strict";
      var zlib_inflate = require_inflate();
      var utils = require_common();
      var strings = require_strings();
      var c = require_constants();
      var msg = require_messages();
      var ZStream = require_zstream();
      var GZheader = require_gzheader();
      var toString = Object.prototype.toString;
      function Inflate(options) {
        if (!(this instanceof Inflate)) return new Inflate(options);
        this.options = utils.assign({
          chunkSize: 16384,
          windowBits: 0,
          to: ""
        }, options || {});
        var opt = this.options;
        if (opt.raw && opt.windowBits >= 0 && opt.windowBits < 16) {
          opt.windowBits = -opt.windowBits;
          if (opt.windowBits === 0) {
            opt.windowBits = -15;
          }
        }
        if (opt.windowBits >= 0 && opt.windowBits < 16 && !(options && options.windowBits)) {
          opt.windowBits += 32;
        }
        if (opt.windowBits > 15 && opt.windowBits < 48) {
          if ((opt.windowBits & 15) === 0) {
            opt.windowBits |= 15;
          }
        }
        this.err = 0;
        this.msg = "";
        this.ended = false;
        this.chunks = [];
        this.strm = new ZStream();
        this.strm.avail_out = 0;
        var status = zlib_inflate.inflateInit2(
          this.strm,
          opt.windowBits
        );
        if (status !== c.Z_OK) {
          throw new Error(msg[status]);
        }
        this.header = new GZheader();
        zlib_inflate.inflateGetHeader(this.strm, this.header);
        if (opt.dictionary) {
          if (typeof opt.dictionary === "string") {
            opt.dictionary = strings.string2buf(opt.dictionary);
          } else if (toString.call(opt.dictionary) === "[object ArrayBuffer]") {
            opt.dictionary = new Uint8Array(opt.dictionary);
          }
          if (opt.raw) {
            status = zlib_inflate.inflateSetDictionary(this.strm, opt.dictionary);
            if (status !== c.Z_OK) {
              throw new Error(msg[status]);
            }
          }
        }
      }
      Inflate.prototype.push = function(data, mode) {
        var strm = this.strm;
        var chunkSize = this.options.chunkSize;
        var dictionary = this.options.dictionary;
        var status, _mode;
        var next_out_utf8, tail, utf8str;
        var allowBufError = false;
        if (this.ended) {
          return false;
        }
        _mode = mode === ~~mode ? mode : mode === true ? c.Z_FINISH : c.Z_NO_FLUSH;
        if (typeof data === "string") {
          strm.input = strings.binstring2buf(data);
        } else if (toString.call(data) === "[object ArrayBuffer]") {
          strm.input = new Uint8Array(data);
        } else {
          strm.input = data;
        }
        strm.next_in = 0;
        strm.avail_in = strm.input.length;
        do {
          if (strm.avail_out === 0) {
            strm.output = new utils.Buf8(chunkSize);
            strm.next_out = 0;
            strm.avail_out = chunkSize;
          }
          status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH);
          if (status === c.Z_NEED_DICT && dictionary) {
            status = zlib_inflate.inflateSetDictionary(this.strm, dictionary);
          }
          if (status === c.Z_BUF_ERROR && allowBufError === true) {
            status = c.Z_OK;
            allowBufError = false;
          }
          if (status !== c.Z_STREAM_END && status !== c.Z_OK) {
            this.onEnd(status);
            this.ended = true;
            return false;
          }
          if (strm.next_out) {
            if (strm.avail_out === 0 || status === c.Z_STREAM_END || strm.avail_in === 0 && (_mode === c.Z_FINISH || _mode === c.Z_SYNC_FLUSH)) {
              if (this.options.to === "string") {
                next_out_utf8 = strings.utf8border(strm.output, strm.next_out);
                tail = strm.next_out - next_out_utf8;
                utf8str = strings.buf2string(strm.output, next_out_utf8);
                strm.next_out = tail;
                strm.avail_out = chunkSize - tail;
                if (tail) {
                  utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0);
                }
                this.onData(utf8str);
              } else {
                this.onData(utils.shrinkBuf(strm.output, strm.next_out));
              }
            }
          }
          if (strm.avail_in === 0 && strm.avail_out === 0) {
            allowBufError = true;
          }
        } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== c.Z_STREAM_END);
        if (status === c.Z_STREAM_END) {
          _mode = c.Z_FINISH;
        }
        if (_mode === c.Z_FINISH) {
          status = zlib_inflate.inflateEnd(this.strm);
          this.onEnd(status);
          this.ended = true;
          return status === c.Z_OK;
        }
        if (_mode === c.Z_SYNC_FLUSH) {
          this.onEnd(c.Z_OK);
          strm.avail_out = 0;
          return true;
        }
        return true;
      };
      Inflate.prototype.onData = function(chunk) {
        this.chunks.push(chunk);
      };
      Inflate.prototype.onEnd = function(status) {
        if (status === c.Z_OK) {
          if (this.options.to === "string") {
            this.result = this.chunks.join("");
          } else {
            this.result = utils.flattenChunks(this.chunks);
          }
        }
        this.chunks = [];
        this.err = status;
        this.msg = this.strm.msg;
      };
      function inflate(input, options) {
        var inflator = new Inflate(options);
        inflator.push(input, true);
        if (inflator.err) {
          throw inflator.msg || msg[inflator.err];
        }
        return inflator.result;
      }
      function inflateRaw(input, options) {
        options = options || {};
        options.raw = true;
        return inflate(input, options);
      }
      exports.Inflate = Inflate;
      exports.inflate = inflate;
      exports.inflateRaw = inflateRaw;
      exports.ungzip = inflate;
    }
  });

  // node_modules/.pnpm/pako@1.0.11/node_modules/pako/index.js
  var require_pako = __commonJS({
    "node_modules/.pnpm/pako@1.0.11/node_modules/pako/index.js"(exports, module) {
      "use strict";
      var assign = require_common().assign;
      var deflate = require_deflate2();
      var inflate = require_inflate2();
      var constants = require_constants();
      var pako5 = {};
      assign(pako5, deflate, inflate, constants);
      module.exports = pako5;
    }
  });

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
    const chars3 = [];
    for (let idx = 0, len = text.length; idx < len; ) {
      const [c, cLen] = charAtIndex(text, idx);
      chars3.push(c);
      idx += cLen;
    }
    return chars3;
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

  // node_modules/.pnpm/@pdf-lib+standard-fonts@1.0.0/node_modules/@pdf-lib/standard-fonts/es/utils.js
  var import_pako = __toESM(require_pako());
  var chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var lookup2 = new Uint8Array(256);
  for (i = 0; i < chars2.length; i++) {
    lookup2[chars2.charCodeAt(i)] = i;
  }
  var i;
  var decodeFromBase642 = function(base64) {
    var bufferLength = base64.length * 0.75;
    var len = base64.length;
    var i;
    var p = 0;
    var encoded1;
    var encoded2;
    var encoded3;
    var encoded4;
    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }
    var bytes = new Uint8Array(bufferLength);
    for (i = 0; i < len; i += 4) {
      encoded1 = lookup2[base64.charCodeAt(i)];
      encoded2 = lookup2[base64.charCodeAt(i + 1)];
      encoded3 = lookup2[base64.charCodeAt(i + 2)];
      encoded4 = lookup2[base64.charCodeAt(i + 3)];
      bytes[p++] = encoded1 << 2 | encoded2 >> 4;
      bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
      bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return bytes;
  };
  var arrayToString = function(array) {
    var str = "";
    for (var i = 0; i < array.length; i++) {
      str += String.fromCharCode(array[i]);
    }
    return str;
  };
  var decompressJson = function(compressedJson) {
    return arrayToString(import_pako.default.inflate(decodeFromBase642(compressedJson)));
  };
  var padStart2 = function(value, length, padChar) {
    var padding = "";
    for (var idx = 0, len = length - value.length; idx < len; idx++) {
      padding += padChar;
    }
    return padding + value;
  };

  // node_modules/.pnpm/@pdf-lib+standard-fonts@1.0.0/node_modules/@pdf-lib/standard-fonts/es/Courier-Bold.compressed.json
  var Courier_Bold_compressed_default = "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";

  // node_modules/.pnpm/@pdf-lib+standard-fonts@1.0.0/node_modules/@pdf-lib/standard-fonts/es/Courier-BoldOblique.compressed.json
  var Courier_BoldOblique_compressed_default = "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";

  // node_modules/.pnpm/@pdf-lib+standard-fonts@1.0.0/node_modules/@pdf-lib/standard-fonts/es/Courier-Oblique.compressed.json
  var Courier_Oblique_compressed_default = "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";

  // node_modules/.pnpm/@pdf-lib+standard-fonts@1.0.0/node_modules/@pdf-lib/standard-fonts/es/Courier.compressed.json
  var Courier_compressed_default = "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";

  // node_modules/.pnpm/@pdf-lib+standard-fonts@1.0.0/node_modules/@pdf-lib/standard-fonts/es/Helvetica-Bold.compressed.json
  var Helvetica_Bold_compressed_default = "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";

  // node_modules/.pnpm/@pdf-lib+standard-fonts@1.0.0/node_modules/@pdf-lib/standard-fonts/es/Helvetica-BoldOblique.compressed.json
  var Helvetica_BoldOblique_compressed_default = "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";

  // node_modules/.pnpm/@pdf-lib+standard-fonts@1.0.0/node_modules/@pdf-lib/standard-fonts/es/Helvetica-Oblique.compressed.json
  var Helvetica_Oblique_compressed_default = "eJyNnVtzG8mxrf+KAk/nRGh8eBWleZPnItsaD0dXWNvhB5BsUdgC0TLAFgjt2P/9AI2uzJUrV7X8olB/q4CuyspaVX0p8H8mP7V3d83yfvLj5P3fu/Xstnl0fPbsydGjJ89Oz55MHk9+bZf3v8/uml2BvzSLr839/Hr2w+XVYv7vrtnL3WLB8iOQZ3fzxZYL7IRpM7/9tD/r35ubeXe3I3+9ny3m18+Xt4td2R+OT3Zk/ev8obn5Y35//Wny4/2qax5Pfvo0W82u75vVm2b/6V8e7pvlTXPzur2bLYfa/vnP7cPkx3/+cHxx9PiHk5Pzx8fHx08ePzs9/tfjybtd4dVivmz+aNfz+3m73J/q6AiEt5/m15+XzXo9+fF8x983q3VfbHJ0dPKno6Oj3Ul+b3eN2Dfop/bLdrVvx6P/c/1/Hx0/e3r+eP/vRf/vs/2/z476fy8ePb9pr5pHb7br++Zu/eivy+t29aVdze6bmz89evR8sXj0ev8960evm3Wz+rqjHs35+tHs0f1qdtPczVafH7UfH/02X7b32y/ND7tCi0fPXzyaLW/+X7t6NN99wbq7Ws9v5rPVvFn/aVfZX3anupkvb99cf2r6Xuhr8uZ+95HZ6qaou4I/zb78ZeiUi+Onjyf/KEfnJ6ePJ8/X1/tArwbx58aOfzg5ung8eXN/85fpTnzS//f97r9Pnx566+/N/Wp+vQvnP/9nMv3H5MeTi53w+64i6y+zXRT/9zHh5uF6Mbszfnp+fuD/7tpdtK4WppyfPzkoy+7uat9Nt8us3bSLxWxl/OmuW3r+pVld79O+CE+eXByE2d1OWu+i4zU7OYEa9P3ttTs9Hb5vtmqWi+ZjTaKPlWrM1vtvXH/2ij89Gz616NY5ONe70TrLp/i0/fKpWebiu6bM25vM14vZ+lMO1rdm1WbaLpsM7zei5P2nVSPKfmy7laDzr6Lsev4gYPO1EX3bhJh6OsyXIq2u20UrIrRu7uZRsh5Y7E0g0ebf3WyR8e2q2Q1m0cydD657oynK8dHxkNEzkX7PM/qzoYuSiT9l9HP+4C+Ojo8P6Ff/YInAi/xdf8lx+qu3bG+Xe/S3fMaXuf2/+dgr2fr3fMbfc70u89f/kUu9yt/1On/wTY7E2/zBd/mD7w09Oxt6eppL/SOjD/mM/5WjerWbyz4398E3XNxpcaDy56KpnD0xU7mez6/nq+vuLvdHt3ft9W76gTESDC5Uxj42y+gqp8S1MGAxbnODPuZStxl9ylWeZ/TfuV6fc6lFzksRLeE6wve+iGGfTXqV6yUcXsS+yx/8mrN3k0s9ZLTN6BtU9czzKybCyZOjkpWrSvmYjeaMfTbezxc3TQ7JYa6/aTcizmF69qngvl+meXIclxH3cb8uRKO1z2zV5PFx0a7mgq+byrdcd6vdPH7tATx+dgzDZj3vV66piWXZoofVbTffKXftvV467OX+i78jU+hLz36cCyYWULuVnFwP3Mxub9WcduC4FqMVx77vmlUDY//0whZDs9vV7Iuf7fS8ZNbuUqKBjAuu1DfzarYeifC4utKLBeuAqO+uCYZa7VbY8y/r+VpIu7bef2q7sFg0ty/zfkhu77nV7Kuo7Oy6uxf44OUfF81D1ioj6252vWrFia9WjTrxTXs/uw4jzqX5ricxAG5oOA69srsLut2aWyxSu+XtbNXdLWadOE17u1tnfhZfN1uFxZP1y13IWRee+7Ln9GJg7erm426hF1aGvkKJk6wvQCL3M1zCGZ6c2xnudk7XLfAUdrUxE1PezX7Qr9diAlvEE1tKtZHbiqRtctnd+NxdEe/yXkwxf01d6k4QM9Cn/5g3PjXJTvWvi73nq6NcgzJd3My/ziGh/SOxZr5gFoPDqx0/5Cs99SGbIikGNln3F180TKCp+Sv9fGGoOK53xIzGg3+m0kMdfcCvAtJJ/Jph5xFwEXJSnFg19KI4+HW56SFORa7j68KYB95KHZffVQV8eNRyNJqqr/Rlc+xSqvZt0VghnMkqIUNmsvlr9kQbivN49rOLoc6L9luzvBWZ+zqewq/iRpOzGx0kQvThVZtIVpW2XnNb/fonR85O8/ZTuxKtuqSzexgqbvCG+FmZxChsNpo4Yy1ienLr73Csu36VsxL1pRS0KNY42WoxwbtucT//stiKelEDPclDA88uyqXJbHU/ny1u5h8/5r7a1q3h93geT9ixZPllNM1GZp0sWTpVhueyZoO1jPk9BsgnQ/oivP+2WzHgTTi7BFq1n5slXgiZOa6a2/k6Ln19iMbOhuk4jwtzjm43qsP1iAe7soZcVSLTUmR8XFZS6r9ohJ89K2vX/lZXvBFmcf7l/lOGPyUDNDNXvnV6PLTxvjJvNNXZsTYLPq8tH0ayMgbYr5dpaNitCK6UuUKtR2pTT20aXdcGZR7Hdu7RZQnPmGVd0CzuxQ2f+2DS7ombdsQR6/G960RLKOYWKrnO9LFAofcr1bjCeVpuWPQ+vkvg1S6R1/n73qR8ffas5Kte0b4cnX9/ix3nlxL2WEeZYrIFt4wYJue16ey3WG2Lwy5qn2YLmBrKIN9fmtCtbuuLMZdfxmWTp9p3OrAyFJpag26jmWKDhm5Vvar77o1cIFoGy5qflR682dmEeujRxi4CK9SW1sXyZ+dm5zfza2W0P8cvgoXZ2HL399g/Xt1Kv70ez2ulurdWltDPqyYdLwesB6jOZsQjC8pfatM9O4XdIpYNtQVZXAnYt40OhUoV7kfPtGhv9/29bEW427qZdlkqQ3n3VZWRfDt+RQszuce8kr5LOY/bzZ1lXjS759fG+C/d/nHkvx5PXjar5R+z+Wr/EPmfk+f7h9WTxz+cHv3r8XB0cI+ADvWMaDB1hC/i0cFVAsKGoXAZj3IVcOoN3Loq0MP4Dyg4T1CGkAV2uDsU0GHgIHoVjt7ujo5P/LAELbDQflDe7Q7P/agEAFAIAHAIANASAEAUAFAsAMCGoR1Y7yhI3u+OLuxoGrQP+wYe+WFpEjKoO+AuhLXLydBVkqGTydDlZOiqydCJZOgsFsCGWDj5ujs6s6NNONrGo9IiQFDzgQ6FcHQaopAYp3HqnAdrUV4IRMPWuBy7Rb0UqFJLOZRNzF1oEvWjcd2ZJnOPmkBj3DgN9MJfZYRD3hiPexfk4C8yOIAhsgHjygtMzIZgErmCcW0NJrM/mMAmYUJ0ioLBLgqa5lJoHMbYPUwQFlK0LncYm4nxsZwUtmJSJScrBmNyLSeT1ZgQ/aZgMJ2CNhltBSIPMp6NaPADNCJDFE7jZETO2YiK8kIgMiLj0oiKeilQpZbSiEzMnW4Sdbpx3ekmc6ebQEZknIyo8FcZoREZYyNyQRpRkcGIDJERGVdGZGI2IpPIiIxrIzKZjcgENiITohEVDEZU0DSXQiMyxkZkgjCionW5w9iIjI/lpDAikyo5WTEik2s5mYzIhGhEBYMRFbTJaCsQGZHxbEQYGnSjyCmwUSRfIpHNKcgvapxsKorSq0KRyxofa4i0rlgi50rUKWGiqLMmluHUiSp5WhTJ2IL4qsLR4qLAPkeqNLtQBhwvcrK9KCrviyWyAUadXDCK2gpjGfbDqLIpRjU6Y9DAHgOfVsqjUUaB3TKqwjJDga6SCmyeUfzu0BA2GvWxoVEx1FhmdGgka41q9NeggckGvqnwbY2T50YxG68TtF2k1CEokeUGiQ0XxBeaktmiJK0WClxqWq+6NFnUcx6hSlmEks4hLMEZhBpZK0pkrCC9khRNFTFbatCkoUIJsFOkZKYoKStFPRspqmSjKGkTxRJsoaixgaIW7RMUME+gU1kWjRMx2yZqwjRB7mQ3s2Gi9J0kF2aJaj3JK0aJJUaSPJkkatEiQQGDBLqRdKspWSNK2RiH1qMrGqKQGyc/dM5mWJQXApENGpceWNRLgSq1lNZnYk4JkygfjOtkMJkzwQTyOuNkdIW/yggtzhj7mwvS3IoMzmaIbM248jQTs6GZRG5mXFuZyexjJrCJmRAdrGCwr4KmuRQalzF2LROEZRWtyx3GZmV8LCeFTZlUycmKQZlcy8lkTSZEXyoYTKmgTUZbgciLjGcjKnVFJ3JGAXWBvAgENiOTXihGduSC9COTLxWrVVZakqu5/12jBHBBZ4DrnAKukC+5QMZkwivB0JocsjeBIs3JdHAnZ2RPLih/cjUblGvkUC5oi3KdPcoVNilXoksZB5syNhXl0KgcslO5IqzKxE50IZuVC6PpKuzKtVq6VgzL9Wq6JstyJXqWcTAtYxvBtoqRb7mQjatUDI3LGQXXBTIuENi4THqhGBmXC9K4TL5UrFZZaVyu5kxwjTLBBZ0JrnMmuELG5QIZlwmvBEPjcsjGBYo0LtPBuJyRcbmgjMvVbFyukXG5oI3LdTYuV9i4XInGZRyMy9hUlEPjcsjG5YowLhM70YVsXC6MpqswLtdq6VoxLter6ZqMy5VoXMbBuIxtBNsqRsblQjau1fBDH16FQiiwBZNlGWbDGoQXmZBZFSytahAvM9HVkyZVtNznRaEeL1j3d1G5twsnayqYjGnArxJBUyqILcm4NKRBBTsqhMyoYGVFRctGVBSyoYK1CRWVLahwNqDCo/0MFMxnINNUBo2nILadwoXpDFKXuocNp+CRxBNmUxSdeBWjKWol8ZLJFB4tZqBgMAPZJLLNhKyl4GwsQ7qjsxiiEBonb3HO5lKUFwKRvRiX/lLUS4EqtZQWY2LuapOor43rzjaZe9sE8hnjZDSFv8oIrcYYe40L0myKDG5jiOzGuPIbE7PhmESOY1xbjsnsOSaw6ZgQXadgsJ2CprkUGo8xdh4ThPUUrcsdxuZjfCwnhf2YVMnJigGZXMvJZEEmRA8qGEyooE1GW4HIh4wnI/rzkJvHfuSdYSjED3joHqMlaoAoYKBYrIBZmIANEXJy+F2vxz+cGBl+uqugn6DQqRErNKDyShyVLJiLD8OfixecihdrTh8wgT7y8w49t+7pj2Jn9qi4OKDQR8BTl/e09BEg6wlg1hPAhp4AUizVkXvBz4MNuLZ3gGd+VFoHCKrstATQv9YiN6DSCRA+QxRD4xRI4yqaJuaQmkRxNc7BNYEjbEIMs2GKdeHvcximuRSE3hDF33juBM59Ol/qjn4fYeyOgrg7CufuKFx2RxFFdxSJu6Pw1B1FSN1RBOqOgrk7Bv4+h2GaS2F3FMTdUbjojkHi7hgwdcevQ0889aNyKkAl/oBC6IFDhYCWgAOyWAOzMAMbIgykBNfRzBYU/VFcQfWotACQWE/1PC2lehpXUT2iFVLPaHHUs7Au6klpgaPSW8eOfIXRH8VFTI/iyv+A8pKm52k1c6C27S/guL7pEa1dekbLlj1r41Guc1upYCsr2OaatHKR1Suijm1c7vcorvR/xTEB0V/tx+W5HZkzOSrRRxQW+wfhb8MIO6w+/oYjDFDJT0AhUsAhUkBLpABZPIBZnwEb8hNICZGjWTzKLZjlFswqLZjJFsxyC2aiBTPRgllqwSy3IK60/paXWHvUhY90uZldpU2dbFOX28QXCaCI1naitV1o7cvJ4Tr83I+i/fVIeF3Pk9f1NHpdj+TFYq+QC/asjDpA0fJeDv525kdx7n+J/oYoz/gvyd+Qgr8BjtP/y+BvwGjSfzn4GxzlOreVCraygm2uCfsbKKKO5m+A4trj5QSviV9O0uXwy5TVwJMrv5yk69+XIqtBIVd+OckXvC8nfK27J9uQLduc1ducvcGAcVyQQF9GqhotVOS7p6YxRKoeTlSIRxbJNMhIpfEWVUgPEiijSaUByapIfSqSRwEXyCOWStCQIZXHCMk8pKPcVoXRsMgxT0W+13B2AlK1KVCh8bazVZBKrhFVMBASyEtIVbZCRbLDUAEyG1K171AhtiCS2Y1IjsYUxW1thLFdkZrs47fJcGP52A/tnjKyeDvZlffxcH9ZeWFH/d3VMz+0e3nA8Kad4/ijr1ky/sT41oL1GwYCUOrz38Ke6mNiHIfanmqS3wsGYQk7js+IcYDkjmPSaqEKOscLd+lSLDhyapfuIJV7LRg+Yxw+F2T48NYRMwgf3jsqLU03j5Igwle0WviCzuEr4jbHgsNnXIQvDM4QxKikUJKsAxoKva8qGNwghBBHJQU6yircoUQ16LlUCn0yQhnN1A1VIxwKDNNU6AZj3AEuyNAX+b1gEO6CMNDGOMQmiOAWrRbWoHNAi7jNseAgGk/h2y154W5DfxQvYnsUr9V7JK5re56ua3sar2t7RFevPaOr156Fq9eexGv1y6Hvz/woLjsvc3+78N5m1Muhjz0u/9gdPbGjD9b/l9jNgKDpTsttBD+l3UYYUPFp6AZD1BfGqUOMq14xMXeNSdQ/xrmTTOCeMiF2l2HqM5y/KQzce5XZm1ToR5y7TyOCHsXp/IIQ9a2azEmiXk6P/QYe9k5Cf0dOnR5F6vkoqu6PJXIORJ0SIYqcDVHllIhqzIuoUXKkndwqepwmY/u4VRFImLRt+VRwSJ20nflCcUqi6mZmpVM6BY1zCjadQUYhpXxCibIJJZVLqOdMQpXyCCXOItQ4h1CLGYQK5Q9tWc1x4typb1jNBSBvaMfmaaKQM7SP8yJTypfKLs6sUq6AwplStgRBmhiiHDFOCWJcZYeJOTVMorwwzklhAmeECTEdDFMu4MY+CgNnQWVbH6nQ/7jl7TQi6HncBXdBiPpc7YEjiXq7YO7qeJsDe5wV6niWqf9ZVmnAZXI2cAlKCpY5N1jnFGE9ZgqrlDAkv63GlNMnySqLqBAkEymQU6RAapECGcYKJRrLOd+oBKUdqZx9tocH8s4ZZZwLlGsuqCxzNeeXa5RZLnBOucLZ5ErMI+eUQWHHHkeEs6a2X49lyJSwhe2UGGRH2NZ2wYwyQm5qY42ywDj3f7nchO43RL1vnDrfuOp7E3PXm0Q9b5w73gTudxNitxumXsfbEBQG7vPKTQhSocfxFsRpRNDfeFfighD1tronQRL1dcHc1eWVUOhqQ9TVxqmrjauuNjF3tUnU1ca5q03grjYhdrVh6mp8sZvCwF1dea2bVOhqfOX5NCLoanwL+oIQdbV6B5ok6uqCqav/GHp5eCX9D+xhZKV3kcUXf0HAe2KA7dVfYP6GL0B/xRdgeccXUOlBYLPQMntDBVB8i7BH4sldz9Pjup7GZ3Q9omduPaOHjD0L7wn2JD5w+wP67fipocYyqT+KD5V6VBIUUX583fP00OlA4Ykr4Pj8ukf0PLpn9L7bnrXxKNe5rVSwlRVsc034cSgooo724BNQfDr+B46OIfqvJvgGfH8U34DvkXgDvufpDfiexjfgeyTfgO8VegO+Z/QGfM/CG/CvJ4e3Hk78KLp2j4Qx9zx5ck+jHfdIvsPUK+TRPSvxBxQd+PVgvqd+FF9tfJ0t14V3NoheYy8BEqP8NfUS0DjKX4teAoXG/+vQS8DC+H8d5ojXYXp4PUwDrn2II+g1mf9Ayy1K6H1DlALGVR6YmJPBJMoI4zotTObcMIESxDhlCd5kPiVE+VK5yUwqZI4hSh/jKodMzIlkEmWTcZ1SJnNemcDJZULMsHwf3dA0B+JDLsVZp26aD1J5sgqpZ4hSz7hKPRNz6plEqWdcp57JnHomUOoZp9TDB+ynhCj1Ko/XSYXUM0SpZ1ylnok59Uyi1DOuU89kTj0TOPVMiKmHLxBQhkxzID7kUpx66u2BIqX3/U6kwGk48r6fLiJSUr/vp9VKelbe99Myp6p+30+qmLb6jYaKKlM4lMFEjgKnc1RlUsciIrVjAU7wqFbSPBZKyR7llPJRpsRPL3rILJ3WQvmh9ok0IKpveRwKvJnwPsg3k7QP8g0/6yTMxXmbF+FUPG1xTEL6SGgWfyyI9NFdfuO1bH9I17I9o2vZnqlr2V7I17I9pmvZnvG1bA/5WraH8Vq2R3Qt+3YwsjM/iiPpbbIs4GnMvEVzAiRHx9tgQ8Diu6Nv0XAczWIjZqIH7Br8iaNaB8x0B8xEB/hlOHyviv8sx98uxP2j1+0CfPgtJCN8jqrQiNbaxXlgleY2urnh+hx5CYNXuxFRaFQUPm2/fGr6ennntbFIK5rT1qre6qq3oqf40h0lUX27dsdyucP84t2LrehQNGgl+of2cIGybu7mOTO6WKgTp+lqcet03DoRN37RGSURt051e5eTfxMPt3QoGoOvnA3nww3WpWTaYZ0E9mK9xzqpImRpl3USkj/nfdZJoWClndYsgGenqx/myr3V1Q9L5OO1qx+W2dHT1Q9z8vbCZ6LZyeVNIKs3Ptq/yvRNq/Vvsn8Tqt3LE4FxMhdf9YSBz4sh/hpVyzRDmMA25MJYqNSE4ZqYNUykqcN4LYx5EilKmkmK0IrCaU4xYbSdanYxrZYStXnG9Fpb04xjQiUz0txThJVitRCkqcgFOR8VWUxKRepE8TQ9mTDaBWqiMq3WBbUpy/RaF+TJy5TKqN0ItlWs1nw1q4ULjjC3RSV9Z5TTPBdlHfdYRkU/lkh9EOU8/0U9BzzqHPaophkx3ZQ5kwLPjiM3ZXQRMVPqmzJarcyalZsyWuYZVN+UkeqsGrI8p0aZZ9ao/gcZJWfZWGI8o/KMG+XvJFSafaPKTkv3BaLbyZsG+ovr7clzc5STO5P8/ZDL2ZpKqDk7FuGZO6rjnSJm8aDnuTzIbfWDeV6P8n8QHTnHxxLjCVmd72Op8QjluT/Ko3mZ1wFBXtWV8fDllQHJen0QCqlVQijQVT+aVwxR/g86V64eYonxzq2uJGKp8c4Vq4qoj3rSpqps68p46PKa492w0DjzozhHvsMFBSAxV76jhQPQOCu+CwsEYHTv+x0sBIDEKe7dhF8/ejdJbx6VJwPY1rRDijm1Wu+QYjG3P+2QYs6RyDukWIgxSTukiFN0KjuLwuMRjJPeWSRFitjIziJZIsdO7yySIkexsrNIqjGeemeREimyY5ts4NESBldtshESBba6yUboOahqk42QOKByk43QYjDVJpssUSDrO1DKAziMYdqBwpyip3egsJjjlnagMOeI5R0oLMRYpR0oxClKlZ0b73h7Ql2hgNV2blRkFb6RnRuVEhTM6s6Nis6hrezcqKgU6NEtC6xy2MOWhcQo1HnLQhJUeOWWhaRRSMWWhaRwGNOWhcQpdJU3/J1zuOyPHTxXjMLlAoXLBRUuV3O4XKNwucDhcoXD5UoMl3MKlwkULuMcruEH3J9nQqEqmAJVsApT0XKQikIhKpgDVDiHp/AYnEIpNAOmwAyUwvJ+CMlTPyrhABR/S/R9CgPw9Fui77H5gOi3RN+HZgMLvyX6Hpvr6EVoz4vYcz2KV1wuXMajmAo9Ev3d89TXPY393CN5y6pXqPd7Fm9O9Sh27x75b8T2R3G7QY9KCACFhgBPmxJ6WhoCyKoLzHoM2NBjQEoLHJUr2zMg5TbQeUGxk5ucmHaPB5FOzEYmZrh/AzjnayPytRH5andkHLXxKDejrdS5lXVuc+X4Tgoootp2ywRQHlNwb8Q6BO9JeM91oWe7nI1dJfU6mXpdTj2+mQCKSMpOJGUXknI6uN65H8XXtaboeoDELogpuR7QuAtiGlwPGO3HmILrAYnbH6YTfHVyit4FSLwkOSXvAhpfh5wK7wKFXnyconcBiq84Tie452eK3gUo2vc0eRfwZMJT9C5AZLXT4F3AwgQ7Re9yVJzqqZG9fupHpU2A4jub02RUwNPvA03ZqADHX9qbBqMCRj+XN0Wj8oa1oUCbm6F+CXpKRgU0V07/EvQ0GBWw+EvQUzQqR2ZU3h9dKNDlhqhfOZySIwHNDdE/YjgNjgRMxD/+RuGebMM42ebxvE3j9sNgZMMPZX1AJ0NmDzSBxbvAIOCtX8B2vxeYP6QE6DdtAZY7tYDsGaSzvaU9PbcjmyodxanSOU6VTm2qdMRTpSs+VTqzqdKRTZWG+mXLmTXCHwUCiwuyD8nUsGz+lbIPaGvIaPr7EHwNC5b4A7L4OyuT+xMgw7LMC9FnGtFcf/iGrNLeRrc3PlsDLuLQiDg0Kg78wGzP5mE4zeO46xFtVv4weCV8RyuC0NYa3OoGt6Jh6RkZSD74ANrjMGCio3115wxXd54AXRyhnbCXrmYlnbaSTlhJel4EknKZTrlMRy6DDy0S44akxxZJkM1UDy6Sxg3Ojy6SktrHDy8SZz/F7YWDWaXthcyVvarthSyR0da2F7LMlpu2FzIn8y0cHcoYD0kTyIuNy/Fqqhi0pvHINYF9yYRkTqaQUxuPF9HGacTyMyv+GlXL5OAmsI27MBYqZeiuCVc3sRbH5O8mVOOYnL4IYPeGyPONs/EXoRXfm6YAE0aDpSYD02rxqE0LptfileYHE3iSSE85WRDTRZFwzjBW81s9e5g6YqtpHjGhMpmYXrXdPK2YQrZLjyMV5harB5JKkwGpPJJUModFPpRUYmq8eCypJJ55QIPJBynNPyipKQj1PAuhShMRSnouwhI8HaFGMxJKNCmBhA6MmK0CNZqdUJJGggWEl6DMdoIaOwZqyWRRpPkKJZqywvPqYBziSbb4vkrV0/SFGs9gQftOONU8FmQxlaE+Eu40oaE2Fu40rYEGMxtSmtxQ4vkNtFafI81yqH0voGquQ3kkYLUZD4ukCyIUeeJDjec+9fqE0MQMCCpOgohHZgU9FWKBcedPEyJqlTkRi4xNDnlmRDFODvudwl8tq/ZHm3DkP5feH8X7cz1K9+GKZeL3FrTJaJs/yKcxns81WDCeq6BNRtv8QT6X8Xyu8M4TnDDwTYVvK9/D549irgR0JVQB6EbSrfwGPjlK+dTlJRw4b0GbjLb5g3w64/lc9i4FnMzYRrCt+Cyfz4V8QnsbAU5obCPYVnyWT+hCPiH8zfuTQDaJbNOn+ETib94PCv5Z65OINhlt8wf5VOrPWh+kqx292luLHcUXG/ZkYefsj+KE16P4/B+E+MzqapLekLia4J8YvEIHBySetF2RXwONT9quhDuDQk/aroIXAws/nHgVOudqgk8XrjD+gFJdr3E5dl7I56B/VpG9TnchzgP+nEvq70l7Ns8D/pxLVr4n/bJF+SYTPqvS+tsOU/5k/WV2vQ/h+UD7L85/R+Qoy6TlSMULb0NfbVTEkbY/egjaNmjU2zzQBqo7zTDXByfk0/gNm/ylD7nUNpfiiqo5epB0ahjm2hYOtcWdiPSlD7nUNpfi2qqdiUVSbz2Xqsm3npWIldfLg8gfKuW3lfKpQbVlw6Cry7ZzVrhFtNY4TV+1kSd4kGW3siy3o7ICKapfxqVmgJTaARo2BPBGn+RBl97q0qkxqOXW8LvOQ23Tu87EoQV5+WXoIZfa5lJcY7UiG6T01utQrfzWKwtQYbGEc/Ygym1FOa60XNYNWnr5dKhcfvmUBai1WAc6exDltqIc11quDQ/ax8nhftSpH8VFWI/K3SdA4l2JnqelWk/juxI9ojciekZvRPQsvBHRk/i2x0eIuJPdeFg063V/8+NpgfFDTW4ovZFzQLqh+Y2cA01v5PQ4t5/fyOmZaH8bj3Kd1es3PZcVbHNN9Os3vSLqSK/f9Ch3CP1F7o95CfQkCgM9rJr21xf9Nks/svsjjuwmHqC4hfIglMvslUD0tcbpu52rE4j9oVKgk9V2h2pVnDj+jTnx5+X0X5b7PIyEEz+KfvEZRwKifDnzmUYCUhgJgONVzucwEoDRtcznYSTAUa5zW6lgKyvY5prwSABF1LGNV4mfcSQMKO9a1wK1pbJnvaKKRtd3rFcK5L6q7FfXKkentl9dym1VGA2L7O36ZnRdYLRZlXSo7UTXMiVJZSP6Qb2bDDeI/Sh6Ro/ET5X3HO8CO40/Vd4j+VPlvUI/Vd4z+qnynoWfKr8bbOiwqrlDGwKEtevpMjR2mRu7rDR2KRu7zI1dVhu7FI1disYuU2PjfcJlaPoyN52XigMNj8SPIqIgVB6Ik5jDkR+HE9eBEQ/DSeAQpUfhEUOw8BKfAsFhU5f4gxR+FekoIopd5TeRSMyxy7+IRFzHLv8eEgscu/RzSBFD7MKPIcVAcOzUDYci5d+KOFICx3HslyJkERHTyu9ESLUS38qvRGg5xVr/SIQSMe75JyJUKFMfVH8gYihQbm1DHxii6BtXcTcxR9wkirVxHWWTOb4mcGRNiDHNjwOWeO+fAsERVPf+D9JuvUB3+/eEbtC3w4n9I5tw5NdKbVhFt3kV3cpVdFmccFXSjVHiUCm8MUroIZ9nKxBVtP7wspW3Gs+ExvVOtxqHmqZbjYo/VCqwrXFq0HeeUML6jtukbjVmCdpDtxozfZCn3WpK7Rh92NnyzbmziLn+eHNuqCbenCP0kM+zFYgqXH9c2o7u5meV604yNIGUTVV5qFZlW1eoeSznVlY23rf5FiQL0KZwC5LZgzjZVjGq+8iT5XKx0d/ROz+PqHwNc9vQSDzuaiQRTs2S7W8k7pscSfCdjiSU7Y6Ebc9j5FcZXQtUCUN5VJh5eeyXlCExnkV8k0ve7Bo+u89cVKOpVK+pVK8Z66Wm3kvxj4WRVunBptaDTa0HP2YkOvS2koHxFhirnzKaC1SJ53wsbvN63OaV2MxrsZnXYvPfGYlSn0djsBCo0uDF+BfZX1aL/C4j0cZl5ZzLStIuR+uyrIzvVqDKidux3m3rvdtWejf9mTqSa53fVsLaVpr4RaAyzZDN/DsXXQlUCdCq0jOr0Z4REVtXTrCunGBdtdP16KkVGv1AJ1Clrt1YtnT1bOkq2cLXVSzXsqWrWUWnJ8L9QuMizvubjPx9eUPbXMoWGcyh+SR9yzX6Vonwt0o2fBOzkP7bp4Z52YUXmcfxGzYZwZorv4bWVl5Da+uvoX2Bip6eF+IPvwxtw0foBF/0dw/fUnt3KOo1sbyOdHjcRl9l6pmri+bjffnSw/9/OL8wtXywX+UcZWwrnayFaoqvXOmPuYUJzfJKadEecol1BY+ccD1yQrQ2pX63OkNfHIbZaljFH/tRvC20wrU7IHGTaEUrdqDx1tAqrNOB0R2fFazOgdgL84aGl+JOARwGy7mR3aLtMEhXsFwDgu0B7M0BOLQGSGkMoNIWR/EgdJTzRThI9VzUPjZ4nZPdmurEDpbhYPhWIEO+IcHzAB+C7+QLxt0syQMP+xS83O47z/wgnMt5h83pUig63WWd6rIudRnNniDkvuxyXw5zpYOv2LxtOBhqDsSrOMByRw2GoiEaj8ZpUBpXI9PEPDxNojFqnAeqCTxaTYhD1jCNW7+xicnBtzvPI/ZhbCQmhmGRHaalFDEl5olhygnjlBjwijETNW6LuMhEN0qOfhOjBRTsPlDIMpPoCIajLTgW3mBiNAi7TZ06mK2i8OwXRXFzMKKcAx56Uig6HVVlJOKJJys6VbSvpMedzCuJFG0G7u1TaLaZRNcRt+wHJfytJkJkPekvNTFX1iP/UBNJZD35zzSxwNaT/koTYbIe+iNNp0yD9RTs1mMk5pNhkU+mpXwyJeaTYcoY45QxsCuBiTKNIi4y0Y2S1mNitJ6C3XoKWWYSrcdwtB7HwnpMjNZjL+OnDmbrEX8biT7h7mJEWQ+8M0Ch6HRUlfWIFwZY0amirSe9LcC8kkjReuBVAQrNNpNoPeI9gaKEp9doQFFgG4oqm1FUpSXFIsKYYgG2p6gmk4pysqook2FFkW0rqJSppEULCyIYWeSUo1FUmRpL5HyNOmVtFDk7o8o5GtQql5YViixqfCwU2gpjETLEIIItBr6scbLIKJJRkqjsMhYh0wzil0p6JQMNqrDRoINfRi4tlV8lkiFle62/SKRLfCd12XDH3iLSZUbTO1mweoVIal8rId7WOFlz7fWhg563VoktVeVNhuEjfP02FEqrfuLwDXpv3TpN3sTxGyobLtfiT4knBb9Hemr5hB4RUoXv9LFBWziHo/3fzGUS7wY6Frf6ivg+kandfy1k/+fjn0VSZlrCMENGpdzoHe7gnmZxUA73hb8O0/zBbL7i3A6oTOiA4jvYzvHFa6f2trUjf3vamb8u7qzsY3Zir04bKonw1NoU9Sa3yd+tB6Tb1Mg2xVfnHeemNqKpjWhqG49yndtKBVtZwTbXJL3X7oqoo7/B7ijHnn5vd1PWjed2FN/v24QVoqO4LHSe3gLchAWgI1/1OfOlnrOyvnNiizpDJaGeWJt80bfBhAIUt/FsUkIBT+vbDScU4LjW3YSEAkar2s2QUHCU69xWKtjKCra5JulneFwRdfQf3XEUF9QbTKhD8B8muH3vAYMPKG7fe0jBB56etz1w8AHHTXMPIfjAaPvetriqH9lodmSu6kjsbNmyqzqNe1i20VWd0SacLbqqk7ghZYvT65GhWKDJjaItS9tsq85lo8SOpG2wVUeirbzhaFts1Y9yndV+oi3bqtNcE71daBtt1VncGLQNtmrIly9D9PGBxAkhalN6IMFcNVg9kGCJmp4fSLDA3cEPJBhTHNLSlWIhinJOGqfEdD4SC5GiLuU8Na0Sp5SxJtTi1ApUaaDMYhPrDeF8Nq6T2uRaWzi9jVf6NiU6vDINuY6UIoASZTxKKj6o5xChSlFCiSOBGncsanEMoEKhUr+rkYOlP8DjASUaEkEaD5YYGEHNYwPleizTCEFtJJatpvW2y9GC+mgDecygpIcNlhhpIw8elOpJwUPoW1mvnttRXIN/C+tVQHkN/o3Xq0Bxveo4Ls2/xfWqM1qafyvrVT/KdW4rFWxlBdtck7RedUXU0derjuK1wjeciRhR/dNMlLhonJqJkpT7Ic1EzLm1eSYioRWo0kDZS2omYqlS2Uqn5ZmIBeq+NBMNvNyvUoiaaJz60Llouom56S7lPjSNwmKc220C92ERWoEqDZR9aGK9IdyHxnUfmlxrC/ehcepD/BWkGqamBo36M2oiFKFADkeUc98GnUIWNI5LELmfUWwreCQIss9DgfGGct8HTfd/KDLWVs6DoEEu/Ot//z8nhUqv";

  // node_modules/.pnpm/@pdf-lib+standard-fonts@1.0.0/node_modules/@pdf-lib/standard-fonts/es/Helvetica.compressed.json
  var Helvetica_compressed_default = "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";

  // node_modules/.pnpm/@pdf-lib+standard-fonts@1.0.0/node_modules/@pdf-lib/standard-fonts/es/Times-Bold.compressed.json
  var Times_Bold_compressed_default = "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";

  // node_modules/.pnpm/@pdf-lib+standard-fonts@1.0.0/node_modules/@pdf-lib/standard-fonts/es/Times-BoldItalic.compressed.json
  var Times_BoldItalic_compressed_default = "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";

  // node_modules/.pnpm/@pdf-lib+standard-fonts@1.0.0/node_modules/@pdf-lib/standard-fonts/es/Times-Italic.compressed.json
  var Times_Italic_compressed_default = "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";

  // node_modules/.pnpm/@pdf-lib+standard-fonts@1.0.0/node_modules/@pdf-lib/standard-fonts/es/Times-Roman.compressed.json
  var Times_Roman_compressed_default = "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";

  // node_modules/.pnpm/@pdf-lib+standard-fonts@1.0.0/node_modules/@pdf-lib/standard-fonts/es/Symbol.compressed.json
  var Symbol_compressed_default = "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";

  // node_modules/.pnpm/@pdf-lib+standard-fonts@1.0.0/node_modules/@pdf-lib/standard-fonts/es/ZapfDingbats.compressed.json
  var ZapfDingbats_compressed_default = "eJxtmNtu20YQhl+F4FULyMGeD7pz3AY1ChtG7NpFA18w1NomIlECSRcxgrx7SVk7+wOdG8H5OJydf2Z2d5gf9cV+t0v9VK/r+6vXsXlOlbHe28paq229qj/t++m62aXZ4J/m8PRb1z9/baZxefK63Z6eXN5dVMvTCh83u277xr/6kLrnl2XNq7TpXnczuZyabdee98/b2VzM/x4/dd/T5qab2pd6PQ2vaVVfvDRD005puE3Lu7eH1HbN9hTjx4/77/X6y5lcnUmjVzHIVVDicVX/1W/SsO36dLMfu6nb9/X6TAoBD+5euvZbn8axXtuZ36dhPJrVQqgPQoh5hev91LWLkIv94W1Ygq9+aX+tZAx2tfz64284/sblN/rqfLP/mqrbt3FKu7G67Nv9cNgPzZQ2H6rz7bb6vLgZq89pTMO/M/xfEqturJpqSM/d7GJIm2oamk3aNcO3av80O5xh3yyKmm1193ZIT02bqovTKjP+MAf++7zsZvZ3276kYyWWXB0z99S18/PbafPHQ71W4fjn/fxnFO+ZvkrT0LVzTr78qB/+nk38bHM9exgP8zr1z9U7jt6840YW5uSJKcZOCaBBnKgm5mU8MVNYyMwWFvO7Ukagkmgg6sDWQ5yFFqjzUrLEaQ3BEmiwNsMSaZS0vgWfOkPHWQowNeTUc0kumnxZvsgPxlGai6VTGUqAVCTQ6QkWnc77DKEiLktSUBJKqHIQZ86d8gCpHYoiEzMsb1ubYy8vW50DChB5ZhGqrijD0EqUIeiaEHIfCg5Kpuu0ApiToaGPSY0uaQsyr65L2oKi1yFt1PLaQ3lzfXTgXodGoJYzglndSLDMPg1sTPJpQJHJigw0QrGERqD9YhyTOgONQDUyuF1zaxuokc/BW2ztXCMrGZ9WMW1oQZHIXWNBkSCfRZEL5BMUiZw6CzVSFCfUSGZFNjIldoKDkonTKQiJIGzWmFd3BizJJ9SINoLDriOfUCOZS+zg+KGD1qGiLNMLxtJD1/ns00ON6EzyUCM6vbxhoBKaqbG3DFQCNiL1iHccBPV0DHhQH/JW8EW90dkyFKGywCJU0WkVSvSGeiSUODWFFD0HYdPQVoiRgfPMA+/nnRgiAyNYSjpWNQcNSMrtFCUH4ZIRpSCWocFCSuhCEY6hoUClc0WC52BJlCYYLQdhN+hygRRRlo5BKRRLS6oihSqh+ZzzRGG1Mo4Iz1LoP0qsxDGFzk0JE42ji0jCPejomJKCuwil4m5CiRMEUMVSzVLDUstSx1Juc0oVWMpqY295qVltmtWmWW2a1aZZbZrVplltmtWmWW2G1WZYbYbVZlhthtVmWG2G1WZYbYbVZlhtltVmWW2W1WZZbZbVZlltltVmWW2W1QYjQCh7E2aAQHeGhCFgPoNoy8KNb2wxBhmGKBxoUZXlLGsLI6AsftEDHV0wIURVbANLcTKlGGBIKPOAxCmhePCKUwFzAmpDFRQvjA9R06Hq8TONvshgKDCuRAZTXigUxjxNFfKRo3CLhnIJBMFRvMZpqpNBMlQJzGT5WFQMVQI/AikPMIhEU1aDjqJvQwmjSHB05cC9jbYwc5UtAHNLhDw41ha+lEqF4JaH3gmB61SYcqInxTDmQK8v08vjqv4zDf1N0w3Lf4A8/vwPpfK11w==";

  // node_modules/.pnpm/@pdf-lib+standard-fonts@1.0.0/node_modules/@pdf-lib/standard-fonts/es/Font.js
  var compressedJsonForFontName = {
    "Courier": Courier_compressed_default,
    "Courier-Bold": Courier_Bold_compressed_default,
    "Courier-Oblique": Courier_Oblique_compressed_default,
    "Courier-BoldOblique": Courier_BoldOblique_compressed_default,
    "Helvetica": Helvetica_compressed_default,
    "Helvetica-Bold": Helvetica_Bold_compressed_default,
    "Helvetica-Oblique": Helvetica_Oblique_compressed_default,
    "Helvetica-BoldOblique": Helvetica_BoldOblique_compressed_default,
    "Times-Roman": Times_Roman_compressed_default,
    "Times-Bold": Times_Bold_compressed_default,
    "Times-Italic": Times_Italic_compressed_default,
    "Times-BoldItalic": Times_BoldItalic_compressed_default,
    "Symbol": Symbol_compressed_default,
    "ZapfDingbats": ZapfDingbats_compressed_default
  };
  var FontNames;
  (function(FontNames2) {
    FontNames2["Courier"] = "Courier";
    FontNames2["CourierBold"] = "Courier-Bold";
    FontNames2["CourierOblique"] = "Courier-Oblique";
    FontNames2["CourierBoldOblique"] = "Courier-BoldOblique";
    FontNames2["Helvetica"] = "Helvetica";
    FontNames2["HelveticaBold"] = "Helvetica-Bold";
    FontNames2["HelveticaOblique"] = "Helvetica-Oblique";
    FontNames2["HelveticaBoldOblique"] = "Helvetica-BoldOblique";
    FontNames2["TimesRoman"] = "Times-Roman";
    FontNames2["TimesRomanBold"] = "Times-Bold";
    FontNames2["TimesRomanItalic"] = "Times-Italic";
    FontNames2["TimesRomanBoldItalic"] = "Times-BoldItalic";
    FontNames2["Symbol"] = "Symbol";
    FontNames2["ZapfDingbats"] = "ZapfDingbats";
  })(FontNames || (FontNames = {}));
  var fontCache = {};
  var Font = (
    /** @class */
    function() {
      function Font2() {
        var _this = this;
        this.getWidthOfGlyph = function(glyphName) {
          return _this.CharWidths[glyphName];
        };
        this.getXAxisKerningForPair = function(leftGlyphName, rightGlyphName) {
          return (_this.KernPairXAmounts[leftGlyphName] || {})[rightGlyphName];
        };
      }
      Font2.load = function(fontName) {
        var cachedFont = fontCache[fontName];
        if (cachedFont)
          return cachedFont;
        var json = decompressJson(compressedJsonForFontName[fontName]);
        var font = Object.assign(new Font2(), JSON.parse(json));
        font.CharWidths = font.CharMetrics.reduce(function(acc, metric) {
          acc[metric.N] = metric.WX;
          return acc;
        }, {});
        font.KernPairXAmounts = font.KernPairs.reduce(function(acc, _a) {
          var name1 = _a[0], name2 = _a[1], width = _a[2];
          if (!acc[name1])
            acc[name1] = {};
          acc[name1][name2] = width;
          return acc;
        }, {});
        fontCache[fontName] = font;
        return font;
      };
      return Font2;
    }()
  );

  // node_modules/.pnpm/@pdf-lib+standard-fonts@1.0.0/node_modules/@pdf-lib/standard-fonts/es/all-encodings.compressed.json
  var all_encodings_compressed_default = "eJztWsuy48iN/Ret74KZfHtX47meqfGjPHaXx4/wgpJ4JbooUU1JVXXb0f9u4JwESF13R7TD29koIpFi8gCJBHDA/Pvm+nraTuPmZ3/f5HHzs7/k8WlzvXS7fvPXp02eqyR/2vRfd2N3gqhUUfm0Od9P236+DoczxLWK66fNpZ93/fkGWaOy5mnTnUR67c57lRaZSItM/tnN/XnsX/DfIqg0JOk8HI4UK4BCAFzG+xWCQgXF02Y3nU4dJJVKKrx5mPgKBVMImOvYXY+QKJRCoHzXzxMErQrap810hqaloioF1e0L5kvFUwqe23Hu+Q+1TinWeZnuMwSKrRRsL8Nn/kOxlYLtOnzFWE1Viqmu/eceVioVaylYe1OwVKilQD0PCYgiLRtVcJz4kEItW13mNLi0UsCVAB77KyxTKeJKEPff3rsREkVcCeLD3He3HqArBV0J6G/v/fU2cK1WH23l0e3c7T71N9uUVv/c5i73bWlVs1Y0u5/3srO7aQb2EPUB+eUTva0TYgG5mGbbzZSUkJTpn75ygF4PThhq1SMGMds4HYZdN54n/rdWc8rv02bfH9I2hbqGsKbPnIYzHSc0qmTIxI6nuwpiAIQmU8F4Gy7jK8RwntAI1v3wedj39FmFECp508s4zUOyGmwpKrwbL8eOIlVU//Yf/S1J9C212Pa/uuSwbVDYlWzxf/aj/UtfWgm258t1GG1X1BVawfdnX0xdoRbjPCdBVGs1svo3R/tPVD1r2YL3k0kUfC04f9ldLkmk0NVwv+pO232SKXa126/vHAO5wPxNGivsRsZ/HDhWzLVg/iBuOSfMUTGrTX+b/qSIG0H8u+NEl1J4jcD7/XBI9kDcUYN/0/FNCDuNAP64skYOeLrykUsjElWC9+cmAEAB9NtrEijCplaE/YHvKuC5Iup8zxBAWtFrayakC2QC8uCbhggSskx9zXYNQSRkeuZWQBFKQowabNIfS/qeqOgSOFTINcC4DKcnE70H2zqElJAJ3k++dwgrIRPA47J5iCwr724RWELINFBTAAWiCL7SOogrIQj6abWBOH8hCPoL/4a4EoJgn9MWIq40lcY52cJAGbCHMgkpA3g9t7e0sRWgB1HnvjJYRez6yrSTlYJvRZmdCQhe80Pa24roNYL75uLo10WyKYHVeFLjYnImilM0qPDOJOKWNGlFCJsIrw/qsNv7OPY3SnNYSQ9DP46DLHylvGCcEFU08Nz6JIVx9Chd+93ENNhEWroSuC8SAi0WNznNpqH9+c5k1RQ0nIbi9/LnTzdmoKZAaAwaib/0g0Ti29wxG8gUgLey/O8eHmmqt4eiKTNYo416LPrLkcIWa2u06eZ5+mLBXCaoTp4m7pckBm41P8Qe0mUG6DUCYWY/fTmnCQbwkCa2043vrhA2gqakncwM3aGfe9GAj1Vw9qiuzPW2o4Or4PcxhmUu4atwAGKMy8wCscJhiDFfJh1lhY2K6mo250DrTJXOC82EUgVIkTMmOd0moqC5Dd24H15e0hRKJS0Cvg7Xm9RKgz9ErdWrTpfb6zV5Wx2ytwlDZLplUQ/8Ye72Qyq5RI5kqY4t6fe0iHOItdCYbo8zKOi0vLjvjrdjZ2IYRAPUZZ72910SI7vEiL9LaHSvrZFkipKOf02y8gc9vEbmKHQjRP95uH6ShZI9c9pao41otTPLICMETXSC5jLNupbP8bxo2Dy/DOfh9prk8BKNk935MPIo1jiKUSNQqiVSVSozBWYan5nmNMGz1+r6AleO8KJJwXdk2H8XwgVVP31AticBhdvqIZPwNPcvqWhqah74iIB6GsYuvbdGeYFS93yY775hPNh6giUlzNNXr/eaJmNYKrnLKznOt4ZsEQ6f5ZCfWVvJFK2Xs5BcP8ND23r5uJqDyaPmM90Oscl9a87aIC3HLCxz+uOzNFgOhA+P4XRq8hPTjP3Xhzn4oiYIm1svybSpOX03zDuJX4kqyAx3rrKZdZ3XNMggGh9lsUt/Fm+7m+1bGCxqOttPN/fOFiExKh+xnb1d0gz8qiiXmS0r5YxLaaULN/TaOsu4WEgTS3Fd1TCvlsvj9F1/PvQpPzHAZqiN9yZEntcyaDfet0mGOKLl5LGX6EMhU5ZGkf3QnVIWqvJA5FoG7KbLK1BcBcyLTfNYZGr7g8ar+WEWm63VgmSefX/q5k+r6Rplrdo/Heb+q00gKzcWUiVy3pY5RkGL7kept7/zSRS8Uc+Kw+nOV5ukqeu1KqtZ2Ds2a6yrWZghX/NS7q3OwQZ5WM0tgGCBPK7muPM6B2fP8wditayKMKG5YzW7rIvzkJcPs8vKOBGaRJxo+boMocrFfe407G0SJlJS7pO+KOrwqKkAcw4lp28Xi28vU7AM2Lfz9gUITKM8fJlcnoRtlJIvkwsSRtD2kXkuC8M2ytbX08vSME4ZHqd9cTQgojL5hXr60uhDxDJfTy7WQ3kXy2I9q+t+L7V+d3nZD+fDtrtdf7iZ8gPUNhVNSLOdFKmrqgg5UGR5ktUWkERW4ETnYSnQpK5PsqU2k3I5yZbCTGhJki0lmbJ2ypxOd8rYKXM23Slnp6yxclZkVZK1li1EVlMWmY0yyJokC5bIRdYm6sDCW/9X54knZEYnurpKJCEzNtHVdYqTmdGJrm6SiJRMsdWJmTS1MYWuSZwAHg3D5dSJO6tnpqPiNXIHapSQHkL9WNCyDwEZymTtQzyGcfx/rQVukWUP4RgGS29oG5RieEMSVKm67GISoHZUs0g6TKImlZMdbde2cDMFUCZBSBWevKlNIlRrBNQkEVpt0CXUSYTWGvzG1q5TldeFIklgFfiMvQ6tNXgMtk5IM+qSAjbJSpOh4wdUtYnQYgOqxkRosgFVayK02SJsYCJ02tRw9HkVodUG00UTodcG4+UmQrdN0dPhVYR2m8KPBhX1t/bkumgaofzWplwXDT2Oo9K2Lhp6dogUvT+HBpGC98fQxlDs/lSVCr/OVGZ7CGY3lXEIKyD3fylyrQS63P4VjTl0uRkGJxB+l5th2CBS5LkZhg0iRZ6bYdgPUqC5aYMEh8CSmzrsCinU3PRBKkNYyQ0qTgSiSmFQcSAQVAqDimSFmFIYVPaKFGphUNktUqiFQUVaUvLVFbaHSEZK47vC0LNfpOgLQ8+OkaIvDD2SjZbOXWHokWBQgJeGHkmlwaEz9EglKHFKQ48og8qmNPQgJEp0u9LQg4mAjJeGnm0rRV8aeratFH1p6EE8tBnQlYYebSutwLrS0KNrhRZYZegRbpV3dpWhR8tKSU9XGXr2rJTsdJXBTz0ruLjhT00rVaAyBVLTSjWoTIPUs1IVKlOBbSulAV1lOrBzpZS2q0wJNq8yhH7TovIOb1cb5tSXUny14Ut9KUYQUyS1phRgbaDZmEIiFrKThCnpIMMYGrZh0JBo7M01e+H65sZeUpPp6ZsbX4+dcH1xa1YgxYsIAWYF9rXBI1p/L9tiiL6ZmYGtrYpZybaz8caUCA1iA4iIPcEN0ZAQIuq70g2ZPCOQ7R+yE5riIjTojfMRESbsge1zHMhgsSlk5PR4u0WnQDraMOdEE7JTj7dbhAqpw4K3W4wKGZv3eHtempBkA+nHQldgrwXHM1jwCgj0pB7BwlcIbI7BnhbAAmsvHNJgISyw+MIxDRbEAqsvHNRgYSyw/GqZSE0j1l84rMFCWWABhuMaLJgFVmA4sMHCWUi8CRpZQAvkSzizwUJaIE/CoQ0W1ALpEU5tsLDGDzqg6yI0jaKzfxGaRuRBOLjBglsgAcpYHZhG5D04usECXCDdQd0WLMQFshwc6GBBLqQOETSyMBdIa3DMgwW6QD6Dcx4s1AXyDpSRYmoTsrpmzWKQyDJw0GWjTci2GCBZIAtkFDj+wSJZIJPA+Q8WygIJRCQkw8meFCJAsGAWCu8BiNAsjzTAXkKwEBfYg2IQqM3y7EFFauT/ZAcUGlk0DAU7nyzETPeSHBIa1aZmSe4IjWpTsyRphEa1qVmSTFMjU7Mki4ZGreEsSZ+hUWO6s7+bc4/8cdJlaNSYQdjTRbEbM3+c5BgaWTgOSA7stkSLiqFiCwbgLUiHinQX4C1Kh4pEl+BN94oEl+DNdBWJLcH74yS0AG8RPeCjRmRZ3JiR0ZWKrItbW7MmZWVlbG+vSVWxHY2tyW+lJTUy0yEVgdTKmmYlNplKagSDCMFlTIaH8GmVMWkpIj6sMsQv+Ae3UmUIX3AP6q0yRC94x/IOBC84B4+VyhC7yHTIELQRhGgM32hchmAM14hMRCpEMIZrNC6DJvAMWkxl0ASOQYOpDJqACrX+EmgCX9EQ8f3T5stwlggXf/otCfss8O19uvX7LfqmP3Z1AiRPP2JPY2pA/vTbFIhHqhFedB2s0/2v3bIAG1z14yH8CVcvwJFFoePr5cgbDv9/G+Pfvo2BUIP6ix0r8EO9ZYARuKFeMMAIvFA/gWMESqifiTACG9QrBTpCBFGK9wuMQKz0UgJGoH+C7L8xAvPTL40Y4au7gPkfjEAB9SYBRmB/eokAIxA/vT6AETifXh7ACHRPrwroqAFX0i/5GIEmCZb/xQj8Tu8LYARqp5cFMAKr03sCGIHQ6SUBjMDlBMsfMLIP//+HERicXlzACORNsPxJR2iW4I4FRj92EQa8TTuGInY3/vHrMSBwuoPX3TDot4c7osKPXJtBm0XLvsPc0XfRZkHNhxE4nLZsMQJ902/jDOQIkriXkAL7JhEyNh1ZemtZ98IxCZvebeCYZE3AHjkmUdMPGRyTpAm6v3FMgqY3EjgmOdPPZhyTmOlFBIwZxHEPgWNeJ9BbBxyz+af9c45J2PRMcEyyph8EOSZP03PMMTmaXjLgmN0+vWLAMfBpFfeZY7838AVjNilxLYJj4NOy7ZVjUju9zcHxv3/FiVcKULCpf9yGcb9qEOPL/6pp7GyO2cU+S7N2AaOzDMHKBXxO4/goyYBiZ3S7+yxxf0fNKud0r31a0gnddp4+9WfTpHJOt/r4yfIlfVDq5z7dgWABg8amf4SBnLxZQ9A0718keFqMZSGDNurhPoxjf5r84LGeQY/77d0vb3QvyYc1DTrd9nWo56movd196uyqy792faz2prfkJHyAHPiBONTe+kZ2ephrlhb4Ll0HSRfRNOLxqk5onB1LWu4kCPAGRmicIDOZ6j67Ro0T5V2/F6t1lDpTlkz6iMTpspj/JI53H83+jZNmt/+ybY2TZ1lRctmcUldonEDLxLEbGV5aZ9AwRnqAJmydSFu6c2dunU6/8yDIL5Og0+8W67VOp98xsL6kr1H8FglO/W45Uq1z6ncPXto6rX432zlpnVW/e6bAGfXPV0aOmXPqZwcbM+fUzw42Zs6pnx/BxsyJ9fMaV8ycW79fre3c+v1qbefW79+u7QT7/ePazrGf+UE7Zk6wf+Mmi8EJ9ocFQnCC/WGBEJxgf3gDgddNNIp/WC3Mb12i24cHXIEfkcs3FzGDM/UPnnJjcKb+cQXOmfrHFThn6h/fgItO1z8+4IjO2P+0LBOdsX9znHgBKUYn7Id+Pkklvh3TCgtpX9DFhbSvll1I+1t0C3NfTBcX5v4IeSHv5sYxX7g7H86dt+/Wbpw7c+8XsLkz934Bmztz79+AzZ2+9w+4cmfww2ptZ/DDam1n8MPbtZ3GDw9rs9ui3KZPblw4tz8vJiuc208LhMK5/bRAKJzbT28gFE7wp9XCTvCnR1zO8ZeLw7Fwjj8tTlw4x78v0Ern+PcFWukc//4GWulE//6AonSu/7paxrn+zZ2YnRclRK/rBXJsCAjxh2cKEAWVJ02ku/wOoFv2+12XkmnODwHgW4uQGVbZ0uM7mAJ1b/68/JlpUMnWdy5MF6/Vd5eL19YYSPd6FqPwBkNQo/h2NQxdQQ3bn/dpCxrGrqCW7U8rKZl/mfi0Xytk3Am66ZhYbg4y+KAVslDwbXdNL2d5qU5hnYBlTZaa6hs2t1qWdaeeTptcLco+hl5R7w4H5uOGcQbtEkpT18GusOI2xT9dYcVJf7zCSjmbD+Iud2s1NPRb9E+0UICmizb8ZK/+5JOLOulSqwaw5VJr2vB8dSFn89fvv/8H0oq1dA==";

  // node_modules/.pnpm/@pdf-lib+standard-fonts@1.0.0/node_modules/@pdf-lib/standard-fonts/es/Encoding.js
  var decompressedEncodings = decompressJson(all_encodings_compressed_default);
  var allUnicodeMappings = JSON.parse(decompressedEncodings);
  var Encoding = (
    /** @class */
    /* @__PURE__ */ function() {
      function Encoding2(name, unicodeMappings) {
        var _this = this;
        this.canEncodeUnicodeCodePoint = function(codePoint) {
          return codePoint in _this.unicodeMappings;
        };
        this.encodeUnicodeCodePoint = function(codePoint) {
          var mapped = _this.unicodeMappings[codePoint];
          if (!mapped) {
            var str = String.fromCharCode(codePoint);
            var hexCode = "0x" + padStart2(codePoint.toString(16), 4, "0");
            var msg = _this.name + ' cannot encode "' + str + '" (' + hexCode + ")";
            throw new Error(msg);
          }
          return { code: mapped[0], name: mapped[1] };
        };
        this.name = name;
        this.supportedCodePoints = Object.keys(unicodeMappings).map(Number).sort(function(a, b) {
          return a - b;
        });
        this.unicodeMappings = unicodeMappings;
      }
      return Encoding2;
    }()
  );
  var Encodings = {
    Symbol: new Encoding("Symbol", allUnicodeMappings.symbol),
    ZapfDingbats: new Encoding("ZapfDingbats", allUnicodeMappings.zapfdingbats),
    WinAnsi: new Encoding("WinAnsi", allUnicodeMappings.win1252)
  };

  // src/utils/objects.ts
  var values = (obj) => Object.keys(obj).map((k) => obj[k]);
  var StandardFontValues = values(FontNames);
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
  var import_pako3 = __toESM(require_pako());

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
  var import_pako2 = __toESM(require_pako());
  var PDFFlateStream = class extends PDFStream_default {
    constructor(dict, encode) {
      super(dict);
      __publicField(this, "contentsCache");
      __publicField(this, "encode");
      __publicField(this, "computeContents", () => {
        const unencodedContents = this.getUnencodedContents();
        return this.encode ? import_pako2.default.deflate(unencodedContents) : unencodedContents;
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
      return this.stream(import_pako3.default.deflate(typedArrayFor(contents)), {
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
      this.encoding = fontName === FontNames.ZapfDingbats ? Encodings.ZapfDingbats : fontName === FontNames.Symbol ? Encodings.Symbol : Encodings.WinAnsi;
      this.font = Font.load(fontName);
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
        Encoding: this.encoding === Encodings.WinAnsi ? "WinAnsiEncoding" : void 0
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

  // node_modules/.pnpm/@pdf-lib+upng@1.0.1/node_modules/@pdf-lib/upng/UPNG.js
  var import_pako4 = __toESM(require_pako());
  var UPNG = {};
  UPNG.toRGBA8 = function(out) {
    var w = out.width, h = out.height;
    if (out.tabs.acTL == null) return [UPNG.toRGBA8.decodeImage(out.data, w, h, out).buffer];
    var frms = [];
    if (out.frames[0].data == null) out.frames[0].data = out.data;
    var len = w * h * 4, img = new Uint8Array(len), empty = new Uint8Array(len), prev = new Uint8Array(len);
    for (var i = 0; i < out.frames.length; i++) {
      var frm = out.frames[i];
      var fx = frm.rect.x, fy = frm.rect.y, fw = frm.rect.width, fh = frm.rect.height;
      var fdata = UPNG.toRGBA8.decodeImage(frm.data, fw, fh, out);
      if (i != 0) for (var j = 0; j < len; j++) prev[j] = img[j];
      if (frm.blend == 0) UPNG._copyTile(fdata, fw, fh, img, w, h, fx, fy, 0);
      else if (frm.blend == 1) UPNG._copyTile(fdata, fw, fh, img, w, h, fx, fy, 1);
      frms.push(img.buffer.slice(0));
      if (frm.dispose == 0) {
      } else if (frm.dispose == 1) UPNG._copyTile(empty, fw, fh, img, w, h, fx, fy, 0);
      else if (frm.dispose == 2) for (var j = 0; j < len; j++) img[j] = prev[j];
    }
    return frms;
  };
  UPNG.toRGBA8.decodeImage = function(data, w, h, out) {
    var area = w * h, bpp = UPNG.decode._getBPP(out);
    var bpl = Math.ceil(w * bpp / 8);
    var bf = new Uint8Array(area * 4), bf32 = new Uint32Array(bf.buffer);
    var ctype = out.ctype, depth = out.depth;
    var rs = UPNG._bin.readUshort;
    var time = Date.now();
    if (ctype == 6) {
      var qarea = area << 2;
      if (depth == 8) for (var i = 0; i < qarea; i += 4) {
        bf[i] = data[i];
        bf[i + 1] = data[i + 1];
        bf[i + 2] = data[i + 2];
        bf[i + 3] = data[i + 3];
      }
      if (depth == 16) for (var i = 0; i < qarea; i++) {
        bf[i] = data[i << 1];
      }
    } else if (ctype == 2) {
      var ts = out.tabs["tRNS"];
      if (ts == null) {
        if (depth == 8) for (var i = 0; i < area; i++) {
          var ti = i * 3;
          bf32[i] = 255 << 24 | data[ti + 2] << 16 | data[ti + 1] << 8 | data[ti];
        }
        if (depth == 16) for (var i = 0; i < area; i++) {
          var ti = i * 6;
          bf32[i] = 255 << 24 | data[ti + 4] << 16 | data[ti + 2] << 8 | data[ti];
        }
      } else {
        var tr = ts[0], tg = ts[1], tb = ts[2];
        if (depth == 8) for (var i = 0; i < area; i++) {
          var qi = i << 2, ti = i * 3;
          bf32[i] = 255 << 24 | data[ti + 2] << 16 | data[ti + 1] << 8 | data[ti];
          if (data[ti] == tr && data[ti + 1] == tg && data[ti + 2] == tb) bf[qi + 3] = 0;
        }
        if (depth == 16) for (var i = 0; i < area; i++) {
          var qi = i << 2, ti = i * 6;
          bf32[i] = 255 << 24 | data[ti + 4] << 16 | data[ti + 2] << 8 | data[ti];
          if (rs(data, ti) == tr && rs(data, ti + 2) == tg && rs(data, ti + 4) == tb) bf[qi + 3] = 0;
        }
      }
    } else if (ctype == 3) {
      var p = out.tabs["PLTE"], ap = out.tabs["tRNS"], tl = ap ? ap.length : 0;
      if (depth == 1) for (var y = 0; y < h; y++) {
        var s0 = y * bpl, t0 = y * w;
        for (var i = 0; i < w; i++) {
          var qi = t0 + i << 2, j = data[s0 + (i >> 3)] >> 7 - ((i & 7) << 0) & 1, cj = 3 * j;
          bf[qi] = p[cj];
          bf[qi + 1] = p[cj + 1];
          bf[qi + 2] = p[cj + 2];
          bf[qi + 3] = j < tl ? ap[j] : 255;
        }
      }
      if (depth == 2) for (var y = 0; y < h; y++) {
        var s0 = y * bpl, t0 = y * w;
        for (var i = 0; i < w; i++) {
          var qi = t0 + i << 2, j = data[s0 + (i >> 2)] >> 6 - ((i & 3) << 1) & 3, cj = 3 * j;
          bf[qi] = p[cj];
          bf[qi + 1] = p[cj + 1];
          bf[qi + 2] = p[cj + 2];
          bf[qi + 3] = j < tl ? ap[j] : 255;
        }
      }
      if (depth == 4) for (var y = 0; y < h; y++) {
        var s0 = y * bpl, t0 = y * w;
        for (var i = 0; i < w; i++) {
          var qi = t0 + i << 2, j = data[s0 + (i >> 1)] >> 4 - ((i & 1) << 2) & 15, cj = 3 * j;
          bf[qi] = p[cj];
          bf[qi + 1] = p[cj + 1];
          bf[qi + 2] = p[cj + 2];
          bf[qi + 3] = j < tl ? ap[j] : 255;
        }
      }
      if (depth == 8) for (var i = 0; i < area; i++) {
        var qi = i << 2, j = data[i], cj = 3 * j;
        bf[qi] = p[cj];
        bf[qi + 1] = p[cj + 1];
        bf[qi + 2] = p[cj + 2];
        bf[qi + 3] = j < tl ? ap[j] : 255;
      }
    } else if (ctype == 4) {
      if (depth == 8) for (var i = 0; i < area; i++) {
        var qi = i << 2, di = i << 1, gr = data[di];
        bf[qi] = gr;
        bf[qi + 1] = gr;
        bf[qi + 2] = gr;
        bf[qi + 3] = data[di + 1];
      }
      if (depth == 16) for (var i = 0; i < area; i++) {
        var qi = i << 2, di = i << 2, gr = data[di];
        bf[qi] = gr;
        bf[qi + 1] = gr;
        bf[qi + 2] = gr;
        bf[qi + 3] = data[di + 2];
      }
    } else if (ctype == 0) {
      var tr = out.tabs["tRNS"] ? out.tabs["tRNS"] : -1;
      for (var y = 0; y < h; y++) {
        var off = y * bpl, to = y * w;
        if (depth == 1) for (var x = 0; x < w; x++) {
          var gr = 255 * (data[off + (x >>> 3)] >>> 7 - (x & 7) & 1), al = gr == tr * 255 ? 0 : 255;
          bf32[to + x] = al << 24 | gr << 16 | gr << 8 | gr;
        }
        else if (depth == 2) for (var x = 0; x < w; x++) {
          var gr = 85 * (data[off + (x >>> 2)] >>> 6 - ((x & 3) << 1) & 3), al = gr == tr * 85 ? 0 : 255;
          bf32[to + x] = al << 24 | gr << 16 | gr << 8 | gr;
        }
        else if (depth == 4) for (var x = 0; x < w; x++) {
          var gr = 17 * (data[off + (x >>> 1)] >>> 4 - ((x & 1) << 2) & 15), al = gr == tr * 17 ? 0 : 255;
          bf32[to + x] = al << 24 | gr << 16 | gr << 8 | gr;
        }
        else if (depth == 8) for (var x = 0; x < w; x++) {
          var gr = data[off + x], al = gr == tr ? 0 : 255;
          bf32[to + x] = al << 24 | gr << 16 | gr << 8 | gr;
        }
        else if (depth == 16) for (var x = 0; x < w; x++) {
          var gr = data[off + (x << 1)], al = rs(data, off + (x << i)) == tr ? 0 : 255;
          bf32[to + x] = al << 24 | gr << 16 | gr << 8 | gr;
        }
      }
    }
    return bf;
  };
  UPNG.decode = function(buff) {
    var data = new Uint8Array(buff), offset = 8, bin = UPNG._bin, rUs = bin.readUshort, rUi = bin.readUint;
    var out = { tabs: {}, frames: [] };
    var dd = new Uint8Array(data.length), doff = 0;
    var fd, foff = 0;
    var mgck = [137, 80, 78, 71, 13, 10, 26, 10];
    for (var i = 0; i < 8; i++) if (data[i] != mgck[i]) throw "The input is not a PNG file!";
    while (offset < data.length) {
      var len = bin.readUint(data, offset);
      offset += 4;
      var type = bin.readASCII(data, offset, 4);
      offset += 4;
      if (type == "IHDR") {
        UPNG.decode._IHDR(data, offset, out);
      } else if (type == "IDAT") {
        for (var i = 0; i < len; i++) dd[doff + i] = data[offset + i];
        doff += len;
      } else if (type == "acTL") {
        out.tabs[type] = { num_frames: rUi(data, offset), num_plays: rUi(data, offset + 4) };
        fd = new Uint8Array(data.length);
      } else if (type == "fcTL") {
        if (foff != 0) {
          var fr = out.frames[out.frames.length - 1];
          fr.data = UPNG.decode._decompress(out, fd.slice(0, foff), fr.rect.width, fr.rect.height);
          foff = 0;
        }
        var rct = { x: rUi(data, offset + 12), y: rUi(data, offset + 16), width: rUi(data, offset + 4), height: rUi(data, offset + 8) };
        var del = rUs(data, offset + 22);
        del = rUs(data, offset + 20) / (del == 0 ? 100 : del);
        var frm = { rect: rct, delay: Math.round(del * 1e3), dispose: data[offset + 24], blend: data[offset + 25] };
        out.frames.push(frm);
      } else if (type == "fdAT") {
        for (var i = 0; i < len - 4; i++) fd[foff + i] = data[offset + i + 4];
        foff += len - 4;
      } else if (type == "pHYs") {
        out.tabs[type] = [bin.readUint(data, offset), bin.readUint(data, offset + 4), data[offset + 8]];
      } else if (type == "cHRM") {
        out.tabs[type] = [];
        for (var i = 0; i < 8; i++) out.tabs[type].push(bin.readUint(data, offset + i * 4));
      } else if (type == "tEXt") {
        if (out.tabs[type] == null) out.tabs[type] = {};
        var nz = bin.nextZero(data, offset);
        var keyw = bin.readASCII(data, offset, nz - offset);
        var text = bin.readASCII(data, nz + 1, offset + len - nz - 1);
        out.tabs[type][keyw] = text;
      } else if (type == "iTXt") {
        if (out.tabs[type] == null) out.tabs[type] = {};
        var nz = 0, off = offset;
        nz = bin.nextZero(data, off);
        var keyw = bin.readASCII(data, off, nz - off);
        off = nz + 1;
        var cflag = data[off], cmeth = data[off + 1];
        off += 2;
        nz = bin.nextZero(data, off);
        var ltag = bin.readASCII(data, off, nz - off);
        off = nz + 1;
        nz = bin.nextZero(data, off);
        var tkeyw = bin.readUTF8(data, off, nz - off);
        off = nz + 1;
        var text = bin.readUTF8(data, off, len - (off - offset));
        out.tabs[type][keyw] = text;
      } else if (type == "PLTE") {
        out.tabs[type] = bin.readBytes(data, offset, len);
      } else if (type == "hIST") {
        var pl = out.tabs["PLTE"].length / 3;
        out.tabs[type] = [];
        for (var i = 0; i < pl; i++) out.tabs[type].push(rUs(data, offset + i * 2));
      } else if (type == "tRNS") {
        if (out.ctype == 3) out.tabs[type] = bin.readBytes(data, offset, len);
        else if (out.ctype == 0) out.tabs[type] = rUs(data, offset);
        else if (out.ctype == 2) out.tabs[type] = [rUs(data, offset), rUs(data, offset + 2), rUs(data, offset + 4)];
      } else if (type == "gAMA") out.tabs[type] = bin.readUint(data, offset) / 1e5;
      else if (type == "sRGB") out.tabs[type] = data[offset];
      else if (type == "bKGD") {
        if (out.ctype == 0 || out.ctype == 4) out.tabs[type] = [rUs(data, offset)];
        else if (out.ctype == 2 || out.ctype == 6) out.tabs[type] = [rUs(data, offset), rUs(data, offset + 2), rUs(data, offset + 4)];
        else if (out.ctype == 3) out.tabs[type] = data[offset];
      } else if (type == "IEND") {
        break;
      }
      offset += len;
      var crc = bin.readUint(data, offset);
      offset += 4;
    }
    if (foff != 0) {
      var fr = out.frames[out.frames.length - 1];
      fr.data = UPNG.decode._decompress(out, fd.slice(0, foff), fr.rect.width, fr.rect.height);
      foff = 0;
    }
    out.data = UPNG.decode._decompress(out, dd, out.width, out.height);
    delete out.compress;
    delete out.interlace;
    delete out.filter;
    return out;
  };
  UPNG.decode._decompress = function(out, dd, w, h) {
    var time = Date.now();
    var bpp = UPNG.decode._getBPP(out), bpl = Math.ceil(w * bpp / 8), buff = new Uint8Array((bpl + 1 + out.interlace) * h);
    dd = UPNG.decode._inflate(dd, buff);
    var time = Date.now();
    if (out.interlace == 0) dd = UPNG.decode._filterZero(dd, out, 0, w, h);
    else if (out.interlace == 1) dd = UPNG.decode._readInterlace(dd, out);
    return dd;
  };
  UPNG.decode._inflate = function(data, buff) {
    var out = UPNG["inflateRaw"](new Uint8Array(data.buffer, 2, data.length - 6), buff);
    return out;
  };
  UPNG.inflateRaw = function() {
    var H = {};
    H.H = {};
    H.H.N = function(N, W) {
      var R = Uint8Array, i = 0, m = 0, J = 0, h = 0, Q = 0, X = 0, u = 0, w = 0, d = 0, v, C;
      if (N[0] == 3 && N[1] == 0) return W ? W : new R(0);
      var V = H.H, n = V.b, A = V.e, l = V.R, M = V.n, I = V.A, e = V.Z, b = V.m, Z = W == null;
      if (Z) W = new R(N.length >>> 2 << 3);
      while (i == 0) {
        i = n(N, d, 1);
        m = n(N, d + 1, 2);
        d += 3;
        if (m == 0) {
          if ((d & 7) != 0) d += 8 - (d & 7);
          var D = (d >>> 3) + 4, q = N[D - 4] | N[D - 3] << 8;
          if (Z) W = H.H.W(W, w + q);
          W.set(new R(N.buffer, N.byteOffset + D, q), w);
          d = D + q << 3;
          w += q;
          continue;
        }
        if (Z) W = H.H.W(W, w + (1 << 17));
        if (m == 1) {
          v = b.J;
          C = b.h;
          X = (1 << 9) - 1;
          u = (1 << 5) - 1;
        }
        if (m == 2) {
          J = A(N, d, 5) + 257;
          h = A(N, d + 5, 5) + 1;
          Q = A(N, d + 10, 4) + 4;
          d += 14;
          var E = d, j = 1;
          for (var c = 0; c < 38; c += 2) {
            b.Q[c] = 0;
            b.Q[c + 1] = 0;
          }
          for (var c = 0; c < Q; c++) {
            var K = A(N, d + c * 3, 3);
            b.Q[(b.X[c] << 1) + 1] = K;
            if (K > j) j = K;
          }
          d += 3 * Q;
          M(b.Q, j);
          I(b.Q, j, b.u);
          v = b.w;
          C = b.d;
          d = l(b.u, (1 << j) - 1, J + h, N, d, b.v);
          var r = V.V(b.v, 0, J, b.C);
          X = (1 << r) - 1;
          var S = V.V(b.v, J, h, b.D);
          u = (1 << S) - 1;
          M(b.C, r);
          I(b.C, r, v);
          M(b.D, S);
          I(b.D, S, C);
        }
        while (true) {
          var T = v[e(N, d) & X];
          d += T & 15;
          var p = T >>> 4;
          if (p >>> 8 == 0) {
            W[w++] = p;
          } else if (p == 256) {
            break;
          } else {
            var z = w + p - 254;
            if (p > 264) {
              var _ = b.q[p - 257];
              z = w + (_ >>> 3) + A(N, d, _ & 7);
              d += _ & 7;
            }
            var $ = C[e(N, d) & u];
            d += $ & 15;
            var s = $ >>> 4, Y = b.c[s], a = (Y >>> 4) + n(N, d, Y & 15);
            d += Y & 15;
            while (w < z) {
              W[w] = W[w++ - a];
              W[w] = W[w++ - a];
              W[w] = W[w++ - a];
              W[w] = W[w++ - a];
            }
            w = z;
          }
        }
      }
      return W.length == w ? W : W.slice(0, w);
    };
    H.H.W = function(N, W) {
      var R = N.length;
      if (W <= R) return N;
      var V = new Uint8Array(R << 1);
      V.set(N, 0);
      return V;
    };
    H.H.R = function(N, W, R, V, n, A) {
      var l = H.H.e, M = H.H.Z, I = 0;
      while (I < R) {
        var e = N[M(V, n) & W];
        n += e & 15;
        var b = e >>> 4;
        if (b <= 15) {
          A[I] = b;
          I++;
        } else {
          var Z = 0, m = 0;
          if (b == 16) {
            m = 3 + l(V, n, 2);
            n += 2;
            Z = A[I - 1];
          } else if (b == 17) {
            m = 3 + l(V, n, 3);
            n += 3;
          } else if (b == 18) {
            m = 11 + l(V, n, 7);
            n += 7;
          }
          var J = I + m;
          while (I < J) {
            A[I] = Z;
            I++;
          }
        }
      }
      return n;
    };
    H.H.V = function(N, W, R, V) {
      var n = 0, A = 0, l = V.length >>> 1;
      while (A < R) {
        var M = N[A + W];
        V[A << 1] = 0;
        V[(A << 1) + 1] = M;
        if (M > n) n = M;
        A++;
      }
      while (A < l) {
        V[A << 1] = 0;
        V[(A << 1) + 1] = 0;
        A++;
      }
      return n;
    };
    H.H.n = function(N, W) {
      var R = H.H.m, V = N.length, n, A, l, M, I, e = R.j;
      for (var M = 0; M <= W; M++) e[M] = 0;
      for (M = 1; M < V; M += 2) e[N[M]]++;
      var b = R.K;
      n = 0;
      e[0] = 0;
      for (A = 1; A <= W; A++) {
        n = n + e[A - 1] << 1;
        b[A] = n;
      }
      for (l = 0; l < V; l += 2) {
        I = N[l + 1];
        if (I != 0) {
          N[l] = b[I];
          b[I]++;
        }
      }
    };
    H.H.A = function(N, W, R) {
      var V = N.length, n = H.H.m, A = n.r;
      for (var l = 0; l < V; l += 2) if (N[l + 1] != 0) {
        var M = l >> 1, I = N[l + 1], e = M << 4 | I, b = W - I, Z = N[l] << b, m = Z + (1 << b);
        while (Z != m) {
          var J = A[Z] >>> 15 - W;
          R[J] = e;
          Z++;
        }
      }
    };
    H.H.l = function(N, W) {
      var R = H.H.m.r, V = 15 - W;
      for (var n = 0; n < N.length; n += 2) {
        var A = N[n] << W - N[n + 1];
        N[n] = R[A] >>> V;
      }
    };
    H.H.M = function(N, W, R) {
      R = R << (W & 7);
      var V = W >>> 3;
      N[V] |= R;
      N[V + 1] |= R >>> 8;
    };
    H.H.I = function(N, W, R) {
      R = R << (W & 7);
      var V = W >>> 3;
      N[V] |= R;
      N[V + 1] |= R >>> 8;
      N[V + 2] |= R >>> 16;
    };
    H.H.e = function(N, W, R) {
      return (N[W >>> 3] | N[(W >>> 3) + 1] << 8) >>> (W & 7) & (1 << R) - 1;
    };
    H.H.b = function(N, W, R) {
      return (N[W >>> 3] | N[(W >>> 3) + 1] << 8 | N[(W >>> 3) + 2] << 16) >>> (W & 7) & (1 << R) - 1;
    };
    H.H.Z = function(N, W) {
      return (N[W >>> 3] | N[(W >>> 3) + 1] << 8 | N[(W >>> 3) + 2] << 16) >>> (W & 7);
    };
    H.H.i = function(N, W) {
      return (N[W >>> 3] | N[(W >>> 3) + 1] << 8 | N[(W >>> 3) + 2] << 16 | N[(W >>> 3) + 3] << 24) >>> (W & 7);
    };
    H.H.m = function() {
      var N = Uint16Array, W = Uint32Array;
      return { K: new N(16), j: new N(16), X: [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], S: [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999, 999, 999], T: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0], q: new N(32), p: [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 65535, 65535], z: [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0], c: new W(32), J: new N(512), _: [], h: new N(32), $: [], w: new N(32768), C: [], v: [], d: new N(32768), D: [], u: new N(512), Q: [], r: new N(1 << 15), s: new W(286), Y: new W(30), a: new W(19), t: new W(15e3), k: new N(1 << 16), g: new N(1 << 15) };
    }();
    (function() {
      var N = H.H.m, W = 1 << 15;
      for (var R = 0; R < W; R++) {
        var V = R;
        V = (V & 2863311530) >>> 1 | (V & 1431655765) << 1;
        V = (V & 3435973836) >>> 2 | (V & 858993459) << 2;
        V = (V & 4042322160) >>> 4 | (V & 252645135) << 4;
        V = (V & 4278255360) >>> 8 | (V & 16711935) << 8;
        N.r[R] = (V >>> 16 | V << 16) >>> 17;
      }
      function n(A, l, M) {
        while (l-- != 0) A.push(0, M);
      }
      for (var R = 0; R < 32; R++) {
        N.q[R] = N.S[R] << 3 | N.T[R];
        N.c[R] = N.p[R] << 4 | N.z[R];
      }
      n(N._, 144, 8);
      n(N._, 255 - 143, 9);
      n(N._, 279 - 255, 7);
      n(N._, 287 - 279, 8);
      H.H.n(N._, 9);
      H.H.A(N._, 9, N.J);
      H.H.l(N._, 9);
      n(N.$, 32, 5);
      H.H.n(N.$, 5);
      H.H.A(N.$, 5, N.h);
      H.H.l(N.$, 5);
      n(N.Q, 19, 0);
      n(N.C, 286, 0);
      n(N.D, 30, 0);
      n(N.v, 320, 0);
    })();
    return H.H.N;
  }();
  UPNG.decode._readInterlace = function(data, out) {
    var w = out.width, h = out.height;
    var bpp = UPNG.decode._getBPP(out), cbpp = bpp >> 3, bpl = Math.ceil(w * bpp / 8);
    var img = new Uint8Array(h * bpl);
    var di = 0;
    var starting_row = [0, 0, 4, 0, 2, 0, 1];
    var starting_col = [0, 4, 0, 2, 0, 1, 0];
    var row_increment = [8, 8, 8, 4, 4, 2, 2];
    var col_increment = [8, 8, 4, 4, 2, 2, 1];
    var pass = 0;
    while (pass < 7) {
      var ri = row_increment[pass], ci = col_increment[pass];
      var sw = 0, sh = 0;
      var cr = starting_row[pass];
      while (cr < h) {
        cr += ri;
        sh++;
      }
      var cc = starting_col[pass];
      while (cc < w) {
        cc += ci;
        sw++;
      }
      var bpll = Math.ceil(sw * bpp / 8);
      UPNG.decode._filterZero(data, out, di, sw, sh);
      var y = 0, row = starting_row[pass];
      while (row < h) {
        var col = starting_col[pass];
        var cdi = di + y * bpll << 3;
        while (col < w) {
          if (bpp == 1) {
            var val = data[cdi >> 3];
            val = val >> 7 - (cdi & 7) & 1;
            img[row * bpl + (col >> 3)] |= val << 7 - ((col & 7) << 0);
          }
          if (bpp == 2) {
            var val = data[cdi >> 3];
            val = val >> 6 - (cdi & 7) & 3;
            img[row * bpl + (col >> 2)] |= val << 6 - ((col & 3) << 1);
          }
          if (bpp == 4) {
            var val = data[cdi >> 3];
            val = val >> 4 - (cdi & 7) & 15;
            img[row * bpl + (col >> 1)] |= val << 4 - ((col & 1) << 2);
          }
          if (bpp >= 8) {
            var ii = row * bpl + col * cbpp;
            for (var j = 0; j < cbpp; j++) img[ii + j] = data[(cdi >> 3) + j];
          }
          cdi += bpp;
          col += ci;
        }
        y++;
        row += ri;
      }
      if (sw * sh != 0) di += sh * (1 + bpll);
      pass = pass + 1;
    }
    return img;
  };
  UPNG.decode._getBPP = function(out) {
    var noc = [1, null, 3, 1, 2, null, 4][out.ctype];
    return noc * out.depth;
  };
  UPNG.decode._filterZero = function(data, out, off, w, h) {
    var bpp = UPNG.decode._getBPP(out), bpl = Math.ceil(w * bpp / 8), paeth = UPNG.decode._paeth;
    bpp = Math.ceil(bpp / 8);
    var i = 0, di = 1, type = data[off], x = 0;
    if (type > 1) data[off] = [0, 0, 1][type - 2];
    if (type == 3) for (x = bpp; x < bpl; x++) data[x + 1] = data[x + 1] + (data[x + 1 - bpp] >>> 1) & 255;
    for (var y = 0; y < h; y++) {
      i = off + y * bpl;
      di = i + y + 1;
      type = data[di - 1];
      x = 0;
      if (type == 0) for (; x < bpl; x++) data[i + x] = data[di + x];
      else if (type == 1) {
        for (; x < bpp; x++) data[i + x] = data[di + x];
        for (; x < bpl; x++) data[i + x] = data[di + x] + data[i + x - bpp];
      } else if (type == 2) {
        for (; x < bpl; x++) data[i + x] = data[di + x] + data[i + x - bpl];
      } else if (type == 3) {
        for (; x < bpp; x++) data[i + x] = data[di + x] + (data[i + x - bpl] >>> 1);
        for (; x < bpl; x++) data[i + x] = data[di + x] + (data[i + x - bpl] + data[i + x - bpp] >>> 1);
      } else {
        for (; x < bpp; x++) data[i + x] = data[di + x] + paeth(0, data[i + x - bpl], 0);
        for (; x < bpl; x++) data[i + x] = data[di + x] + paeth(data[i + x - bpp], data[i + x - bpl], data[i + x - bpp - bpl]);
      }
    }
    return data;
  };
  UPNG.decode._paeth = function(a, b, c) {
    var p = a + b - c, pa = p - a, pb = p - b, pc = p - c;
    if (pa * pa <= pb * pb && pa * pa <= pc * pc) return a;
    else if (pb * pb <= pc * pc) return b;
    return c;
  };
  UPNG.decode._IHDR = function(data, offset, out) {
    var bin = UPNG._bin;
    out.width = bin.readUint(data, offset);
    offset += 4;
    out.height = bin.readUint(data, offset);
    offset += 4;
    out.depth = data[offset];
    offset++;
    out.ctype = data[offset];
    offset++;
    out.compress = data[offset];
    offset++;
    out.filter = data[offset];
    offset++;
    out.interlace = data[offset];
    offset++;
  };
  UPNG._bin = {
    nextZero: function(data, p) {
      while (data[p] != 0) p++;
      return p;
    },
    readUshort: function(buff, p) {
      return buff[p] << 8 | buff[p + 1];
    },
    writeUshort: function(buff, p, n) {
      buff[p] = n >> 8 & 255;
      buff[p + 1] = n & 255;
    },
    readUint: function(buff, p) {
      return buff[p] * (256 * 256 * 256) + (buff[p + 1] << 16 | buff[p + 2] << 8 | buff[p + 3]);
    },
    writeUint: function(buff, p, n) {
      buff[p] = n >> 24 & 255;
      buff[p + 1] = n >> 16 & 255;
      buff[p + 2] = n >> 8 & 255;
      buff[p + 3] = n & 255;
    },
    readASCII: function(buff, p, l) {
      var s = "";
      for (var i = 0; i < l; i++) s += String.fromCharCode(buff[p + i]);
      return s;
    },
    writeASCII: function(data, p, s) {
      for (var i = 0; i < s.length; i++) data[p + i] = s.charCodeAt(i);
    },
    readBytes: function(buff, p, l) {
      var arr = [];
      for (var i = 0; i < l; i++) arr.push(buff[p + i]);
      return arr;
    },
    pad: function(n) {
      return n.length < 2 ? "0" + n : n;
    },
    readUTF8: function(buff, p, l) {
      var s = "", ns;
      for (var i = 0; i < l; i++) s += "%" + UPNG._bin.pad(buff[p + i].toString(16));
      try {
        ns = decodeURIComponent(s);
      } catch (e) {
        return UPNG._bin.readASCII(buff, p, l);
      }
      return ns;
    }
  };
  UPNG._copyTile = function(sb, sw, sh, tb, tw, th, xoff, yoff, mode) {
    var w = Math.min(sw, tw), h = Math.min(sh, th);
    var si = 0, ti = 0;
    for (var y = 0; y < h; y++)
      for (var x = 0; x < w; x++) {
        if (xoff >= 0 && yoff >= 0) {
          si = y * sw + x << 2;
          ti = (yoff + y) * tw + xoff + x << 2;
        } else {
          si = (-yoff + y) * sw - xoff + x << 2;
          ti = y * tw + x << 2;
        }
        if (mode == 0) {
          tb[ti] = sb[si];
          tb[ti + 1] = sb[si + 1];
          tb[ti + 2] = sb[si + 2];
          tb[ti + 3] = sb[si + 3];
        } else if (mode == 1) {
          var fa = sb[si + 3] * (1 / 255), fr = sb[si] * fa, fg = sb[si + 1] * fa, fb = sb[si + 2] * fa;
          var ba = tb[ti + 3] * (1 / 255), br = tb[ti] * ba, bg = tb[ti + 1] * ba, bb = tb[ti + 2] * ba;
          var ifa = 1 - fa, oa = fa + ba * ifa, ioa = oa == 0 ? 0 : 1 / oa;
          tb[ti + 3] = 255 * oa;
          tb[ti + 0] = (fr + br * ifa) * ioa;
          tb[ti + 1] = (fg + bg * ifa) * ioa;
          tb[ti + 2] = (fb + bb * ifa) * ioa;
        } else if (mode == 2) {
          var fa = sb[si + 3], fr = sb[si], fg = sb[si + 1], fb = sb[si + 2];
          var ba = tb[ti + 3], br = tb[ti], bg = tb[ti + 1], bb = tb[ti + 2];
          if (fa == ba && fr == br && fg == bg && fb == bb) {
            tb[ti] = 0;
            tb[ti + 1] = 0;
            tb[ti + 2] = 0;
            tb[ti + 3] = 0;
          } else {
            tb[ti] = fr;
            tb[ti + 1] = fg;
            tb[ti + 2] = fb;
            tb[ti + 3] = fa;
          }
        } else if (mode == 3) {
          var fa = sb[si + 3], fr = sb[si], fg = sb[si + 1], fb = sb[si + 2];
          var ba = tb[ti + 3], br = tb[ti], bg = tb[ti + 1], bb = tb[ti + 2];
          if (fa == ba && fr == br && fg == bg && fb == bb) continue;
          if (fa < 220 && ba > 20) return false;
        }
      }
    return true;
  };
  UPNG.encode = function(bufs, w, h, ps, dels, tabs, forbidPlte) {
    if (ps == null) ps = 0;
    if (forbidPlte == null) forbidPlte = false;
    var nimg = UPNG.encode.compress(bufs, w, h, ps, [false, false, false, 0, forbidPlte]);
    UPNG.encode.compressPNG(nimg, -1);
    return UPNG.encode._main(nimg, w, h, dels, tabs);
  };
  UPNG.encodeLL = function(bufs, w, h, cc, ac, depth, dels, tabs) {
    var nimg = { ctype: 0 + (cc == 1 ? 0 : 2) + (ac == 0 ? 0 : 4), depth, frames: [] };
    var time = Date.now();
    var bipp = (cc + ac) * depth, bipl = bipp * w;
    for (var i = 0; i < bufs.length; i++)
      nimg.frames.push({ rect: { x: 0, y: 0, width: w, height: h }, img: new Uint8Array(bufs[i]), blend: 0, dispose: 1, bpp: Math.ceil(bipp / 8), bpl: Math.ceil(bipl / 8) });
    UPNG.encode.compressPNG(nimg, 0, true);
    var out = UPNG.encode._main(nimg, w, h, dels, tabs);
    return out;
  };
  UPNG.encode._main = function(nimg, w, h, dels, tabs) {
    if (tabs == null) tabs = {};
    var crc = UPNG.crc.crc, wUi = UPNG._bin.writeUint, wUs = UPNG._bin.writeUshort, wAs = UPNG._bin.writeASCII;
    var offset = 8, anim = nimg.frames.length > 1, pltAlpha = false;
    var leng = 8 + (16 + 5 + 4) + (anim ? 20 : 0);
    if (tabs["sRGB"] != null) leng += 8 + 1 + 4;
    if (tabs["pHYs"] != null) leng += 8 + 9 + 4;
    if (nimg.ctype == 3) {
      var dl = nimg.plte.length;
      for (var i = 0; i < dl; i++) if (nimg.plte[i] >>> 24 != 255) pltAlpha = true;
      leng += 8 + dl * 3 + 4 + (pltAlpha ? 8 + dl * 1 + 4 : 0);
    }
    for (var j = 0; j < nimg.frames.length; j++) {
      var fr = nimg.frames[j];
      if (anim) leng += 38;
      leng += fr.cimg.length + 12;
      if (j != 0) leng += 4;
    }
    leng += 12;
    var data = new Uint8Array(leng);
    var wr = [137, 80, 78, 71, 13, 10, 26, 10];
    for (var i = 0; i < 8; i++) data[i] = wr[i];
    wUi(data, offset, 13);
    offset += 4;
    wAs(data, offset, "IHDR");
    offset += 4;
    wUi(data, offset, w);
    offset += 4;
    wUi(data, offset, h);
    offset += 4;
    data[offset] = nimg.depth;
    offset++;
    data[offset] = nimg.ctype;
    offset++;
    data[offset] = 0;
    offset++;
    data[offset] = 0;
    offset++;
    data[offset] = 0;
    offset++;
    wUi(data, offset, crc(data, offset - 17, 17));
    offset += 4;
    if (tabs["sRGB"] != null) {
      wUi(data, offset, 1);
      offset += 4;
      wAs(data, offset, "sRGB");
      offset += 4;
      data[offset] = tabs["sRGB"];
      offset++;
      wUi(data, offset, crc(data, offset - 5, 5));
      offset += 4;
    }
    if (tabs["pHYs"] != null) {
      wUi(data, offset, 9);
      offset += 4;
      wAs(data, offset, "pHYs");
      offset += 4;
      wUi(data, offset, tabs["pHYs"][0]);
      offset += 4;
      wUi(data, offset, tabs["pHYs"][1]);
      offset += 4;
      data[offset] = tabs["pHYs"][2];
      offset++;
      wUi(data, offset, crc(data, offset - 13, 13));
      offset += 4;
    }
    if (anim) {
      wUi(data, offset, 8);
      offset += 4;
      wAs(data, offset, "acTL");
      offset += 4;
      wUi(data, offset, nimg.frames.length);
      offset += 4;
      wUi(data, offset, tabs["loop"] != null ? tabs["loop"] : 0);
      offset += 4;
      wUi(data, offset, crc(data, offset - 12, 12));
      offset += 4;
    }
    if (nimg.ctype == 3) {
      var dl = nimg.plte.length;
      wUi(data, offset, dl * 3);
      offset += 4;
      wAs(data, offset, "PLTE");
      offset += 4;
      for (var i = 0; i < dl; i++) {
        var ti = i * 3, c = nimg.plte[i], r = c & 255, g = c >>> 8 & 255, b = c >>> 16 & 255;
        data[offset + ti + 0] = r;
        data[offset + ti + 1] = g;
        data[offset + ti + 2] = b;
      }
      offset += dl * 3;
      wUi(data, offset, crc(data, offset - dl * 3 - 4, dl * 3 + 4));
      offset += 4;
      if (pltAlpha) {
        wUi(data, offset, dl);
        offset += 4;
        wAs(data, offset, "tRNS");
        offset += 4;
        for (var i = 0; i < dl; i++) data[offset + i] = nimg.plte[i] >>> 24 & 255;
        offset += dl;
        wUi(data, offset, crc(data, offset - dl - 4, dl + 4));
        offset += 4;
      }
    }
    var fi = 0;
    for (var j = 0; j < nimg.frames.length; j++) {
      var fr = nimg.frames[j];
      if (anim) {
        wUi(data, offset, 26);
        offset += 4;
        wAs(data, offset, "fcTL");
        offset += 4;
        wUi(data, offset, fi++);
        offset += 4;
        wUi(data, offset, fr.rect.width);
        offset += 4;
        wUi(data, offset, fr.rect.height);
        offset += 4;
        wUi(data, offset, fr.rect.x);
        offset += 4;
        wUi(data, offset, fr.rect.y);
        offset += 4;
        wUs(data, offset, dels[j]);
        offset += 2;
        wUs(data, offset, 1e3);
        offset += 2;
        data[offset] = fr.dispose;
        offset++;
        data[offset] = fr.blend;
        offset++;
        wUi(data, offset, crc(data, offset - 30, 30));
        offset += 4;
      }
      var imgd = fr.cimg, dl = imgd.length;
      wUi(data, offset, dl + (j == 0 ? 0 : 4));
      offset += 4;
      var ioff = offset;
      wAs(data, offset, j == 0 ? "IDAT" : "fdAT");
      offset += 4;
      if (j != 0) {
        wUi(data, offset, fi++);
        offset += 4;
      }
      data.set(imgd, offset);
      offset += dl;
      wUi(data, offset, crc(data, ioff, offset - ioff));
      offset += 4;
    }
    wUi(data, offset, 0);
    offset += 4;
    wAs(data, offset, "IEND");
    offset += 4;
    wUi(data, offset, crc(data, offset - 4, 4));
    offset += 4;
    return data.buffer;
  };
  UPNG.encode.compressPNG = function(out, filter, levelZero) {
    for (var i = 0; i < out.frames.length; i++) {
      var frm = out.frames[i], nw = frm.rect.width, nh = frm.rect.height;
      var fdata = new Uint8Array(nh * frm.bpl + nh);
      frm.cimg = UPNG.encode._filterZero(frm.img, nh, frm.bpp, frm.bpl, fdata, filter, levelZero);
    }
  };
  UPNG.encode.compress = function(bufs, w, h, ps, prms) {
    var onlyBlend = prms[0], evenCrd = prms[1], forbidPrev = prms[2], minBits = prms[3], forbidPlte = prms[4];
    var ctype = 6, depth = 8, alphaAnd = 255;
    for (var j = 0; j < bufs.length; j++) {
      var img = new Uint8Array(bufs[j]), ilen = img.length;
      for (var i = 0; i < ilen; i += 4) alphaAnd &= img[i + 3];
    }
    var gotAlpha = alphaAnd != 255;
    var frms = UPNG.encode.framize(bufs, w, h, onlyBlend, evenCrd, forbidPrev);
    var cmap = {}, plte = [], inds = [];
    if (ps != 0) {
      var nbufs = [];
      for (var i = 0; i < frms.length; i++) nbufs.push(frms[i].img.buffer);
      var abuf = UPNG.encode.concatRGBA(nbufs), qres = UPNG.quantize(abuf, ps);
      var cof = 0, bb = new Uint8Array(qres.abuf);
      for (var i = 0; i < frms.length; i++) {
        var ti = frms[i].img, bln = ti.length;
        inds.push(new Uint8Array(qres.inds.buffer, cof >> 2, bln >> 2));
        for (var j = 0; j < bln; j += 4) {
          ti[j] = bb[cof + j];
          ti[j + 1] = bb[cof + j + 1];
          ti[j + 2] = bb[cof + j + 2];
          ti[j + 3] = bb[cof + j + 3];
        }
        cof += bln;
      }
      for (var i = 0; i < qres.plte.length; i++) plte.push(qres.plte[i].est.rgba);
    } else {
      for (var j = 0; j < frms.length; j++) {
        var frm = frms[j], img32 = new Uint32Array(frm.img.buffer), nw = frm.rect.width, ilen = img32.length;
        var ind = new Uint8Array(ilen);
        inds.push(ind);
        for (var i = 0; i < ilen; i++) {
          var c = img32[i];
          if (i != 0 && c == img32[i - 1]) ind[i] = ind[i - 1];
          else if (i > nw && c == img32[i - nw]) ind[i] = ind[i - nw];
          else {
            var cmc = cmap[c];
            if (cmc == null) {
              cmap[c] = cmc = plte.length;
              plte.push(c);
              if (plte.length >= 300) break;
            }
            ind[i] = cmc;
          }
        }
      }
    }
    var cc = plte.length;
    if (cc <= 256 && forbidPlte == false) {
      if (cc <= 2) depth = 1;
      else if (cc <= 4) depth = 2;
      else if (cc <= 16) depth = 4;
      else depth = 8;
      depth = Math.max(depth, minBits);
    }
    for (var j = 0; j < frms.length; j++) {
      var frm = frms[j], nx = frm.rect.x, ny = frm.rect.y, nw = frm.rect.width, nh = frm.rect.height;
      var cimg = frm.img, cimg32 = new Uint32Array(cimg.buffer);
      var bpl = 4 * nw, bpp = 4;
      if (cc <= 256 && forbidPlte == false) {
        bpl = Math.ceil(depth * nw / 8);
        var nimg = new Uint8Array(bpl * nh);
        var inj = inds[j];
        for (var y = 0; y < nh; y++) {
          var i = y * bpl, ii = y * nw;
          if (depth == 8) for (var x = 0; x < nw; x++) nimg[i + x] = inj[ii + x];
          else if (depth == 4) for (var x = 0; x < nw; x++) nimg[i + (x >> 1)] |= inj[ii + x] << 4 - (x & 1) * 4;
          else if (depth == 2) for (var x = 0; x < nw; x++) nimg[i + (x >> 2)] |= inj[ii + x] << 6 - (x & 3) * 2;
          else if (depth == 1) for (var x = 0; x < nw; x++) nimg[i + (x >> 3)] |= inj[ii + x] << 7 - (x & 7) * 1;
        }
        cimg = nimg;
        ctype = 3;
        bpp = 1;
      } else if (gotAlpha == false && frms.length == 1) {
        var nimg = new Uint8Array(nw * nh * 3), area = nw * nh;
        for (var i = 0; i < area; i++) {
          var ti = i * 3, qi = i * 4;
          nimg[ti] = cimg[qi];
          nimg[ti + 1] = cimg[qi + 1];
          nimg[ti + 2] = cimg[qi + 2];
        }
        cimg = nimg;
        ctype = 2;
        bpp = 3;
        bpl = 3 * nw;
      }
      frm.img = cimg;
      frm.bpl = bpl;
      frm.bpp = bpp;
    }
    return { ctype, depth, plte, frames: frms };
  };
  UPNG.encode.framize = function(bufs, w, h, alwaysBlend, evenCrd, forbidPrev) {
    var frms = [];
    for (var j = 0; j < bufs.length; j++) {
      var cimg = new Uint8Array(bufs[j]), cimg32 = new Uint32Array(cimg.buffer);
      var nimg;
      var nx = 0, ny = 0, nw = w, nh = h, blend = alwaysBlend ? 1 : 0;
      if (j != 0) {
        var tlim = forbidPrev || alwaysBlend || j == 1 || frms[j - 2].dispose != 0 ? 1 : 2, tstp = 0, tarea = 1e9;
        for (var it = 0; it < tlim; it++) {
          var pimg = new Uint8Array(bufs[j - 1 - it]), p32 = new Uint32Array(bufs[j - 1 - it]);
          var mix = w, miy = h, max = -1, may = -1;
          for (var y = 0; y < h; y++) for (var x = 0; x < w; x++) {
            var i = y * w + x;
            if (cimg32[i] != p32[i]) {
              if (x < mix) mix = x;
              if (x > max) max = x;
              if (y < miy) miy = y;
              if (y > may) may = y;
            }
          }
          if (max == -1) mix = miy = max = may = 0;
          if (evenCrd) {
            if ((mix & 1) == 1) mix--;
            if ((miy & 1) == 1) miy--;
          }
          var sarea = (max - mix + 1) * (may - miy + 1);
          if (sarea < tarea) {
            tarea = sarea;
            tstp = it;
            nx = mix;
            ny = miy;
            nw = max - mix + 1;
            nh = may - miy + 1;
          }
        }
        var pimg = new Uint8Array(bufs[j - 1 - tstp]);
        if (tstp == 1) frms[j - 1].dispose = 2;
        nimg = new Uint8Array(nw * nh * 4);
        UPNG._copyTile(pimg, w, h, nimg, nw, nh, -nx, -ny, 0);
        blend = UPNG._copyTile(cimg, w, h, nimg, nw, nh, -nx, -ny, 3) ? 1 : 0;
        if (blend == 1) UPNG.encode._prepareDiff(cimg, w, h, nimg, { x: nx, y: ny, width: nw, height: nh });
        else UPNG._copyTile(cimg, w, h, nimg, nw, nh, -nx, -ny, 0);
      } else nimg = cimg.slice(0);
      frms.push({ rect: { x: nx, y: ny, width: nw, height: nh }, img: nimg, blend, dispose: 0 });
    }
    if (alwaysBlend) for (var j = 0; j < frms.length; j++) {
      var frm = frms[j];
      if (frm.blend == 1) continue;
      var r0 = frm.rect, r1 = frms[j - 1].rect;
      var miX = Math.min(r0.x, r1.x), miY = Math.min(r0.y, r1.y);
      var maX = Math.max(r0.x + r0.width, r1.x + r1.width), maY = Math.max(r0.y + r0.height, r1.y + r1.height);
      var r = { x: miX, y: miY, width: maX - miX, height: maY - miY };
      frms[j - 1].dispose = 1;
      if (j - 1 != 0)
        UPNG.encode._updateFrame(bufs, w, h, frms, j - 1, r, evenCrd);
      UPNG.encode._updateFrame(bufs, w, h, frms, j, r, evenCrd);
    }
    var area = 0;
    if (bufs.length != 1) for (var i = 0; i < frms.length; i++) {
      var frm = frms[i];
      area += frm.rect.width * frm.rect.height;
    }
    return frms;
  };
  UPNG.encode._updateFrame = function(bufs, w, h, frms, i, r, evenCrd) {
    var U8 = Uint8Array, U32 = Uint32Array;
    var pimg = new U8(bufs[i - 1]), pimg32 = new U32(bufs[i - 1]), nimg = i + 1 < bufs.length ? new U8(bufs[i + 1]) : null;
    var cimg = new U8(bufs[i]), cimg32 = new U32(cimg.buffer);
    var mix = w, miy = h, max = -1, may = -1;
    for (var y = 0; y < r.height; y++) for (var x = 0; x < r.width; x++) {
      var cx2 = r.x + x, cy2 = r.y + y;
      var j = cy2 * w + cx2, cc = cimg32[j];
      if (cc == 0 || frms[i - 1].dispose == 0 && pimg32[j] == cc && (nimg == null || nimg[j * 4 + 3] != 0)) {
      } else {
        if (cx2 < mix) mix = cx2;
        if (cx2 > max) max = cx2;
        if (cy2 < miy) miy = cy2;
        if (cy2 > may) may = cy2;
      }
    }
    if (max == -1) mix = miy = max = may = 0;
    if (evenCrd) {
      if ((mix & 1) == 1) mix--;
      if ((miy & 1) == 1) miy--;
    }
    r = { x: mix, y: miy, width: max - mix + 1, height: may - miy + 1 };
    var fr = frms[i];
    fr.rect = r;
    fr.blend = 1;
    fr.img = new Uint8Array(r.width * r.height * 4);
    if (frms[i - 1].dispose == 0) {
      UPNG._copyTile(pimg, w, h, fr.img, r.width, r.height, -r.x, -r.y, 0);
      UPNG.encode._prepareDiff(cimg, w, h, fr.img, r);
    } else
      UPNG._copyTile(cimg, w, h, fr.img, r.width, r.height, -r.x, -r.y, 0);
  };
  UPNG.encode._prepareDiff = function(cimg, w, h, nimg, rec) {
    UPNG._copyTile(cimg, w, h, nimg, rec.width, rec.height, -rec.x, -rec.y, 2);
  };
  UPNG.encode._filterZero = function(img, h, bpp, bpl, data, filter, levelZero) {
    var fls = [], ftry = [0, 1, 2, 3, 4];
    if (filter != -1) ftry = [filter];
    else if (h * bpl > 5e5 || bpp == 1) ftry = [0];
    var opts;
    if (levelZero) opts = { level: 0 };
    var CMPR = levelZero && UZIP != null ? UZIP : import_pako4.default;
    for (var i = 0; i < ftry.length; i++) {
      for (var y = 0; y < h; y++) UPNG.encode._filterLine(data, img, y, bpl, bpp, ftry[i]);
      fls.push(CMPR["deflate"](data, opts));
    }
    var ti, tsize = 1e9;
    for (var i = 0; i < fls.length; i++) if (fls[i].length < tsize) {
      ti = i;
      tsize = fls[i].length;
    }
    return fls[ti];
  };
  UPNG.encode._filterLine = function(data, img, y, bpl, bpp, type) {
    var i = y * bpl, di = i + y, paeth = UPNG.decode._paeth;
    data[di] = type;
    di++;
    if (type == 0) {
      if (bpl < 500) for (var x = 0; x < bpl; x++) data[di + x] = img[i + x];
      else data.set(new Uint8Array(img.buffer, i, bpl), di);
    } else if (type == 1) {
      for (var x = 0; x < bpp; x++) data[di + x] = img[i + x];
      for (var x = bpp; x < bpl; x++) data[di + x] = img[i + x] - img[i + x - bpp] + 256 & 255;
    } else if (y == 0) {
      for (var x = 0; x < bpp; x++) data[di + x] = img[i + x];
      if (type == 2) for (var x = bpp; x < bpl; x++) data[di + x] = img[i + x];
      if (type == 3) for (var x = bpp; x < bpl; x++) data[di + x] = img[i + x] - (img[i + x - bpp] >> 1) + 256 & 255;
      if (type == 4) for (var x = bpp; x < bpl; x++) data[di + x] = img[i + x] - paeth(img[i + x - bpp], 0, 0) + 256 & 255;
    } else {
      if (type == 2) {
        for (var x = 0; x < bpl; x++) data[di + x] = img[i + x] + 256 - img[i + x - bpl] & 255;
      }
      if (type == 3) {
        for (var x = 0; x < bpp; x++) data[di + x] = img[i + x] + 256 - (img[i + x - bpl] >> 1) & 255;
        for (var x = bpp; x < bpl; x++) data[di + x] = img[i + x] + 256 - (img[i + x - bpl] + img[i + x - bpp] >> 1) & 255;
      }
      if (type == 4) {
        for (var x = 0; x < bpp; x++) data[di + x] = img[i + x] + 256 - paeth(0, img[i + x - bpl], 0) & 255;
        for (var x = bpp; x < bpl; x++) data[di + x] = img[i + x] + 256 - paeth(img[i + x - bpp], img[i + x - bpl], img[i + x - bpp - bpl]) & 255;
      }
    }
  };
  UPNG.crc = {
    table: function() {
      var tab = new Uint32Array(256);
      for (var n = 0; n < 256; n++) {
        var c = n;
        for (var k = 0; k < 8; k++) {
          if (c & 1) c = 3988292384 ^ c >>> 1;
          else c = c >>> 1;
        }
        tab[n] = c;
      }
      return tab;
    }(),
    update: function(c, buf, off, len) {
      for (var i = 0; i < len; i++) c = UPNG.crc.table[(c ^ buf[off + i]) & 255] ^ c >>> 8;
      return c;
    },
    crc: function(b, o, l) {
      return UPNG.crc.update(4294967295, b, o, l) ^ 4294967295;
    }
  };
  UPNG.quantize = function(abuf, ps) {
    var oimg = new Uint8Array(abuf), nimg = oimg.slice(0), nimg32 = new Uint32Array(nimg.buffer);
    var KD = UPNG.quantize.getKDtree(nimg, ps);
    var root = KD[0], leafs = KD[1];
    var planeDst = UPNG.quantize.planeDst;
    var sb = oimg, tb = nimg32, len = sb.length;
    var inds = new Uint8Array(oimg.length >> 2);
    for (var i = 0; i < len; i += 4) {
      var r = sb[i] * (1 / 255), g = sb[i + 1] * (1 / 255), b = sb[i + 2] * (1 / 255), a = sb[i + 3] * (1 / 255);
      var nd = UPNG.quantize.getNearest(root, r, g, b, a);
      inds[i >> 2] = nd.ind;
      tb[i >> 2] = nd.est.rgba;
    }
    return { abuf: nimg.buffer, inds, plte: leafs };
  };
  UPNG.quantize.getKDtree = function(nimg, ps, err) {
    if (err == null) err = 1e-4;
    var nimg32 = new Uint32Array(nimg.buffer);
    var root = { i0: 0, i1: nimg.length, bst: null, est: null, tdst: 0, left: null, right: null };
    root.bst = UPNG.quantize.stats(nimg, root.i0, root.i1);
    root.est = UPNG.quantize.estats(root.bst);
    var leafs = [root];
    while (leafs.length < ps) {
      var maxL = 0, mi = 0;
      for (var i = 0; i < leafs.length; i++) if (leafs[i].est.L > maxL) {
        maxL = leafs[i].est.L;
        mi = i;
      }
      if (maxL < err) break;
      var node = leafs[mi];
      var s0 = UPNG.quantize.splitPixels(nimg, nimg32, node.i0, node.i1, node.est.e, node.est.eMq255);
      var s0wrong = node.i0 >= s0 || node.i1 <= s0;
      if (s0wrong) {
        node.est.L = 0;
        continue;
      }
      var ln = { i0: node.i0, i1: s0, bst: null, est: null, tdst: 0, left: null, right: null };
      ln.bst = UPNG.quantize.stats(nimg, ln.i0, ln.i1);
      ln.est = UPNG.quantize.estats(ln.bst);
      var rn = { i0: s0, i1: node.i1, bst: null, est: null, tdst: 0, left: null, right: null };
      rn.bst = { R: [], m: [], N: node.bst.N - ln.bst.N };
      for (var i = 0; i < 16; i++) rn.bst.R[i] = node.bst.R[i] - ln.bst.R[i];
      for (var i = 0; i < 4; i++) rn.bst.m[i] = node.bst.m[i] - ln.bst.m[i];
      rn.est = UPNG.quantize.estats(rn.bst);
      node.left = ln;
      node.right = rn;
      leafs[mi] = ln;
      leafs.push(rn);
    }
    leafs.sort(function(a, b) {
      return b.bst.N - a.bst.N;
    });
    for (var i = 0; i < leafs.length; i++) leafs[i].ind = i;
    return [root, leafs];
  };
  UPNG.quantize.getNearest = function(nd, r, g, b, a) {
    if (nd.left == null) {
      nd.tdst = UPNG.quantize.dist(nd.est.q, r, g, b, a);
      return nd;
    }
    var planeDst = UPNG.quantize.planeDst(nd.est, r, g, b, a);
    var node0 = nd.left, node1 = nd.right;
    if (planeDst > 0) {
      node0 = nd.right;
      node1 = nd.left;
    }
    var ln = UPNG.quantize.getNearest(node0, r, g, b, a);
    if (ln.tdst <= planeDst * planeDst) return ln;
    var rn = UPNG.quantize.getNearest(node1, r, g, b, a);
    return rn.tdst < ln.tdst ? rn : ln;
  };
  UPNG.quantize.planeDst = function(est, r, g, b, a) {
    var e = est.e;
    return e[0] * r + e[1] * g + e[2] * b + e[3] * a - est.eMq;
  };
  UPNG.quantize.dist = function(q, r, g, b, a) {
    var d0 = r - q[0], d1 = g - q[1], d2 = b - q[2], d3 = a - q[3];
    return d0 * d0 + d1 * d1 + d2 * d2 + d3 * d3;
  };
  UPNG.quantize.splitPixels = function(nimg, nimg32, i0, i1, e, eMq) {
    var vecDot = UPNG.quantize.vecDot;
    i1 -= 4;
    var shfs = 0;
    while (i0 < i1) {
      while (vecDot(nimg, i0, e) <= eMq) i0 += 4;
      while (vecDot(nimg, i1, e) > eMq) i1 -= 4;
      if (i0 >= i1) break;
      var t = nimg32[i0 >> 2];
      nimg32[i0 >> 2] = nimg32[i1 >> 2];
      nimg32[i1 >> 2] = t;
      i0 += 4;
      i1 -= 4;
    }
    while (vecDot(nimg, i0, e) > eMq) i0 -= 4;
    return i0 + 4;
  };
  UPNG.quantize.vecDot = function(nimg, i, e) {
    return nimg[i] * e[0] + nimg[i + 1] * e[1] + nimg[i + 2] * e[2] + nimg[i + 3] * e[3];
  };
  UPNG.quantize.stats = function(nimg, i0, i1) {
    var R = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var m = [0, 0, 0, 0];
    var N = i1 - i0 >> 2;
    for (var i = i0; i < i1; i += 4) {
      var r = nimg[i] * (1 / 255), g = nimg[i + 1] * (1 / 255), b = nimg[i + 2] * (1 / 255), a = nimg[i + 3] * (1 / 255);
      m[0] += r;
      m[1] += g;
      m[2] += b;
      m[3] += a;
      R[0] += r * r;
      R[1] += r * g;
      R[2] += r * b;
      R[3] += r * a;
      R[5] += g * g;
      R[6] += g * b;
      R[7] += g * a;
      R[10] += b * b;
      R[11] += b * a;
      R[15] += a * a;
    }
    R[4] = R[1];
    R[8] = R[2];
    R[9] = R[6];
    R[12] = R[3];
    R[13] = R[7];
    R[14] = R[11];
    return { R, m, N };
  };
  UPNG.quantize.estats = function(stats) {
    var R = stats.R, m = stats.m, N = stats.N;
    var m0 = m[0], m1 = m[1], m2 = m[2], m3 = m[3], iN = N == 0 ? 0 : 1 / N;
    var Rj = [
      R[0] - m0 * m0 * iN,
      R[1] - m0 * m1 * iN,
      R[2] - m0 * m2 * iN,
      R[3] - m0 * m3 * iN,
      R[4] - m1 * m0 * iN,
      R[5] - m1 * m1 * iN,
      R[6] - m1 * m2 * iN,
      R[7] - m1 * m3 * iN,
      R[8] - m2 * m0 * iN,
      R[9] - m2 * m1 * iN,
      R[10] - m2 * m2 * iN,
      R[11] - m2 * m3 * iN,
      R[12] - m3 * m0 * iN,
      R[13] - m3 * m1 * iN,
      R[14] - m3 * m2 * iN,
      R[15] - m3 * m3 * iN
    ];
    var A = Rj, M = UPNG.M4;
    var b = [0.5, 0.5, 0.5, 0.5], mi = 0, tmi = 0;
    if (N != 0)
      for (var i = 0; i < 10; i++) {
        b = M.multVec(A, b);
        tmi = Math.sqrt(M.dot(b, b));
        b = M.sml(1 / tmi, b);
        if (Math.abs(tmi - mi) < 1e-9) break;
        mi = tmi;
      }
    var q = [m0 * iN, m1 * iN, m2 * iN, m3 * iN];
    var eMq255 = M.dot(M.sml(255, q), b);
    return {
      Cov: Rj,
      q,
      e: b,
      L: mi,
      eMq255,
      eMq: M.dot(b, q),
      rgba: (Math.round(255 * q[3]) << 24 | Math.round(255 * q[2]) << 16 | Math.round(255 * q[1]) << 8 | Math.round(255 * q[0]) << 0) >>> 0
    };
  };
  UPNG.M4 = {
    multVec: function(m, v) {
      return [
        m[0] * v[0] + m[1] * v[1] + m[2] * v[2] + m[3] * v[3],
        m[4] * v[0] + m[5] * v[1] + m[6] * v[2] + m[7] * v[3],
        m[8] * v[0] + m[9] * v[1] + m[10] * v[2] + m[11] * v[3],
        m[12] * v[0] + m[13] * v[1] + m[14] * v[2] + m[15] * v[3]
      ];
    },
    dot: function(x, y) {
      return x[0] * y[0] + x[1] * y[1] + x[2] * y[2] + x[3] * y[3];
    },
    sml: function(a, y) {
      return [a * y[0], a * y[1], a * y[2], a * y[3]];
    }
  };
  UPNG.encode.concatRGBA = function(bufs) {
    var tlen = 0;
    for (var i = 0; i < bufs.length; i++) tlen += bufs[i].byteLength;
    var nimg = new Uint8Array(tlen), noff = 0;
    for (var i = 0; i < bufs.length; i++) {
      var img = new Uint8Array(bufs[i]), il = img.length;
      for (var j = 0; j < il; j += 4) {
        var r = img[j], g = img[j + 1], b = img[j + 2], a = img[j + 3];
        if (a == 0) r = g = b = 0;
        nimg[noff + j] = r;
        nimg[noff + j + 1] = g;
        nimg[noff + j + 2] = b;
        nimg[noff + j + 3] = a;
      }
      noff += il;
    }
    return nimg.buffer;
  };
  var UPNG_default = UPNG;

  // src/utils/png.ts
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
      const upng = UPNG_default.decode(buffer);
      const frames = UPNG_default.toRGBA8(upng);
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
    const chars3 = charSplit(line);
    while (fontSize < MAX_FONT_SIZE) {
      for (let idx = 0, len = chars3.length; idx < len; idx++) {
        const c = chars3[idx];
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
})();
//# sourceMappingURL=index.global.js.map