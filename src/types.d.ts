export interface Quote {
  author: string;
  text: string;
  category: string;
}

export interface QuotesList {
  posts: Quote[];
}