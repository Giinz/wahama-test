export interface ParentCategory {
  id: string;
  categoryName: string;
  slug: string;
  parentCategoryId: string;
  parentCategory: string;
}
export interface Category {
  id: string;
  categoryName: string;
  slug: string;
  parentCategoryId?: string;
  parentCategory?: ParentCategory;
}
