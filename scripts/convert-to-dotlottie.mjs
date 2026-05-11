import { DotLottie } from '@dotlottie/dotlottie-js';
import { readFileSync, writeFileSync } from 'fs';
import { basename, join, dirname } from 'path';

const animationsDir = join(dirname(new URL(import.meta.url).pathname), '..', 'public', 'animations');

const files = ['confetti.json', 'ai-loading.json', 'sparkleAnimation.json'];

async function convert() {
  for (const file of files) {
    const inputPath = join(animationsDir, file);
    const outputName = file.replace('.json', '.lottie');
    const outputPath = join(animationsDir, outputName);
    const animationId = file.replace('.json', '');

    console.log(`Converting ${file} -> ${outputName}...`);

    const jsonData = JSON.parse(readFileSync(inputPath, 'utf-8'));

    const dotLottie = new DotLottie();
    dotLottie.addAnimation({
      id: animationId,
      data: jsonData,
      loop: true,
      autoplay: true,
    });

    const arrayBuffer = await dotLottie.toArrayBuffer();
    writeFileSync(outputPath, Buffer.from(arrayBuffer));

    const inputSize = readFileSync(inputPath).length;
    const outputSize = Buffer.from(arrayBuffer).length;
    const ratio = ((1 - outputSize / inputSize) * 100).toFixed(1);

    console.log(`  ${file}: ${(inputSize / 1024).toFixed(1)}KB -> ${outputName}: ${(outputSize / 1024).toFixed(1)}KB (${ratio}% smaller)`);
  }

  console.log('\nDone! All .lottie files written to public/animations/');
}

convert().catch(console.error);
