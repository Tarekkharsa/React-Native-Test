import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the schema for the form data using zod
const loginSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  mobile: z.string().length(10, { message: "Mobile number must be 10 digits" }),
  countryCode: z
    .string()
    .min(1, { message: "Country code must not be empty" })
    .max(4, { message: "Country code must be less than 4 characters" })
    .regex(/^\+?\d+$/, {
      message:
        "Country code must only contain digits and an optional plus sign",
    }),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

const LoginSection = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    mode: "onChange",
    resolver: zodResolver(loginSchema), // Configuration the validation with the zod schema.
    defaultValues: {
      name: "",
      email: "",
      password: "",
      mobile: "",
      countryCode: "",
    },
  });

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.heading}>Login</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, errors.email && styles.inputError]}
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="email-address"
            />
          )}
          name="email"
        />
        {errors.email && (
          <Text style={styles.error}>{errors.email.message}</Text>
        )}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, errors.name && styles.inputError]}
              placeholder="Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
        />
        {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, errors.password && styles.inputError]}
              placeholder="Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={true}
            />
          )}
          name="password"
        />
        {errors.password && (
          <Text style={styles.error}>{errors.password.message}</Text>
        )}

        <View style={{ flexDirection: "row-reverse", gap: 10, width: "100%" }}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[
                  styles.input,
                  { width: "75%" },
                  errors.mobile && styles.inputError,
                ]}
                placeholder="Mobile"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="phone-pad"
              />
            )}
            name="mobile"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[
                  styles.input,
                  //   { width: "17%" },
                  errors.countryCode && styles.inputError,
                ]}
                placeholder="+971"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="phone-pad"
              />
            )}
            name="countryCode"
          />
        </View>
        {errors.mobile && (
          <Text style={styles.error}>{errors.mobile.message}</Text>
        )}
        {errors.countryCode && (
          <Text style={styles.error}>{errors.countryCode.message}</Text>
        )}

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: "100%",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#000000",
    // fontFamily: "Helvetica-Neue",
  },
  form: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    borderColor: "#d5d5d5",
    borderWidth: 1,
    borderStyle: "solid",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    marginBottom: 10,
  },
  message: {
    height: 150,
  },
  button: {
    backgroundColor: "#102654",
    borderRadius: 15,
    padding: 10,
    alignItems: "center",
    borderColor: "#c9c9c9",
    borderWidth: 1,
    borderStyle: "solid",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  error: {
    color: "red",

    fontSize: 14,
  },
  inputError: {
    borderColor: "red",
  },
});

export default LoginSection;
