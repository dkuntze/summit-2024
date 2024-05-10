export default async function decorate(block) {
  const infographicDiv = document.createElement('div');
  infographicDiv.classList.add('infographic');
  const infographic = document.createElement('div');
  infographic.classList.add('infographic-content');
  infographicDiv.appendChild(infographic);
  block.replaceWith(infographicDiv);
}
