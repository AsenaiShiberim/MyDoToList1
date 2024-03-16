import React from "react";
import { Text } from "react-native";

const MainLayout = ({children}) => {
    return (
        <>
            {children}
            <Text>Copyright &copy; 2024</Text>
        </>
    );
    }

export default MainLayout;