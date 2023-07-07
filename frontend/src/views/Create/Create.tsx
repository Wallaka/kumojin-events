import { useEffect, useState } from "react";
import { Grid, TextField, Button, Box, Snackbar, Alert } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "react-query";

type Inputs = {
  name: string;
  description: string;
  location: string;
};

type Data = Inputs & {
  date: Date;
};

const createEvent = async (data: Data): Promise<Event> => {
  const response = await fetch("http://localhost:3001/api/events", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export default function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const defaultDate = new Date();
  const [date, setDate] = useState<Date | null>(defaultDate);
  const [showSnacbkbar, setShowSnackbar] = useState<boolean>(false);

  const { mutateAsync, isSuccess } = useMutation({
    mutationKey: ["create-event"],
    mutationFn: (data: Data) => createEvent(data),
  });

  const handleDateSubmit = (newDate: Date | null) => {
    setDate(newDate);
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // We need to validate the datePicker before triggerring a mutation
    if (!date) {
      console.log("date is mandatory");
      return;
    }

    mutateAsync({ ...data, date });
  };

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  useEffect(() => {
    if (isSuccess) {
      setShowSnackbar(true);
    }
  }, [isSuccess]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ padding: 5 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid item xs={12} sm={10} paddingBottom={2}>
            <TextField
              required
              id="name"
              label="Name"
              fullWidth
              size="small"
              autoComplete="off"
              variant="outlined"
              {...register("name", { required: true, maxLength: 32 })}
            />
            {errors?.name?.type === "maxLength" && (
              <p style={{ color: "red" }}>
                The name must not exceed 32 characters
              </p>
            )}
          </Grid>
          <Grid item xs={12} sm={10} paddingBottom={2}>
            <TextField
              id="outlined-multiline-static"
              label="Description"
              required
              multiline
              fullWidth
              rows={4}
              {...register("description", { required: true })}
            />
          </Grid>
          <Grid item xs={12} sm={10} paddingBottom={2}>
            <TextField
              required
              id="location"
              label="Location"
              fullWidth
              size="small"
              autoComplete="off"
              variant="outlined"
              {...register("location", { required: true })}
            />
          </Grid>
          <Grid item xs={12} sm={4} paddingBottom={2}>
            <DateTimePicker
              label="Pick a date"
              onAccept={handleDateSubmit}
              defaultValue={defaultDate}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button variant="contained" type="submit">
              Save
            </Button>
          </Grid>
        </form>
      </Box>
      <Snackbar
        open={showSnacbkbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          The event has been created !
        </Alert>
      </Snackbar>
    </LocalizationProvider>
  );
}
