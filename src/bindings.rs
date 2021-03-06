use wasm_bindgen::prelude::*;

macro_rules! generate_binding {
    ($file:expr, $function:ident) => {
        #[wasm_bindgen(module = $file)]
        extern "C" {
            pub fn $function();
        }
    };
}

// Chapter 2
generate_binding!("/src/js/chap2_demo1.js", chap2_demo1);
generate_binding!("/src/js/chap2_demo2.js", chap2_demo2);
generate_binding!("/src/js/chap2_demo3.js", chap2_demo3);
generate_binding!("/src/js/chap2_demo4.js", chap2_demo4);

// Chapter 3
generate_binding!("/src/js/chap3_demo1.js", chap3_demo1);
generate_binding!("/src/js/chap3_demo2.js", chap3_demo2);
generate_binding!("/src/js/chap3_demo3.js", chap3_demo3);

// Chapter 4
generate_binding!("/src/js/chap4_demo1.js", chap4_demo1);
generate_binding!("/src/js/chap4_demo2.js", chap4_demo2);
generate_binding!("/src/js/chap4_demo3.js", chap4_demo3);
generate_binding!("/src/js/chap4_demo4.js", chap4_demo4);
generate_binding!("/src/js/chap4_demo5.js", chap4_demo5);
generate_binding!("/src/js/chap4_demo6.js", chap4_demo6);

// Chapter 5
generate_binding!("/src/js/chap5_demo1.js", chap5_demo1);
generate_binding!("/src/js/chap5_demo2.js", chap5_demo2);
generate_binding!("/src/js/chap5_demo3.js", chap5_demo3);
generate_binding!("/src/js/chap5_demo4.js", chap5_demo4);

// Chapter 7
generate_binding!("/src/js/chap7_demo1.js", chap7_demo1);
generate_binding!("/src/js/chap7_demo2.js", chap7_demo2);
generate_binding!("/src/js/chap7_demo3.js", chap7_demo3);

// Chapter 8
generate_binding!("/src/js/chap8_demo1.js", chap8_demo1);
generate_binding!("/src/js/chap8_demo2.js", chap8_demo2);
generate_binding!("/src/js/chap8_demo3.js", chap8_demo3);

// Chapter 9
generate_binding!("/src/js/chap9_demo1.js", chap9_demo1);
generate_binding!("/src/js/chap9_demo2.js", chap9_demo2);
generate_binding!("/src/js/chap9_demo3.js", chap9_demo3);
generate_binding!("/src/js/chap9_demo4.js", chap9_demo4);

// Chapter 10
generate_binding!("/src/js/chap10_demo1.js", chap10_demo1);
