use wasm_bindgen::prelude::*;

#[wasm_bindgen(module = "/src/js/demo1.js")]
extern "C" {
    pub fn demo1();
}

#[wasm_bindgen(module = "/src/js/demo2.js")]
extern "C" {
    pub fn demo2();
}
