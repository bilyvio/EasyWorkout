import React, { useState } from 'react';
import {createDrawerNavigator, DrawerContent, DrawerContentScrollView, DrawerItem,DrawerItemList} from '@react-navigation/drawer';
import {Button, View, Text} from "react-native";
import {TouchableOpacity, StyleSheet} from "react-native";
import styles from "./styles";
import CameraContainer from "../../screens/camera_screen/camera_screen";

export function Drawer_Content(props) {
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={{flex: 1}}>
                    <View style={styles.menuTitleBar}>
                        <Text style={styles.menuTitleText}>Menu</Text>
                    </View>

                    <TouchableOpacity style={styles.buttonStyle}
                                      onPress={() =>props.navigation.navigate('WorkOut') }>
                        <Text style={styles.buttonStyleText}>WorkOut</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle}
                                      onPress={() => props.navigation.toggleDrawer()}>
                        <Text style={styles.buttonStyleText}>Schedule</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle}
                                      onPress={() => props.navigation.toggleDrawer()}>
                        <Text style={styles.buttonStyleText}>Setting</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle}
                                      onPress={() => props.navigation.toggleDrawer()}>
                        <Text style={styles.buttonStyleText}>Support</Text>
                    </TouchableOpacity>
                </View>
            </DrawerContentScrollView>
        </View>
    );}