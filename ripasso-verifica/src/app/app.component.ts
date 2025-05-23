import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserItemComponent } from './user-item/user-item.component'
import { HelloWorldComponent } from './hello-world/hello-world.component'
import {UserListComponent} from './user-list/user-list.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserItemComponent, HelloWorldComponent, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ripasso-verifica';
}
