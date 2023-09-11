import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,

  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [
    PanelMenuModule,
    SidebarModule,
    ButtonModule,
    AvatarModule,
    CommonModule,
  ],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {
  @Output() eventActionSidebar = new EventEmitter<boolean>();
  @Input() sidebarVisible: boolean = false;
  @Input() items: MenuItem[] | undefined;
  @Input() greeting: string = 'Hola';
  @Input() name = 'Oscar Jaramillo';
  @Input() role = 'Administrador';

  constructor() {
    this.items = [];
  }

  ngOnInit() {}

  sidebarClose = () => {
    this.sidebarVisible = false;
    this.eventActionSidebar.emit(false);
  };

  logout() {
    localStorage.removeItem('globalState');
  }
}
