import { useState } from "react";
import { submitData } from "../../services/simulation-input.services";

export default function SimulationInput() {
  const [formData, setFormData] = useState({
    farmerName: "",
    phoneNumber: "",
    location: "",
    experience: "beginner",
    farmSize: "<5ha",
    mainCrop: "fruits",
    farmingPractice: "monoculture",
    irrigation: "rainfed",
    method: "organic",
    technologyLevel: "",
    biology: "",
    inventionLevel: "",
    soilType: "sandy",
    soilPH: "",
    climateType: "rainy",
    season: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await submitData(formData);
      if (res.success) {
        alert("Data inserted successfully!");
      } else {
        alert("Failed to insert data");
      }
    } catch (err) {
      console.error(err);
      alert("Error inserting data");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-8"
      style={{
        background: "linear-gradient(135deg, #4a90e2 0%, #50e3c2 100%)",
      }}
    >
      <div className="w-full max-w-4xl bg-white/90 rounded-xl shadow-xl p-8 overflow-y-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Add Farm Data
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Farmer Info */}
          <section>
            <h3 className="text-lg font-semibold mb-4">Farmer Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="farmerName"
                placeholder="Farmer Name"
                value={formData.farmerName}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="experienced">Experienced</option>
                <option value="professional">Professional</option>
              </select>
            </div>
          </section>

          {/* Farm Info */}
          <section>
            <h3 className="text-lg font-semibold mb-4">Farm Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <select
                name="farmSize"
                value={formData.farmSize}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              >
                <option value="<5ha">&lt;5ha</option>
                <option value="5-20ha">5-20ha</option>
                <option value="20-50ha">20-50ha</option>
                <option value=">50ha">&gt;50ha</option>
              </select>
              <select
                name="mainCrop"
                value={formData.mainCrop}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              >
                <option value="fruits">Fruits</option>
                <option value="legumes">Legumes</option>
                <option value="oilseeds">Oilseeds</option>
                <option value="industrial">Industrial</option>
                <option value="cereals">Cereals</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <select
                name="farmingPractice"
                value={formData.farmingPractice}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              >
                <option value="monoculture">Monoculture</option>
                <option value="rotation">Rotation</option>
                <option value="mixed">Mixed</option>
                <option value="agroforestry">Agroforestry</option>
                <option value="hydroponic">Hydroponic</option>
              </select>
              <select
                name="irrigation"
                value={formData.irrigation}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              >
                <option value="rainfed">Rainfed</option>
                <option value="drip">Drip</option>
                <option value="sprinkler">Sprinkler</option>
                <option value="surface">Surface</option>
              </select>
            </div>
          </section>

          {/* Soil Info */}
          <section>
            <h3 className="text-lg font-semibold mb-4">Soil Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <select
                name="soilType"
                value={formData.soilType}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              >
                <option value="sandy">Sandy</option>
                <option value="loamy">Loamy</option>
                <option value="clayey">Clayey</option>
                <option value="peaty">Peaty</option>
                <option value="chalky">Chalky</option>
              </select>
              <input
                type="number"
                name="soilPH"
                placeholder="Soil pH (0-14)"
                value={formData.soilPH}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
                min={0}
                max={14}
              />
            </div>
          </section>

          {/* Climate Info */}
          <section>
            <h3 className="text-lg font-semibold mb-4">Climate Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <select
                name="climateType"
                value={formData.climateType}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              >
                <option value="rainy">Rainy</option>
                <option value="dry">Dry</option>
                <option value="humid">Humid</option>
                <option value="arid">Arid</option>
                <option value="temperate">Temperate</option>
                <option value="continental">Continental</option>
                <option value="others">Others</option>
              </select>
              <select
                name="season"
                value={formData.season}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              >
                <option value="">--</option>
                <option value="spring">Spring</option>
                <option value="summer">Summer</option>
                <option value="autumn">Autumn</option>
                <option value="winter">Winter</option>
                <option value="all-year">All Year</option>
              </select>
            </div>
          </section>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Submit Data
          </button>
        </form>
      </div>
    </div>
  );
}
