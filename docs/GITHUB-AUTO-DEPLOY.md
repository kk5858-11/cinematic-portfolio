# GitHub 自动部署（一次配置，以后自动更新）

公开地址：**https://cinematic-portfolio-pi.vercel.app**

## 第一步：登录 GitHub（只需一次）

在终端执行（会打开浏览器）：

```bash
/tmp/gh_2.63.2_macOS_arm64/bin/gh auth login -h github.com -p https -w
```

按提示在浏览器里完成授权。

## 第二步：创建仓库并推送代码

```bash
cd "/Users/mac/cursor/个站雏形"
/tmp/gh_2.63.2_macOS_arm64/bin/gh repo create cinematic-portfolio --public --source=. --remote=origin --push
```

## 第三步：把 Vercel 连上 GitHub

1. 打开 [Vercel → Login Connections](https://vercel.com/account/login-connections)，用 **Connect GitHub** 授权（只需一次）。
2. 再在终端执行：

```bash
cd "/Users/mac/cursor/个站雏形"
npx vercel git connect --yes
```

3. 在 [项目 Git 设置](https://vercel.com/kongtengfei81-6907s-projects/cinematic-portfolio/settings/git) 确认已连接仓库 **kk5858-11/cinematic-portfolio**。

## 以后怎么自动更新？

1. 在 Cursor 里改个站代码  
2. 在终端执行：

```bash
cd "/Users/mac/cursor/个站雏形"
git add .
git commit -m "更新个站内容"
git push
```

3. 等 1～2 分钟，打开公开链接并刷新即可（**链接不变**）。
