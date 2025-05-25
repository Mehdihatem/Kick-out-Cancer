const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '../public/IMAGES');

async function optimizeImage(inputPath, outputPath, options = {}) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Optimize based on file type
    if (metadata.format === 'jpeg' || metadata.format === 'jpg') {
      await image
        .jpeg({ quality: 80, progressive: true })
        .toFile(outputPath);
    } else if (metadata.format === 'png') {
      await image
        .png({ quality: 80, compressionLevel: 9 })
        .toFile(outputPath);
    } else if (metadata.format === 'webp') {
      await image
        .webp({ quality: 80 })
        .toFile(outputPath);
    }

    console.log(`Optimized: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
  }
}

async function processDirectory(directory) {
  try {
    const files = await fs.readdir(directory);
    
    for (const file of files) {
      const filePath = path.join(directory, file);
      const stats = await fs.stat(filePath);

      if (stats.isDirectory()) {
        await processDirectory(filePath);
      } else if (/\.(jpg|jpeg|png|webp)$/i.test(file)) {
        const outputPath = filePath.replace(/\.(jpg|jpeg|png|webp)$/i, '.webp');
        await optimizeImage(filePath, outputPath);
      }
    }
  } catch (error) {
    console.error('Error processing directory:', error);
  }
}

// Start optimization
processDirectory(IMAGES_DIR)
  .then(() => console.log('Image optimization complete!'))
  .catch(console.error); 