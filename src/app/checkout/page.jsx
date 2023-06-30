"use client";
import { Delete, RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  RadioGroup,
  Step,
  StepButton,
  Stepper,
  TextField,
  Typography
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import ae from "./(assets)/ae.png";
import amazon from "./(assets)/amazon.png";
import applepay from "./(assets)/applepay.jpg";
import master from "./(assets)/master.png";
import paypal from "./(assets)/paypal.png";
import pot2 from "./(assets)/pot2.png";
import treepot from "./(assets)/tree1.png";
import visa from "./(assets)/visa.png";
import Link from "next/link";


const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const steps = ["Shipping", "Delivery", "Payment"];
  const [step2Value, setStep2Value] = useState("standard");
  const [step3Value, setStep3Value] = useState("cash");
  const plants = [
    {
      id: 1,
      name: "Natural Plant",
      price: 50,
      img: treepot,
    },
    {
      id: 2,
      name: "Plant Custom Pot",
      price: 20,
      img: pot2,
    },
  ];

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };


  return (
    <div className="w-screen h-screen">
      <div id="header" className="w-screen h-24 bg-[#C1DCDC]">
        <Grid container height={"100%"} alignContent={"center"} width={"100%"}>
          <Grid item pl={10} xs={4}>
            <Typography variant="h4" fontWeight={700}>
              Add Info
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Box sx={{ width: "100%" }}>
              <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                  <Step key={label} completed={completed[index]}>
                    <StepButton color="inherit" onClick={handleStep(index)}>
                      {label}
                    </StepButton>
                  </Step>
                ))}
              </Stepper>
             
            </Box>
          </Grid>
        </Grid>
      </div>

      <div className="w-screen mt-8">
        <Grid container height={"100%"} alignContent={"center"} width={"100%"}>
          <Grid
            item
            pl={10}
            xs={4}
            display={"flex"}
            flexDirection={"column"}
            rowGap={3}
          >
            <Typography variant="h5" fontWeight={400}>
              Order Summary
            </Typography>
            <Box width={"100%"} height={"100%"}>
              {plants.map((plant) => (
                <Grid
                  container
                  key={plant.id}
                  className="w-full"
                  rowSpacing={2}
                  mb={4}
                  pb={1}
                  borderBottom={"1px solid #ccc"}
                >
                  <Grid item xs={3}>
                    <Image src={plant.img} alt="tree1" />
                  </Grid>
                  <Grid item xs={7}>
                    <div className="text-lg font-bold">{plant.name}</div>
                    <div className="font-semibold text-gray-500">
                      ${plant.price}
                    </div>
                    <div>Quantity: 3</div>
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    display={"flex "}
                    justifyContent={"flex-end"}
                  >
                    <IconButton>
                      <Delete />
                    </IconButton>
                  </Grid>
                </Grid>
              ))}
            </Box>

            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography
                variant="h6"
                fontWeight={500}
                className="text-gray-400"
              >
                Subtotal
              </Typography>
              <Typography variant="h6" fontWeight={500}>
                $210
              </Typography>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              borderTop={"1px solid #ccc"}
              pt={2}
            >
              <Typography
                variant="h6"
                fontWeight={500}
                className="text-gray-400"
              >
                Total Due
              </Typography>
              <Typography
                variant="h5"
                fontWeight={500}
                className="text-[#6B72D6]"
              >
                $220
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={8}>
            {activeStep === 0 && (
              <div className="w-full pl-40">
                <Typography variant="h6" fontWeight={500}>
                  Contact Details
                </Typography>
                <div className="mt-4 flex justify-start">
                  <TextField
                    id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                    sx={{
                      width: "40%",
                      mr: 6,
                    }}
                  />

                  <TextField
                    id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                    sx={{
                      width: "40%",
                    }}
                  />
                </div>
                <div className="mt-4">
                  <TextField
                    id="outlined-basic"
                    label="Phone Number"
                    variant="outlined"
                    sx={{
                      width: "85%",
                    }}
                  />
                </div>
                <Typography variant="h6" fontWeight={500} mt={5}>
                  Shipping Details
                </Typography>
                <div className="mt-4">
                  <TextField
                    id="outlined-basic"
                    label="Flat/House no."
                    variant="outlined"
                    sx={{
                      width: "85%",
                    }}
                  />
                </div>
                <div className="mt-4">
                  <TextField
                    id="outlined-basic"
                    label="Address"
                    variant="outlined"
                    sx={{
                      width: "85%",
                    }}
                  />
                </div>
                <div className="mt-4 flex justify-start">
                  <TextField
                    id="outlined-basic"
                    label="City"
                    variant="outlined"
                    sx={{
                      width: "40%",
                      mr: 6,
                    }}
                  />

                  <TextField
                    id="outlined-basic"
                    label="State"
                    variant="outlined"
                    sx={{
                      width: "40%",
                    }}
                  />
                </div>
              </div>
            )}

            {activeStep === 1 && (
              <div className="w-full pl-40">
                <Typography variant="h6" fontWeight={500}>
                  Delivery Options
                </Typography>
                <FormControl
                  sx={{
                    mt: 4,
                    width: "100%",
                  }}
                >
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="a"
                    name="radio-buttons-group"
                    className="w-full flex flex-col justify-between"
                  >
                   
                        <Box
                          width={"100%"}
                          display={"flex"}
                          justifyContent={"space-between"}
                          px={4}
                          py={1.5}
                        >
                          <Box display={"flex"} alignItems={"center"}>
                            <IconButton onClick={() => setStep2Value('standard')}>
                            {step2Value === 'standard' ? <RadioButtonChecked color="#6B72D6" /> : <RadioButtonUnchecked />}
                            </IconButton>
                            <Typography variant="body2">
                              5- 10 days shipping
                            </Typography>
                          </Box>
                          <Typography className="text-[#67CB93]">
                            FREE
                          </Typography>
                        </Box>
                    
             
                        <Box
                          width={"100%"}
                          display={"flex"}
                          justifyContent={"space-between"}
                          px={4}
                          py={1.5}
                        >
                          <Box display={"flex"} alignItems={"center"}>
                          <IconButton onClick={() => setStep2Value('fast')}>
                            {step2Value === 'fast' ? <RadioButtonChecked color="#6B72D6" /> : <RadioButtonUnchecked />}
                            </IconButton>
                            <Typography variant="body2">
                              1 - 2 days business shipping
                            </Typography>
                          </Box>
                          <Typography className="">+ $10</Typography>
                        </Box>
             
                
                        <Box
                          width={"100%"}
                          display={"flex"}
                          justifyContent={"space-between"}
                          px={4}
                          py={1.5}
                        >
                          <Box display={"flex"} alignItems={"center"}>
                            <IconButton onClick={() => setStep2Value('quick')}>
                            {
                              step2Value === 'quick' ? <RadioButtonChecked color="#6B72D6" /> : <RadioButtonUnchecked />
                            }
                      </IconButton>
                            <Typography variant="body2">
                              Same day delivery
                            </Typography>
                          </Box>
                          <Typography>+ $20</Typography>
                        </Box>
                   
                  </RadioGroup>
                </FormControl>
              </div>
            )}
            {activeStep === 2 && (
              <div className="w-full pl-40">
                <Typography variant="h6" fontWeight={500}>
                  Payment Methods
                </Typography>
                <FormControl
                  sx={{
                    mt: 4,
                    width: "100%",
                  }}
                >
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="a"
                    name="radio-buttons-group"
                    className="w-full flex flex-col justify-between"
                  >
                 
                        <Box
                          width={"100%"}
                          display={"flex"}
                          justifyContent={"space-between"}
                          px={4}
                          py={1.5}
                        >
                          <Box display={"flex"} alignItems={"center"}>
                         
                            <IconButton onClick={() => setStep3Value('cash')}>
                            {
                              step3Value === 'cash' ? <RadioButtonChecked color="#6B72D6" /> : <RadioButtonUnchecked />
                            }
                            </IconButton>
                            <Box className='flex flex-col justify-start'>
                            <Typography variant="body2">
                              Pay on delivery
                            </Typography>
                            <Typography variant="caption" className='text-[#828282]'>
                              Pay with cash on delivery
                            </Typography>
                            </Box>
                          </Box>
                          
                        </Box>
                  
                  
                        <Box
                          width={"100%"}
                          display={"flex"}
                          justifyContent={"space-between"}
                          px={4}
                          py={1.5}
                        >
                          <Box display={"flex"} alignItems={"center"}>
                            <IconButton onClick={() => setStep3Value('debit')}>
                            {
                              step3Value === 'debit' ? <RadioButtonChecked color="#6B72D6" /> : <RadioButtonUnchecked />
                            }
                            </IconButton>
                            <Box className='flex flex-col justify-start'>
                            <Typography variant="body2">
                              Credit/Debit Card
                            </Typography>
                            <Typography variant="caption" className='text-[#828282]'>
                              Pay with your credit or debit card
                            </Typography>
                            </Box>
                          </Box>
                          <Box className='flex justify-center items-center'>
                            <Image src={visa} alt="visa" className="rounded-full w-8 h-8" />
                            <Image src={master} alt="visa" className="rounded-full w-12 h-8 mx-4" />
                            <Image src={ae} alt="visa" className="rounded-full w-8 h-8" />
                          </Box>
                        </Box>
                   
                 
                        <Box
                          width={"100%"}
                          display={"flex"}
                          justifyContent={"space-between"}
                          px={4}
                          py={1.5}
                        >
                          <Box display={"flex"} alignItems={"center"}>
                          <IconButton onClick={() => setStep3Value('bank')}>
                            {
                              step3Value === 'bank' ? <RadioButtonChecked color="#6B72D6" /> : <RadioButtonUnchecked />
                            }
                            </IconButton>
                            <Box className='flex flex-col justify-start'>
                            <Typography variant="body2">
                              Direct Bank Transfer
                            </Typography>
                            <Typography variant="caption" className='text-[#828282]'>
                            Make payment directly through bank account.
                            </Typography>
                            </Box>
                          </Box>
                          <Box>
                            </Box>
                        </Box>
                    
                  
                        <Box
                          width={"100%"}
                          display={"flex"}
                          justifyContent={"space-between"}
                          px={4}
                          py={1.5}
                        >
                          <Box display={"flex"} alignItems={"center"}>
                          <IconButton onClick={() => setStep3Value('other')}>
                            {
                              step3Value === 'other' ? <RadioButtonChecked color="#6B72D6" /> : <RadioButtonUnchecked />
                            }
                            </IconButton>
                            <Box className='flex flex-col justify-start'>
                            <Typography variant="body2">
                            Other Payment Methods
                            </Typography>
                            <Typography variant="caption" className='text-[#828282]'>
                            Make payment through Gpay, Paypal, Paytm etc
                            </Typography>
                            </Box>
                          </Box>
                          <Box>
                          <Box className='flex justify-center items-center'>
                            <Image src={applepay} alt="visa" className="rounded-full w-8 h-8" />
                            <Image src={amazon} alt="visa" className="rounded-full w-8 h-8 mx-4" />
                            <Image src={paypal} alt="visa" className="rounded-full w-8 h-8" />
                          </Box>
                            </Box>
                        </Box>
                  
                  </RadioGroup>
                </FormControl>
              </div>
            )}


          </Grid>
        </Grid>
      </div>

      <div className="px-16 mt-8">
        {allStepsCompleted() ? (
          <React.Fragment>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />

              {activeStep !== steps.length && (
                <Button onClick={handleComplete}>
                  {completedSteps() === totalSteps() - 1
                    ? (
                      <Link href="/checkout/success">
                        Complete Order
                      </Link>
                    )
                    : "Complete Step"}
                </Button>
              )}
            </Box>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Checkout;
