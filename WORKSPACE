workspace(name = "react_samples")

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")
load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")

# Node Based Tools
http_archive(
    name = "build_bazel_rules_nodejs",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/0.27.1/rules_nodejs-0.27.1.tar.gz"],
    sha256 = "71867bb432496d6d54ccece234403fd1784b95f409492511236607c5190d3d4e",
)

# SASS
http_archive(
      name = "io_bazel_rules_sass",
      url = "https://github.com/bazelbuild/rules_sass/archive/1.17.2.zip",
      strip_prefix = "rules_sass-1.17.2",
)


load("@build_bazel_rules_nodejs//:defs.bzl", "yarn_install")

yarn_install(
    name = "npm",
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
)

load("@npm//:install_bazel_dependencies.bzl", "install_bazel_dependencies")
install_bazel_dependencies()

load("@npm_bazel_typescript//:index.bzl", "ts_setup_workspace")

ts_setup_workspace()

load("@io_bazel_rules_sass//sass:sass_repositories.bzl", "sass_repositories")

sass_repositories()
