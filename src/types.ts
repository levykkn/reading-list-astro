export interface Book {
  _id: string;
  title: string;
  author: string;
  coverUrl: string;
}

export interface Course {
  _id: string;
  title: string;
  description: string;
  tags?: string[];
  books: Book[];
  firstBookCoverUrl?: string; 
  bookCount?: number;
}

export interface Author {
  name: string;
  picture: {
    asset: {
      _ref: string;
    };
  };
}

export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  author: Author; 
  mainImage: {
    asset: {
      _ref: string;
    };
  };
  excerpt: string;
  publishedAt: string;
  body: any[]; 
}
