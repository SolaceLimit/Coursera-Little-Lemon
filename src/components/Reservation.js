import React from "react";
import { Helmet } from "react-helmet-async";
import { useFormik } from "formik";
import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	Select,
	VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { useAlertContext } from "../context/alertContext";

const ReservationPage = () => {
	const { onOpen } = useAlertContext();

	const ReservationSchema = Yup.object().shape({
		date: Yup.string().required("Required"),
		time: Yup.string().required("Required"),
		guests: Yup.string().required("Required"),
		occasion: Yup.string().required("Required"),
	});

	const formik = useFormik({
		initialValues: {
			date: null,
			time: null,
			guests: null,
			occasion: null,
		},
		onSubmit: () => {
			alert("submitted");
		},
		validationSchema: ReservationSchema,
	});

	return (
		<>
			<Helmet>
				<title>ReservationPage - Little Lemon</title>
				<meta name='description' content='ReservationPage of little lemon' />
				<meta name='og:description' content='ReservationPage of little lemon' />
				<meta name='og:title' content='ReservationPage' />
				<meta
					name='og:image'
					content='https://thenounproject.com/api/private/icons/526867/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABkcKuVfldPJ0o9iMFFPUDZOXZIo_TOdGBS6Lmpt0TB2xmgkgzB9P2pC9ecq0QbZsCvZDV4FpKd5YHObXNId-E-i8Fnfg%3D%3D'
				/>
			</Helmet>
			<VStack>
				<Heading>ReservationPage</Heading>
				<Box>
					<form
						onSubmit={formik.handleSubmit}
						style={{ display: "grid", maxWidth: 200, gap: 20 }}
					>
						<VStack>
							<FormControl
								isInvalid={!!formik?.errors?.date}
								errortext={formik?.errors?.date}
							>
								<FormLabel htmlFor='date'>Choose date</FormLabel>
								<Input
									id='date'
									type='date'
									name='date'
									onChange={formik.handleChange}
									value={formik.values?.date}
								/>
								<FormErrorMessage>{formik.errors?.date}</FormErrorMessage>
							</FormControl>
							<FormControl
								isInvalid={!!formik?.errors?.time}
								errortext={formik?.errors?.time}
							>
								<FormLabel htmlFor='time'>Time of reservation</FormLabel>
								<Select
									id='time'
									name='time'
									onChange={formik.handleChange}
									value={formik.values?.time}
								>
									<option value='Default' />
									<option>17:00</option>
									<option>18:00</option>
									<option>19:00</option>
									<option>20:00</option>
									<option>21:00</option>
									<option>22:00</option>
								</Select>
								<FormErrorMessage>{formik?.errors?.time}</FormErrorMessage>
							</FormControl>
							<FormControl
								isInvalid={!!formik?.errors?.date}
								errortext={formik?.errors?.date}
							>
								<FormLabel htmlFor='guests'>How many guests</FormLabel>
								<Input
									id='guests'
									type='number'
									min={0}
									name='guests'
									onChange={formik.handleChange}
									value={formik.values?.guests}
								/>
								<FormErrorMessage>{formik.errors?.guests}</FormErrorMessage>
							</FormControl>
							<FormControl
								isInvalid={!!formik?.errors?.occasion}
								errortext={formik?.errors?.occasion}
							>
								<FormLabel htmlFor='occasion'>Occasion</FormLabel>
								<Select
									id='occasion'
									name='occasion'
									onChange={formik.handleChange}
									value={formik.values?.occasion}
								>
									<option value='Default' />
									<option>Birthday</option>
									<option>Anniversary</option>
								</Select>
								<FormErrorMessage>{formik?.errors?.occasion}</FormErrorMessage>
							</FormControl>
							<Button
								type='submit'
								colorScheme='purple'
								width='full'
								disabled={formik.isSubmitting}
								defaultValue={"Make Your reservation"}
							>
								Submit
							</Button>
						</VStack>
					</form>
				</Box>
			</VStack>
		</>
	);
};
export default ReservationPage;
