use handler::handle_request;
use lambda_runtime::{service_fn, Error};

mod handler;

#[tokio::main]
async fn main() -> Result<(), Error> {
    println!("Rust Lambda main started🚀");
    let func = service_fn(handle_request);
    lambda_runtime::run(func).await?;
    Ok(())
}
