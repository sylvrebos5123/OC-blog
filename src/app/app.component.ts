import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog-openclassrooms';

  posts =[

    {
      title: 'Mon ami Jacko',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id dapibus massa. Phasellus vestibulum ultricies nisl, semper tempus dolor semper ac. Nam cursus convallis metus id rhoncus. Praesent mollis, ligula auctor dictum imperdiet, massa nisl dignissim est, at feugiat arcu eros et ligula. Maecenas eu arcu ante. Donec congue sodales orci, vitae mattis ante porta non. Suspendisse dapibus, leo et feugiat elementum, tortor lorem tempus metus, vitae tristique neque diam eu magna. Mauris ut elementum sem. Integer diam ligula, aliquet eu quam ac, mattis scelerisque sapien. Proin at libero vel quam aliquet elementum sed nec eros. Sed convallis metus nec lorem pretium varius.',
      loveIts : -1,
      created_at : new Date()
    },
    {
      title: 'La machine infernale',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id dapibus massa. Phasellus vestibulum ultricies nisl, semper tempus dolor semper ac. Nam cursus convallis metus id rhoncus. Praesent mollis, ligula auctor dictum imperdiet, massa nisl dignissim est, at feugiat arcu eros et ligula. Maecenas eu arcu ante. Donec congue sodales orci, vitae mattis ante porta non. Suspendisse dapibus, leo et feugiat elementum, tortor lorem tempus metus, vitae tristique neque diam eu magna. Mauris ut elementum sem. Integer diam ligula, aliquet eu quam ac, mattis scelerisque sapien. Proin at libero vel quam aliquet elementum sed nec eros. Sed convallis metus nec lorem pretium varius.',
      loveIts : 2,
      created_at : new Date()
    },
    {
      title: 'Nouveau challenge',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id dapibus massa. Phasellus vestibulum ultricies nisl, semper tempus dolor semper ac. Nam cursus convallis metus id rhoncus. Praesent mollis, ligula auctor dictum imperdiet, massa nisl dignissim est, at feugiat arcu eros et ligula. Maecenas eu arcu ante. Donec congue sodales orci, vitae mattis ante porta non. Suspendisse dapibus, leo et feugiat elementum, tortor lorem tempus metus, vitae tristique neque diam eu magna. Mauris ut elementum sem. Integer diam ligula, aliquet eu quam ac, mattis scelerisque sapien. Proin at libero vel quam aliquet elementum sed nec eros. Sed convallis metus nec lorem pretium varius.',
      loveIts : 0,
      created_at : new Date()
    }

  ];
}
