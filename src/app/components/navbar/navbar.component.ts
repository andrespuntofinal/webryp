import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [MenubarModule],
})
export class NavbarComponent {
  @Output() eventActionSidebar = new EventEmitter<boolean>();
  @Input() items: MenuItem[] | undefined;
  @Input() sidebarVisible!: boolean;
  @Input() image!: string;
  @Input() placeholder!: string;
  @Input() greeting: string = 'Hola';
  @Input() name: string = '';
  @Input() role: string = '';
  
  


  ngOnInit() {}
}
