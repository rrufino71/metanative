import { View,Text } from "react-native";
export function Score({score, maxScore}) {
   const getColors = () =>  {
    const porcentage = (score / maxScore) * 100;
    
    if (porcentage < 40) return "bg-red-500";
    if (porcentage < 98) return "bg-yellow-500";
     return "bg-green-700"

   }
   
   const className = getColors ();

    return (
        <View className={`${className} w-11 h-11 rounded-full justify-center items-center`}>  
            <Text className="text-lg font-bold text-white">{score}</Text>
        </View>

    );
}