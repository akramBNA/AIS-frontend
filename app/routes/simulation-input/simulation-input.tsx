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
import SwalService from "~/shared/sweetAlert.shared";
import { useNavigate } from "react-router";

export default function SimulationInput() {
  const navigate = useNavigate();
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
    soilPH: 7,
    climateType: "rainy",
    season: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields = [
      "farmerName",
      "phoneNumber",
      "location",
      "experience",
      "farmSize",
      "mainCrop",
      "farmingPractice",
      "irrigation",
      "method",
      "soilType",
      "soilPH",
      "climateType",
      "season",
    ];

    const emptyFields = requiredFields.filter(
      (field) => !formData[field as keyof typeof formData]
    );

    if (emptyFields.length > 0) {
      SwalService.showWarning(`Please fill all required fields...`);
      return;
    }

    if (formData.soilPH < 0 || formData.soilPH > 14) {
      SwalService.showWarning("Soil pH must be between 0 and 14");
      return;
    }

    if (!/^\+?\d{6,15}$/.test(formData.phoneNumber)) {
      SwalService.showWarning("Phone number is invalid");
      return;
    }

    try {
      const res = await submitData(formData);
      if (res.success) {
        SwalService.showSuccess("Inputs submitted successfully! You will see the results in a moment.");
      } else {
        SwalService.showError("Error in submitting the form. Please try again later!");
      }
    } catch (err) {
      SwalService.showError("Error in submitting the form. Please try again later!");
    }
  };


  const rowStyle = {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
    marginBottom: "16px",
  };
  const itemStyle = { flex: "1 1 45%" };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
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
          sx={{ fontWeight: "bold", mb: 3 }}>
          Simulation Input
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ color: "gray", mb: 3 }} >
          *All fields are required
        </Typography>

        <form onSubmit={handleSubmit}>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            Farmer informations:
          </Typography>
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

          <Typography variant="subtitle1" sx={{ mb: 2, mt: 4 }}>
            Farm informations:
          </Typography>

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

          <Typography variant="subtitle1" sx={{ mb: 2, mt: 4 }}>
            Soil informations:
          </Typography>

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

          <Typography variant="subtitle1" sx={{ mb: 2, mt: 4 }}>
            Climate informations:
          </Typography>

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

          <Box
            sx={{ display: "flex", gap: 2, mt: 2, flexDirection: { xs: "column", sm: "row" }, }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth >
              Submit Data
            </Button>

            <Button
              variant="contained"              
              color="error"
              fullWidth
              onClick={() => navigate("/mainPage")}>
              Go Back
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}
