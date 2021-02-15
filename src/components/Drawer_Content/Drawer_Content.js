import React, { useState } from 'react';
import {createDrawerNavigator, DrawerContent, DrawerContentScrollView, DrawerItem,DrawerItemList} from '@react-navigation/drawer';
import {Button, View, Text} from "react-native";
import {TouchableOpacity, StyleSheet} from "react-native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome5';

export function Drawer_Content(props) {
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <View style={styles.menuTitleBar}>
                        <Text style={styles.menuTitleText}>Menu</Text>
                    </View>
                    {/*<DrawerItem icon={({color,size})=>(*/}
                    {/*    <Icon name="dumbbell" size={size} color={color}/>*/}
                    {/*)} label='WorkOut' labelStyle={styles.buttonStyleText} onPress={() => {}}/>*/}
                    <View style={{marginLeft: '15%'}}>
                    <TouchableOpacity style={styles.buttonStyle}
                                      onPress={() =>props.navigation.navigate('WorkOut') }>
                        <View style={styles.icons}>
                        <Icon name="dumbbell" size={30} color="#a4a2aa" />
                        </View>
                        <Text style={styles.buttonStyleText}>WorkOut</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle}
                                      onPress={() => props.navigation.toggleDrawer()}>
                        <View style={styles.icons}>
                            <Icon name="walking" size={30} color="#a4a2aa" />
                        </View>
                        <Text style={styles.buttonStyleText}>Schedule</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle}
                                      onPress={() =>props.navigation.navigate('settings') }>
                        <View style={styles.icons}>
                            <Icon name="cog" size={30}  color="#a4a2aa" />
                        </View>
                        <Text style={styles.buttonStyleText}>Setting</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle}
                                      onPress={() => props.navigation.toggleDrawer()}>
                        <View style={styles.icons}>
                            <Icon name="user-alt" size={30} color="#a4a2aa" />
                        </View>
                        <Text style={styles.buttonStyleText}>Support</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </DrawerContentScrollView>
        </View>
    );}
