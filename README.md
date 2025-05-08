# Science Curriculum

A Next.js application for exploring educational curriculum, with auto-generated topic tutorials using Python scripts.

## Features

- Responsive curriculum display with topic cards organized by subject area
- Dynamic tutorial pages for each topic
- Auto-generation of tutorial content from curriculum data using Python
- Interactive exercises for each topic

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Python (for content generation)

## Project Structure

- `app/`: Next.js application code
  - `page.tsx`: Home page showing curriculum topics
  - `topics/[group]/[topic]/page.tsx`: Dynamic topic tutorial pages
- `components/`: Reusable React components
- `scripts/`: Python scripts for content generation
  - `generate_tutorials.py`: Script to generate tutorial content
  - `sample_curriculum.json`: Sample curriculum data
- `types/`: TypeScript type definitions
- `public/`: Static assets

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Python 3.6+

### Installation

1. Clone the repository
2. Install JavaScript dependencies:
   ```bash
   cd curriculum-app
   npm install
   ```

### Generating Content

1. Make sure you have a properly formatted curriculum JSON file (see `scripts/sample_curriculum.json` for reference)
2. Run the generator script:
   ```bash
   cd curriculum-app
   ./scripts/generate.sh
   ```

   This will process the curriculum data and generate TypeScript content files for each topic.

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

## Customizing the Curriculum

To use your own curriculum data:

1. Create a JSON file following the format in `scripts/sample_curriculum.json`
2. Update the `generate.sh` script to point to your JSON file
3. Run the generator script
4. The application will automatically use the newly generated content

## License

MIT 
