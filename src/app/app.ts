import { Component, signal, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit {
  protected readonly title = signal('CodeACuisine');

  private readonly router = inject(Router);

  ngOnInit(): void {
    this.updateBodyClass(this.router.url);
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.updateBodyClass(event.urlAfterRedirects);
        }
      });
  }

  /**
   * Updates the body class based on the current route.
   * Removes old route classes and adds the new one.
   *
   * @param url The current URL after redirects
   */
  private updateBodyClass(url: string): void {
    document.body.classList.remove('home', 'recipes', 'about', 'contact');
    if (url === '/home' || url === '/') {
      document.body.classList.add('home');
    } else if (url.startsWith('/recipes')) {
      document.body.classList.add('recipes');
    } else if (url.startsWith('/about')) {
      document.body.classList.add('about');
    } else if (url.startsWith('/contact')) {
      document.body.classList.add('contact');
    }
  }
}
