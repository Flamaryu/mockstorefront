// In lib/data.ts

// The 'export' keyword makes this data available to other files that import it.
export const mockProducts = [
  {
    id: 'prod_1',
    name: 'Sandstorm Tee',
    price: 75.00,
    category: 'Drop 003',
    // This URL now points to a static placeholder image that matches the brand's aesthetic.
    imageUrl: "/sandstormtee.png"
  },
   {
      id: 'prod_2',
      name: 'Dune Cargo Pant',
      price: 160.00,
      category: 'Drop 003',
      imageUrl: 'https://placehold.co/600x750/fb923c/FFFFFF?text=Dune+Cargo',
      bgColor: '#fb923c'
    },
    {
      id: 'prod_3',
      name: 'Mirage Hoodie',
      price: 185.00,
      category: 'Drop 002',
      imageUrl: 'https://placehold.co/600x750/fdba74/171717?text=Mirage+Hoodie',
      bgColor: '#fdba74'
    },
    {
      id: 'prod_4',
      name: 'Nomad Sling',
      price: 95.00,
      category: 'Drop 002',
      imageUrl: 'https://placehold.co/600x750/fed7aa/171717?text=Nomad+Sling',
      bgColor: '#fed7aa'
    },
  ];

  // Data for the "Drop" page
  export const dropProducts = [
    {
      id: 'drop_1',
      name: 'Dune Cargo Pant',
      price: 160.00,
      category: 'Drop 004',
      imageUrl: 'https://placehold.co/600x750/fb923c/FFFFFF?text=Dune+Cargo',
      bgColor: '#fb923c',
      description: 'A relaxed-fit cargo pant constructed from durable ripstop cotton, featuring multiple utility pockets and an adjustable waistband for a custom fit.'
    },
    {
      id: 'drop_2',
      name: 'Oasis Utility Vest',
      price: 210.00,
      category: 'Drop 004',
      imageUrl: 'https://placehold.co/600x750/f97316/FFFFFF?text=Oasis+Vest',
      bgColor: '#f97316',
      description: 'A lightweight, multi-pocket utility vest made from water-resistant nylon. The perfect layering piece for transitional weather.'
    },
    {
      id: 'drop_3',
      name: 'Canyon Anorak',
      price: 250.00,
      category: 'Drop 004',
      imageUrl: 'https://placehold.co/600x750/fdba74/171717?text=Canyon+Anorak',
      bgColor: '#fdba74',
      description: 'A half-zip anorak jacket crafted from a custom-milled, sand-washed canvas that is both soft and rugged. Features a large front pouch pocket.'
    },
  ];