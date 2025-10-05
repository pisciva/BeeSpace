import { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import TextInput from "@/components/auth/TextInput";
import Text from "@/components/ui/Text";
import IconGoogle from "@/components/ui/IconGoogle";
import LogoBeeSpace from "@/components/ui/LogoBeeSpace";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View className="w-full h-full justify-center bg-[#FAFAFA] px-12">
            <View className="w-full flex justify-center items-center">
                <LogoBeeSpace />
                <Text className="text-3xl font-bold text-center my-4">Welcome back, Beeps!</Text>
                <Text className="text-[#737373] font-semibold mb-8">Select your method to log in</Text>
            </View>

            <TextInput
                icon={<Feather name="mail" size={20} color="gray" />}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <TextInput
                icon={<Feather name="lock" size={20} color="gray" />}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                showPasswordToggle
                showPassword={showPassword}
                setShowPassword={setShowPassword}
            />

            <TouchableOpacity className="mb-6">
                <Text className="text-[#DC9010] font-semibold">Forgot Password</Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-[#FCBC03] justify-center h-14 rounded-lg mb-4">
                <Text className="text-white text-center text-lg font-bold">Log In</Text>
            </TouchableOpacity>

            <View className="flex-row items-center my-4">
                <View className="flex-1 h-px bg-gray-300" />
                <Text className="mx-3 text-gray-400 font-semibold">or continue with</Text>
                <View className="flex-1 h-px bg-gray-300" />
            </View>

            <TouchableOpacity className="flex-row items-center justify-center border border-gray-300 h-14 rounded-lg mb-4 gap-2">
                <IconGoogle />
                <Text className="text-[#171717] font-bold">Google</Text>
            </TouchableOpacity>

            <View className="flex-row justify-center mt-4">
                <Text className="text-[#404040] font-medium">Don’t have an account? </Text>
                <TouchableOpacity>
                    <Text className="text-[#DC9010] font-semibold">Create an account</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
