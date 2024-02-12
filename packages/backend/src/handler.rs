use lambda_http::Error;
use lambda_runtime::LambdaEvent;
use serde_json::{json, Value};

pub async fn handle_request(event: LambdaEvent<Value>) -> Result<Value, Error> {
    println!("Rust Lambda handler started🚀");
    let (event, _context) = event.into_parts();
    let first_name = event["firstName"].as_str().unwrap_or("world");
    Ok(json!({ "message": format!("Hello, {}!", first_name) }))
}
