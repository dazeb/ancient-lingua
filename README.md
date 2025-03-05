# AncientLingua

![AncientLingua Logo](https://images.unsplash.com/photo-1603826773128-fefac9c74bab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80)

## Overview

AncientLingua is a comprehensive platform for translating and studying ancient languages, with a focus on Ancient Greek, Latin, and Modern Greek. The platform bridges ancient wisdom with modern technology, making ancient languages accessible to everyone from scholars and students to history enthusiasts and curious minds.

## Features

### Translation Tools

- **Text Translation**: Translate between Ancient Greek, Latin, Modern Greek, and English with detailed analysis
- **Document & Image Upload**: Extract text from documents and images for translation
- **Word Analysis**: Get detailed grammatical breakdowns and historical context for each word
- **Historical Context**: Understand the cultural and historical background of ancient texts

### Personal Tools

- **Translation History**: Keep track of all your translations
- **Personal Glossary**: Build your own reference library of terms and definitions
- **User Profiles**: Customize your translation preferences and settings

### Research Resources

- **Comprehensive Guide to Ancient Texts**: Explore important works from Ancient Greek literature
- **Online & Physical Library Directory**: Find where to access ancient texts
- **Academic Resources**: Discover tools and resources for scholarly research
- **Archaeological Sites & Museums**: Learn about locations where ancient texts can be found

## Technology Stack

- **Frontend**: Next.js 14 with App Router
- **UI**: Tailwind CSS with shadcn/ui components
- **Styling**: Modern, responsive design with dark mode support
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ancient-lingua.git
   cd ancient-lingua
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

To create an optimized production build:

```bash
npm run build
# or
yarn build
```

The static output will be generated in the `out` directory, which can be deployed to any static hosting service.

## Project Structure

```
ancient-lingua/
├── app/                  # Next.js App Router pages
│   ├── about/            # About page
│   ├── glossary/         # Personal glossary page
│   ├── history/          # Translation history page
│   ├── profile/          # User profile page
│   ├── research/         # Research resources page
│   └── layout.tsx        # Root layout component
├── components/           # Reusable React components
│   ├── ui/               # UI components from shadcn/ui
│   ├── file-upload.tsx   # Document upload component
│   ├── header.tsx        # Site header component
│   ├── text-translation.tsx # Translation interface
│   └── ...
├── lib/                  # Utility functions
├── public/               # Static assets
└── ...
```

## Features in Detail

### Translation Interface

The translation interface allows users to:
- Select source and target languages
- Input text for translation
- View detailed word-by-word analysis
- Explore historical context and grammatical structures
- Save translations to history
- Export translations in various formats

### Document Translation

The document translation feature supports:
- PDF, DOC, DOCX, JPG, and PNG files
- Optical Character Recognition (OCR) for extracting text from images
- Processing of multi-page documents
- Preservation of document structure where possible

### Research Resources

The research section provides:
- A comprehensive table of important Ancient Greek texts
- Information about online libraries and digital collections
- Details about physical libraries with ancient text collections
- Academic resources for studying ancient languages
- Information about museums and archaeological sites

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- All images are from [Unsplash](https://unsplash.com/)
- Icons provided by [Lucide React](https://lucide.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)