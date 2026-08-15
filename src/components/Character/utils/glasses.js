import * as THREE from "three";

// Builds a pair of rounded-frame glasses as a THREE.Group, parented to the
// character's head bone (spine006). Coordinates below are in that bone's
// local space, calibrated against the "EYEs001" mesh bounding box (eye
// center ~ (0, 1.21, 0.90), front surface ~ (0, 1.23, 1.11) in that space).
export function createGlasses() {
  const group = new THREE.Group();
  group.name = "glasses";

  const frameMaterial = new THREE.MeshStandardMaterial({
    color: "#1a1a1a",
    roughness: 0.35,
    metalness: 0.4,
  });
  const lensMaterial = new THREE.MeshPhysicalMaterial({
    color: "#bcd7ff",
    transparent: true,
    opacity: 0.16,
    roughness: 0.05,
    metalness: 0,
    transmission: 0.9,
    thickness: 0.05,
  });

  const lensRadius = 0.4;
  const rimThickness = 0.035;
  const lensOffsetX = 0.48;
  const lensY = 1.23;
  const lensZ = 1.16;

  const rimGeometry = new THREE.TorusGeometry(lensRadius, rimThickness, 10, 28);
  const lensGeometry = new THREE.CircleGeometry(lensRadius - rimThickness / 2, 28);

  [-1, 1].forEach((side) => {
    const rim = new THREE.Mesh(rimGeometry, frameMaterial);
    rim.position.set(side * lensOffsetX, lensY, lensZ);
    group.add(rim);

    const lens = new THREE.Mesh(lensGeometry, lensMaterial);
    lens.position.set(side * lensOffsetX, lensY, lensZ + 0.012);
    group.add(lens);

    const arm = new THREE.Mesh(
      new THREE.CylinderGeometry(0.02, 0.02, 0.85, 8),
      frameMaterial
    );
    arm.rotation.x = Math.PI / 2;
    arm.rotation.z = side * 0.12;
    arm.position.set(
      side * (lensOffsetX + lensRadius - 0.03),
      lensY + 0.02,
      lensZ - 0.38
    );
    group.add(arm);
  });

  const bridge = new THREE.Mesh(
    new THREE.CylinderGeometry(0.03, 0.03, lensOffsetX * 2 - lensRadius * 1.75, 8),
    frameMaterial
  );
  bridge.rotation.z = Math.PI / 2;
  bridge.position.set(0, lensY + 0.03, lensZ);
  group.add(bridge);

  return group;
}
