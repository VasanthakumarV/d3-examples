use seed::{prelude::*, *};

mod bindings;

fn init(_: Url, orders: &mut impl Orders<Msg>) -> Model {
    orders.after_next_render(|_| Msg::Render);

    Model {
        demo: Demo::default(),
    }
}

struct Model {
    demo: Demo,
}

#[derive(Debug, Copy, Clone, PartialEq)]
enum Demo {
    Chap2Demo1,
    Chap2Demo2,
    Chap2Demo3,
    Chap2Demo4,
    Chap3Demo1,
    Chap3Demo2,
}

impl std::fmt::Display for Demo {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match *self {
            Demo::Chap2Demo1 => write!(f, "Chapter 2, Demo 1"),
            Demo::Chap2Demo2 => write!(f, "Chapter 2, Demo 2"),
            Demo::Chap2Demo3 => write!(f, "Chapter 2, Demo 3"),
            Demo::Chap2Demo4 => write!(f, "Chapter 2, Demo 4"),
            Demo::Chap3Demo1 => write!(f, "Chapter 3, Demo 1"),
            Demo::Chap3Demo2 => write!(f, "Chapter 3, Demo 2"),
        }
    }
}

impl Default for Demo {
    fn default() -> Self {
        Demo::Chap2Demo1
    }
}

enum Msg {
    Render,
    Select(Demo),
}

fn update(msg: Msg, model: &mut Model, orders: &mut impl Orders<Msg>) {
    match msg {
        Msg::Render => match model.demo {
            Demo::Chap2Demo1 => bindings::chap2_demo1(),
            Demo::Chap2Demo2 => bindings::chap2_demo2(),
            Demo::Chap2Demo3 => bindings::chap2_demo3(),
            Demo::Chap2Demo4 => bindings::chap2_demo4(),
            Demo::Chap3Demo1 => bindings::chap3_demo1(),
            Demo::Chap3Demo2 => bindings::chap3_demo2(),
        },
        Msg::Select(demo) => {
            orders.after_next_render(|_| Msg::Render);
            model.demo = demo;
        }
    }
}

fn view(model: &Model) -> Vec<Node<Msg>> {
    vec![
        select![
            option![
                Demo::Chap2Demo1.to_string(),
                ev(Ev::Click, |_| Msg::Select(Demo::Chap2Demo1))
            ],
            option![
                Demo::Chap2Demo2.to_string(),
                ev(Ev::Click, |_| Msg::Select(Demo::Chap2Demo2))
            ],
            option![
                Demo::Chap2Demo3.to_string(),
                ev(Ev::Click, |_| Msg::Select(Demo::Chap2Demo3))
            ],
            option![
                Demo::Chap2Demo4.to_string(),
                ev(Ev::Click, |_| Msg::Select(Demo::Chap2Demo4))
            ],
            option![
                Demo::Chap3Demo1.to_string(),
                ev(Ev::Click, |_| Msg::Select(Demo::Chap3Demo1))
            ],
            option![
                Demo::Chap3Demo2.to_string(),
                ev(Ev::Click, |_| Msg::Select(Demo::Chap3Demo2))
            ],
        ],
        div![
            style! {
                St::Display => "grid",
                St::GridTemplateColumns => "auto auto",
                St::Gap => "16px",
                St::JustifyContent => "center",
            },
            match model.demo {
                Demo::Chap2Demo1 => view_chap2_demo1(),
                Demo::Chap2Demo2 => view_chap2_demo2(),
                Demo::Chap2Demo3 => view_chap2_demo3(),
                Demo::Chap2Demo4 => view_chap2_demo4(),
                Demo::Chap3Demo1 => view_chap3_demo1(),
                Demo::Chap3Demo2 => view_chap3_demo2(),
            },
        ],
    ]
}

fn view_chap2_demo1() -> Vec<Node<Msg>> {
    nodes![
        div![
            md!(format!("```js\n{}\n```", include_str!("./js/chap2_demo1.js")).as_str()),
        ]
        svg![
            id!["chap2-demo1"],
            style! {
                St::BackgroundColor => "lightgrey",
            },
            attrs! {
                At::Width => 600,
                At::Height => 300,
            },
        ],
    ]
}

fn view_chap2_demo2() -> Vec<Node<Msg>> {
    nodes![
        div![
            style! {
                St::Height => "90vh",
                St::Overflow => "scroll",
            },
            md!(format!("```js\n{}\n```", include_str!("./js/chap2_demo2.js")).as_str()),
        ]
        svg![
            id!["chap2-demo2"],
            style! {
                St::BackgroundColor => "lightgrey",
            },
            attrs! {
                At::Width => 600,
                At::Height => 300,
            },
        ],
    ]
}

fn view_chap2_demo3() -> Vec<Node<Msg>> {
    nodes![
        div![
            style! {
                St::Height => "90vh",
                St::Overflow => "scroll",
            },
            md!(format!("```js\n{}\n```", include_str!("./js/chap2_demo3.js")).as_str()),
        ]
        svg![
            id!["chap2-demo3"],
            style! {
                St::BackgroundColor => "lightgrey",
            },
            attrs! {
                At::Width => 600,
                At::Height => 300,
            },
        ],
    ]
}

fn view_chap2_demo4() -> Vec<Node<Msg>> {
    nodes![
        div![
            style! {
                St::Height => "90vh",
                St::Overflow => "scroll",
            },
            md!(format!("```js\n{}\n```", include_str!("./js/chap2_demo4.js")).as_str()),
        ],
        div![
            id!["chap2-demo4"],
            style! {
                St::BackgroundColor => "lightgrey",
                St::Width => 200,
                St::Height => 200,
            },
        ],
    ]
}

fn view_chap3_demo1() -> Vec<Node<Msg>> {
    nodes![
        div![
            style! {
                St::Height => "90vh",
                St::Overflow => "scroll",
            },
            md!(format!("```js\n{}\n```", include_str!("./js/chap3_demo1.js")).as_str()),
        ],
        svg![
            id!["chap3-demo1"],
            style! {
                St::BackgroundColor => "lightgrey",
            },
            attrs! {
                At::Width => 300,
                At::Height => 150,
            },
        ],
    ]
}

fn view_chap3_demo2() -> Vec<Node<Msg>> {
    nodes![
        div![
            style! {
                St::Height => "90vh",
                St::Overflow => "scroll",
            },
            md!(format!("```js\n{}\n```", include_str!("./js/chap3_demo2.js")).as_str()),
        ],
        svg![
            id!["chap3-demo2"],
            style! {
                St::BackgroundColor => "lightgrey",
            },
            attrs! {
                At::Width => 300,
                At::Height => 150,
            },
        ],
    ]
}

fn main() {
    App::start("app", init, update, view);
}
