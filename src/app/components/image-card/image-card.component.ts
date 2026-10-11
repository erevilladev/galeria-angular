import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageItem } from '../../models/image.model';

@Component({
  selector: 'app-image-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.css'
})
export class ImageCardComponent {
  @Input({ required: true }) image!: ImageItem;
  @Output() selectImage = new EventEmitter<ImageItem>();
  @Output() toggleLike = new EventEmitter<number>();

  onCardClick(): void {
    this.selectImage.emit(this.image);
  }

  onLikeClick(event: MouseEvent): void {
    event.stopPropagation();
    this.toggleLike.emit(this.image.id);
  }

  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22600%22%20height%3D%22400%22%20viewBox%3D%220%200%20600%20400%22%3E%3Crect%20fill%3D%22%23e7e5e4%22%20width%3D%22600%22%20height%3D%22400%22%2F%3E%3Ctext%20fill%3D%22%2371717a%22%20font-family%3D%22sans-serif%22%20font-size%3D%2216%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20text-anchor%3D%22middle%22%3EImagen%20no%20disponible%3C%2Ftext%3E%3C%2Fsvg%3E';
  }
}
