import { Image, Text, TouchableOpacity, View } from "react-native";

export default function ScreenStart() {
  return (
    <View className="flex-1 items-center justify-center bg-amber-950 relative">
      <Image
        source={require("@/assets/images/ig.webp")}
        resizeMode="cover"
        className="absolute top-0 left-0 w-full h-full opacity-20"
      />
      <View className="flex flex-col p-8 rounded-lg items-center justify-between h-full">
        <View>
          <Text className="text-lg font-light text-white mb-4">FAMILY</Text>
        </View>
        <View className="flex-1 justify-center items-center">
          <Image
            source={require("@/assets/images/logo.png")}
            resizeMode="cover"
            className="w-48 h-48 rounded-full"
          />
        </View>
        <View className="w-full mb-8 gap-10 flex flex-col justify-center">
          <View className="flex justify-center items-center">
            <Text className="text-4xl font-bold text-amber-600 mb-4">JINDANDU</Text>
            <Text className="text-lg text-white text-center">
              Se conecta a família e amigos através de momentos inesquecíveis.
            </Text>
          </View>

          <TouchableOpacity className="mt-6 bg-amber-600 px-2 py-3 rounded-md blur-md shadow-orange-400 shadow-lg">
            <Text className="text-white text-center font-semibold">
              Começar agora
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
