export interface Quote {
  id: string;
  author: string;
  text: string;
  category: string;
}

export interface NewQuote {
  author: string;
  text: string;
  category: string
}

export interface QuotesList {
  posts: Quote[];
}