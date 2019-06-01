
const __exports = {};
let wasm;

let cachedTextDecoder = new TextDecoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory;
}

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

function __wbindgen_throw(ptr, len) {
    throw new Error(getStringFromWasm(ptr, len));
}
__exports.__wbindgen_throw = __wbindgen_throw

function freeCanvas(ptr) {

    wasm.__wbg_canvas_free(ptr);
}
/**
*/
export class Canvas {

    static __wrap(ptr) {
        const obj = Object.create(Canvas.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;
        freeCanvas(ptr);
    }

    /**
    * @returns {number}
    */
    buf() {
        return wasm.canvas_buf(this.ptr);
    }
    /**
    * @returns {number}
    */
    width() {
        return wasm.canvas_width(this.ptr) >>> 0;
    }
    /**
    * @returns {number}
    */
    height() {
        return wasm.canvas_height(this.ptr) >>> 0;
    }
    /**
    * @returns {void}
    */
    draw() {
        return wasm.canvas_draw(this.ptr);
    }
    /**
    * @returns {Canvas}
    */
    static new() {
        return Canvas.__wrap(wasm.canvas_new());
    }
}

function init(module) {
    let result;
    const imports = { './banana': __exports };

    if (module instanceof URL || typeof module === 'string' || module instanceof Request) {

        const response = fetch(module);
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            result = WebAssembly.instantiateStreaming(response, imports)
            .catch(e => {
                console.warn("`WebAssembly.instantiateStreaming` failed. Assuming this is because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
                return response
                .then(r => r.arrayBuffer())
                .then(bytes => WebAssembly.instantiate(bytes, imports));
            });
        } else {
            result = response
            .then(r => r.arrayBuffer())
            .then(bytes => WebAssembly.instantiate(bytes, imports));
        }
    } else {

        result = WebAssembly.instantiate(module, imports)
        .then(result => {
            if (result instanceof WebAssembly.Instance) {
                return { instance: result, module };
            } else {
                return result;
            }
        });
    }
    return result.then(({instance, module}) => {
        wasm = instance.exports;
        init.__wbindgen_wasm_module = module;

        return wasm;
    });
}

export default init;

