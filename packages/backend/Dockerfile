# Rustのビルド環境
FROM rust:1.75.0 as builder
WORKDIR /usr/src/myapp
COPY . .
RUN cargo build --release

# 実行環境
FROM debian:buster-slim
COPY --from=builder /usr/src/myapp/target/release/myapp /usr/local/bin/myapp
CMD ["myapp"]
