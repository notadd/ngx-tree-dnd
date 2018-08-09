import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nestedLists = [
    {title: 'Item 1', children: [] as any[]},
    {
      title: 'title Item 2',
      children: [
        {title: 'Item 2a', children: [] as any[]},
        {title: 'Item 2b', children: [] as any[]},
        {title: 'Item 2c', children: [] as any[]}
      ]
    },
    {
      title: 'Item 3',
      children: [
        {title: 'Item 3a', children: [] as any[]},
        {title: 'Item 3b', children: [] as any[]},
        {title: 'Item 3c', children: [] as any[]}
      ]
    }
  ];

  actions = [
    {
      icon: 'remove_red_eye',
      callback: (model) => console.log(model)
    },
    {
      icon: 'edit',
      callback: (model) => this.edit(model)
    },
    {
      icon: 'delete',
      callback: (model) => console.log(model)
    }
  ];

  constructor() {
  }

  edit(modle) {
    console.log(modle);
  }
}
