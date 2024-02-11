use lambda_http::{Error, Request};
use serde_json::{json, Value};

pub async fn handle_request(event: Request) -> Result<Value, Error> {
    println!("Received event: {:?}", event);
    Ok(json!({ "message": "Hello, World!"}))
}
