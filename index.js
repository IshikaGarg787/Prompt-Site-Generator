#!/usr/bin/env node

require('dotenv').config();

const { Command } = require('commander');
const { GoogleGenAI, Modality } = require('@google/genai');
const fs = require('fs/promises');
const path = require('path');

const program = new Command();
program
  .option('--prompt <prompt>', 'User prompt for site generation')
  .parse(process.argv);

const options = program.opts();
if (!options.prompt) {
  console.error('Error: --prompt is required');
  process.exit(1);
}

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error('Error: GEMINI_API_KEY environment variable is required');
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

async function generateSite() {
  try {
    const geminiPrompt = `Based on this description: "${options.prompt}", generate a complete static website with index.html, style.css, and script.js. Make it professional, responsive using Bootstrap 5 (include the CDN links in HTML), aesthetic with modern design, clean typography, appealing colors, and smooth layouts. Include JavaScript for interactivity such as animations, form handling, or dynamic elements. Include relevant images in the HTML with relative src paths like "images/image1.png". Provide descriptions for each image to generate them. Output strictly in JSON format: { "html": "<full HTML code here>", "css": "<full CSS code here>", "js": "<full JS code here>", "images": [{"filename": "image1.png", "description": "detailed description for image generation"}] }`;

    const textResponse = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: geminiPrompt,
    });

    const responseText = textResponse.candidates[0].content.parts[0].text;
    
    // A more robust way to extract JSON from the response, which might be wrapped in markdown
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      console.error('Error: No valid JSON object found in the API response.');
      console.error('Full response:', responseText);
      process.exit(1);
    }

    try {
      const files = JSON.parse(jsonMatch[0]);

      const outputDir = path.join(__dirname, 'output');
      const imagesDir = path.join(outputDir, 'images');
      await fs.mkdir(outputDir, { recursive: true });
      await fs.mkdir(imagesDir, { recursive: true });

      await fs.writeFile(path.join(outputDir, 'index.html'), files.html);
      await fs.writeFile(path.join(outputDir, 'style.css'), files.css);
      await fs.writeFile(path.join(outputDir, 'script.js'), files.js);

      // Generate and save images
      for (const img of files.images || []) {
        const imagePrompt = `Generate a high-quality, aesthetic image: ${img.description}`;
        const imageResponse = await ai.models.generateContent({
          model: 'gemini-2.0-flash-preview-image-generation',
          contents: imagePrompt,
          config: {
            responseModalities: [Modality.TEXT, Modality.IMAGE],
          },
        });

        const imagePart = imageResponse.candidates[0].content.parts.find(part => part.inlineData);
        if (imagePart) {
          const buffer = Buffer.from(imagePart.inlineData.data, 'base64');
          await fs.writeFile(path.join(imagesDir, img.filename), buffer);
        } else {
          console.warn(`Warning: No image generated for ${img.filename}`);
        }
      }

      console.log('Site generated successfully in output/ folder! Includes aesthetic design, responsiveness via Bootstrap, interactive JS, and local images.');
    } catch (error) {
      console.error('Error parsing JSON:', error.message);
      console.error('API Response that failed to parse:', jsonMatch[0]);
    }
  } catch (error) {
    console.error('Error generating site:', error.message);
  }
}

generateSite();