use seed::{prelude::*, *};

mod bindings;

fn init(_: Url, orders: &mut impl Orders<Msg>) -> Model {
    orders.after_next_render(|_| Msg::Render);

    Model::default()
}

struct Model {
    render: fn(),
    view: fn(&Model) -> Vec<Node<Msg>>,
    view_id: String,
}

impl Default for Model {
    fn default() -> Self {
        Self {
            render: bindings::chap2_demo1,
            view: view_chap2_demo1,
            view_id: "chap2-demo1".to_string(),
        }
    }
}

impl Model {
    fn with_demo(demo: Demo) -> Self {
        match demo {
            Demo::Chap2Demo1 => Model::default(),
            Demo::Chap2Demo2 => Model {
                render: bindings::chap2_demo2,
                view: view_chap2_demo2,
                view_id: "chap2-demo2".to_string(),
            },
            Demo::Chap2Demo3 => Model {
                render: bindings::chap2_demo3,
                view: view_chap2_demo3,
                view_id: "chap2-demo3".to_string(),
            },
            Demo::Chap2Demo4 => Model {
                render: bindings::chap2_demo4,
                view: view_chap2_demo4,
                view_id: "chap2-demo4".to_string(),
            },
            Demo::Chap3Demo1 => Model {
                render: bindings::chap3_demo1,
                view: view_chap3_demo1,
                view_id: "chap3-demo1".to_string(),
            },
            Demo::Chap3Demo2 => Model {
                render: bindings::chap3_demo2,
                view: view_chap3_demo2,
                view_id: "chap3-demo2".to_string(),
            },
            Demo::Chap3Demo3 => Model {
                render: bindings::chap3_demo3,
                view: view_chap3_demo3,
                view_id: "chap3-demo3".to_string(),
            },
            Demo::Chap4Demo1 => Model {
                render: bindings::chap4_demo1,
                view: view_chap4_demo1,
                view_id: "chap4-demo1".to_string(),
            },
            Demo::Chap4Demo2 => Model {
                render: bindings::chap4_demo2,
                view: view_chap4_demo2,
                view_id: "chap4-demo2".to_string(),
            },
            Demo::Chap4Demo3 => Model {
                render: bindings::chap4_demo3,
                view: view_chap4_demo3,
                view_id: "chap4-demo3".to_string(),
            },
            Demo::Chap4Demo4 => Model {
                render: bindings::chap4_demo4,
                view: view_chap4_demo4,
                view_id: "chap4-demo4".to_string(),
            },
        }
    }
}

#[derive(Debug, Copy, Clone, PartialEq)]
enum Demo {
    Chap2Demo1,
    Chap2Demo2,
    Chap2Demo3,
    Chap2Demo4,
    Chap3Demo1,
    Chap3Demo2,
    Chap3Demo3,
    Chap4Demo1,
    Chap4Demo2,
    Chap4Demo3,
    Chap4Demo4,
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
            Demo::Chap3Demo3 => write!(f, "Chapter 3, Demo 3"),
            Demo::Chap4Demo1 => write!(f, "Chapter 4, Demo 1"),
            Demo::Chap4Demo2 => write!(f, "Chapter 4, Demo 2"),
            Demo::Chap4Demo3 => write!(f, "Chapter 4, Demo 3"),
            Demo::Chap4Demo4 => write!(f, "Chapter 4, Demo 4"),
        }
    }
}

enum Msg {
    Render,
    Select(Demo),
}

fn update(msg: Msg, model: &mut Model, orders: &mut impl Orders<Msg>) {
    match msg {
        Msg::Select(demo) => {
            orders.after_next_render(|_| Msg::Render);
            *model = Model::with_demo(demo);
        }
        Msg::Render => (model.render)(),
    }
}

fn view(model: &Model) -> Vec<Node<Msg>> {
    vec![
        view_dropdown(),
        br![],
        div![
            style! {
                St::Height => "90vh",
                St::Display => "grid",
                St::GridTemplateRows => "min-content auto",
                St::JustifyContent => "center",
            },
            (model.view)(model),
        ],
    ]
}

fn view_dropdown() -> Node<Msg> {
    select![
        style! {
            St::Display => "block",
            St::Width => "50%",
            St::Margin => "auto",
        },
        optgroup![
            attrs! {
                At::Label => "Let's make some graphs",
            },
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
        ],
        optgroup![
            attrs! {
                At::Label => "Selecting and binding",
            },
            option![
                Demo::Chap3Demo1.to_string(),
                ev(Ev::Click, |_| Msg::Select(Demo::Chap3Demo1))
            ],
            option![
                Demo::Chap3Demo2.to_string(),
                ev(Ev::Click, |_| Msg::Select(Demo::Chap3Demo2))
            ],
            option![
                Demo::Chap3Demo3.to_string(),
                ev(Ev::Click, |_| Msg::Select(Demo::Chap3Demo3))
            ],
        ],
        optgroup![
            attrs! {
                At::Label => "Events, interactivity and animation",
            },
            option![
                Demo::Chap4Demo1.to_string(),
                ev(Ev::Click, |_| Msg::Select(Demo::Chap4Demo1))
            ],
            option![
                Demo::Chap4Demo2.to_string(),
                ev(Ev::Click, |_| Msg::Select(Demo::Chap4Demo2))
            ],
            option![
                Demo::Chap4Demo3.to_string(),
                ev(Ev::Click, |_| Msg::Select(Demo::Chap4Demo3))
            ],
            option![
                Demo::Chap4Demo4.to_string(),
                ev(Ev::Click, |_| Msg::Select(Demo::Chap4Demo4))
            ],
        ],
    ]
}

fn view_chap2_demo1(model: &Model) -> Vec<Node<Msg>> {
    nodes![
        div![
            id![&model.view_id],
            style! {
                St::BackgroundColor => "lightgrey",
                St::Margin => "auto",
                St::Width => 600,
                St::Height => 300,
            },
        ],
        div![
            style! {
                St::Overflow => "scroll",
            },
            md!(format!("```js\n{}\n```", include_str!("./js/chap2_demo1.js")).as_str()),
        ],
    ]
}

fn view_chap2_demo2(model: &Model) -> Vec<Node<Msg>> {
    nodes![
        div![
            id![&model.view_id],
            style! {
                St::BackgroundColor => "lightgrey",
                St::Margin => "auto",
                St::Width => 600,
                St::Height => 300,
            },
        ],
        div![
            style! {
                St::Overflow => "scroll",
            },
            md!(format!("```js\n{}\n```", include_str!("./js/chap2_demo2.js")).as_str()),
        ],
    ]
}

fn view_chap2_demo3(model: &Model) -> Vec<Node<Msg>> {
    nodes![
        div![
            id![&model.view_id],
            style! {
                St::BackgroundColor => "lightgrey",
                St::Margin => "auto",
                St::Width => 600,
                St::Height => 300,
            },
        ],
        div![
            style! {
                St::Overflow => "scroll",
            },
            md!(format!("```js\n{}\n```", include_str!("./js/chap2_demo3.js")).as_str()),
        ],
    ]
}

fn view_chap2_demo4(model: &Model) -> Vec<Node<Msg>> {
    nodes![
        ul![
            id![&model.view_id],
            style! {
                St::BackgroundColor => "lightgrey",
                St::Width => 300,
                St::Margin => "auto",
            },
        ],
        div![
            style! {
                St::Overflow => "scroll",
            },
            md!(format!("```js\n{}\n```", include_str!("./js/chap2_demo4.js")).as_str()),
        ],
    ]
}

fn view_chap3_demo1(model: &Model) -> Vec<Node<Msg>> {
    nodes![
        div![
            id![&model.view_id],
            style! {
                St::BackgroundColor => "lightgrey",
                St::Margin => "auto",
                St::Width => 300,
                St::Height => 150,
            },
        ],
        div![
            style! {
                St::Overflow => "scroll",
            },
            md!(format!("```js\n{}\n```", include_str!("./js/chap3_demo1.js")).as_str()),
        ],
    ]
}

fn view_chap3_demo2(model: &Model) -> Vec<Node<Msg>> {
    nodes![
        div![
            id![&model.view_id],
            style! {
                St::BackgroundColor => "lightgrey",
                St::Margin => "auto",
                St::Width => 300,
                St::Height => 150,
            },
        ],
        div![
            style! {
                St::Overflow => "scroll",
            },
            md!(format!("```js\n{}\n```", include_str!("./js/chap3_demo2.js")).as_str()),
        ],
    ]
}

fn view_chap3_demo3(model: &Model) -> Vec<Node<Msg>> {
    nodes![
        ul![
            id![&model.view_id],
            style! {
                St::BackgroundColor => "lightgrey",
                St::Width => 300,
                St::Height => 100,
                St::Margin => "auto",
            },
        ],
        div![
            style! {
                St::Overflow => "scroll",
            },
            md!(format!("```js\n{}\n```", include_str!("./js/chap3_demo3.js")).as_str()),
        ],
    ]
}

fn view_chap4_demo1(model: &Model) -> Vec<Node<Msg>> {
    nodes![
        div![
            id![&model.view_id],
            style! {
                St::BackgroundColor => "lightgrey",
                St::Margin => "auto",
                St::Width => 300,
                St::Height => 150,
            }
        ],
        div![
            style! {
                St::Overflow => "scroll",
            },
            md!(format!("```js\n{}\n```", include_str!("./js/chap4_demo1.js")).as_str()),
        ],
    ]
}

fn view_chap4_demo2(model: &Model) -> Vec<Node<Msg>> {
    nodes![
        div![
            id![&model.view_id],
            style! {
                St::BackgroundColor => "lightgrey",
                St::Margin => "auto",
                St::Width => 600,
                St::Height => 300,
            }
        ],
        div![
            style! {
                St::Overflow => "scroll",
            },
            md!(format!("```js\n{}\n```", include_str!("./js/chap4_demo2.js")).as_str()),
        ],
    ]
}

fn view_chap4_demo3(model: &Model) -> Vec<Node<Msg>> {
    nodes![
        div![
            id![&model.view_id],
            style! {
                St::BackgroundColor => "lightgrey",
                St::Margin => "auto",
                St::Width => 600,
                St::Height => 200,
            }
        ],
        div![
            style! {
                St::Overflow => "scroll",
            },
            md!(format!("```js\n{}\n```", include_str!("./js/chap4_demo3.js")).as_str()),
        ],
    ]
}

fn view_chap4_demo4(model: &Model) -> Vec<Node<Msg>> {
    nodes![
        div![
            id![&model.view_id],
            style! {
                St::BackgroundColor => "lightgrey",
                St::Margin => "auto",
                St::Width => 600,
                St::Height => 200,
            }
        ],
        div![
            style! {
                St::Overflow => "scroll",
            },
            md!(format!("```js\n{}\n```", include_str!("./js/chap4_demo4.js")).as_str()),
        ],
    ]
}

fn main() {
    App::start("app", init, update, view);
}
