import { CustomTextFieldProps } from "types/index";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment, TextField, TextFieldProps } from "@mui/material";
import React from "react";

export function ITextField(props: CustomTextFieldProps & TextFieldProps) {
    const {
        formik,
        showRequireSymbol,
        name, type, label, placeholder,
        disabled, required, multiline, size, autoFocus,
        autoComplete, variant, rows, maxRows, color,
        InputLabelProps, InputProps,
    } = props;

    const [showPass, setShowPass] = React.useState(false);
    const handleClickShowPassword = () => {
        setShowPass(!showPass);
    }

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }

    return (
        <TextField
            fullWidth
            rows={rows}
            maxRows={maxRows}
            multiline={multiline}
            disabled={disabled}
            autoFocus={autoFocus ? autoFocus : false}
            autoComplete={autoComplete}
            color={color}
            size={size ? size : "medium"}
            variant={!variant ? "standard" : variant}
            type={type ? (type === "password" && showPass ? "text" : type) : "text"}
            required={required}
            label={label}
            placeholder={placeholder}
            name={name}
            value={name && formik.values[name]}
            onChange={formik.handleChange}
            error={formik.touched[name || ""] && Boolean(formik.errors[name || ""])}
            helperText={(formik.touched as any)[name || ""] && (formik.errors as any)[name || ""]}
            InputProps={type === "password" ? {
                endAdornment: (
                    <InputAdornment position="end" >
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPass ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>)
                ,
                ...InputProps
            } :
                InputProps
            }
            InputLabelProps={{
                ...InputLabelProps,
                shrink: false
            }}
            sx={{
                "& label": {
                    transform: "none",
                    display: "flex",
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '17px',
                    height: '100%',
                    "& > span": {
                        display: showRequireSymbol ? "flex" : "none",
                        alignItems: "center",
                    },
                },
            }}
        />
    );
}
