import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import ThemeContext from '../../contexts/ThemeProvider';
import Banner from '../../components/HomeComponents/Banner';
import LiveContainer from '../../components/HomeComponents/LiveContainer';
import ProfileContainer from '../../components/HomeComponents/ProfileContainer';
import BhajanContainer from '../../components/HomeComponents/BhajanContainer';


export default function All({navigation,setShowComp}) {
    const {theme}=useContext(ThemeContext);
    // console.log(theme);
    return (
        <View>
              {/* <TouchableOpacity onPress={() => navigation.navigate('VideoPlay')} >
                 <Text>Video</Text>
             </TouchableOpacity>  */}
             <Banner />
             <LiveContainer />
             <ProfileContainer fooLive={true} />
             <BhajanContainer />
             {/* <SongsContainer />
             <HomeHaatContainer/>
             <PodcastContainer/>
             <OriginalsContainer setShowComp={setShowComp}/>
             <RecentReplays />
             <SearchOptions navigation={navigation} /> */}
        </View>
    )
}
