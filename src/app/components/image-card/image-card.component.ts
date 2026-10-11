import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
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

  readonly imageError = signal(false);

  onCardClick(): void {
    this.selectImage.emit(this.image);
  }

  onLikeClick(event: MouseEvent): void {
    event.stopPropagation();
    this.toggleLike.emit(this.image.id);
  }

  onImageError(): void {
    this.imageError.set(true);
  }
}
