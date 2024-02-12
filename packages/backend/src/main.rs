// For Cargo Lambda
use handler::handle_request;
use lambda_http::Error;
use lambda_runtime::service_fn;

mod handler;

#[tokio::main]
async fn main() -> Result<(), Error> {
    println!("Rust Lambda main started🚀");
    let func = service_fn(handle_request);
    lambda_http::run(func).await?;
    Ok(())
}
