import React, {useState, useRef} from 'react';                                                                          //imports
import { View, Text, StyleSheet, Image, Pressable, ScrollView, Linking } from 'react-native';                
import { LinearGradient } from 'expo-linear-gradient';
import contact from './assets/contact_us.png';
import { Audio } from 'expo-av';
import { Sound } from 'expo-av/build/Audio';

export default function App() {

  const [showContact, setShowContact] = useState(false);                                                                //states defined
  const soundRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  console.log(typeof someSuspiciousVariable)

  const playClickSound = async () => {                                                                                  //Click Sound Functoin
    try {
      const { sound } = await Audio.Sound.createAsync(require('./assets/sounds/click.wav'));
      soundRef.current = sound;
      await sound.playAsync();
    } catch {
      console.log('Sound Error.')
    }
  };

  const contactMe = async () => {                   
    console.log('Image pressed.')
    await playClickSound();
    setShowContact(prev => !prev);
  };

  const url='www.linkedin.com/in/dimple-rogha-272075265'

  const openLink = async (url) => {
  const supported = await Linking.canOpenURL(url);
  if (supported) {
    await Linking.openURL(url);
  } else {
    console.log("❌ Can't open this URL:", url);
  }
};

  return (
    <LinearGradient
      colors={['#ff9a9e', '#fad0c4']}
      style={styles.gradient}
    >
      <ScrollView>
      <View style={styles.header}>
        <Pressable onPress={contactMe}                                                                                      //Contact me button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style = {[
          styles.pressable,
          {transform: [{ scale: isHovered ? 1.2: 1}]}
        ]}>
          <View style={{padding:10}}>
            <Image 
            resizeMode = 'contain'
            source={contact}
            style={styles.image} />
          </View>
        </Pressable>
      </View>
      {showContact && (
        <View style={styles.card}>
          <Text style={styles.cardtext}>You can contact me at:</Text>
          <Text style={styles.cardtext}>dimplerogha@gmail.com</Text>
          <Text style={styles.cardtext}>+91 6350475358</Text>
        </View>
      )}


      <View style={styles.body}>                                                                                    {/*Name*/}
        <Text style={styles.heading}>Dimple Rogha</Text>
        <Text style={styles.sub}>Student</Text>
      </View>

      <View style={styles.components}>                                                                              {/*Social Media Links*/}
        <View style={styles.socials}>
          <Pressable 
          onPress={() => Linking.openURL('www.linkedin.com/in/dimple-rogha-272075265')}
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
          style = {{
          transform: [{ scale: isHovered1 ? 1.2: 1}],
          transition: 'transform 0.2s ease-in-out',
          }}>
            <View style={styles.boxes}>
              <Image 
              source={require('./assets/in.jpg')}
              style={styles.socialImages}/>
            </View>
          </Pressable>

          <Pressable 
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
          style = {{
            transform: [{ scale: isHovered2 ? 1.2: 1}],
            transition: 'transform 0.2s ease-in-out',
          }}>
            <View style={styles.boxes}>
              <Image
              source={require('./assets/insta.jpg')}
              style={styles.socialImages}
              />
            </View>
          </Pressable>

          <Pressable 
          onMouseEnter={() => setIsHovered3(true)}
          onMouseLeave={() => setIsHovered3(false)}
          style = {{
            transform: [{ scale: isHovered3 ? 1.2: 1}],
            transition: 'transform 0.2s ease-in-out',
          }}>
            <View style={styles.boxes}>
              <Image
              source={require('./assets/youtube.jpg')}
              style={styles.socialImages}
              />
            </View>
          </Pressable>

          <Pressable 
          onMouseEnter={() => setIsHovered4(true)}
          onMouseLeave={() => setIsHovered4(false)}
          style = {{
            transform: [{ scale: isHovered4 ? 1.2: 1}],
            transition: 'transform 0.2s ease-in-out',
          }}>
            <View style={styles.boxes}>
              <Image
              source={require('./assets/git.png')}
              style={styles.socialImages}
              />
            </View>
          </Pressable>
        </View>

        <View style={styles.imgContainer}>                                                                            {/*Image Container*/}
          <Image 
          source={require('./assets/me.jpg')}
          style={styles.me}
          />
        </View>

        <View style = { styles.project}>                                                                              {/*Project buttons*/}
          <View style={styles.projectbox}>
            <Image
            source={require('./assets/ce.png')}
            style={{
              width:90, 
              height: 90,
              borderRadius: 10,
              margin: 5,
            }} />
          </View>
          <View style={styles.projectbox}>
            <Image
            source={require('./assets/todo.png')}
            style={{
              width:90, 
              height: 90,
              borderRadius: 10,
              margin: 5,
            }} />
          </View>


        </View>
        <View style={styles.des}>                                                                                     {/** Description */}
          <Text style={{
            color:'white', 
            fontWeight: 'bold', 
            fontSize: 24}}>Education:</Text>
          <Text
          style={{
            color: 'white',
            fontSize: 16}}>Diploma in Web Development</Text>

          <Text
          style={{
            color: 'white',
            fontSize: 16,
           // marginBottom: 20
          }}>Pursuing BCA from UPES, Dehradun</Text>

          <Text style={{
            color:'white', 
            fontWeight: 'bold', 
            fontSize: 24}}>Hobbies:</Text>
          <Text
          style={{
            color: 'white',
            fontSize: 16}}>Reading Fiction</Text>

          <Text
          style={{
            color: 'white',
            fontSize: 16
          }}>Travelling</Text>

          <Text
          style={{
            color: 'white',
            fontSize: 16
          }}>Content Creation</Text>

          <Text style={{
            color:'white', 
            fontWeight: 'bold', 
            fontSize: 24}}>Current Address:</Text>
          <Text
          style={{
            color: 'white',
            fontSize: 16}}>Dehradun, Uttrakhand</Text>

          <Text style={{
            color:'white', 
            fontWeight: 'bold', 
            fontSize: 24}}>Permanent Address:</Text>
          <Text
          style={{
            color: 'white',
            fontSize: 16}}>Alwar, Rajasthan</Text>
        </View>
      </View>

      <View style={styles.last}>                                                                                      {/**Skills */}
        <Text style={styles.skilltext}>SKILLS:</Text>
        <View style={styles.skills}>
          <Image
          source={require('./assets/c.jpg')}
          style={{height:45, width: 45, margin: 7, borderRadius: 30}}
          />
          <Image
          source={require('./assets/cplus.jpg')}
          style={{height:45, width: 45, margin: 7, borderRadius: 30}}
          />
          <Image
          source={require('./assets/csharp.jpg')}
          style={{height:45, width: 45, margin: 7, borderRadius: 30}}
          />
          <Image
          source={require('./assets/html.jpg')}
          style={{height:45, width: 45, margin: 7, borderRadius: 30}}
          />
          <Image
          source={require('./assets/css.jpg')}
          style={{height:45, width: 45, margin: 7, borderRadius: 30}}
          />
          <Image
          source={require('./assets/js.jpg')}
          style={{height:45, width: 45, margin: 7, borderRadius: 30}}
          />
          <Image
          source={require('./assets/ts.jpg')}
          style={{height:45, width: 45, margin: 7, borderRadius: 30}}
          />
          <Image
          source={require('./assets/python.jpg')}
          style={{height:45, width: 45, margin: 7, borderRadius: 30}}
          />
          <Image
          source={require('./assets/react.jpg')}
          style={{height:45, width: 45, margin: 7, borderRadius: 30}}
          />
          <Image
          source={require('./assets/unity.jpg')}
          style={{height:45, width: 45, margin: 7, borderRadius: 30}}
          />
          <Image
          source={require('./assets/sql.jpg')}
          style={{height:45, width: 45, margin: 7, borderRadius: 30}}
          />
          
          
        </View>
      </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({                                                                                    //stylesheet
  gradient: {
    flex: 1,
    
  },
  header: {
    padding:20,
    alignItems: 'flex-end',
  },
  body: {
    flex: 1,
    paddingTop: 0,
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    color: 'white',
  },

  image: {
    width: 50,
    height: 50,

  },
  heading: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },

  sub : {
    fontSize: 20,
    color: 'white'
  },

  card: {
    backgroundColor: 'white',
    position: 'absolute',
    top: '40%',
    left: '75%',
    right: '2%',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 1, height: 2},
    shadowRadius: 4,
    elevation: 5,
  },

  cardtext: {
    color: '#333',
    fontSize: 16, 
    marginVertical: 4,
  },

  components: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: '15%'
  },

  socials: {
    padding: 50,
    position: 'absolute',
    top: -150,
    left: -100
  },

  pressable: {
  transitionDuration: '0.2s',  
  transitionProperty: 'transform',
  transitionTimingFunction: 'ease-in-out',
  },

  socialImages: {
    resizeMethod:'contain', 
    height: 70, 
    width: 70,
    margin: 5, 
    borderRadius: 10
  },

  me: {
    resizeMethod: 'contain',
    width: 190,
    height: 270,
    padding: 5,
    position: 'absolute',
    top: 10,
    left: 10,
  },

  project: {
    padding: 50,
    position: 'absolute',
    top: -7,
    left: '40%'
  },

  des: {
    padding: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.27)',
    borderRadius: 10,
    margin: 30,
    height: 400,
    width: 350,
    position: 'absolute',
    top : -40,
    left: '60%',
    
  }, 

  boxes: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
    margin: 40,
    borderRadius: 10,
    shadowColor: 'gray',
    shadowOffset: {height:2, width:1},
    shadowOpacity: 0.5,
    shadowRadius: 2
  },

  imgContainer: {
    height: 290,
    width: 210,
    backgroundColor: 'rgba(255, 255, 255, 0.27)',
    borderRadius: 10,
    padding: 50,
    position: 'absolute',
    // zIndex: 999,
    left: '20%',
    top: 50,
    

  },

  projectbox: {
    height: 100,
    width: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 30,
    shadowColor: 'gray',
    shadowOffset: {height:2, width:1},
    shadowOpacity: 0.5,
    shadowRadius: 2
  },

  skills: {
    backgroundColor: 'rgba(255, 255, 255, 0.27)',
    height: 60,
    width: 700,
    borderRadius: 15,
    flexDirection: 'row'
  },

  skilltext: {
    position: 'absolute',
    top: -25,
    left: '5%',
    fontSize: 20,
    color: 'white'
  },

  last: {
    alignItems: 'center',
    position: 'absolute',
    top:630,
    left: '30%'

  }
});
