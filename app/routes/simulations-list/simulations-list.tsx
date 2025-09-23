import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Card,
  CardContent,
} from "@mui/material";
import DotsSpinner from "~/shared/dotsSpinner.shared";
import SwalService from "~/shared/sweetAlert.shared";
import { getSimulations } from "~/services/simulations.services";
interface Simulation {
  id: string;
  farmerName: string;
  location: string;
  crop: string;
  date: string;
  result: string;
}

export default function SimulationsList() {
  const [simulations, setSimulations] = useState<Simulation[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    const loadSimulations = async () => {
      try {
        const res = await getSimulations();
        if (res.success) {
          setSimulations(res.data);
        } else {
          SwalService.showError("Failed to load simulations.");
        }
      } catch (err) {
        SwalService.showError("Error fetching simulations.");
      } finally {
        setLoading(false);
      }
    };
    loadSimulations();
  }, []);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 4 }}
      >
        My Simulations List
      </Typography>

      <Card sx={{ mb: 4, backgroundColor: "rgba(255,255,255,0.9)" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Total Simulations
          </Typography>
          <Typography variant="h4" color="primary" fontWeight="bold">
            {simulations.length}
          </Typography>
        </CardContent>
      </Card>

      <Paper elevation={6} sx={{ borderRadius: 2, overflow: "hidden" }}>
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
            <DotsSpinner />
          </Box>
        ) : (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                  <TableCell><b>Farmer Name</b></TableCell>
                  <TableCell><b>Location</b></TableCell>
                  <TableCell><b>Crop</b></TableCell>
                  <TableCell><b>Simulation Date</b></TableCell>
                  <TableCell><b>Result</b></TableCell>
                  <TableCell><b>Actions</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {simulations.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} align="center">
                      No simulations found
                    </TableCell>
                  </TableRow>
                ) : (
                  simulations.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((sim) => (
                      <TableRow key={sim.id}>
                        <TableCell>{sim.farmerName}</TableCell>
                        <TableCell>{sim.location}</TableCell>
                        <TableCell>{sim.crop}</TableCell>
                        <TableCell>{sim.date}</TableCell>
                        <TableCell>{sim.result}</TableCell>
                        <TableCell>
                          <Typography
                            variant="body2"
                            color="primary"
                            sx={{ cursor: "pointer" }}
                            onClick={() => SwalService.showInfo("View details clicked!")}
                          >
                            View
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))
                )}
              </TableBody>
            </Table>
            {simulations.length > 0 && (
              <TablePagination
                component="div"
                count={simulations.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[5, 10, 20]}
              />
            )}
          </TableContainer>
        )}
      </Paper>
    </Container>
  );
}
