use seed::{prelude::*, *};

mod bindings;

fn init(_: Url, orders: &mut impl Orders<Msg>) -> Model {
    orders.after_next_render(|_| Msg::Render);

    Model {}
}

struct Model {}

enum Msg {
    Render,
}

fn update(msg: Msg, _model: &mut Model, orders: &mut impl Orders<Msg>) {
    match msg {
        Msg::Render => {
            bindings::chap2_demo1();
            bindings::chap2_demo2();
            bindings::chap2_demo3();
            bindings::chap2_demo4();
            bindings::chap3_demo1();
            bindings::chap3_demo2();

            orders.after_next_render(|_| Msg::Render).skip();
        }
    }
}

fn view(_model: &Model) -> Node<Msg> {
    div![
        div![
            md!(format!("```js\n{}\n```", include_str!("./js/chap2_demo1.js")).as_str()),
            svg![
                style! {
                    St::BackgroundColor => "lightgrey",
                },
                id!["chap2-demo1"],
                attrs! {
                    At::Width => 600,
                    At::Height => 300,
                },
            ],
        ],
        div![
            md!(format!("```js\n{}\n```", include_str!("./js/chap2_demo2.js")).as_str()),
            svg![
                style! {
                    St::BackgroundColor => "lightgrey",
                },
                id!["chap2-demo2"],
                attrs! {
                    At::Width => 600,
                    At::Height => 300,
                },
            ],
        ],
        div![
            md!(format!("```js\n{}\n```", include_str!("./js/chap2_demo3.js")).as_str()),
            svg![
                style! {
                    St::BackgroundColor => "lightgrey",
                },
                id!["chap2-demo3"],
                attrs! {
                    At::Width => 600,
                    At::Height => 300,
                },
            ],
        ],
        div![
            md!(format!("```js\n{}\n```", include_str!("./js/chap2_demo4.js")).as_str()),
            div![
                style! {
                    St::BackgroundColor => "lightgrey",
                },
                id!["chap2-demo4"],
            ],
        ],
        div![
            md!(format!("```js\n{}\n```", include_str!("./js/chap3_demo1.js")).as_str()),
            svg![
                style! {
                    St::BackgroundColor => "lightgrey",
                },
                id!["chap3-demo1"],
                attrs! {
                    At::Width => 300,
                    At::Height => 150,
                },
            ],
        ],
        div![
            md!(format!("```js\n{}\n```", include_str!("./js/chap3_demo2.js")).as_str()),
            svg![
                style! {
                    St::BackgroundColor => "lightgrey",
                },
                id!["chap3-demo2"],
                attrs! {
                    At::Width => 300,
                    At::Height => 150,
                },
            ],
        ],
    ]
}

fn main() {
    App::start("app", init, update, view);
}
