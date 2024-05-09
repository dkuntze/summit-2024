import { readBlockConfig } from '../../scripts/aem.js';

export default async function decorate(block) {
  const config = readBlockConfig(block);
  const stepDiv = document.createElement('div');
  stepDiv.classList.add('step-counter');
  const headerDiv = document.createElement('div');
  headerDiv.textContent = 'Summit Step Counter';
  const counter = document.createElement('div');
  stepDiv.appendChild(headerDiv);
  stepDiv.appendChild(counter);
  counter.textContent = `${config.number} Steps`;
  block.replaceWith(stepDiv);
}
