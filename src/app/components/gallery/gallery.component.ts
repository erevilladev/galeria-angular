import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImageService } from '../../services/image.service';
import { ImageItem } from '../../models/image.model';
import { ImageCardComponent } from '../image-card/image-card.component';
import { ImageModalComponent } from '../image-modal/image-modal.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, FormsModule, ImageCardComponent, ImageModalComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  private readonly imageService = inject(ImageService);

  readonly allImages = signal<ImageItem[]>(this.imageService.getImages());
  readonly categories = this.imageService.getCategories();

  readonly selectedCategory = signal<string>('Todas');
  readonly searchTerm = signal<string>('');
  readonly sortBy = signal<'default' | 'likes' | 'title'>('default');

  readonly selectedImage = signal<ImageItem | null>(null);

  readonly filteredImages = computed(() => {
    let items = this.allImages();
    const cat = this.selectedCategory();
    const query = this.searchTerm().trim().toLowerCase();
    const sort = this.sortBy();

    if (cat !== 'Todas') {
      items = items.filter(img => img.category === cat);
    }

    if (query) {
      items = items.filter(img =>
        img.title.toLowerCase().includes(query) ||
        img.description.toLowerCase().includes(query) ||
        img.tags.some(tag => tag.toLowerCase().includes(query)) ||
        img.author.toLowerCase().includes(query)
      );
    }

    if (sort === 'likes') {
      return [...items].sort((a, b) => b.likes - a.likes);
    }
    if (sort === 'title') {
      return [...items].sort((a, b) => a.title.localeCompare(b.title));
    }
    return items;
  });

  getCategoryCount(category: string): number {
    if (category === 'Todas') return this.allImages().length;
    return this.allImages().filter(img => img.category === category).length;
  }

  openModal(image: ImageItem): void {
    this.selectedImage.set(image);
  }

  closeModal(): void {
    this.selectedImage.set(null);
  }

  currentIndex(): number {
    const current = this.selectedImage();
    return current ? this.filteredImages().findIndex(img => img.id === current.id) : 0;
  }

  nextImage(): void {
    const list = this.filteredImages();
    const current = this.selectedImage();
    if (!list.length || !current) return;

    const currentIndex = list.findIndex(img => img.id === current.id);
    const nextIndex = (currentIndex + 1) % list.length;
    this.selectedImage.set(list[nextIndex]);
  }

  previousImage(): void {
    const list = this.filteredImages();
    const current = this.selectedImage();
    if (!list.length || !current) return;

    const currentIndex = list.findIndex(img => img.id === current.id);
    const prevIndex = (currentIndex - 1 + list.length) % list.length;
    this.selectedImage.set(list[prevIndex]);
  }

  handleToggleLike(id: number): void {
    const updated = this.imageService.toggleLike(id);
    if (!updated) return;

    this.allImages.update(items => items.map(img => img.id === id ? updated : img));
    if (this.selectedImage()?.id === id) {
      this.selectedImage.set(updated);
    }
  }

  resetFilters(): void {
    this.selectedCategory.set('Todas');
    this.searchTerm.set('');
    this.sortBy.set('default');
  }
}
