use handler::handle_request;
use lambda_http::{run, Error};
use lambda_runtime::service_fn;

mod handler;

#[tokio::main]
async fn main() -> Result<(), Error> {
    println!("Starting lambda");
    run(service_fn(handle_request)).await?;
    Ok(())
}
