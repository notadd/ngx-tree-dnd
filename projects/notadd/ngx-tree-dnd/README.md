# ngx-tree-dnd

基于[@swimlane/ngx-dnd](https://github.com/swimlane/ngx-dnd)，可拖拽,可配置actions的Angular树组件  
保留原有的api和feature，修改了默认样式，添加了折叠、action配置

## How to use
### step-1

#### 安装`@notadd/ngx-tree-dnd`
+ `npm install @notadd/ngx-tree-dnd` 
 
#### 安装依赖
+ `npm install @swimlane/dragula material-design-icons`

#### step-2
+ 添加NgxTreeDnDModule到你的AppModule
+ 在angular.json或者styles中引入material-design-icons
> 如果你的项目是Angular6，需要在polyfills.ts中添加如下代码：  
`(window as any).global = window;`

#### step-3
+ 在你的component中添加`ngx-tree-dnd-container`组件
```html
<ngx-tree-dnd-container
    [labelKey]="'title'"
    [model]="nestedLists"
    [actions]="actions">
</ngx-tree-dnd-container> 
```

```js
nestedLists = [
  {
    title: 'Item 1',
    children: []
  },
  {
    title: 'Item 2',
    children: [
      {
        title: 'Item 2a',
        children: []
      },
      {
        title: 'Item 2b',
        children: []
      },
      {
        title: 'Item 2c',
        children: []
      }
    ]
  },
  {
    title: 'Item 3',
    children: [
      {
        title: 'Item 3a',
        children: []
      },
      {
        title: 'Item 3b',
        children: []
      },
      {
        title: 'Item 3c',
        children: []
      }
    ]
  }
];
```
```js
actions = [
    {
      // action按钮material icon
      icon: 'remove_red_eye',
      /* 点击action按钮的回调函数 */
      callback: (model) => {
        /* model为当前actions所在item的model */
        /* do something */
      }
    },
    {
      icon: 'edit',
      callback: (model) => {}
    },
    {
      icon: 'delete',
      callback: (model) => {}
    }
  ];
```

## 属性
+ `labelKey: string`，item title的键值，默认为 'label'
+ `model: array`，tree数据源
+ `actions: array`，item操作项

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
