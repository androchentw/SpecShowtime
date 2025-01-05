# Sample

<!-- TOC -->
* [Sample](#sample)
    * [Checklist](#checklist)
  * [Deliverables](#deliverables)
    * [Code: Next.js + FastAPI](#code-nextjs--fastapi)
    * [Test: Playwright + Playwright-BDD + Allure](#test-playwright--playwright-bdd--allure)
      * [Test Code](#test-code)
      * [Report](#report)
  * [Fundamentals](#fundamentals)
    * [Setup Environment](#setup-environment)
    * [Setup Project](#setup-project)
    * [Next.js](#nextjs)
    * [FastAPI](#fastapi)
    * [Integration](#integration)
  * [TestOps](#testops)
    * [Playwright](#playwright)
    * [PyTest](#pytest)
    * [Allure Report](#allure-report)
    * [Other Test Frameworks](#other-test-frameworks)
      * [Jest](#jest)
  * [DevOps](#devops)
    * [Vercel](#vercel)
    * [GKE](#gke)
    * [GitHub Actions](#github-actions)
  * [Ref](#ref)
<!-- TOC -->

<img style="width:60%;" src="./reports/test-results/nextjs-fastapi-demo-nextjs-fastapi-demo-firefox/video.gif" alt="test-results/nextjs-fastapi-demo-nextjs-fastapi-demo-firefox/video.gif">

### Checklist

- [x] Fundamentals
  - [x] Learn [Next.js] + [FastAPI] integration
- [ ] TestOps
  - [x] Add BDD/SBE example using [Playwright]
    - [End-to-end testing](https://nextjs.org/docs/app/building-your-application/testing/playwright)
    - [Integration testing](https://nextjs.org/docs/app/building-your-application/testing)
    - [API testing](https://playwright.dev/docs/api-testing)
      - [Mock APIs](https://playwright.dev/docs/mock)
  - [ ] Add TDD example using [PyTest]
    - [API testing](https://fastapi.tiangolo.com/tutorial/testing/)
  - [x] Add [Allure] to integrate test reports
- [ ] DevOps
  - [ ] Deploy to Vercel
  - [ ] Deploy to GKE
  - [ ] Add GitHub Actions

## Deliverables

### Code: Next.js + FastAPI

```text
├── api/
│   └── index.py
├── app/
│   ├── api/
│   │   ├── helloNextJs/
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
```

### Test: Playwright + Playwright-BDD + Allure

#### Test Code

```text
├── api/tests         # for pytest
or
├── backend/app/tests # for pytest
```

```text
├── features/         # for playwright-bdd
│   ├── steps/
│   │   └── demo-playwright.step.ts
│   └── demo-playwright.feature
├── tests/            # for playwright
│   ├── example.spec.ts
│   └── nextjs-fastapi-demo.spec.ts
├── tests-examples/   # for playwright
│   └── demo-todo-app.spec.ts
├── playwright.config.ts
```

#### Report

```text
├── .features-gen/    # by playwright-bdd
│   ├── features/
│       └── demo-playwright.feature.spec.js
├── allure-report/    # by allure
│   └── index.html
├── playwright-report/  # by playwright. summarize of test-results/
│   ├── data/
│   └── index.html
├── test-results/     # by playwright
│   ├── example-get-started-link-<project>/
│   │   ├── test-finished-1.png   # playwright.config.ts use: screenshot: 'on'
│   │   ├── video.gif     # ffmpeg + gifsicle
│   │   └── video.webm    # playwright.config.ts use: video: 'on'
│   ├── example-has-title-<project>/
│   │   ├── test-finished-1.png
│   │   ├── video.gif
│   │   └── video.webm
│   ├── features-demo-playwright.feature-Playwright-site-Check-title-chromium/
        # playwright.config.ts projects: testDirBdd 
│   │   ├── test-finished-1.png
│   │   ├── video.gif
│   │   └── video.webm
│   ├── nextjs-fastapi-demo-nextjs-fastapi-demo-<project>/
│   │   ├── test-finished-1.png
│   │   ├── video.gif   
│   │   └── video.webm
```

## Fundamentals

### Setup Environment

彙整 安裝並管理 `${ENV}` 等相依套件 `in macos zshrc` 的最佳作法 與 指令

- `Next.js: React, Node.js, TypeScript, nvm, pnpm/npx; ESLint, Prettier`
  - [nvm](https://github.com/nvm-sh/nvm), [pnpm](https://github.com/pnpm/pnpm)
    - [lazynvm.sh](https://gist.github.com/fl0w/07ce79bd44788f647deab307c94d6922)
    - [淺談 JS 生態系的套件管理機制與發展](https://oldmo860617.medium.com/淺談-js-生態系的套件管理機制與發展-5cb10b7e2f72)
    - [PNPM — 更優化的套件管理工具](https://blog.twjoin.com/pnpm-更優化的套件管理工具-1cc5576c53c3)
    - [指令 npm cli & package.json](https://pjchender.dev/npm/npm-cli-and-package-json/)
    - [指令 pnpm](https://pjchender.dev/npm/npm-pnpm-cli/)
  - [ESLint](https://eslint.org/docs/latest/use/getting-started)
    - [Understanding ESLint Configuration: .eslintrc.js vs .eslintrc vs .eslintrc.json](https://medium.com/@ritz.sh/understanding-eslint-configuration-eslintrc-js-vs-eslintrc-vs-eslintrc-json-287ec5e95bf4)
    - [VS Code 安裝 Prettier、ESLint](https://medium.com/@ars37111337/vs-code-%E5%AE%89%E8%A3%9D-prettier-eslint-70dbb12c5cab)
    - [Next.js ESLint](https://nextjs.tw/docs/basic-features/eslint)
    - [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
    - [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
  - Ref
    - [Next13+：專案初始化一文到底紀錄](https://medium.com/@chu23294752/next13-專案初始化一文到底紀錄-f0b5ef5acae9)
    - [monorepo: pnpm + eslint + prettier + husky + lintstaged + commitlint + changesets](https://github.com/muravjev/configs)
    - [pnpm搭建Monorepo工程涵盖集成ts + eslint + prettier + husky + lint-staged + commitizen](https://juejin.cn/post/7358398963840647219)
- `FastAPI: python3, pyenv, pip`

```shell
# DO NOT use homebrew to install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source ~/.zshrc
nvm --version   # 0.40.1
nvm install --lts  # 安裝最新 LTS 版本的 Node.js. 
nvm alias default node

node -v   # v22.12.0
npm -v    # 10.9.0 

npm install -g pnpm
pnpm --version    # 9.15.2
```

### Setup Project

- Check http://localhost:3000
  - `api/index.py`: http://localhost:3000/api/py/helloFastApi
  - `app/api/helloNextJs` http://localhost:3000/api/helloNextJs
  - FastApi: http://127.0.0.1:8000

```shell
git clone https://github.com/androchentw/nextjs-fastapi.git
cd nextjs-fastapi

python3 -m venv venv
source venv/bin/activate

pnpm install

# run the development server(python dependencies will be installed automatically here)
pnpm dev

# Additional

# code .eslintrc.json
pnpm add -D prettier eslint-config-prettier eslint-plugin-prettier
pnpm add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
pnpm add -D eslint-config-airbnb-base
pnpm update --latest

pnpm run lint   # 檢查程式碼規範問題
pnpm run format # 自動格式化程式碼
```

### Next.js

### FastAPI

### Integration

## TestOps

### Playwright

- https://playwright.dev/docs/intro
- [playwright-bdd](https://github.com/vitalets/playwright-bdd)
  - `npx bddgen && npx playwright test`
  - [Executing BDD tests with Playwright](https://willholmes.hashnode.dev/executing-bdd-tests-with-playwright)
  - [Generate BDD tests with ChatGPT and run them with Playwright]([https://medium.com/@vitaliypotapov/generate-bdd-tests-with-chatgpt-and-run-them-with-playwright-e1ce29d7a7bd](https://medium.com/@vitaliypotapov/generate-bdd-tests-with-chatgpt-and-run-them-with-playwright-e1ce29d7a7bd))
  - [Combine BDD with classic playwright tests](https://github.com/vitalets/playwright-bdd/issues/242)
- Ref
  - https://github.com/davidseow/how-to-playwright
  - [Understanding Playwright and Jest: A Strategic Guide for Effective Testing](https://medium.com/@saiyar.jo147th248/understanding-playwright-and-jest-a-strategic-guide-for-effective-testing-9d58c37c89f8)
- BDD/SBE
  - [SBE BDD TDD CDD](https://github.com/ProgramMurTw/pai-sensei/blob/main/tech/sbe-bdd-tdd-cdd.md#what-is-the-most-popular-an-useful-sbe-framework-being-used)

```shell
# code features & steps
npx bddgen && npx playwright test

# check .features-gen/

pnpm create playwright

pnpm exec playwright codegen

pnpm exec playwright test
# pnpm exec playwright test --ui

pnpm exec playwright show-report ./spec/reports/playwright-report

# playwright-bdd
pnpm i -D playwright-bdd

# convert webm to gif to show video on GitHub
# ffmpeg -i video.webm -pix_fmt rgb24 output.gif
# gifsicle -O3 output.gif -o optimized.gif

find ./spec/reports/test-results/ -type f -name "*.webm" -exec bash -c 'ffmpeg -i "$0" -pix_fmt rgb8 "${0%.webm}.gif" && gifsicle --optimize=3 --batch "${0%.webm}.gif"' {} \;
```

### PyTest

- Ref
  - [FastAPI - Testing](https://fastapi.tiangolo.com/tutorial/testing/)
  - [Testing FastAPI Application with Pytest](https://medium.com/@gnetkov/testing-fastapi-application-with-pytest-57080960fd62)
  - [Building And Testing FastAPI CRUD APIs With Pytest (Hands-On Tutorial)](https://pytest-with-eric.com/pytest-advanced/pytest-fastapi-testing/)

```shell
pip install httpx
pytest
```

`test_example_helloworld.py`

```python
from fastapi import FastAPI
from fastapi.testclient import TestClient

app = FastAPI()


@app.get("/")
async def read_main():
    return {"msg": "Hello World"}


client = TestClient(app)


def test_read_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"msg": "Hello World"}
```

### Allure Report

- [Allure Report Demo](https://demo.allurereport.org/)
- [Getting started with Allure Playwright](https://allurereport.org/docs/playwright/)
- [Getting started with Allure Pytest](https://allurereport.org/docs/pytest/)
- CI/CD
  - [GitHub Actions integration](https://allurereport.org/docs/integrations-github/)
  - [allure-docker-service](https://github.com/fescobar/allure-docker-service)
  - [allure-server](https://github.com/kochetkov-ma/allure-server)
  - [allure-report-publisher](https://github.com/andrcuns/allure-report-publisher)
  - [allure-report-deployer](https://github.com/cybersokari/allure-report-deployer)
- Ref
  - [Allure Reporting and Playwright: Quick Setup, Powerful Insights](https://medium.com/@merisstupar11/allure-reporting-and-playwright-quick-setup-powerful-insights-900a237a524d)
  - [Allure Playwright configuration](https://allurereport.org/docs/playwright-configuration/)

```shell
pnpm add -D @playwright/test allure-playwright
pnpm add -D allure-js-commons

code playwright.config.ts

## playwright.config.ts
export default defineConfig({
  // ...
  reporter: [["line"], ["allure-playwright"]],
});
##

pnpm exec playwright test

# A. open at local
allure serve ./spec/reports/allure-results/

# B. or into single file, caution about size
allure generate --clean --single-file ./spec/reports/allure-results/ -o spec/reports/allure-report
```

```shell
source .venv/bin/activate
pip3 install allure-pytest

python -m pytest --alluredir allure-results

# allure serve allure-results
```

### Other Test Frameworks

- [cucumber-js](https://github.com/cucumber/cucumber-js)
  - `pnpm add @cucumber/cucumber`
  - [A QA's 2-Minute Guide: Setting Up Playwright, Cucumber & Gherkin with POM Best Practices](https://medium.com/@mrajesh7036/a-qas-2-minute-guide-setting-up-playwright-cucumber-gherkin-with-pom-best-practices-884f738e0133)
  - [Playwright_Cucumber_TS](https://github.com/ortoniKC/Playwright_Cucumber_TS)
- [活文件 (living document) - Given When Then](https://alincode.github.io/learning-e2e-testing-with-python/living_document.html)
- [Behave介绍和快速示例](https://blog.csdn.net/oscar999/article/details/134431154) + Selenium
  - [pytest-bdd](https://github.com/pytest-dev/pytest-bdd)
  - [BDD - Python Behave 入门](https://blog.csdn.net/wumingxiaoyao/article/details/135115353)

#### Jest

- [Setting up Jest with Next.js](https://nextjs.org/docs/app/building-your-application/testing/jest)
- [Jest - Get Started](https://jestjs.io/docs/getting-started)
  - [Testing React Apps](https://jestjs.io/docs/tutorial-react)
- Ref
  - [Day 05 React 測試安裝介紹 ( CRA / Vite / Next.js )](https://ithelp.ithome.com.tw/m/articles/10322782)
  - [使用 Jest 和 React Testing Library 進行測試的方法](https://5xcampus.com/posts/jest-react-testing-library.html)
  - [Note - React Testing](https://pjchender.dev/react/note-react-testing/)
  - [react-testing-library](https://github.com/testing-library/react-testing-library)

```shell
# pnpm add -D jest
pnpm create jest@latest

pnpm add -D babel-jest @babel/core @babel/preset-env
pnpm add -D @babel/preset-typescript

code babel.config.js

## babel.config.js
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
}; 
##


# code my-test.test.js

jest my-test --notify --config=config.json
```

## DevOps

### Vercel

### GKE

### GitHub Actions

## Ref

- [Test Generator](https://playwright.dev/docs/codegen)
- [value proposition Canvas](https://www.b2binternational.com/research/methods/faq/what-is-the-value-proposition-canvas/)
- User Story
  - https://easyretro.io/tools/user-story-generator/
  - https://www.leiga.com/free-tools/agile-methodology-user-story-generator
  - Ref
    - https://rasa.leovan.tech/stories/
    - https://github.com/RasaHQ/rasa-2.x-form-examples/blob/main/03-simple-form/data/stories.yml
- Test
  - https://playwright.dev/docs/input
  - https://playwright.dev/docs/test-assertions

<!-- Links -->

[Next.js]: https://github.com/vercel/next.js/

[FastAPI]: https://github.com/fastapi/fastapi

[Playwright]: https://github.com/microsoft/playwright

[Behave]: https://github.com/behave/behave

[Jest]: https://github.com/jestjs/jest

[PyTest]: https://github.com/pytest-dev/pytest

[Allure]: https://github.com/allure-framework/allure2