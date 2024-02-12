// For Cargo Run
use actix_web::{web, App, HttpResponse, HttpServer, Responder};

// ハンドラ関数を定義
async fn greet() -> impl Responder {
    HttpResponse::Ok().body("Hello, world!")
}

#[actix_web::main] // Actix Webの非同期ランタイムを使用
async fn main() -> std::io::Result<()> {
    // HTTPサーバーを起動
    HttpServer::new(|| {
        App::new()
            // "/" に対するGETリクエストを`greet`関数にルーティング
            .route("/", web::get().to(greet))
    })
    // サーバーをlocalhostのポート8080で起動
    .bind("127.0.0.1:9000")?
    .run()
    .await
}

// For Cargo Lambda
// use handler::handle_request;
// use lambda_http::Error;
// use lambda_runtime::service_fn;

// mod handler;

// #[tokio::main]
// async fn main() -> Result<(), Error> {
//     println!("Rust Lambda main started🚀");
//     let func = service_fn(handle_request);
//     lambda_http::run(func).await?;
//     Ok(())
// }

// For Lambda Runtime
// use handler::handle_request;
// use lambda_runtime::{service_fn, Error};

// mod handler;

// #[tokio::main]
// async fn main() -> Result<(), Error> {
//     println!("Rust Lambda main started🚀");
//     let func = service_fn(handle_request);
//     lambda_runtime::run(func).await?;
//     Ok(())
// }
