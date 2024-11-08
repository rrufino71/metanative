import { Text, TextInput, View, StyleSheet, Button, Alert } from "react-native";
import { useState } from "react";
import { Screen } from "../../components/Screen";
import { useForm } from "../hooks/useForm";
import { MAIL_VALIDATION, PASS_VALIDATION } from "../services/config";
import { getLogin } from "../../lib/auth";
import { ScrollView } from "react-native-web";

export default function SignIn() {
  const initialData = {
    email: "rrufino71@gmail.com",
    password: "",
    errors: {},
  };

  const { form, errors, loading, setLoading, setErrors, handleChange } =
    useForm(initialData, onValidate);

  const [response, setResponse] = useState(null);

  const onValidate = (form) => {
    let isError = false;
    let errors = {};
    let regxCorreo = MAIL_VALIDATION;
    let regxPassword = PASS_VALIDATION;

    if (!form.email.trim()) {
      errors.email = "El E-mail es obligatorio";
      isError = true;
    } else if (!regxCorreo.test(form.email)) {
      errors.email = "El E-mail no parece tener un formato valido";
      isError = true;
    }

    if (!form.password.trim()) {
      errors.password = "La password no puede estar vacio";
      isError = true;
    } else if (!regxPassword.test(form.password)) {
      errors.password = "La password  debe tener entre 8 y 20 digitos";
      isError = true;
    }
    setErrors(errors);
    return isError ? errors : null;
  };

  const onSubmit = async () => {
    let validation = false;
    validation = onValidate(form);
    const { email, password } = form;
    if (!validation) {
      //      const handleLogin = async (email, password) => {
      const result = await getLogin({ email: email, password: password });
      //Alert.alert("Status Resultado", result.message);
      setResponse(result);
      //      };
    }
  };

  return (
    <Screen>
      <Text className="text-white/90 mb-10 text-center text-xl font-bold  mt-24">
        Formulario de Login
      </Text>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          label="e-mail"
          keyboardType="emailAddress"
          placeholder="E-Mail"
          value={form.email}
          onChangeText={(value) => handleChange("email", value)}
        ></TextInput>
        {errors.email && <Text style={styles.error}>{errors.email}</Text>}
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={form.password}
          onChangeText={(value) => handleChange("password", value)}
        />
        {errors.password && <Text style={styles.error}>{errors.password}</Text>}
      </View>

      <View className="mt-10 p-10 b-1">
        <Button title="Login" onPress={onSubmit} />
      </View>
      {response && (
        <Text style={styles.error}>Respuesta: {JSON.stringify(response)}</Text>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginTop: 5,
    justifyContent: "center",
    alignContent: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    padding: 15,
    marginBottom: 12,
    marginHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  error: {
    color: "red",
    marginTop: 0,
    marginHorizontal: 10,
    borderRadius: 5,
  },
});
