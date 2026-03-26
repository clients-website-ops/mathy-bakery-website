// ============================================
// MATHY BAKERY — Product Data Store
// ============================================

const PRODUCTS = [
  {
    id: 1,
    name: 'Belgian Chocolate Truffle Cake',
    category: 'Cakes',
    price: 849,
    originalPrice: 999,
    description: 'Indulge in layers of rich Belgian chocolate sponge, filled with velvety chocolate ganache and topped with a glossy chocolate drip. A true chocolate lover\'s dream, handcrafted with premium cocoa.',
    image: 'assets/images/chocolate-cake.png',
    sizes: [
      { label: '500g', price: 849 },
      { label: '1 kg', price: 1499 },
      { label: '2 kg', price: 2799 }
    ],
    bestseller: true,
    rating: 4.8
  },
  {
    id: 2,
    name: 'Red Velvet Dream Cake',
    category: 'Cakes',
    price: 799,
    originalPrice: null,
    description: 'Our signature red velvet cake layered with luscious cream cheese frosting, finished with a delicate crumb coating. Moist, tender, and absolutely divine — a classic reinvented with artisan care.',
    image: 'assets/images/red-velvet-cake.png',
    sizes: [
      { label: '500g', price: 799 },
      { label: '1 kg', price: 1399 },
      { label: '2 kg', price: 2599 }
    ],
    bestseller: true,
    rating: 4.9
  },
  {
    id: 3,
    name: 'Butter Croissant',
    category: 'Pastries',
    price: 149,
    originalPrice: 179,
    description: 'Flaky, golden, and irresistibly buttery. Our croissants are laminated with pure French butter through 27 layers, baked to perfection every morning for the ultimate breakfast indulgence.',
    image: 'assets/images/croissants.png',
    sizes: [
      { label: 'Single', price: 149 },
      { label: 'Box of 4', price: 549 },
      { label: 'Box of 8', price: 999 }
    ],
    bestseller: true,
    rating: 4.7
  },
  {
    id: 4,
    name: 'Classic Fudge Brownies',
    category: 'Desserts',
    price: 449,
    originalPrice: null,
    description: 'Dense, fudgy, and loaded with chunks of dark chocolate and toasted walnuts. Our brownies strike the perfect balance between cakey and gooey — an everyday indulgence made extraordinary.',
    image: 'assets/images/brownies.png',
    sizes: [
      { label: 'Box of 4', price: 449 },
      { label: 'Box of 8', price: 799 },
      { label: 'Box of 12', price: 1149 }
    ],
    bestseller: true,
    rating: 4.6
  },
  {
    id: 5,
    name: 'Vanilla Bean Cupcakes',
    category: 'Desserts',
    price: 299,
    originalPrice: 349,
    description: 'Light and fluffy vanilla cupcakes crowned with swirls of silky buttercream frosting. Made with real Madagascar vanilla beans — each bite is pure comfort wrapped in elegance.',
    image: 'assets/images/cupcakes.png',
    sizes: [
      { label: 'Box of 4', price: 299 },
      { label: 'Box of 6', price: 429 },
      { label: 'Box of 12', price: 799 }
    ],
    bestseller: false,
    rating: 4.5
  },
  {
    id: 6,
    name: 'Hazelnut Praline Cake',
    category: 'Cakes',
    price: 949,
    originalPrice: null,
    description: 'A luxurious hazelnut sponge layered with smooth praline cream and caramelized hazelnuts. Finished with a golden shimmer — a celebration showstopper for those who appreciate the finer things.',
    image: 'assets/images/chocolate-cake.png',
    sizes: [
      { label: '500g', price: 949 },
      { label: '1 kg', price: 1699 },
      { label: '2 kg', price: 3199 }
    ],
    bestseller: false,
    rating: 4.8
  },
  {
    id: 7,
    name: 'Almond Croissant',
    category: 'Pastries',
    price: 179,
    originalPrice: null,
    description: 'A classic butter croissant filled with aromatic almond frangipane, baked until golden, then showered with sliced almonds and a dusting of powdered sugar. Pure café-style luxury.',
    image: 'assets/images/croissants.png',
    sizes: [
      { label: 'Single', price: 179 },
      { label: 'Box of 4', price: 649 },
      { label: 'Box of 8', price: 1199 }
    ],
    bestseller: false,
    rating: 4.7
  },
  {
    id: 8,
    name: 'Blueberry Cheesecake',
    category: 'Desserts',
    price: 699,
    originalPrice: 799,
    description: 'Creamy New York-style cheesecake on a buttery biscuit base, topped with a luscious blueberry compote made from hand-picked berries. Perfectly chilled, perfectly balanced.',
    image: 'assets/images/red-velvet-cake.png',
    sizes: [
      { label: '500g', price: 699 },
      { label: '1 kg', price: 1249 }
    ],
    bestseller: false,
    rating: 4.6
  },
  {
    id: 9,
    name: 'Custom Celebration Cake',
    category: 'Custom Cakes',
    price: 1499,
    originalPrice: null,
    description: 'Design your dream cake! Choose from our premium flavors, fillings, and decorations. Our pastry artists will bring your vision to life. Perfect for birthdays, weddings, and special milestones.',
    image: 'assets/images/chocolate-cake.png',
    sizes: [
      { label: '1 kg', price: 1499 },
      { label: '2 kg', price: 2799 },
      { label: '3 kg', price: 3999 }
    ],
    bestseller: false,
    rating: 5.0
  },
  {
    id: 10,
    name: 'Chocolate Éclairs',
    category: 'Pastries',
    price: 249,
    originalPrice: null,
    description: 'Delicate choux pastry filled with rich chocolate pastry cream and glazed with dark Belgian chocolate. Light, airy, and utterly irresistible — a French patisserie classic done right.',
    image: 'assets/images/brownies.png',
    sizes: [
      { label: 'Box of 3', price: 249 },
      { label: 'Box of 6', price: 449 }
    ],
    bestseller: false,
    rating: 4.4
  },
  {
    id: 11,
    name: 'Strawberry Shortcake',
    category: 'Cakes',
    price: 899,
    originalPrice: 999,
    description: 'Layers of tender vanilla sponge, fresh whipped cream, and juicy strawberries. Light, refreshing, and beautifully decorated — the perfect cake for sunny celebrations.',
    image: 'assets/images/cupcakes.png',
    sizes: [
      { label: '500g', price: 899 },
      { label: '1 kg', price: 1599 }
    ],
    bestseller: false,
    rating: 4.7
  },
  {
    id: 12,
    name: 'Assorted Macarons',
    category: 'Desserts',
    price: 549,
    originalPrice: null,
    description: 'A curated box of handmade French macarons in flavors including pistachio, rose, salted caramel, chocolate, vanilla, and raspberry. Each one a delicate, crisp-shelled work of art.',
    image: 'assets/images/cupcakes.png',
    sizes: [
      { label: 'Box of 6', price: 549 },
      { label: 'Box of 12', price: 999 },
      { label: 'Box of 24', price: 1849 }
    ],
    bestseller: true,
    rating: 4.8
  }
];

const CATEGORIES = [
  { name: 'Cakes', image: 'assets/images/chocolate-cake.png', count: PRODUCTS.filter(p => p.category === 'Cakes').length },
  { name: 'Pastries', image: 'assets/images/croissants.png', count: PRODUCTS.filter(p => p.category === 'Pastries').length },
  { name: 'Desserts', image: 'assets/images/brownies.png', count: PRODUCTS.filter(p => p.category === 'Desserts').length },
  { name: 'Custom Cakes', image: 'assets/images/chocolate-cake.png', count: PRODUCTS.filter(p => p.category === 'Custom Cakes').length }
];

function getProductById(id) {
  return PRODUCTS.find(p => p.id === parseInt(id));
}

function getProductsByCategory(category) {
  if (!category || category === 'All') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category);
}

function getBestsellers() {
  return PRODUCTS.filter(p => p.bestseller);
}

function searchProducts(query) {
  const q = query.toLowerCase();
  return PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q)
  );
}

function filterProducts({ category, minPrice, maxPrice, sort }) {
  let filtered = [...PRODUCTS];
  
  if (category && category !== 'All') {
    filtered = filtered.filter(p => p.category === category);
  }
  
  if (minPrice !== undefined) {
    filtered = filtered.filter(p => p.price >= minPrice);
  }
  
  if (maxPrice !== undefined) {
    filtered = filtered.filter(p => p.price <= maxPrice);
  }
  
  if (sort) {
    switch (sort) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
    }
  }
  
  return filtered;
}
