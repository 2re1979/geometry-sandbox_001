import { OBJExporter } from 'three/examples/jsm/exporters/OBJExporter';

export function downloadOBJ(scene, filename = 'model.obj', type = 'text/plain') {

  const exporter = new OBJExporter();

  const data = exporter.parse(scene);

  const file = new Blob([data], { type });
  const a = document.createElement('a');
  const url = URL.createObjectURL(file);
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 0);
}