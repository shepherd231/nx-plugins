variable "gcp_project_id" {}

variable "gcp_region" {}

variable "github_owner" {
  type        = string
  description = <<EOT
    Variable for GitHub owner.

    This represents what account or organization the repository will be created under.
  EOT
}
