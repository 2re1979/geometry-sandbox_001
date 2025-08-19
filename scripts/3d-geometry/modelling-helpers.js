import { SphereGeometry, MeshStandardMaterial, Mesh, Group, ShapeGeometry, EdgesGeometry, LineBasicMaterial, LineSegments, LineDashedMaterial, BufferGeometry, Line, Vector3, ExtrudeGeometry, Vector2 } from "three";

export function highlightPointWithSphere (pointX = 0, pointY = 0, pointZ = 0, size = 50) {
    const sphereGeometry = new SphereGeometry(size, 32);
    const sphereMaterial = new MeshStandardMaterial({
        color: 0x00ff00, 
        transparent: true,
        opacity: 0.3       
    });
    const sphere = new Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(pointX, pointY, pointZ);

    const smallSphereGeometry = new SphereGeometry(5, 16);
    const smallSphereMaterial = new MeshStandardMaterial({
        color: 0xff0000,      
    });
    const smallSphere = new Mesh(smallSphereGeometry, smallSphereMaterial);
    smallSphere.position.set(pointX, pointY, pointZ);

    const sphereGroup = new Group;
    sphereGroup.add(sphere, smallSphere);

    return sphereGroup;
}

export function highlightExtrusionProfile (shapeProfile) {
    const shapeProfileGeo = new ShapeGeometry(shapeProfile);
    const edgesShapeGeo = new EdgesGeometry(shapeProfileGeo);
    const edgesMaterial = new LineBasicMaterial({ color: 0x990000 });
    const shapeProfileLines = new LineSegments(edgesShapeGeo, edgesMaterial);

    return shapeProfileLines;
}

const referenceLineMaterial = new LineDashedMaterial( {
    color: 0xff0000,
    linewidth: 1,
    scale: 1,
    dashSize: 150,
    gapSize: 60,
} );

export function addReferenceLineX (startingPointX = 0, startingPointY = 0, startingPointZ = 0, offsetX = 0, lengthX = 2000) {
    const material = referenceLineMaterial;

    const points = [];
    points.push( new Vector3( startingPointX, startingPointY, startingPointZ ) );
    points.push( new Vector3( startingPointX + lengthX, startingPointY, startingPointZ ) );
    
    const lineGeometry = new BufferGeometry().setFromPoints(points);
    const referenceLine = new Line(lineGeometry, material)

    referenceLine.computeLineDistances();
    referenceLine.position.x += offsetX;

    return referenceLine
}

export function addReferenceLineZ (startingPointX = 0, startingPointY = 0, startingPointZ = 0, offsetZ = 0, lengthZ = 2000) {
    const material = referenceLineMaterial;

    const points = [];
    points.push( new Vector3( startingPointX, startingPointY, startingPointZ ) );
    points.push( new Vector3( startingPointX, startingPointY, startingPointZ + lengthZ ) );
    
    const lineGeometry = new BufferGeometry().setFromPoints(points);
    const referenceLine = new Line(lineGeometry, material)

    referenceLine.computeLineDistances();
    referenceLine.position.z += offsetZ;

    return referenceLine
}

export function updatePosition(xOffset, yOffset, zOffset, element){
    element.position.x += xOffset;
    element.position.y += yOffset;
    element.position.z += zOffset;
}