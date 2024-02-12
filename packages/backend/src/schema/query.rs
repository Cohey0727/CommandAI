struct QueryRoot;

#[Object]
pub impl QueryRoot {
    async fn hello(&self, ctx: &Context<'_>) -> String {
        "Hello, world!".to_string()
    }
}
