package com.example.sabbirhossain.imageprinting.utility;

/**
 * Created by sabbirhossain on 5/16/16.
 */
public class AppConstant {
    public static boolean customerIdFlag = false;
    public static boolean customerPhotoFlag = false;
    public static boolean nomineeIdFlag = false;
    public static boolean nomineePhotoFlag = false;
    public final static String DEVICE_NAME_ECONNECT_EH = "";
    public static final int PHOTO_DIMENSION = 300;
    public static String PHOTO = "";
    public static String PHOTO_IAMGE_PATH = "";
    public static boolean customerPhotoClicked = false;
    public static boolean nomineePhotoClicked = false;
    public static boolean customerIdBackClicked = false;
    public static boolean customerIdFrontClicked = false;
    public static boolean nomineeIdFrontClicked = false;
    public static boolean nomineeIdBackClicked = false;

    public static void clearAll() {
        customerIdFlag = false;
        customerPhotoFlag = false;
        nomineeIdFlag = false;
        nomineePhotoFlag = false;
    }
}
