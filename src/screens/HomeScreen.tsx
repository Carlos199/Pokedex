import React from 'react';
import  {Text, Image} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    return (
        <>
           <Image 
           source={require('../assets/pokebola.png')}
           style={styles.pokebolaBG}
           />
           <Text style={{
               ...styles.title,
               ...styles.globalMargin,
               top: top + 20
           }}>Pokedex</Text>
        </>
    )
}