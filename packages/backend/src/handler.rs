use async_graphql::http::{playground_source, GraphQLPlaygroundConfig};
use lambda_http::{Body, Error, Request, Response};
use serde_json::{json, Value};

pub async fn handle_request(request: Request) -> Result<Response<Body>, Error> {
    println!("Rust Lambda handler started🚀");

    // リクエストボディを取得してJSONとしてパース
    let body = match request.body() {
        Body::Text(text) => text,
        Body::Binary(binary) => std::str::from_utf8(binary).unwrap_or_default(),
        _ => "",
    };
    let parsed_body: Value = serde_json::from_str(body).unwrap_or(json!({}));

    // `firstName`キーの値を取得（存在しない場合は"world"をデフォルト値とする）
    let first_name = parsed_body
        .get("firstName")
        .and_then(Value::as_str)
        .unwrap_or("world");

    // レスポンスボディを生成
    let response_body = json!({ "hello": first_name }).to_string();

    // ブラウザからのGETリクエストをチェックして、Playgroundを返す
    if request.uri().path() == "/graphql" && request.method() == "GET" {
        let html = playground_source(GraphQLPlaygroundConfig::new("/graphql"));
        print!("html: {}", html);
        Response::builder()
            .status(200)
            .header("Content-Type", "text/html")
            .body(Body::from(html))
            .map_err(Error::from)
    } else {
        Response::builder()
            .status(200)
            .body(Body::Text(response_body))
            .map_err(Error::from)
    }
}
