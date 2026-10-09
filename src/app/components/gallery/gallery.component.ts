import { Component, OnInit, inject } from '@angular/core';
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
export class GalleryComponent implements OnInit {
  private imageService = inject(ImageService);

  allImages: ImageItem[] = [];
  filteredImages: ImageItem[] = [];
  categories: string[] = [];

  selectedCategory: string = 'Todas';
  searchTerm: string = '';
  sortBy: 'default' | 'likes' | 'title' = 'default';

  // Control del modal
  selectedImage: ImageItem | null = null;
  selectedImageIndex: number = -1;

  ngOnInit(): void {
    this.allImages = this.imageService.getImages();
    this.categories = this.imageService.getCategories();
    this.applyFilters();
  }

  onCategoryChange(cat: string): void {
    this.selectedCategory = cat;
    this.applyFilters();
  }

  onSearchChange(): void {
    this.applyFilters();
  }

  onSortChange(): void {
    this.applyFilters();
  }

  resetFilters(): void {
    this.selectedCategory = 'Todas';
    this.searchTerm = '';
    this.sortBy = 'default';
    this.applyFilters();
  }

  applyFilters(): void {
    let result = [...this.allImages];

    // Filtro por categoría
    if (this.selectedCategory !== 'Todas') {
      result = result.filter(img => img.category === this.selectedCategory);
    }

    // Filtro por término de búsqueda (título, descripción o tags)
    if (this.searchTerm.trim() !== '') {
      const query = this.searchTerm.toLowerCase().trim();
      result = result.filter(img => 
        img.title.toLowerCase().includes(query) ||
        img.description.toLowerCase().includes(query) ||
        img.tags.some(tag => tag.toLowerCase().includes(query)) ||
        img.author.toLowerCase().includes(query)
      );
    }

    // Ordenación
    if (this.sortBy === 'likes') {
      result.sort((a, b) => b.likes - a.likes);
    } else if (this.sortBy === 'title') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    this.filteredImages = result;

    // Si el modal está abierto, sincronizar índice
    if (this.selectedImage) {
      this.selectedImageIndex = this.filteredImages.findIndex(img => img.id === this.selectedImage?.id);
    }
  }

  getCategoryCount(category: string): number {
    if (category === 'Todas') {
      return this.allImages.length;
    }
    return this.allImages.filter(img => img.category === category).length;
  }

  openModal(image: ImageItem): void {
    this.selectedImage = image;
    this.selectedImageIndex = this.filteredImages.findIndex(img => img.id === image.id);
    document.body.style.overflow = 'hidden'; // Evitar scroll del fondo
  }

  closeModal(): void {
    this.selectedImage = null;
    this.selectedImageIndex = -1;
    document.body.style.overflow = '';
  }

  nextImage(): void {
    if (this.filteredImages.length === 0) return;
    this.selectedImageIndex = (this.selectedImageIndex + 1) % this.filteredImages.length;
    this.selectedImage = this.filteredImages[this.selectedImageIndex];
  }

  previousImage(): void {
    if (this.filteredImages.length === 0) return;
    this.selectedImageIndex = (this.selectedImageIndex - 1 + this.filteredImages.length) % this.filteredImages.length;
    this.selectedImage = this.filteredImages[this.selectedImageIndex];
  }

  handleToggleLike(id: number): void {
    const updated = this.imageService.toggleLike(id);
    if (updated) {
      // Actualizar en el array maestro
      const idxAll = this.allImages.findIndex(img => img.id === id);
      if (idxAll !== -1) {
        this.allImages[idxAll] = updated;
      }
      // Actualizar en filtrados
      const idxFilt = this.filteredImages.findIndex(img => img.id === id);
      if (idxFilt !== -1) {
        this.filteredImages[idxFilt] = updated;
      }
      // Actualizar modal si está abierto
      if (this.selectedImage && this.selectedImage.id === id) {
        this.selectedImage = updated;
      }
    }
  }
}
