# Vue 3 + TS + Vite + qiankun

## 项目搭建

+ 初始化

  ```sh
  yarn create @vitejs/app ./micro-main  --template vue-ts
  ```



## 目录结构

```lua
├── publish/
└── src/
    ├── assets/                    -- 静态资源目录
    ├── common/                    -- 通用类库目录
    ├── components/                -- 公共组件目录
    ├── router/                    -- 路由配置目录
    ├── store/                     -- 状态管理目录
    ├── style/                     -- 通用 CSS 目录
    ├── utils/                     -- 工具函数目录
    ├── views/                     -- 页面组件目录
    ├── App.vue
    ├── main.ts
    ├── shims-vue.d.ts
├── tests/                         -- 单元测试目录
├── index.html
├── tsconfig.json                  -- TypeScript 配置文件
├── vite.config.ts                 -- Vite 配置文件
└── package.json

```

拟改造成
```lua
.
├── build # 打包脚本相关
│   ├── config # 配置文件
│   ├── generate # 生成器
│   ├── script # 脚本
│   └── vite # vite配置
├── mock # mock文件夹
├── public # 公共静态资源目录
├── src # 主目录
│   ├── api # 接口文件
│   ├── assets # 资源文件
│   │   ├── icons # icon sprite 图标文件夹
│   │   ├── images # 项目存放图片的文件夹
│   │   └── svg # 项目存放svg图片的文件夹
│   ├── components # 公共组件
│   ├── design # 样式文件
│   ├── directives # 指令
│   ├── enums # 枚举/常量
│   ├── hooks # hook
│   │   ├── component # 组件相关hook
│   │   ├── core # 基础hook
│   │   ├── event # 事件相关hook
│   │   ├── setting # 配置相关hook
│   │   └── web # web相关hook
│   ├── layouts # 布局文件
│   │   ├── default # 默认布局
│   │   ├── iframe # iframe布局
│   │   └── page # 页面布局
│   ├── locales # 多语言
│   ├── logics # 逻辑
│   ├── main.ts # 主入口
│   ├── router # 路由配置
│   ├── settings # 项目配置 （用于配置项目内展示的内容、布局、文本等效果，存于localStorage中）
│   │   ├── componentSetting.ts # 组件配置
│   │   ├── designSetting.ts # 样式配置
│   │   ├── encryptionSetting.ts # 加密配置
│   │   ├── localeSetting.ts # 多语言配置
│   │   ├── projectSetting.ts # 项目配置
│   │   └── siteSetting.ts # 站点配置
│   ├── store # 数据仓库
│   ├── utils # 工具类
│   └── views # 页面
├── test # 测试
│   └── server # 测试用到的服务
│       ├── api # 测试服务器
│       ├── upload # 测试上传服务器
│       └── websocket # 测试ws服务器
├── types # 类型文件
├── vite.config.ts # vite配置文件
└── windi.config.ts # windcss配置文件

```