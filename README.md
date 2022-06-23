## huskey lintの練習

参考URL
https://zenn.dev/kurao/articles/456f44a6f43d89

1 ルートdirに`tsconfig.json`を作成

2 ターミナルで以下を実行

```yarn add --dev typescript @types/react @types/node```

3 ターミナルで以下を実行

```yarn add --dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react```

4 ルートdirに`tsconfig.eslint.json`を作成

5 `tsconfig.eslint.json`にソースコードを記述

6 ルートdirに`.eslintrc.json`を作成

7 `.eslintrc.json`にソースコードを記述

8 `package.json`のscriptsにソースコードを記述

9 ターミナルで以下を実行

```yarn add --dev --exact prettier eslint-config-prettier```

10 ルートdirに`.prettierrc`を作成

11 7 `.prettierrc`にソースコードを記述

12 ルートdirに`.vscode/settings.json`を作成

13 `.vscode/settings.json`にソースコードを記述

14 ターミナルで以下を実行

```yarn add --dev husky lint-staged```

15 `package.json`に`lint-staged`以下を記述

16 ターミナルで以下を実行(.huskeyフォルダーが作成される)

```yarn husky install```

17 `.husky/pre-commit`と`.husky/pre-push`にソースコードを記述

18 macの実行権限付与のため、以下を実行

```
chmod a+x .husky/pre-commit 
chmod a+x .husky/pre-push
```