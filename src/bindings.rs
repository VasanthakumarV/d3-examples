use wasm_bindgen::prelude::*;

#[wasm_bindgen(module = "/src/js/chap2_demo1.js")]
extern "C" {
    pub fn chap2_demo1();
}

#[wasm_bindgen(module = "/src/js/chap2_demo2.js")]
extern "C" {
    pub fn chap2_demo2();
}

#[wasm_bindgen(module = "/src/js/chap2_demo3.js")]
extern "C" {
    pub fn chap2_demo3();
}

#[wasm_bindgen(module = "/src/js/chap2_demo4.js")]
extern "C" {
    pub fn chap2_demo4();
}

#[wasm_bindgen(module = "/src/js/chap3_demo1.js")]
extern "C" {
    pub fn chap3_demo1();
}

#[wasm_bindgen(module = "/src/js/chap3_demo2.js")]
extern "C" {
    pub fn chap3_demo2();
}

#[wasm_bindgen(module = "/src/js/chap3_demo3.js")]
extern "C" {
    pub fn chap3_demo3();
}

#[wasm_bindgen(module = "/src/js/chap4_demo1.js")]
extern "C" {
    pub fn chap4_demo1();
}

#[wasm_bindgen(module = "/src/js/chap4_demo2.js")]
extern "C" {
    pub fn chap4_demo2();
}

#[wasm_bindgen(module = "/src/js/chap4_demo3.js")]
extern "C" {
    pub fn chap4_demo3();
}
