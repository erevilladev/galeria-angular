import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './components/gallery/gallery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GalleryComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly studentName = signal('Brayian Ramirez Revilla');
  readonly courseName = signal('Desarrollo de Aplicaciones en Red II');
  readonly deliveryDate = signal('12/10/26');
}
