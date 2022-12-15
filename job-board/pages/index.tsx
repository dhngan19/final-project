import { Box, Stack } from "@mui/material";
import { AuthLayout } from "../layouts/auth";
import HcmusLogo from "@/public/logo.svg";
import Image from "next/image";
import styles from "@/styles/Login.module.scss";
import classNames from "classNames/bind";
import { CustomPaper } from "@/components/Neumorphism/Paper";
import Link from "next/link";
import { Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { ITextField } from "@/components/CustomField/TextField";

const cx = classNames.bind(styles);

const Home: NextPageWithLayout = (props) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      scope: "",
    },
    validationSchema: yup.object({
      username: yup.string().email().required(),
      password: yup.string().required(),
    }),
    onSubmit: async () => {
      try {
        // await login(values);
      } catch (error: any) {
      } finally {
      }
    },
  });

  return (
    <>
      <Box className={cx("login")}>
        <Stack className={cx("login__container")}>
          <Box>
            <Image width={150} height={150} src={HcmusLogo} alt="HCMUS-Logo" />
          </Box>
          <Box>
            <CustomPaper
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box className={cx("form__title")}>
                <Typography component="div">Đăng nhập</Typography>
              </Box>
              <Box className={cx("form__fields")} sx={{ flex: "1" }}>
                <Box
                  className={cx("form__fields__wrapper")}
                  component="form"
                  noValidate
                  autoComplete="off"
                  onSubmit={formik.handleSubmit}
                  sx={{
                    "& .MuiFormControl-root": {
                      mb: 3,
                    },
                  }}
                >
                  <ITextField
                    placeholder=""
                    type="email"
                    label=""
                    variant="standard"
                    color="primary"
                    name="username"
                    formik={formik}
                    required
                    showRequireSymbol={false}
                    InputLabelProps={{
                      sx: {
                        color: (theme) => theme.palette.text.primary,
                      },
                    }}
                    InputProps={{
                      sx: {
                        "& input:-internal-autofill-selected": {
                          WebkitBoxShadow: "0 0 0 30px white inset !important",
                        },
                      },
                    }}
                  />
                  <ITextField
                    placeholder=""
                    autoComplete="off"
                    type="password"
                    label=""
                    variant="standard"
                    color="primary"
                    name="password"
                    formik={formik}
                    required
                    showRequireSymbol={false}
                    InputLabelProps={{
                      sx: {
                        color: (theme) => theme.palette.text.primary,
                      },
                    }}
                    InputProps={{
                      sx: {
                        "& input:-internal-autofill-selected": {
                          WebkitBoxShadow: "0 0 0 30px white inset !important",
                        },
                      },
                    }}
                  />
                  <Box textAlign={"right"}>
                    <Link href="/forgot-password" passHref>
                      {/* <LinkMui color="#1853C2" fontWeight={400} fontSize={"14px"} underline='hover'>{trans.login.forgotLinkText}</LinkMui> */}
                    </Link>
                  </Box>
                  {/* <GradiantButton
                    loading={btnLoading}
                    sx={{ width: '100%', mt: '26px' }}
                    type="submit"
                  >
                    {trans.login.submitText}
                  </GradiantButton> */}
                </Box>
              </Box>
            </CustomPaper>
          </Box>
        </Stack>
      </Box>
    </>
  );
};
Home.Layout = AuthLayout;
export default Home;
