
// Image configuration for easy management and replacement
// Replace the URLs below with your own images

export const IMAGES = {
  // Hero section images
  hero: {
    background: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&q=80",
    student: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    dashboard: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
  },
  
  // Feature section images
  features: {
    notes: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&w=600&q=80",
    pastQuestions: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
    syllabus: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80",
    notices: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=600&q=80"
  },
  
  // Latest materials section
  materials: {
    mathematics: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=400&q=80",
    physics: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=400&q=80",
    programming: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    engineering: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=400&q=80"
  },
  
  // Background patterns and decorative images
  backgrounds: {
    geometric: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80",
    abstract: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80",
    university: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80"
  }
};

// Helper function to get optimized image URL
export const getOptimizedImage = (url: string, width?: number, height?: number) => {
  const params = new URLSearchParams();
  params.set('auto', 'format');
  params.set('fit', 'crop');
  params.set('q', '80');
  
  if (width) params.set('w', width.toString());
  if (height) params.set('h', height.toString());
  
  return `${url}?${params.toString()}`;
};
