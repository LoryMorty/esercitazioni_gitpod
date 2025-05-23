import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserItemComponent } from './user-item/user-item.component'
import { HelloWorldComponent } from './hello-world/hello-world.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserItemComponent, HelloWorldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ripasso-verifica';
}
