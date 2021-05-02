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
            bindings::demo1();
            bindings::demo2();
            bindings::demo3();
            orders.after_next_render(|_| Msg::Render).skip();
        }
    }
}

fn view(_model: &Model) -> Node<Msg> {
    div![
        div![
            md!(format!("```js\n{}\n```", include_str!("./js/demo1.js")).as_str()),
            svg![
                style! {
                    St::BackgroundColor => "lightgrey",
                },
                id!["demo1"],
                attrs! {
                    At::Width => 600,
                    At::Height => 300,
                }
            ],
        ],
        div![
            md!(format!("```js\n{}\n```", include_str!("./js/demo2.js")).as_str()),
            svg![
                style! {
                    St::BackgroundColor => "lightgrey",
                },
                id!["demo2"],
                attrs! {
                    At::Width => 600,
                    At::Height => 300,
                }
            ],
        ],
        div![
            md!(format!("```js\n{}\n```", include_str!("./js/demo3.js")).as_str()),
            svg![
                style! {
                    St::BackgroundColor => "lightgrey",
                },
                id!["demo3"],
                attrs! {
                    At::Width => 600,
                    At::Height => 300,
                }
            ],
        ],
    ]
}

fn main() {
    App::start("app", init, update, view);
}
