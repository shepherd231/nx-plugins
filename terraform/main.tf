data "google_project" "acacia_project" {
  project_id = var.gcp_project_id
}

#---------------------------
# Github
#---------------------------
resource "github_repository" "nx_plugins" {
  name            = "nx-plugins"
  description     = "Set of nx-plugins for our projects."
  homepage_url    = "https://www.npmjs.com/search?q=@shepherd23/nx-"
  visibility      = "public"
  has_issues      = true
  has_projects    = true
  has_downloads   = true
  has_discussions = false
  has_wiki        = false
}

#---------------------------
# Secret Manager
#---------------------------
data "google_secret_manager_secret" "github_pat" {
  project   = data.google_project.acacia_project.project_id
  secret_id = "github-pat"
}

data "google_secret_manager_secret_version" "github_pat" {
  secret = data.google_secret_manager_secret.github_pat.id
}

data "google_secret_manager_secret" "npm_token" {
  project   = data.google_project.acacia_project.project_id
  secret_id = "npm-token"
}

data "google_secret_manager_secret_version" "npm_token" {
  secret = data.google_secret_manager_secret.npm_token.id
}

#---------------------------
# Github Actions
#---------------------------
resource "github_actions_secret" "gh_pat" {
  repository      = github_repository.nx_plugins.name
  secret_name     = "GH_PAT"
  plaintext_value = data.google_secret_manager_secret_version.github_pat.secret_data
}

resource "github_actions_secret" "npm_token" {
  repository      = github_repository.nx_plugins.name
  secret_name     = "NPM_TOKEN"
  plaintext_value = data.google_secret_manager_secret_version.npm_token.secret_data
}
