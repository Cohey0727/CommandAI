// For Cargo Lambda
use lambda_http::{
    lambda_runtime::{self, Context},
    Body, Error, Request, Response,
};
use serde_json::{json, Value};

pub async fn handle_request(request: Request) -> Result<Response<Body>, Error> {
    println!("Rust Lambda handler started🚀");

    // リクエストボディを取得してJSONとしてパース
    let body = request.body().as_str().unwrap_or_default();
    let parsed_body: Value = serde_json::from_str(body).unwrap_or(json!({}));

    // `firstName`キーの値を取得（存在しない場合は"world"をデフォルト値とする）
    let first_name = parsed_body
        .get("firstName")
        .and_then(Value::as_str)
        .unwrap_or("world");

    // レスポンスボディを生成
    let response_body = json!({ "hello": first_name }).to_string();

    Response::builder()
        .status(200)
        .body(Body::Text(response_body))
        .map_err(Error::from)
}

// For Lambda Runtime
// use lambda_http::Error;
// use lambda_runtime::LambdaEvent;
// use serde_json::{json, Value};

// pub async fn handle_request(event: LambdaEvent<Value>) -> Result<Value, Error> {
//     println!("Rust Lambda handler started🚀");
//     let (event, _context) = event.into_parts();
//     let first_name = event["firstName"].as_str().unwrap_or("world");
//     Ok(json!({ "message": format!("Hello, {}!", first_name) }))
// }
