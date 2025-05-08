#!/bin/bash

# Make sure the script is executable
# chmod +x generate.sh

echo "Generating tutorial pages from curriculum data..."

# Run the Python script
python3 scripts/generate_tutorials.py scripts/sample_curriculum.json --output-dir app/topics

echo "Tutorial pages generated successfully!" 