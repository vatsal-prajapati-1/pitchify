# Pitchify

A modern web application built with Next.js, Sanity.io, and Tailwind CSS for managing and displaying content.

## Features

- 🚀 Next.js 15 with App Router
- 🎨 Tailwind CSS for styling
- 📝 Sanity.io for content management
- 🔐 NextAuth.js for authentication
- 📱 Responsive design
- ✨ Modern UI components with Radix UI
- 📄 Markdown support
- 🔍 TypeScript for type safety

## Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Sanity.io account
- Environment variables (see `.env.local.example`)

## Getting Started

1. Clone the repository:
```bash
git clone [your-repository-url]
cd pitchify
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with the following variables:
```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
SANITY_PROJECT_ID=your-project-id
SANITY_DATASET=production
SANITY_API_VERSION=2024-03-25
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`.

## Project Structure

```
pitchify/
├── src/
│   ├── app/          # Next.js app router pages
│   ├── components/   # Reusable UI components
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utility functions and configurations
│   ├── sanity/       # Sanity.io schemas and queries
│   └── styles/       # Global styles and Tailwind configuration
├── public/           # Static assets
└── ...config files
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typegen` - Generate Sanity TypeScript types

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **CMS**: Sanity.io
- **Authentication**: NextAuth.js
- **UI Components**: Radix UI
- **Markdown**: Markdown-it
- **Type Safety**: TypeScript
- **State Management**: React Context
- **Form Handling**: Zod

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.
