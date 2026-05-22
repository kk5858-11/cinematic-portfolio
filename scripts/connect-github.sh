#!/bin/bash
# 一键：创建 GitHub 仓库 + 推送 + 连接 Vercel 自动部署
set -e
cd "$(dirname "$0")/.."

GH="${GH_BIN:-/tmp/gh_2.63.2_macOS_arm64/bin/gh}"
REPO_NAME="${1:-cinematic-portfolio}"

if ! "$GH" auth status &>/dev/null; then
  echo "请先登录 GitHub："
  echo "  $GH auth login -h github.com -p https -w"
  exit 1
fi

if git remote get-url origin &>/dev/null; then
  echo "已有远程仓库，直接推送..."
  git push -u origin main
else
  echo "创建 GitHub 仓库: $REPO_NAME"
  "$GH" repo create "$REPO_NAME" --public --source=. --remote=origin --push
fi

echo "连接 Vercel 与 GitHub..."
npx vercel git connect --yes

echo ""
echo "完成！公开地址: https://cinematic-portfolio-pi.vercel.app"
echo "以后改完代码执行: git add . && git commit -m '更新' && git push"
