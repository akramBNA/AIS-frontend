// import { useState } from "react";
// import { submitData } from "../../services/simulation-input.services";

// export default function SimulationInput() {
//   const [formData, setFormData] = useState({
//     farmerName: "",
//     phoneNumber: "",
//     location: "",
//     experience: "beginner",
//     farmSize: "<5ha",
//     mainCrop: "fruits",
//     farmingPractice: "monoculture",
//     irrigation: "rainfed",
//     method: "organic",
//     technologyLevel: "",
//     biology: "",
//     inventionLevel: "",
//     soilType: "sandy",
//     soilPH: "",
//     climateType: "rainy",
//     season: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const res = await submitData(formData);
//       if (res.success) {
//         alert("Data inserted successfully!");
//       } else {
//         alert("Failed to insert data");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Error inserting data");
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center px-4 py-8"
//       style={{
//         background: "linear-gradient(135deg, #4a90e2 0%, #50e3c2 100%)",
//       }}
//     >
//       <div className="w-full max-w-4xl bg-white/90 rounded-xl shadow-xl p-8 overflow-y-auto">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           Add Farm Data
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-8">
//           {/* Farmer Info */}
//           <section>
//             <h3 className="text-lg font-semibold mb-4">Farmer Information</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <input
//                 type="text"
//                 name="farmerName"
//                 placeholder="Farmer Name"
//                 value={formData.farmerName}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg p-3"
//               />
//               <input
//                 type="text"
//                 name="phoneNumber"
//                 placeholder="Phone Number"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg p-3"
//               />
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
//               <input
//                 type="text"
//                 name="location"
//                 placeholder="Location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg p-3"
//               />
//               <select
//                 name="experience"
//                 value={formData.experience}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg p-3"
//               >
//                 <option value="beginner">Beginner</option>
//                 <option value="intermediate">Intermediate</option>
//                 <option value="experienced">Experienced</option>
//                 <option value="professional">Professional</option>
//               </select>
//             </div>
//           </section>

//           {/* Farm Info */}
//           <section>
//             <h3 className="text-lg font-semibold mb-4">Farm Information</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <select
//                 name="farmSize"
//                 value={formData.farmSize}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg p-3"
//               >
//                 <option value="<5ha">&lt;5ha</option>
//                 <option value="5-20ha">5-20ha</option>
//                 <option value="20-50ha">20-50ha</option>
//                 <option value=">50ha">&gt;50ha</option>
//               </select>
//               <select
//                 name="mainCrop"
//                 value={formData.mainCrop}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg p-3"
//               >
//                 <option value="fruits">Fruits</option>
//                 <option value="legumes">Legumes</option>
//                 <option value="oilseeds">Oilseeds</option>
//                 <option value="industrial">Industrial</option>
//                 <option value="cereals">Cereals</option>
//                 <option value="others">Others</option>
//               </select>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
//               <select
//                 name="farmingPractice"
//                 value={formData.farmingPractice}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg p-3"
//               >
//                 <option value="monoculture">Monoculture</option>
//                 <option value="rotation">Rotation</option>
//                 <option value="mixed">Mixed</option>
//                 <option value="agroforestry">Agroforestry</option>
//                 <option value="hydroponic">Hydroponic</option>
//               </select>
//               <select
//                 name="irrigation"
//                 value={formData.irrigation}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg p-3"
//               >
//                 <option value="rainfed">Rainfed</option>
//                 <option value="drip">Drip</option>
//                 <option value="sprinkler">Sprinkler</option>
//                 <option value="surface">Surface</option>
//               </select>
//             </div>
//           </section>

//           {/* Soil Info */}
//           <section>
//             <h3 className="text-lg font-semibold mb-4">Soil Information</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <select
//                 name="soilType"
//                 value={formData.soilType}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg p-3"
//               >
//                 <option value="sandy">Sandy</option>
//                 <option value="loamy">Loamy</option>
//                 <option value="clayey">Clayey</option>
//                 <option value="peaty">Peaty</option>
//                 <option value="chalky">Chalky</option>
//               </select>
//               <input
//                 type="number"
//                 name="soilPH"
//                 placeholder="Soil pH (0-14)"
//                 value={formData.soilPH}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg p-3"
//                 min={0}
//                 max={14}
//               />
//             </div>
//           </section>

//           {/* Climate Info */}
//           <section>
//             <h3 className="text-lg font-semibold mb-4">Climate Information</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <select
//                 name="climateType"
//                 value={formData.climateType}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg p-3"
//               >
//                 <option value="rainy">Rainy</option>
//                 <option value="dry">Dry</option>
//                 <option value="humid">Humid</option>
//                 <option value="arid">Arid</option>
//                 <option value="temperate">Temperate</option>
//                 <option value="continental">Continental</option>
//                 <option value="others">Others</option>
//               </select>
//               <select
//                 name="season"
//                 value={formData.season}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg p-3"
//               >
//                 <option value="">--</option>
//                 <option value="spring">Spring</option>
//                 <option value="summer">Summer</option>
//                 <option value="autumn">Autumn</option>
//                 <option value="winter">Winter</option>
//                 <option value="all-year">All Year</option>
//               </select>
//             </div>
//           </section>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
//           >
//             Submit Data
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { submitData } from "../../services/simulation-input.services";
import {
  Box,
  TextField,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper,
  Container,
} from "@mui/material";

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

  const handleChange = (e: any) => {
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

  // reusable styles
  const rowStyle = {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
    marginBottom: "16px",
  };
  const itemStyle = { flex: "1 1 45%" };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #4a90e2 0%, #50e3c2 100%)", // same as login
        p: 3,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={8}
          sx={{
            p: { xs: 4, sm: 6 },
            borderRadius: 3,
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255,255,255,0.9)",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            align="center"
            sx={{ fontWeight: "bold", mb: 3 }}
          >
            Simulation Input
          </Typography>

          <form onSubmit={handleSubmit}>
        <br />
        <div>Farmer informations</div>
        <br />

        <Box sx={rowStyle}>
          <TextField
            fullWidth
            label="Farmer Name"
            name="farmerName"
            value={formData.farmerName}
            onChange={handleChange}
            sx={itemStyle}
          />
          <TextField
            fullWidth
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            sx={itemStyle}
          />
        </Box>

        <Box sx={rowStyle}>
          <TextField
            fullWidth
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            sx={itemStyle}
          />

          <FormControl fullWidth sx={itemStyle}>
            <InputLabel id="experience-label">Experience</InputLabel>
            <Select
              labelId="experience-label"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              label="Experience"
            >
              <MenuItem value="beginner">Beginner</MenuItem>
              <MenuItem value="intermediate">Intermediate</MenuItem>
              <MenuItem value="experienced">Experienced</MenuItem>
              <MenuItem value="professional">Professional</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <br />
        <div>Farm informations</div>
        <br />

        <Box sx={rowStyle}>
          <FormControl fullWidth sx={itemStyle}>
            <InputLabel id="farmSize-label">Farm Size</InputLabel>
            <Select
              labelId="farmSize-label"
              name="farmSize"
              value={formData.farmSize}
              onChange={handleChange}
              label="Farm Size"
            >
              <MenuItem value="<5ha">{"<5ha"}</MenuItem>
              <MenuItem value="5-20ha">5-20ha</MenuItem>
              <MenuItem value="20-50ha">20-50ha</MenuItem>
              <MenuItem value=">50ha">{">50ha"}</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth sx={itemStyle}>
            <InputLabel id="mainCrop-label">Main Crop</InputLabel>
            <Select
              labelId="mainCrop-label"
              name="mainCrop"
              value={formData.mainCrop}
              onChange={handleChange}
              label="Main Crop"
            >
              <MenuItem value="fruits">Fruits</MenuItem>
              <MenuItem value="legumes">Legumes</MenuItem>
              <MenuItem value="oilseeds">Oilseeds</MenuItem>
              <MenuItem value="industrial">Industrial</MenuItem>
              <MenuItem value="cereals">Cereals</MenuItem>
              <MenuItem value="others">Others</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={rowStyle}>
          <FormControl fullWidth sx={itemStyle}>
            <InputLabel id="farmingPractice-label">Farming Practice</InputLabel>
            <Select
              labelId="farmingPractice-label"
              name="farmingPractice"
              value={formData.farmingPractice}
              onChange={handleChange}
              label="Farming Practice"
            >
              <MenuItem value="monoculture">Monoculture</MenuItem>
              <MenuItem value="rotation">Rotation</MenuItem>
              <MenuItem value="mixed">Mixed</MenuItem>
              <MenuItem value="agroforestry">Agroforestry</MenuItem>
              <MenuItem value="hydroponic">Hydroponic</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth sx={itemStyle}>
            <InputLabel id="irrigation-label">Irrigation</InputLabel>
            <Select
              labelId="irrigation-label"
              name="irrigation"
              value={formData.irrigation}
              onChange={handleChange}
              label="Irrigation"
            >
              <MenuItem value="rainfed">Rainfed</MenuItem>
              <MenuItem value="drip">Drip</MenuItem>
              <MenuItem value="sprinkler">Sprinkler</MenuItem>
              <MenuItem value="surface">Surface</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={rowStyle}>
          <FormControl fullWidth sx={itemStyle}>
            <InputLabel id="method-label">Method</InputLabel>
            <Select
              labelId="method-label"
              name="method"
              value={formData.method}
              onChange={handleChange}
              label="Method"
            >
              <MenuItem value="organic">Organic</MenuItem>
              <MenuItem value="conventional">Conventional</MenuItem>
              <MenuItem value="integrated">Integrated</MenuItem>
              <MenuItem value="conservation">Conservation</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth sx={itemStyle}>
            <InputLabel id="technologyLevel-label">Technology Level</InputLabel>
            <Select
              labelId="technologyLevel-label"
              name="technologyLevel"
              value={formData.technologyLevel}
              onChange={handleChange}
              label="Technology Level"
            >
              <MenuItem value="">--</MenuItem>
              <MenuItem value="traditional">Traditional</MenuItem>
              <MenuItem value="semi-mechanized">Semi-mechanized</MenuItem>
              <MenuItem value="mechanized">Mechanized</MenuItem>
              <MenuItem value="precision">Precision</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={rowStyle}>
          <FormControl fullWidth sx={itemStyle}>
            <InputLabel id="biology-label">Biology</InputLabel>
            <Select
              labelId="biology-label"
              name="biology"
              value={formData.biology}
              onChange={handleChange}
              label="Biology"
            >
              <MenuItem value="">--</MenuItem>
              <MenuItem value="aerolic">Aerolic</MenuItem>
              <MenuItem value="submarine">Submarine</MenuItem>
              <MenuItem value="terrestrial">Terrestrial</MenuItem>
              <MenuItem value="others">Others</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth sx={itemStyle}>
            <InputLabel id="inventionLevel-label">Invention Level</InputLabel>
            <Select
              labelId="inventionLevel-label"
              name="inventionLevel"
              value={formData.inventionLevel}
              onChange={handleChange}
              label="Invention Level"
            >
              <MenuItem value="">--</MenuItem>
              <MenuItem value="basic">Basic</MenuItem>
              <MenuItem value="applied">Applied</MenuItem>
              <MenuItem value="experimental">Experimental</MenuItem>
              <MenuItem value="advanced">Advanced</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <br />
        <div>Soil informations</div>
        <br />

        <Box sx={rowStyle}>
          <FormControl fullWidth sx={itemStyle}>
            <InputLabel id="soilType-label">Soil Type</InputLabel>
            <Select
              labelId="soilType-label"
              name="soilType"
              value={formData.soilType}
              onChange={handleChange}
              label="Soil Type"
            >
              <MenuItem value="sandy">Sandy</MenuItem>
              <MenuItem value="loamy">Loamy</MenuItem>
              <MenuItem value="clayey">Clayey</MenuItem>
              <MenuItem value="peaty">Peaty</MenuItem>
              <MenuItem value="chalky">Chalky</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            type="number"
            label="Soil pH (0-14)"
            name="soilPH"
            value={formData.soilPH}
            onChange={handleChange}
            inputProps={{ min: 0, max: 14 }}
            sx={itemStyle}
          />
        </Box>

        <br />
        <div>Climate informations</div>
        <br />

        <Box sx={rowStyle}>
          <FormControl fullWidth sx={itemStyle}>
            <InputLabel id="climateType-label">Climate Type</InputLabel>
            <Select
              labelId="climateType-label"
              name="climateType"
              value={formData.climateType}
              onChange={handleChange}
              label="Climate Type"
            >
              <MenuItem value="rainy">Rainy</MenuItem>
              <MenuItem value="dry">Dry</MenuItem>
              <MenuItem value="humid">Humid</MenuItem>
              <MenuItem value="arid">Arid</MenuItem>
              <MenuItem value="temperate">Temperate</MenuItem>
              <MenuItem value="continental">Continental</MenuItem>
              <MenuItem value="others">Others</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth sx={itemStyle}>
            <InputLabel id="season-label">Season</InputLabel>
            <Select
              labelId="season-label"
              name="season"
              value={formData.season}
              onChange={handleChange}
              label="Season"
            >
              <MenuItem value="">--</MenuItem>
              <MenuItem value="spring">Spring</MenuItem>
              <MenuItem value="summer">Summer</MenuItem>
              <MenuItem value="autumn">Autumn</MenuItem>
              <MenuItem value="winter">Winter</MenuItem>
              <MenuItem value="all-year">All-year</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 2 }}
        >
          Submit Data
        </Button>
      </form>
        </Paper>
      </Container>
    </Box>
  );
}
