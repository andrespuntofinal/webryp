import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items!: MenuItem[] | undefined;
  title = 'webRyP';
  rol = 'Administrador';
  name = 'Oscar Jaramillo';
  isSidebarVisible = false;
  /**
   *
   */
  constructor() {
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Bookmark',
                icon: 'pi pi-fw pi-bookmark',
              },
              {
                label: 'Video',
                icon: 'pi pi-fw pi-video',
              },
            ],
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash',
          },
          {
            separator: true,
          },
          {
            label: 'Export',
            icon: 'pi pi-fw pi-external-link',
          },
        ],
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Left',
            icon: 'pi pi-fw pi-align-left',
          },
          {
            label: 'Right',
            icon: 'pi pi-fw pi-align-right',
          },
          {
            label: 'Center',
            icon: 'pi pi-fw pi-align-center',
          },
          {
            label: 'Justify',
            icon: 'pi pi-fw pi-align-justify',
          },
        ],
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus',
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-user-minus',
          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
                items: [
                  {
                    label: 'Print',
                    icon: 'pi pi-fw pi-print',
                  },
                ],
              },
              {
                icon: 'pi pi-fw pi-bars',
                label: 'List',
              },
            ],
          },
        ],
      },
      {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus',
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
        ],
      },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off',
      },
    ];
  }

  changeStatusSidebar = (event: any) => {
    this.isSidebarVisible = event;
  };

  initResizeObserver = () =>
  setTimeout(() => {
    {
      const containerParent =
        window.document.getElementsByClassName('container-pages')[0];

      const containerMenu =

        containerParent?.childNodes[0]?.childNodes[0]?.childNodes[0];



      if (containerMenu) {

        containerMenu.addEventListener('resized', (e) => {

          console.log(e);

        });

      }

    }

  }, 0);

  eventChangeWindow = () =>
    setTimeout(() => {
      const primaryContent =
        window.document.getElementsByClassName('primary-content')[0];

      if (primaryContent.children.length > 1) {
        const containerMenu = primaryContent.children[1].children[0]
          .children[0] as HTMLDivElement;
        const containerPages = primaryContent.children[2] as HTMLDivElement;
        containerPages.style.minHeight = `calc(100vh - ${containerMenu.offsetHeight}px)`;
        containerPages.style.maxHeight = `calc(100vh - ${containerMenu.offsetHeight}px)`;
        containerPages.style.marginTop = `${containerMenu.offsetHeight}px`;
      } else {
        this.eventChangeWindow();
      }
    }, 0);

}
