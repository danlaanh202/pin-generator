import { useContext, useState } from "react";
import { DrawerContext } from "../contexts/DrawerContext";
import { DRAWER_WIDTH } from "../const";
import { IDrawerContextValue } from "../interface";
import { useTheme } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

const Generate = () => {
  const { showDrawer, handleCloseDrawer } =
    useContext<IDrawerContextValue>(DrawerContext);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  return (
    <>
      <Drawer
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={!!showDrawer}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: "flex-end",
          }}
        >
          <IconButton
            sx={{ marginBlock: "8px" }}
            size="large"
            onClick={() => handleCloseDrawer()}
          >
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
            <Typography>Hide</Typography>
          </IconButton>
        </div>
        <Divider />
        <Box
          component="div"
          marginBlock={1}
          paddingInline={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <Box component="form">
            <TextField
              fullWidth
              label="Enter any URL or sitemap URL..."
              id="fullWidth"
              focused
              variant="filled"
              sx={{ borderRadius: "5px" }}
            />
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body1">Number of pins to generate</Typography>
            <TextField
              type="number"
              focused
              variant="filled"
              size="small"
              sx={{
                padding: 0,
                borderRadius: "5px",
                "& .MuiFilledInput-input": {
                  width: "75px",
                  padding: "8px 4px",
                },
              }}
            />
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button variant="contained" color="primary" sx={{ width: "60%" }}>
              GENERATE PINS
            </Button>
            <Button variant="contained" color="secondary" sx={{ width: "35%" }}>
              SHUFFLE
            </Button>
          </Box>
          <Button variant="contained" color="primary">
            SCHEDULE ALL PINS
          </Button>
          <Autocomplete
            id="asynchronous-autocomplete"
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            options={[{ value: "1", label: "hehe" }]}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select boards to pin to"
                variant="filled"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {loading ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                }}
              />
            )}
          />
        </Box>
      </Drawer>
    </>
  );
};

export default Generate;
