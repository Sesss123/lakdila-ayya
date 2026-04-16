import Package from '../models/Package.js';

export async function listPackages(req, res) {
  const query = {};
  if (req.query.destination) query.destination = new RegExp(req.query.destination, 'i');
  if (req.query.travelType) query.travelType = req.query.travelType;

  const packages = await Package.find(query).sort({ createdAt: -1 });
  res.json(packages);
}

export async function getPackageById(req, res) {
  const pkg = await Package.findById(req.params.id);
  if (!pkg) return res.status(404).json({ message: 'Package not found' });
  res.json(pkg);
}

export async function createPackage(req, res) {
  const pkg = await Package.create(req.body);
  res.status(201).json(pkg);
}
