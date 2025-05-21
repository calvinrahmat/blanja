provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "vulnerable_bucket" {
  bucket = "vulnerable-public-bucket-demo-123456"
  acl    = "public-read" # This is a vulnerability: public read access
}

resource "aws_s3_bucket_public_access_block" "public_access" {
  bucket = aws_s3_bucket.vulnerable_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_secretsmanager_secret" "example_secret" {
  name = "example-secret"
  description = "Example secret for demonstration purposes"
}

resource "aws_secretsmanager_secret_version" "example_secret_version" {
  secret_id     = aws_secretsmanager_secret.example_secret.id
  secret_string = "{\"username\":\"admin\",\"password\":\"supersecretpassword\"}"
} 